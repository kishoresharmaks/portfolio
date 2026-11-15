import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { 
  ScotchTape, 
  PushPin, 
  SketchArrow, 
  ScribbleUnderline, 
  DoodleStar 
} from './ExcaliSvgDoodles';
import { RoughButton, RoughStickyNote } from './RoughElements';
import { ExcaliWhiteboardDiagram } from './ExcaliWhiteboardDiagram';
import { ExcaliHeroLiveSim } from './ExcaliHeroLiveSim';
import { Download, Sparkles, Send, MapPin, Server, Database, Layers, ArrowDown } from 'lucide-react';

interface ExcaliHeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const ExcaliHero: React.FC<ExcaliHeroProps> = ({ onOpenContact, onExploreProjects }) => {
  const { personal } = PORTFOLIO_DATA;

  const stackPills = [
    { label: '☕ Java & Spring Boot', color: 'bg-[#fff9db] text-stone-900 border-stone-800' },
    { label: '🐘 PostgreSQL & Prisma', color: 'bg-[#e7f5ff] text-stone-900 border-stone-800' },
    { label: '🔒 ACID Row-Locks', color: 'bg-[#ebfbee] text-stone-900 border-stone-800' },
    { label: '🐰 RabbitMQ Queues', color: 'bg-[#f3d9fa] text-stone-900 border-stone-800' },
    { label: '🐳 Docker & Linux', color: 'bg-stone-100 text-stone-900 border-stone-800' },
    { label: '☁️ 2x AWS Certified', color: 'bg-[#fff4e6] text-stone-900 border-stone-800' },
  ];

  return (
    <section id="about" className="relative pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      {/* Top Status & Availability Bar */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-8">
        <div className="relative inline-flex items-center gap-2 px-3.5 py-1 bg-[#fff9db] border-2 border-stone-800 rounded-lg shadow-sketch text-stone-900 text-xs sm:text-sm font-hand -rotate-0.5">
          <ScotchTape className="-top-3 left-6 w-14 h-4 opacity-85" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">Available for Backend & Full Stack SWE Roles</span>
          <span className="text-[11px] bg-stone-900 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">2026 Batch</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 border-2 border-dashed border-stone-400 rounded-lg text-stone-800 text-xs font-mono font-medium">
          <MapPin size={12} className="text-stone-800" />
          <span>{personal.location}</span>
        </div>
      </div>

      {/* Main Hero Split Grid: Left = Punchy Bio & CTAs; Right = Live Animated Architecture Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
        
        {/* Left Column (5 cols): Clean, punchy, minimal text */}
        <div className="lg:col-span-5 text-left">
          {/* Name & Title Header */}
          <div className="inline-flex items-center gap-2 mb-3">
            <h2 className="font-hand text-3xl sm:text-4xl text-stone-900 font-extrabold tracking-tight">
              {personal.name}
            </h2>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-900 text-amber-300 border-2 border-stone-800 shadow-sketch-sm">
              {personal.title}
            </span>
          </div>

          {/* Big Punchy Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight font-hand leading-[1.18] mb-4">
            Architecting Resilient{' '}
            <span className="relative inline-block text-stone-950">
              Backend Systems
              <ScribbleUnderline color="#ffd43b" className="-bottom-2" />
            </span>
            {' '}& Scalable APIs.
          </h1>

          {/* 1 Single Crisp Sentence — Zero text clutter */}
          <p className="text-base text-stone-800 font-sans leading-relaxed mb-5 font-normal">
            Specialized in <strong className="text-stone-950 font-bold bg-[#fff3bf] px-1 py-0.2 rounded border border-amber-300">Java & Spring Boot</strong>,{' '}
            <strong className="text-stone-950 font-bold bg-[#d0ebff] px-1 py-0.2 rounded border border-blue-300">PostgreSQL ACID row-locks</strong>,{' '}
            and RabbitMQ message queues. B.Tech IT @ Sona College of Technology (CGPA: 8.01).
          </p>

          {/* Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {stackPills.map((pill, idx) => (
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
            <RoughButton 
              variant="yellow" 
              size="md" 
              onClick={onExploreProjects}
              className="flex items-center gap-1.5 text-sm"
            >
              <Sparkles size={16} className="text-amber-500" />
              <span>Explore 6 Projects</span>
            </RoughButton>

            <RoughButton 
              variant="white" 
              size="md" 
              onClick={onOpenContact}
              className="flex items-center gap-1.5 text-sm"
            >
              <Send size={14} />
              <span>Get In Touch</span>
            </RoughButton>

            <a 
              href={personal.resumeUrl} 
              download="Kishoresharma_T_SDE_Resume.pdf" 
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-stone-50 border-2 border-stone-800 text-stone-900 rounded-xl shadow-sketch text-sm font-hand font-bold active:translate-x-[1px] active:translate-y-[1px]"
            >
              <Download size={15} className="text-stone-800" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* 3 Quick Stat Badges */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-700 pt-2 border-t border-dashed border-stone-300">
            <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-400 text-emerald-950">
              8.01 CGPA
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-400 text-amber-950">
              2x AWS Certified
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-100 border border-blue-400 text-blue-950">
              6+ Shipped Platforms
            </span>
          </div>
        </div>

        {/* Right Column (7 cols): How My Code Handles Real Traffic */}
        <div className="lg:col-span-7">
          <div className="text-left mb-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-hand font-bold text-lg text-stone-900">
                How An Order Works (Live Animation):
              </span>
            </div>
            <span className="text-xs font-hand text-stone-600 font-bold">
              Watch the steps in real time ➔
            </span>
          </div>

          {/* Live Architecture Simulation Canvas */}
          <ExcaliHeroLiveSim />
        </div>

      </div>

      {/* Interactive System Schematics Section */}
      <div id="architecture" className="relative mt-8 scroll-mt-24">
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
