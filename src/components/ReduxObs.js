import React, { Component }     from 'react';
import { Provider, connect }    from 'react-redux';
import Rx from 'rxjs';
import { 
    createStore, 
    applyMiddleware 
}                               from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

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

let ReduxObs = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);

ReduxObs = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(ReduxObs);

/// redux/configureStore.js
const epicMiddleware = createEpicMiddleware(pingEpic);

const store = createStore(pingReducer,
  applyMiddleware(epicMiddleware)
);

const Wrapper = () => 
  <Provider store={store}>
    <ReduxObs />
  </Provider>

export default Wrapper;