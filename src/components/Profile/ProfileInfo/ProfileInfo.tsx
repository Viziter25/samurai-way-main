import s from './ProfileInfo.module.css'
import React from 'react';


export const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" alt="img"/>
      </div>
      <div className={s.description_block}>ava+descr</div>
    </div>

  )
}