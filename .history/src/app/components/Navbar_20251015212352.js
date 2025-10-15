import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-12">
          <li><a href="#home" className="hover:text-blue-400 text-2xl">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 text-2xl">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400 text-2xl">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 text-2xl">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 text-2xl">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
