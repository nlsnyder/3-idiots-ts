import React from "react";

import HeroSection from "../../components/hero/HeroSection";
import ListenNow from "../../components/home/ListenNow";
import MeetTheHosts from "../../components/home/MeetTheHosts";

import Container from "../../components/wrappers/Container";
import ContactUsForm from "../../components/home/ContactUsForm";

const Home: React.FC<{}> = props => {

  return <>
    <HeroSection />
    <Container container="container">
      <ListenNow />
      <MeetTheHosts />
      <ContactUsForm />
    </Container>
  </>;
};

export default Home;