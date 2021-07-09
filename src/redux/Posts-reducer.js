import logo from './imagies/polnaref.jpg'

const AddPost = 'AddPost'
const NewPostText = 'NewPostText'

let initialState = {
    PostData: [
        { id: 1, ava: logo, text: 'Fuck you!' },
        { id: 2, ava: logo, text: 'And fuck you to!' },
        { id: 3, ava: logo, text: 'I\'m gay...' }
    ],
    newPostText: '',
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddPost:
            return {
                ...state,
                PostData: [...state.PostData, { id: state.PostData.length + 1, ava: logo, text: state.newPostText }],
                newPostText: ''
            }
        case NewPostText:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state;
    }
}

export const addPostAC = () => (
    { type: AddPost }
)
export const newPostTextAC = (text) => (
    { type: NewPostText, text }
)

export default postReducer;