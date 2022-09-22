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

function App() {
  return (
    <BrowserRouter>
      <div className={s.app_wrapper}>
        <Header/>
        <Navbar/>
        <div className={s.wrapper_content}>
          <Route path='/Dialogs' component={Dialogs}/>
          <Route path='/Profile' component={Profile}/>
          <Route path='/News' component={News}/>
          <Route path='/Music' component={Music}/>
          <Route path='/Settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
