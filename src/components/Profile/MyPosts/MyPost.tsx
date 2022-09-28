import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './Post/Post';

export type PropsType = {
  posts:PropsArrayType[]
}

type PropsArrayType = {
  id: number
  message: string
  likescount: number
}

export const MyPost = (props:PropsType) => {

  // let posts = [
  //   {id: 1, message: 'hi', likescount: 1},
  //   {id: 2, message: 'Bye', likescount: 41},
  //   {id: 3, message: 'asdsad', likescount: 21},
  // ]

  let postsElement = props.posts.map(p => <div key={p.id}><Post message={p.message} likescount={p.likescount}/></div> )

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
        { postsElement }
      </div>
    </div>
  )
}