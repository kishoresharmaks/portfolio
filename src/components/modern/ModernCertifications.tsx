import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernCertifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-zinc-300 mb-3">
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Verified cloud & software engineering certifications.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Industry accreditations validating proficiency in Amazon Web Services cloud architecture, artificial intelligence fundamentals, and enterprise Java development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-medium">
                    Issued {cert.year}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-mono uppercase text-indigo-400 font-semibold tracking-wider">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-medium">
                  <CheckCircle2 size={12} />
                  <span>{cert.badge}</span>
                </span>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>AWS Verification</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
