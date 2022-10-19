import s from './MyPosts.module.css';
import React from 'react';
import {Post} from './Post/Post';
import {ProfilePageType, StateType} from '../../../redux/state';



export const MyPost = (props:StateType) => {


  let postsElement = props.state.profilePage.posts.map(p => <div key={p.id}><Post message={p.message} likescount={p.likescount}/></div> )

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    if (newPostElement.current){
      let text = (newPostElement.current?.value)
      props.addPost(text)

      newPostElement.current.value=' '
    }
  }


  return (
    <div className={s.postBlock}>
      <div>
        <h3>My Posts</h3>
        <div>
          <textarea ref={newPostElement}></textarea>
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