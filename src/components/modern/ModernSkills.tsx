import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Wrench,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernSkills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ReactNode> = {
    'Frontend Development': <Layout className="w-5 h-5 text-indigo-400" />,
    'Backend Development': <Server className="w-5 h-5 text-blue-400" />,
    'Database and ORM': <Database className="w-5 h-5 text-emerald-400" />,
    'DevOps and Infrastructure': <Cloud className="w-5 h-5 text-purple-400" />,
    'Tools and Integrations': <Wrench className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-zinc-300 mb-3">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Categorized technical capabilities and engineering tools.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Structured skill architecture based on hands-on application development, client implementations, and production systems.
          </p>
        </div>

        {/* 5 Distinct Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.035] hover:border-white/15 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    {categoryIcons[category.title] || <Server className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-zinc-200 border border-white/[0.08] hover:border-white/20 hover:text-white transition-colors"
                    >
                      <Check size={11} className="text-indigo-400" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>{category.skills.length} Technologies</span>
                <span className="text-emerald-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
