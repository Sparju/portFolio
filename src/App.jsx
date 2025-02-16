import React, { useEffect } from "react";
import { gsap } from "gsap";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  useEffect(() => {
    gsap.from(".hero h1", { opacity: 0, x: -100, duration: 1 });
    gsap.from(".btn", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
