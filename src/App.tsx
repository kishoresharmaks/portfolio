import React, { useState, useEffect } from 'react';
import { BeaconTracker } from './components/BeaconTracker';
import { BeaconDashboard } from './components/BeaconDashboard';
import { PortfolioV2 } from './components/v2/PortfolioV2';
import { ModernPortfolio } from './components/modern/ModernPortfolio';

export type PortfolioVersion = 'excalidraw' | 'v1' | 'beacon';

export function App() {
  const getRoute = (): PortfolioVersion => {
    if (typeof window === 'undefined') return 'excalidraw';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    // Check for beacon telemetry dashboard
    if (path.includes('/beacon') || hash.includes('beacon')) {
      return 'beacon';
    }

    // Check if user explicitly asked for v1 or modern portfolio
    if (
      path === '/v1' ||
      path.startsWith('/v1/') ||
      path === '/modern' ||
      path.startsWith('/modern/') ||
      hash.startsWith('#v1') ||
      hash.startsWith('#/v1') ||
      hash.includes('modern')
    ) {
      return 'v1';
    }

    // Default: Root URL (/) and /v2, /excalidraw, #v2 load the handcrafted Excalidraw portfolio
    return 'excalidraw';
  };

  const [currentRoute, setCurrentRoute] = useState<PortfolioVersion>(getRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Sync document body style and document title dynamically based on active portfolio version
  useEffect(() => {
    if (currentRoute === 'v1') {
      document.title = 'Kishoresharma T | Full-Stack Software Developer & Backend Engineer';
      document.body.className = 'bg-[#090D16] text-slate-100 font-sans antialiased min-h-screen overflow-x-hidden selection:bg-indigo-500 selection:text-white';
    } else if (currentRoute === 'excalidraw') {
      document.title = 'Kishoresharma T | Backend & Full-Stack Engineer (Excalidraw Portfolio)';
      document.body.className = 'bg-[#fdfbf7] text-stone-900 font-sans antialiased min-h-screen overflow-x-hidden selection:bg-amber-200 selection:text-stone-900';
    } else if (currentRoute === 'beacon') {
      document.title = 'Telemetry & Analytics Dashboard | Kishoresharma T';
      document.body.className = 'bg-[#0B0F19] text-white font-sans antialiased min-h-screen';
    }
  }, [currentRoute]);

  const navigateTo = (target: PortfolioVersion) => {
    let targetPath = '/';
    if (target === 'v1') targetPath = '/v1';
    else if (target === 'beacon') targetPath = '/beacon';

    if (window.history.pushState) {
      window.history.pushState(null, '', targetPath);
    } else {
      window.location.pathname = targetPath;
    }
    setCurrentRoute(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentRoute === 'beacon') {
    return <BeaconDashboard onBackToPortfolio={() => navigateTo('excalidraw')} />;
  }

  return (
    <div className="w-full relative">
      {/* Silent Background Telemetry Tracker (Always active across all routes) */}
      <BeaconTracker />

      {/* Main View: Default Excalidraw portfolio on /, Modern portfolio on /v1 */}
      {currentRoute === 'v1' ? (
        <ModernPortfolio onSwitchToV2={() => navigateTo('excalidraw')} />
      ) : (
        <PortfolioV2 onSwitchToV1={() => navigateTo('v1')} />
      )}

      {/* Floating Theme Switcher Quick Toggle (Desktop - Bottom Left) */}
      <aside aria-label="Version Switcher" className="hidden sm:block fixed bottom-4 left-4 z-40 pointer-events-auto select-none">
        {currentRoute === 'excalidraw' ? (
          <button
            onClick={() => navigateTo('v1')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/90 hover:bg-stone-950 text-white border-2 border-stone-800 text-xs font-mono font-bold shadow-sketch hover:scale-105 active:scale-95 transition-all backdrop-blur-sm group"
            title="Switch to V1 Modern Developer Portfolio (/v1)"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover:animate-ping" />
            <span>Switch to Modern Portfolio (V1)</span>
            <span className="text-indigo-400 text-[11px] font-sans">➔</span>
          </button>
        ) : (
          <button
            onClick={() => navigateTo('excalidraw')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-900 border border-white/20 text-xs font-mono font-bold shadow-lg shadow-black/30 hover:scale-105 active:scale-95 transition-all backdrop-blur-sm group"
            title="Switch to Excalidraw Whiteboard Portfolio (/)"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:animate-ping" />
            <span>Switch to Excalidraw (V2)</span>
            <span className="text-amber-500 text-[11px] font-sans">➔</span>
          </button>
        )}
      </aside>
    </div>
  );
}

export default App;
