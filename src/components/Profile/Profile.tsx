import s from './Profile.module.css';
import React from 'react';
import {MyPost} from './MyPosts/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = () => {

  let posts = [
    {id: 1, message: 'hi', likescount: 1},
    {id: 2, message: 'Bye', likescount: 41},
    {id: 3, message: 'asdsad', likescount: 21},
  ]

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPost posts={posts}/>
    </div>

  )
}