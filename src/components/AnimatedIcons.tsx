// Climate Control Icon with animated temperature waves
export const ClimateControlIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animated-icon">
    <defs>
      <linearGradient id="climateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#20A39E" />
        <stop offset="100%" stopColor="#17827E" />
      </linearGradient>
    </defs>
    
    {/* Thermometer */}
    <path
      d="M40 15 L40 35 M35 42 A7 7 0 1 0 45 42 L45 20 A5 5 0 0 0 35 20 Z"
      stroke="url(#climateGrad)"
      strokeWidth="2.5"
      fill="none"
      className="thermo-body"
    />
    
    {/* Mercury fill - animated */}
    <path
      d="M40 45 L40 25"
      stroke="#EF5B5B"
      strokeWidth="3"
      strokeLinecap="round"
      className="mercury-fill"
    />
    
    {/* Bulb */}
    <circle cx="40" cy="47" r="5" fill="#EF5B5B" className="thermo-bulb" />
    
    {/* Heat waves - animated */}
    <path
      d="M52 20 Q54 22 52 24 M52 28 Q54 30 52 32"
      stroke="#FFBA49"
      strokeWidth="2"
      strokeLinecap="round"
      className="heat-wave wave-1"
    />
    <path
      d="M58 22 Q60 24 58 26 M58 30 Q60 32 58 34"
      stroke="#FFBA49"
      strokeWidth="2"
      strokeLinecap="round"
      className="heat-wave wave-2"
    />
    
    {/* Humidity droplets */}
    <path
      d="M28 25 Q28 22 26 22 Q24 22 24 25 Q24 28 26 28 Q28 28 28 25"
      fill="#20A39E"
      opacity="0.6"
      className="droplet droplet-1"
    />
    <path
      d="M32 32 Q32 29 30 29 Q28 29 28 32 Q28 35 30 35 Q32 35 32 32"
      fill="#20A39E"
      opacity="0.6"
      className="droplet droplet-2"
    />
  </svg>
);

// Auto Feeding Icon with rotating mechanism
export const AutoFeedingIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animated-icon">
    <defs>
      <linearGradient id="feedingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFBA49" />
        <stop offset="100%" stopColor="#E5A840" />
      </linearGradient>
    </defs>
    
    {/* Hopper/Container */}
    <path
      d="M25 20 L25 30 L20 35 L20 45 L60 45 L60 35 L55 30 L55 20 Z"
      fill="url(#feedingGrad)"
      opacity="0.2"
      stroke="url(#feedingGrad)"
      strokeWidth="2.5"
    />
    
    {/* Feed particles falling - animated */}
    <circle cx="35" cy="35" r="2" fill="#FFBA49" className="feed-particle particle-1" />
    <circle cx="40" cy="32" r="2" fill="#FFBA49" className="feed-particle particle-2" />
    <circle cx="45" cy="38" r="2" fill="#FFBA49" className="feed-particle particle-3" />
    <circle cx="38" cy="40" r="2" fill="#FFBA49" className="feed-particle particle-4" />
    
    {/* Dispenser mechanism - rotating */}
    <g className="dispenser-mechanism">
      <circle cx="40" cy="25" r="8" stroke="url(#feedingGrad)" strokeWidth="2.5" fill="none" />
      <path d="M40 17 L40 25 L48 25" stroke="url(#feedingGrad)" strokeWidth="2" strokeLinecap="round" />
    </g>
    
    {/* Bowl at bottom */}
    <path
      d="M28 50 Q28 58 40 58 Q52 58 52 50 L28 50"
      fill="none"
      stroke="#20A39E"
      strokeWidth="2.5"
    />
    
    {/* Water drops */}
    <circle cx="62" cy="52" r="3" fill="#20A39E" opacity="0.6" className="water-drop drop-1" />
    <circle cx="66" cy="48" r="2.5" fill="#20A39E" opacity="0.6" className="water-drop drop-2" />
  </svg>
);

// Manure Conveyor Icon with moving belt
export const ManureConveyorIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animated-icon">
    <defs>
      <linearGradient id="conveyorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF5B5B" />
        <stop offset="100%" stopColor="#D94848" />
      </linearGradient>
    </defs>
    
    {/* Conveyor belt structure */}
    <rect x="15" y="35" width="50" height="4" fill="url(#conveyorGrad)" opacity="0.3" />
    
    {/* Pulleys */}
    <circle cx="20" cy="37" r="8" stroke="url(#conveyorGrad)" strokeWidth="2.5" fill="none" className="pulley pulley-left" />
    <circle cx="60" cy="37" r="8" stroke="url(#conveyorGrad)" strokeWidth="2.5" fill="none" className="pulley pulley-right" />
    
    {/* Belt segments - animated */}
    <rect x="20" y="35" width="8" height="4" fill="#EF5B5B" className="belt-segment segment-1" />
    <rect x="32" y="35" width="8" height="4" fill="#EF5B5B" className="belt-segment segment-2" />
    <rect x="44" y="35" width="8" height="4" fill="#EF5B5B" className="belt-segment segment-3" />
    
    {/* Waste collection bin */}
    <path
      d="M62 42 L68 50 L68 58 L72 58 L72 60 L56 60 L56 58 L60 58 L60 50 Z"
      fill="none"
      stroke="#20A39E"
      strokeWidth="2.5"
    />
    
    {/* Cleanliness sparkles */}
    <path
      d="M25 20 L27 22 L25 24 L23 22 Z M25 18 L25 26 M21 22 L29 22"
      stroke="#FFBA49"
      strokeWidth="1.5"
      className="sparkle sparkle-1"
    />
    <path
      d="M45 18 L46 19 L45 20 L44 19 Z M45 17 L45 21 M43 19 L47 19"
      stroke="#FFBA49"
      strokeWidth="1.5"
      className="sparkle sparkle-2"
    />
  </svg>
);

