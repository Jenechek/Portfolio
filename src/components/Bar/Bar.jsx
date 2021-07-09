import style from './Bar.module.css'
import { NavLink } from 'react-router-dom'

const Bar = (props) => {
    return (
        <div className={style.wrap}>
            <div className={style.hr}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={style.hr}>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div className={style.hr}>
                <NavLink to='/friends'>Friends</NavLink>
            </div>
            <div className={style.hr}>
                <NavLink to='/users'>Users</NavLink>
            </div>
        </div>
    )
}

export default Bar;