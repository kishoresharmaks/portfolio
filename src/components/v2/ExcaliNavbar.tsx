import React, { useState } from 'react';
import { Menu, X, Send, Download, Sparkles, Terminal, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { RoughButton, RoughBadge } from './RoughElements';
import { ScotchTape } from './ExcaliSvgDoodles';

interface ExcaliNavbarProps {
  onOpenContact: () => void;
  onSwitchTheme?: () => void;
}

export const ExcaliNavbar: React.FC<ExcaliNavbarProps> = ({
  onOpenContact,
  onSwitchTheme,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-6 py-3 bg-[#fcfbf8]/90 backdrop-blur-md border-b-2 border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo - Sketch Handcrafted */}
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#fff3bf] border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e] flex items-center justify-center group-hover:rotate-3 transition-transform">
            <span className="font-hand font-bold text-lg text-[#1e1e1e]">&lt;/&gt;</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-hand font-bold text-lg sm:text-xl text-[#1e1e1e] tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="px-1.5 py-0.2 text-[10px] font-hand font-bold bg-[#d3f9d8] border border-[#1e1e1e] rounded shadow-[1px_1px_0px_#1e1e1e]">
                V2 Whiteboard
              </span>
            </div>
            <span className="text-xs font-hand text-slate-600 block -mt-1">
              Full Stack & AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white px-3 py-1.5 rounded-2xl border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-sm font-hand font-bold text-[#1e1e1e] hover:bg-[#fff9db] rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Live Excalidraw Collaborator Avatar */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-[#ebfbee] border-2 border-[#1e1e1e] rounded-full shadow-[2px_2px_0px_#1e1e1e] text-[11px] font-hand font-bold text-emerald-900 select-none">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Canvas • Kishore</span>
        </div>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Switch to V1 Theme Button */}
          {onSwitchTheme && (
            <button
              onClick={onSwitchTheme}
              className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-hand font-bold border-2 border-[#1e1e1e] shadow-[2px_2px_0px_#1e1e1e] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center gap-1.5"
              title="Switch to V1 Cyber Terminal Theme"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>V1 Cyber</span>
            </button>
          )}

          {/* Resume Download */}
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Kishoresharma_T_SDE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-[#fff9db] text-[#1e1e1e] text-xs font-hand font-bold border-2 border-[#1e1e1e] shadow-[2px_2px_0px_#1e1e1e] hover:bg-[#fff3bf] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Contact CTA */}
          <RoughButton
            onClick={onOpenContact}
            size="sm"
            variant="blue"
            className="text-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Say Hello!</span>
          </RoughButton>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl bg-white border-2 border-[#1e1e1e] shadow-[2px_2px_0px_#1e1e1e]"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 p-4 bg-white rounded-2xl border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e] space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="p-2.5 bg-[#f8f9fa] hover:bg-[#fff9db] border border-[#1e1e1e] rounded-xl font-hand font-bold text-sm text-[#1e1e1e] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span>➔</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Kishoresharma_T_SDE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-[#fff9db] border-2 border-[#1e1e1e] rounded-xl text-center font-hand font-bold text-sm shadow-[2px_2px_0px_#1e1e1e] flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume PDF
            </a>

            {onSwitchTheme && (
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onSwitchTheme();
                }}
                className="w-full py-2 bg-slate-900 text-white border-2 border-[#1e1e1e] rounded-xl font-hand font-bold text-sm shadow-[2px_2px_0px_#1e1e1e] flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" /> Switch to V1 Cyber Theme
              </button>
            )}

            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="w-full py-2 bg-[#d0ebff] border-2 border-[#1e1e1e] rounded-xl font-hand font-bold text-sm shadow-[2px_2px_0px_#1e1e1e] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
