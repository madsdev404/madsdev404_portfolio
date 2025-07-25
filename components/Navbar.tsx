"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home-section");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "home-section";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop - 100; // Adjust offset as needed
        if (window.scrollY >= sectionTop) {
          currentActive = section.id;
          break;
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active link

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setActiveLink(sectionId);
    setIsOpen(false); // Close mobile menu on link click
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-gray-900 dark:bg-gray-700 fixed w-full z-50 py-4"
      id="ftco-navbar"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="navbar-brand text-white text-2xl font-bold">
          mads<span className="text-blue-500">dev</span>
          <span className="text-red-500">404</span>
        </Link>
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <div
          className={`lg:flex ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
            <li
              className={`nav-item ${
                activeLink === "home-section" ? "active" : ""
              }`}
            >
              <Link
                href="#home-section"
                onClick={(e) => handleNavLinkClick(e, "home-section")}
                className={`nav-link text-white hover:text-blue-500 block py-2 px-3 ${
                  activeLink === "home-section" ? "active" : ""
                }`}
              >
                <span>Home</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "about-section" ? "active" : ""
              }`}
            >
              <Link
                href="#about-section"
                onClick={(e) => handleNavLinkClick(e, "about-section")}
                className={`nav-link text-white hover:text-blue-500 block py-2 px-3 ${
                  activeLink === "about-section" ? "active" : ""
                }`}
              >
                <span>About</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "skills-section" ? "active" : ""
              }`}
            >
              <Link
                href="#skills-section"
                onClick={(e) => handleNavLinkClick(e, "skills-section")}
                className={`nav-link text-white hover:text-blue-500 block py-2 px-3 ${
                  activeLink === "skills-section" ? "active" : ""
                }`}
              >
                <span>Skills</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "services-section" ? "active" : ""
              }`}
            >
              <Link
                href="#services-section"
                onClick={(e) => handleNavLinkClick(e, "services-section")}
                className={`nav-link text-white hover:text-blue-500 block py-2 px-3 ${
                  activeLink === "services-section" ? "active" : ""
                }`}
              >
                <span>Services</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "projects-section" ? "active" : ""
              }`}
            >
              <Link
                href="#projects-section"
                onClick={(e) => handleNavLinkClick(e, "projects-section")}
                className={`nav-link text-white hover:text-blue-500 block py-2 px-3 ${
                  activeLink === "projects-section" ? "active" : ""
                }`}
              >
                <span>Projects</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "blog-section" ? "active" : ""
              }`}
            >
              <Link
                href="#blog-section"
                onClick={(e) => handleNavLinkClick(e, "blog-section")}
                className={`nav-link text-white hover:text-blue-500 block py-2 px-3 ${
                  activeLink === "blog-section" ? "active" : ""
                }`}
              >
                <span>Blog</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "contact-section" ? "active" : ""
              }`}
            >
              <Link
                href="#contact-section"
                onClick={(e) => handleNavLinkClick(e, "contact-section")}
                className={`nav-link text-white hover:text-blue-500 block py-2 px-3 ${
                  activeLink === "contact-section" ? "active" : ""
                }`}
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
