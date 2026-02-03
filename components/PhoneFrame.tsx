import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  isLightStatusBar?: boolean;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, isLightStatusBar = false }) => {
  const statusBarTextColor = isLightStatusBar ? 'text-white' : 'text-slate-900';
  const statusBarDropShadow = isLightStatusBar ? 'drop-shadow-md' : '';

  return (
    <div className="relative w-full max-w-[400px] h-[844px] bg-black overflow-hidden shadow-2xl sm:rounded-[3.5rem] border-[8px] border-slate-900 flex flex-col">
      {/* Status Bar */}
      <div className={`h-12 w-full flex justify-between items-center px-8 pt-6 z-50 ${statusBarTextColor} ${statusBarDropShadow}`}>
        <span className="text-xs font-bold">9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
          <span className="material-symbols-outlined text-[14px]">wifi</span>
          <span className="material-symbols-outlined text-[18px]">battery_full</span>
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 relative overflow-hidden flex flex-col">
        {children}
      </div>

      {/* iOS Home Indicator */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <div className="w-32 h-1.5 bg-slate-200 rounded-full opacity-70"></div>
      </div>
    </div>
  );
};

export default PhoneFrame;