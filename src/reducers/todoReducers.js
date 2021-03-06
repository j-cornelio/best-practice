import * as TYPES from '../actions/TYPES'

const randomNum 		= () => Math.floor(Math.random() * 1000000000);

export const todoReducer = (state=[], action, test) => {
	switch(action.type){
		case TYPES.ADD_TODO:
			return [
				...state,
				{
					text		: action.text,
					completed	: false,
					id 			: test ? 123 : randomNum() 
				}
			];

		case TYPES.TOGGLE_TODO:
			return state.map( todo => {
				if(todo.id === action.id){
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo;
			});

		default: 
			return state;
	}
};

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default: 
      return state;
  }
};
