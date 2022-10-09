import s from './Profile.module.css';
import React from 'react';
import {MyPost} from './MyPosts/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type StatePropsType = {
  state:PropsType
}

export type PropsType = {
  posts:PropsArrayType[]
}

type PropsArrayType = {
  id: number
  message: string
  likescount: number
}

export const Profile = (props:StatePropsType) => {


  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPost posts={props.state.posts} />
    </div>

  )
}