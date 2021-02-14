import React from 'react';
import './App.css';
import SocialLinks from './SocialLinks';
import Header from './Header';
import Bio from './Bio';

const App = () => (
  <div className="app">
    <Header />
    <SocialLinks />
    <Bio />
  </div>
);

export default App;