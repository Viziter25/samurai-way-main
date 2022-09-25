import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './Post/Post';


export const MyPost = () => {

  let postData = [
    {id: 1, message: 'hi', likescount: 1},
    {id: 2, message: 'Bye', likescount: 41},
    {id: 3, message: 'asdsad', likescount: 21},

  ]

  return (
    <div className={s.postBlock}>
      <div>
        <h3>My Posts</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add</button>
        </div>
      </div>
      <div className={s.posts}>
        {
          postData.map(p => <div key={p.id}><Post message={p.message} likescount={p.likescount}/></div> )
        }
      </div>
    </div>
  )
}