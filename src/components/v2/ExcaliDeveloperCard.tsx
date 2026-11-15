import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Layers, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Copy, 
  Check, 
  ExternalLink,
  MapPin,
  GraduationCap,
  Download,
  Terminal,
  Zap,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScotchTape, PushPin, ScribbleUnderline, DoodleStar } from './ExcaliSvgDoodles';

export const ExcaliDeveloperCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'creds' | 'why'>('stack');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const stickers = [
    { label: '☕ Java 21', color: 'bg-[#fff9db] border-amber-300 text-stone-900', tilt: '-rotate-2' },
    { label: '🌱 Spring Boot', color: 'bg-[#ebfbee] border-emerald-300 text-emerald-950', tilt: 'rotate-1' },
    { label: '🐘 PostgreSQL', color: 'bg-[#e7f5ff] border-blue-300 text-blue-950', tilt: '-rotate-1' },
    { label: '🔒 ACID Locks', color: 'bg-[#f3d9fa] border-purple-300 text-purple-950', tilt: 'rotate-2' },
    { label: '🐰 RabbitMQ', color: 'bg-[#fff4e6] border-orange-300 text-orange-950', tilt: '-rotate-2' },
    { label: '🐳 Docker VPS', color: 'bg-stone-100 border-stone-300 text-stone-900', tilt: 'rotate-1' },
    { label: '☁️ 2x AWS Cert', color: 'bg-[#fff3bf] border-amber-400 text-amber-950', tilt: '-rotate-1' },
  ];

  return (
    <div className="relative bg-[#fffdfa] border-3 border-stone-800 rounded-2xl p-4 sm:p-6 shadow-sketch-xl select-none group">
      {/* Handcrafted Scotch Tape on top */}
      <ScotchTape className="-top-3 left-12 w-28 h-5 opacity-90 -rotate-1" />
      <PushPin className="-top-3.5 right-10" />

      {/* Developer Header Banner */}
      <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3 pb-4 mb-4 border-b-2 border-dashed border-stone-300">
        <div className="flex items-center gap-3">
          {/* Handcrafted Avatar / Badge */}
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-[#fff3bf] border-2 border-stone-800 shadow-[3px_3px_0px_#1e1e1e] flex items-center justify-center -rotate-2 group-hover:rotate-0 transition-transform">
              <span className="font-hand font-extrabold text-2xl text-stone-900">&lt;/&gt;</span>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Active & Ready" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-hand font-extrabold text-xl text-stone-900 leading-none">
                {personal.name}
              </h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-900 text-amber-300">
                SWE '26
              </span>
            </div>
            <p className="font-sans text-xs font-semibold text-stone-600 mt-1 flex items-center gap-1.5">
              <span>Backend & Full Stack Engineer</span>
              <span>•</span>
              <span className="text-emerald-700 font-bold">8.01 CGPA</span>
            </p>
            <p className="text-[11px] font-mono text-stone-500 mt-0.5">
              {personal.college}
            </p>
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebfbee] border border-emerald-400 text-emerald-950 text-xs font-hand font-bold shadow-sketch-sm shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Hire</span>
        </div>
      </div>

      {/* 3 Interactive Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 border border-stone-800 rounded-xl mb-4">
        {[
          { id: 'stack', label: '🛠️ My Core Craft' },
          { id: 'creds', label: '🏆 Accreditations' },
          { id: 'why', label: '⚡ Why Hire Me' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-1.5 px-2 rounded-lg font-hand text-xs sm:text-sm font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-white text-stone-950 border border-stone-800 shadow-[1.5px_1.5px_0px_#1e1e1e]'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="min-h-[175px] mb-4">
        {/* Tab 1: Core Craft */}
        {activeTab === 'stack' && (
          <div className="space-y-2.5 animate-in fade-in duration-150">
            <div className="p-2.5 bg-white border border-stone-800 rounded-xl shadow-sketch-sm flex items-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-amber-100 border border-stone-800 shrink-0 mt-0.5">
                <Server size={16} className="text-stone-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-hand font-bold text-sm text-stone-900 flex items-center justify-between">
                  <span>Java & Spring Boot Architecture</span>
                  <span className="text-[10px] font-mono text-amber-900 bg-amber-100 px-1.5 py-0.2 rounded font-bold">Primary</span>
                </div>
                <p className="font-sans text-xs text-stone-600 mt-0.5 leading-snug">
                  Production REST APIs, exception handling middleware, multithreading, and Spring Data JPA.
                </p>
              </div>
            </div>

            <div className="p-2.5 bg-white border border-stone-800 rounded-xl shadow-sketch-sm flex items-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-100 border border-stone-800 shrink-0 mt-0.5">
                <Database size={16} className="text-stone-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-hand font-bold text-sm text-stone-900 flex items-center justify-between">
                  <span>PostgreSQL ACID Row Locks & Prisma</span>
                  <span className="text-[10px] font-mono text-blue-900 bg-blue-100 px-1.5 py-0.2 rounded font-bold">200+ Models</span>
                </div>
                <p className="font-sans text-xs text-stone-600 mt-0.5 leading-snug">
                  Architected 200+ relational models with transaction isolation and row-level locks preventing race conditions.
                </p>
              </div>
            </div>

            <div className="p-2.5 bg-white border border-stone-800 rounded-xl shadow-sketch-sm flex items-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-purple-100 border border-stone-800 shrink-0 mt-0.5">
                <Layers size={16} className="text-stone-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-hand font-bold text-sm text-stone-900 flex items-center justify-between">
                  <span>RabbitMQ Async Queues & Docker</span>
                  <span className="text-[10px] font-mono text-purple-900 bg-purple-100 px-1.5 py-0.2 rounded font-bold">Scale</span>
                </div>
                <p className="font-sans text-xs text-stone-600 mt-0.5 leading-snug">
                  Event-driven message routing, asynchronous batch workers, Docker containers & Linux VPS deployments.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Accreditations */}
        {activeTab === 'creds' && (
          <div className="space-y-2.5 animate-in fade-in duration-150">
            <div className="p-2.5 bg-[#fff9db] border border-stone-800 rounded-xl shadow-sketch-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white border border-stone-800 shrink-0">
                  <Award size={16} className="text-amber-700" />
                </div>
                <div>
                  <div className="font-hand font-bold text-sm text-stone-900">
                    2x AWS Certified
                  </div>
                  <div className="font-sans text-xs text-stone-700">
                    AWS Certified Cloud Practitioner & AWS AI Practitioner
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-stone-900 text-amber-300 shrink-0">
                Verified
              </span>
            </div>

            <div className="p-2.5 bg-[#ebfbee] border border-stone-800 rounded-xl shadow-sketch-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white border border-stone-800 shrink-0">
                  <GraduationCap size={16} className="text-emerald-700" />
                </div>
                <div>
                  <div className="font-hand font-bold text-sm text-stone-900">
                    B.Tech Information Technology
                  </div>
                  <div className="font-sans text-xs text-stone-700">
                    Sona College of Technology • 2022 – 2026 Batch
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-700 text-white shrink-0">
                8.01 CGPA
              </span>
            </div>

            <div className="p-2.5 bg-[#e7f5ff] border border-stone-800 rounded-xl shadow-sketch-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white border border-stone-800 shrink-0">
                  <CheckCircle2 size={16} className="text-blue-700" />
                </div>
                <div>
                  <div className="font-hand font-bold text-sm text-stone-900">
                    6+ Shipped Production Systems
                  </div>
                  <div className="font-sans text-xs text-stone-700">
                    Batch routing engines, enterprise portals, AI platforms
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-700 text-white shrink-0">
                100% Shipped
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Why Hire Me */}
        {activeTab === 'why' && (
          <div className="space-y-2.5 animate-in fade-in duration-150">
            <div className="p-2.5 bg-white border border-stone-800 rounded-xl shadow-sketch-sm">
              <div className="flex items-center gap-1.5 font-hand font-bold text-sm text-stone-900 mb-0.5">
                <Zap size={14} className="text-amber-500 fill-amber-400" />
                <span>Zero-Fluff, Production-Ready Mindset</span>
              </div>
              <p className="font-sans text-xs text-stone-600 leading-snug">
                Not just tutorial projects — I design code for concurrency, transaction safety, and clean API contracts that survive traffic spikes.
              </p>
            </div>

            <div className="p-2.5 bg-white border border-stone-800 rounded-xl shadow-sketch-sm">
              <div className="flex items-center gap-1.5 font-hand font-bold text-sm text-stone-900 mb-0.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>End-to-End Ownership</span>
              </div>
              <p className="font-sans text-xs text-stone-600 leading-snug">
                From DB schema design and ACID row-locking logic, to REST controllers, queue consumers, and Docker deployments.
              </p>
            </div>

            <div className="p-2.5 bg-white border border-stone-800 rounded-xl shadow-sketch-sm">
              <div className="flex items-center gap-1.5 font-hand font-bold text-sm text-stone-900 mb-0.5">
                <Sparkles size={14} className="text-blue-500" />
                <span>Rapid Learner & Collaborative</span>
              </div>
              <p className="font-sans text-xs text-stone-600 leading-snug">
                Adaptable across Java, TypeScript, cloud infrastructure, and modern AI agent pipelines. Strong team communicator.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Laptop Stickers Grid (Tactile hand-tilted badges) */}
      <div className="pt-3 border-t-2 border-dashed border-stone-300">
        <div className="text-[11px] font-hand font-bold text-stone-600 mb-2 flex items-center justify-between">
          <span>Stickers on my dev machine:</span>
          <span className="text-[10px] font-mono text-stone-400">click to inspect</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {stickers.map((st, i) => (
            <span
              key={i}
              className={`inline-block px-2.5 py-1 text-xs font-mono font-bold rounded-lg border-2 shadow-sketch-sm transition-transform hover:scale-110 cursor-pointer ${st.color} ${st.tilt}`}
            >
              {st.label}
            </span>
          ))}
        </div>
      </div>

      {/* Direct Contact Bar at Bottom of Card */}
      <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-stone-700 font-mono text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-bold">{personal.email}</span>
        </div>

        <button
          onClick={copyEmail}
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-stone-800 bg-[#fff9db] hover:bg-[#fff3bf] text-stone-900 font-hand font-bold shadow-sketch-sm active:translate-y-0.5 transition-all text-xs"
        >
          {copiedEmail ? (
            <>
              <Check size={12} className="text-emerald-700" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
