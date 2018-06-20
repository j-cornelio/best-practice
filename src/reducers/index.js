import { combineReducers } 					from 'redux';
import { todoReducer }							from './todoReducers';
import { reducer as formReducer } 			from 'redux-form';

export default combineReducers({
	todos : todoReducer,
	form  : formReducer,
})

//gets created as store, passed to Provider then connected - passed state as prop
