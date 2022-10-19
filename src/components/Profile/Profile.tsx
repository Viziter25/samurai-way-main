import s from './Profile.module.css';
import React from 'react';
import {MyPost} from './MyPosts/MyPost';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StateType} from '../../redux/state';


export const Profile = (props:StateType) => {


  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPost state={props.state} addPost={props.addPost}/>
    </div>

  )
}