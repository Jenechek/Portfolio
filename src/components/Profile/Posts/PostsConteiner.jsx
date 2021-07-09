import {connect} from 'react-redux'
import {newPostTextAC, addPostAC} from './../../../redux/Posts-reducer' 
import Posts from './Posts'

let mapStateToProps = (store) => {
    return {
        state: store.postPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        newPostText: (text) => {
            dispatch(newPostTextAC(text))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts);