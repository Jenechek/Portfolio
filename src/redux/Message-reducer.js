const AddMessage = 'AddMessage'
const NewMessageText = 'NewMessageText'

let initialState = {
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fuck you!'},
        {id: 4, message: 'I\'m so sorry...'},
        {id: 5, message: 'Joke! Fuck you!'},
    ],
    newMessageText: '',
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddMessage:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: state.newMessageText}],
                newMessageText: ''
            }
        case NewMessageText:
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return state;
    }
}

export const addMessageAC = () => (
    {type: AddMessage}
)
export const newMesAC = (text) => (
    {type: NewMessageText, text}
)

export default messageReducer;