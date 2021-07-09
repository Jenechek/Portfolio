import style from './Users.module.css'

const Users = (props) => {
    return <div className={style.wrap}>
        {
            props.state.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.ava} alt="" />
                </div>
                <div className={style.fol}>
                    {u.follow === true
                        ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                        : <button onClick={() => { props.unFollow(u.id) }}>unFollow</button>}
                </div>
                <span className={style.desc}>
                    <span>
                        <div>{u.name} {u.lastName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;