import * as TYPES from './TYPES'

export const handleAddTodo = (payload) => {
	return {
		type: TYPES.ADD_TODO,
		text: payload
	}
}

export const handleToggleTodo = (payload) => {
	return {
		type: TYPES.TOGGLE_TODO,
		id: payload
	}
}

export const handleVisibility = (filter) => {
	return {
		type: TYPES.SET_VISIBILITY_FILTER,
		filter,
	}
}

export const handleReceive = (text) => {
	return {
		type: TYPES.RECEIVE_MESSAGE,
		text
	}
}

export const handleSend = (text) => {
	return {
		type: TYPES.SEND_MESSAGE,
		text,
	}
}