import React, { useEffect, useRef } from 'react';
import rough from 'roughjs';
import { ScotchTape, PushPin } from './ExcaliSvgDoodles';

// Handcrafted Rough Container Box
export const RoughBox: React.FC<{
  children: React.ReactNode;
  className?: string;
  fill?: string;
  fillStyle?: 'solid' | 'hachure' | 'zigzag' | 'cross-hatch' | 'dots';
  stroke?: string;
  strokeWidth?: number;
  roughness?: number;
  bowing?: number;
}> = ({
  children,
  className = '',
  fill = '#ffffff',
  fillStyle = 'solid',
  stroke = '#1e1e1e',
  strokeWidth = 2,
  roughness = 1.2,
  bowing = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;
    const { offsetWidth, offsetHeight } = containerRef.current;
    if (offsetWidth === 0 || offsetHeight === 0) return;

    svgRef.current.innerHTML = '';
    const rc = rough.svg(svgRef.current);
    const node = rc.rectangle(2, 2, offsetWidth - 4, offsetHeight - 4, {
      fill,
      fillStyle,
      stroke,
      strokeWidth,
      roughness,
      bowing,
      seed: 42,
    });
    svgRef.current.appendChild(node);
  }, [fill, fillStyle, stroke, strokeWidth, roughness, bowing]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-0 overflow-visible"
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

// Handcrafted 3D Tactile Button
export const RoughButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'yellow' | 'blue' | 'green' | 'white' | 'purple' | 'black';
  size?: 'sm' | 'md' | 'lg';
  asAnchor?: boolean;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({
  children,
  onClick,
  className = '',
  variant = 'yellow',
  size = 'md',
  asAnchor = false,
  href,
  download,
  target,
  rel,
  disabled = false,
  type = 'button',
}) => {
  const variants = {
    yellow: 'bg-[#fff3bf] hover:bg-[#ffe066] text-[#1e1e1e]',
    blue: 'bg-[#d0ebff] hover:bg-[#a5d8ff] text-[#1e1e1e]',
    green: 'bg-[#d3f9d8] hover:bg-[#b2f2bb] text-[#1e1e1e]',
    white: 'bg-white hover:bg-slate-50 text-[#1e1e1e]',
    purple: 'bg-[#f3d9fa] hover:bg-[#eebefa] text-[#1e1e1e]',
    black: 'bg-[#1e1e1e] hover:bg-[#2d2d2d] text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-5 py-2.5 text-sm sm:text-base rounded-xl',
    lg: 'px-7 py-3.5 text-base sm:text-lg rounded-xl',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-hand font-bold tracking-wide cursor-pointer select-none
    border-2 border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e]
    hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1e1e1e]
    active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#1e1e1e]
    transition-all duration-150
    ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}
  `;

  if (asAnchor && href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
};

// Handcrafted Sticky Note (Yellow, Blue, Green, Pink)
export const RoughStickyNote: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: 'yellow' | 'blue' | 'green' | 'pink' | 'purple' | 'orange';
  tilt?: 'left' | 'right' | 'none';
  hasTape?: boolean;
  hasPin?: boolean;
}> = ({
  children,
  className = '',
  color = 'yellow',
  tilt = 'none',
  hasTape = true,
  hasPin = false,
}) => {
  const colorStyles = {
    yellow: 'bg-[#fff9db] border-[#e9d56a]',
    blue: 'bg-[#e7f5ff] border-[#a5d8ff]',
    green: 'bg-[#ebfbee] border-[#b2f2bb]',
    pink: 'bg-[#fff0f6] border-[#fcc2d7]',
    purple: 'bg-[#f3f0ff] border-[#d0bfff]',
    orange: 'bg-[#fff4e6] border-[#ffd8a8]',
  };

  const tiltStyles = {
    left: '-rotate-1 hover:rotate-0',
    right: 'rotate-1 hover:rotate-0',
    none: 'rotate-0',
  };

  return (
    <div
      className={`
        relative p-5 rounded-2xl border-2 border-[#1e1e1e]
        shadow-[4px_4px_0px_#1e1e1e] hover:shadow-[6px_6px_0px_#1e1e1e]
        transition-all duration-200
        ${colorStyles[color]} ${tiltStyles[tilt]} ${className}
      `}
    >
      {hasTape && <ScotchTape color={color === 'blue' ? 'blue' : color === 'pink' ? 'pink' : 'yellow'} />}
      {hasPin && <PushPin className="absolute -top-3 left-4" />}
      <div className="relative z-0">{children}</div>
    </div>
  );
};

// Handcrafted Tag Badge
export const RoughBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'yellow' | 'blue' | 'green' | 'pink' | 'purple' | 'gray' | 'white';
  className?: string;
}> = ({ children, variant = 'gray', className = '' }) => {
  const styles = {
    yellow: 'bg-[#fff3bf] text-[#8c6b00] border-[#fab005]',
    blue: 'bg-[#d0ebff] text-[#1864ab] border-[#228be6]',
    green: 'bg-[#d3f9d8] text-[#2b8a3e] border-[#40c057]',
    pink: 'bg-[#ffe3e3] text-[#c92a2a] border-[#fa5252]',
    purple: 'bg-[#f3d9fa] text-[#862e9c] border-[#be4bdb]',
    gray: 'bg-[#f1f3f5] text-[#495057] border-[#ced4da]',
    white: 'bg-white text-[#1e1e1e] border-[#1e1e1e]',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-hand font-bold
        border-2 border-[#1e1e1e] rounded-lg shadow-[2px_2px_0px_#1e1e1e]
        ${styles[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
};
