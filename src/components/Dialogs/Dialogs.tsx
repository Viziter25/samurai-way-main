import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsItemPropsType = {
  name: string
  id: number
}
type MessagePropsType = {
  id: number
  message: string
}

const DialogsItem = (props: DialogsItemPropsType) => {
  let path = `/dialogs/${props.id}`
  return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Vasa'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Ilya'},
  ]

  let messagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'yo'},
    {id: 3, message: 'hello'},
  ]


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          dialogsData.map(d => <div key={d.id}><DialogsItem name={d.name} id={d.id}/></div>)
        }
      </div>
      <div className={s.messages}>
        {
          messagesData.map(m => <div key={m.id}><Message message={m.message} id={m.id}/></div>)
        }
      </div>
    </div>
  );
};
