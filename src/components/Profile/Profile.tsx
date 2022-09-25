import s from './Profile.module.css';
import React from 'react';
import {MyPost} from './MyPosts/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPost/>
    </div>

  )
}