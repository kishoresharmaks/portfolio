import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Code2, Sparkles, Send, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full overflow-hidden ${
        isScrolled ? 'glass-nav py-2.5 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 shrink-0">
              <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="min-w-0">
              <span className="text-sm sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5 font-outfit truncate">
                <span>{PORTFOLIO_DATA.personal.name}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono block -mt-0.5 truncate">
                Full Stack & Java Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-xl animate-gradient-x"></span>
              <span className="relative block px-4 py-2 bg-[#090D16] hover:bg-transparent transition-colors duration-300 rounded-[11px] text-white flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                Contact Me
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10 shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-b border-white/10 px-4 pt-3 pb-5 mt-2 mx-3 sm:mx-4 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-200 max-w-full">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-200 hover:bg-white/10 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">&rarr;</span>
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-medium rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-500/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
