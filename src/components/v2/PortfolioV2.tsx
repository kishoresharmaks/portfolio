import React, { useState } from 'react';
import { ExcaliNavbar } from './ExcaliNavbar';
import { ExcaliHero } from './ExcaliHero';
import { ExcaliSkills } from './ExcaliSkills';
import { ExcaliProjects } from './ExcaliProjects';
import { ExcaliExperience } from './ExcaliExperience';
import { ExcaliContact } from './ExcaliContact';
import { ExcaliFloatingToolbar } from './ExcaliFloatingToolbar';

export const PortfolioV2: React.FC = () => {
  const [activeCanvasTool, setActiveCanvasTool] = useState<string>('select');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfbf7] text-stone-900 font-sans selection:bg-amber-200 selection:text-stone-900 excali-canvas-grid relative overflow-x-hidden">
      {/* Handcrafted Excalidraw Navigation Bar */}
      <ExcaliNavbar
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Hero Section */}
        <ExcaliHero
          onOpenContact={() => scrollToSection('contact')}
          onExploreProjects={() => scrollToSection('projects')}
        />

        {/* Skills Section */}
        <ExcaliSkills />

        {/* Projects Section */}
        <ExcaliProjects />

        {/* Experience & Certifications Section */}
        <ExcaliExperience />
      </main>

      {/* Contact & Footer Section */}
      <ExcaliContact />

      {/* Excalidraw Floating Tool Dock */}
      <ExcaliFloatingToolbar
        activeTool={activeCanvasTool}
        onSelectTool={(tool) => setActiveCanvasTool(tool)}
      />
    </div>
  );
};

export default PortfolioV2;
