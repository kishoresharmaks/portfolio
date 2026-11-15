import React, { useState, useEffect } from 'react';
import { BeaconTracker } from './components/BeaconTracker';
import { BeaconDashboard } from './components/BeaconDashboard';
import { ModernPortfolio } from './components/modern/ModernPortfolio';

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

  return (
    <div className="w-full relative">
      <BeaconTracker />
      <ModernPortfolio />
    </div>
  );
}

export default App;
