import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../constants';

const BodyPhotoCaptureScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleCapturePhoto = () => {
    // In a real app, this would trigger camera access and photo capture.
    console.log('Capturing body photo...');
    // After capture, perhaps navigate to a confirmation or upload screen, or back to profile
    navigate(RoutePath.Profile);
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous screen
  };

  return (
    <div className="h-full flex flex-col bg-background-light dark:bg-background-dark animate-fade-in">
      <main className="flex-1 flex flex-col items-center justify-between py-6 px-6 max-w-md mx-auto w-full">
        <header className="text-center mt-2 mb-4">
          <div className="mb-3 flex justify-center opacity-80 dark:opacity-100">
            <svg className="text-primary" fill="none" height="36" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
              <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
            </svg>
          </div>
          <h1 className="font-display text-2xl tracking-luxury-lg mb-0.5 font-normal uppercase text-primary dark:text-slate-200">
            Style Me
          </h1>
          <p className="text-[9px] tracking-luxury-xl uppercase text-text-muted dark:text-slate-400">
            Foto de Perfil do Usuário
          </p>
        </header>

        <div className="w-full relative">
          <div className="w-full aspect-[3/4] bg-card-light dark:bg-card-dark rounded-5xl p-3 shadow-sm border border-card-light dark:border-border-dark">
            <div className="w-full h-full bg-background-light dark:bg-card-dark rounded-4xl overflow-hidden relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-100/40 to-slate-200/20 dark:from-slate-800/40 dark:to-slate-900/20"></div>
              <div className="scanner-corner top-left"></div>
              <div className="scanner-corner top-right"></div>
              <div className="scanner-corner bottom-left"></div>
              <div className="scanner-corner bottom-right"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="body-silhouette text-primary dark:text-slate-400" fill="none" height="300" viewBox="0 0 100 200" width="150" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="25" r="12" stroke="currentColor"></circle>
                  <path d="M35 45C35 45 40 40 50 40C60 40 65 45 65 45L75 80L70 85L62 65V180H38V65L30 85L25 80L35 45Z" stroke="currentColor"></path>
                </svg>
              </div>
              <div className="relative z-20 text-center px-10 space-y-2">
                <h2 className="text-[10px] font-medium tracking-luxury-sm text-text-muted dark:text-slate-400 uppercase">
                  POSITION IN FRONT OF A MIRROR
                </h2>
                <div className="h-[1px] w-4 bg-text-muted/30 mx-auto"></div>
                <h2 className="text-[10px] font-medium tracking-luxury-sm text-text-muted dark:text-slate-400 uppercase">
                  ASK A SALESPERSON FOR HELP
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30">
            <button className="w-16 h-16 bg-card-light dark:bg-card-dark rounded-full border-[3px] border-primary flex items-center justify-center shadow-lg active:scale-95 transition-transform">
              <div className="w-12 h-12 bg-card-light dark:bg-card-dark rounded-full border border-slate-100 dark:border-slate-700"></div>
            </button>
          </div>
        </div>

        <div className="w-full mt-10 bg-card-light dark:bg-card-dark rounded-5xl p-10 shadow-sm border border-card-light dark:border-border-dark/50">
          <p className="text-[11px] font-medium tracking-luxury-sm text-text-muted dark:text-slate-400 uppercase text-center leading-relaxed">
            HOLD YOUR PHONE AT CHEST HEIGHT
          </p>
        </div>

        <footer className="w-full mt-6 flex flex-col items-center gap-4">
          <button
            className="w-full bg-primary text-white rounded-full py-5 text-xs font-semibold tracking-luxury-sm uppercase shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
            onClick={handleCapturePhoto}
          >
            Capture Photo
          </button>
          <button
            className="text-[10px] font-semibold tracking-luxury-sm text-text-muted dark:text-slate-400 uppercase transition-opacity hover:opacity-70 pb-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </footer>
      </main>
    </div>
  );
};

export default BodyPhotoCaptureScreen;