// AI Disease Detection Icon with scanning animation
export const AIDiseaseDetectionIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animated-icon">
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#20A39E" stopOpacity="0" />
        <stop offset="50%" stopColor="#20A39E" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#20A39E" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Petri dish / sample container */}
    <circle cx="40" cy="40" r="22" stroke="url(#aiGrad)" strokeWidth="2.5" fill="none" />
    <circle cx="40" cy="40" r="18" stroke="url(#aiGrad)" strokeWidth="1.5" fill="none" opacity="0.5" />
    
    {/* Sample inside */}
    <path
      d="M35 38 Q38 35 41 38 Q44 41 41 44 Q38 47 35 44 Q32 41 35 38"
      fill="#FFBA49"
      opacity="0.3"
    />
    
    {/* Scanning beam - animated */}
    <rect x="18" y="30" width="44" height="3" fill="url(#scanGrad)" className="scan-beam" />
    
    {/* AI Neural network nodes */}
    <g className="neural-nodes">
      <circle cx="30" cy="25" r="2" fill="#20A39E" className="node node-1" />
      <circle cx="40" cy="22" r="2" fill="#20A39E" className="node node-2" />
      <circle cx="50" cy="25" r="2" fill="#20A39E" className="node node-3" />
      <circle cx="35" cy="30" r="2" fill="#20A39E" className="node node-4" />
      <circle cx="45" cy="30" r="2" fill="#20A39E" className="node node-5" />
      
      {/* Connections */}
      <path d="M30 25 L35 30" stroke="#20A39E" strokeWidth="1" opacity="0.4" />
      <path d="M40 22 L35 30" stroke="#20A39E" strokeWidth="1" opacity="0.4" />
      <path d="M40 22 L45 30" stroke="#20A39E" strokeWidth="1" opacity="0.4" />
      <path d="M50 25 L45 30" stroke="#20A39E" strokeWidth="1" opacity="0.4" />
    </g>
    
    {/* Detection indicators */}
    <path
      d="M55 35 L60 35 M55 40 L62 40 M55 45 L58 45"
      stroke="#20A39E"
      strokeWidth="2"
      strokeLinecap="round"
      className="detection-bars"
    />
    
    {/* Alert icon */}
    <circle cx="65" cy="25" r="6" fill="#EF5B5B" opacity="0.2" className="alert-pulse" />
    <path d="M65 22 L65 26 M65 28 L65 29" stroke="#EF5B5B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Central Hub Icon with connectivity waves
export const CentralHubIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="animated-icon">
    <defs>
      <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#20A39E" />
        <stop offset="100%" stopColor="#17827E" />
      </linearGradient>
    </defs>
    
    {/* Central device */}
    <rect x="28" y="28" width="24" height="24" rx="4" fill="url(#hubGrad)" opacity="0.2" stroke="url(#hubGrad)" strokeWidth="2.5" />
    
    {/* Screen/Display */}
    <rect x="32" y="32" width="16" height="12" fill="#20A39E" opacity="0.3" />
    
    {/* Connectivity waves - animated */}
    <circle cx="40" cy="40" r="20" stroke="#20A39E" strokeWidth="1.5" opacity="0.6" className="signal-wave wave-1" />
    <circle cx="40" cy="40" r="26" stroke="#20A39E" strokeWidth="1.5" opacity="0.4" className="signal-wave wave-2" />
    <circle cx="40" cy="40" r="32" stroke="#20A39E" strokeWidth="1.5" opacity="0.2" className="signal-wave wave-3" />
    
    {/* Connected nodes */}
    <circle cx="40" cy="15" r="4" fill="#FFBA49" className="connected-node node-1" />
    <circle cx="65" cy="40" r="4" fill="#FFBA49" className="connected-node node-2" />
    <circle cx="40" cy="65" r="4" fill="#FFBA49" className="connected-node node-3" />
    <circle cx="15" cy="40" r="4" fill="#FFBA49" className="connected-node node-4" />
    
    {/* Connection lines - animated */}
    <path d="M40 19 L40 28" stroke="#20A39E" strokeWidth="1.5" strokeDasharray="2,2" className="connection-line line-1" />
    <path d="M61 40 L52 40" stroke="#20A39E" strokeWidth="1.5" strokeDasharray="2,2" className="connection-line line-2" />
    <path d="M40 61 L40 52" stroke="#20A39E" strokeWidth="1.5" strokeDasharray="2,2" className="connection-line line-3" />
    <path d="M19 40 L28 40" stroke="#20A39E" strokeWidth="1.5" strokeDasharray="2,2" className="connection-line line-4" />
    
    {/* Data packets - animated */}
    <circle cx="40" cy="24" r="2" fill="#EF5B5B" className="data-packet packet-1" />
    <circle cx="56" cy="40" r="2" fill="#EF5B5B" className="data-packet packet-2" />
  </svg>
);
