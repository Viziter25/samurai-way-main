import s from './Navbar.module.css';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Messages</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a href="src/components/Navbar/Navbar#">Settings</a>
      </div>
    </nav>
  )
}