import React from 'react';
import './App.css';
import HeroSection from './components/landingPage/HeroSection';
import MainNav from './components/layout/MainNav';

function App() {
  return (
    <div className="App">
      <MainNav />
      <HeroSection />
    </div>
  );
}

export default App;
