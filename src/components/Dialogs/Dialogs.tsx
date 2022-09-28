import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsItem} from './DialogItem/DialogItem';


//
// function DialogsItem(props: { name: string, id: number }) {
//   return null;
// }

export const Dialogs = () => {

  let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Vasa'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Ilya'},
  ]

  let messages = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'yo'},
    {id: 3, message: 'hello'},
  ]

  let dialogsItams = dialogs.map(d => <div key={d.id}><DialogsItem name={d.name} id={d.id}/></div>)
  let messagesItems = messages.map(m => <div key={m.id}><Message message={m.message} id={m.id}/></div>)
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
