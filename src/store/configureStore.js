import { 
	createStore,  
	applyMiddleware,
	compose 
} 								            from 'redux';
import rootReducer 				        	from '../reducers';
import { createEpicMiddleware }   			from 'redux-observable';
import rootEpic 				          	from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore( 
  	rootReducer, 
  	composeEnhancers(
	  	applyMiddleware(epicMiddleware)
  	)
  );