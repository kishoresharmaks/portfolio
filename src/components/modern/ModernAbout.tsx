import React from 'react';
import { 
  Code2, 
  Server, 
  Layers, 
  Database, 
  Terminal, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernAbout: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;

  const strengthIcons: Record<string, React.ReactNode> = {
    'Full-Stack Development': <Code2 className="w-5 h-5 text-indigo-400" />,
    'Backend Engineering': <Server className="w-5 h-5 text-blue-400" />,
    'API Development': <Layers className="w-5 h-5 text-emerald-400" />,
    'Database Design': <Database className="w-5 h-5 text-amber-400" />,
    'Application Deployment': <Terminal className="w-5 h-5 text-purple-400" />,
    'Problem Solving': <CheckCircle2 className="w-5 h-5 text-rose-400" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-zinc-300 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineering software with clarity, scalability, and purpose.
          </h2>
        </div>

        {/* Introduction Prose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>
              {about.intro}
            </p>
            <p className="text-zinc-400 text-sm sm:text-base">
              {about.body}
            </p>
            <p className="text-zinc-400 text-sm sm:text-base">
              {about.philosophy}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <GraduationCap size={15} className="text-indigo-400" />
                <span>Academic Distinction</span>
              </div>
              <h3 className="text-base font-semibold text-white">
                {personal.degree}
              </h3>
              <p className="text-xs text-zinc-400">
                {personal.college} • {personal.gradYear}
              </p>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Cumulative GPA:</span>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {personal.cgpa}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Strengths Grid */}
        <div>
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-6">
            Technical Strengths & Capabilities
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {about.strengths.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200 group"
              >
                <div className="p-2 w-fit rounded-lg bg-white/[0.04] border border-white/[0.06] mb-3 group-hover:scale-105 transition-transform">
                  {strengthIcons[item.title] || <CheckCircle2 className="w-5 h-5 text-indigo-400" />}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
