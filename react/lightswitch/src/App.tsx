import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch } from './components/switch/Switch'
import { Counter } from './components/counter/Counter';
import { PetInfo } from './components/petInfo/PetInfo';

function App() {
  return (
    

    // this is calling Counter.tsx
    // <div>
    //   <Counter></Counter>
    // </div>

    // this is calling Switch.tsx
    //  <div className="App">
    //    <Switch></Switch>      
    //  </div>

    // this is calling Switch.tsx & Pet.tsx
    <div>
      <Switch></Switch> 
      <PetInfo></PetInfo>
    </div>
    
  );
}

export default App;
