import React from "react";
import s from './Profileinfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.ava}>
                <img src='https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png' />
            </div>
            <div className={s.description}>
                Description
            </div>
        </div>
    )
}
export default ProfileInfo;