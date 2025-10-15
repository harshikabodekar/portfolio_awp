import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
