import * as TYPES               from '../actions/TYPES'

const initialState = {
    messages: []
}

const handleSendMessage = (state, action) => {
    return {
        ...state,
        messages: [
            ...state.messages,
            action.text
        ]
    }
} 

const handleReceiveMessage = (state, action) => {
    return {
        ...state,
        messages: [
            ...state.messages,
            action.text
        ]
    }
} 

const chatReducer = (state = initialState, action) => {
    const handlers = {
        [TYPES.RECEIVE_MESSAGE]: handleSendMessage,
        [TYPES.SEND_MESSAGE]: handleReceiveMessage
    }

    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

export default chatReducer