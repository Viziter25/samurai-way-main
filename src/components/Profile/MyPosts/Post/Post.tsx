import s from './Post.module.css';
import React from 'react';

type MessagePropsType = {
  message: string,
  likescount: number
}

export const Post = (props:MessagePropsType) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt=""/>
        {props.message}
      </div>
      <div>
        <span>like</span>
        <span>{props.likescount}</span>
      </div>
    </div>
  )
}