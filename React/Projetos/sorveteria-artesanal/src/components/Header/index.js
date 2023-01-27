import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className='img-header'>
          <img src='assets/logo.png' alt='logo'/>
      </div>
      <div className='links-header'>
        <ul>
          <li>HOME</li>
          <li>SABORES</li>
          <li>EVENTOS</li>
          <li>SOBRE</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
