// IMPORTANT: All modules that used React must 
// have the line below
import React from 'react';
import './welcome.css'

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

// Allow other JavaScript files to import Welcome
export { Welcome };