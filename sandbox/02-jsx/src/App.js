import React from 'react';
import './App.css';

let x = 3;

function App() {
  return (
    <div className='content'>
      <h1>Hello World!</h1>
      {saySomething("Nice to meet you!")}
      {x + 3}
      <img src={require('./beagle.jpg')} alt="dog"/>
    </div>
  );
}

function saySomething(something)
{
  return (
    <h2>{something}</h2>
  );
}

export default App;
