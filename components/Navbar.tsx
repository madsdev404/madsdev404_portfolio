"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home-section");
  const [isLargeScreen, setIsLargeScreen] = useState(false); // New state for screen size

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's 'lg' breakpoint is 1024px
    };

    // Set initial screen size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "home-section";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentActive = section.id;
          break;
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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
        <Link
          href="/"
          className="navbar-brand text-white text-2xl font-bold z-50"
        >
          mads<span className="text-blue-500">dev</span>
          <span className="text-red-500">404</span>
        </Link>

        {/* Mobile-specific header elements (toggle button and ThemeSwitcher) */}
        {!isLargeScreen && (
          <div className="flex items-center z-50">
            <ThemeSwitcher />
            <button
              className="focus:outline-none text-white text-xl ml-4"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        )}

        {/* Desktop Navigation */}
        {isLargeScreen && (
          <div className="flex flex-row items-center space-x-4 ml-auto">
            {" "}
            {/* Desktop nav container */}
            <ul className="navbar-nav flex flex-row space-x-4">
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
            <ThemeSwitcher /> {/* ThemeSwitcher for desktop */}
          </div>
        )}

        {/* Mobile Navigation Overlay */}
        {!isLargeScreen && isOpen && (
          <div
            className="absolute top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-gray-900 dark:bg-gray-800 flex flex-col items-center justify-center"
            id="ftco-nav-mobile" // New ID for mobile nav container
          >
            <ul className="navbar-nav flex flex-col items-center space-y-4">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
