import React from "react";

import HeroSection from "../../components/hero/HeroSection";
import ListenNow from "../../components/home/ListenNow";
import MeetTheHosts from "../../components/home/MeetTheHosts";
import ContactUs from "../../components/home/ContactUs";

import Container from "../../components/wrappers/Container";

const Home: React.FC<{}> = props => {

  return <>
    <HeroSection />
    <Container container="container">
      <ListenNow />
      <MeetTheHosts />
      <ContactUs />
    </Container>
  </>;
};

export default Home;