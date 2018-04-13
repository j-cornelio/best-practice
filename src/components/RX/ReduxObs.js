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
    applyMiddleware 
}                               from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

const pingEpic = action$ => {
console.log('%c epic ', 'background: gold');

  return action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });
}

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:

      console.log('%c ping ', 'background: gold');
      return { isPinging: true };

    case PONG:
console.log('%c pong ', 'background: gold');
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

const store = createStore(
  pingReducer,
  applyMiddleware(epicMiddleware)
);


//console.log('STORE: ', store.getState())

const Wrapper = () => 
  <Provider store={store}>
    <ReduxObs />
  </Provider>

export default Wrapper;