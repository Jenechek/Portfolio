import {connect} from 'react-redux'
import { followAC, unFollowAC } from '../../redux/Users-reducer'
import Users from './Users'

let mapStateToProps = (store) => {
    return {
        state: store.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);