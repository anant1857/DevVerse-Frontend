
// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const NavLink = ({ to, children, onClick }) => (
  <li>
    <Link to={to} className="text-[#1d3557] block hover:text-[#e63946]" onClick={onClick}>
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const mainNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/review', label: 'Code Reviewer' },
    { to: '/snippet-generator', label: 'Snippet Generator' },
    { to: '/regex-tester', label: 'Regex Tester' },
    { to: '/seo-checker', label: 'SEO Checker' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const navLinks = isAuthenticated ? mainNavLinks : [];

  return (
    <>
      <nav className="bg-[#f1faee] px-4 py-6 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl md:mx-auto flex justify-between items-center ">
          {/* Left: Logo */}
          <div className="text-xl font-bold text-[#e63946]">
            <Link to="/">DevVerse</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen} className="md:hidden">
            {isOpen ? <X className=" w-6 h-6" /> : <Menu className=" w-6 h-6" />}
          </button>

          {/* Center: Nav Links */}
          <ul
            className={`md:flex md:items-center md:gap-6 text-sm font-medium transition-all duration-300 ease-in-out
            ${isOpen ? 'block' : 'hidden'} absolute md:static bg-[#f1faee] md:bg-transparent
            w-full md:w-auto left-0 md:left-auto top-full md:top-auto z-10
            px-4 md:px-0 py-4 md:py-0 space-y-4 md:space-y-0`}
          >
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={isOpen ? toggleMenu : null}>
                {link.label}
              </NavLink>
            ))}
          </ul>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="bg-[#e63946] hover:bg-[#e63947dc] text-white px-4 py-2 rounded-lg transition duration-200 cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-[#1d3557] hover:bg-[#1d3557d6] text-white px-4 py-2 rounded-lg transition duration-200 cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-[#e63946] hover:bg-[#e63947dc] text-white px-4 py-2 rounded-lg transition duration-200 cursor-pointer"
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
