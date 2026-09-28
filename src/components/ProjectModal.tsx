import React from 'react';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  Tag,
  Monitor,
  ExternalLink,
  Code2,
  Globe
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const imagePath = `/images/${project.id}.png`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl glass-card rounded-2xl border border-white/15 shadow-2xl overflow-hidden my-4 sm:my-8 z-10 max-h-[92vh] flex flex-col bg-[#0B0F1A]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between bg-slate-900/90 sticky top-0 z-20 backdrop-blur-md">
          <div className="space-y-1 pr-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {project.badge}
              </span>
              {project.clientRole && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {project.clientRole}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white font-outfit mt-1 flex flex-wrap items-center gap-2">
              <span>{project.title}</span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs inline-flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/30"
                  title="Open Live Web Platform"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit Live Web Platform</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-indigo-300 font-medium">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-slate-300">
          
          {/* Webpage Screenshot Container - Rendered ONLY if liveUrl is available */}
          {project.liveUrl ? (
            <div className="relative rounded-xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl group">
              <div className="bg-slate-900/90 px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>{project.liveUrl}</span>
                </a>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Live Platform Preview
                </span>
              </div>

              {/* High Resolution Platform Screenshot */}
              <div className="relative w-full overflow-hidden bg-slate-900">
                <img
                  src={imagePath}
                  alt={`${project.title} live platform preview`}
                  className="w-full h-56 sm:h-80 object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          ) : (
            /* System Architecture Header - Rendered when liveUrl is NOT available */
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white">Full-Stack Application Architecture</span>
                  <span className="text-[11px] text-slate-400 block">System architecture and key feature breakdown</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Full Specs
              </span>
            </div>
          )}

          {/* Highlight Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-cyan-950/60 border border-indigo-500/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">Key Highlight</span>
              <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">{project.highlight}</p>
            </div>
          </div>

          {/* User-Friendly Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">About This Platform</h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="glass-card p-3 rounded-xl border border-white/5 text-center">
                <div className="text-xs sm:text-base font-bold text-white gradient-text-brand font-outfit">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* How It Works & System Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>How It Works & System Highlights</span>
            </h3>
            <ul className="space-y-2">
              {project.architecturePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Included */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>User & Admin Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Tag className="w-4 h-4 text-purple-400" />
              <span>Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-indigo-950/80 text-indigo-200 border border-indigo-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-900/90 flex items-center justify-between sticky bottom-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-mono"
              >
                <span>{project.liveUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
