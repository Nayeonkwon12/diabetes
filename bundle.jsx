// Auto-bundle — all components in a single text/babel scope.
// Source: icons.jsx, Nav.jsx, KoreansView.jsx, GuidelinesView.jsx, App.jsx


// ─────────── icons.jsx ───────────
// Diebates icon set — 2px stroke icons matching the Figma navigation glyphs.
// Use `<Icon name="dashboard" size={24} />`. Default stroke uses currentColor.

const ICON_PATHS = {
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </>
  ),
  food: (
    <>
      {/* Fork */}
      <path d="M7 3v6a2 2 0 0 0 2 2v10" />
      <path d="M11 3v6a2 2 0 0 1-2 2" />
      <path d="M5 3v6" />
      {/* Spoon */}
      <path d="M17 3a3 3 0 0 1 0 6c0 2-1 4-1 6v6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  support: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-7h4" />
      <path d="M4 13v5a2 2 0 0 0 2 2h2v-7H4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  check: <path d="m5 12 5 5L20 7" />,
  close: <path d="M6 6l12 12M6 18 18 6" />,
  arrow_right: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrow_left: <path d="M19 12H5m6 6-6-6 6-6" />,
  chevron_down: <path d="m6 9 6 6 6-6" />,
  chevron_right: <path d="m9 6 6 6-6 6" />,
  bell: (
    <>
      <path d="M18 16H6a3 3 0 0 0 0-1.7c.6-1 1-2.2 1-3.3V9a5 5 0 0 1 10 0v2c0 1.1.4 2.3 1 3.3a3 3 0 0 0 0 1.7Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  heart: <path d="M12 21s-7-4.5-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 6c-2.3 4.5-9.3 9-9.3 9Z" />,
  filter: <path d="M3 5h18M6 12h12M10 19h4" />,
  fire: (
    <>
      <path d="M12 3c0 4-4 5-4 9a4 4 0 0 0 8 0c0-3-2-4-2-7" />
      <path d="M12 21a3 3 0 0 0 3-3c0-2-3-2-3-5" />
    </>
  ),
  drop: <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" />,
  leaf: (
    <>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 16-14 16a2 2 0 0 1-2-2Z" />
      <path d="M4 20 14 10" />
    </>
  ),
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  sparkle: (
    <>
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
      <path d="m6.3 6.3 2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" />
    </>
  ),
};

function Icon({ name, size = 24, stroke = 2, className = "", style = {} }) {
  const path = ICON_PATHS[name];
  if (!path) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}



// ─────────── Nav.jsx ───────────
// Sidebar nav — recreated from Figma captures.
// Top group: 개요 · 한국인과 당뇨 · 당뇨 예방 지침
// Bottom group: 설정 · 고객센터

const NAV_ITEMS = [
  { id: "overview",   label: "개요",          icon: "dashboard" },
  { id: "koreans",    label: "한국인과 당뇨", icon: "search"    },
  { id: "guidelines", label: "당뇨 예방 지침", icon: "food"      },
];
const NAV_BOTTOM = [
  { id: "settings",   label: "설정",      icon: "settings" },
  { id: "support",    label: "고객센터",  icon: "support"  },
];

function NavRail({ active, onChange }) {
  return (
    <aside className="rail">
      <nav className="rail__nav">
        {NAV_ITEMS.map(it => (
          <NavBtn key={it.id} {...it} active={active === it.id} onClick={() => onChange(it.id)} />
        ))}
      </nav>
      <nav className="rail__nav rail__nav--bottom">
        {NAV_BOTTOM.map(it => (
          <NavBtn key={it.id} {...it} active={active === it.id} onClick={() => onChange(it.id)} />
        ))}
      </nav>
    </aside>
  );
}

function NavBtn({ label, icon, active, onClick }) {
  return (
    <button
      type="button"
      className={"navbtn" + (active ? " is-active" : "")}
      onClick={onClick}
    >
      <span className="navbtn__icon">
        <Icon name={icon} size={24} stroke={1.8}/>
      </span>
      <span className="navbtn__label">{label}</span>
    </button>
  );
}


// ─────────── KoreansView.jsx ───────────
// ============================================================
// 한국인과 당뇨 view — recreated 1:1 from the design capture.
//
// Two-column layout:
//   LEFT  : intro + OECD scatter plot (obesity × diabetes)
//   RIGHT : mortality+prevalence area chart, two info cards,
//           "왜 더 취약할까?" pair (pancreas + β-cell).
// ============================================================

// ── OECD scatter data ────────────────────────────────────────
const OECD_DATA = [
  { x: 36.0, y: 16.9, name: "멕시코",    code: "MEX", note: "worse" },
  { x: 26.4, y: 10.8, name: "칠레",      code: "CHL", note: "worse" },
  { x: 21.1, y: 14.5, name: "튀르키예",  code: "TUR", note: "worse" },
  { x: 31.0, y: 8.1,  name: "뉴질랜드",  code: "NZL" },
  { x: 25.9, y: 5.3,  name: "영국",      code: "GBR" },
  { x: 22.1, y: 6.8,  name: "독일",      code: "DEU" },
  { x: 21.6, y: 7.7,  name: "헝가리",    code: "HUN" },
  { x: 24.0, y: 9.4,  name: "폴란드",    code: "POL" },
  { x: 19.4, y: 5.5,  name: "이탈리아",  code: "ITA" },
  { x: 21.4, y: 5.3,  name: "프랑스",    code: "FRA" },
  { x: 16.7, y: 8.5,  name: "스페인",    code: "ESP" },
  { x: 18.4, y: 7.4,  name: "포르투갈",  code: "PRT" },
  { x: 17.4, y: 6.5,  name: "체코",      code: "CZE" },
  { x: 14.5, y: 9.2,  name: "에스토니아",code: "EST" },
  { x: 17.0, y: 6.0,  name: "오스트리아",code: "AUT" },
  { x: 21.0, y: 3.0,  name: "아일랜드",  code: "IRL", note: "better" },
  { x: 16.0, y: 3.6,  name: "노르웨이",  code: "NOR", note: "better" },
  { x: 15.9, y: 3.6,  name: "벨기에",    code: "BEL", note: "better" },
  { x: 14.2, y: 4.1,  name: "스웨덴",    code: "SWE" },
  { x: 13.6, y: 5.4,  name: "네덜란드",  code: "NLD" },
  { x: 16.2, y: 3.3,  name: "핀란드",    code: "FIN" },
  { x: 17.8, y: 4.5,  name: "덴마크",    code: "DNK" },
  { x: 11.3, y: 4.6,  name: "스위스",    code: "CHE" },
  { x: 4.6,  y: 4.3,  name: "일본",      code: "JPN", featured: true },
  { x: 4.3,  y: 6.8,  name: "한국",      code: "KOR", featured: true, flag: true },
];

const OECD_AVG = { obesity: 19.5, diabetes: 7.0 };

// Korea mortality / prevalence 2012-2023
const KOREA_TIMELINE = [
  { year: 2012, mort: 23.0, prev: 16.5 },
  { year: 2013, mort: 21.5, prev: 16.3 },
  { year: 2014, mort: 20.7, prev: 16.7 },
  { year: 2015, mort: 20.7, prev: 17.1 },
  { year: 2016, mort: 19.2, prev: 17.4 },
  { year: 2017, mort: 17.9, prev: 18.0 },
  { year: 2018, mort: 17.1, prev: 16.5 },
  { year: 2019, mort: 15.8, prev: 16.0 },
  { year: 2020, mort: 16.5, prev: 16.7 },
  { year: 2021, mort: 17.5, prev: 20.2, callout: true },
  { year: 2022, mort: 21.8, prev: 18.7 },
  { year: 2023, mort: 21.6, prev: 18.0 },
];

// ============================================================
// SVG Korean flag (used as a marker on the scatter)
// ============================================================
function KoreaFlag({ w = 64 }) {
  const h = w * 2 / 3;
  return (
    <svg width={w} height={h} viewBox="0 0 90 60"
         style={{ borderRadius: 3, boxShadow: "0 4px 14px rgba(0,0,0,0.5)" }}>
      <rect width="90" height="60" fill="#fff"/>
      <g transform="translate(45 30) rotate(-33.69)">
        <path d="M -18 0 A 18 18 0 0 1 18 0 A 9 9 0 0 0 0 0 A 9 9 0 0 1 -18 0 Z" fill="#cd2e3a"/>
        <path d="M 18 0 A 18 18 0 0 1 -18 0 A 9 9 0 0 0 0 0 A 9 9 0 0 1 18 0 Z" fill="#0047a0"/>
      </g>
      <g fill="#000" transform="rotate(-33.69 45 30)">
        <g transform="translate(15 12)"><rect x="-7" y="-5" width="14" height="2"/><rect x="-7" y="-1" width="14" height="2"/><rect x="-7" y="3" width="14" height="2"/></g>
        <g transform="translate(75 48)"><rect x="-7" y="-5" width="6" height="2"/><rect x="1" y="-5" width="6" height="2"/><rect x="-7" y="-1" width="6" height="2"/><rect x="1" y="-1" width="6" height="2"/><rect x="-7" y="3" width="6" height="2"/><rect x="1" y="3" width="6" height="2"/></g>
        <g transform="translate(15 48)"><rect x="-7" y="-5" width="6" height="2"/><rect x="1" y="-5" width="6" height="2"/><rect x="-7" y="-1" width="14" height="2"/><rect x="-7" y="3" width="6" height="2"/><rect x="1" y="3" width="6" height="2"/></g>
        <g transform="translate(75 12)"><rect x="-7" y="-5" width="14" height="2"/><rect x="-7" y="-1" width="6" height="2"/><rect x="1" y="-1" width="6" height="2"/><rect x="-7" y="3" width="14" height="2"/></g>
      </g>
    </svg>
  );
}

// ============================================================
// OECD Scatter chart card
// ============================================================
function OECDScatter() {
  const [hover, setHover] = React.useState(null);
  const W = 640, H = 580;
  const pad = { l: 60, r: 30, t: 28, b: 70 };
  const xMax = 32, yMax = 18;
  const sx = (v) => pad.l + (v / xMax) * (W - pad.l - pad.r);
  const sy = (v) => H - pad.b - (v / yMax) * (H - pad.t - pad.b);

  const xTicks = [0, 5, 10, 15, 20, 25, 30];
  const yTicks = [4, 6, 8, 10, 12, 14, 16];

  return (
    <div className="card-dark scatter-card">
      <div className="scatter-card__hint">*흰색 네모에 마우스를 올리면 각 나라의 이름을 확인할 수 있습니다.</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="scatter-svg">
        <defs>
          <radialGradient id="kglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CCFF17" stopOpacity="0.55"/>
            <stop offset="60%" stopColor="#CCFF17" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#CCFF17" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Korea glow */}
        <ellipse cx={sx(4.3)} cy={sy(7)} rx="170" ry="150" fill="url(#kglow)"/>

        {/* Grid */}
        {xTicks.map(t => (
          <line key={"vx" + t} x1={sx(t)} x2={sx(t)} y1={pad.t} y2={H - pad.b}
            stroke="rgba(204,255,23,0.07)" strokeDasharray="2 5"/>
        ))}
        {yTicks.map(t => (
          <line key={"hy" + t} x1={pad.l} x2={W - pad.r} y1={sy(t)} y2={sy(t)}
            stroke="rgba(204,255,23,0.07)" strokeDasharray="2 5"/>
        ))}

        {/* Axis */}
        <line x1={pad.l} y1={H - pad.b} x2={W - pad.r} y2={H - pad.b} stroke="rgba(255,255,255,0.5)"/>
        <line x1={pad.l} y1={pad.t} x2={pad.l} y2={H - pad.b} stroke="rgba(255,255,255,0.5)"/>

        {/* OECD avg lines */}
        <line x1={sx(OECD_AVG.obesity)} y1={pad.t} x2={sx(OECD_AVG.obesity)} y2={H - pad.b}
          stroke="rgba(255,255,255,0.85)" strokeWidth="1"/>
        <line x1={pad.l} y1={sy(OECD_AVG.diabetes)} x2={W - pad.r} y2={sy(OECD_AVG.diabetes)}
          stroke="rgba(255,255,255,0.85)" strokeWidth="1"/>

        {/* Country squares */}
        {OECD_DATA.map(d => {
          const isHover = hover && hover.code === d.code;
          const isFeat = d.featured;
          const fill = isFeat ? "#CCFF17"
                     : "rgba(220,220,220,0.85)";
          return (
            <g key={d.code}
               onMouseEnter={() => setHover(d)}
               onMouseLeave={() => setHover(null)}
               style={{ cursor: "pointer" }}>
              {isFeat && (
                <rect x={sx(d.x) - 11} y={sy(d.y) - 11} width="22" height="22" rx="2"
                  fill="#CCFF17" opacity="0.15"/>
              )}
              <rect
                x={sx(d.x) - (isHover ? 8 : 6)} y={sy(d.y) - (isHover ? 8 : 6)}
                width={isHover ? 16 : 12} height={isHover ? 16 : 12} rx="1.5"
                fill={fill}
                stroke={isHover ? "#CCFF17" : "transparent"} strokeWidth="2"
                style={{ transition: "all 160ms cubic-bezier(0.22,1,0.36,1)" }}
              />
            </g>
          );
        })}

        {/* Korea flag pin */}
        <foreignObject x={sx(4.3) - 32} y={sy(7) - 60} width="64" height="44">
          <KoreaFlag w={64} />
        </foreignObject>

        {/* Featured labels */}
        <rect x={sx(4.3) + 10} y={sy(7) - 6} width="12" height="12" fill="#CCFF17"/>
        <text x={sx(4.3) + 26} y={sy(7) + 4} fill="#CCFF17" fontSize="14" fontFamily="Pretendard" fontWeight="500">한국</text>
        <rect x={sx(4.6) + 10} y={sy(6.2) - 6} width="12" height="12" fill="#CCFF17"/>
        <text x={sx(4.6) + 26} y={sy(6.2) + 4} fill="#CCFF17" fontSize="14" fontFamily="Pretendard" fontWeight="500">일본</text>

        {/* Fixed OECD-avg callout — obesity (top) */}
        <FixedCallout x={sx(OECD_AVG.obesity) - 96} y={pad.t + 10}
          label="OECD 평균" sub="비만율" value="19.5%"/>

        {/* Fixed OECD-avg callout — diabetes (right) */}
        <FixedCallout x={W - pad.r - 165} y={sy(OECD_AVG.diabetes) - 56}
          label="OECD 평균" sub="당뇨병 유병률" value="7%"/>

        {/* Axis ticks */}
        {xTicks.map(t => (
          <text key={"xt" + t} x={sx(t)} y={H - pad.b + 24} textAnchor="middle"
            fill="rgba(255,255,255,0.65)" fontSize="13" fontFamily="Pretendard"
            style={{ fontFeatureSettings: "'tnum'" }}>{t}</text>
        ))}
        {yTicks.map(t => (
          <text key={"yt" + t} x={pad.l - 14} y={sy(t) + 4} textAnchor="end"
            fill="rgba(255,255,255,0.65)" fontSize="13" fontFamily="Pretendard"
            style={{ fontFeatureSettings: "'tnum'" }}>{t}</text>
        ))}

        {/* Axis titles */}
        <text x={W / 2} y={H - 14} textAnchor="middle"
          fill="rgba(255,255,255,0.7)" fontSize="13" fontFamily="Pretendard">비만율 (%)</text>
        <text transform={`translate(20 ${H / 2}) rotate(-90)`} textAnchor="middle"
          fill="rgba(255,255,255,0.7)" fontSize="13" fontFamily="Pretendard">당뇨병 유병률 (%)</text>

        {/* Country hover tooltip */}
        {hover && !hover.featured && (
          <CountryHover d={hover} x={sx(hover.x)} y={sy(hover.y)} chartW={W} />
        )}
      </svg>
    </div>
  );
}

function FixedCallout({ x, y, label, sub, value }) {
  return (
    <g transform={`translate(${x} ${y})`} style={{ pointerEvents: "none" }}>
      <rect width="155" height="48" rx="6" fill="rgba(34,34,34,0.96)" stroke="rgba(255,255,255,0.06)"/>
      <text x="14" y="20" fill="rgba(255,255,255,0.7)" fontSize="12" fontFamily="Pretendard" fontWeight="500">{label}</text>
      <text x="14" y="38" fill="white" fontSize="13" fontFamily="Pretendard" fontWeight="600" letterSpacing="-0.02em">
        {sub} <tspan fill="#CCFF17" fontWeight="700"> {value}</tspan>
      </text>
    </g>
  );
}

function CountryHover({ d, x, y, chartW }) {
  const w = 170;
  const flip = x + w + 14 > chartW;
  const tx = flip ? x - w - 12 : x + 12;
  const ty = Math.max(20, y - 60);
  return (
    <g transform={`translate(${tx} ${ty})`} style={{ pointerEvents: "none" }}>
      <rect width={w} height="62" rx="8" fill="rgba(34,34,34,0.98)" stroke="#CCFF17"/>
      <text x="14" y="22" fill="#CCFF17" fontSize="10" fontWeight="700"
        fontFamily="Pretendard" letterSpacing="0.1em">{d.code}</text>
      <text x="14" y="40" fill="white" fontSize="15" fontWeight="700" fontFamily="Pretendard" letterSpacing="-0.02em">{d.name}</text>
      <text x="14" y="55" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="Pretendard"
        style={{ fontFeatureSettings: "'tnum'" }}>비만 {d.x}% · 당뇨 {d.y}%</text>
    </g>
  );
}

// ============================================================
// Mortality area chart (top-right)
// ============================================================
function MortalityChart() {
  const [hover, setHover] = React.useState(null);
  const W = 540, H = 260;
  const pad = { l: 32, r: 60, t: 40, b: 40 };
  const years = KOREA_TIMELINE.map(d => d.year);
  const xMin = Math.min(...years), xMax = Math.max(...years);
  const yMin = 14, yMax = 24;
  const sx = (v) => pad.l + ((v - xMin) / (xMax - xMin)) * (W - pad.l - pad.r);
  const sy = (v) => H - pad.b - ((v - yMin) / (yMax - yMin)) * (H - pad.t - pad.b);

  const pathFor = (key) => KOREA_TIMELINE.map((d, i) =>
    (i === 0 ? "M" : "L") + sx(d.year) + " " + sy(d[key])
  ).join(" ");

  const areaPath = pathFor("mort") + ` L ${sx(xMax)} ${H - pad.b} L ${sx(xMin)} ${H - pad.b} Z`;

  const yTicks = [14, 16, 18, 20, 22];

  return (
    <div className="card-dark mort-card">
      <svg viewBox={`0 0 ${W} ${H}`} className="mort-svg">
        <defs>
          <linearGradient id="mort-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CCFF17" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="#CCFF17" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Grid */}
        {yTicks.map(t => (
          <line key={"gy" + t} x1={pad.l} x2={W - pad.r} y1={sy(t)} y2={sy(t)}
            stroke="rgba(255,255,255,0.06)"/>
        ))}

        {/* break mark on Y axis */}
        <text x={pad.l - 6} y={H - pad.b + 4} textAnchor="end"
          fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="Pretendard">≈</text>

        {/* Area */}
        <path d={areaPath} fill="url(#mort-grad)"/>
        <path d={pathFor("prev")} stroke="rgba(204,255,23,0.55)" strokeWidth="1.8" fill="none"/>
        <path d={pathFor("mort")} stroke="#CCFF17" strokeWidth="2.2" fill="none"
          strokeLinecap="round" strokeLinejoin="round"/>

        {/* Data points + hover */}
        {KOREA_TIMELINE.map(d => {
          const isHover = hover && hover.year === d.year;
          return (
            <g key={d.year}
               onMouseEnter={() => setHover(d)}
               onMouseLeave={() => setHover(null)}
               style={{ cursor: "pointer" }}>
              <rect x={sx(d.year) - 18} y={pad.t} width="36" height={H - pad.t - pad.b}
                fill="transparent"/>
              <circle cx={sx(d.year)} cy={sy(d.mort)} r={isHover ? 5 : 3}
                fill="#CCFF17" stroke="#0A0A0A" strokeWidth="1.5"
                style={{ transition: "r 140ms" }}/>
              <circle cx={sx(d.year)} cy={sy(d.prev)} r="2.5" fill="rgba(204,255,23,0.5)"/>
            </g>
          );
        })}

        {/* 20.2% callout on 2021 prev */}
        <g>
          <circle cx={sx(2021)} cy={sy(20.2)} r="4" fill="#CCFF17" stroke="#0A0A0A" strokeWidth="1.5"/>
          <line x1={sx(2021)} y1={sy(20.2) - 6} x2={sx(2021)} y2={sy(20.2) - 16}
            stroke="rgba(204,255,23,0.5)" strokeWidth="1"/>
          <text x={sx(2021)} y={sy(20.2) - 22} textAnchor="middle"
            fill="#CCFF17" fontSize="13" fontWeight="700" fontFamily="Pretendard"
            style={{ fontFeatureSettings: "'tnum'" }}>20.2%</text>
        </g>

        {/* Year ticks */}
        {KOREA_TIMELINE.map(d => (
          <text key={"yr" + d.year} x={sx(d.year)} y={H - pad.b + 18}
            textAnchor="middle" fill="rgba(255,255,255,0.55)"
            fontSize="11" fontFamily="Pretendard"
            style={{ fontFeatureSettings: "'tnum'" }}>{d.year}</text>
        ))}

        {/* Y ticks */}
        {yTicks.map(t => (
          <text key={"my" + t} x={pad.l - 6} y={sy(t) + 4} textAnchor="end"
            fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="Pretendard"
            style={{ fontFeatureSettings: "'tnum'" }}>{t}</text>
        ))}

        {/* Right-side labels */}
        <text x={W - pad.r + 8} y={sy(22) + 4} fill="rgba(204,255,23,0.95)"
          fontSize="11" fontFamily="Pretendard" fontWeight="500">사망률</text>
        <text x={W - pad.r + 8} y={sy(22) + 18} fill="rgba(204,255,23,0.95)"
          fontSize="10" fontFamily="Pretendard">(%)</text>
        <text x={W - pad.r + 8} y={sy(17) + 4} fill="rgba(255,255,255,0.6)"
          fontSize="11" fontFamily="Pretendard" fontWeight="500">유병률</text>
        <text x={W - pad.r + 8} y={sy(17) + 18} fill="rgba(255,255,255,0.6)"
          fontSize="10" fontFamily="Pretendard">(%)</text>

        {/* Hover tooltip */}
        {hover && (
          <MortHoverTooltip d={hover} x={sx(hover.year)} y={sy(hover.mort)} chartW={W}/>
        )}
      </svg>
    </div>
  );
}

