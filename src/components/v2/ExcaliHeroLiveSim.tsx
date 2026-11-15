import React, { useState, useEffect } from 'react';
import { ScotchTape, PushPin } from './ExcaliSvgDoodles';
import { Server, Database, Layers, CheckCircle2, Lock, Zap, Smartphone } from 'lucide-react';

export const ExcaliHeroLiveSim: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isManualTrigger, setIsManualTrigger] = useState<boolean>(false);
  const [pulseCount, setPulseCount] = useState<number>(1);

  // Auto-cycle through the order flow animation
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
    setPulseCount((c) => c + 1);
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
        return { tag: 'ORDER SENT', text: 'Customer taps "Buy Now" on their phone', color: 'text-amber-800 bg-amber-100' };
      case 2:
        return { tag: 'FAST SERVER', text: 'Spring Boot checks payment & details in 0.01 seconds', color: 'text-blue-800 bg-blue-100' };
      case 3:
        return { tag: 'DATABASE LOCKED', text: 'PostgreSQL locks the item so no two people buy the same thing', color: 'text-emerald-800 bg-emerald-100' };
      case 4:
        return { tag: 'DELIVERY READY', text: 'Nearest courier is auto-assigned & confirmation sent!', color: 'text-purple-800 bg-purple-100' };
      default:
        return { tag: 'READY', text: 'System ready for next order', color: 'text-stone-800 bg-stone-100' };
    }
  };

  const currentLog = getLogMessage();

  return (
    <div className="relative bg-[#fffdfa] border-3 border-stone-800 rounded-2xl p-4 sm:p-5 shadow-sketch-xl select-none overflow-hidden group">
      {/* Tape on top */}
      <ScotchTape className="-top-3 left-10 w-28 h-5 opacity-90 -rotate-1" />
      <PushPin className="-top-3.5 right-8" />

      {/* Blueprint Header Bar */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pb-3 mb-3 border-b-2 border-dashed border-stone-300">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border border-stone-800 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-stone-800 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-stone-800 inline-block" />
          </div>
          <span className="font-mono text-xs text-stone-700 font-bold truncate">
            demo://how-an-order-is-handled.excalidraw
          </span>
        </div>

        {/* Live Simulation Pulse Button */}
        <button
          onClick={triggerManualSimulation}
          className="flex items-center gap-1.5 px-3 py-1 bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-hand font-bold rounded-lg border border-stone-800 shadow-sketch-sm active:translate-x-[1px] active:translate-y-[1px] transition-all shrink-0"
          title="Click to test order flow"
        >
          <Zap size={13} className="text-amber-400 fill-amber-400" />
          <span>Tap to Test Order Flow!</span>
        </button>
      </div>

      {/* Interactive Visual Architecture Flow Diagram */}
      <div className="relative py-1">
        {/* Step 1: Customer Order */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div
            className={`w-full p-2.5 rounded-xl border-2 transition-all duration-300 ${
              step === 1
                ? 'bg-[#fff3bf] border-stone-900 shadow-sketch scale-[1.01]'
                : 'bg-white border-stone-700 opacity-80'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-200 border border-stone-800 shadow-sketch-sm">
                  <Smartphone size={16} className="text-stone-900" />
                </div>
                <div>
                  <div className="font-hand font-bold text-base text-stone-900 leading-none">
                    1. Customer Taps "Buy Now"
                  </div>
                  <div className="text-[11px] font-sans text-stone-600 mt-0.5">
                    Order sent instantly from phone or browser
                  </div>
                </div>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                step === 1 ? 'bg-amber-300 border-stone-800 text-stone-900 animate-pulse' : 'bg-stone-100 text-stone-500 border-stone-300'
              }`}>
                {step === 1 ? 'Sending...' : 'Order #1042'}
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

        {/* Step 2: Spring Boot Backend */}
        <div
          className={`w-full p-2.5 rounded-xl border-2 transition-all duration-300 mb-1.5 ${
            step === 2
              ? 'bg-[#d0ebff] border-stone-900 shadow-sketch scale-[1.01]'
              : 'bg-white border-stone-700 opacity-80'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-200 border border-stone-800 shadow-sketch-sm">
                <Server size={16} className="text-stone-900" />
              </div>
              <div>
                <div className="font-hand font-bold text-base text-stone-900 leading-none flex items-center gap-1.5">
                  <span>2. Fast Server Checks (Java & Spring Boot)</span>
                  {step === 2 && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  )}
                </div>
                <div className="text-[11px] font-sans text-stone-700 mt-0.5">
                  Confirms payment, user account & address in 0.01 seconds
                </div>
              </div>
            </div>
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
              step === 2 ? 'bg-blue-300 border-stone-800 text-blue-950 font-bold' : 'bg-stone-100 text-stone-500 border-stone-300'
            }`}>
              {step === 2 ? '⚡ Checking' : '✓ Verified'}
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

        {/* Step 3: Split Dual Subsystems */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Subsystem A: Database Lock */}
          <div
            className={`p-2.5 rounded-xl border-2 transition-all duration-300 ${
              step === 3
                ? 'bg-[#ebfbee] border-stone-900 shadow-sketch scale-[1.01]'
                : 'bg-white border-stone-700 opacity-80'
            }`}
          >
            <div className="flex items-start gap-2">
              <div className="p-1 rounded bg-[#d3f9d8] border border-stone-800 mt-0.5">
                <Database size={15} className="text-emerald-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-hand font-bold text-sm text-stone-900 flex items-center gap-1">
                  <span>3A. Smart Database Lock</span>
                  <Lock size={12} className={step === 3 ? 'text-emerald-700 animate-bounce' : 'text-stone-400'} />
                </div>
                <div className="text-[10px] font-sans text-stone-700 leading-tight mt-0.5">
                  Locks the item in PostgreSQL
                </div>
                <div className="text-[10px] font-mono text-emerald-800 font-bold mt-1">
                  ✓ Prevents double-booking!
                </div>
              </div>
            </div>
          </div>

          {/* Subsystem B: Auto Notifications & Dispatch */}
          <div
            className={`p-2.5 rounded-xl border-2 transition-all duration-300 ${
              step === 4
                ? 'bg-[#f3d9fa] border-stone-900 shadow-sketch scale-[1.01]'
                : 'bg-white border-stone-700 opacity-80'
            }`}
          >
            <div className="flex items-start gap-2">
              <div className="p-1 rounded bg-[#fcc2d7] border border-stone-800 mt-0.5">
                <Layers size={15} className="text-purple-900" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-hand font-bold text-sm text-stone-900 flex items-center gap-1">
                  <span>3B. Instant Dispatch Alerts</span>
                  <Zap size={12} className={step === 4 ? 'text-purple-700 animate-pulse' : 'text-stone-400'} />
                </div>
                <div className="text-[10px] font-sans text-stone-700 leading-tight mt-0.5">
                  Sends job via RabbitMQ queue
                </div>
                <div className="text-[10px] font-mono text-purple-800 font-bold mt-1">
                  ✓ Courier assigned automatically!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Friendly Status Ticker */}
      <div className="mt-2.5 pt-2 border-t-2 border-stone-800 bg-[#f8f9fa] rounded-xl p-2 border border-stone-300">
        <div className="flex items-center justify-between text-[10px] font-mono mb-1">
          <span className="flex items-center gap-1 text-stone-600 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE DEMO STATUS:
          </span>
          <span className="text-stone-500">Order #{pulseCount}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono truncate">
          <span className={`px-2 py-0.5 rounded font-bold text-[10px] uppercase ${currentLog.color}`}>
            {currentLog.tag}
          </span>
          <span className="text-stone-900 font-semibold truncate font-sans text-xs">
            {currentLog.text}
          </span>
        </div>
      </div>
    </div>
  );
};
