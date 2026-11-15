import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernFooter: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070a12] py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand & Tagline */}
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-base font-bold text-white tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Full-Stack Software Developer & Backend Engineer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 text-xs font-medium" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400">
              Salem, Tamil Nadu, India
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              title="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
