import s from '../App.module.css';
import React from 'react';

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOrD0VLslvEMLytRn-OrBu8U7gAYl3UCDpX_RR-IP&s"
            alt="img"/>
        </div>
        <div>ava+des</div>
      </div>
      <div>
        My posts
        <div>
          new post
        </div>
        <div>
          post1
        </div>
        <div>
          post2
        </div>
        <div>
          post3
        </div>
      </div>
    </div>
  )
}