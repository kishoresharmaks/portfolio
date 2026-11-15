import React, { useState } from 'react';
import { ExcaliNavbar } from './ExcaliNavbar';
import { ExcaliHero } from './ExcaliHero';
import { ExcaliSkills } from './ExcaliSkills';
import { ExcaliProjects } from './ExcaliProjects';
import { ExcaliExperience } from './ExcaliExperience';
import { ExcaliContact } from './ExcaliContact';
import { ExcaliFloatingToolbar } from './ExcaliFloatingToolbar';
import { ExcaliInteractiveCanvas, CanvasToolType } from './ExcaliInteractiveCanvas';

export const PortfolioV2: React.FC = () => {
  const [activeCanvasTool, setActiveCanvasTool] = useState<CanvasToolType>('select');
  const [currentColor, setCurrentColor] = useState<string>('#1e1e1e');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfbf7] text-stone-900 font-sans selection:bg-amber-200 selection:text-stone-900 excali-canvas-grid relative overflow-x-hidden pb-36">
      {/* Fully Functional Interactive Whiteboard Drawing Canvas Layer */}
      <ExcaliInteractiveCanvas
        activeTool={activeCanvasTool}
        onToolChange={(tool) => setActiveCanvasTool(tool)}
        currentColor={currentColor}
        onColorChange={(color) => setCurrentColor(color)}
      />

      {/* Navigation Bar */}
      <ExcaliNavbar
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main className="w-full relative z-10">
        <ExcaliHero
          onOpenContact={() => scrollToSection('contact')}
          onExploreProjects={() => scrollToSection('projects')}
        />

        <ExcaliSkills />

        <ExcaliProjects />

        <ExcaliExperience />
      </main>

      {/* Contact & Footer Section */}
      <div className="relative z-10">
        <ExcaliContact />
      </div>

      {/* Fully Functional Excalidraw Floating Tool Dock */}
      <ExcaliFloatingToolbar
        activeTool={activeCanvasTool}
        onSelectTool={(tool) => setActiveCanvasTool(tool)}
        currentColor={currentColor}
        onColorChange={(color) => setCurrentColor(color)}
      />
    </div>
  );
};

export default PortfolioV2;
