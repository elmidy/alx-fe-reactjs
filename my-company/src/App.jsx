import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compnents/Home";
import About from "./compnents/About";
import Services from "./compnents/Services";
import Contact from "./compnents/Contact";
import Navbar from "./compnents/Navbar";
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
