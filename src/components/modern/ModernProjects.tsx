import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Layers, 
  Sparkles,
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';
import { ProjectDetailsModal } from './ProjectDetailsModal';

export const ModernProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { projects } = PORTFOLIO_DATA;

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Multi-Vendor E-Commerce Marketplace', label: 'E-Commerce' },
    { id: 'Coworking Space Booking and Client Portal', label: 'Client Portals' },
    { id: 'AI-Powered Database Query Platform', label: 'AI Platforms' },
    { id: 'Technical Content Platform', label: 'Web Platforms' },
    { id: 'Enterprise Backend Systems', label: 'Backend Systems' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-zinc-300 mb-3">
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Production applications, distributed systems & technical platforms.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Engineered with modern full-stack architectures, relational data modeling, asynchronous queuing, and cloud deployments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-white/[0.08] bg-[#0c101c]/70 hover:bg-[#0e1322] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-black/40 border-b border-white/[0.06]">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} screenshot preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-transparent opacity-90" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/75 text-zinc-200 border border-white/10 backdrop-blur-md">
                      {project.badge}
                    </span>

                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live System</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-xs font-mono text-indigo-400 font-medium mb-1 uppercase tracking-wider">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Engineering Highlight */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-zinc-300 mb-2">
                    <span className="font-mono text-indigo-300 font-medium mr-1.5">Contribution:</span>
                    {project.highlight}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-indigo-400 transition-colors focus:outline-none focus:underline"
                >
                  <Info size={14} />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github size={16} />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
