import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content' >
          <Routes>
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/dialogs' element={<Dialogs />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path='/music' element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
