import React from "react";
import "./App.css";
import HeroSection from "./components/landingPage/HeroSection";
import MainNav from "./components/layout/MainNav";
import ListenNow from "./components/main/ListenNow";
import MeetTheHosts from "./components/main/MeetTheHosts";
import ContactUs from "./components/main/ContactUs";
import Container from "./components/wrappers/Container";

function App() {
  return (
    <div className="App">
      <MainNav />
      <HeroSection />
      <Container container="container">
        <ListenNow />
        <MeetTheHosts />
        <ContactUs />
      </Container>
    </div>
  );
}

export default App;
