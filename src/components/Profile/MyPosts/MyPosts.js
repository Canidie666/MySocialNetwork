import React from "react";
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {

    let postsElements =
        props.state.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElements = React.createRef();

    let addPost = () => {
        let text = newPostElements.current.value;
        alert(text);
    }

    return (
        <div>
            <h3 className={s.title}>MyPosts</h3>
            <div>
                <textarea className={s.textarea} ref={newPostElements}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.postsElements}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;