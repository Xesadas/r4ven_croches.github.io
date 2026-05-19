// Amigurumi creature illustrations - composed of ONLY simple shapes (circle, oval, triangle, rect).
// Plus decorative ornaments.

function Creature({ type, color = '#2a0a1a', accent = '#f7a8c4', eye = '#fdeaf1', size = 180 }) {
  const cx = size / 2;
  const cy = size / 2;
  const common = { width: size, height: size, viewBox: `0 0 ${size} ${size}` };

  switch (type) {
    case 'bunny':
      return (
        <svg {...common}>
          {/* ears */}
          <ellipse cx={cx - 22} cy={cy - 52} rx="12" ry="34" fill={color} transform={`rotate(-8 ${cx - 22} ${cy - 52})`} />
          <ellipse cx={cx + 22} cy={cy - 52} rx="12" ry="34" fill={color} transform={`rotate(8 ${cx + 22} ${cy - 52})`} />
          <ellipse cx={cx - 22} cy={cy - 52} rx="6" ry="22" fill={accent} transform={`rotate(-8 ${cx - 22} ${cy - 52})`} />
          <ellipse cx={cx + 22} cy={cy - 52} rx="6" ry="22" fill={accent} transform={`rotate(8 ${cx + 22} ${cy - 52})`} />
          {/* head */}
          <circle cx={cx} cy={cy + 4} r="58" fill={color} />
          {/* cheeks */}
          <circle cx={cx - 32} cy={cy + 16} r="10" fill={accent} opacity="0.55" />
          <circle cx={cx + 32} cy={cy + 16} r="10" fill={accent} opacity="0.55" />
          {/* eyes */}
          <circle cx={cx - 18} cy={cy - 8} r="6" fill={eye} />
          <circle cx={cx + 18} cy={cy - 8} r="6" fill={eye} />
          <circle cx={cx - 18} cy={cy - 8} r="3" fill="#0a0a0f" />
          <circle cx={cx + 18} cy={cy - 8} r="3" fill="#0a0a0f" />
          {/* fangs */}
          <polygon points={`${cx - 4},${cy + 14} ${cx - 1},${cy + 22} ${cx - 1},${cy + 14}`} fill={eye} />
          <polygon points={`${cx + 4},${cy + 14} ${cx + 1},${cy + 22} ${cx + 1},${cy + 14}`} fill={eye} />
          {/* nose */}
          <ellipse cx={cx} cy={cy + 10} rx="4" ry="3" fill={accent} />
        </svg>
      );
    case 'cat':
      return (
        <svg {...common}>
          {/* ears */}
          <polygon points={`${cx - 50},${cy - 30} ${cx - 28},${cy - 70} ${cx - 14},${cy - 28}`} fill={color} />
          <polygon points={`${cx + 50},${cy - 30} ${cx + 28},${cy - 70} ${cx + 14},${cy - 28}`} fill={color} />
          <polygon points={`${cx - 38},${cy - 36} ${cx - 30},${cy - 58} ${cx - 22},${cy - 36}`} fill={accent} opacity="0.45" />
          <polygon points={`${cx + 38},${cy - 36} ${cx + 30},${cy - 58} ${cx + 22},${cy - 36}`} fill={accent} opacity="0.45" />
          {/* head */}
          <circle cx={cx} cy={cy + 6} r="58" fill={color} />
          {/* eyes - big anime */}
          <ellipse cx={cx - 20} cy={cy - 4} rx="10" ry="14" fill={eye} />
          <ellipse cx={cx + 20} cy={cy - 4} rx="10" ry="14" fill={eye} />
          <ellipse cx={cx - 20} cy={cy - 2} rx="5" ry="9" fill="#1a8b6f" />
          <ellipse cx={cx + 20} cy={cy - 2} rx="5" ry="9" fill="#1a8b6f" />
          <circle cx={cx - 20} cy={cy - 2} r="2" fill="#0a0a0f" />
          <circle cx={cx + 20} cy={cy - 2} r="2" fill="#0a0a0f" />
          {/* shine */}
          <circle cx={cx - 17} cy={cy - 7} r="2" fill="#fff" />
          <circle cx={cx + 23} cy={cy - 7} r="2" fill="#fff" />
          {/* nose */}
          <polygon points={`${cx - 4},${cy + 14} ${cx + 4},${cy + 14} ${cx},${cy + 20}`} fill={accent} />
        </svg>
      );
    case 'bird': // corvo
      return (
        <svg {...common}>
          {/* body egg shape */}
          <ellipse cx={cx} cy={cy + 12} rx="46" ry="58" fill={color} />
          {/* head */}
          <circle cx={cx} cy={cy - 30} r="36" fill={color} />
          {/* beak */}
          <polygon points={`${cx - 5},${cy - 24} ${cx + 5},${cy - 24} ${cx},${cy - 8}`} fill={accent} />
          {/* eyes */}
          <circle cx={cx - 12} cy={cy - 36} r="6" fill={eye} />
          <circle cx={cx + 12} cy={cy - 36} r="6" fill={eye} />
          <circle cx={cx - 12} cy={cy - 36} r="3" fill="#0a0a0f" />
          <circle cx={cx + 12} cy={cy - 36} r="3" fill="#0a0a0f" />
          {/* wing hints (ellipses) */}
          <ellipse cx={cx - 30} cy={cy + 20} rx="14" ry="30" fill={color} stroke={eye} strokeWidth="1" strokeDasharray="2 3" opacity="0.95" />
          <ellipse cx={cx + 30} cy={cy + 20} rx="14" ry="30" fill={color} stroke={eye} strokeWidth="1" strokeDasharray="2 3" opacity="0.95" />
          {/* tiny crown circles */}
          <circle cx={cx - 18} cy={cy - 60} r="3" fill={accent} />
          <circle cx={cx} cy={cy - 64} r="3.5" fill={accent} />
          <circle cx={cx + 18} cy={cy - 60} r="3" fill={accent} />
        </svg>
      );
    case 'ghost':
      return (
        <svg {...common}>
          {/* body - top circle + bottom scallop using overlapping circles */}
          <circle cx={cx} cy={cy - 10} r="50" fill={color} />
          <rect x={cx - 50} y={cy - 10} width="100" height="60" fill={color} />
          <circle cx={cx - 35} cy={cy + 50} r="15" fill={color} />
          <circle cx={cx - 12} cy={cy + 50} r="15" fill={color} />
          <circle cx={cx + 12} cy={cy + 50} r="15" fill={color} />
          <circle cx={cx + 35} cy={cy + 50} r="15" fill={color} />
          {/* arms */}
          <circle cx={cx - 50} cy={cy + 10} r="14" fill={color} />
          <circle cx={cx + 50} cy={cy + 10} r="14" fill={color} />
          {/* eyes - cute and dramatic */}
          <ellipse cx={cx - 16} cy={cy - 14} rx="6" ry="8" fill="#1a0a14" />
          <ellipse cx={cx + 16} cy={cy - 14} rx="6" ry="8" fill="#1a0a14" />
          {/* blush */}
          <circle cx={cx - 28} cy={cy + 4} r="7" fill={accent} opacity="0.7" />
          <circle cx={cx + 28} cy={cy + 4} r="7" fill={accent} opacity="0.7" />
          {/* mouth - oval */}
          <ellipse cx={cx} cy={cy + 6} rx="5" ry="7" fill="#1a0a14" />
        </svg>
      );
    case 'octopus':
      return (
        <svg {...common}>
          {/* head */}
          <circle cx={cx} cy={cy - 14} r="52" fill={color} />
          {/* tentacle bumps - row of circles */}
          {[-44, -28, -12, 4, 20, 36, 52].map((d, i) => (
            <circle key={i} cx={cx + d - 8} cy={cy + 40 + (i % 2) * 6} r={i === 0 || i === 6 ? 10 : 14} fill={color} />
          ))}
          {/* eyes */}
          <circle cx={cx - 16} cy={cy - 16} r="9" fill={eye} />
          <circle cx={cx + 16} cy={cy - 16} r="9" fill={eye} />
          <circle cx={cx - 14} cy={cy - 14} r="4" fill="#0a0a0f" />
          <circle cx={cx + 18} cy={cy - 14} r="4" fill="#0a0a0f" />
          {/* blush */}
          <circle cx={cx - 30} cy={cy + 2} r="7" fill={accent} opacity="0.6" />
          <circle cx={cx + 30} cy={cy + 2} r="7" fill={accent} opacity="0.6" />
          {/* mouth */}
          <ellipse cx={cx} cy={cy + 4} rx="4" ry="3" fill="#0a0a0f" />
        </svg>
      );
    case 'bear':
      return (
        <svg {...common}>
          {/* ears */}
          <circle cx={cx - 36} cy={cy - 40} r="18" fill={color} />
          <circle cx={cx + 36} cy={cy - 40} r="18" fill={color} />
          <circle cx={cx - 36} cy={cy - 40} r="9" fill={accent} opacity="0.5" />
          <circle cx={cx + 36} cy={cy - 40} r="9" fill={accent} opacity="0.5" />
          {/* head */}
          <circle cx={cx} cy={cy + 4} r="58" fill={color} />
          {/* snout area */}
          <ellipse cx={cx} cy={cy + 22} rx="24" ry="18" fill={accent} opacity="0.35" />
          {/* eyes */}
          <circle cx={cx - 20} cy={cy - 6} r="5.5" fill={eye} />
          <circle cx={cx + 20} cy={cy - 6} r="5.5" fill={eye} />
          {/* nose */}
          <ellipse cx={cx} cy={cy + 12} rx="6" ry="4" fill="#0a0a0f" />
          {/* bow on ear */}
          <polygon points={`${cx + 28},${cy - 56} ${cx + 40},${cy - 60} ${cx + 40},${cy - 50}`} fill={accent} />
          <polygon points={`${cx + 52},${cy - 56} ${cx + 40},${cy - 60} ${cx + 40},${cy - 50}`} fill={accent} />
          <circle cx={cx + 40} cy={cy - 55} r="3" fill={color} />
        </svg>
      );
    case 'bat':
      return (
        <svg {...common}>
          {/* wings - triangles */}
          <polygon points={`${cx - 76},${cy - 10} ${cx - 22},${cy - 4} ${cx - 30},${cy + 28} ${cx - 60},${cy + 10}`} fill={color} />
          <polygon points={`${cx + 76},${cy - 10} ${cx + 22},${cy - 4} ${cx + 30},${cy + 28} ${cx + 60},${cy + 10}`} fill={color} />
          {/* body */}
          <circle cx={cx} cy={cy + 4} r="40" fill={color} />
          {/* ear triangles */}
          <polygon points={`${cx - 24},${cy - 26} ${cx - 14},${cy - 50} ${cx - 8},${cy - 26}`} fill={color} />
          <polygon points={`${cx + 24},${cy - 26} ${cx + 14},${cy - 50} ${cx + 8},${cy - 26}`} fill={color} />
          {/* eyes */}
          <circle cx={cx - 12} cy={cy - 4} r="5" fill={accent} />
          <circle cx={cx + 12} cy={cy - 4} r="5" fill={accent} />
          <circle cx={cx - 12} cy={cy - 4} r="2" fill="#0a0a0f" />
          <circle cx={cx + 12} cy={cy - 4} r="2" fill="#0a0a0f" />
          {/* fangs */}
          <polygon points={`${cx - 5},${cy + 12} ${cx - 2},${cy + 22} ${cx},${cy + 12}`} fill={eye} />
          <polygon points={`${cx + 5},${cy + 12} ${cx + 2},${cy + 22} ${cx},${cy + 12}`} fill={eye} />
        </svg>
      );
    case 'skull':
      return (
        <svg {...common}>
          {/* skull head */}
          <circle cx={cx} cy={cy - 6} r="54" fill={color} />
          {/* jaw - rect */}
          <rect x={cx - 30} y={cy + 30} width="60" height="26" rx="8" fill={color} />
          {/* eye sockets */}
          <circle cx={cx - 18} cy={cy - 4} r="11" fill="#1a0a14" />
          <circle cx={cx + 18} cy={cy - 4} r="11" fill="#1a0a14" />
          {/* heart eyes */}
          <circle cx={cx - 22} cy={cy - 6} r="3.5" fill={accent} />
          <circle cx={cx - 14} cy={cy - 6} r="3.5" fill={accent} />
          <polygon points={`${cx - 26},${cy - 4} ${cx - 10},${cy - 4} ${cx - 18},${cy + 6}`} fill={accent} />
          <circle cx={cx + 14} cy={cy - 6} r="3.5" fill={accent} />
          <circle cx={cx + 22} cy={cy - 6} r="3.5" fill={accent} />
          <polygon points={`${cx + 10},${cy - 4} ${cx + 26},${cy - 4} ${cx + 18},${cy + 6}`} fill={accent} />
          {/* nose triangle */}
          <polygon points={`${cx - 5},${cy + 16} ${cx + 5},${cy + 16} ${cx},${cy + 24}`} fill="#1a0a14" />
          {/* teeth lines */}
          <rect x={cx - 22} y={cy + 36} width="3" height="14" fill="#1a0a14" />
          <rect x={cx - 10} y={cy + 36} width="3" height="14" fill="#1a0a14" />
          <rect x={cx + 2} y={cy + 36} width="3" height="14" fill="#1a0a14" />
          <rect x={cx + 14} y={cy + 36} width="3" height="14" fill="#1a0a14" />
          {/* bow */}
          <polygon points={`${cx - 8},${cy - 52} ${cx},${cy - 58} ${cx},${cy - 46}`} fill={accent} />
          <polygon points={`${cx + 8},${cy - 52} ${cx},${cy - 58} ${cx},${cy - 46}`} fill={accent} />
          <circle cx={cx} cy={cy - 52} r="3" fill={color} />
        </svg>
      );
    default:
      return <svg {...common}><circle cx={cx} cy={cy} r="50" fill={color} /></svg>;
  }
}

