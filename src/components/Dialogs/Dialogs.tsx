import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog+ ' ' + s.active}>
          <NavLink to='/dialogs/1'>dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>vasa</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>sveta</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>yo</div>
        <div className={s.message}>hello</div>
      </div>
    </div>
  );
};
