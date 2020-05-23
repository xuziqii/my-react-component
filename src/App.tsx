import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'

import useMouseMove from './hooks/useMouseMove'

function App() {
  const position = useMouseMove()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>x: { position.x }, y: { position.y }</p>
        <Hello/>
        <LikeButton />
        <MouseTracker />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
