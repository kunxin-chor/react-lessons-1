import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the Welcome function from ./Welcome.js
import {Welcome} from './Welcome'

// Do a default import from ./HeroImage.js
import HeroImage from './HeroImage'

// Do a default import from ./Alert.js
import Alert from './Alert'


function App() {
  return (
    <div>
      <Welcome/>
      <HeroImage/>
      <Alert message="Please remember our discount vouchers expire end of Dec 2019!"/>
    </div>
  );
}

export default App;
