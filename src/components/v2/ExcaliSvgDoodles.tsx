import React from 'react';

// Scotch tape strip with realistic jagged edges
export const ScotchTape: React.FC<{
  className?: string;
  color?: 'yellow' | 'blue' | 'pink' | 'white';
  angle?: number;
}> = ({ className = '', color = 'yellow', angle = -2 }) => {
  const bgColors = {
    yellow: 'bg-amber-100/80 border-amber-300/40',
    blue: 'bg-sky-100/80 border-sky-300/40',
    pink: 'bg-rose-100/80 border-rose-300/40',
    white: 'bg-white/80 border-slate-300/40',
  };

  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 pointer-events-none z-10 backdrop-blur-[1px] border-l-2 border-r-2 border-dashed shadow-sm ${bgColors[color]} ${className}`}
    >
      <div className="w-full h-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent" />
    </div>
  );
};

// Hand-drawn Push Pin
export const PushPin: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#ef4444',
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 drop-shadow-md pointer-events-none select-none z-10 ${className}`}
  >
    <path
      d="M16 18V28"
      stroke="#1e1e1e"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M11 7C11 5.34315 12.3431 4 14 4H18C19.6569 4 21 5.34315 21 7V10L23 13V15H9V13L11 10V7Z"
      fill={color}
      stroke="#1e1e1e"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="7" r="1.5" fill="#ffffff" />
  </svg>
);

// Hand-drawn Arrow pointing in different directions
export const SketchArrow: React.FC<{
  className?: string;
  direction?: 'right' | 'down' | 'left' | 'curved';
  color?: string;
  label?: string;
}> = ({ className = '', direction = 'right', color = '#1e1e1e', label }) => {
  if (direction === 'curved') {
    return (
      <div className={`relative inline-flex items-center gap-1 font-hand ${className}`}>
        <svg
          viewBox="0 0 100 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-9 overflow-visible"
        >
          <path
            d="M5 35 C 30 45, 65 30, 90 12"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M80 8 L 92 11 L 86 24"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        {label && (
          <span
            style={{ color }}
            className="text-xs sm:text-sm font-hand font-bold tracking-wide -mt-2 rotate-2 whitespace-nowrap"
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  if (direction === 'down') {
    return (
      <div className={`inline-flex flex-col items-center gap-1 font-hand ${className}`}>
        {label && (
          <span style={{ color }} className="text-xs font-hand font-bold">
            {label}
          </span>
        )}
        <svg
          viewBox="0 0 30 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-12 overflow-visible"
        >
          <path
            d="M15 4 C 13 22, 17 38, 15 54"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M7 46 L 15 56 L 23 47"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1 font-hand ${className}`}>
      {label && (
        <span style={{ color }} className="text-xs font-hand font-bold">
          {label}
        </span>
      )}
      <svg
        viewBox="0 0 70 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-5 overflow-visible"
      >
        <path
          d="M4 12 C 22 10, 42 14, 62 12"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M52 5 L 64 12 L 53 19"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

// Handcrafted Scribble Highlight Underline
export const ScribbleUnderline: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = '#fab005' }) => (
  <svg
    viewBox="0 0 200 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-3 overflow-visible ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M2 9 C 45 4, 95 14, 145 7 C 165 4, 185 10, 198 8"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M8 12 C 55 8, 115 15, 175 10"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.7"
      fill="none"
    />
  </svg>
);

// Handcrafted Scribble Circle / Ellipse around keywords
export const ScribbleCircle: React.FC<{
  children: React.ReactNode;
  color?: string;
  className?: string;
}> = ({ children, color = '#228be6', className = '' }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10">{children}</span>
    <svg
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -inset-x-2 -inset-y-1.5 w-[calc(100%+16px)] h-[calc(100%+12px)] pointer-events-none overflow-visible"
      preserveAspectRatio="none"
    >
      <path
        d="M10 25 C 10 10, 30 4, 60 5 C 95 6, 115 14, 112 28 C 109 42, 85 46, 50 45 C 20 44, 4 36, 8 20 C 10 14, 25 8, 45 6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </span>
);

// Hand-drawn Doodle Star
export const DoodleStar: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#fab005', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2 L 14.5 9 L 22 9.5 L 16.5 14.5 L 18.5 22 L 12 17.5 L 5.5 22 L 7.5 14.5 L 2 9.5 L 9.5 9 Z"
      fill={color}
      stroke="#1e1e1e"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

// Handcrafted Stamp Badge (like libraries.excalidraw.com UI kits)
export const SketchStamp: React.FC<{
  text: string;
  variant?: 'yellow' | 'blue' | 'green' | 'pink' | 'purple';
  className?: string;
  rotate?: number;
}> = ({ text, variant = 'yellow', className = '', rotate = -2 }) => {
  const styles = {
    yellow: 'bg-[#fff3bf] text-[#8c6b00] border-[#fab005]',
    blue: 'bg-[#d0ebff] text-[#1864ab] border-[#228be6]',
    green: 'bg-[#d3f9d8] text-[#2b8a3e] border-[#40c057]',
    pink: 'bg-[#ffe3e3] text-[#c92a2a] border-[#fa5252]',
    purple: 'bg-[#f3d9fa] text-[#862e9c] border-[#be4bdb]',
  };

  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-hand font-bold uppercase tracking-wider rounded-md border-2 border-dashed shadow-[2px_2px_0px_#1e1e1e] ${styles[variant]} ${className}`}
    >
      <DoodleStar size={12} color="currentColor" />
      <span>{text}</span>
    </span>
  );
};
