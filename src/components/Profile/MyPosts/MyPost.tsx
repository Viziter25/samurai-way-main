// import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './Post/Post';


export const MyPost = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>add</button>
      </div>
      <Post message = 'Hello' likescount ={-3}/>
      <Post message = 'Bye' likescount ={-5}/>
    </div>
  )
}