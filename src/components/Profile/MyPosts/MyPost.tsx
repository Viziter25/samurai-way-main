import s from './MyPosts.module.css';
import React, {ChangeEvent} from 'react';
import {Post} from './Post/Post';
import { StateType} from '../../../redux/state';



export const MyPost = (props:StateType) => {


  let postsElement = props.state.profilePage.posts.map(p => <div key={p.id}><Post message={p.message} likescount={p.likescount}/></div> )


  let addPost = () => {
      props.addPost(props.state.profilePage.newPostText)
  }

  let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)

  }

  return (
    <div className={s.postBlock}>
      <div>
        <h3>My Posts</h3>
        <div>
          <textarea  onChange={onPostChange} value={props.state.profilePage.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>add</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  )
}