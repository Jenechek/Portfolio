import {connect} from 'react-redux'
import Messag from './Messag'
import {addMessageAC, newMesAC} from './../../../redux/Message-reducer'

let mapStateToProps = (store) => {
    return {
        state: store.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        newMesText: (text) => {
            dispatch(newMesAC(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Messag)