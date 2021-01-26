import React, { useEffect } from 'react';
/* eslint-disable arrow-parens */
const Home = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const element = document.getElementById('1');
    navLinks.forEach((item) => item.classList.remove('active'));
    element.classList.add('active');
  }, []);
  return (
    <div className="container">
      <h1 style={{ color: 'rgb(255,255,255)' }}>Welcome to our page!</h1>
      <p style={{ color: 'white', fontSize: '25px' }}>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt inculpa qui o!cia deserunt mollit anim id est laborum.
      </p>
      <br />
      <p style={{ color: 'white', fontSize: '25px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum.
      </p>
      <br />
    </div>
  );
};

export default Home;
