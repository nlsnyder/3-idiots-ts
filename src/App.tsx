import React from "react";
import "./App.css";
import HeroSection from "./components/landingPage/HeroSection";
import MainNav from "./components/layout/MainNav";
import ListenNow from "./components/main/ListenNow";
import MeetTheHosts from "./components/main/MeetTheHosts";
import ContactUs from "./components/main/ContactUs";
import Container from "./components/wrappers/Container";
import Footer from "./components/layout/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
