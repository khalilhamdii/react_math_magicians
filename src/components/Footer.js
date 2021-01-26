import React from 'react';
import '../stylesheets/footer.css';

const Footer = () => (
  <div className="footer-basic mt-5" style={{ background: '#F5913E' }}>
    <footer>
      <ul className="list-inline" style={{ color: 'white' }}>
        <li className="list-inline-item">
          <a href="/">Home</a>
        </li>
        <li className="list-inline-item">
          <a href="/calculator">Calculator</a>
        </li>
        <li className="list-inline-item">
          <a href="/quote">Quote</a>
        </li>
      </ul>
      <p className="copyright" style={{ fontSize: '16px', color: 'var(--dark)' }}>
        Math Magicians by Khalil Hamdi © 2021
      </p>
    </footer>
  </div>
);

export default Footer;
