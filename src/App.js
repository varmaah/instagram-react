import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header.js';
import { Home } from './components/Home.js';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
