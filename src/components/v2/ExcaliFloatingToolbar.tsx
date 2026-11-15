import React, { useState } from 'react';
import { 
  Hand, 
  MousePointer, 
  Square, 
  Diamond, 
  Circle, 
  ArrowUpRight, 
  Pencil, 
  Type, 
  Sparkles,
  Download,
  Terminal,
  Eraser
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface ExcaliFloatingToolbarProps {
  onSwitchTheme?: () => void;
  activeTool?: string;
  onSelectTool?: (tool: string) => void;
}

export const ExcaliFloatingToolbar: React.FC<ExcaliFloatingToolbarProps> = ({
  onSwitchTheme,
  activeTool = 'select',
  onSelectTool,
}) => {
  const [currentTool, setCurrentTool] = useState(activeTool);
  const [bannerMessage, setBannerMessage] = useState<string | null>(null);

  const tools = [
    { id: 'select', name: 'Select', icon: MousePointer, key: '1' },
    { id: 'rectangle', name: 'Rectangle', icon: Square, key: '2' },
    { id: 'diamond', name: 'Diamond', icon: Diamond, key: '3' },
    { id: 'circle', name: 'Ellipse', icon: Circle, key: '4' },
    { id: 'arrow', name: 'Arrow', icon: ArrowUpRight, key: '5' },
    { id: 'pencil', name: 'Draw', icon: Pencil, key: '6' },
    { id: 'text', name: 'Text', icon: Type, key: '7' },
  ];

  const handleToolClick = (toolId: string, toolName: string) => {
    setCurrentTool(toolId);
    if (onSelectTool) onSelectTool(toolId);
    setBannerMessage(`✏️ Switched to ${toolName} Tool!`);
    setTimeout(() => setBannerMessage(null), 2000);
  };

  const triggerConfetti = () => {
    setBannerMessage('🎉 Handcrafted with Excalidraw UI Kit!');
    setTimeout(() => setBannerMessage(null), 3000);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-auto">
      {/* Toast Notification */}
      {bannerMessage && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-200 px-3.5 py-1.5 rounded-lg bg-[#fff3bf] border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e] text-xs font-hand font-bold text-[#1e1e1e]">
          {bannerMessage}
        </div>
      )}

      {/* Floating Excalidraw Tool Dock */}
      <div className="flex items-center gap-1 sm:gap-1.5 px-3 py-2 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e] max-w-[95vw] overflow-x-auto scrollbar-none">
        
        {/* Tool buttons */}
        <div className="flex items-center gap-1 pr-2 border-r-2 border-slate-200">
          {tools.map((t) => {
            const Icon = t.icon;
            const isSelected = currentTool === t.id;
            return (
              <button
                key={t.id}
                onClick={() => handleToolClick(t.id, t.name)}
                title={`${t.name} (${t.key})`}
                className={`
                  p-2 rounded-xl transition-all duration-150 relative group flex items-center justify-center
                  ${
                    isSelected
                      ? 'bg-[#d0ebff] border-2 border-[#1e1e1e] shadow-[2px_2px_0px_#1e1e1e]'
                      : 'hover:bg-slate-100 text-slate-700 hover:text-black border border-transparent'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span className="sr-only">{t.name}</span>
                <span className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#1e1e1e] text-white text-[10px] font-hand font-bold rounded shadow whitespace-nowrap">
                  {t.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Fun Doodle Sparkle */}
        <button
          onClick={triggerConfetti}
          title="Whiteboard Fun"
          className="p-2 rounded-xl text-amber-600 hover:bg-amber-50 hover:text-amber-800 transition-colors flex items-center justify-center"
        >
          <Sparkles className="w-4 h-4" />
        </button>

        {/* Quick Resume Download */}
        <a
          href={PORTFOLIO_DATA.personal.resumeUrl}
          download="Kishoresharma_Web_Developer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Resume PDF"
          className="px-2.5 py-1.5 rounded-xl bg-[#fff9db] hover:bg-[#fff3bf] border-2 border-[#1e1e1e] text-xs font-hand font-bold text-[#1e1e1e] flex items-center gap-1.5 shadow-[2px_2px_0px_#1e1e1e] shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Resume PDF</span>
        </a>

        {/* Theme Toggle to V1 Cyber Terminal */}
        {onSwitchTheme && (
          <button
            onClick={onSwitchTheme}
            title="Switch back to V1 Cyber Mode"
            className="px-2.5 py-1.5 rounded-xl bg-[#1e1e1e] text-white hover:bg-black text-xs font-hand font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#6366f1] shrink-0 ml-1"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Switch to V1 Cyber</span>
            <span className="sm:hidden">V1</span>
          </button>
        )}

      </div>
    </div>
  );
};
