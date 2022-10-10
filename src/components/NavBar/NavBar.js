import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {

    let friendsElements =
        props.state.friend.map ( f => <Friends friend={f.friend} id={f.id}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <h4>Friends</h4>
            <div >
                {friendsElements}

            </div>
        </nav>
    )
}

export default NavBar;