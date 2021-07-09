import style from './Messages.module.css'
import MessagConteiner from './Messag/MessagConteiner'
import { NavLink } from 'react-router-dom'

const Messages = (props) => {
    return (
        <div className={style.wrap}>
            <div className={style.dialogs}>
                <div class={style.hr}>
                    <NavLink to='/messages/anna'>Anna</NavLink>
                </div>
                <div class={style.hr}>
                    <NavLink to='/messages/jenia'>Jenia</NavLink>
                </div>
                <div class={style.hr}>
                    <NavLink to='/messages/olesia'>Olesia</NavLink>
                </div>
                <div class={style.hr}>
                    <NavLink to='/messages/pavel'>Pavel</NavLink>
                </div>
            </div>
            <div className={style.routers}>
                <MessagConteiner />
            </div>
        </div>
    )
}

export default Messages;