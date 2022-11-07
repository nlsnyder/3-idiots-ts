import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to={"/home"} replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
