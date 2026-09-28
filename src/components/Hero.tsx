import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Download, 
  Code, 
  Cpu, 
  Server, 
  Database, 
  Layers,
  Copy,
  Check,
  Play,
  Zap,
  Globe,
  Award
} from 'lucide-react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiSpringboot, 
  SiNodedotjs, 
  SiPostgresql, 
  SiDocker 
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'system' | 'output'>('profile');
  const [showOutputTab, setShowOutputTab] = useState(false);
  const [copied, setCopied] = useState(false);
  const [runState, setRunState] = useState(false);

  const handleSelectTab = (tab: 'profile' | 'system') => {
    setActiveTab(tab);
    setShowOutputTab(false);
  };

  const handleCopyCode = () => {
    let code = '';
    if (activeTab === 'profile') {
      code = `const developer = {\n  name: "${PORTFOLIO_DATA.personal.name}",\n  role: "${PORTFOLIO_DATA.personal.title}",\n  education: "B.Tech IT @ Sona College",\n  cgpa: 8.0,\n  languages: ["Java", "TypeScript", "SQL"],\n  backend: ["Spring Boot", "NestJS", "Node.js"],\n  frontend: ["React", "Next.js", "Tailwind CSS"],\n  databases: ["PostgreSQL", "MySQL"],\n  cloud: ["AWS Certified x2"],\n  status: "Ready to Build 🚀"\n};`;
    } else if (activeTab === 'system') {
      code = `const systemArchitecture = {\n  pattern: "Microservices & Modular Monolith",\n  auth: "JWT, OAuth2, RBAC",\n  cloud: "AWS EC2, S3, RDS, Lambda",\n  ciCd: "GitHub Actions & Docker Containers",\n  performance: "Redis Caching & Async Pipelines"\n};`;
    } else {
      code = `{\n  "status": "200_SUCCESS",\n  "engineer": "${PORTFOLIO_DATA.personal.name}",\n  "degree": "B.Tech IT @ Sona College (8.0 CGPA)",\n  "certifications": ["AWS Certified x2"],\n  "livePlatformsDeployed": 6,\n  "hireable": true\n}`;
    }

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setShowOutputTab(true);
    setActiveTab('output');
    setRunState(true);
    setTimeout(() => {
      setRunState(false);
    }, 1000);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden w-full max-w-full">
      {/* Dynamic Background Glow Orbs */}
      <div className="glow-orb top-10 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="glow-orb top-32 right-10 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="glow-orb bottom-10 left-1/3 w-60 sm:w-[350px] h-60 sm:h-[350px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text Info */}
          <div className="lg:col-span-7 space-y-6 min-w-0 w-full">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-lg shadow-indigo-500/10 max-w-full">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="truncate font-mono">Available for Full-time Software Engineering Roles</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-0.5" />
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-outfit leading-tight break-words">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400 drop-shadow-sm">{PORTFOLIO_DATA.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-300 font-outfit flex flex-wrap items-center gap-2">
                <span>{PORTFOLIO_DATA.personal.title}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono">
                  Full Stack & Backend
                </span>
              </p>
            </div>

            {/* Tagline / Summary */}
            <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.summary}
            </p>

            {/* Core Tech Stack Badges with Real Icons */}
            <div className="flex flex-wrap gap-2 pt-1 max-w-full">
              {[
                { name: 'Java & Spring Boot', icon: <SiSpringboot className="w-3.5 h-3.5 text-[#6DB33F]" /> },
                { name: 'Next.js & React', icon: <SiNextdotjs className="w-3.5 h-3.5 text-white" /> },
                { name: 'Node.js & NestJS', icon: <SiNodedotjs className="w-3.5 h-3.5 text-[#5FA04E]" /> },
                { name: 'PostgreSQL & MySQL', icon: <SiPostgresql className="w-3.5 h-3.5 text-[#4169E1]" /> },
                { name: 'AWS Certified (2x)', icon: <FaAws className="w-3.5 h-3.5 text-[#FF9900]" /> },
                { name: 'Docker & Microservices', icon: <SiDocker className="w-3.5 h-3.5 text-[#2496ED]" /> },
              ].map((tech) => (
                <span 
                  key={tech.name}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#0E1424] text-slate-200 border border-indigo-500/25 flex items-center gap-2 hover:border-indigo-400/50 hover:bg-[#141c33] transition-all shadow-sm"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 sm:pt-4 w-full">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 group text-center cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Explore 6+ Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl glass-card hover:bg-white/10 text-slate-200 hover:text-white font-bold text-sm border border-white/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
              </button>

              <a
                href="file:///d:/Kishoresharma_Web_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-indigo-300 border border-slate-700/80 hover:border-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Metric Counter Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 w-full">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                <div key={idx} className="glass-card bg-[#0a0e1a]/80 p-3.5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all">
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-outfit text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal & Floating Tech Badges */}
          <div className="lg:col-span-5 min-w-0 w-full relative">
            
            {/* Floating Tech Badge 1: Spring Boot */}
            <div className="hidden xl:flex absolute -top-5 -left-6 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1526]/90 backdrop-blur-md border border-emerald-500/40 shadow-xl text-xs font-semibold text-emerald-300 animate-bounce-slow pointer-events-none">
              <SiSpringboot className="w-4 h-4 text-[#6DB33F]" />
              <span>Spring Boot 3</span>
            </div>

            {/* Floating Tech Badge 2: Next.js */}
            <div className="hidden xl:flex absolute -top-5 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1526]/90 backdrop-blur-md border border-cyan-500/40 shadow-xl text-xs font-semibold text-cyan-300 animate-float pointer-events-none">
              <SiNextdotjs className="w-4 h-4 text-white" />
              <span>Next.js 14</span>
            </div>

            {/* Floating Tech Badge 3: AWS Certified */}
            <div className="hidden xl:flex absolute -bottom-4 -left-6 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e1526]/90 backdrop-blur-md border border-amber-500/40 shadow-xl text-xs font-semibold text-amber-300 animate-float pointer-events-none">
              <FaAws className="w-4 h-4 text-[#FF9900]" />
              <span>AWS Certified</span>
            </div>

            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-rose-500 to-cyan-500 rounded-2xl blur-xl opacity-30 animate-pulse-slow"></div>
              
              {/* Code Terminal Container */}
              <div className="relative rounded-2xl glass-card bg-[#0A0E1A] border border-slate-700/80 shadow-2xl overflow-hidden w-full">
                
                {/* Terminal Header & File Tabs */}
                <div className="bg-[#0e1424] px-3 sm:px-4 py-2.5 border-b border-slate-800 flex items-center justify-between gap-2">
                  
                  {/* Left: Window Dots & Tabs */}
                  <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    </div>

                    {/* File Tabs */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleSelectTab('profile')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                          activeTab === 'profile'
                            ? 'bg-[#151c2e] text-indigo-300 border border-indigo-500/30'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Terminal className="w-3 h-3 text-indigo-400" />
                        <span>developer.ts</span>
                      </button>

                      <button
                        onClick={() => handleSelectTab('system')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                          activeTab === 'system'
                            ? 'bg-[#151c2e] text-cyan-300 border border-cyan-500/30'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Code className="w-3 h-3 text-cyan-400" />
                        <span>architecture.ts</span>
                      </button>

                      {showOutputTab && (
                        <button
                          onClick={() => setActiveTab('output')}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1 transition-colors cursor-pointer relative animate-in fade-in duration-200 ${
                            activeTab === 'output'
                              ? 'bg-[#151c2e] text-emerald-300 border border-emerald-500/30'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <Zap className="w-3 h-3 text-emerald-400" />
                          <span>output</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right Action Buttons: Copy & Run */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                      title="Copy Code"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={handleRunCode}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        runState
                          ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 scale-105'
                          : 'bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-md'
                      }`}
                      title="Execute Code Script"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{runState ? 'RUNNING...' : 'RUN'}</span>
                    </button>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed bg-[#070b14] text-slate-300 overflow-x-auto min-h-[310px] flex flex-col justify-between">
                  
                  {activeTab === 'profile' ? (
                    <div className="space-y-1.5">
                      <div className="text-slate-500 italic">// Developer Core Specifications</div>
                      <div>
                        <span className="text-purple-400 font-bold">const</span> <span className="text-amber-300 font-semibold">developer</span> = &#123;
                      </div>
                      <div className="pl-4 space-y-1">
                        <div>
                          <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{PORTFOLIO_DATA.personal.name}"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">role:</span> <span className="text-emerald-300">"{PORTFOLIO_DATA.personal.title}"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">education:</span> <span className="text-cyan-300">"B.Tech IT @ Sona College"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">cgpa:</span> <span className="text-amber-400 font-bold">8.0</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">languages:</span> [<span className="text-indigo-300">"Java"</span>, <span className="text-indigo-300">"TypeScript"</span>, <span className="text-indigo-300">"SQL"</span>],
                        </div>
                        <div>
                          <span className="text-slate-400">backend:</span> [<span className="text-rose-300">"Spring Boot"</span>, <span className="text-rose-300">"NestJS"</span>, <span className="text-rose-300">"Node.js"</span>],
                        </div>
                        <div>
                          <span className="text-slate-400">frontend:</span> [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"Tailwind"</span>],
                        </div>
                        <div>
                          <span className="text-slate-400">databases:</span> [<span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"MySQL"</span>],
                        </div>
                        <div>
                          <span className="text-slate-400">cloud:</span> [<span className="text-amber-300">"AWS Certified x2"</span>],
                        </div>
                        <div>
                          <span className="text-slate-400">status:</span> <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">"Ready to Build 🚀"</span>
                        </div>
                      </div>
                      <div>&#125;;</div>
                    </div>
                  ) : activeTab === 'system' ? (
                    <div className="space-y-1.5">
                      <div className="text-slate-500 italic">// System Design & Architecture Capabilities</div>
                      <div>
                        <span className="text-purple-400 font-bold">const</span> <span className="text-cyan-300 font-semibold">systemArchitecture</span> = &#123;
                      </div>
                      <div className="pl-4 space-y-1">
                        <div>
                          <span className="text-slate-400">patterns:</span> <span className="text-amber-300">"Microservices & Modular Monolith"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">security:</span> <span className="text-cyan-300">"JWT, OAuth2, RBAC Data Isolation"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">messaging:</span> <span className="text-emerald-300">"Async Pipelines & WebSockets"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">cloudHosting:</span> <span className="text-rose-300">"AWS EC2, S3, RDS, Vercel"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">containerization:</span> <span className="text-indigo-300">"Docker & Multi-Stage Builds"</span>,
                        </div>
                        <div>
                          <span className="text-slate-400">aiIntegration:</span> <span className="text-emerald-400">"OpenAI / Claude Agentic Workflows"</span>
                        </div>
                      </div>
                      <div>&#125;;</div>
                    </div>
                  ) : (
                    /* Output Console Screen */
                    <div className="space-y-2">
                      <div className="text-slate-400 flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">$</span>
                        <span className="text-white font-mono font-semibold">ts-node execute-profile.ts</span>
                      </div>

                      {runState ? (
                        <div className="py-10 text-center space-y-3">
                          <div className="inline-block w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                          <div className="text-xs text-emerald-300 font-mono animate-pulse">Compiling TypeScript modules & executing runtime check...</div>
                        </div>
                      ) : (
                        <div className="space-y-1.5 text-[11px] sm:text-xs">
                          <div className="text-emerald-400 flex items-center gap-1.5">
                            <span className="font-bold">✔</span> <span>Initializing Spring Boot & NestJS Backend...</span> <span className="text-slate-500 font-mono">[200 OK]</span>
                          </div>
                          <div className="text-emerald-400 flex items-center gap-1.5">
                            <span className="font-bold">✔</span> <span>Connecting PostgreSQL & MySQL Database Pools...</span> <span className="text-slate-500 font-mono">[CONNECTED]</span>
                          </div>
                          <div className="text-emerald-400 flex items-center gap-1.5">
                            <span className="font-bold">✔</span> <span>Deploying Next.js 14 & React SSR Interface...</span> <span className="text-slate-500 font-mono">[READY]</span>
                          </div>
                          <div className="text-emerald-400 flex items-center gap-1.5">
                            <span className="font-bold">✔</span> <span>AWS Cloud & AI Agentic Workflows Online...</span> <span className="text-slate-500 font-mono">[ONLINE]</span>
                          </div>

                          <div className="py-1 text-slate-700">--------------------------------------------------</div>

                          <div className="text-amber-300 font-semibold">[EXECUTION RESULT OUTPUT]:</div>
                          <div className="bg-[#0c1322] p-3 rounded-xl border border-emerald-500/30 text-emerald-300 font-mono space-y-0.5 shadow-inner">
                            <div>&#123;</div>
                            <div className="pl-4"><span className="text-slate-400">"status":</span> <span className="text-amber-300">"200_SUCCESS"</span>,</div>
                            <div className="pl-4"><span className="text-slate-400">"engineer":</span> <span className="text-cyan-300">"{PORTFOLIO_DATA.personal.name}"</span>,</div>
                            <div className="pl-4"><span className="text-slate-400">"qualification":</span> <span className="text-indigo-300">"B.Tech IT @ Sona (8.0 CGPA)"</span>,</div>
                            <div className="pl-4"><span className="text-slate-400">"certifications":</span> [<span className="text-amber-300">"AWS Certified x2"</span>],</div>
                            <div className="pl-4"><span className="text-slate-400">"livePlatforms":</span> <span className="text-rose-400 font-bold">6</span>,</div>
                            <div className="pl-4"><span className="text-slate-400">"hireable":</span> <span className="text-emerald-400 font-bold">true</span></div>
                            <div>&#125;</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Terminal Execution Status */}
                  <div className="pt-3 mt-3 border-t border-slate-800 text-[10px] sm:text-xs flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${runState ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}></span>
                      <span>{runState ? 'Executing script...' : 'Compiler Status: 0 Errors'}</span>
                    </span>
                    <span className="text-indigo-400 font-semibold font-mono">6 Live Platforms Deployed</span>
                  </div>
                </div>

                {/* Bottom Quick Feature Highlights */}
                <div className="bg-[#0e1424] px-3 py-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="flex flex-col items-center">
                    <Server className="w-4 h-4 text-indigo-400 mb-1" />
                    <span className="text-slate-200 text-[11px] font-semibold">Spring & NestJS</span>
                    <span className="text-slate-400 text-[9px]">Backend Core</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-slate-800">
                    <Layers className="w-4 h-4 text-cyan-400 mb-1" />
                    <span className="text-slate-200 text-[11px] font-semibold">Next.js & React</span>
                    <span className="text-slate-400 text-[9px]">Frontend Web</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Cpu className="w-4 h-4 text-emerald-400 mb-1" />
                    <span className="text-slate-200 text-[11px] font-semibold">AWS & AI Systems</span>
                    <span className="text-slate-400 text-[9px]">Cloud & Smart Workflows</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

