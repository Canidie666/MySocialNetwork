import React from "react";
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div className={s.text}>
      MyPosts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Being gay and sucking balls!1!!" likesCount="34" />
      <Post message="Fuck my ass against the wall!11" likesCount="23" />
      <Post message="And make me drink your pee!1!" likesCount="54" />
      <Post message="And bust a load of pozzed up semen in me!" likesCount="46" />
    </div>
  )
}

export default MyPosts;