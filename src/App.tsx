import React, { useState, useEffect } from 'react';
import { BeaconTracker } from './components/BeaconTracker';
import { BeaconDashboard } from './components/BeaconDashboard';
import { PortfolioV2 } from './components/v2/PortfolioV2';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    if (window.location.pathname.toLowerCase().includes('/beacon') || window.location.hash.toLowerCase().includes('beacon')) {
      return '/beacon';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/beacon') || hash.includes('beacon')) {
        setCurrentRoute('/beacon');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToPortfolio = () => {
    window.location.hash = '';
    if (window.history.pushState) {
      window.history.pushState(null, '', '/');
    }
    setCurrentRoute('/');
  };

  if (currentRoute === '/beacon') {
    return <BeaconDashboard onBackToPortfolio={navigateToPortfolio} />;
  }

  // The Handcrafted Excalidraw Whiteboard theme is now the primary, official portfolio
  return (
    <div className="w-full relative">
      <BeaconTracker />
      <PortfolioV2 />
    </div>
  );
}

export default App;
