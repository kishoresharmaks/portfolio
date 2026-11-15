import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Lock, 
  Flame, 
  Bot, 
  Server, 
  Database, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Play, 
  Pause,
  RefreshCw,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { ScotchTape, PushPin } from './ExcaliSvgDoodles';

type ScenarioType = 'traffic' | 'acid' | 'chaos' | 'ai';

interface ScenarioMeta {
  id: ScenarioType;
  title: string;
  tag: string;
  badgeColor: string;
  buttonBg: string;
  buttonActiveBg: string;
  icon: React.ElementType;
  description: string;
}

export const ExcaliSystemSimulator: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('traffic');
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [phase, setPhase] = useState<number>(0);
  const [chaosNodeDown, setChaosNodeDown] = useState<boolean>(false);
  const [chaosRecovered, setChaosRecovered] = useState<boolean>(false);
  const [acidLocked, setAcidLocked] = useState<boolean>(false);
  const [autoScaleCount, setAutoScaleCount] = useState<number>(2);

  const scenarios: ScenarioMeta[] = [
    {
      id: 'traffic',
      title: '12k Traffic Spike',
      tag: 'Auto-Scaling',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-400',
      buttonBg: 'bg-amber-50 hover:bg-amber-100',
      buttonActiveBg: 'bg-[#fff3bf] border-stone-900 shadow-sketch-sm scale-[1.02]',
      icon: Zap,
      description: 'Spikes traffic 50x. Auto-scales +2 Spring Boot workers with 0 dropped packets.',
    },
    {
      id: 'acid',
      title: 'ACID Row Lock',
      tag: 'Concurrency',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-400',
      buttonBg: 'bg-blue-50 hover:bg-blue-100',
      buttonActiveBg: 'bg-[#d0ebff] border-stone-900 shadow-sketch-sm scale-[1.02]',
      icon: Lock,
      description: '2 threads attempt concurrent checkout on 1 item. PostgreSQL row-lock stops race conditions.',
    },
    {
      id: 'chaos',
      title: 'Kill a Node (Chaos)',
      tag: 'Self-Healing',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-400',
      buttonBg: 'bg-rose-50 hover:bg-rose-100',
      buttonActiveBg: 'bg-[#ffe3e3] border-stone-900 shadow-sketch-sm scale-[1.02]',
      icon: Flame,
      description: 'Simulates worker failure. Traffic instantly pivots to surviving nodes; Docker auto-restarts.',
    },
    {
      id: 'ai',
      title: 'AI Batch Router',
      tag: 'Smart Logic',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-400',
      buttonBg: 'bg-purple-50 hover:bg-purple-100',
      buttonActiveBg: 'bg-[#f3d9fa] border-stone-900 shadow-sketch-sm scale-[1.02]',
      icon: Bot,
      description: 'Vector-clusters 50 parcels by courier GPS coords in sub-20ms with optimal dispatch.',
    },
  ];

  // Scenario loop timer
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setActiveScenario((current) => {
        if (current === 'traffic') return 'acid';
        if (current === 'acid') return 'chaos';
        if (current === 'chaos') return 'ai';
        return 'traffic';
      });
    }, 7000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  // Handle Scenario Transitions
  useEffect(() => {
    setPhase(0);
    setChaosNodeDown(false);
    setChaosRecovered(false);
    setAcidLocked(false);
    setAutoScaleCount(2);

    if (activeScenario === 'traffic') {
      const t1 = setTimeout(() => {
        setPhase(1);
        setAutoScaleCount(4);
      }, 700);
      return () => clearTimeout(t1);
    }

    if (activeScenario === 'acid') {
      const t1 = setTimeout(() => {
        setPhase(1);
        setAcidLocked(true);
      }, 800);
      const t2 = setTimeout(() => {
        setPhase(2);
      }, 2000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    if (activeScenario === 'chaos') {
      const t1 = setTimeout(() => {
        setPhase(1);
        setChaosNodeDown(true);
      }, 600);
      const t2 = setTimeout(() => {
        setPhase(2);
        setChaosRecovered(true);
      }, 2400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    if (activeScenario === 'ai') {
      const t1 = setTimeout(() => setPhase(1), 600);
      const t2 = setTimeout(() => setPhase(2), 1800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [activeScenario]);

  const selectScenario = (id: ScenarioType) => {
    setIsAutoPlay(false);
    setActiveScenario(id);
  };

  const currentScenario = scenarios.find((s) => s.id === activeScenario)!;

  return (
    <div className="relative bg-[#fffdfa] border-3 border-stone-800 rounded-2xl p-3 sm:p-5 shadow-sketch-xl select-none overflow-hidden group">
      {/* Handcrafted Scotch Tape on top */}
      <ScotchTape className="-top-3 left-12 w-28 h-5 opacity-90 -rotate-1" />
      <PushPin className="-top-3.5 right-10" />

      {/* Simulator Header */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pb-3 mb-3 border-b-2 border-dashed border-stone-300">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-stone-800 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-stone-800 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-stone-800 inline-block" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-hand font-extrabold text-stone-900 text-sm sm:text-base">
              Interactive System Playground
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-400 font-bold">
              ● Live Simulation
            </span>
          </div>
        </div>

        {/* Auto-Play / Pause Toggle */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-stone-800 bg-stone-100 hover:bg-stone-200 text-stone-800 font-hand text-xs font-bold transition-colors"
            title={isAutoPlay ? 'Pause automatic rotation' : 'Resume automatic rotation'}
          >
            {isAutoPlay ? (
              <>
                <Pause size={12} />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play size={12} />
                <span>Auto-Cycle</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 4 Interactive Test Scenarios - Clickable by visitor */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3.5">
        {scenarios.map((sc) => {
          const Icon = sc.icon;
          const isSelected = activeScenario === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => selectScenario(sc.id)}
              className={`p-2 rounded-xl text-left border-2 transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? `${sc.buttonActiveBg}`
                  : `${sc.buttonBg} border-stone-400 hover:border-stone-800 opacity-80 hover:opacity-100`
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <Icon size={15} className="text-stone-900" />
                <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border ${sc.badgeColor}`}>
                  {sc.tag}
                </span>
              </div>
              <div className="font-hand font-bold text-xs text-stone-900 leading-tight">
                {sc.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Visual System Blueprint Diagram (Handcrafted Excalidraw Canvas) */}
      <div className="relative bg-[#faf8f5] border-2 border-stone-800 rounded-xl p-3 sm:p-4 mb-3">
        
        {/* Layer 1: Client Traffic Source */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 p-1.5 px-2.5 bg-white border border-stone-800 rounded-lg shadow-sketch-sm">
            <Activity size={14} className="text-stone-900 animate-pulse" />
            <span className="font-hand font-bold text-xs text-stone-900">
              Clients (Web & Mobile)
            </span>
          </div>

          <div className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-stone-900 text-amber-300">
            {activeScenario === 'traffic' && (phase > 0 ? '⚡ 14,280 Req/Sec' : '⚡ 240 Req/Sec')}
            {activeScenario === 'acid' && '🔒 2 Threads Competing'}
            {activeScenario === 'chaos' && '💥 Simulating Crash'}
            {activeScenario === 'ai' && '🤖 Vector Dispatching'}
          </div>
        </div>

        {/* Animated Connecting Pipes: Client -> API Cluster */}
        <div className="relative h-5 flex justify-center items-center">
          <div className="w-full border-t-2 border-dashed border-stone-400 absolute" />
          <div className={`px-2 py-0.2 rounded-full border border-stone-800 bg-[#fff9db] text-[10px] font-mono font-bold z-10 transition-transform ${
            activeScenario === 'traffic' && phase > 0 ? 'scale-110 animate-bounce' : ''
          }`}>
            Nginx Gateway & Rate Limiter
          </div>
        </div>

        {/* Layer 2: Compute Workers (Java & Spring Boot Cluster) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2">
          {/* Worker Node 1 */}
          <div className="p-2 bg-white border-2 border-stone-800 rounded-lg shadow-sketch-sm flex flex-col justify-between min-h-[64px]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-stone-600">Worker-01</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div className="font-hand font-bold text-xs text-stone-900">Spring Boot</div>
            <span className="text-[9px] font-mono text-emerald-800 font-semibold">● 100% Healthy</span>
          </div>

          {/* Worker Node 2 (Target for Chaos monkey) */}
          <div className={`p-2 rounded-lg border-2 transition-all duration-300 flex flex-col justify-between min-h-[64px] ${
            activeScenario === 'chaos' && chaosNodeDown && !chaosRecovered
              ? 'bg-rose-100 border-rose-600 animate-pulse shadow-sketch-sm'
              : 'bg-white border-stone-800 shadow-sketch-sm'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-stone-600">Worker-02</span>
              {activeScenario === 'chaos' && chaosNodeDown && !chaosRecovered ? (
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              )}
            </div>
            <div className="font-hand font-bold text-xs text-stone-900">
              {activeScenario === 'chaos' && chaosNodeDown && !chaosRecovered ? (
                <span className="text-rose-700 font-extrabold flex items-center gap-1">
                  <AlertTriangle size={12} /> CRASHED
                </span>
              ) : (
                'Spring Boot'
              )}
            </div>
            <span className="text-[9px] font-mono font-semibold">
              {activeScenario === 'chaos' && chaosNodeDown && !chaosRecovered ? (
                <span className="text-rose-700 font-bold">Auto-healing...</span>
              ) : activeScenario === 'chaos' && chaosRecovered ? (
                <span className="text-emerald-800 font-bold">✓ Recovered in 0.8s!</span>
              ) : (
                <span className="text-emerald-800">● 100% Healthy</span>
              )}
            </span>
          </div>

          {/* Worker Node 3 (Auto-scaled) */}
          <div className={`p-2 rounded-lg border-2 transition-all duration-300 flex flex-col justify-between min-h-[64px] ${
            autoScaleCount >= 3
              ? 'bg-[#d0ebff] border-stone-900 shadow-sketch-sm scale-100 opacity-100'
              : 'bg-stone-100 border-dashed border-stone-400 opacity-40'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-stone-600">Worker-03</span>
              {autoScaleCount >= 3 && <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />}
            </div>
            <div className="font-hand font-bold text-xs text-stone-900">
              {autoScaleCount >= 3 ? 'Auto-Scaled' : 'Standby'}
            </div>
            <span className="text-[9px] font-mono text-blue-900 font-semibold">
              {autoScaleCount >= 3 ? '+ Docker Container' : 'Idle'}
            </span>
          </div>

          {/* Worker Node 4 (Auto-scaled) */}
          <div className={`p-2 rounded-lg border-2 transition-all duration-300 flex flex-col justify-between min-h-[64px] ${
            autoScaleCount >= 4
              ? 'bg-[#d0ebff] border-stone-900 shadow-sketch-sm scale-100 opacity-100'
              : 'bg-stone-100 border-dashed border-stone-400 opacity-40'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-stone-600">Worker-04</span>
              {autoScaleCount >= 4 && <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />}
            </div>
            <div className="font-hand font-bold text-xs text-stone-900">
              {autoScaleCount >= 4 ? 'Auto-Scaled' : 'Standby'}
            </div>
            <span className="text-[9px] font-mono text-blue-900 font-semibold">
              {autoScaleCount >= 4 ? '+ Docker Container' : 'Idle'}
            </span>
          </div>
        </div>

        {/* Layer 3: Persistence & Async Messaging Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-2 border-t border-dashed border-stone-300">
          
          {/* Subsystem A: PostgreSQL ACID Engine */}
          <div className={`p-2.5 rounded-xl border-2 transition-all duration-300 ${
            activeScenario === 'acid' && acidLocked
              ? 'bg-[#ebfbee] border-stone-900 shadow-sketch scale-[1.01]'
              : 'bg-white border-stone-700'
          }`}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5 font-hand font-bold text-xs text-stone-900">
                <Database size={14} className="text-stone-900" />
                <span>PostgreSQL Cluster</span>
              </div>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-stone-100 border border-stone-300">
                200+ Prisma Models
              </span>
            </div>

            <div className="text-[11px] font-sans text-stone-700 leading-tight">
              {activeScenario === 'acid' && acidLocked ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-emerald-950 font-bold font-mono text-[10px] bg-emerald-200/80 p-1 rounded border border-emerald-400">
                    <Lock size={12} className="text-emerald-900 shrink-0" />
                    <span>Row #891: LOCKED (Thread-A)</span>
                  </div>
                  <div className="text-[10px] font-mono text-stone-600">
                    Thread-B rolled back gracefully (Zero overselling)
                  </div>
                </div>
              ) : (
                <span className="font-mono text-[10px] text-stone-600">
                  ACID Transactions • Row Locks Active • 0 Data Loss
                </span>
              )}
            </div>
          </div>

          {/* Subsystem B: RabbitMQ Async Message Broker */}
          <div className={`p-2.5 rounded-xl border-2 transition-all duration-300 ${
            activeScenario === 'traffic' && phase > 0
              ? 'bg-[#f3d9fa] border-stone-900 shadow-sketch scale-[1.01]'
              : 'bg-white border-stone-700'
          }`}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5 font-hand font-bold text-xs text-stone-900">
                <Layers size={14} className="text-purple-900" />
                <span>RabbitMQ Message Broker</span>
              </div>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-900 border border-purple-300">
                Async Queue
              </span>
            </div>

            <div className="text-[11px] font-sans text-stone-700 leading-tight">
              {activeScenario === 'traffic' && phase > 0 ? (
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-mono text-[10px] font-bold text-purple-950 bg-purple-200/80 p-1 rounded border border-purple-400">
                    <span>Queue Buffer: 1,840 msgs</span>
                    <span className="text-emerald-800">Draining fast...</span>
                  </div>
                  <div className="text-[10px] font-mono text-stone-600">
                    Workers consuming at 4,200 msg/s
                  </div>
                </div>
              ) : (
                <span className="font-mono text-[10px] text-stone-600">
                  Event-driven batch delivery • RabbitMQ AMQP 0.9.1
                </span>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Real-time Hand-drawn Telemetry Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2.5">
        <div className="p-2 bg-white border border-stone-800 rounded-xl shadow-sketch-sm">
          <div className="text-[10px] font-mono text-stone-500 font-bold uppercase">Latency</div>
          <div className="font-mono font-bold text-xs sm:text-sm text-stone-900">
            {activeScenario === 'traffic' && phase > 0 ? '6.4 ms' : '3.8 ms'}
          </div>
        </div>

        <div className="p-2 bg-white border border-stone-800 rounded-xl shadow-sketch-sm">
          <div className="text-[10px] font-mono text-stone-500 font-bold uppercase">Throughput</div>
          <div className="font-mono font-bold text-xs sm:text-sm text-stone-900">
            {activeScenario === 'traffic' && phase > 0 ? '14.2k req/s' : '280 req/s'}
          </div>
        </div>

        <div className="p-2 bg-white border border-stone-800 rounded-xl shadow-sketch-sm">
          <div className="text-[10px] font-mono text-stone-500 font-bold uppercase">Data Integrity</div>
          <div className="font-mono font-bold text-xs sm:text-sm text-emerald-800 flex items-center gap-1">
            <ShieldCheck size={12} className="text-emerald-700" />
            <span>100% ACID Safe</span>
          </div>
        </div>

        <div className="p-2 bg-white border border-stone-800 rounded-xl shadow-sketch-sm">
          <div className="text-[10px] font-mono text-stone-500 font-bold uppercase">Cloud Uptime</div>
          <div className="font-mono font-bold text-xs sm:text-sm text-stone-900">
            {activeScenario === 'chaos' && chaosNodeDown && !chaosRecovered ? '99.98% (Healing)' : '99.99% AWS'}
          </div>
        </div>
      </div>

      {/* Real-Time Live Event Log Ticker */}
      <div className="p-2 bg-[#f8f9fa] border-2 border-stone-800 rounded-xl flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-stone-500 font-bold shrink-0">LOG:</span>
          <span className="text-stone-900 font-semibold truncate">
            {activeScenario === 'traffic' && (phase > 0 ? '[Docker] Autoscaled +2 Spring Boot replicas to absorb 14.2k req/s traffic burst' : '[Router] Traffic stable @ 240 req/s. Zero queue backlog.')}
            {activeScenario === 'acid' && (acidLocked ? '[PostgreSQL] SELECT FOR UPDATE applied on order row. Concurrent thread cleanly waited' : '[ACID] Testing concurrency isolation levels with row locks')}
            {activeScenario === 'chaos' && (chaosNodeDown && !chaosRecovered ? '[HealthCheck] Worker-02 unresponsive. Nginx routed traffic to Worker-01' : '[Docker] Watchdog restarted Worker-02 in 0.8s. All nodes 100% green')}
            {activeScenario === 'ai' && '[Vector-AI] Clustered 50 delivery coordinates into 3 optimal courier routes in 18ms'}
          </span>
        </div>
        <span className="text-[10px] font-bold text-stone-600 shrink-0 ml-2">
          {currentScenario.title}
        </span>
      </div>

    </div>
  );
};
