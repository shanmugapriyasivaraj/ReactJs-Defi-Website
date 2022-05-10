import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Developer from "./Components/developer/Developer";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Subscribe from "./Components/subscribe/Subscribe";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
    </div>
  );
}

export default App;
