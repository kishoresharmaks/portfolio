import React from 'react';
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
import { Download, Sparkles, Send, ExternalLink, Code2, ShieldCheck, MapPin } from 'lucide-react';

interface ExcaliHeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const ExcaliHero: React.FC<ExcaliHeroProps> = ({ onOpenContact, onExploreProjects }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      {/* Top Banner Ribbon / Note */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <div className="relative inline-flex items-center gap-2 px-4 py-1.5 bg-[#fff9db] border-2 border-stone-800 rounded-md shadow-sketch text-stone-800 text-sm font-hand -rotate-1">
          <ScotchTape className="-top-3 left-6 w-16 h-5 opacity-85" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold tracking-wide">Available for Full-Time SWE Roles & Projects</span>
          <span className="text-xs bg-stone-800 text-white px-2 py-0.5 rounded font-mono">2026 Batch</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 border-2 border-dashed border-stone-400 rounded-md text-stone-600 text-xs font-mono">
          <MapPin size={13} className="text-stone-700" />
          <span>{personal.location}</span>
        </div>
      </div>

      {/* Main Hero Header Area */}
      <div className="text-center relative max-w-4xl mx-auto">
        {/* Floating Handcrafted Doodles */}
        <div className="hidden md:block absolute -top-8 -left-12 -rotate-12 pointer-events-none select-none">
          <div className="bg-[#e7f5ff] border-2 border-stone-800 px-3 py-2 rounded-lg shadow-sketch text-xs font-hand text-stone-800 text-left w-36">
            <PushPin className="-top-3 left-1/2 -translate-x-1/2" />
            <p className="font-bold text-stone-900">👨‍💻 Tech Stack:</p>
            <p className="text-stone-700 font-mono text-[11px] leading-tight mt-1">Java • Spring Boot Next.js • AI Agents</p>
          </div>
        </div>

        <div className="hidden md:block absolute -top-6 -right-12 rotate-6 pointer-events-none select-none">
          <div className="bg-[#f3d9fa] border-2 border-stone-800 px-3 py-2 rounded-lg shadow-sketch text-xs font-hand text-stone-800 text-left w-36">
            <ScotchTape className="-top-3 right-4 w-12 h-5 opacity-90" />
            <div className="flex items-center gap-1 text-purple-900 font-bold">
              <DoodleStar size={16} color="#7950f2" />
              <span>V2 Excalidraw</span>
            </div>
            <p className="text-stone-700 text-[11px] mt-1 leading-tight font-hand">
              Handcrafted whiteboard architecture UI kit
            </p>
          </div>
        </div>

        {/* Small greeting */}
        <p className="font-hand text-xl sm:text-2xl text-stone-600 font-semibold mb-2">
          Hello world! I'm <span className="text-stone-900 font-bold bg-[#fff3bf] px-2 py-0.5 rounded border border-dashed border-stone-400">{personal.name}</span>
        </p>

        {/* Big Handcrafted Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight font-hand leading-tight mb-4">
          Building High-Performance{' '}
          <span className="relative inline-block text-stone-900">
            Web Applications
            <ScribbleUnderline color="#ffd43b" className="-bottom-3" />
          </span>
          , Online Stores &{' '}
          <span className="relative inline-block text-stone-900 bg-[#e7f5ff] px-2 rounded-lg border-2 border-stone-800 shadow-sketch-sm my-1">
            AI Systems
          </span>
        </h1>

        {/* Subtitle / Summary */}
        <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed mb-8 mt-6">
          Full Stack Software Engineer & AI Integration Specialist from{' '}
          <strong className="text-stone-900 underline decoration-wavy decoration-[#74c0fc]">Sona College of Technology</strong>.
          Experienced in architecting real-world e-commerce marketplaces, booking platforms, and intelligent natural-language database query tools.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <RoughButton 
            variant="yellow" 
            size="lg" 
            onClick={onExploreProjects}
            className="flex items-center gap-2 group"
          >
            <Sparkles size={18} className="text-amber-500 group-hover:rotate-12 transition-transform" />
            <span>Explore My Work</span>
            <span className="text-xs bg-stone-800 text-stone-100 px-1.5 py-0.5 rounded font-mono">6 Projects</span>
          </RoughButton>

          <RoughButton 
            variant="white" 
            size="lg" 
            onClick={onOpenContact}
            className="flex items-center gap-2"
          >
            <Send size={16} />
            <span>Get In Touch</span>
          </RoughButton>

          <a 
            href={personal.resumeUrl} 
            download 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-stone-50 border-2 border-stone-800 text-stone-900 rounded-lg shadow-sketch hover:shadow-sketch-hover transition-all active:translate-x-[2px] active:translate-y-[2px] font-hand text-lg font-bold"
          >
            <Download size={18} className="text-stone-700" />
            <span>Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* 4 Handcrafted Sticky Note Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
        <RoughStickyNote color="yellow" tilt="left" className="p-4">
          <p className="font-mono text-3xl font-extrabold text-stone-900">6+</p>
          <p className="font-hand font-bold text-lg text-stone-800 leading-tight mt-1">Completed Projects</p>
          <p className="text-xs text-stone-600 font-sans mt-1">Multi-vendor marketplaces, booking platforms & AI tools</p>
          <div className="mt-2 text-[10px] font-mono text-stone-500 uppercase">Shipped to Prod</div>
        </RoughStickyNote>

        <RoughStickyNote color="green" tilt="right" className="p-4">
          <p className="font-mono text-3xl font-extrabold text-stone-900">8.0</p>
          <p className="font-hand font-bold text-lg text-stone-800 leading-tight mt-1">B.Tech CGPA</p>
          <p className="text-xs text-stone-600 font-sans mt-1">Information Technology @ Sona College of Tech</p>
          <div className="mt-2 text-[10px] font-mono text-emerald-700 font-bold">2x Academic Award</div>
        </RoughStickyNote>

        <RoughStickyNote color="blue" tilt="left" className="p-4">
          <p className="font-mono text-3xl font-extrabold text-stone-900">2x</p>
          <p className="font-hand font-bold text-lg text-stone-800 leading-tight mt-1">AWS Certified</p>
          <p className="text-xs text-stone-600 font-sans mt-1">Cloud Practitioner & AI Practitioner (2024)</p>
          <div className="mt-2 text-[10px] font-mono text-blue-700 font-bold">AWS Verified</div>
        </RoughStickyNote>

        <RoughStickyNote color="pink" tilt="right" className="p-4">
          <p className="font-mono text-2xl font-extrabold text-stone-900 pt-1">Java & Web</p>
          <p className="font-hand font-bold text-lg text-stone-800 leading-tight mt-1">Core Specialties</p>
          <p className="text-xs text-stone-600 font-sans mt-1">Spring Boot, Next.js, Microservices & LLM APIs</p>
          <div className="mt-2 text-[10px] font-mono text-purple-700 font-bold">Full Stack Ready</div>
        </RoughStickyNote>
      </div>

      {/* Interactive Architecture Whiteboard Area */}
      <div className="relative mt-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-stone-800 rounded-full shadow-sketch-sm text-xs font-hand text-stone-800 mb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span>Interactive Excalidraw Whiteboard Canvas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-hand font-bold text-stone-900">
            System Architecture & Engineering Schematics
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-xl mx-auto">
            Click between architecture, technical specifications, and autonomous AI agents tabs below to inspect the design blueprints:
          </p>
        </div>

        {/* Embedded Whiteboard Diagram */}
        <ExcaliWhiteboardDiagram />

        {/* Small arrow doodle pointing to diagram */}
        <div className="hidden lg:flex items-center gap-2 absolute -bottom-10 right-8 text-stone-500 text-xs font-hand">
          <SketchArrow direction="curved" color="#495057" className="w-12 h-8" />
          <span>Interactive whiteboard with draggable canvas feels!</span>
        </div>
      </div>
    </section>
  );
};
