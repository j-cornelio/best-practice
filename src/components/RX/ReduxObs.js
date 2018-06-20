import React     from 'react';
import { Provider, connect }    from 'react-redux';
// eslint-disable-next-line
import Rx from 'rxjs';
/*
  Rx.operators: filter, buffer, dealy, map, mapTo
  Rx.Observable: of, from, ajax
*/

//console.log('%c Rx ', 'background: black; color: lime', Rx);

import { 
    createStore, 
    applyMiddleware,
    compose
}                               from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

const pingEpic = action$ => {
  return action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });
}

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:

      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};

let ReduxObs = ({ isPinging, ping }) => {

  return (
    <div>
      <h4>{isPinging}</h4>
      <h1>is pinging: {isPinging.toString()}</h1>
      <button onClick={ping}>Start PING</button>
    </div>
  );
}

ReduxObs = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(ReduxObs);

/// redux/configureStore.js
const epicMiddleware = createEpicMiddleware(pingEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  pingReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);

const Wrapper = () => 
  <Provider store={store}>
    <ReduxObs />
  </Provider>

export default Wrapper;