import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, state, subscribe, updateNewPostText} from './redux/state';



let rerenderEntiretree = (state:RootStateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
    document.getElementById('root')
  );
}


rerenderEntiretree(state)
subscribe(rerenderEntiretree)