function MortHoverTooltip({ d, x, y, chartW }) {
  const w = 140;
  const flip = x + w + 14 > chartW;
  const tx = flip ? x - w - 12 : x + 12;
  const ty = Math.max(8, y - 56);
  return (
    <g transform={`translate(${tx} ${ty})`} style={{ pointerEvents: "none" }}>
      <rect width={w} height="56" rx="6" fill="rgba(34,34,34,0.98)" stroke="#CCFF17"/>
      <text x="12" y="18" fill="#CCFF17" fontSize="10" fontWeight="700"
        fontFamily="Pretendard" letterSpacing="0.08em">{d.year}</text>
      <text x="12" y="34" fill="white" fontSize="13" fontWeight="700" fontFamily="Pretendard"
        style={{ fontFeatureSettings: "'tnum'" }}>사망률 {d.mort}%</text>
      <text x="12" y="50" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="Pretendard"
        style={{ fontFeatureSettings: "'tnum'" }}>유병률 {d.prev}%</text>
    </g>
  );
}

// ============================================================
// Numbered info card (used in both "위험은?" and "취약할까?" rows)
// ============================================================
function NumCard({ num, title, children }) {
  return (
    <div className="numcard">
      <div className="numcard__head">
        <span className="numcard__num numeric">{num}</span>
        <h3 className="numcard__title">{title}</h3>
      </div>
      <div className="numcard__body">{children}</div>
    </div>
  );
}

