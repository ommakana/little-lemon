import React from 'react';
import Logo from '../../assets/Asset 14@4x.png';
import './style.css';

export default function Header({children}) {
  return (
    <header className='header-image'>
        <img src={Logo} alt='Little lemon'/>
    </header>
  )
}
