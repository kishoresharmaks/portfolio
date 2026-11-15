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

    // Check if user explicitly navigated to v1 or modern portfolio
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

  const navigateToExcalidraw = () => {
    if (window.history.pushState) {
      window.history.pushState(null, '', '/');
    } else {
      window.location.pathname = '/';
    }
    setCurrentRoute('excalidraw');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentRoute === 'beacon') {
    return <BeaconDashboard onBackToPortfolio={navigateToExcalidraw} />;
  }

  return (
    <div className="w-full relative">
      {/* Silent Background Telemetry Tracker (Always active across all routes) */}
      <BeaconTracker />

      {/* Main View: Default Excalidraw portfolio on /, Modern portfolio on /v1 */}
      {currentRoute === 'v1' ? <ModernPortfolio /> : <PortfolioV2 />}
    </div>
  );
}

export default App;
