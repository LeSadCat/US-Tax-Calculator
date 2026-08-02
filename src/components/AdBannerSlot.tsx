import React from 'react';

interface AdBannerSlotProps {
  label: string;
  type?: 'leaderboard' | 'medium-rectangle' | 'banner';
  className?: string;
}

export const AdBannerSlot: React.FC<AdBannerSlotProps> = ({
  label,
  type = 'leaderboard',
  className = ''
}) => {
  return (
    <div
      className={`border border-dashed border-[#28342c] bg-[#121915]/60 rounded-md flex items-center justify-center p-4 text-center select-none ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="font-mono text-[11px] tracking-widest text-[#5c6e62] uppercase">
          {label}
        </span>
      </div>
    </div>
  );
};
