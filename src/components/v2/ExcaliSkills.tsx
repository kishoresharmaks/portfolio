import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScotchTape, PushPin, DoodleStar, ScribbleUnderline } from './ExcaliSvgDoodles';
import { RoughBadge } from './RoughElements';
import { Server, Layout, Brain, Database, Wrench, CheckCircle2 } from 'lucide-react';

export const ExcaliSkills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const categories = PORTFOLIO_DATA.skills;

  const iconMap: Record<string, React.ReactNode> = {
    Server: <Server size={20} className="text-stone-800" />,
    Layout: <Layout size={20} className="text-stone-800" />,
    Brain: <Brain size={20} className="text-stone-800" />,
    Database: <Database size={20} className="text-stone-800" />,
    Wrench: <Wrench size={20} className="text-stone-800" />,
  };

  const filteredCategories = selectedFilter === 'all'
    ? categories
    : categories.filter(c => {
        if (selectedFilter === 'backend') return c.title.toLowerCase().includes('backend');
        if (selectedFilter === 'frontend') return c.title.toLowerCase().includes('frontend');
        if (selectedFilter === 'ai') return c.title.toLowerCase().includes('ai');
        if (selectedFilter === 'data') return c.title.toLowerCase().includes('database') || c.title.toLowerCase().includes('cloud');
        return true;
      });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative">
        <div className="inline-block relative">
          <RoughBadge variant="yellow" className="mb-3 text-sm">
            Technical Arsenal • Full Stack & Cloud
          </RoughBadge>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-hand font-extrabold text-stone-900 tracking-tight">
          Handcrafted Skill Matrix &{' '}
          <span className="relative inline-block text-stone-900">
            Tech Stacks
            <ScribbleUnderline color="#a5d8ff" />
          </span>
        </h2>
        <p className="font-sans text-stone-600 mt-2 text-sm sm:text-base">
          Core technical competencies across enterprise backends, modern web frontends, and AI integrations.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Stacks (22+)' },
            { id: 'backend', label: 'Backend & Java' },
            { id: 'frontend', label: 'Frontend & UI' },
            { id: 'ai', label: 'AI & Automations' },
            { id: 'data', label: 'Databases & Cloud' },
          ].map(filter => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-1.5 rounded-lg font-hand text-base font-bold transition-all border-2 border-stone-800 ${
                  isActive 
                    ? 'bg-stone-900 text-amber-300 shadow-sketch-sm translate-x-[1px] translate-y-[1px]' 
                    : 'bg-white text-stone-700 hover:bg-stone-100 shadow-sketch'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, idx) => {
          // Pastel accent colors per index
          const cardColors = [
            'bg-[#fffdfa]', 
            'bg-[#f8f9fa]', 
            'bg-[#fdfbf7]', 
            'bg-[#fffdf5]', 
            'bg-[#faf9f8]'
          ];
          const tapeRotations = ['-top-3 left-8 rotate-1', '-top-3 right-8 -rotate-2', '-top-3 left-1/3 rotate-2'];
          const headerColors = ['bg-[#fff3bf]', 'bg-[#d0ebff]', 'bg-[#d3f9d8]', 'bg-[#fcc2d7]', 'bg-[#e5dbff]'];

          return (
            <div
              key={category.title}
              className={`relative ${cardColors[idx % cardColors.length]} border-2 border-stone-800 rounded-xl p-6 shadow-sketch hover:shadow-sketch-lg transition-all group`}
            >
              {/* Top scotch tape */}
              <ScotchTape className={tapeRotations[idx % tapeRotations.length]} />

              {/* Push Pin on selected ones */}
              {idx === 0 && <PushPin className="-top-3.5 right-6" />}

              {/* Category Card Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg border-2 border-stone-800 ${headerColors[idx % headerColors.length]} shadow-sketch-sm`}>
                    {iconMap[category.iconName] || <Server size={20} />}
                  </div>
                  <div>
                    <h3 className="font-hand font-extrabold text-xl text-stone-900 leading-tight">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                      Verified Skillset
                    </span>
                  </div>
                </div>
              </div>

              {/* Skill Items with Handcrafted Crosshatch Bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                        <span className="font-bold text-stone-900">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {skill.tag && (
                          <span className="text-[10px] bg-stone-100 border border-stone-400 px-1.5 py-0.2 rounded font-sans text-stone-600">
                            {skill.tag}
                          </span>
                        )}
                        <span className="font-hand font-bold text-stone-800 text-sm">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Excalidraw Sketch Cross-Hatch Progress Bar */}
                    <div className="w-full h-3 bg-white border-2 border-stone-800 rounded-full overflow-hidden p-[1px] relative shadow-inner">
                      <div
                        className="h-full rounded-full transition-all duration-700 relative"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.level >= 90 ? '#ffd43b' : skill.level >= 85 ? '#74c0fc' : '#69db7c',
                          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0, rgba(0,0,0,0.15) 2px, transparent 0, transparent 6px)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-3 border-t-2 border-dashed border-stone-300 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Production Tested</span>
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <CheckCircle2 size={12} /> Ready to Deploy
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Handcrafted Architecture Note Card */}
      <div className="mt-12 bg-[#fff9db] border-2 border-stone-800 rounded-xl p-6 shadow-sketch max-w-4xl mx-auto relative -rotate-0.5">
        <ScotchTape className="-top-3 left-1/2 -translate-x-1/2 w-28 h-6" />
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#ffd43b] border-2 border-stone-800 flex items-center justify-center flex-shrink-0 shadow-sketch-sm">
            <DoodleStar size={28} color="#212529" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h4 className="font-hand font-extrabold text-2xl text-stone-900">
              Architecture & Coding Standards
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 font-sans mt-1 leading-relaxed">
              Every system I build adheres to solid engineering fundamentals: 
              <span className="font-bold text-stone-900"> OOP & SOLID principles</span>, 
              <span className="font-bold text-stone-900"> zero-compromise input validation & SQL/NoSQL injection prevention</span>, 
              <span className="font-bold text-stone-900"> mobile-first responsive interfaces</span>, and 
              <span className="font-bold text-stone-900"> modular component architectures</span>.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="font-hand font-bold text-lg px-4 py-1.5 bg-stone-900 text-amber-300 rounded-lg border-2 border-stone-800 shadow-sketch inline-block rotate-2">
              Clean Code Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