// Ornamental decorations
function Star({ size = 16, color, filled = true }) {
  // Simple 4-point star (diamond + diamond) made from 2 overlapping diamonds
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8" fill={filled ? color : 'none'} stroke={color} strokeWidth="1" />
    </svg>
  );
}

function Cross({ size = 16, color }) {
  // Simple cross from 2 rectangles
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <rect x="9" y="1" width="2" height="18" fill={color} />
      <rect x="3" y="6" width="14" height="2" fill={color} />
    </svg>
  );
}

function Moon({ size = 18, color }) {
  // Crescent from two overlapping circles
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <defs>
        <mask id={`moon-mask-${size}-${color.replace('#','')}`}>
          <rect width="20" height="20" fill="white" />
          <circle cx="14" cy="9" r="7" fill="black" />
        </mask>
      </defs>
      <circle cx="10" cy="10" r="8" fill={color} mask={`url(#moon-mask-${size}-${color.replace('#','')})`} />
    </svg>
  );
}

function Heart({ size = 16, color }) {
  // Two circles + diamond
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <circle cx="6" cy="7" r="4" fill={color} />
      <circle cx="14" cy="7" r="4" fill={color} />
      <polygon points="2,8 18,8 10,19" fill={color} />
    </svg>
  );
}

function Sparkle({ size = 12, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <polygon points="6,0 7,5 12,6 7,7 6,12 5,7 0,6 5,5" fill={color} />
    </svg>
  );
}

