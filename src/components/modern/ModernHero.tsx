import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Terminal,
  MapPin,
  Sparkles,
  Layers,
  Server,
  Database
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernHero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Subtle Ambient Light Gradients (Linear / Vercel inspired) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/[0.07] blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[250px] bg-blue-600/[0.05] blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Professional Copy & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span>{personal.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12]">
              Building scalable applications and meaningful digital experiences.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl">
              {personal.supportingText}
            </p>

            {/* Compact Technology Line */}
            <div className="pt-1">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Core Technologies
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {personal.compactTechLine.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-200 border border-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-600/30 transition-all hover:translate-y-[-1px] active:translate-y-[0px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <span>Explore My Work</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={personal.resumeUrl}
                download="Kishoresharma_T_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all hover:text-white hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              >
                <Download size={15} className="text-zinc-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Contact Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>

              <span className="text-zinc-700">•</span>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin size={14} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <span className="text-zinc-700">•</span>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                title="Click to copy email address"
              >
                <Mail size={14} className="text-emerald-400" />
                <span>{personal.email}</span>
                {copiedEmail ? (
                  <Check size={12} className="text-emerald-400" />
                ) : (
                  <Copy size={12} className="text-zinc-500" />
                )}
              </button>

              <span className="text-zinc-700 hidden sm:inline">•</span>

              <div className="inline-flex items-center gap-1 text-zinc-400 hidden sm:inline-flex">
                <MapPin size={13} />
                <span>Salem, India</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Modern Engineering Panel / Code Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/[0.1] bg-[#0c101c]/90 shadow-2xl overflow-hidden backdrop-blur-md">
              
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 ml-2">
                    developer.config.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Code Snippet Body (Clean, syntax-highlighted, genuine technical representation) */}
              <div className="p-4 sm:p-5 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto scrollbar-none space-y-1">
                <div>
                  <span className="text-indigo-400">export const</span> <span className="text-amber-300">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span> <span className="text-emerald-300">'{personal.name}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span> <span className="text-emerald-300">'Full-Stack Software Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">focus:</span> [
                  <span className="text-cyan-300">'Scalable Backends'</span>,{' '}
                  <span className="text-cyan-300">'REST APIs'</span>,{' '}
                  <span className="text-cyan-300">'Web Apps'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">stack:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-zinc-400">frontend:</span> [<span className="text-amber-200">'React'</span>, <span className="text-amber-200">'Next.js'</span>, <span className="text-amber-200">'TypeScript'</span>],
                </div>
                <div className="pl-8">
                  <span className="text-zinc-400">backend:</span> [<span className="text-amber-200">'Node.js'</span>, <span className="text-amber-200">'NestJS'</span>, <span className="text-amber-200">'Java/Spring'</span>],
                </div>
                <div className="pl-8">
                  <span className="text-zinc-400">databases:</span> [<span className="text-amber-200">'PostgreSQL'</span>, <span className="text-amber-200">'Prisma'</span>, <span className="text-amber-200">'MongoDB'</span>],
                </div>
                <div className="pl-8">
                  <span className="text-zinc-400">infrastructure:</span> [<span className="text-amber-200">'Linux VPS'</span>, <span className="text-amber-200">'Docker'</span>, <span className="text-amber-200">'Nginx'</span>],
                </div>
                <div className="pl-4">
                  &#125;,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">certifications:</span> [<span className="text-blue-300">'AWS Cloud Practitioner'</span>, <span className="text-blue-300">'AWS AI Practitioner'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">status:</span> <span className="text-emerald-400">'Available for software engineering roles'</span>
                </div>
                <div>
                  &#125;;
                </div>
              </div>

              {/* Lower Status Info Bar */}
              <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <Server size={13} className="text-indigo-400" />
                  <span>Linux VPS Deployment</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Database size={13} className="text-cyan-400" />
                  <span>ACID Row Locks</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
