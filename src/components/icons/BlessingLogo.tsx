import React from 'react';

interface BlessingLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

/**
 * Official Blessing Technologies Brand Emblem
 * Recreated with exact vectors matching the official brand identity:
 * - Tech Orange: #F97316 / #F58A1F
 * - High-Contrast Pure White: #FFFFFF
 * - Jet Pitch Black: #000000
 */
export const BlessingLogoIcon: React.FC<{ className?: string; size?: number | string }> = ({
  className = 'w-8 h-8',
  size,
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Blessing Technologies Emblem"
  >
    {/* Dark rounded container for contrast when needed */}
    <rect width="100" height="100" rx="22" fill="#08080a" />
    <rect x="1" y="1" width="98" height="98" rx="21" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.35" />

    {/* Connected Node Struts (Orange) */}
    <line x1="38" y1="58" x2="25" y2="70" stroke="#F97316" strokeWidth="6.5" strokeLinecap="round" />
    <line x1="62" y1="58" x2="75" y2="70" stroke="#F97316" strokeWidth="6.5" strokeLinecap="round" />

    {/* Left & Right Satellite Nodes (Orange) */}
    <circle cx="23" cy="71" r="10" fill="#F97316" />
    <circle cx="77" cy="71" r="10" fill="#F97316" />

    {/* Center Horseshoe / Receptor Hub (Orange) */}
    <path
      d="M39 37.5 C34 42 32.5 49 34 56 C36 63 42.5 68 50 68 C57.5 68 64 63 66 56 C67.5 49 66 42 61 37.5"
      stroke="#F97316"
      strokeWidth="6.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Center Key / Transmitter Rod & Node (White) */}
    <circle cx="50" cy="20" r="8" fill="#FFFFFF" />
    <path
      d="M50 20 V46"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="50" cy="46" r="4.5" fill="#FFFFFF" />
  </svg>
);

export const BlessingLogo: React.FC<BlessingLogoProps> = ({
  className = 'h-10',
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/blessing-technologies-logo.png"
        alt="Blessing Technologies Logo"
        className="h-full w-auto object-contain rounded-lg"
      />
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-sm tracking-wider text-white uppercase font-sans">
            Blessing
          </span>
          <span className="text-[10px] tracking-widest text-[#F97316] font-mono font-bold uppercase -mt-0.5">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
};
