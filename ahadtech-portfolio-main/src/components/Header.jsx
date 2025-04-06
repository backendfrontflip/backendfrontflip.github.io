import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between -mt-16 p-5">
      <div className="mr-4">
        <Link to="/">
          <img 
            src={import.meta.env.BASE_URL + "/images/logo-pic.jpg"} 
            alt="Logo" 
            className="w-32 h-32 object-contain" 
          />
        </Link>
      </div>

      <nav className="hidden lg:flex w-full">
        <ul className="flex items-center gap-6 ml-auto">
          <li><Link to="/" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">Home</Link></li>
          <li><Link to="/about" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">About</Link></li>
          <li><Link to="/skill" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">Skill</Link></li>
          <li><Link to="/projects" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">Projects</Link></li>
          <li><Link to="/contact" className="relative pb-1 hover:border-b-2 hover:border-white focus:border-b-2 focus:border-white">Contact</Link></li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <CgMenuLeft className="text-3xl cursor-pointer" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed top-10 right-5 w-[40%] max-w-sm border rounded-2xl bg-white text-black flex flex-col items-center space-y-6 py-10 transition-all duration-300 ease-in-out z-[9999] shadow-lg lg:hidden"
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg relative pb-1 hover:border-b-2 hover:border-black">Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg relative pb-1 hover:border-b-2 hover:border-black">About</Link>
          <Link to="/skill" onClick={() => setIsMenuOpen(false)} className="text-lg relative pb-1 hover:border-b-2 hover:border-black">Skill</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="text-lg relative pb-1 hover:border-b-2 hover:border-black">Projects</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg relative pb-1 hover:border-b-2 hover:border-black">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