// Stitch/lace divider
function LaceDivider({ color, count = 24 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', padding: '14px 0', userSelect: 'none' }}>
      <span style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${color}40, ${color}80, ${color}40, transparent)` }}></span>
      <Star size={14} color={color} />
      <span style={{ letterSpacing: '0.5em', fontSize: 11, color, opacity: 0.6, fontFamily: 'DM Sans, sans-serif' }}>※</span>
      <Star size={14} color={color} />
      <span style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${color}40, ${color}80, ${color}40, transparent)` }}></span>
    </div>
  );
}

// Tag with string for products
function PriceTag({ price, color, bg, prefix, suffix }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {prefix && <div style={{
        fontSize: 9,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: color,
        opacity: 0.7,
        fontFamily: 'DM Sans, sans-serif',
        marginBottom: 2,
        textAlign: 'center',
      }}>{prefix}</div>}
      <div style={{
        background: bg,
        border: `1.5px solid ${color}`,
        color: color,
        fontFamily: '"Caveat", cursive',
        fontSize: 22,
        padding: '4px 16px 4px 22px',
        clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%)',
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}>{typeof price === 'number' ? `R$ ${price}${suffix || ''}` : price}</div>
      <div style={{ position: 'absolute', left: 4, top: prefix ? 'calc(50% + 6px)' : '50%', width: 4, height: 4, borderRadius: '50%', background: color, transform: 'translateY(-50%)' }}></div>
    </div>
  );
}

Object.assign(window, { Creature, Star, Cross, Moon, Heart, Sparkle, LaceDivider, PriceTag });
