import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsItem} from './DialogItem/DialogItem';
import { StateType} from '../../redux/state';





export const Dialogs = (props:StateType) => {


  let dialogsItems = props.state.messagePage.dialogs.map(d => <div key={d.id}><DialogsItem name={d.name} id={d.id}/></div>)
  let messagesItems = props.state.messagePage.messages.map(m => <div key={m.id}><Message message={m.message} id={m.id}/></div>)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          dialogsItems
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
