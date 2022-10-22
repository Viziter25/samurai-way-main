import React from 'react';
import s from './App.module.css';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings';
import {StateType} from './redux/state';





function App(props:StateType) {

  return (
    <BrowserRouter>
      <div className={s.app_wrapper}>
        <Header/>
        <Navbar/>
        <div className={s.wrapper_content}>

          <Route path='/dialogs' render={() => <Dialogs state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
          <Route path='/profile' render={() => <Profile state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>


          {/*<Route path='/dialogs' component={Dialogs}/>*/}
          {/*<Route path='/profile' component={Profile}/>*/}
          {/*<Route path='/news' component={News}/>*/}
          {/*<Route path='/music' component={Music}/>*/}
          {/*<Route path='/settings' component={Settings}/>*/}
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
