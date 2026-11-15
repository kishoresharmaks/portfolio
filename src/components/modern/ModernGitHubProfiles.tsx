import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Code2, GitFork, Star, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernGitHubProfiles: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const publicRepos = [
    {
      name: "portfolio",
      description: "Personal software engineering portfolio built with React, TypeScript, and modern responsive styling.",
      language: "TypeScript",
      url: "https://github.com/kishoresharmaks/portfolio",
    },
    {
      name: "spring-boot-expense-tracker",
      description: "Layered Spring Boot REST application featuring CRUD expense endpoints and relational SQL database integration.",
      language: "Java",
      url: "https://github.com/kishoresharmaks",
    },
    {
      name: "spring-security-session-auth",
      description: "Session-based user registration and authentication lifecycle implementation using Spring Boot.",
      language: "Java",
      url: "https://github.com/kishoresharmaks",
    },
  ];

  return (
    <section className="py-20 md:py-24 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-zinc-300 mb-3">
            <span>OPEN SOURCE & CODE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            GitHub activity and developer profiles.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Explore my public repositories, backend experiments, and open-source contributions.
          </p>
        </div>

        {/* GitHub Highlight Card + Repository Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main GitHub Profile Box (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c101c]/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                  <Github size={24} />
                </div>
                <span className="text-xs font-mono text-zinc-400">@kishoresharmaks</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Kishoresharma T on GitHub
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Actively building backend services, Full-Stack web platforms, REST APIs, and database solutions using Java, TypeScript, and modern frameworks.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-white text-zinc-950 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>View Full GitHub Profile</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-white/[0.05] text-white border border-white/10 font-medium text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Linkedin size={14} className="text-blue-400" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Featured Repositories (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
              Featured Public Repositories
            </div>

            {publicRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Code2 size={16} className="text-indigo-400" />
                    <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors font-mono">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  {repo.description}
                </p>

                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
                  <span>{repo.language}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
