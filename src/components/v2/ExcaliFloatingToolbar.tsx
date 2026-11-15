import React, { useState } from 'react';
import { 
  MousePointer, 
  Square, 
  Diamond, 
  Circle, 
  ArrowUpRight, 
  Pencil, 
  Type, 
  Sparkles,
  Download,
  Eraser,
  Palette
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { CanvasToolType } from './ExcaliInteractiveCanvas';

interface ExcaliFloatingToolbarProps {
  activeTool: CanvasToolType;
  onSelectTool: (tool: CanvasToolType) => void;
  currentColor: string;
  onColorChange: (color: string) => void;
}

export const ExcaliFloatingToolbar: React.FC<ExcaliFloatingToolbarProps> = ({
  activeTool = 'select',
  onSelectTool,
  currentColor,
  onColorChange,
}) => {
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [bannerMessage, setBannerMessage] = useState<string | null>(null);

  const tools: { id: CanvasToolType; name: string; icon: React.ElementType; key: string }[] = [
    { id: 'select', name: 'Select & Pan', icon: MousePointer, key: '1' },
    { id: 'rectangle', name: 'Rectangle', icon: Square, key: '2' },
    { id: 'diamond', name: 'Diamond', icon: Diamond, key: '3' },
    { id: 'circle', name: 'Ellipse', icon: Circle, key: '4' },
    { id: 'arrow', name: 'Arrow', icon: ArrowUpRight, key: '5' },
    { id: 'pencil', name: 'Freehand Draw', icon: Pencil, key: '6' },
    { id: 'text', name: 'Sticky Text', icon: Type, key: '7' },
    { id: 'eraser', name: 'Eraser', icon: Eraser, key: '8' },
  ];

  const colors = [
    { id: '#1e1e1e', label: 'Ink Black' },
    { id: '#1971c2', label: 'Excali Blue' },
    { id: '#e03131', label: 'Coral Red' },
    { id: '#2f9e44', label: 'Emerald' },
    { id: '#f59f00', label: 'Highlighter' },
  ];

  const handleToolClick = (toolId: CanvasToolType, toolName: string) => {
    onSelectTool(toolId);
    if (toolId !== 'select') {
      setBannerMessage(`✏️ ${toolName} active: Click & drag anywhere on the canvas!`);
      setTimeout(() => setBannerMessage(null), 3000);
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-auto select-none">
      {/* Toast Notification when a tool is selected */}
      {bannerMessage && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-200 px-3.5 py-1.5 rounded-xl bg-[#fff3bf] border-2 border-[#1e1e1e] shadow-sketch text-xs font-hand font-bold text-[#1e1e1e] whitespace-nowrap">
          {bannerMessage}
        </div>
      )}

      {/* Popover Color Palette */}
      {showColorPalette && (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-stone-800 rounded-xl shadow-sketch animate-in fade-in slide-in-from-bottom-1">
          <span className="text-[11px] font-hand font-bold text-stone-700">Ink Color:</span>
          {colors.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onColorChange(c.id);
                setShowColorPalette(false);
              }}
              title={c.label}
              className={`w-5 h-5 rounded-full border-2 border-stone-800 transition-transform ${
                currentColor === c.id ? 'scale-125 ring-2 ring-stone-900 ring-offset-1' : 'hover:scale-110'
              }`}
              style={{ backgroundColor: c.id }}
            />
          ))}
        </div>
      )}

      {/* Floating Excalidraw Tool Dock */}
      <div className="flex items-center gap-1 sm:gap-1.5 px-3 py-2 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e] max-w-[95vw] overflow-x-auto scrollbar-none">
        
        {/* Tool buttons */}
        <div className="flex items-center gap-1 pr-1.5 border-r-2 border-stone-200">
          {tools.map((t) => {
            const Icon = t.icon;
            const isSelected = activeTool === t.id;
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
                      : 'hover:bg-stone-100 text-stone-700 hover:text-stone-950 border border-transparent'
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

        {/* Color Palette Toggle */}
        <button
          onClick={() => setShowColorPalette(!showColorPalette)}
          title="Change Pen Color"
          className="p-1.5 rounded-xl border border-stone-300 hover:bg-stone-100 transition-colors flex items-center justify-center"
        >
          <div
            className="w-4 h-4 rounded-full border border-stone-800"
            style={{ backgroundColor: currentColor }}
          />
        </button>

        {/* Resume Download CTA */}
        <a
          href={PORTFOLIO_DATA.personal.resumeUrl}
          download="Kishoresharma_T_SDE_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Official Resume PDF"
          className="px-3 py-1.5 rounded-xl bg-[#fff9db] hover:bg-[#fff3bf] border-2 border-[#1e1e1e] text-xs font-hand font-bold text-[#1e1e1e] flex items-center gap-1.5 shadow-[2px_2px_0px_#1e1e1e] shrink-0 ml-1 active:translate-x-[1px] active:translate-y-[1px]"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Resume PDF</span>
        </a>
      </div>
    </div>
  );
};
