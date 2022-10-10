import React from "react";
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

                    const Friends = (props) => {
                    let path = "/dialogs/*" + props.id;
                    return (
                    <div className={s.friends}>
                    <div>
                    <img src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"/>
                    </div>
                    <span>
                    <NavLink to = {path} className = { navData => navData.isActive ? s.active : s.friends}>{props.friend}</NavLink>
            </span>
        </div>
    )
}
export default Friends;

