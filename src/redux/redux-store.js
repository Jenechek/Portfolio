import {combineReducers, createStore} from 'redux'
import messageReducer from './Message-reducer'
import postReducer from './Posts-reducer';
import usersReducer from './Users-reducer'

let reducers = combineReducers({
    usersPage: usersReducer,
    postPage: postReducer,
    messagePage: messageReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;