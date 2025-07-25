import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-gray-900 fixed w-full z-50 py-4" id="ftco-navbar">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="navbar-brand text-white text-2xl font-bold">
          Clyde<span className="text-yellow-400">.</span>
        </Link>
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`} id="ftco-nav">
          <ul className="navbar-nav ml-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
            <li className="nav-item"><Link href="#home-section" className="nav-link text-white hover:text-yellow-400 block py-2 px-3"><span>Home</span></Link></li>
            <li className="nav-item"><Link href="#about-section" className="nav-link text-white hover:text-yellow-400 block py-2 px-3"><span>About</span></Link></li>
            <li className="nav-item"><Link href="#skills-section" className="nav-link text-white hover:text-yellow-400 block py-2 px-3"><span>Skills</span></Link></li>
            <li className="nav-item"><Link href="#services-section" className="nav-link text-white hover:text-yellow-400 block py-2 px-3"><span>Services</span></Link></li>
            <li className="nav-item"><Link href="#projects-section" className="nav-link text-white hover:text-yellow-400 block py-2 px-3"><span>Projects</span></Link></li>
            <li className="nav-item"><Link href="#blog-section" className="nav-link text-white hover:text-yellow-400 block py-2 px-3"><span>Blog</span></Link></li>
            <li className="nav-item"><Link href="#contact-section" className="nav-link text-white hover:text-yellow-400 block py-2 px-3"><span>Contact</span></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;