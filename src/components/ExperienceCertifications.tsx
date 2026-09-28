import React from 'react';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles,
  ExternalLink,
  BookOpen,
  Users
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceCertifications: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Experience Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-semibold text-emerald-300 border border-emerald-500/20">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>Industry Internship & Roles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
              Work & <span className="gradient-text-brand">Internship Experience</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white font-outfit mt-1">{exp.role}</h3>
                    <p className="text-sm font-semibold text-indigo-300">{exp.company}</p>
                  </div>

                  <div className="text-xs text-slate-400 font-mono space-y-1 text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Contributions & Projects</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {exp.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div id="certifications">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-semibold text-cyan-300 border border-cyan-500/20">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
              Cloud & Full-Stack <span className="gradient-text-brand">Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300">
                      {cert.badge}
                    </span>
                    {cert.year && (
                      <span className="text-xs text-slate-400 font-mono">({cert.year})</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-outfit">{cert.title}</h3>
                  <p className="text-xs font-semibold text-cyan-300">{cert.issuer}</p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons, Awards & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-w-0 w-full">
          
          {/* Left: Hackathons & Leadership */}
          <div className="lg:col-span-7 space-y-6 min-w-0 w-full">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h3 className="text-2xl font-bold text-white font-outfit">Hackathons & Co-Curriculars</h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.achievements.map((ach, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl border border-white/10 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                    {idx === 0 ? <Trophy className="w-5 h-5" /> : idx === 1 ? <Award className="w-5 h-5 text-indigo-400" /> : <Users className="w-5 h-5 text-cyan-400" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white font-outfit">{ach.title}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                        {ach.type}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-indigo-300 mt-0.5">{ach.organization}</p>
                    <p className="text-xs text-slate-400 mt-1">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education Card */}
          <div className="lg:col-span-5 space-y-6 min-w-0 w-full">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-2xl font-bold text-white font-outfit">Education Timeline</h3>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
              
              {/* B.Tech */}
              <div className="space-y-2 relative pl-6 border-l-2 border-indigo-500">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-indigo-500"></span>
                <span className="text-xs text-indigo-300 font-mono font-semibold">{PORTFOLIO_DATA.personal.gradYear}</span>
                <h4 className="text-lg font-bold text-white font-outfit">{PORTFOLIO_DATA.personal.degree}</h4>
                <p className="text-xs text-slate-300 font-medium">{PORTFOLIO_DATA.personal.college}</p>
                <div className="inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 font-mono text-xs font-semibold border border-emerald-500/20 mt-1">
                  CGPA: {PORTFOLIO_DATA.personal.cgpa}
                </div>
              </div>

              {/* Class 12 */}
              <div className="space-y-1 relative pl-6 border-l-2 border-slate-700">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-slate-700"></span>
                <span className="text-xs text-slate-400 font-mono">2022</span>
                <h5 className="text-sm font-bold text-slate-200">Class 12 – Higher Secondary</h5>
                <p className="text-xs text-slate-400">Vaigai Matric Higher Secondary School, Salem</p>
                <span className="text-xs text-indigo-300 font-mono">Score: 77%</span>
              </div>

              {/* Class 10 */}
              <div className="space-y-1 relative pl-6 border-l-2 border-slate-800">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-slate-800"></span>
                <span className="text-xs text-slate-400 font-mono">2020</span>
                <h5 className="text-sm font-bold text-slate-200">Class 10 – Secondary School</h5>
                <p className="text-xs text-slate-400">Vaigai Matric Higher Secondary School, Salem</p>
                <span className="text-xs text-emerald-300 font-mono">Score: 92%</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
