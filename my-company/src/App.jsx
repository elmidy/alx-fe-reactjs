import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Compnents/Home";
import About from "./Compnents/About";
import Services from "./Compnents/Services";
import Contact from "./Compnents/Contact";
import Navbar from "./Compnents/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        ></Route>
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
