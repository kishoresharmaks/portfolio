import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  Monitor,
  Code2,
  Globe
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'E-Commerce', 'Enterprise Systems', 'AI & Web Platforms'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Featured Case Studies & Software Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
            Production <span className="gradient-text-brand">Projects & Web Platforms</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore key user features, live website links, and system highlights for each of my completed software engineering projects.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'glass-card text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const imagePath = `/images/${project.id}.png`;

            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="glass-card glass-card-hover rounded-2xl border border-white/10 flex flex-col justify-between cursor-pointer group relative overflow-hidden bg-[#0A0E18]"
              >
                <div>
                  {/* Platform Image Preview Container - Shown ONLY if project.liveUrl is set */}
                  {project.liveUrl ? (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                      <img
                        src={imagePath}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Category Badge Overlay */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Live Link Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-[10px] font-mono flex items-center gap-1 hover:bg-emerald-500 hover:text-black transition-colors"
                          title="Open Live Website"
                        >
                          <Globe className="w-3 h-3" />
                          <span>LIVE</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Standard Top Badge Header - Rendered when liveUrl is not set */
                    <div className="px-6 pt-6 pb-2 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* Card Content Padding */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors font-outfit flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>
                      <p className="text-xs text-indigo-300 font-medium mt-0.5">{project.subtitle}</p>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 text-slate-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 border-t border-white/10 bg-slate-900/40 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium group-hover:text-white transition-colors flex items-center gap-1">
                    <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Details & Specs</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-600/80 group-hover:bg-indigo-500 text-white font-medium text-[11px] transition-colors">
                    Open &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
