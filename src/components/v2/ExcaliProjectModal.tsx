import React from 'react';
import { Project } from '../../data/portfolioData';
import { ScotchTape, PushPin, DoodleStar, ScribbleCircle } from './ExcaliSvgDoodles';
import { RoughButton, RoughBadge } from './RoughElements';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Sparkles, Shield, BarChart3 } from 'lucide-react';

interface ExcaliProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ExcaliProjectModal: React.FC<ExcaliProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#fdfbf7] border-3 border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sketch-xl font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Scotch Tape & Push Pins */}
        <ScotchTape className="-top-3 left-1/2 -translate-x-1/2 w-36 h-6 opacity-90" />
        <PushPin className="top-4 left-6" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-white border-2 border-stone-800 flex items-center justify-center text-stone-700 hover:bg-stone-100 hover:text-stone-900 shadow-sketch transition-all active:translate-x-[1px] active:translate-y-[1px]"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header Wireframe Bar */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-dashed border-stone-300">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400 border border-stone-800 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 border border-stone-800 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 border border-stone-800 inline-block" />
          </div>
          <span className="font-mono text-xs text-stone-500 pl-2">
            spec://blueprint/{project.id}.excalidraw
          </span>
          <div className="ml-auto pr-10">
            <RoughBadge variant="yellow" className="text-xs">
              {project.badge}
            </RoughBadge>
          </div>
        </div>

        {/* Project Title & Category */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-md bg-[#e7f5ff] border border-stone-800 text-stone-800 font-mono text-xs font-bold">
              {project.category}
            </span>
            {project.clientRole && (
              <span className="px-2.5 py-0.5 rounded-md bg-[#ebfbee] border border-stone-800 text-stone-800 font-mono text-xs">
                Role: {project.clientRole}
              </span>
            )}
          </div>
          <h2 className="font-hand font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            {project.title}
          </h2>
          <p className="font-hand text-lg text-stone-600 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {project.metrics.map((m, idx) => (
            <div 
              key={idx} 
              className="bg-white border-2 border-stone-800 rounded-lg p-3 shadow-sketch-sm text-center"
            >
              <div className="font-mono text-xs text-stone-500 uppercase">{m.label}</div>
              <div className="font-hand font-bold text-lg text-stone-900 mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Highlight Note */}
        <div className="bg-[#fff9db] border-2 border-stone-800 rounded-lg p-4 mb-6 shadow-sketch-sm relative">
          <div className="flex items-start gap-2.5">
            <DoodleStar size={20} color="#f59f00" className="flex-shrink-0 mt-0.5" />
            <p className="font-hand text-base text-stone-800 font-semibold leading-relaxed">
              <strong className="text-stone-900">Key Highlight: </strong>
              {project.highlight}
            </p>
          </div>
        </div>

        {/* Full Overview */}
        <div className="mb-6">
          <h3 className="font-hand font-bold text-xl text-stone-900 mb-2 flex items-center gap-2">
            <Layers size={18} className="text-stone-700" />
            <span>Full System Overview</span>
          </h3>
          <p className="text-sm text-stone-700 font-sans leading-relaxed bg-white border-2 border-stone-800 rounded-lg p-4 shadow-sketch-sm">
            {project.fullDescription}
          </p>
        </div>

        {/* Architecture Points & Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Architecture Points */}
          <div className="bg-[#f8f9fa] border-2 border-stone-800 rounded-xl p-5 shadow-sketch-sm">
            <h4 className="font-hand font-bold text-lg text-stone-900 mb-3 flex items-center gap-2">
              <Cpu size={16} className="text-indigo-600" />
              <span>Architecture & Engineering</span>
            </h4>
            <ul className="space-y-2.5">
              {project.architecturePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                  <span className="font-mono text-stone-900 font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className="bg-[#f8f9fa] border-2 border-stone-800 rounded-xl p-5 shadow-sketch-sm">
            <h4 className="font-hand font-bold text-lg text-stone-900 mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Core User Capabilities</span>
            </h4>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 size={14} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-6">
          <h4 className="font-hand font-bold text-lg text-stone-900 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="px-2.5 py-1 bg-white border-2 border-stone-800 rounded-md text-xs font-mono font-semibold text-stone-800 shadow-sketch-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-stone-800">
          <div className="text-xs text-stone-500 font-mono">
            Designed & Engineered by Kishoresharma T
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-stone-900 hover:bg-stone-800 text-amber-300 border-2 border-stone-800 rounded-lg shadow-sketch font-hand text-lg font-bold transition-all active:translate-x-[1px] active:translate-y-[1px]"
              >
                <ExternalLink size={16} />
                <span>Visit Live Platform</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 bg-white hover:bg-stone-100 text-stone-800 border-2 border-stone-800 rounded-lg shadow-sketch font-hand text-lg font-bold"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
