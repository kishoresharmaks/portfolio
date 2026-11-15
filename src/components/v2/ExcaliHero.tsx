import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { 
  ScotchTape, 
  PushPin, 
  SketchArrow, 
  ScribbleUnderline, 
  DoodleStar 
} from './ExcaliSvgDoodles';
import { RoughButton } from './RoughElements';
import { ExcaliWhiteboardDiagram } from './ExcaliWhiteboardDiagram';
import { ExcaliDeveloperCard } from './ExcaliDeveloperCard';
import { 
  Download, 
  Sparkles, 
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  ShieldCheck,
  Award,
  CheckCircle2
} from 'lucide-react';

interface ExcaliHeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const ExcaliHero: React.FC<ExcaliHeroProps> = ({ onOpenContact, onExploreProjects }) => {
  const { personal } = PORTFOLIO_DATA;

  const quickPills = [
    { label: '☕ Java & Spring Boot', color: 'bg-[#fff9db] text-stone-900 border-stone-800' },
    { label: '🐘 PostgreSQL & ACID Row-Locks', color: 'bg-[#e7f5ff] text-stone-900 border-stone-800' },
    { label: '🐰 RabbitMQ Queues', color: 'bg-[#f3d9fa] text-stone-900 border-stone-800' },
    { label: '🐳 Docker & Linux', color: 'bg-stone-100 text-stone-900 border-stone-800' },
    { label: '☁️ 2x AWS Certified', color: 'bg-[#fff4e6] text-stone-900 border-stone-800' },
  ];

