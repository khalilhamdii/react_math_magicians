import React from 'react';
import '../stylesheets/nav.css';

const Nav = () => (
  <nav
    className="navbar navbar-light navbar-expand-md navigation-clean mb-5"
    style={{ background: '#F5913E' }}
  >
    <a
      className="navbar-brand"
      href="/"
      style={{ fontFamily: 'Aclonica, sans-serif', fontSize: '30px' }}
    >
      Math Magicians
    </a>
    <button data-toggle="collapse" className="navbar-toggler" type="button" data-target="#navcol-1">
      <span className="sr-only">Toggle navigation</span>
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navcol-1">
      <ul className="nav navbar-nav ml-auto font-weight-bold">
        <li className="nav-item">
          <a className="nav-link" id="1" href="/">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="2" href="/calculator">
            CALCULATOR
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="3" href="/quote">
            QUOTE
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
