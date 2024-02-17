import React from 'react';
import FooterImg from '../assets/Asset 18@4x.png'
import './style.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img src={FooterImg} alt="footer" />
      </div>
      <span>Copyright Little lemon</span>
    </footer>
  )
}