// ============================================================
// Pancreas comparison illustration (card 1 of "취약할까")
// ============================================================
function PancreasCard() {
  return (
    <NumCard num="1" title="인종에 따른 췌장 구조 차이">
      <p className="numcard__text">
        아시아인의 췌장은 서양인보다 작고 기능 조직도 적습니다. 지방
        축적까지 더해지면 췌장 손상이 더 빠르고 심각하게 진행되어 인
        슐린 분비가 줄고 혈당 조절이 어려워 당뇨병 위험이 높아집니다.
      </p>
      <div className="legend-row">
        <span className="lg"><i className="dot dot--lime"/> 한국인</span>
        <span className="lg"><i className="dot dot--olive"/> 백인</span>
        <span className="lg lg--gap"><i className="dot dot--gray"/> 한국인</span>
        <span className="lg"><i className="dot dot--gray2"/> 백인</span>
      </div>
      <div className="pancreas">
        {/* Left: pancreas size comparison */}
        <div className="pancreas__col">
          <svg viewBox="0 0 200 110" className="pancreas-svg">
            {/* Korean (smaller, lime) */}
            <path d="M 18 70 Q 32 50 60 50 Q 95 50 110 65 Q 122 78 130 78 L 130 88 Q 105 100 70 95 Q 32 90 18 78 Z"
              fill="#CCFF17"/>
            <text x="22" y="58" fill="#1A1A1A" fontSize="9" fontFamily="Pretendard" fontWeight="700">한국인</text>
            {/* White (larger outline behind) */}
            <path d="M 14 68 Q 28 38 70 38 Q 122 38 145 60 Q 168 78 180 78 L 180 92 Q 145 108 88 102 Q 30 100 14 84 Z"
              fill="none" stroke="rgba(165,178,90,0.6)" strokeWidth="1.5" strokeDasharray="3 3"/>
          </svg>
          <div className="pancreas__cap">췌장 크기 <b className="negative">-12.3%</b></div>
        </div>
        {/* Right: visceral fat comparison */}
        <div className="pancreas__col">
          <svg viewBox="0 0 160 110" className="pancreas-svg">
            {/* Korean — more fat (bigger blobs) */}
            <g opacity="0.65">
              <ellipse cx="55" cy="55" rx="32" ry="26" fill="#888"/>
              <ellipse cx="40" cy="68" rx="12" ry="10" fill="#666"/>
              <ellipse cx="72" cy="40" rx="10" ry="8" fill="#666"/>
              <ellipse cx="78" cy="70" rx="8" ry="6" fill="#666"/>
            </g>
            <text x="45" y="58" fill="white" fontSize="10" fontFamily="Pretendard" fontWeight="700">한국인</text>
            {/* White — leaner */}
            <g opacity="0.4">
              <ellipse cx="125" cy="58" rx="22" ry="18" fill="#888"/>
              <ellipse cx="118" cy="68" rx="6" ry="5" fill="#666"/>
            </g>
          </svg>
          <div className="pancreas__cap">췌장 내 지방 <b className="positive">+22.8%</b></div>
        </div>
      </div>
    </NumCard>
  );
}

