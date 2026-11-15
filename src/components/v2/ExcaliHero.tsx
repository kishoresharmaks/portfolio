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
import { Download, Sparkles, Send, MapPin, Server, Database, Layers, ArrowDown } from 'lucide-react';

interface ExcaliHeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const ExcaliHero: React.FC<ExcaliHeroProps> = ({ onOpenContact, onExploreProjects }) => {
  const { personal } = PORTFOLIO_DATA;

  const stackPills = [
    { label: '☕ Java & Spring Boot', color: 'bg-[#fff9db] text-stone-900 border-stone-800' },
    { label: '🐘 PostgreSQL & Prisma (200+ Models)', color: 'bg-[#e7f5ff] text-stone-900 border-stone-800' },
    { label: '🔒 ACID Row Locks & Concurrency', color: 'bg-[#ebfbee] text-stone-900 border-stone-800' },
    { label: '🐰 RabbitMQ Async Queues', color: 'bg-[#f3d9fa] text-stone-900 border-stone-800' },
    { label: '🐳 Docker & Linux VPS', color: 'bg-stone-100 text-stone-900 border-stone-800' },
    { label: '☁️ 2x AWS Certified (Cloud & AI)', color: 'bg-[#fff4e6] text-stone-900 border-stone-800' },
  ];

  return (
    <section id="about" className="relative pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      {/* Top Status & Availability Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
        <div className="relative inline-flex items-center gap-2 px-4 py-1.5 bg-[#fff9db] border-2 border-stone-800 rounded-lg shadow-sketch text-stone-900 text-xs sm:text-sm font-hand -rotate-0.5">
          <ScotchTape className="-top-3 left-6 w-14 h-4 opacity-85" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">Available for Backend & Full Stack SWE Roles</span>
          <span className="text-[11px] bg-stone-900 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">2026 Batch</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border-2 border-dashed border-stone-400 rounded-lg text-stone-800 text-xs font-mono font-medium">
          <MapPin size={13} className="text-stone-800" />
          <span>{personal.location}</span>
        </div>
      </div>

      {/* Main Hero Header Area */}
      <div className="text-center relative max-w-5xl mx-auto px-2">
        {/* Engineer Name & Role Badge */}
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <span className="font-hand text-2xl sm:text-3xl text-stone-800 font-extrabold tracking-tight">
            {personal.name}
          </span>
          <span className="text-stone-400 text-lg">•</span>
          <span className="font-mono text-xs sm:text-sm font-bold px-2.5 py-1 rounded-md bg-stone-900 text-amber-300 border-2 border-stone-800 shadow-sketch-sm">
            {personal.title}
          </span>
        </div>

        {/* Clear, Unobstructed Handcrafted Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-950 tracking-tight font-hand leading-[1.15] mb-5">
          Engineering Resilient Backend Services,{' '}
          <span className="relative inline-block text-stone-950 whitespace-nowrap">
            Scalable APIs
            <ScribbleUnderline color="#ffd43b" className="-bottom-2.5" />
          </span>
          {' '}& Cloud Systems
        </h1>

        {/* High-Contrast, Highly Readable Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-stone-800 max-w-3xl mx-auto font-sans leading-relaxed mb-6 font-normal">
          Specialized in{' '}
          <span className="font-bold text-stone-950 bg-[#fff3bf] px-1.5 py-0.5 rounded border border-amber-300">
            Java, Spring Boot & REST APIs
          </span>{' '}
          and{' '}
          <span className="font-bold text-stone-950 bg-[#d0ebff] px-1.5 py-0.5 rounded border border-blue-300">
            PostgreSQL ACID Row Locks
          </span>.
          Hands-on experience architecting 200+ Prisma models, courier batch dispatch engines, RabbitMQ async queues, and Dockerized cloud platforms.
          B.Tech IT at <strong className="text-stone-950 underline decoration-wavy decoration-[#74c0fc]">Sona College of Technology (CGPA: 8.01)</strong>.
        </p>

        {/* Technical Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-9 max-w-3xl mx-auto">
          {stackPills.map((pill, idx) => (
            <span
              key={idx}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-bold border-2 shadow-sketch-sm hover:shadow-sketch transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] ${pill.color}`}
            >
              {pill.label}
            </span>
          ))}
        </div>

        {/* Action Buttons with Ample Breathing Room */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <RoughButton 
            variant="yellow" 
            size="md" 
            onClick={onExploreProjects}
            className="flex items-center gap-2 group text-base"
          >
            <Sparkles size={17} className="text-amber-500 group-hover:rotate-12 transition-transform" />
            <span>Explore 6 Projects</span>
          </RoughButton>

          <RoughButton 
            variant="white" 
            size="md" 
            onClick={onOpenContact}
            className="flex items-center gap-2 text-base"
          >
            <Send size={15} />
            <span>Get In Touch</span>
          </RoughButton>

          <a 
            href={personal.resumeUrl} 
            download="Kishoresharma_T_SDE_Resume.pdf" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-stone-50 border-2 border-stone-800 text-stone-900 rounded-xl shadow-sketch hover:shadow-sketch-hover transition-all active:translate-x-[2px] active:translate-y-[2px] font-hand text-lg font-bold"
          >
            <Download size={17} className="text-stone-800" />
            <span>Official Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* 4 Handcrafted Compact Sticky Note Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto mb-16">
        <RoughStickyNote color="green" tilt="left" className="p-4 text-center">
          <p className="font-mono text-3xl font-extrabold text-stone-900">8.01</p>
          <p className="font-hand font-bold text-lg text-stone-800 leading-tight mt-0.5">B.Tech CGPA</p>
          <p className="text-xs text-stone-600 font-sans mt-0.5">Sona College of Tech</p>
        </RoughStickyNote>

        <RoughStickyNote color="yellow" tilt="right" className="p-4 text-center">
          <p className="font-mono text-2xl font-extrabold text-stone-900 pt-0.5">Java & Spring</p>
          <p className="font-hand font-bold text-lg text-stone-800 leading-tight mt-0.5">Core Specialization</p>
          <p className="text-xs text-stone-600 font-sans mt-0.5">Spring Boot & REST APIs</p>
        </RoughStickyNote>

        <RoughStickyNote color="blue" tilt="left" className="p-4 text-center">
          <p className="font-mono text-3xl font-extrabold text-stone-900">2x</p>
          <p className="font-hand font-bold text-lg text-stone-800 leading-tight mt-0.5">AWS Certified</p>
          <p className="text-xs text-stone-600 font-sans mt-0.5">Cloud & AI Practitioner</p>
        </RoughStickyNote>

        <RoughStickyNote color="pink" tilt="right" className="p-4 text-center">
          <p className="font-mono text-3xl font-extrabold text-stone-900">6+</p>
          <p className="font-hand font-bold text-lg text-stone-800 leading-tight mt-0.5">Shipped Platforms</p>
          <p className="text-xs text-stone-600 font-sans mt-0.5">Client & System Projects</p>
        </RoughStickyNote>
      </div>

      {/* Interactive Architecture Whiteboard Area */}
      <div id="architecture" className="relative mt-8 scroll-mt-24">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border-2 border-stone-800 rounded-full shadow-sketch-sm text-xs font-hand text-stone-800 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
            <span className="font-bold">Interactive Whiteboard Schematics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-hand font-bold text-stone-900">
            System Architecture Blueprint
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-xl mx-auto mt-1">
            Click nodes & tabs below to inspect multi-tier client architectures, data locking pipelines, and background worker queues:
          </p>
        </div>

        {/* Embedded Whiteboard Diagram */}
        <ExcaliWhiteboardDiagram />
      </div>
    </section>
  );
};
