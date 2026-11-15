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
import { Download, Sparkles, Send, MapPin, Code2, Server, Database, Cloud } from 'lucide-react';

interface ExcaliHeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const ExcaliHero: React.FC<ExcaliHeroProps> = ({ onOpenContact, onExploreProjects }) => {
  const { personal } = PORTFOLIO_DATA;

  const stackPills = [
    { label: 'Java & Spring Boot', color: 'bg-[#fff3bf] text-stone-900 border-stone-800' },
    { label: 'PostgreSQL & Prisma (200+ Models)', color: 'bg-[#d0ebff] text-blue-950 border-stone-800' },
    { label: 'ACID Row Locks & Concurrency', color: 'bg-[#ebfbee] text-emerald-950 border-stone-800' },
    { label: 'RabbitMQ Message Queues', color: 'bg-[#f3d9fa] text-purple-950 border-stone-800' },
    { label: 'Docker & Linux VPS', color: 'bg-stone-100 text-stone-900 border-stone-800' },
    { label: '2x AWS Certified (Cloud & AI)', color: 'bg-[#ffe8cc] text-amber-950 border-stone-800' },
  ];

  return (
    <section id="about" className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      {/* Top Professional Availability Banner */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
        <div className="relative inline-flex items-center gap-2 px-3.5 py-1 bg-[#fff9db] border-2 border-stone-800 rounded-md shadow-sketch text-stone-900 text-xs sm:text-sm font-hand -rotate-0.5">
          <ScotchTape className="-top-3 left-6 w-14 h-4 opacity-85" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">Available for Backend & Full Stack SWE Roles</span>
          <span className="text-[11px] bg-stone-800 text-white px-1.5 py-0.2 rounded font-mono">2026 Batch</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 border-2 border-dashed border-stone-400 rounded-md text-stone-700 text-xs font-mono">
          <MapPin size={12} className="text-stone-800" />
          <span>{personal.location}</span>
        </div>
      </div>

      {/* Main Hero Header Area */}
      <div className="text-center relative max-w-4xl mx-auto">
        {/* Floating Architect Notes on sides */}
        <div className="hidden xl:block absolute -top-4 -left-16 -rotate-6 pointer-events-none select-none">
          <div className="bg-[#fffdfa] border-2 border-stone-800 px-3 py-2 rounded-lg shadow-sketch text-xs font-hand text-stone-800 text-left w-40">
            <PushPin className="-top-3 left-1/2 -translate-x-1/2" />
            <p className="font-bold text-stone-900 flex items-center gap-1">
              <Server size={12} /> Backend Core:
            </p>
            <p className="text-stone-700 font-mono text-[11px] leading-tight mt-1">
              Java • Spring Boot JPA • REST APIs • Docker
            </p>
          </div>
        </div>

        <div className="hidden xl:block absolute -top-4 -right-16 rotate-4 pointer-events-none select-none">
          <div className="bg-[#fffdfa] border-2 border-stone-800 px-3 py-2 rounded-lg shadow-sketch text-xs font-hand text-stone-800 text-left w-40">
            <ScotchTape className="-top-3 right-4 w-12 h-4 opacity-90" />
            <p className="font-bold text-stone-900 flex items-center gap-1">
              <Database size={12} /> Data & Scale:
            </p>
            <p className="text-stone-700 font-mono text-[11px] leading-tight mt-1">
              PostgreSQL • RabbitMQ ACID Row-Locks • CI/CD
            </p>
          </div>
        </div>

        {/* Engineer Name & Title */}
        <div className="mb-2">
          <span className="font-hand text-xl sm:text-2xl text-stone-700 font-bold">
            {personal.name}
          </span>
          <span className="mx-2 text-stone-400">•</span>
          <span className="font-mono text-xs sm:text-sm font-bold px-2 py-0.5 rounded bg-stone-200 border border-stone-400 text-stone-800">
            {personal.title}
          </span>
        </div>

        {/* Big Handcrafted Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight font-hand leading-tight mb-4">
          Engineering Resilient Backend Services,{' '}
          <span className="relative inline-block text-stone-900">
            Scalable APIs
            <ScribbleUnderline color="#ffd43b" className="-bottom-2.5" />
          </span>
          {' '}& Cloud Systems
        </h1>

        {/* Subtitle - Exact, professional, no fluff */}
        <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-3xl mx-auto font-sans leading-relaxed mb-6 mt-3">
          Specialized in <strong className="text-stone-900 font-semibold">Java, Spring Boot, REST APIs, PostgreSQL, and Docker</strong>.
          Hands-on experience architecting 200+ Prisma models, ACID-compliant courier batch routing engines with PostgreSQL row locks, RabbitMQ message brokers, and production web platforms.
          B.Tech IT at <span className="font-semibold text-stone-900">Sona College of Technology (CGPA: 8.01)</span>.
        </p>

        {/* Verified Technical Badges from Resume */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-3xl mx-auto">
          {stackPills.map((pill, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-md text-xs font-mono font-bold border-2 shadow-sketch-sm ${pill.color}`}
            >
              {pill.label}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <RoughButton 
            variant="yellow" 
            size="md" 
            onClick={onExploreProjects}
            className="flex items-center gap-2 group"
          >
            <Sparkles size={16} className="text-amber-500 group-hover:rotate-12 transition-transform" />
            <span>Explore 6 Projects</span>
          </RoughButton>

          <RoughButton 
            variant="white" 
            size="md" 
            onClick={onOpenContact}
            className="flex items-center gap-2"
          >
            <Send size={15} />
            <span>Get In Touch</span>
          </RoughButton>

          <a 
            href={personal.resumeUrl} 
            download="Kishoresharma_T_SDE_Resume.pdf" 
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-stone-50 border-2 border-stone-800 text-stone-900 rounded-xl shadow-sketch hover:shadow-sketch-hover transition-all active:translate-x-[2px] active:translate-y-[2px] font-hand text-base font-bold"
          >
            <Download size={16} className="text-stone-700" />
            <span>Official Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* 4 Handcrafted Compact Sticky Note Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto mb-14">
        <RoughStickyNote color="green" tilt="left" className="p-3.5 text-center">
          <p className="font-mono text-2xl sm:text-3xl font-extrabold text-stone-900">8.01</p>
          <p className="font-hand font-bold text-base text-stone-800 leading-tight mt-0.5">B.Tech CGPA</p>
          <p className="text-[11px] text-stone-600 font-sans mt-0.5">Sona College of Tech</p>
        </RoughStickyNote>

        <RoughStickyNote color="yellow" tilt="right" className="p-3.5 text-center">
          <p className="font-mono text-xl sm:text-2xl font-extrabold text-stone-900 pt-0.5">Java & Spring</p>
          <p className="font-hand font-bold text-base text-stone-800 leading-tight mt-0.5">Core Specialization</p>
          <p className="text-[11px] text-stone-600 font-sans mt-0.5">Spring Boot & REST APIs</p>
        </RoughStickyNote>

        <RoughStickyNote color="blue" tilt="left" className="p-3.5 text-center">
          <p className="font-mono text-2xl sm:text-3xl font-extrabold text-stone-900">2x</p>
          <p className="font-hand font-bold text-base text-stone-800 leading-tight mt-0.5">AWS Certified</p>
          <p className="text-[11px] text-stone-600 font-sans mt-0.5">Cloud & AI Practitioner</p>
        </RoughStickyNote>

        <RoughStickyNote color="pink" tilt="right" className="p-3.5 text-center">
          <p className="font-mono text-2xl sm:text-3xl font-extrabold text-stone-900">6+</p>
          <p className="font-hand font-bold text-base text-stone-800 leading-tight mt-0.5">Shipped Platforms</p>
          <p className="text-[11px] text-stone-600 font-sans mt-0.5">Client & System Projects</p>
        </RoughStickyNote>
      </div>

      {/* Interactive Architecture Whiteboard Area */}
      <div id="architecture" className="relative mt-8 scroll-mt-24">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white border-2 border-stone-800 rounded-full shadow-sketch-sm text-xs font-hand text-stone-800 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span>Interactive Whiteboard Schematics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-hand font-bold text-stone-900">
            System Architecture Blueprint
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-xl mx-auto">
            Click nodes & tabs below to inspect multi-tier client architectures, data locking pipelines, and background worker queues:
          </p>
        </div>

        {/* Embedded Whiteboard Diagram */}
        <ExcaliWhiteboardDiagram />
      </div>
    </section>
  );
};
