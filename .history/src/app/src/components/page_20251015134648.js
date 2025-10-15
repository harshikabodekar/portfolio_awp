//import Image from "next/image";
import Navbar from "../../components/Navbar";
import React from "react";
import Projects from "../../components/Project";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import ProjectCard from "../../components/ProjectCard";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ProjectCard/>
      </main>
    </div>
  );
}