  return (
    <section id="about" className="relative pt-16 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      {/* Top Status & Availability Bar */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-8">
        <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#fff9db] border-2 border-stone-800 rounded-lg shadow-sketch text-stone-900 text-xs sm:text-sm font-hand -rotate-0.5">
          <ScotchTape className="-top-3 left-6 w-14 h-4 opacity-85" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">Available for Backend & Full Stack SWE Roles</span>
          <span className="text-[11px] bg-stone-900 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">2026 Batch</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border-2 border-dashed border-stone-400 rounded-lg text-stone-800 text-xs font-mono font-medium">
          <MapPin size={12} className="text-stone-800" />
          <span>{personal.location}</span>
        </div>
      </div>

      {/* Main Hero Split Grid: Left = Personal Identity & Bio; Right = Handcrafted Developer Studio Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        
        {/* Left Column (5 cols): Personal Introduction, Headline & CTAs */}
        <div className="lg:col-span-5 text-left">
          
          {/* Friendly Personal Greeting */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-hand font-bold text-lg sm:text-xl text-stone-700">
              👋 Hi there! I'm
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-900 text-amber-300 border-2 border-stone-800 shadow-sketch-sm">
              Backend Software Engineer
            </span>
          </div>

          {/* Big Personal Name Heading with Sketch Marker */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-950 tracking-tight font-hand leading-[1.08] mb-4">
            <span className="relative inline-block text-stone-950">
              {personal.name}
              <ScribbleUnderline color="#ffd43b" className="-bottom-2.5" />
            </span>
          </h1>

          {/* Value Proposition Headline */}
          <h2 className="text-xl sm:text-2xl font-bold font-hand text-stone-800 leading-snug mb-4">
            Architecting Resilient Backend Systems, Scalable APIs & Cloud Infrastructure.
          </h2>

          {/* Authentic Personal Summary */}
          <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed mb-5 font-normal">
            Specialized in <strong className="text-stone-950 font-bold bg-[#fff3bf] px-1 py-0.5 rounded border border-amber-300">Java & Spring Boot</strong>,{' '}
            <strong className="text-stone-950 font-bold bg-[#d0ebff] px-1 py-0.5 rounded border border-blue-300">PostgreSQL ACID row-locks</strong>,{' '}
            and RabbitMQ async message brokers. B.Tech IT @ Sona College of Technology (<strong className="text-emerald-800 font-bold">8.01 CGPA</strong>).
          </p>

          {/* Quick Stack Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {quickPills.map((pill, idx) => (
              <span
                key={idx}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border-2 shadow-sketch-sm ${pill.color}`}
              >
                {pill.label}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Primary: Download Resume */}
            <a 
              href={personal.resumeUrl} 
              download="Kishoresharma_T_SDE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#fff9db] hover:bg-[#fff3bf] border-2 border-stone-800 text-stone-950 rounded-xl shadow-[3px_3px_0px_#1e1e1e] text-sm font-hand font-extrabold active:translate-x-[1px] active:translate-y-[1px] transition-all hover:scale-105"
            >
              <Download size={16} className="text-stone-900" />
              <span>Download Resume PDF</span>
            </a>

            {/* Secondary: Get in touch */}
            <RoughButton 
              variant="blue" 
              size="md" 
              onClick={onOpenContact}
              className="flex items-center gap-1.5 text-sm"
            >
              <Send size={14} />
              <span>Get In Touch</span>
            </RoughButton>

            {/* Tertiary: View 6 Shipped Projects */}
            <RoughButton 
              variant="white" 
              size="md" 
              onClick={onExploreProjects}
              className="flex items-center gap-1.5 text-sm"
            >
              <Sparkles size={15} className="text-amber-500" />
              <span>View Projects (6)</span>
            </RoughButton>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="flex items-center gap-3 text-xs font-hand font-bold text-stone-800 pt-3 border-t border-dashed border-stone-300">
            <span className="text-stone-500 font-mono text-[11px]">Connect:</span>
            
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-stone-800 hover:bg-stone-100 shadow-sketch-sm transition-all"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-stone-800 hover:bg-stone-100 shadow-sketch-sm transition-all"
            >
              <Linkedin size={13} className="text-blue-700" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-stone-800 hover:bg-stone-100 shadow-sketch-sm transition-all"
            >
              <Mail size={13} className="text-rose-600" />
              <span>Email</span>
            </a>
          </div>

          {/* 4 Quick Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-dashed border-stone-300">
            <div className="p-2 bg-emerald-50 border border-emerald-300 rounded-lg text-center">
              <div className="text-sm font-hand font-extrabold text-emerald-950">8.01 CGPA</div>
              <div className="text-[10px] font-mono text-emerald-800">B.Tech IT Distinction</div>
            </div>

            <div className="p-2 bg-amber-50 border border-amber-300 rounded-lg text-center">
              <div className="text-sm font-hand font-extrabold text-amber-950">2x AWS Cert</div>
              <div className="text-[10px] font-mono text-amber-800">Cloud & AI Verified</div>
            </div>

            <div className="p-2 bg-blue-50 border border-blue-300 rounded-lg text-center">
              <div className="text-sm font-hand font-extrabold text-blue-950">6+ Shipped</div>
              <div className="text-[10px] font-mono text-blue-800">Client Platforms</div>
            </div>

            <div className="p-2 bg-purple-50 border border-purple-300 rounded-lg text-center">
              <div className="text-sm font-hand font-extrabold text-purple-950">200+ Models</div>
              <div className="text-[10px] font-mono text-purple-800">PostgreSQL ACID</div>
            </div>
          </div>

        </div>

        {/* Right Column (7 cols): Handcrafted Personal Developer Profile Workbench */}
        <div className="lg:col-span-7">
          <div className="text-left mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-hand font-bold text-base sm:text-lg text-stone-900">
                Developer Identity & Studio Card:
              </span>
            </div>
            <span className="text-xs font-hand text-stone-600 font-bold">
              Click tabs to explore ➔
            </span>
          </div>

          {/* Handcrafted Excalidraw Developer Studio Card */}
          <ExcaliDeveloperCard />
        </div>

      </div>

      {/* Interactive System Schematics Section */}
      <div id="architecture" className="relative mt-12 scroll-mt-24">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border-2 border-stone-800 rounded-full shadow-sketch-sm text-xs font-hand text-stone-800 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
            <span className="font-bold">Interactive Engineering Schematics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-hand font-bold text-stone-900">
            System Architecture Blueprints
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-xl mx-auto mt-1">
            Click between architecture, technical specifications, and autonomous AI agent tabs to inspect production blueprints:
          </p>
        </div>

        {/* Embedded Whiteboard Diagram */}
        <ExcaliWhiteboardDiagram />
      </div>
    </section>
  );
};
