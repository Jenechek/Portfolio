import style from './ProfileInfo.module.css'
import logo from './imagies/jotaro.jpg'

const ProfileInfo = (props) => {
    return (
        <div className={style.wrap}>
            <div>
                <img src={logo} alt="" />
                <div className={style.desc}>
                    <div>Jotaro Kujo</div>
                    <div>Age: 17 years</div>
                    <div>Height: 195 cm</div>
                    <div>Weight: 85 kg</div>
                    <div>Top fraza: "Yare, yare daze..."</div>
                    <div>Status: Fuck you'r mother</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;