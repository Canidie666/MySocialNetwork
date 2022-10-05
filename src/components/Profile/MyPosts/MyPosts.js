import React from "react";
import s from './MyPosts.module.css';
import Post from './Posts/Post';



const MyPosts = (props) => {

  let postsElements =
    props.state.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.posts}>
      <h3>MyPosts</h3> 
      <div className={s.textarea}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts;