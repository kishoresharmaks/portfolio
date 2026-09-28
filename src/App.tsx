import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceCertifications } from './components/ExperienceCertifications';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white w-full max-w-full overflow-x-hidden relative">
      <Navbar onOpenContact={scrollToContact} />
      <main className="w-full max-w-full overflow-x-hidden">
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
