import React from 'react'
import style from './Posts.module.css'

const Posts = (props) => {
    let newPostTextElement = React.createRef();

    let onPostChange = () => {
        let text = newPostTextElement.current.value;
        props.newPostText(text);
    }

    return <div className={style.wrap}>
        <textarea value={props.state.newPostText} onChange={onPostChange} ref={newPostTextElement} cols="50" rows="2" placeholder='Что у вас нового?'></textarea>
        <button onClick={() => {props.addPost()}}>Добавить</button>
        {
            props.state.PostData.map(p => <div className={style.postWrap} key={p.id}>
                <img src={p.ava} alt="" />
                {p.text}
            </div>)
        }
    </div>
}

export default Posts;