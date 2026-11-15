import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernExperience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-zinc-300 mb-3">
            <span>CAREER & WORK HISTORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Professional development experience and practical engineering.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Demonstrated track record of delivering production backend systems, database schemas, and client web applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c101c]/60 hover:bg-[#0c101c] hover:border-white/15 transition-all duration-200 relative"
            >
              {/* Header: Title, Company, Period */}
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3 pb-4 mb-5 border-b border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Briefcase size={15} />
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm text-zinc-300 font-medium">
                    {exp.company} • <span className="text-zinc-400 font-normal">{exp.type}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400">
                  <div className="inline-flex items-center gap-1.5 text-zinc-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 mt-1.5">
                    <MapPin size={11} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Responsibilities & Impact
                </div>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
