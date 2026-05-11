import React from 'react';

export const RangerHelmet = ({ size = 120 }) => (
  <svg viewBox="0 0 100 120" width={size} height={size * 1.2} style={{ filter: 'drop-shadow(0px 8px 16px rgba(255, 27, 107, 0.4))' }}>
    <defs>
      <linearGradient id="helmGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="40%" stopColor="#FF3D87" />
        <stop offset="100%" stopColor="#99003D" />
      </linearGradient>
      <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="50%" stopColor="#0a0a0a" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFE566" />
        <stop offset="100%" stopColor="#B38A00" />
      </linearGradient>
    </defs>
    <path d="M 50 8 C 78 8 92 28 92 58 L 92 88 L 82 100 L 18 100 L 8 88 L 8 58 C 8 28 22 8 50 8 Z" fill="url(#helmGrad)" stroke="#FFB3D1" strokeWidth="1"/>
    <path d="M 18 52 L 82 52 L 76 68 L 24 68 Z" fill="url(#visorGrad)" stroke="#444" strokeWidth="1"/>
    <path d="M 24 56 L 76 56 L 72 64 L 28 64 Z" fill="url(#goldGrad)" opacity="0.95"/>
    <rect x="28" y="76" width="44" height="18" rx="2" fill="#111" stroke="#333" strokeWidth="1"/>
    <line x1="36" y1="80" x2="36" y2="90" stroke="#FF1B6B" strokeWidth="2" strokeLinecap="round"/>
    <line x1="44" y1="80" x2="44" y2="90" stroke="#FF1B6B" strokeWidth="2" strokeLinecap="round"/>
    <line x1="52" y1="80" x2="52" y2="90" stroke="#FF1B6B" strokeWidth="2" strokeLinecap="round"/>
    <line x1="60" y1="80" x2="60" y2="90" stroke="#FF1B6B" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="50" cy="22" r="8" fill="url(#goldGrad)" stroke="#FFF" strokeWidth="0.5"/>
    <text x="50" y="27" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0a0a0a">P</text>
    <path d="M 20 54 L 80 54 L 78 58 L 22 58 Z" fill="#FFF" opacity="0.1"/>
  </svg>
);

export const DukeIcon = ({ color = '#FFC700' }) => (
  <svg viewBox="0 0 80 80" width="60" height="60" style={{ filter: `drop-shadow(0px 4px 10px ${color}66)` }}>
    <defs>
      <radialGradient id="dukeGrad">
        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
        <stop offset="100%" stopColor={color} stopOpacity="0.1" />
      </radialGradient>
      <linearGradient id="dukeBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFE066" />
        <stop offset="100%" stopColor="#CC9E00" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="42" r="26" fill="url(#dukeGrad)" stroke={color} strokeWidth="2"/>
    <ellipse cx="40" cy="42" rx="16" ry="14" fill="url(#dukeBody)"/>
    <ellipse cx="24" cy="36" rx="6" ry="12" fill="url(#dukeBody)" transform="rotate(-20 24 36)"/>
    <ellipse cx="56" cy="36" rx="6" ry="12" fill="url(#dukeBody)" transform="rotate(20 56 36)"/>
    <circle cx="34" cy="40" r="2" fill="#0a0a0a"/>
    <circle cx="46" cy="40" r="2" fill="#0a0a0a"/>
    <ellipse cx="40" cy="46" rx="2.5" ry="1.5" fill="#0a0a0a"/>
    <path d="M 36 50 Q 40 55 44 50" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M 38 50 Q 40 54 42 50" fill="#FF6B9D" stroke="#0a0a0a" strokeWidth="0.5"/>
  </svg>
);

