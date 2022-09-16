import s from '../App.module.css';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a href="#">Settings</a>
      </div>
    </nav>
  )
}