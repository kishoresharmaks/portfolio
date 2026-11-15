import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../../data/portfolioData';
import { ScotchTape, PushPin, DoodleStar, ScribbleUnderline, SketchStamp } from './ExcaliSvgDoodles';
import { RoughBadge, RoughButton } from './RoughElements';
import { ExcaliProjectModal } from './ExcaliProjectModal';
import { ExternalLink, Eye, ArrowUpRight, Globe, Sparkles } from 'lucide-react';

export const ExcaliProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects (6)' },
    { id: 'E-Commerce', label: '🛒 E-Commerce & Retail' },
    { id: 'Enterprise Systems', label: '🏢 Enterprise & Real-Time' },
    { id: 'AI & Web Platforms', label: '🤖 AI & Smart Platforms' },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block">
          <RoughBadge variant="green" className="mb-3 text-sm">
            Excalidraw UI Wireframe Showcase
          </RoughBadge>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-hand font-extrabold text-stone-900 tracking-tight">
          Featured Engineering{' '}
          <span className="relative inline-block text-stone-900">
            Projects & Case Studies
            <ScribbleUnderline color="#ffd43b" />
          </span>
        </h2>
        <p className="font-sans text-stone-600 mt-2 text-sm sm:text-base">
          Interactive wireframe cards of production platforms, booking systems, and generative AI interfaces.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-lg font-hand text-base font-bold transition-all border-2 border-stone-800 ${
                  isActive
                    ? 'bg-stone-900 text-amber-300 shadow-sketch-sm translate-x-[1px] translate-y-[1px]'
                    : 'bg-white text-stone-700 hover:bg-stone-100 shadow-sketch'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => {
          const tapePlacement = idx % 2 === 0 ? '-top-3 left-10 rotate-1' : '-top-3 right-10 -rotate-2';

          return (
            <div
              key={project.id}
              className="relative bg-white border-3 border-stone-800 rounded-2xl shadow-sketch-lg hover:shadow-sketch-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Scotch Tape on card edge */}
              <ScotchTape className={tapePlacement} />

              <div>
                {/* Excalidraw Browser Frame Top Window Bar */}
                <div className="bg-[#f1f3f5] border-b-2 border-stone-800 px-4 py-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff8787] border border-stone-800" />
                    <span className="w-3 h-3 rounded-full bg-[#ffd43b] border border-stone-800" />
                    <span className="w-3 h-3 rounded-full bg-[#69db7c] border border-stone-800" />
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex-1 max-w-sm mx-2 bg-white border border-stone-400 rounded-md px-2.5 py-0.5 text-[11px] font-mono text-stone-600 truncate flex items-center gap-1.5 shadow-inner">
                    <Globe size={11} className="text-stone-400 flex-shrink-0" />
                    <span className="text-emerald-700 font-bold">https://</span>
                    <span className="truncate">{project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : `${project.id}.systems.local`}</span>
                  </div>

                  <div className="text-[10px] font-mono text-stone-500 font-bold uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6">
                  {/* Badge & Role Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#fff3bf] border border-stone-800 text-stone-900 font-mono text-[11px] font-bold">
                      {project.badge}
                    </span>
                    {project.clientRole && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#e7f5ff] border border-stone-700 text-stone-800 font-mono text-[11px]">
                        Role: {project.clientRole}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-hand font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-hand text-base text-stone-600 font-semibold mt-1">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="font-sans text-xs sm:text-sm text-stone-700 mt-2.5 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Handcrafted Metrics Stickers */}
                  <div className="grid grid-cols-3 gap-2 my-5">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-[#faf9f8] border border-stone-800 rounded-lg p-2 text-center shadow-sketch-sm"
                      >
                        <div className="text-[10px] font-mono text-stone-500 uppercase leading-none truncate">
                          {m.label}
                        </div>
                        <div className="font-hand font-bold text-sm sm:text-base text-stone-900 mt-1 truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Pill Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 6).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-stone-100 border border-stone-400 rounded text-[11px] font-mono text-stone-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-1.5 py-0.5 bg-stone-200 text-stone-600 rounded text-[10px] font-mono">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="px-6 pb-6 pt-3 bg-stone-50/50 border-t-2 border-dashed border-stone-300 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-stone-800 hover:text-stone-950 font-hand font-bold text-base hover:underline decoration-wavy"
                >
                  <Eye size={16} className="text-stone-700" />
                  <span>Inspect Blueprint & Specs</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 border-2 border-stone-800 rounded-lg shadow-sketch font-hand text-sm font-bold transition-all active:translate-x-[1px] active:translate-y-[1px]"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-stone-100 text-stone-800 border-2 border-stone-800 rounded-lg shadow-sketch font-hand text-sm font-bold"
                    >
                      <span>View Specs</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Handcrafted Modal */}
      <ExcaliProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
