
export const todoReducer = (state=[], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				{
					text		: action.text,
					completed	: false,
					id 			: action.id
				}
			];

		case 'TOGGLE_TODO':
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