import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome()
{
  return (
      <ul id='nav'>
        <li>Home</li>
        <li>About Us</li>
        <li>Catalog</li>
        <li>Contact Us</li>
      </ul>
    )
}

function HeroImage()
{
  return (
    <div id='hero-image'>
      <div id='cta'>
        The freshest and most authentic Japanese food.<br/>
        Any more authentic, you will have to fly to Japan.
      </div>
    </div>
    )
}

function App() {
  return (
    <div>
      <Welcome/>
      <HeroImage/>
    </div>
    );
}

export default App;
