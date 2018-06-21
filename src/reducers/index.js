import { combineReducers } 					from 'redux';
import { todoReducer, visibilityFilter }	from './todoReducers';
import { reducer as formReducer } 			from 'redux-form';

export default combineReducers({
	todos : todoReducer,
	form  : formReducer,
	visibilityFilter,
})

//gets created as store, passed to Provider then connected - passed state as prop
