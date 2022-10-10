import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {

    let path = "/dialogs/*" + props.id;

    return (
        <div >
            <img src = 'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItems;