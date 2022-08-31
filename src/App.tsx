import React from 'react';
import './App.css';
import HeroSection from './components/landingPage/HeroSection';
import MainNav from './components/layout/MainNav';
import ListenNow from './components/main/ListenNow';
import MeetTheHosts from './components/main/MeetTheHosts';

function App() {
  return (
    <div className="App">
      <MainNav />
      <HeroSection />
      <ListenNow />
      <MeetTheHosts />
    </div>
  );
}

export default App;
