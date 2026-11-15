import React, { useState, useEffect } from 'react';
import { ScotchTape, PushPin, DoodleStar } from './ExcaliSvgDoodles';
import { Server, Database, Layers, Play, CheckCircle2, Lock, MessageSquare, Zap, Cpu, RefreshCw } from 'lucide-react';

export const ExcaliHeroLiveSim: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isManualTrigger, setIsManualTrigger] = useState<boolean>(false);
  const [pulseCount, setPulseCount] = useState<number>(0);

  // Auto-cycle through the architecture simulation pipeline
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev >= 4 ? 1 : prev + 1));
      setPulseCount((c) => c + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, [isManualTrigger]);

  const triggerManualSimulation = () => {
    setIsManualTrigger(true);
    setStep(1);
    setTimeout(() => setStep(2), 600);
    setTimeout(() => setStep(3), 1400);
    setTimeout(() => {
      setStep(4);
      setTimeout(() => setIsManualTrigger(false), 2000);
    }, 2200);
  };

  const getLogMessage = () => {
    switch (step) {
      case 1:
        return { tag: 'CLIENT', text: 'POST /api/v1/orders/dispatch (Mobile / Web App)', color: 'text-amber-800 bg-amber-100' };
      case 2:
        return { tag: 'SPRING BOOT', text: 'REST Controller validated payload in 12ms • Thread Pool Active', color: 'text-blue-800 bg-blue-100' };
      case 3:
        return { tag: 'POSTGRESQL', text: 'SELECT ... FOR UPDATE: ACID Row-Lock acquired on courier #48', color: 'text-emerald-800 bg-emerald-100' };
      case 4:
        return { tag: 'RABBITMQ', text: 'Published delivery.assigned event to background worker queue', color: 'text-purple-800 bg-purple-100' };
      default:
        return { tag: 'IDLE', text: 'System ready for high-concurrency requests', color: 'text-stone-800 bg-stone-100' };
    }
  };

  const currentLog = getLogMessage();

  return (
    <div className="relative bg-[#fffdfa] border-3 border-stone-800 rounded-2xl p-4 sm:p-5 shadow-sketch-xl select-none overflow-hidden group">
      {/* Tape on top */}
      <ScotchTape className="-top-3 left-10 w-28 h-5 opacity-90 -rotate-1" />
      <PushPin className="-top-3.5 right-8" />

      {/* Blueprint Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-dashed border-stone-300">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-stone-800 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-stone-800 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-stone-800 inline-block" />
          </div>
          <span className="font-mono text-[11px] text-stone-600 font-bold truncate">
            live://system-concurrency-engine.excalidraw
          </span>
        </div>

        {/* Live Simulation Pulse Button */}
        <button
          onClick={triggerManualSimulation}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-hand font-bold rounded-lg border border-stone-800 shadow-sketch-sm active:translate-x-[1px] active:translate-y-[1px] transition-all"
          title="Click to trigger animated packet flow"
        >
          <Zap size={13} className="text-amber-400 fill-amber-400" />
          <span>Simulate Traffic</span>
        </button>
      </div>

      {/* Interactive Visual Architecture Flow Diagram */}
      <div className="relative py-2">
        {/* Step 1: Client Layer */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div
            className={`w-full p-2.5 rounded-xl border-2 transition-all duration-300 ${
              step === 1
                ? 'bg-[#fff3bf] border-stone-900 shadow-sketch scale-[1.02]'
                : 'bg-white border-stone-700 opacity-80'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">📱</span>
                <div>
                  <div className="font-hand font-bold text-sm text-stone-900 leading-none">
                    1. Client Request
                  </div>
                  <div className="text-[10px] font-mono text-stone-600 mt-0.5">
                    Next.js Storefront / React Native App
                  </div>
                </div>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                step === 1 ? 'bg-amber-200 border-stone-800 text-stone-900 animate-pulse' : 'bg-stone-100 text-stone-500 border-stone-300'
              }`}>
                POST /order
              </span>
            </div>
          </div>
        </div>

        {/* Animated Connecting Pipe 1 -> 2 */}
        <div className="flex justify-center my-0.5 relative h-6">
          <svg className="w-16 h-full overflow-visible" viewBox="0 0 40 24">
            <path
              d="M20 0 L20 24"
              stroke="#1e1e1e"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className={step === 1 ? 'animate-[dash_0.6s_linear_infinite]' : ''}
            />
            {step === 1 && (
              <circle cx="20" cy="12" r="4" fill="#f59f00" className="animate-ping" />
            )}
          </svg>
        </div>

        {/* Step 2: Spring Boot / NestJS Backend API Engine */}
        <div
          className={`w-full p-3 rounded-xl border-2 transition-all duration-300 mb-2 ${
            step === 2
              ? 'bg-[#d0ebff] border-stone-900 shadow-sketch scale-[1.02]'
              : 'bg-white border-stone-700 opacity-80'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-white border border-stone-800 shadow-sketch-sm">
                <Server size={18} className="text-stone-900" />
              </div>
              <div>
                <div className="font-hand font-bold text-base text-stone-900 leading-none flex items-center gap-1.5">
                  <span>2. Java Spring Boot & NestJS Engine</span>
                  {step === 2 && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  )}
                </div>
                <div className="text-[11px] font-mono text-stone-700 mt-0.5">
                  REST Controllers • Dispatch Logic • JWT Auth (18ms)
                </div>
              </div>
            </div>
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
              step === 2 ? 'bg-blue-200 border-stone-800 text-blue-950 font-bold' : 'bg-stone-100 text-stone-500 border-stone-300'
            }`}>
              {step === 2 ? '⚡ Processing' : '200 OK Ready'}
            </span>
          </div>
        </div>

        {/* Forked Animated Connectors 2 -> 3A & 3B */}
        <div className="grid grid-cols-2 gap-3 my-0.5 relative h-6">
          <div className="flex justify-center">
            <svg className="w-16 h-full overflow-visible" viewBox="0 0 40 24">
              <path
                d="M20 0 L20 24"
                stroke="#1e1e1e"
                strokeWidth="2.5"
                strokeDasharray="4 3"
                className={step === 2 || step === 3 ? 'animate-[dash_0.6s_linear_infinite]' : ''}
              />
            </svg>
          </div>
          <div className="flex justify-center">
            <svg className="w-16 h-full overflow-visible" viewBox="0 0 40 24">
              <path
                d="M20 0 L20 24"
                stroke="#1e1e1e"
                strokeWidth="2.5"
                strokeDasharray="4 3"
                className={step === 2 || step === 4 ? 'animate-[dash_0.6s_linear_infinite]' : ''}
              />
            </svg>
          </div>
        </div>

        {/* Step 3: Split Dual Subsystems (PostgreSQL Row Lock + RabbitMQ Queues) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Subsystem A: PostgreSQL ACID Row Locking */}
          <div
            className={`p-2.5 rounded-xl border-2 transition-all duration-300 ${
              step === 3
                ? 'bg-[#ebfbee] border-stone-900 shadow-sketch scale-[1.02]'
                : 'bg-white border-stone-700 opacity-80'
            }`}
          >
            <div className="flex items-start gap-2">
              <div className="p-1 rounded bg-[#d3f9d8] border border-stone-800 mt-0.5">
                <Database size={15} className="text-emerald-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-hand font-bold text-sm text-stone-900 flex items-center gap-1">
                  <span>3A. PostgreSQL ACID</span>
                  <Lock size={11} className={step === 3 ? 'text-emerald-700 animate-bounce' : 'text-stone-400'} />
                </div>
                <div className="text-[10px] font-mono text-stone-700 leading-tight mt-0.5">
                  Ordered Row Locks
                </div>
                <div className="text-[9px] font-mono text-emerald-800 font-bold mt-1">
                  ✓ 0 Duplicate Dispatches
                </div>
              </div>
            </div>
          </div>

          {/* Subsystem B: RabbitMQ Async Message Queue */}
          <div
            className={`p-2.5 rounded-xl border-2 transition-all duration-300 ${
              step === 4
                ? 'bg-[#f3d9fa] border-stone-900 shadow-sketch scale-[1.02]'
                : 'bg-white border-stone-700 opacity-80'
            }`}
          >
            <div className="flex items-start gap-2">
              <div className="p-1 rounded bg-[#fcc2d7] border border-stone-800 mt-0.5">
                <Layers size={15} className="text-purple-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-hand font-bold text-sm text-stone-900 flex items-center gap-1">
                  <span>3B. RabbitMQ Queue</span>
                  <Zap size={11} className={step === 4 ? 'text-purple-700 animate-pulse' : 'text-stone-400'} />
                </div>
                <div className="text-[10px] font-mono text-stone-700 leading-tight mt-0.5">
                  Async Job Workers
                </div>
                <div className="text-[9px] font-mono text-purple-800 font-bold mt-1">
                  ✓ Docker & Linux VPS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Animated Console Ticker */}
      <div className="mt-3 pt-2.5 border-t-2 border-stone-800 bg-[#f8f9fa] rounded-xl p-2 border border-stone-400">
        <div className="flex items-center justify-between text-[10px] font-mono mb-1">
          <span className="flex items-center gap-1 text-stone-500 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE TELEMETRY STREAM
          </span>
          <span className="text-stone-500">Pulse #{pulseCount}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono truncate">
          <span className={`px-1.5 py-0.2 rounded font-bold text-[10px] uppercase ${currentLog.color}`}>
            {currentLog.tag}
          </span>
          <span className="text-stone-800 font-medium truncate">
            {currentLog.text}
          </span>
        </div>
      </div>
    </div>
  );
};
