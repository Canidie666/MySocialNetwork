import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return ( 
        <div className={s.item}>
          <img src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"/>       
          { props.message }
          <div>
            <span>
                like
            </span>
          </div>
        </div> 
    )
}

export default Post;