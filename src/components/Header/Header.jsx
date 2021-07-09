import logo from './imagies/logo.png'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <div className={style.wrap}>
            <img src={logo} alt="" />
        </div>
    )
}

export default Header;