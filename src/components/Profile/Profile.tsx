import s from './Profile.module.css';
import React from 'react';
import {MyPost} from './MyPosts/MyPost';

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" alt="img"/>
      </div>
      <div>ava+descr</div>
      <MyPost/>
    </div>

  )
}