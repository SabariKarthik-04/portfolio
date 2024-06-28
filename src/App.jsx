import React from "react";
import SkillCard from "./components/skillCard";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ConatctForm from "./components/ConatctForm";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <About />
      <SkillCard />
      <Projects />
      <ConatctForm />
      <Footer />
    </div>
  );
}

export default App;