// ============================================================
// β-cell function gauge (card 2 of "취약할까")
// ============================================================
function BetaCellCard() {
  // Gauge value: Korean β-cell function is -33.6% vs white
  const pct = 0.664; // 66.4% of white baseline (visualised on a semi-circle)
  const R = 90;
  const C = Math.PI * R; // semicircle circumference
  return (
    <NumCard num="2" title={<>췌장 구조와 β세포<sup>*</sup> 기능의 상관 관계</>}>
      <p className="numcard__text">
        췌장 크기가 작고 지방이 많을수록 인슐린을 분비하여 혈당 조절
        을 담당하는 β세포<sup>*</sup> 기능은 저하됩니다. 한국인은 이러한 구조적
        특성으로 인해 β세포<sup>*</sup> 기능이 백인보다 평균 36.6% 낮습니다.
      </p>
      <p className="numcard__foot">*β세포 : 인슐린을 분비해 혈당을 조절하는 췌장의 주요 세포</p>
      <div className="legend-row">
        <span className="lg"><i className="dot dot--lime"/> 한국인</span>
        <span className="lg"><i className="dot dot--olive"/> 백인</span>
      </div>
      <div className="gauge">
        <svg viewBox="0 0 240 130" className="gauge-svg">
          {/* white baseline arc (full) */}
          <path d="M 30 120 A 90 90 0 0 1 210 120"
            fill="none" stroke="rgba(165,178,90,0.55)" strokeWidth="22" strokeLinecap="round"/>
          {/* Korean arc — shorter, lime */}
          <path d={describeArc(120, 120, 90, 180, 180 + 180 * pct)}
            fill="none" stroke="#CCFF17" strokeWidth="22" strokeLinecap="round"/>
        </svg>
        <div className="gauge__cap">
          백인 대비<br/>
          β세포 기능 <b className="negative">-33.6%</b>
        </div>
      </div>
    </NumCard>
  );
}
// helper for SVG arc
function describeArc(cx, cy, r, startDeg, endDeg) {
  const polar = (deg) => {
    const rad = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const [sxp, syp] = polar(startDeg);
  const [exp, eyp] = polar(endDeg);
  const large = endDeg - startDeg <= 180 ? 0 : 1;
  return `M ${sxp} ${syp} A ${r} ${r} 0 ${large} 1 ${exp} ${eyp}`;
}

// ============================================================
// KoreansView shell
// ============================================================
function KoreansView() {
  return (
    <div className="kor">
      <div className="kor__topbg"/>
      <div className="kor__grid">

        {/* ── LEFT ── */}
        <div className="kor__left">
          <h2 className="kor__h">당뇨 환자는 비만일까?</h2>
          <p className="kor__p">
            일반적으로 '비만 = 당뇨병 위험 증가'라는 공식이 통하지만, 한국과 일본은 이 공식에서 벗어난 예외적인 특성을 보입니다.<br/>
            2023년 OECD 보고서 기준 평균과 비교해 보면, 한국의 비만율은 최저 수준이지만 당뇨병 유병률은 OECD 평균에 거의 근접해
            있습니다. 이는 겉으로 보기엔 건강해 보여도, 실제로는 당뇨병 위험이 잠재되어 있을 수 있다는 점을 경고합니다.
          </p>
          <OECDScatter />
        </div>

        {/* ── RIGHT ── */}
        <div className="kor__right">
          <h2 className="kor__h">시간차를 두고 찾아오는 당뇨병의 진짜 위험은?</h2>
          <p className="kor__p">
            아래 그래프는 2012년부터 2023년까지의 당뇨병 유병률과 당뇨병으로 인한 사망률의 변화를 나타낸 것입니다.<br/>
            특히 유병률과 사망률 사이에 나타나는 시간차는, 당뇨병이 즉각적인 사망 원인이라기보다는 장기적으로 다양한
            합병증을 유발하고, 이 합병증들이 추후 사망의 원인이 될 수 있음을 시사합니다.
          </p>
          <MortalityChart />

          <div className="numcard-row">
            <NumCard num="1" title="당뇨병, 멀지 않은 문제">
              <p className="numcard__text">
                2021년 기준, 한국인의 당뇨병 유병률은 약 20%로, 성인 5명 중
                1명 이상이 당뇨병의 위험에 노출되어 있음을 보여줍니다.
                당뇨병의 위험은 누구에게도 예외가 될 수 없습니다.
              </p>
            </NumCard>
            <NumCard num="2" title="합병증으로 이어지는 당뇨병">
              <p className="numcard__text">
                팬데믹 이후 관리 공백으로 인해 사망률이 급격히 상승하는 추세
                입니다. 당뇨병은 조기 관리 없이는 치명적인 합병증으로 이어질
                수 있으므로, 예방 중심의 건강한 습관이 필수적입니다.
              </p>
            </NumCard>
          </div>

          <h2 className="kor__h kor__h--mt">한국인은 왜 당뇨병에 더 취약할까?</h2>
          <div className="numcard-row">
            <PancreasCard />
            <BetaCellCard />
          </div>
        </div>

      </div>
    </div>
  );
}


// ─────────── GuidelinesView.jsx ───────────
// ============================================================
// 당뇨 예방 지침 (Guidelines View)
// Recreates the four-slot plate builder from the Figma capture:
//   • Click a slot → that nutrient group activates
//   • Click a food on the right → it fills the active slot
//   • Other groups dim; the active group's stack reveals food images
// ============================================================

function GuidelinesView() {
  const [active, setActive] = React.useState("carb");
  const [picks, setPicks] = React.useState({
    carb: null, protein: null, fat: null, fiber: null,
  });

  const group = NUTRIENT_GROUPS.find(g => g.id === active);

  function pickFood(food) {
    setPicks(p => ({ ...p, [active]: food }));
  }

  return (
    <div className="guide">
      {/* Top hero strip — faded food background */}
      <div className="guide__topbg" />

      <header className="guide__head">
        <h1 className="display-2 guide__title">균형 잡힌 영양 식사 구성도</h1>
        <p className="body-lg guide__sub">
          식습관은 당뇨 예방의 첫걸음입니다. 탄수화물, 단백질, 지방, 식이섬유를 균형 있게 구성한 식사는 혈당 급상승을 막고
          인슐린 저항성을 낮추는 데 효과적입니다. 한 끼는 성인 남성 기준으로 탄수화물 60%, 단백질 20%, 지방 20%, 식이섬유 5g
          이상을 목표로 구성하면 좋습니다. 각 영양소가 풍부한 식재료를 선택해 나만의 건강한 식단을 만들어봅시다.
        </p>
      </header>

      {/* MAIN row — plate (left) + food stacks (right) */}
      <div className="guide__main">

        {/* LEFT: 4-slot plate */}
        <div className="plate">
          {NUTRIENT_GROUPS.map(g => (
            <PlateSlot
              key={g.id}
              group={g}
              picked={picks[g.id]}
              active={active === g.id}
              onClick={() => setActive(g.id)}
            />
          ))}
          <div className="plate__center">
            성인 남성의<br/>한끼 식사 기준
          </div>
        </div>

        {/* RIGHT: 4 nutrient stacks */}
        <div className="stacks">
          {NUTRIENT_GROUPS.map(g => (
            <NutrientStack
              key={g.id}
              group={g}
              active={active === g.id}
              picked={picks[g.id]}
              onActivate={() => setActive(g.id)}
              onPick={pickFood}
            />
          ))}
        </div>
      </div>

      {/* ─── Lifestyle prevention routine ─────────────── */}
      <section className="lifestyle">
        <h2 className="display-2 guide__title">생활 속 예방 루틴</h2>
        <p className="body-lg guide__sub">
          규칙적인 운동은 혈당 조절과 인슐린 기능 개선으로 당뇨 예방에 효과적입니다.<br/>
          주 3일 이상, 주 150분 이상의 유산소 운동 및 전신 근력 운동 병행을 권장합니다. 또한 충분한 수면과 금연, 절주와 같은 생활습관은 혈당 변동을 안정시키는데 도움을 줍니다.
        </p>

        <div className="lifestyle__grid">
          <ExerciseTable />
          <DailyHabits />
        </div>
      </section>
    </div>
  );
}

// ============================================================
// Left plate slot
// ============================================================
function PlateSlot({ group, picked, active, onClick }) {
  return (
    <button
      type="button"
      className={"slot slot--" + group.id + (active ? " is-active" : "") + (picked ? " is-filled" : "")}
      onClick={onClick}
      style={{ "--gc": group.color, "--gcs": group.colorSoft }}
    >
      <div className="slot__card">
        {/* badge in top-left */}
        <span className="slot__badge" style={{ background: active ? group.color : "transparent",
                                                color: active ? "#0A0A0A" : "rgba(255,255,255,0.4)",
                                                border: active ? "0" : "1px solid rgba(255,255,255,0.15)" }}>
          {group.label}
        </span>
        {/* art area */}
        <div className="slot__art">
          {picked ? (
            <img src={"assets/foods/" + picked.img} alt="" className="slot__food" />
          ) : (
            <div className="slot__q" style={{
              borderColor: active ? group.color : "rgba(255,255,255,0.18)",
              color: active ? group.color : "rgba(255,255,255,0.3)",
              background: active ? group.colorSoft : "transparent",
            }}>?</div>
          )}
        </div>
      </div>
      {/* color banner */}
      <div className="slot__banner" style={{
        background: active ? group.color : "rgba(255,255,255,0.05)",
        color: active ? "#1a1a1a" : "rgba(255,255,255,0.45)",
      }}>
        {picked ? (
          <span className="slot__pick">
            <span className="slot__pname">{picked.name}</span>
            <span className="slot__pweight numeric">{GUIDE_PORTION[picked.id] || picked.weight}</span>
          </span>
        ) : (
          <span className="slot__hint">{group.hint}</span>
        )}
      </div>
    </button>
  );
}

// ============================================================
// Right-side nutrient stack
// ============================================================
function NutrientStack({ group, active, picked, onActivate, onPick }) {
  return (
    <div
      className={"stack" + (active ? " is-active" : " is-dim")}
      onMouseEnter={onActivate}
      style={{ "--gc": group.color }}
    >
      {/* vertical color tab */}
      <button type="button" className="stack__tab" onClick={onActivate}
        style={{ background: active ? group.color : "rgba(255,255,255,0.04)",
                 color: active ? "#1a1a1a" : "rgba(255,255,255,0.35)" }}>
        {group.label.split("").map((c, i) => <span key={i}>{c}</span>)}
      </button>
      {/* food strip */}
      <div className="stack__strip">
        {group.foods.map(f => (
          <button
            key={f.id}
            type="button"
            className={"food-pick" + (picked && picked.id === f.id ? " is-picked" : "")}
            onClick={() => { onActivate(); onPick(f); }}
          >
            <div className="food-pick__img">
              <img src={"assets/foods/" + f.img} alt="" />
            </div>
            <div className="food-pick__label">
              <span className="food-pick__name">{f.name}</span>
              <span className="food-pick__weight numeric">{f.weight}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Bottom — exercise table
// ============================================================
function ExerciseTable() {
  return (
    <div className="lifestyle-card">
      <div className="lifestyle-card__head">
        <span className="lifestyle-card__num numeric">1</span>
        <h3 className="lifestyle-card__title">주간 운동 가이드</h3>
      </div>
      <table className="extable">
        <thead>
          <tr>
            <th>요일</th>
            {WEEK_EXERCISE.map(d => <th key={d.day}>{d.day}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr className="extable__type">
            <th>운동 종류</th>
            {WEEK_EXERCISE.map(d => (
              <td key={d.day} className={"tone-" + d.typeTone}>{d.type}</td>
            ))}
          </tr>
          <tr className="extable__act">
            <th>추천 활동</th>
            {WEEK_EXERCISE.map(d => (
              <td key={d.day}>
                {d.activity.split("\n").map((line, i) => <span key={i}>{i ? <><br/>{line}</> : line}</span>)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ============================================================
// Bottom — daily habits 2x2
// ============================================================
function DailyHabits() {
  return (
    <div className="lifestyle-card">
      <div className="lifestyle-card__head">
        <span className="lifestyle-card__num numeric">2</span>
        <h3 className="lifestyle-card__title">건강한 일상을 위한 실천법</h3>
      </div>
      <div className="habits">
        {DAILY_HABITS.map((h, i) => (
          <div className="habit" key={i}>
            <div className="habit__head">
              <HabitIcon name={h.icon} />
              <span className="habit__title">{h.title}</span>
            </div>
            <div className="habit__body">
              {h.body.split("\n").map((line, j) => <span key={j}>{j ? <><br/>{line}</> : line}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HabitIcon({ name }) {
  // small 18×18 stroke icons in muted colors per the capture
  const map = {
    moon: { color: "#B9E25A", path: <><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></> },
    scale: { color: "#B9E25A", path: <><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M7 6V4h10v2M12 9v4M9 13h6"/></> },
    smoke: { color: "#B9E25A", path: <><rect x="2" y="14" width="16" height="4" rx="1"/><path d="M19 14v4M22 14v4M5 11c0-2 2-2 2-4s-2-2-2-4M10 11c0-1 1-1 1-2"/></> },
    check: { color: "#B9E25A", path: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></> },
  };
  const m = map[name];
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={m.color}
         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {m.path}
    </svg>
  );
}


// ─────────── App.jsx ───────────
// Top-level App for the Diebates dashboard.
// 4 main views matching the Figma captures, all dark.

function OverviewView() {
  return (
    <div className="placeholder">
      <h1 className="display-2">개요</h1>
      <p>이 화면은 별도 캡처가 제공되지 않아 placeholder로 남겨두었습니다.<br/>
      디자인이 정해지면 추가로 만들어 드릴 수 있어요.</p>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="placeholder">
      <h1 className="display-2">설정</h1>
      <p>설정 화면 디자인이 정해지면 채워넣겠습니다.</p>
    </div>
  );
}

function SupportView() {
  return (
    <div className="placeholder">
      <h1 className="display-2">고객센터</h1>
      <p>고객센터 디자인이 정해지면 채워넣겠습니다.</p>
    </div>
  );
}

function App() {
  const [view, setView] = React.useState("koreans");

  return (
    <div className="app">
      <NavRail active={view} onChange={setView} />
      <main className="main">
        {view === "overview"   && <OverviewView />}
        {view === "koreans"    && <KoreansView />}
        {view === "guidelines" && <GuidelinesView />}
        {view === "settings"   && <SettingsView />}
        {view === "support"    && <SupportView />}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);

