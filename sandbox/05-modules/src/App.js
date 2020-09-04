import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the Welcome function from ./Welcome.js
import {Welcome} from './Welcome'

// Do a default import from ./HeroImage.js
import HeroImage from './HeroImage'

function App() {
  return (
    <div>
      <Welcome/>
      <HeroImage/>
    </div>
  );
}

export default App;
