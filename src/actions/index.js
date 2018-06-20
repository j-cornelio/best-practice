import * as TYPES from './TYPES'

export const handleAddTodo = (payload) => {
	return {
		type: TYPES.ADD_TODO,
		text: payload
	}
}

export const handleToggleTodo = () => {
	return {
		type: TYPES.TOGGLE_TODO
	}
}