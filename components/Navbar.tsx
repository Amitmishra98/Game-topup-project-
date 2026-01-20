import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Menu, X, Search, User } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Games', path: '/#games' },
    { name: 'Track Order', path: '#' },
    { name: 'Support', path: '#' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Hexagon className="h-10 w-10 text-amber-500 fill-amber-500/10 stroke-[2.5]" />
              <span className="absolute text-[12px] font-black text-amber-500 tracking-tighter -rotate-3">GR</span>
            </div>
            
            <div className="flex flex-col -space-y-1 select-none">
              <div className="flex items-baseline">
                <span className="text-2xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 drop-shadow-sm">
                  GAMES
                </span>
                <span className="text-2xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 ml-1 drop-shadow-sm">
                  RELOAD
                </span>
              </div>
              <span className="text-[8px] font-bold tracking-[0.3em] text-slate-400 uppercase w-full text-center">
                Top-Up Store
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path 
                    ? 'text-brand-500 scale-105' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
             <button className="text-slate-400 hover:text-white transition-colors">
               <Search className="h-5 w-5" />
             </button>
             <div className="h-6 w-px bg-white/10"></div>
             <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Login
             </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-card border-b border-white/10 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 mt-4 flex flex-col gap-3">
               <Button variant="secondary" className="w-full justify-center">Login</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};