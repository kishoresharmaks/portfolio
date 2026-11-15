import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Server, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { Project } from '../../data/portfolioData';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0d1220] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-medium">
              {project.category}
            </span>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/[0.05] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Project Screenshot / Visual Banner */}
          {project.thumbnail && (
            <div className="relative rounded-xl border border-white/10 overflow-hidden bg-black/40">
              <img
                src={project.thumbnail}
                alt={`${project.title} preview screenshot`}
                className="w-full h-56 sm:h-80 object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-transparent to-transparent opacity-80" />
              
              {/* Quick Action Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/70 text-zinc-200 border border-white/15 backdrop-blur-md">
                  {project.badge}
                </span>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors"
                    >
                      <Github size={13} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 1. Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              1. Project Overview
            </h4>
            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* 2 & 3. Problem Statement & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                <AlertCircle size={14} />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                <ShieldCheck size={14} />
                <span>Technical Solution</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 4. My Engineering Contribution */}
          {project.myContribution && project.myContribution.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                4. Key Engineering Contributions
              </h4>
              <ul className="space-y-2">
                {project.myContribution.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Technical Architecture */}
          {project.architecturePoints && project.architecturePoints.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                5. System Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecturePoints.map((arch, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] text-xs text-zinc-300 leading-relaxed">
                    <span className="font-mono text-indigo-400 font-bold mr-1.5">#{idx + 1}</span>
                    {arch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Main Features */}
          {project.mainFeatures && project.mainFeatures.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                6. Main Features & Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.mainFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Technology Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              7. Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.05] text-zinc-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 8. Challenges & Implementation Details */}
          {project.challenges && (
            <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.03]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 mb-1.5">
                8. Engineering Challenge & Solution
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <span>Open Project Site</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