export const OpalIcon = ({ color = '#FF1B6B' }) => (
  <svg viewBox="0 0 80 80" width="60" height="60" style={{ filter: `drop-shadow(0px 4px 10px ${color}66)` }}>
    <defs>
      <radialGradient id="opalGrad">
        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
        <stop offset="100%" stopColor={color} stopOpacity="0.1" />
      </radialGradient>
      <linearGradient id="opalBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF6B9D" />
        <stop offset="100%" stopColor="#CC0044" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="42" r="26" fill="url(#opalGrad)" stroke={color} strokeWidth="2"/>
    <path d="M 26 36 L 26 52 Q 26 58 32 58 L 48 58 Q 54 58 54 52 L 54 36 Q 54 30 48 30 L 32 30 Q 26 30 26 36 Z" fill="url(#opalBody)"/>
    <path d="M 28 32 L 24 22 L 32 30 Z" fill="url(#opalBody)"/>
    <path d="M 52 32 L 56 22 L 48 30 Z" fill="url(#opalBody)"/>
    <path d="M 32 42 L 36 42 L 34 45 Z" fill="#0a0a0a"/>
    <path d="M 44 42 L 48 42 L 46 45 Z" fill="#0a0a0a"/>
    <rect x="38" y="48" width="4" height="3" fill="#0a0a0a" rx="1"/>
    <line x1="34" y1="54" x2="46" y2="54" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const RangerDogIcon = ({ color = '#00E5C7' }) => (
  <svg viewBox="0 0 80 80" width="60" height="60" style={{ filter: `drop-shadow(0px 4px 10px ${color}66)` }}>
    <defs>
      <radialGradient id="rangerGrad">
        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
        <stop offset="100%" stopColor={color} stopOpacity="0.1" />
      </radialGradient>
      <linearGradient id="rangerBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#66FFF0" />
        <stop offset="100%" stopColor="#00B39C" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="42" r="26" fill="url(#rangerGrad)" stroke={color} strokeWidth="2"/>
    <ellipse cx="40" cy="40" rx="12" ry="11" fill="url(#rangerBody)"/>
    <path d="M 32 33 L 28 22 L 36 31 Z" fill="url(#rangerBody)"/>
    <path d="M 48 33 L 52 22 L 44 31 Z" fill="url(#rangerBody)"/>
    <circle cx="35" cy="40" r="2" fill="#0a0a0a"/>
    <circle cx="45" cy="40" r="2" fill="#0a0a0a"/>
    <path d="M 38 44 Q 40 47 42 44" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="40" cy="43" r="1.5" fill="#0a0a0a"/>
    <path d="M 32 52 Q 40 58 48 52 L 48 60 L 32 60 Z" fill="url(#rangerBody)" opacity="0.9"/>
    <path d="M 35 24 L 37 20 L 40 23 L 43 20 L 45 24 Z" fill="#FFC700" stroke="#CC9E00" strokeWidth="0.5"/>
  </svg>
);

export const PandaIcon = ({ color = '#C77BFF' }) => (
  <svg viewBox="0 0 80 80" width="60" height="60" style={{ filter: `drop-shadow(0px 4px 10px ${color}66)` }}>
    <defs>
      <radialGradient id="pandaGrad">
        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
        <stop offset="100%" stopColor={color} stopOpacity="0.1" />
      </radialGradient>
      <linearGradient id="pandaBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#E6E6E6" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="42" r="26" fill="url(#pandaGrad)" stroke={color} strokeWidth="2"/>
    <ellipse cx="40" cy="40" rx="14" ry="13" fill="url(#pandaBody)"/>
    <path d="M 28 32 L 24 18 L 36 28 Z" fill="#222"/>
    <path d="M 52 32 L 56 18 L 44 28 Z" fill="#222"/>
    <path d="M 30 28 L 30 23 L 33 27 Z" fill="#0a0a0a" opacity="0.6"/>
    <path d="M 50 28 L 50 23 L 47 27 Z" fill="#0a0a0a" opacity="0.6"/>
    <ellipse cx="33" cy="40" rx="3.5" ry="4.5" fill="#222"/>
    <ellipse cx="47" cy="40" rx="3.5" ry="4.5" fill="#222"/>
    <circle cx="33" cy="39" r="1.5" fill="#FFF"/>
    <circle cx="47" cy="39" r="1.5" fill="#FFF"/>
    <path d="M 39 46 L 41 46 L 40 48 Z" fill="#0a0a0a"/>
    <path d="M 36 51 Q 40 53 44 51" fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="40" cy="58" rx="9" ry="3" fill="none" stroke="#0a0a0a" strokeWidth="1" strokeDasharray="2 2" opacity="0.6"/>
    <text x="52" y="62" fontSize="12" fontWeight="bold" fill="#FFC700" style={{ filter: 'drop-shadow(0 0 2px #FFC700)' }}>?</text>
  </svg>
);

export const StageIcon = ({ stage }) => {
  const props = { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (stage) {
    case '01':
      return (
        <svg {...props}>
          <rect x="8" y="3" width="16" height="26" rx="3"/>
          <line x1="14" y1="25" x2="18" y2="25"/>
          <path d="M 12 11 L 16 15 L 20 11" />
        </svg>
      );
    case '02':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="3"/>
          <path d="M 16 4 L 16 7 M 16 25 L 16 28 M 4 16 L 7 16 M 25 16 L 28 16 M 7.5 7.5 L 9.5 9.5 M 22.5 22.5 L 24.5 24.5 M 7.5 24.5 L 9.5 22.5 M 22.5 9.5 L 24.5 7.5"/>
        </svg>
      );
    case '03':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="10"/>
          <circle cx="16" cy="16" r="3"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="16" y1="26" x2="16" y2="30"/>
          <line x1="2" y1="16" x2="6" y2="16"/>
          <line x1="26" y1="16" x2="30" y2="16"/>
        </svg>
      );
    case '04':
      return (
        <svg {...props}>
          <path d="M 16 3 L 5 7 L 5 16 C 5 22 10 27 16 29 C 22 27 27 22 27 16 L 27 7 Z"/>
          <path d="M 11 16 L 14 19 L 21 12"/>
        </svg>
      );
    case '05':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="12"/>
          <path d="M 10 16 L 14 20 L 22 12"/>
        </svg>
      );
    default:
      return null;
  }
};

export const PawPrint = ({ size = 16, color = 'currentColor', opacity = 1, rotate = 0 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} style={{ transform: `rotate(${rotate}deg)`, opacity }}>
    <ellipse cx="6" cy="9" rx="2" ry="2.8" fill={color}/>
    <ellipse cx="10.5" cy="6" rx="2" ry="2.8" fill={color}/>
    <ellipse cx="15.5" cy="6" rx="2" ry="2.8" fill={color}/>
    <ellipse cx="19" cy="9" rx="2" ry="2.8" fill={color}/>
    <path d="M 12 12 Q 6 14 7 19 Q 8 22 12 22 Q 16 22 17 19 Q 18 14 13 12 Z" fill={color}/>
  </svg>
);

export const SignalWaves = () => (
  <svg viewBox="0 0 60 30" width="50" height="25">
    <circle cx="8" cy="22" r="3" fill="#FF1B6B"/>
    <path d="M 14 22 Q 14 14 22 14" stroke="#FF1B6B" strokeWidth="2" fill="none"/>
    <path d="M 14 22 Q 14 8 28 8" stroke="#FF1B6B" strokeWidth="2" fill="none" opacity="0.7"/>
    <path d="M 14 22 Q 14 2 34 2" stroke="#FF1B6B" strokeWidth="2" fill="none" opacity="0.4"/>
  </svg>
);
