import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target w-full py-4" id="ftco-navbar">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="navbar-brand text-white text-2xl font-bold">
          Clyde<span className="text-yellow-400">.</span>
        </Link>
        <button className="navbar-toggler lg:hidden focus:outline-none" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu text-white"></span> Menu
        </button>

        <div className="hidden lg:flex collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto flex space-x-4">
            <li className="nav-item"><Link href="#home-section" className="nav-link text-white hover:text-yellow-400"><span>Home</span></Link></li>
            <li className="nav-item"><Link href="#about-section" className="nav-link text-white hover:text-yellow-400"><span>About</span></Link></li>
            <li className="nav-item"><Link href="#skills-section" className="nav-link text-white hover:text-yellow-400"><span>Skills</span></Link></li>
            <li className="nav-item"><Link href="#services-section" className="nav-link text-white hover:text-yellow-400"><span>Services</span></Link></li>
            <li className="nav-item"><Link href="#projects-section" className="nav-link text-white hover:text-yellow-400"><span>Projects</span></Link></li>
            <li className="nav-item"><Link href="#blog-section" className="nav-link text-white hover:text-yellow-400"><span>Blog</span></Link></li>
            <li className="nav-item"><Link href="#contact-section" className="nav-link text-white hover:text-yellow-400"><span>Contact</span></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
