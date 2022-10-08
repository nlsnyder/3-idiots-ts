import React from "react";
import "./App.css";
import MainNav from "./components/navigation/MainNav";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
