import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the Welcome function from ./Welcome.js
import {Welcome} from './components/Welcome'

// Do a default import from ./HeroImage.js
import HeroImage from './components/HeroImage'

// Do a default import from ./Alert.js
import Alert from './components/Alert'

// Do a default import from ./Reserve.js
import Reserve from './components/Reserve'


function App() {
  return (
    <div>
      <Welcome/>
      <HeroImage/>
      <Alert message="Please remember our discount vouchers expire end of Dec 2019!"/>
      <Reserve/>
    </div>
  );
}

export default App;
