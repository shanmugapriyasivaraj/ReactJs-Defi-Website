import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
