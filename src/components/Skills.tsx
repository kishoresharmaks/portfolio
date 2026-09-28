import React, { useState } from 'react';
import { 
  Server, 
  Layout, 
  Brain, 
  Database, 
  Wrench, 
  Sparkles,
  Code2,
  Zap,
  Trophy,
  ArrowRight,
  LayoutGrid,
  Code,
  Globe,
  Layers,
  Cloud,
  Boxes,
  Users
} from 'lucide-react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiSpringboot, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMysql, 
  SiDocker, 
  SiGit, 
  SiTailwindcss, 
  SiPostman 
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

interface DomainCardData {
  id: string;
  number: string;
  title: string;
  description: string;
  level: number;
  barColor: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  tags: string[];
  categoryKey: string;
}

interface TechStackItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Tools';
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All Domains');
  const [techFilter, setTechFilter] = useState<string>('All');

  const navItems = [
    { id: 'All Domains', label: 'All Domains', icon: <LayoutGrid className="w-4 h-4 shrink-0" /> },
    { id: 'Backend', label: 'Backend & Core', icon: <Layers className="w-4 h-4 shrink-0" /> },
    { id: 'Frontend', label: 'Frontend & Web', icon: <Globe className="w-4 h-4 shrink-0" /> },
    { id: 'AI & Automation', label: 'AI & Automation', icon: <Brain className="w-4 h-4 shrink-0" /> },
    { id: 'Databases', label: 'Databases', icon: <Database className="w-4 h-4 shrink-0" /> },
    { id: 'Cloud & DevOps', label: 'Cloud & DevOps', icon: <Cloud className="w-4 h-4 shrink-0" /> },
    { id: 'Tools', label: 'Tools & Collaboration', icon: <Wrench className="w-4 h-4 shrink-0" /> },
  ];

  const domainCards: DomainCardData[] = [
    {
      id: 'core-backend',
      number: '01',
      title: 'Core & Backend Engineering',
      description: 'Building high-throughput, secure REST APIs, microservices, and server applications.',
      level: 92,
      barColor: 'from-cyan-400 to-indigo-500',
      iconBg: 'bg-indigo-950/80 border-indigo-500/30',
      iconColor: 'text-indigo-400',
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      tags: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'REST APIs'],
      categoryKey: 'Backend',
    },
    {
      id: 'frontend-web',
      number: '02',
      title: 'Frontend & Web Architecture',
      description: 'Designing high-performance, mobile-responsive, and pixel-perfect web interfaces.',
      level: 90,
      barColor: 'from-rose-500 via-pink-400 to-cyan-400',
      iconBg: 'bg-cyan-950/80 border-cyan-500/30',
      iconColor: 'text-cyan-400',
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      tags: ['React 18', 'Next.js 14', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'],
      categoryKey: 'Frontend',
    },
    {
      id: 'ai-automation',
      number: '03',
      title: 'AI & Agentic Workflows',
      description: 'Integrating OpenAI, Claude AI, and RAG pipelines for intelligent data processing.',
      level: 86,
      barColor: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-950/80 border-purple-500/30',
      iconColor: 'text-purple-400',
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      tags: ['OpenAI API', 'Claude AI', 'AI Query Tools', 'Agentic Pipelines'],
      categoryKey: 'AI & Automation',
    },
    {
      id: 'databases-cloud',
      number: '04',
      title: 'Databases & Data Modeling',
      description: 'Relational database schema design, query optimization, and data caching.',
      level: 88,
      barColor: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-blue-950/80 border-blue-500/30',
      iconColor: 'text-blue-400',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      tags: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Spring JPA', 'SQL'],
      categoryKey: 'Databases',
    },
    {
      id: 'cloud-devops',
      number: '05',
      title: 'Cloud & DevOps Infrastructure',
      description: 'Deploying scalable applications on AWS, Docker containerization, and hosting.',
      level: 84,
      barColor: 'from-amber-400 to-orange-500',
      iconBg: 'bg-amber-950/80 border-amber-500/30',
      iconColor: 'text-amber-400',
      icon: <Cloud className="w-5 h-5 text-amber-400" />,
      tags: ['AWS EC2 & S3', 'Docker', 'Vercel', 'CI/CD Pipelines'],
      categoryKey: 'Cloud & DevOps',
    },
    {
      id: 'tools-collaboration',
      number: '06',
      title: 'Tools, Security & Collaboration',
      description: 'Version control workflows, API testing, security protocols, and teamwork.',
      level: 85,
      barColor: 'from-emerald-400 to-cyan-400',
      iconBg: 'bg-pink-950/80 border-pink-500/30',
      iconColor: 'text-pink-400',
      icon: <Users className="w-5 h-5 text-pink-400" />,
      tags: ['Git & GitHub', 'Postman', 'JWT & OAuth2', 'Agile & Jira'],
      categoryKey: 'Tools',
    },
  ];

  const quickHighlights = [
    { label: 'Full Stack Web Development', icon: <Code className="w-4 h-4 text-orange-400" /> },
    { label: 'Cloud Hosting & AWS Certified', icon: <Cloud className="w-4 h-4 text-cyan-400" /> },
    { label: 'AI Integrations & Search', icon: <Brain className="w-4 h-4 text-purple-400" /> },
    { label: 'Database Design & Optimization', icon: <Database className="w-4 h-4 text-emerald-400" /> },
    { label: 'Real-World Production Experience', icon: <Boxes className="w-4 h-4 text-amber-400" /> },
    { label: 'Agile Team Collaboration', icon: <Users className="w-4 h-4 text-indigo-400" /> },
  ];

  const techStackItems: TechStackItem[] = [
    {
      name: 'Java',
      category: 'Languages',
      icon: <FaJava className="w-7 h-7 text-[#ED8B00]" />,
    },
    {
      name: 'JavaScript',
      category: 'Languages',
      icon: <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />,
    },
    {
      name: 'TypeScript',
      category: 'Languages',
      icon: <SiTypescript className="w-7 h-7 text-[#3178C6]" />,
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: <SiReact className="w-7 h-7 text-[#61DAFB]" />,
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      icon: <SiNextdotjs className="w-7 h-7 text-white" />,
    },
    {
      name: 'Spring Boot',
      category: 'Backend',
      icon: <SiSpringboot className="w-7 h-7 text-[#6DB33F]" />,
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: <SiNodedotjs className="w-7 h-7 text-[#5FA04E]" />,
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      icon: <SiPostgresql className="w-7 h-7 text-[#4169E1]" />,
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon: <SiMysql className="w-7 h-7 text-[#4479A1]" />,
    },
    {
      name: 'AWS',
      category: 'Cloud',
      icon: <FaAws className="w-7 h-7 text-[#FF9900]" />,
    },
    {
      name: 'Docker',
      category: 'Cloud',
      icon: <SiDocker className="w-7 h-7 text-[#2496ED]" />,
    },
    {
      name: 'Git',
      category: 'Tools',
      icon: <SiGit className="w-7 h-7 text-[#F05032]" />,
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />,
    },
    {
      name: 'Postman',
      category: 'Tools',
      icon: <SiPostman className="w-7 h-7 text-[#FF6C37]" />,
    },
  ];

  const filteredCards = activeTab === 'All Domains'
    ? domainCards
    : domainCards.filter(c => c.categoryKey === activeTab);

  const filteredTechStack = techFilter === 'All'
    ? techStackItems
    : techStackItems.filter(t => t.category === techFilter);

  const scrollToCertifications = () => {
    const el = document.getElementById('certifications');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden bg-[#070b14]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-3 py-1 rounded-full inline-block">
              TECHNICAL CAPABILITIES & TOOLS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-outfit tracking-tight">
              Skills & Domain <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-500">Expertise</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A comprehensive technical architecture built with production-grade frameworks, databases, and cloud engineering.
            </p>
          </div>

          {/* Top Right Quote Box */}
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="font-script text-xl sm:text-2xl text-slate-300 tracking-wide -rotate-2 select-none">
              Build • Learn • Deliver
            </span>
            <div className="glass-card bg-[#0e1424]/90 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3 shadow-xl max-w-xs w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/20">
                <Code className="w-5 h-5" />
              </div>
              <p className="text-xs text-slate-300 font-medium leading-snug">
                Turning complex software ideas into scalable real-world products
              </p>
            </div>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800/60">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 via-rose-500 to-indigo-600 text-white shadow-lg shadow-rose-500/20 scale-105'
                    : 'bg-[#0a0e1a] text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* 6-Card Domain Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="glass-card bg-[#0b101e]/90 border border-slate-800/80 hover:border-slate-700 p-5 sm:p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group relative overflow-hidden"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Top Row: Icon + Card Number & Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${card.iconBg} border shadow-inner flex items-center justify-center`}>
                    {card.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                      {card.number}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-slate-500 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-white font-outfit mb-1.5 group-hover:text-orange-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-2">
                  {card.description}
                </p>

                {/* Proficiency Level Progress Bar */}
                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400 font-medium">Proficiency Level</span>
                    <span className="text-[11px] font-mono font-bold text-cyan-300">{card.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className={`h-full bg-gradient-to-r ${card.barColor} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${card.level}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {card.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#141b2d] text-slate-300 border border-slate-800 group-hover:border-slate-700 hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Highlights & Always Learning Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Quick Highlights Box */}
          <div className="md:col-span-7 glass-card bg-[#0b101e]/90 border border-slate-800/80 p-5 sm:p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <h4 className="text-base font-bold text-white font-outfit">Core Engineering Highlights</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#121828]/80 border border-slate-800/80 text-xs text-slate-300">
                  <span className="shrink-0">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Always Learning & Certifications Box */}
          <div className="md:col-span-5 glass-card bg-[#0b101e]/90 border border-slate-800/80 p-5 sm:p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <h4 className="text-base font-bold text-white font-outfit">Continuous Learning</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Actively expanding expertise in cloud architecture, AI workflows, and modern backend systems.
              </p>
            </div>

            <button
              onClick={scrollToCertifications}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-orange-300 bg-orange-500/10 border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-400 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Verified Certifications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Horizontal Stats Banner */}
        <div className="glass-card bg-[#090d18]/90 border border-slate-800 p-5 sm:p-6 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-white font-outfit block">25+</span>
                <span className="text-xs text-slate-400">Technologies</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <Boxes className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-white font-outfit block">10+</span>
                <span className="text-xs text-slate-400">Real Projects</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-white font-outfit block">5+</span>
                <span className="text-xs text-slate-400">Certifications</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-white font-outfit block">2+</span>
                <span className="text-xs text-slate-400">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-6 text-xs sm:text-sm text-slate-300 italic font-medium justify-center lg:justify-start">
            <span className="text-orange-400 font-bold text-lg">/</span>
            <span>&ldquo;Continuous learning for a better tomorrow.&rdquo;</span>
          </div>
        </div>

        {/* Bottom Section: TECH STACK AT A GLANCE */}
        <div className="glass-card bg-[#090d18]/90 border border-slate-800 p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                TECH STACK AT A GLANCE
              </span>
              <h3 className="text-xl font-bold text-white font-outfit">
                Technologies I work with
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#0e1424] p-1.5 rounded-xl border border-slate-800 overflow-x-auto scrollbar-none max-w-full">
              {['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Cloud', 'Tools'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setTechFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    techFilter === cat
                      ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {filteredTechStack.map((tech, idx) => (
              <div
                key={idx}
                className="glass-card bg-[#0c111e] border border-slate-800/80 hover:border-slate-700 p-4 rounded-2xl flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#12192c] group cursor-default"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
