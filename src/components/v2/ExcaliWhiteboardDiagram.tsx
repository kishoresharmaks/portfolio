import React, { useState } from 'react';
import { 
  Server, 
  Layers, 
  Database, 
  Cloud, 
  Cpu, 
  Check, 
  Sparkles,
  ArrowRight,
  Code2,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { 
  SiSpringboot, 
  SiReact, 
  SiNextdotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiDocker 
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScotchTape, PushPin, SketchArrow, ScribbleCircle } from './ExcaliSvgDoodles';
import { RoughBadge } from './RoughElements';

export const ExcaliWhiteboardDiagram: React.FC = () => {
  const [activeBoard, setActiveBoard] = useState<'architecture' | 'spec' | 'ai'>('architecture');
  const [copied, setCopied] = useState(false);

  const handleCopySpec = () => {
    navigator.clipboard.writeText(JSON.stringify(PORTFOLIO_DATA.personal, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="architecture" className="relative w-full bg-white rounded-3xl border-3 border-[#1e1e1e] shadow-[6px_6px_0px_#1e1e1e] overflow-hidden">
      
      {/* Scotch Tape Top Center */}
      <ScotchTape color="yellow" angle={-1} />

      {/* Board Window Header */}
      <div className="px-4 py-3 bg-[#f8f9fa] border-b-2 border-[#1e1e1e] flex flex-wrap items-center justify-between gap-3">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#fa5252] border border-[#1e1e1e] shadow-[1px_1px_0px_#1e1e1e] inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#fab005] border border-[#1e1e1e] shadow-[1px_1px_0px_#1e1e1e] inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#40c057] border border-[#1e1e1e] shadow-[1px_1px_0px_#1e1e1e] inline-block" />
          </div>
          <span className="text-xs font-hand font-bold text-slate-500 ml-2">
            system_architecture_blueprint.excalidraw
          </span>
        </div>

        {/* Board Tabs */}
        <div className="flex items-center gap-1.5 bg-[#f1f3f5] p-1 rounded-xl border border-[#1e1e1e]">
          <button
            onClick={() => setActiveBoard('architecture')}
            className={`px-3 py-1 text-xs font-hand font-bold rounded-lg transition-all ${
              activeBoard === 'architecture'
                ? 'bg-[#d0ebff] border border-[#1e1e1e] shadow-[2px_2px_0px_#1e1e1e] text-[#1e1e1e]'
                : 'text-slate-600 hover:text-black'
            }`}
          >
            📐 Architecture.excalidraw
          </button>
          <button
            onClick={() => setActiveBoard('spec')}
            className={`px-3 py-1 text-xs font-hand font-bold rounded-lg transition-all ${
              activeBoard === 'spec'
                ? 'bg-[#fff3bf] border border-[#1e1e1e] shadow-[2px_2px_0px_#1e1e1e] text-[#1e1e1e]'
                : 'text-slate-600 hover:text-black'
            }`}
          >
            ⚡ Specs.excalidraw
          </button>
          <button
            onClick={() => setActiveBoard('ai')}
            className={`px-3 py-1 text-xs font-hand font-bold rounded-lg transition-all ${
              activeBoard === 'ai'
                ? 'bg-[#f3d9fa] border border-[#1e1e1e] shadow-[2px_2px_0px_#1e1e1e] text-[#1e1e1e]'
                : 'text-slate-600 hover:text-black'
            }`}
          >
            🤖 AI_Agents.excalidraw
          </button>
        </div>
      </div>

      {/* Board Content Area - Dot Grid Canvas */}
      <div className="p-4 sm:p-7 excali-canvas-grid min-h-[380px] relative">
        
        {/* TAB 1: Handcrafted Architecture Diagram */}
        {activeBoard === 'architecture' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#d3f9d8] border border-[#1e1e1e] font-hand font-bold text-xs shadow-[2px_2px_0px_#1e1e1e]">
                  ● System Architecture Map
                </span>
                <span className="text-xs font-hand text-slate-500">
                  Full Stack Reactive & AI Microservices
                </span>
              </div>
              <span className="text-xs font-hand text-[#2b8a3e] font-bold">
                ✓ 100% High Availability Architecture
              </span>
            </div>

            {/* Visual Whiteboard Diagram Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch relative">
              
              {/* NODE 1: Client Tier */}
              <div className="p-4 rounded-2xl bg-[#e7f5ff] border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e] flex flex-col justify-between relative group hover:rotate-1 transition-transform">
                <ScotchTape color="blue" angle={-2} />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-hand font-bold uppercase tracking-wider text-[#1864ab]">
                      1. Client Tier
                    </span>
                    <SiReact className="w-4 h-4 text-[#228be6]" />
                  </div>
                  <h4 className="font-hand font-bold text-base text-[#1e1e1e]">Next.js 14 & React</h4>
                  <p className="text-xs font-hand text-slate-600 mt-1">
                    SSR, PWA offline caching, Tailwind responsive UI & WebSocket sync.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-sky-300/60 flex flex-wrap gap-1">
                  <span className="text-[10px] font-hand font-bold bg-white px-1.5 py-0.5 rounded border border-[#1e1e1e]">SPA</span>
                  <span className="text-[10px] font-hand font-bold bg-white px-1.5 py-0.5 rounded border border-[#1e1e1e]">PWA</span>
                </div>
              </div>

              {/* NODE 2: Core Backend Engine */}
              <div className="p-4 rounded-2xl bg-[#fff9db] border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e] flex flex-col justify-between relative group hover:-rotate-1 transition-transform">
                <ScotchTape color="yellow" angle={1} />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-hand font-bold uppercase tracking-wider text-[#8c6b00]">
                      2. Core Engine
                    </span>
                    <FaJava className="w-4 h-4 text-[#e8590c]" />
                  </div>
                  <h4 className="font-hand font-bold text-base text-[#1e1e1e]">Spring Boot & NestJS</h4>
                  <p className="text-xs font-hand text-slate-600 mt-1">
                    REST API endpoints, JWT security, multi-threaded worker jobs & data JPA.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-amber-300/60 flex flex-wrap gap-1">
                  <span className="text-[10px] font-hand font-bold bg-white px-1.5 py-0.5 rounded border border-[#1e1e1e]">Java 17</span>
                  <span className="text-[10px] font-hand font-bold bg-white px-1.5 py-0.5 rounded border border-[#1e1e1e]">TypeScript</span>
                </div>
              </div>

              {/* NODE 3: Data Tier */}
              <div className="p-4 rounded-2xl bg-[#ebfbee] border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e] flex flex-col justify-between relative group hover:rotate-1 transition-transform">
                <ScotchTape color="yellow" angle={-1} />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-hand font-bold uppercase tracking-wider text-[#2b8a3e]">
                      3. Databases
                    </span>
                    <SiPostgresql className="w-4 h-4 text-[#2b8a3e]" />
                  </div>
                  <h4 className="font-hand font-bold text-base text-[#1e1e1e]">Postgres & MongoDB</h4>
                  <p className="text-xs font-hand text-slate-600 mt-1">
                    ACID relational storage, Prisma ORM, and high-throughput document stores.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-emerald-300/60 flex flex-wrap gap-1">
                  <span className="text-[10px] font-hand font-bold bg-white px-1.5 py-0.5 rounded border border-[#1e1e1e]">SQL</span>
                  <span className="text-[10px] font-hand font-bold bg-white px-1.5 py-0.5 rounded border border-[#1e1e1e]">NoSQL</span>
                </div>
              </div>

              {/* NODE 4: Cloud & Deployment */}
              <div className="p-4 rounded-2xl bg-[#f3f0ff] border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e] flex flex-col justify-between relative group hover:-rotate-1 transition-transform">
                <ScotchTape color="blue" angle={2} />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-hand font-bold uppercase tracking-wider text-[#862e9c]">
                      4. Cloud & Infra
                    </span>
                    <FaAws className="w-4 h-4 text-[#e8590c]" />
                  </div>
                  <h4 className="font-hand font-bold text-base text-[#1e1e1e]">AWS & Docker</h4>
                  <p className="text-xs font-hand text-slate-600 mt-1">
                    EC2 compute, S3 assets, Nginx reverse proxy & automated CI/CD pipeline.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-purple-300/60 flex flex-wrap gap-1">
                  <span className="text-[10px] font-hand font-bold bg-white px-1.5 py-0.5 rounded border border-[#1e1e1e]">AWS 2x</span>
                  <span className="text-[10px] font-hand font-bold bg-white px-1.5 py-0.5 rounded border border-[#1e1e1e]">Docker</span>
                </div>
              </div>

            </div>

            {/* Hand-drawn Connecting Annotation */}
            <div className="p-3 bg-white rounded-xl border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">✏️</span>
                <span className="font-hand font-bold text-sm text-[#1e1e1e]">
                  Architecture Highlight: Automated 2-step verification & Spaced-Repetition engines deployed live on Render & VPS.
                </span>
              </div>
              <span className="text-xs font-hand font-bold text-indigo-700 bg-[#e7f5ff] px-2.5 py-1 rounded border border-[#1e1e1e]">
                6+ Platforms Shipped
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: Developer Specifications JSON Sketch */}
        {activeBoard === 'spec' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
              <span className="text-xs font-hand font-bold text-[#1e1e1e]">
                const engineer: DeveloperProfile = &#123; ... &#125;;
              </span>
              <button
                onClick={handleCopySpec}
                className="px-2.5 py-1 rounded-lg bg-white border border-[#1e1e1e] font-hand font-bold text-xs flex items-center gap-1 shadow-[2px_2px_0px_#1e1e1e]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Code2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Specs!' : 'Copy JSON'}</span>
              </button>
            </div>

            <div className="bg-white p-4 rounded-2xl border-2 border-[#1e1e1e] font-mono text-xs text-[#1e1e1e] space-y-1 shadow-[3px_3px_0px_#1e1e1e] overflow-x-auto">
              <p><span className="text-purple-700">const</span> <span className="text-blue-700">engineer</span> = &#123;</p>
              <p className="pl-4"><span className="text-slate-500">name:</span> <span className="text-emerald-700">"{PORTFOLIO_DATA.personal.name}"</span>,</p>
              <p className="pl-4"><span className="text-slate-500">degree:</span> <span className="text-emerald-700">"B.Tech Information Technology (2022 - 2026)"</span>,</p>
              <p className="pl-4"><span className="text-slate-500">college:</span> <span className="text-emerald-700">"Sona College of Technology, Salem"</span>,</p>
              <p className="pl-4"><span className="text-slate-500">cgpa:</span> <span className="text-amber-700 font-bold">8.0 / 10</span>,</p>
              <p className="pl-4"><span className="text-slate-500">core_backend:</span> [<span className="text-emerald-700">"Java"</span>, <span className="text-emerald-700">"Spring Boot"</span>, <span className="text-emerald-700">"NestJS"</span>, <span className="text-emerald-700">"Node.js"</span>],</p>
              <p className="pl-4"><span className="text-slate-500">core_frontend:</span> [<span className="text-emerald-700">"React 18"</span>, <span className="text-emerald-700">"Next.js App Router"</span>, <span className="text-emerald-700">"Tailwind CSS"</span>],</p>
              <p className="pl-4"><span className="text-slate-500">certifications:</span> [<span className="text-emerald-700">"AWS Cloud Practitioner"</span>, <span className="text-emerald-700">"AWS AI Practitioner"</span>, <span className="text-emerald-700">"NPTEL Java"</span>],</p>
              <p className="pl-4"><span className="text-slate-500">status:</span> <span className="text-[#2b8a3e] font-bold">"Ready to Build & Scale 🚀"</span></p>
              <p>&#125;;</p>
            </div>
          </div>
        )}

        {/* TAB 3: AI & Agentic Workflows */}
        {activeBoard === 'ai' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
              <span className="text-xs font-hand font-bold text-purple-800">
                🤖 AI Integration & Agentic Systems
              </span>
              <span className="text-xs font-hand text-slate-500">NL2Mongo & Hermes Agent</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-[#fff9db] border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e]">
                <h5 className="font-hand font-bold text-sm text-[#1e1e1e]">NLP to Database</h5>
                <p className="text-xs font-hand text-slate-700 mt-1">
                  Engineered NL2Mongo analytics system translating natural prompts into MongoDB aggregations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#d0ebff] border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e]">
                <h5 className="font-hand font-bold text-sm text-[#1e1e1e]">Adaptive Tutoring</h5>
                <p className="text-xs font-hand text-slate-700 mt-1">
                  Spaced-repetition algorithms with automated quiz synthesis and dynamic concept evaluations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f3d9fa] border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e]">
                <h5 className="font-hand font-bold text-sm text-[#1e1e1e]">Agentic Development</h5>
                <p className="text-xs font-hand text-slate-700 mt-1">
                  Hands-on experience deploying autonomous coding agents, prompt chains, and automated test runners.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Board Footer Bar */}
      <div className="px-4 py-2.5 bg-[#f8f9fa] border-t-2 border-[#1e1e1e] flex flex-wrap items-center justify-between text-xs font-hand text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive Excalidraw Architecture Canvas</span>
        </div>
        <span className="font-bold text-[#1e1e1e]">
          Sona College of Technology • B.Tech IT 2022-2026
        </span>
      </div>

    </div>
  );
};
