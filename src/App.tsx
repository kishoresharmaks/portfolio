import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceCertifications } from './components/ExperienceCertifications';
import { ContactFooter } from './components/ContactFooter';
import { BeaconTracker } from './components/BeaconTracker';
import { BeaconDashboard } from './components/BeaconDashboard';
import { PortfolioV2 } from './components/v2/PortfolioV2';
import { Sparkles } from 'lucide-react';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    if (window.location.pathname.toLowerCase().includes('/beacon') || window.location.hash.toLowerCase().includes('beacon')) {
      return '/beacon';
    }
    return '/';
  });

  const [theme, setTheme] = useState<'v1' | 'v2'>(() => {
    if (typeof window === 'undefined') return 'v2';
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    if (hash.includes('v1') || search.includes('v=1')) return 'v1';
    if (hash.includes('v2') || search.includes('v=2')) return 'v2';
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'v1' || saved === 'v2') return saved;
    return 'v2'; // Defaults to V2 Excalidraw Whiteboard theme
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (path.includes('/beacon') || hash.includes('beacon')) {
        setCurrentRoute('/beacon');
      } else {
        setCurrentRoute('/');
      }

      if (hash.includes('v1') || search.includes('v=1')) {
        setTheme('v1');
      } else if (hash.includes('v2') || search.includes('v=2')) {
        setTheme('v2');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'v1' ? 'v2' : 'v1';
      localStorage.setItem('portfolio_theme', next);
      return next;
    });
  };

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

  // If V2 theme is active
  if (theme === 'v2') {
    return (
      <div className="w-full relative">
        <BeaconTracker />
        <PortfolioV2 onSwitchTheme={toggleTheme} />
      </div>
    );
  }

  // V1 Cyber Terminal Dark Mode
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

      {/* Floating V2 Switcher pill when browsing V1 */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-amber-300 text-stone-900 font-bold rounded-full shadow-2xl border-2 border-stone-900 hover:bg-amber-200 transition-transform hover:scale-105 active:scale-95 text-xs font-mono"
        title="Switch to V2 Excalidraw Light Theme"
      >
        <Sparkles size={14} className="text-stone-900" />
        <span>Try V2 Whiteboard Theme 🎨</span>
      </button>
    </div>
  );
}

export default App;
