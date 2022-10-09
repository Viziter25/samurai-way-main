import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsItem} from './DialogItem/DialogItem';
import {StatePropsType} from '../../redux/state';




export const Dialogs = (props: StatePropsType) => {


  let dialogsItams = props.state.dialogs.map(d => <div key={d.id}><DialogsItem name={d.name} id={d.id}/></div>)
  let messagesItems = props.state.messages.map(m => <div key={m.id}><Message message={m.message} id={m.id}/></div>)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          dialogsItams
        }
      </div>
      <div className={s.messages}>
        {
          messagesItems
        }
      </div>
    </div>
  );
};
