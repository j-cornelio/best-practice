import { combineReducers } 					from 'redux';
import { todoReducers } 					from './todoReducers';
import { reducer as formReducer } 			from 'redux-form';

export default combineReducers({
	todos : todoReducers,
	form  : formReducer,
})

//gets created as store, passed to Provider then connected - passed state as prop