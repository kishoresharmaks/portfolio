import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface ModernNavbarProps {
  onOpenContact?: () => void;
  onSwitchToV2?: () => void;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({ onOpenContact, onSwitchToV2 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20'
          : 'bg-[#090D16]/40 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
          aria-label="Kishoresharma T - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border border-white/20 flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
            KT
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[11px] text-zinc-400 font-mono hidden sm:block -mt-0.5">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-3 py-1 shadow-inner"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                } focus:outline-none focus:ring-1 focus:ring-indigo-500`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Switch to Excalidraw V2 Theme */}
          {onSwitchToV2 && (
            <button
              onClick={onSwitchToV2}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-all shadow-sm"
              title="Switch to Handcrafted Excalidraw Whiteboard (Root /)"
            >
              <span>✏️</span>
              <span>Excalidraw (V2)</span>
            </button>
          )}

          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Kishoresharma_T_SDE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Download size={13} className="text-zinc-300" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-sm shadow-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Kishoresharma_T_SDE_Resume.pdf"
            className="p-2 rounded-lg bg-white/[0.06] text-white border border-white/10 text-xs"
            title="Download Resume"
          >
            <Download size={15} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.06] text-zinc-300 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D121F] border-b border-white/[0.08] px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            {onSwitchToV2 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSwitchToV2();
                }}
                className="w-full py-2 rounded-lg text-center text-xs font-mono font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30 flex items-center justify-center gap-1.5"
              >
                <span>✏️ Switch to Excalidraw Whiteboard (V2)</span>
              </button>
            )}

            <div className="flex gap-2">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Kishoresharma_T_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-lg text-center text-xs font-medium bg-white/[0.06] text-white border border-white/10 flex items-center justify-center gap-1.5"
              >
                <Download size={13} />
                <span>Resume PDF</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex-1 py-2 rounded-lg text-center text-xs font-semibold bg-indigo-600 text-white flex items-center justify-center gap-1.5"
              >
                <span>Contact</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
