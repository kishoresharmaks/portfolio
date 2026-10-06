import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceCertifications } from './components/ExperienceCertifications';
import { ContactFooter } from './components/ContactFooter';
import { BeaconTracker } from './components/BeaconTracker';
import { BeaconDashboard } from './components/BeaconDashboard';

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

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white w-full relative">
      <BeaconTracker />
      <Navbar onOpenContact={scrollToContact} />
      <main className="w-full">
        <Hero onOpenContact={scrollToContact} />
        <Skills />
        <Projects />
        <ExperienceCertifications />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
