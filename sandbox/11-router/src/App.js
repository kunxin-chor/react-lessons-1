import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Welcome} from './components/Welcome'

import Home from './pages/Home'
import About from './pages/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>

    <Router>
        <Welcome/>
      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
