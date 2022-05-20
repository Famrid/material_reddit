import React from 'react';
import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import NavBar from './components/navBar/navBar';
import { Posts } from './features/posts/Posts';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/search/:searchId' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
