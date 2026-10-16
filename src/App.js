import React from "react";
import { MotionConfig } from "framer-motion";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import Background from "./Components/ui/Background";
import ScrollProgress from "./Components/ui/ScrollProgress";
import IntroCurtain from "./Components/ui/IntroCurtain";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <IntroCurtain />
      <ScrollProgress />
      <Background />
      <Navbar />

      <main id="main" className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;
