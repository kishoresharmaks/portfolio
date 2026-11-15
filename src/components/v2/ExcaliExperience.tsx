import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScotchTape, PushPin, DoodleStar, ScribbleUnderline, SketchStamp } from './ExcaliSvgDoodles';
import { RoughBadge } from './RoughElements';
import { Briefcase, GraduationCap, Award, CheckCircle2, Trophy, Users, ShieldCheck } from 'lucide-react';

export const ExcaliExperience: React.FC = () => {
  const { experience, certifications, achievements, personal } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-block">
          <RoughBadge variant="purple" className="mb-3 text-sm">
            Milestones • Career & Accreditations
          </RoughBadge>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-hand font-extrabold text-stone-900 tracking-tight">
          Experience, Education &{' '}
          <span className="relative inline-block text-stone-900">
            Certifications
            <ScribbleUnderline color="#b197fc" />
          </span>
        </h2>
        <p className="font-sans text-stone-600 mt-4 text-base sm:text-lg">
          Practical software engineering internships, academic distinctions, AWS cloud credentials, and technical leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Work Experience & Education (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Work Experience Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-[#fff3bf] border-2 border-stone-800 rounded-lg shadow-sketch-sm">
                <Briefcase size={20} className="text-stone-900" />
              </div>
              <h3 className="font-hand font-extrabold text-2xl text-stone-900">
                Work Experience
              </h3>
            </div>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative bg-white border-3 border-stone-800 rounded-xl p-6 shadow-sketch-lg hover:shadow-sketch-xl transition-all"
              >
                <ScotchTape className="-top-3 right-8 w-24 h-6 opacity-85 -rotate-1" />
                <PushPin className="-top-3 left-6" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#e7f5ff] border border-stone-800 text-stone-800 font-mono text-xs font-bold">
                    {exp.type}
                  </span>
                  <span className="font-mono text-xs font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded border border-stone-300">
                    {exp.period}
                  </span>
                </div>

                <h4 className="font-hand font-extrabold text-2xl text-stone-900">
                  {exp.role}
                </h4>
                <p className="font-hand text-lg text-stone-700 font-semibold mb-4">
                  {exp.company} • <span className="font-normal font-sans text-xs text-stone-500">{exp.location}</span>
                </p>

                <div className="space-y-2 mb-5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-sans">
                      <CheckCircle2 size={16} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-dashed border-stone-300 flex flex-wrap gap-1.5">
                  {exp.tools.map(tool => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 bg-stone-100 border border-stone-400 rounded text-xs font-mono text-stone-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-[#d3f9d8] border-2 border-stone-800 rounded-lg shadow-sketch-sm">
                <GraduationCap size={20} className="text-stone-900" />
              </div>
              <h3 className="font-hand font-extrabold text-2xl text-stone-900">
                Education
              </h3>
            </div>

            <div className="relative bg-[#fffdfa] border-3 border-stone-800 rounded-xl p-6 shadow-sketch-lg">
              <ScotchTape className="-top-3 left-10 w-28 h-6 opacity-85 rotate-2" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#ebfbee] border border-stone-800 text-stone-800 font-mono text-xs font-bold">
                  B.Tech Undergraduate
                </span>
                <span className="font-mono text-xs font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-300">
                  {personal.gradYear}
                </span>
              </div>

              <h4 className="font-hand font-extrabold text-2xl text-stone-900">
                {personal.degree}
              </h4>
              <p className="font-hand text-lg text-stone-700 font-semibold mb-3">
                {personal.college} • <span className="font-normal font-sans text-xs text-stone-500">{personal.location}</span>
              </p>

              <div className="bg-[#fff9db] border-2 border-stone-800 rounded-lg p-3 inline-flex items-center gap-3 shadow-sketch-sm">
                <span className="font-mono text-xs text-stone-700 uppercase">Cumulative CGPA:</span>
                <span className="font-hand font-extrabold text-2xl text-stone-900">{personal.cgpa}</span>
                <span className="text-xs bg-emerald-700 text-white font-mono px-2 py-0.5 rounded">First Class with Distinction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Certifications & Leadership (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Certifications Card */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-[#d0ebff] border-2 border-stone-800 rounded-lg shadow-sketch-sm">
                <ShieldCheck size={20} className="text-stone-900" />
              </div>
              <h3 className="font-hand font-extrabold text-2xl text-stone-900">
                Industry Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-stone-800 rounded-xl p-4 shadow-sketch hover:shadow-sketch-md transition-all relative"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                        {cert.issuer}
                      </span>
                      <h4 className="font-hand font-bold text-lg text-stone-900 leading-snug">
                        {cert.title}
                      </h4>
                    </div>
                    {cert.year && (
                      <span className="text-[11px] font-mono bg-stone-100 border border-stone-300 px-2 py-0.5 rounded text-stone-700 flex-shrink-0">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-600 font-sans mt-2 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-3 pt-2 border-t border-dashed border-stone-200 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} /> {cert.badge}
                    </span>
                    <span className="font-hand text-stone-500">Verified ID</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Leadership & Hackathons */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-[#fcc2d7] border-2 border-stone-800 rounded-lg shadow-sketch-sm">
                <Trophy size={20} className="text-stone-900" />
              </div>
              <h3 className="font-hand font-extrabold text-2xl text-stone-900">
                Awards & Leadership
              </h3>
            </div>

            <div className="space-y-3">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfaf7] border-2 border-stone-800 rounded-xl p-3.5 shadow-sketch-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-bold text-stone-600">
                      {ach.organization}
                    </span>
                    <span className="text-[10px] bg-stone-200 px-1.5 py-0.2 rounded font-sans text-stone-700">
                      {ach.type}
                    </span>
                  </div>
                  <h5 className="font-hand font-bold text-base text-stone-900 mt-0.5">
                    {ach.title}
                  </h5>
                  <p className="text-xs text-stone-600 font-sans mt-1">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
