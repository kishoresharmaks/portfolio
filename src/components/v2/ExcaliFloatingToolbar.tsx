import React, { useState } from 'react';
import { 
  MousePointer, 
  Square, 
  Diamond, 
  Circle, 
  ArrowUpRight, 
  Pencil, 
  Type, 
  Download,
  Eraser,
  ChevronDown,
  X,
  RotateCcw,
  Trash2,
  Send,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { CanvasToolType } from './ExcaliInteractiveCanvas';

interface ExcaliFloatingToolbarProps {
  activeTool: CanvasToolType;
  onSelectTool: (tool: CanvasToolType) => void;
  currentColor: string;
  onColorChange: (color: string) => void;
  onOpenContact?: () => void;
}

export const ExcaliFloatingToolbar: React.FC<ExcaliFloatingToolbarProps> = ({
  activeTool = 'select',
  onSelectTool,
  currentColor,
  onColorChange,
  onOpenContact,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [bannerMessage, setBannerMessage] = useState<string | null>(null);

  const desktopTools: { id: CanvasToolType; name: string; icon: React.ElementType; key: string }[] = [
    { id: 'select', name: 'Select & Pan', icon: MousePointer, key: '1' },
    { id: 'rectangle', name: 'Rectangle', icon: Square, key: '2' },
    { id: 'diamond', name: 'Diamond', icon: Diamond, key: '3' },
    { id: 'circle', name: 'Ellipse', icon: Circle, key: '4' },
    { id: 'arrow', name: 'Arrow', icon: ArrowUpRight, key: '5' },
    { id: 'pencil', name: 'Freehand Draw', icon: Pencil, key: '6' },
    { id: 'text', name: 'Sticky Text', icon: Type, key: '7' },
    { id: 'eraser', name: 'Eraser', icon: Eraser, key: '8' },
  ];

  const mobileTools: { id: CanvasToolType; label: string; icon: React.ElementType }[] = [
    { id: 'pencil', label: 'Draw', icon: Pencil },
    { id: 'rectangle', label: 'Box', icon: Square },
    { id: 'diamond', label: 'Diamond', icon: Diamond },
    { id: 'circle', label: 'Circle', icon: Circle },
    { id: 'arrow', label: 'Arrow', icon: ArrowUpRight },
    { id: 'eraser', label: 'Erase', icon: Eraser },
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
      setBannerMessage(`✏️ ${toolName} active: Click & drag anywhere on the screen!`);
      setTimeout(() => setBannerMessage(null), 3000);
    }
  };

  const handleMobileContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getToolName = (tool: CanvasToolType) => {
    switch (tool) {
      case 'pencil': return 'Freehand Pen';
      case 'rectangle': return 'Rectangle Box';
      case 'diamond': return 'Diamond';
      case 'circle': return 'Circle Ellipse';
      case 'arrow': return 'Pointer Arrow';
      case 'text': return 'Sticky Note';
      case 'eraser': return 'Eraser';
      default: return 'Select & Pan';
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* MOBILE UI (Dedicated layout for screens < md / phones)                     */}
      {/* ========================================================================= */}
      <div className="md:hidden pointer-events-auto select-none">
        {/* MOBILE MODE A: Standard Browsing Mode (Thumb-Friendly 3-Action Dock) */}
        {activeTool === 'select' ? (
          <div className="fixed bottom-3 inset-x-3 z-40 max-w-sm mx-auto">
            <div className="flex items-center justify-between gap-2 p-1.5 bg-[#fdfbf7]/95 backdrop-blur-md rounded-2xl border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e]">
              
              {/* 1. Resume Button */}
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Kishoresharma_T_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Official Resume PDF"
                className="flex-1 py-2 px-2 rounded-xl bg-[#fff9db] hover:bg-[#fff3bf] border-2 border-[#1e1e1e] text-[#1e1e1e] font-hand font-bold text-xs flex items-center justify-center gap-1.5 shadow-[1.5px_1.5px_0px_#1e1e1e] active:translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              {/* 2. Interactive Whiteboard / Doodle Button */}
              <button
                onClick={() => onSelectTool('pencil')}
                className="flex-[1.4] py-2 px-3 rounded-xl bg-[#d0ebff] hover:bg-[#b9e1ff] border-2 border-[#1e1e1e] text-[#1e1e1e] font-hand font-bold text-xs flex items-center justify-center gap-1.5 shadow-[1.5px_1.5px_0px_#1e1e1e] active:translate-y-0.5 group"
                title="Open Interactive Whiteboard Canvas"
              >
                <Pencil className="w-3.5 h-3.5 text-blue-900 group-hover:rotate-12 transition-transform" />
                <span>Doodle</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              </button>

              {/* 3. Say Hello / Contact Button */}
              <button
                onClick={handleMobileContact}
                className="flex-1 py-2 px-2 rounded-xl bg-white hover:bg-stone-100 border-2 border-[#1e1e1e] text-[#1e1e1e] font-hand font-bold text-xs flex items-center justify-center gap-1.5 shadow-[1.5px_1.5px_0px_#1e1e1e] active:translate-y-0.5"
                title="Jump to Contact Section"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>

            </div>
          </div>
        ) : (
          /* MOBILE MODE B: Active Whiteboard Drawing Drawer */
          <div className="fixed bottom-3 inset-x-2 z-50 max-w-md mx-auto">
            <div className="p-3 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e] space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-150">
              
              {/* Drawer Header: Active Tool Title + Undo / Clear + Done Button */}
              <div className="flex items-center justify-between gap-1 border-b border-stone-200 pb-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  <span className="font-hand font-bold text-xs text-stone-900 truncate">
                    {getToolName(activeTool)}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Undo Button */}
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('excali-undo'))}
                    className="p-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-800 rounded-lg text-stone-800 text-xs font-hand font-bold flex items-center gap-1 active:scale-95"
                    title="Undo last stroke"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Undo</span>
                  </button>

                  {/* Clear Button */}
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('excali-clear'))}
                    className="p-1.5 bg-rose-50 hover:bg-rose-100 border border-stone-800 rounded-lg text-rose-800 text-xs font-hand font-bold flex items-center gap-1 active:scale-95"
                    title="Clear canvas"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Clear</span>
                  </button>

                  {/* Done / Exit Drawing Mode */}
                  <button
                    onClick={() => onSelectTool('select')}
                    className="px-2.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-800 rounded-lg text-xs font-hand font-bold flex items-center gap-1 shadow-sketch-sm active:scale-95"
                    title="Exit drawing mode"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Done</span>
                  </button>
                </div>
              </div>

              {/* Drawer Tools Grid (Large, thumb-friendly buttons) */}
              <div className="grid grid-cols-6 gap-1.5">
                {mobileTools.map((tool) => {
                  const Icon = tool.icon;
                  const isSelected = activeTool === tool.id;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => onSelectTool(tool.id)}
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
                        isSelected
                          ? 'bg-[#d0ebff] border-2 border-stone-900 shadow-[2px_2px_0px_#1e1e1e] font-bold text-stone-950 scale-105'
                          : 'bg-stone-50 border border-stone-300 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-0.5" />
                      <span className="text-[10px] font-hand leading-none">{tool.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Drawer Footer: Color Swatches + Touch Drag Instruction */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-hand font-bold text-stone-600">Color:</span>
                  <div className="flex items-center gap-1.5">
                    {colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => onColorChange(c.id)}
                        className={`w-6 h-6 rounded-full border-2 border-stone-900 transition-transform ${
                          currentColor === c.id ? 'scale-125 ring-2 ring-stone-900 ring-offset-1' : ''
                        }`}
                        style={{ backgroundColor: c.id }}
                        aria-label={c.label}
                      />
                    ))}
                  </div>
                </div>

                <span className="text-[10px] font-hand text-stone-500 font-bold italic">
                  👆 Drag finger to sketch!
                </span>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP UI (Unchanged Iconic Excalidraw Tool Dock for md: screens & up)     */}
      {/* ========================================================================= */}
      {isCollapsed ? (
        <div className="hidden md:block fixed bottom-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto select-none">
          <button
            onClick={() => setIsCollapsed(false)}
            className="px-4 py-2 bg-white/95 backdrop-blur-md border-2 border-stone-800 rounded-full shadow-sketch flex items-center gap-2 hover:bg-[#fff9db] transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm font-hand font-bold text-stone-900 group"
            title="Open Excalidraw Whiteboard Drawing Tools"
          >
            <Pencil className="w-3.5 h-3.5 text-stone-800 group-hover:rotate-12 transition-transform" />
            <span>Whiteboard Tools (Draw)</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </button>
        </div>
      ) : (
        <div className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex-col items-center gap-1.5 pointer-events-auto select-none">
          {/* Toast Notification when a tool is selected */}
          {bannerMessage && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-200 px-3 py-1 rounded-xl bg-[#fff3bf] border-2 border-[#1e1e1e] shadow-sketch text-xs font-hand font-bold text-[#1e1e1e] whitespace-nowrap">
              {bannerMessage}
            </div>
          )}

          {/* Popover Color Palette */}
          {showColorPalette && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-stone-800 rounded-xl shadow-sketch animate-in fade-in slide-in-from-bottom-1">
              <span className="text-[11px] font-hand font-bold text-stone-700">Pen Color:</span>
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
          <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#1e1e1e] shadow-[4px_4px_0px_#1e1e1e]">
            
            {/* Tool buttons */}
            <div className="flex items-center gap-1 pr-1.5 border-r border-stone-200">
              {desktopTools.map((t) => {
                const Icon = t.icon;
                const isSelected = activeTool === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleToolClick(t.id, t.name)}
                    title={`${t.name} (${t.key})`}
                    className={`
                      p-1.5 sm:p-2 rounded-xl transition-all duration-150 relative group flex items-center justify-center
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
              className="p-1 sm:p-1.5 rounded-xl border border-stone-300 hover:bg-stone-100 transition-colors flex items-center justify-center"
            >
              <div
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-stone-800"
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
              className="px-2.5 py-1 rounded-xl bg-[#fff9db] hover:bg-[#fff3bf] border-2 border-[#1e1e1e] text-xs font-hand font-bold text-[#1e1e1e] flex items-center gap-1.5 shadow-[2px_2px_0px_#1e1e1e] shrink-0 active:translate-x-[1px] active:translate-y-[1px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            {/* Minimize Button */}
            <button
              onClick={() => setIsCollapsed(true)}
              title="Hide toolbar"
              className="p-1 rounded-lg hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors flex items-center justify-center ml-0.5"
            >
              <ChevronDown className="w-4 h-4" />
            </button>

          </div>
        </div>
      )}
    </>
  );
};
