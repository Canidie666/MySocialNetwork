import React from "react";
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
    </nav>
  )
}

export default NavBar;