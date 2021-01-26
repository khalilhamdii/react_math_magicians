import React from 'react';
import '../stylesheets/style.css';

const Footer = () => (
  <nav
    className="navbar navbar-light navbar-expand-md navigation-clean mb-5"
    style={{ background: '#F5913E' }}>
    <div className="container">
      <a
        className="navbar-brand"
        href="/"
        style={{ fontFamily: 'Aclonica, sans-serif', fontSize: '30px' }}>
        Math Magicians
      </a>
      <button
        data-toggle="collapse"
        className="navbar-toggler"
        type="button"
        data-target="#navcol-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav ml-auto font-weight-bold">
          <li className="nav-item">
            <a className="nav-link active" href="/" style={{ color: 'var(--dark)' }}>
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={{ color: 'rgb(255,255,255)' }}>
              CALCULATOR
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" style={{ color: 'rgb(255,255,255)' }}>
              QUOTE
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Footer;
