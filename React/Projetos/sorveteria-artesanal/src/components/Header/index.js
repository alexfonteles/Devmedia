import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  
    <div className="header">
      <div className='img-header'>
          <img src='assets/logo.png' alt='logo'/>
      </div>
      <div className='links-header'>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/sabores'>SABORES</Link></li>
          <li><Link to='/eventos'>EVENTOS</Link></li>
          <li><Link to='/sobre'>SOBRE</Link></li>          
        </ul>
      </div>
    </div>
  );


export default Header;

/*
          <li>HOME</li>
          <li>SABORES</li>
          <li>EVENTOS</li>
          <li>SOBRE</li>
*/