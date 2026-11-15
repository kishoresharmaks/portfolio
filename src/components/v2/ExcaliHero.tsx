import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { 
  ScotchTape, 
  PushPin, 
  SketchArrow, 
  ScribbleUnderline, 
  DoodleStar, 
  SketchStamp 
} from './ExcaliSvgDoodles';
import { RoughButton, RoughStickyNote } from './RoughElements';
import { ExcaliWhiteboardDiagram } from './ExcaliWhiteboardDiagram';
import { Download, Sparkles, Send, MapPin, Check, MousePointer2 } from 'lucide-react';

interface ExcaliHeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const ExcaliHero: React.FC<ExcaliHeroProps> = ({ onOpenContact, onExploreProjects }) => {
  const { personal } = PORTFOLIO_DATA;
  const [activeStamp, setActiveStamp] = useState<string | null>(null);

  const stamps = [
    { id: 'swe', label: '✓ SWE Ready', color: 'bg-emerald-100 text-emerald-900 border-emerald-800' },
    { id: 'aws', label: '★ 2x AWS Cert', color: 'bg-amber-100 text-amber-900 border-amber-800' },
    { id: 'spring', label: '☕ Spring Boot', color: 'bg-blue-100 text-blue-900 border-blue-800' },
    { id: 'clean', label: '⚡ Clean Code', color: 'bg-purple-100 text-purple-900 border-purple-800' },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      {/* Top Banner Ribbon */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <div className="relative inline-flex items-center gap-2 px-3.5 py-1 bg-[#fff9db] border-2 border-stone-800 rounded-md shadow-sketch text-stone-800 text-xs sm:text-sm font-hand -rotate-1">
          <ScotchTape className="-top-3 left-6 w-14 h-4 opacity-85" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">Available for Software Engineering Roles & Client Projects</span>
          <span className="text-[11px] bg-stone-800 text-white px-1.5 py-0.2 rounded font-mono">2026</span>
        </div>

        <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-stone-100 border-2 border-dashed border-stone-400 rounded-md text-stone-600 text-xs font-mono">
          <MapPin size={12} className="text-stone-700" />
          <span>{personal.location}</span>
        </div>
      </div>

      {/* Main Hero Header Area */}
      <div className="text-center relative max-w-4xl mx-auto">
        {/* Floating Handcrafted Doodles */}
        <div className="hidden lg:block absolute -top-4 -left-16 -rotate-12 pointer-events-none select-none">
          <div className="bg-[#e7f5ff] border-2 border-stone-800 px-3 py-2 rounded-lg shadow-sketch text-xs font-hand text-stone-800 text-left w-36">
            <PushPin className="-top-3 left-1/2 -translate-x-1/2" />
            <p className="font-bold text-stone-900">👨‍💻 Stack Highlights:</p>
            <p className="text-stone-700 font-mono text-[11px] leading-tight mt-1">Java • Spring Boot Next.js • AI Agents</p>
          </div>
        </div>

        <div className="hidden lg:block absolute -top-4 -right-16 rotate-6 pointer-events-none select-none">
          <div className="bg-[#f3d9fa] border-2 border-stone-800 px-3 py-2 rounded-lg shadow-sketch text-xs font-hand text-stone-800 text-left w-36">
            <ScotchTape className="-top-3 right-4 w-12 h-4 opacity-90" />
            <div className="flex items-center gap-1 text-purple-900 font-bold">
              <DoodleStar size={14} color="#7950f2" />
              <span>V2 Whiteboard</span>
            </div>
            <p className="text-stone-700 text-[11px] mt-1 leading-tight font-hand">
              Handcrafted UI schematics
            </p>
          </div>
        </div>

        {/* Small greeting */}
        <p className="font-hand text-lg sm:text-xl text-stone-600 font-semibold mb-2">
          Hi there! I'm <span className="text-stone-900 font-bold bg-[#fff3bf] px-2 py-0.5 rounded border border-dashed border-stone-400">{personal.name}</span>
        </p>

        {/* Big Handcrafted Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight font-hand leading-tight mb-4">
          Building High-Performance{' '}
          <span className="relative inline-block text-stone-900">
            Web Applications
            <ScribbleUnderline color="#ffd43b" className="-bottom-2.5" />
          </span>
          , Online Stores &{' '}
          <span className="relative inline-block text-stone-900 bg-[#e7f5ff] px-2 rounded-lg border-2 border-stone-800 shadow-sketch-sm my-1">
            AI Systems
          </span>
        </h1>

        {/* Subtitle - Punchy and concise */}
        <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed mb-6 mt-4">
          Full Stack Engineer & AI Specialist skilled in <strong className="text-stone-900 font-semibold">Java, Spring Boot, React, Next.js, and Cloud Infrastructure</strong>. B.Tech IT at Sona College of Technology.
        </p>

        {/* Interactive Sticker Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {stamps.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStamp(s.id === activeStamp ? null : s.id)}
              className={`px-3 py-1 rounded-md text-xs font-hand font-bold border-2 transition-transform shadow-sketch-sm active:translate-x-[1px] active:translate-y-[1px] ${s.color} ${activeStamp === s.id ? 'scale-110 rotate-2' : 'hover:scale-105'}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-stone-50 border-2 border-stone-800 text-stone-900 rounded-lg shadow-sketch hover:shadow-sketch-hover transition-all active:translate-x-[2px] active:translate-y-[2px] font-hand text-base font-bold"
          >
            <Download size={16} className="text-stone-700" />
            <span>Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* 4 Handcrafted Compact Sticky Note Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
        <RoughStickyNote color="yellow" tilt="left" className="p-3 text-center">
          <p className="font-mono text-2xl sm:text-3xl font-extrabold text-stone-900">6+</p>
          <p className="font-hand font-bold text-base text-stone-800 leading-tight mt-0.5">Shipped Projects</p>
          <p className="text-[11px] text-stone-600 font-sans mt-0.5">Marketplaces & AI Tools</p>
        </RoughStickyNote>

        <RoughStickyNote color="green" tilt="right" className="p-3 text-center">
          <p className="font-mono text-2xl sm:text-3xl font-extrabold text-stone-900">8.0</p>
          <p className="font-hand font-bold text-base text-stone-800 leading-tight mt-0.5">B.Tech CGPA</p>
          <p className="text-[11px] text-stone-600 font-sans mt-0.5">Sona College of Tech</p>
        </RoughStickyNote>

        <RoughStickyNote color="blue" tilt="left" className="p-3 text-center">
          <p className="font-mono text-2xl sm:text-3xl font-extrabold text-stone-900">2x</p>
          <p className="font-hand font-bold text-base text-stone-800 leading-tight mt-0.5">AWS Certified</p>
          <p className="text-[11px] text-stone-600 font-sans mt-0.5">Cloud & AI Practitioner</p>
        </RoughStickyNote>

        <RoughStickyNote color="pink" tilt="right" className="p-3 text-center">
          <p className="font-mono text-xl sm:text-2xl font-extrabold text-stone-900 pt-0.5">Java & Web</p>
          <p className="font-hand font-bold text-base text-stone-800 leading-tight mt-0.5">Core Stack</p>
          <p className="text-[11px] text-stone-600 font-sans mt-0.5">Spring Boot & Next.js</p>
        </RoughStickyNote>
      </div>

      {/* Interactive Architecture Whiteboard Area */}
      <div className="relative mt-6">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white border-2 border-stone-800 rounded-full shadow-sketch-sm text-xs font-hand text-stone-800 mb-1">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span>Interactive Whiteboard Schematics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-hand font-bold text-stone-900">
            System Architecture Blueprint
          </h2>
          <p className="text-xs text-stone-600 font-sans">
            Click nodes & tabs below to inspect live architecture layers:
          </p>
        </div>

        {/* Embedded Whiteboard Diagram */}
        <ExcaliWhiteboardDiagram />
      </div>
    </section>
  );
};
