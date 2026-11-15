import React, { useState, useRef, useEffect, useCallback } from 'react';
import rough from 'roughjs';

export type CanvasToolType = 'select' | 'rectangle' | 'diamond' | 'circle' | 'arrow' | 'pencil' | 'text' | 'eraser';

export interface DrawnElement {
  id: string;
  type: CanvasToolType;
  points?: { x: number; y: number }[];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  endX?: number;
  endY?: number;
  text?: string;
  color: string;
  strokeWidth: number;
  roughness: number;
}

interface ExcaliInteractiveCanvasProps {
  activeTool: CanvasToolType;
  onToolChange: (tool: CanvasToolType) => void;
  currentColor: string;
  onColorChange: (color: string) => void;
}

export const ExcaliInteractiveCanvas: React.FC<ExcaliInteractiveCanvasProps> = ({
  activeTool,
  onToolChange,
  currentColor,
  onColorChange,
}) => {
  const [elements, setElements] = useState<DrawnElement[]>([]);
  const [currentElement, setCurrentElement] = useState<DrawnElement | null>(null);
  const [textInputPos, setTextInputPos] = useState<{ x: number; y: number } | null>(null);
  const [textInputValue, setTextInputValue] = useState('');
  
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDrawing = useRef(false);

  // Redraw all rough elements whenever elements change or window resizes
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    
    // Clear previous rough nodes (keep defs if any)
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    const rc = rough.svg(svg);

    // Draw all committed elements
    elements.forEach((el) => {
      drawRoughElement(rc, svg, el);
    });

    // Draw active drawing element
    if (currentElement) {
      drawRoughElement(rc, svg, currentElement);
    }
  }, [elements, currentElement]);

  const drawRoughElement = (rc: any, svg: SVGSVGElement, el: DrawnElement) => {
    try {
      if (el.type === 'pencil' && el.points && el.points.length > 1) {
        // Draw continuous freehand path
        const pts: [number, number][] = el.points.map((p) => [p.x, p.y]);
        const node = rc.linearPath(pts, {
          stroke: el.color,
          strokeWidth: el.strokeWidth,
          roughness: el.roughness,
          bowing: 1.5,
        });
        svg.appendChild(node);
      } else if (el.type === 'rectangle' && el.x !== undefined && el.y !== undefined && el.width && el.height) {
        const node = rc.rectangle(el.x, el.y, el.width, el.height, {
          stroke: el.color,
          strokeWidth: el.strokeWidth,
          roughness: el.roughness,
          fill: el.color === '#ffd43b' ? 'rgba(255, 212, 59, 0.2)' : 'rgba(255, 255, 255, 0.4)',
          fillStyle: 'hachure',
        });
        svg.appendChild(node);
      } else if (el.type === 'circle' && el.x !== undefined && el.y !== undefined && el.width && el.height) {
        const cx = el.x + el.width / 2;
        const cy = el.y + el.height / 2;
        const diam = Math.max(Math.abs(el.width), Math.abs(el.height));
        const node = rc.circle(cx, cy, diam, {
          stroke: el.color,
          strokeWidth: el.strokeWidth,
          roughness: el.roughness,
          fill: 'rgba(208, 235, 255, 0.15)',
        });
        svg.appendChild(node);
      } else if (el.type === 'diamond' && el.x !== undefined && el.y !== undefined && el.width && el.height) {
        const cx = el.x + el.width / 2;
        const cy = el.y + el.height / 2;
        const pts: [number, number][] = [
          [cx, el.y],
          [el.x + el.width, cy],
          [cx, el.y + el.height],
          [el.x, cy],
        ];
        const node = rc.polygon(pts, {
          stroke: el.color,
          strokeWidth: el.strokeWidth,
          roughness: el.roughness,
        });
        svg.appendChild(node);
      } else if (el.type === 'arrow' && el.x !== undefined && el.y !== undefined && el.endX !== undefined && el.endY !== undefined) {
        // Line
        const lineNode = rc.line(el.x, el.y, el.endX, el.endY, {
          stroke: el.color,
          strokeWidth: el.strokeWidth,
          roughness: el.roughness,
        });
        svg.appendChild(lineNode);

        // Arrow head
        const angle = Math.atan2(el.endY - el.y, el.endX - el.x);
        const headLength = 16;
        const p1x = el.endX - headLength * Math.cos(angle - Math.PI / 6);
        const p1y = el.endY - headLength * Math.sin(angle - Math.PI / 6);
        const p2x = el.endX - headLength * Math.cos(angle + Math.PI / 6);
        const p2y = el.endY - headLength * Math.sin(angle + Math.PI / 6);

        const headNode = rc.linearPath([[p1x, p1y], [el.endX, el.endY], [p2x, p2y]], {
          stroke: el.color,
          strokeWidth: el.strokeWidth,
          roughness: el.roughness,
        });
        svg.appendChild(headNode);
      } else if (el.type === 'text' && el.x !== undefined && el.y !== undefined && el.text) {
        const textNode = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        textNode.setAttribute('x', el.x.toString());
        textNode.setAttribute('y', el.y.toString());
        textNode.setAttribute('fill', el.color);
        textNode.setAttribute('font-family', '"Patrick Hand", cursive, sans-serif');
        textNode.setAttribute('font-size', '20px');
        textNode.setAttribute('font-weight', 'bold');
        textNode.textContent = el.text;
        svg.appendChild(textNode);
      }
    } catch (e) {
      console.warn('Rough render note:', e);
    }
  };

  const getCoordinates = (e: React.PointerEvent<HTMLDivElement>) => {
    // Page-relative coordinates including scroll
    const pageX = e.pageX;
    const pageY = e.pageY;
    return { x: pageX, y: pageY };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activeTool === 'select') return;

    const { x, y } = getCoordinates(e);

    if (activeTool === 'text') {
      setTextInputPos({ x, y });
      setTextInputValue('');
      return;
    }

    if (activeTool === 'eraser') {
      // Find element near click and remove it
      setElements((prev) =>
        prev.filter((el) => {
          if (el.x !== undefined && el.y !== undefined) {
            const dist = Math.hypot(el.x - x, el.y - y);
            return dist > 40;
          }
          if (el.points && el.points.length > 0) {
            const hit = el.points.some((p) => Math.hypot(p.x - x, p.y - y) < 25);
            return !hit;
          }
          return true;
        })
      );
      return;
    }

    isDrawing.current = true;
    const newEl: DrawnElement = {
      id: `el_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      type: activeTool,
      x,
      y,
      width: 0,
      height: 0,
      endX: x,
      endY: y,
      points: activeTool === 'pencil' ? [{ x, y }] : undefined,
      color: currentColor,
      strokeWidth: activeTool === 'pencil' ? 2.5 : 2,
      roughness: 1.4,
    };

    setCurrentElement(newEl);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDrawing.current || !currentElement) return;

    const { x, y } = getCoordinates(e);

    if (currentElement.type === 'pencil') {
      setCurrentElement((prev) => {
        if (!prev || !prev.points) return prev;
        return {
          ...prev,
          points: [...prev.points, { x, y }],
        };
      });
    } else if (['rectangle', 'circle', 'diamond'].includes(currentElement.type)) {
      const startX = currentElement.x || 0;
      const startY = currentElement.y || 0;
      setCurrentElement((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          width: x - startX,
          height: y - startY,
        };
      });
    } else if (currentElement.type === 'arrow') {
      setCurrentElement((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          endX: x,
          endY: y,
        };
      });
    }
  };

  const handlePointerUp = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;

    if (currentElement) {
      setElements((prev) => [...prev, currentElement]);
      setCurrentElement(null);
    }
  };

  const handleTextSubmit = () => {
    if (textInputPos && textInputValue.trim()) {
      const newEl: DrawnElement = {
        id: `text_${Date.now()}`,
        type: 'text',
        x: textInputPos.x,
        y: textInputPos.y,
        text: textInputValue.trim(),
        color: currentColor,
        strokeWidth: 2,
        roughness: 1,
      };
      setElements((prev) => [...prev, newEl]);
    }
    setTextInputPos(null);
    setTextInputValue('');
    onToolChange('select');
  };

  const undoLast = () => {
    setElements((prev) => prev.slice(0, -1));
  };

  const clearAll = () => {
    setElements([]);
    setCurrentElement(null);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`absolute inset-0 w-full min-h-full overflow-hidden ${
        activeTool === 'select'
          ? 'pointer-events-none'
          : 'pointer-events-auto cursor-crosshair z-30'
      }`}
      style={{ height: '100%' }}
    >
      {/* SVG Canvas where all strokes and shapes are rendered */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        style={{ minHeight: '100%' }}
      />

      {/* Floating Active Drawing Status Pill */}
      {activeTool !== 'select' && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex items-center gap-2 px-4 py-2 bg-white border-2 border-stone-800 rounded-2xl shadow-sketch animate-in fade-in slide-in-from-top-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-hand font-bold text-sm text-stone-900">
            {activeTool === 'pencil' && '✏️ Draw anywhere on the screen!'}
            {activeTool === 'rectangle' && '🔲 Drag to draw a rectangle'}
            {activeTool === 'diamond' && '◇ Drag to draw a diamond'}
            {activeTool === 'circle' && '○ Drag to draw a circle'}
            {activeTool === 'arrow' && '↗ Drag to draw an arrow'}
            {activeTool === 'text' && '📝 Click anywhere to write text'}
            {activeTool === 'eraser' && '🧹 Click on any doodle to erase'}
          </span>

          <div className="h-4 w-[1px] bg-stone-300 mx-1" />

          {/* Color picker pills */}
          <div className="flex items-center gap-1.5">
            {[
              { id: '#1e1e1e', title: 'Black' },
              { id: '#1971c2', title: 'Blue' },
              { id: '#e03131', title: 'Red' },
              { id: '#2f9e44', title: 'Green' },
              { id: '#f59f00', title: 'Amber' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onColorChange(c.id);
                }}
                title={c.title}
                className={`w-5 h-5 rounded-full border-2 border-stone-800 transition-transform ${
                  currentColor === c.id ? 'scale-125 ring-2 ring-stone-900 ring-offset-1' : 'hover:scale-110'
                }`}
                style={{ backgroundColor: c.id }}
              />
            ))}
          </div>

          <div className="h-4 w-[1px] bg-stone-300 mx-1" />

          {/* Undo & Clear */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              undoLast();
            }}
            disabled={elements.length === 0}
            className="px-2 py-0.5 text-xs font-hand font-bold bg-stone-100 hover:bg-stone-200 border border-stone-800 rounded disabled:opacity-40"
          >
            Undo
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              clearAll();
            }}
            disabled={elements.length === 0}
            className="px-2 py-0.5 text-xs font-hand font-bold bg-rose-50 hover:bg-rose-100 text-rose-800 border border-stone-800 rounded disabled:opacity-40"
          >
            Clear
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToolChange('select');
            }}
            className="px-2.5 py-0.5 text-xs font-hand font-bold bg-stone-900 text-white rounded hover:bg-stone-800"
          >
            Done (Esc)
          </button>
        </div>
      )}

      {/* Text insertion popup */}
      {textInputPos && (
        <div
          className="absolute z-50 pointer-events-auto bg-white border-2 border-stone-800 p-2 rounded-xl shadow-sketch"
          style={{ left: textInputPos.x, top: textInputPos.y }}
        >
          <input
            autoFocus
            type="text"
            value={textInputValue}
            onChange={(e) => setTextInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleTextSubmit();
              if (e.key === 'Escape') setTextInputPos(null);
            }}
            placeholder="Type note & hit Enter..."
            className="px-2 py-1 text-sm font-hand text-stone-900 border border-stone-400 rounded focus:outline-none focus:ring-1 focus:ring-stone-800"
          />
          <div className="flex justify-end gap-1 mt-1 text-[11px] font-hand">
            <button
              onClick={() => setTextInputPos(null)}
              className="px-2 py-0.5 text-stone-600 hover:text-stone-900"
            >
              Cancel
            </button>
            <button
              onClick={handleTextSubmit}
              className="px-2.5 py-0.5 bg-stone-900 text-amber-300 font-bold rounded"
            >
              Place Note
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
