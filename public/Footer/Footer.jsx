import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer>

      
      <div className="footer-top">
        <h2>Join the Collective.</h2>
        <p className='footer-p'>Receive editorial updates on our latest designs, craft processes, and sustainable initiatives.</p>
        <div className="footer-top-form">
          <input type="email" placeholder="Your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      
      <div className="footer-links">
    
        <div className="footer-brand">
          <h4>LUMINA</h4>
          <p>Refined objects for the modern sanctuary. Curating elegance through intentional design.</p>
        </div>

        
        <div className="footer-col">
          <h6>Company</h6>
          <Link to="/about">About Us</Link>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>

        
        <div className="footer-col">
          <h6>Help</h6>
          <a href="#">Shipping Info</a>
          <a href="#">Returns</a>
          <Link to="/contact_us">Contact</Link>
        </div>

        
        <div className="footer-col">
          <h6>Legal</h6>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        
        <div className="footer-col">
          <h6>Social</h6>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.pinterest.com/">Pinterest</a>
        </div>

      </div>

      
      <div className="footer-bottom">
        <span> © 2024 LUMINA. All rights reserved.</span>
        <span> 🌐  EN / USD</span>
      </div>

    </footer>
  );
}