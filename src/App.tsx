import React from "react";
import "./App.css";
import HeroSection from "./components/hero/HeroSection";
import MainNav from "./components/navigation/MainNav";
import ListenNow from "./components/home/ListenNow";
import MeetTheHosts from "./components/home/MeetTheHosts";
import ContactUs from "./components/home/ContactUs";
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
