import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const DialogsItem = (props) => {
    let path = "/dialogs/*" + props.id;
    return (
        <div className={s.dialogsItems}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

const Message = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Petya" id="1" />
                <DialogsItem name="Vasya" id="2" />
                <DialogsItem name="Sasha" id="3" />
                <DialogsItem name="Vitya" id="4" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Nu privet, eprst!"/>
                <Message message="Gde den'gi?"/>
                <Message message="Kak dela?"/>
            </div>
        </div>
    )
}

export default Dialogs;