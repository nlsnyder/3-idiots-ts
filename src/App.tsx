import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNav from "./components/navigation/MainNav";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
