import React from 'react';
import logo from './logo.svg';
import { Header } from './components/Header/Header';
import { AdDesigner } from './components/AdDesigner/AdDesigner';
import { Votes } from './components/Votes/Votes';
import { Ad } from './components/Ad/Ad';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header user = 'Chirpus'></Header>
      
      <div className="main">
        <AdDesigner></AdDesigner>
        <Votes></Votes>
      </div>
    </div>
  );
}

export default App;
