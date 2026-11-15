import React from 'react';
import { Download, FileText, Mail, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernResumeCTA: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm text-center">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-indigo-600/[0.1] blur-[80px] rounded-full pointer-events-none -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 mb-4">
            <FileText size={13} className="text-indigo-400" />
            <span>CURRICULUM VITAE</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Let's build something meaningful.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed mb-8">
            Interested in my development experience and technical background? Explore my resume for more details.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={personal.resumeUrl}
              download="Kishoresharma_T_SDE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-zinc-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-zinc-400"
            >
              <Mail size={15} />
              <span>Direct Email</span>
            </a>
          </div>

          <div className="mt-6 text-[11px] font-mono text-zinc-400">
            PDF Document • Updated 2026 Batch Credentials
          </div>

        </div>
      </div>
    </section>
  );
};
