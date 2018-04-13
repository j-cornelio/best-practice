import { combineReducers } 									from 'redux';
import { 
	todoReducer
} 	from './todoReducers';

export default combineReducers({
	todos : todoReducer,
})

//gets created as store, passed to Provider then connected - passed state as prop