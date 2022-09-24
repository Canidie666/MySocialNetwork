import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
     <div className={s.content}>    
       <div className={s.ava}>
         <img src='https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png'/>
       </div> 
       <MyPosts />
      </div>
    )
}

export default Profile;