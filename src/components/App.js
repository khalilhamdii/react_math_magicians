import '../stylesheets/App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <fragment>
    <Display />
    <ButtonPanel />
  </fragment>
);

export default App;
