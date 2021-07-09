import style from './Messag.module.css'
import React from 'react'

const Messag = (props) => {
    let newMessageElement = React.createRef()

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.newMesText(text)
    }

    return (
        <div>
            {
                props.state.messages.map(m => <div className={style.wrap} key={m.id}>
                    {m.message}
                </div>)
            }
            <textarea value={props.state.newMessageText} onChange={onMessageChange} ref={newMessageElement} cols="50" rows="2" placeholder='Введите сообщение...'></textarea>
            <button onClick={() => {props.addMessage()}} >Отправить</button>
        </div>
    )
}
export default Messag;