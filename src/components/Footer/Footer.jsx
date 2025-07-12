import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f1faee] text-[#1d3557] py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-[#e63946]">DevVerse</h1>
          <p className="text-sm text-[#1d3557] mt-3">
            Your all-in-one developer toolkit. Easily review code, validate JSON, and check for plagiarism — all in one place.
          </p>
        </div>

        {/* Tools We Offer */}
        <div>
          <h2 className="text-lg font-semibold text-[#e63946] mb-4">Tools We Offer</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#e63946] transition"><Link to="/review">Code Reviewer</Link></li>
            <li className="hover:text-[#e63946] transition"><Link to="/json-checker">JSON Schema Checker</Link></li>
            <li className="hover:text-[#e63946] transition"><Link to="/plagiarism">Plagiarism Checker</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-[#e63946] mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#e63946] transition"><Link to="/profile">Your Profile</Link></li>
            <li className="hover:text-[#e63946] transition"><Link to="/history">History</Link></li>
            <li className="hover:text-[#e63946] transition"><Link to="/logout">Logout</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-[#e63946] mb-4">Follow Us</h2>
          <div className="flex gap-4 items-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#1d3557] hover:text-[#e63946] transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#1d3557] hover:text-[#e63946] transition">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1d3557] hover:text-[#e63946] transition">
              <Twitter size={20} />
            </a>
            <a href="mailto:support@devguardian.com" className="text-[#1d3557] hover:text-[#e63946] transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-[#1d3557] mt-10">
        &copy; {new Date().getFullYear()} DevVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
