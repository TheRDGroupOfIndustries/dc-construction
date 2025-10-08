"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user has scrolled more than 10px, else false
      setScrolled(window.scrollY > 10);
    };

    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Dynamic classes for the header based on scroll state
  const headerClasses = "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out  bg-white shadow-md backdrop-blur-md";
  
  // Dynamic text color based on scroll state
  const linkColorClass =  "text-gray-700";

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-6 lg:px-36 py-3.5 flex justify-between items-center">
        {/* Brand Name - Link modernized */}
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-pacifico font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            D & R Constructions
          </h1>
        </Link>

        {/* Desktop Navigation - Links modernized */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${linkColorClass} hover:text-red-600 transition-colors duration-300 text-lg md:text-base`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Get Quote Button (Desktop) */}
     <div className="hidden md:block">
  <Link href="#contact">
    <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-red-900 transition-all whitespace-nowrap cursor-pointer">
      Get Quote
    </button>
  </Link>
</div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen} // A11y improvement
            className={`${linkColorClass} focus:outline-none`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 bg-white shadow-lg" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-3 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-base"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-gradient-to-r from-red-700 to-red-500 text-white font-semibold px-8 py-2 rounded-lg shadow-md hover:shadow-lg w-4/5 mt-2">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;