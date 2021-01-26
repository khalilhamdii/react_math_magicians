import React from 'react';
import '../stylesheets/style.css';

const Quote = () => (
  <div className="container">
    <h1 style={{ color: 'rgb(255,255,255)' }}>Quote of the day</h1>
    <p
      style={{
        fontFamily: 'Quattrocento Sans, sans-serif',
        fontSize: '48px',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <br />
      <br />
      &quot;Mathematics is not about numbers, equations, computations, or algorithms: it is about
      understanding.&quot; – William Paul Thurston
      <br />
      <br />
      <br />
    </p>
  </div>
);

export default Quote;
