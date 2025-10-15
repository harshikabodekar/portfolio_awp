//import Image from "next/image";
import Navbar from "./components/Navbar";
import React from "react";
import Projects from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
