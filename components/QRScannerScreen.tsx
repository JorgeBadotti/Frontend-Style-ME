import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../constants';

const QRScannerScreen: React.FC = () => {
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState<string>('');

  const handleCancel = () => {
    navigate(-1); // Go back to the previous screen
  };

  // In a real app, camera feed would be here and QR code detection logic.
  // Upon successful scan, it would navigate to a confirmation or detail screen.
  const handleSimulateScan = () => {
    console.log('Simulating QR scan for occasion:', occasion);
    // In a real app, this would get the scanned item ID
    navigate(RoutePath.ItemDetail.replace(':itemId', 'scanned-qr-item-1'));
  };

  return (
    <div className="h-full flex flex-col bg-background-light dark:bg-background-dark animate-fade-in">
      <main className="flex-1 flex flex-col items-center justify-between py-10 px-6 max-w-md mx-auto w-full">
        <header className="text-center mb-6">
          <div className="mb-4 opacity-80 dark:opacity-100 flex justify-center">
            <svg className="text-primary" fill="none" height="36" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h1 className="font-display text-3xl tracking-luxury-lg mb-1 font-normal uppercase text-primary dark:text-slate-200">
            Style Me
          </h1>
          <p className="text-[10px] tracking-luxury-xl uppercase text-text-muted dark:text-slate-400">
            Personal Styling
          </p>
        </header>

        <div className="w-full aspect-square relative mb-6">
          <div className="w-full h-full bg-slate-200 dark:bg-card-dark rounded-4xl border border-border-light dark:border-border-dark overflow-hidden relative shadow-sm" onClick={handleSimulateScan}>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-400 dark:text-slate-600 text-6xl opacity-30">
                camera
              </span>
            </div>
            <div className="absolute inset-0 p-8 flex items-center justify-center">
              <div className="w-full h-full relative flex flex-col items-center justify-center text-center px-6">
                <div className="qr-scanner-corner top-left"></div>
                <div className="qr-scanner-corner top-right"></div>
                <div className="qr-scanner-corner bottom-left"></div>
                <div className="qr-scanner-corner bottom-right"></div>
                <div className="scanning-line"></div>
                <div className="relative z-20 pointer-events-none">
                  <h2 className="text-[10px] font-semibold tracking-luxury-md text-slate-500 dark:text-slate-400 uppercase mb-3">
                    Align QR Code Within Frame
                  </h2>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 max-w-[180px] mx-auto leading-relaxed">
                    Scan the item tag to add it to your fitting room or see more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-card-light dark:bg-card-dark rounded-4xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-none border border-border-light dark:border-border-dark text-center">
          <div className="mb-0">
            <label className="block text-[10px] font-semibold tracking-luxury-md text-text-muted dark:text-slate-400 uppercase mb-3" htmlFor="occasion">
              What is the occasion?
            </label>
            <input
              className="w-full bg-filter-bg dark:bg-card-dark border border-border-light dark:border-border-dark rounded-full px-6 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-700 dark:text-slate-200 transition-all"
              id="occasion"
              placeholder="Enter occasion (e.g., Wedding, Party)"
              type="text"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            />
          </div>
        </div>

        <footer className="mt-8 pb-4">
          <button
            className="text-sm font-semibold tracking-luxury-md text-primary dark:text-slate-300 uppercase transition-opacity hover:opacity-70"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </footer>
      </main>
    </div>
  );
};

export default QRScannerScreen;