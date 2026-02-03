import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../constants';

const ItemCaptureScreen: React.FC = () => {
  const navigate = useNavigate();
  const [itemDescription, setItemDescription] = useState<string>('');
  const [capturedImage, setCapturedImage] = useState<string | null>(null); // State to hold captured image

  const handleCapturePhoto = () => {
    // In a real application, this would trigger camera access.
    // For this mock, simulate a captured image.
    console.log('Capturing item:', itemDescription);
    const mockImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEnkCj5wqTLG2O6MvuBzJi-NVS9U3UG-RPmaLP38kO2av5lNWJENLOTsWpf_019bK869VTA5-5Rl-Ls1EykmjyqYSRGBkG2TTyILSTJTilTIyJXGqtUgb78gSckcFO8-3z6-Ots-xcDkhEPnYcQhFhb6Go2Tja1Y-QjtY4iIGmoOGtMD2m20RlHhUQ24Jtrmkb-PErBffVl2FSAtS5-EJQYbgsIm5-4ug12VYQwV9FuKGqeKjxORlfJ7gEbezqDOjCCa2WR_76xoo';
    setCapturedImage(mockImage);
    // For now, immediately navigate to the confirmation screen with mock data
    navigate(RoutePath.ItemDetail.replace(':itemId', 'scanned-item-1'));
  };

  const handleCancel = () => {
    navigate(-1); // Go back
  };

  return (
    <div className="h-full flex flex-col bg-background-light dark:bg-background-dark animate-fade-in">
      <main className="flex-1 flex flex-col items-center justify-between py-8 px-6 max-w-md mx-auto w-full">
        <header className="text-center mt-2 mb-6">
          <div className="mb-4 flex justify-center opacity-80 dark:opacity-100">
            <svg className="text-primary" fill="none" height="40" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </div>
          <h1 className="font-display text-3xl tracking-luxury-lg mb-1 font-normal uppercase text-primary dark:text-slate-200">
            Style Me
          </h1>
          <p className="text-[10px] tracking-luxury-xl uppercase text-text-muted dark:text-slate-400">
            Item Capture
          </p>
        </header>

        <div className="w-full relative group">
          <div className="w-full aspect-[4/5] bg-card-light dark:bg-card-dark rounded-4xl p-4 shadow-sm border border-card-light dark:border-border-dark">
            <div className="w-full h-full bg-background-light dark:bg-card-dark rounded-3xl overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 to-slate-200/30 dark:from-slate-800/50 dark:to-slate-900/30"></div>
              <div className="scanner-corner top-left"></div>
              <div className="scanner-corner top-right"></div>
              <div className="scanner-corner bottom-left"></div>
              <div className="scanner-corner bottom-right"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="clothing-silhouette text-primary dark:text-slate-400" fill="none" height="260" viewBox="0 0 100 120" width="180" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 20C30 20 40 15 50 15C60 15 70 20 70 20L85 35L80 50L70 45V105H30V45L20 50L15 35L30 20Z" stroke="currentColor" strokeWidth="0.5"></path>
                </svg>
              </div>
              <div className="relative z-20 text-center px-8">
                <h2 className="text-[11px] font-medium tracking-luxury-sm text-text-muted dark:text-slate-400 uppercase">
                  Align Clothing Item
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 bg-card-light dark:bg-card-dark rounded-4xl p-10 shadow-sm border border-card-light dark:border-border-dark/50">
          <div className="space-y-4">
            <label className="block text-[10px] font-semibold tracking-luxury-sm text-text-muted dark:text-slate-400 uppercase text-center" htmlFor="item-type">
              What is this piece?
            </label>
            <input
              className="w-full bg-filter-bg dark:bg-card-dark border-none rounded-full px-6 py-4 text-sm focus:ring-1 focus:ring-primary/20 outline-none placeholder:text-slate-300 dark:placeholder:text-slate-600 text-slate-700 dark:text-slate-200 transition-all text-center"
              id="item-type"
              placeholder="e.g., Silk Blazer, Blue Jeans"
              type="text"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </div>
        </div>

        <footer className="w-full mt-8 flex flex-col items-center gap-6">
          <button
            className="w-full bg-primary text-white rounded-full py-5 text-xs font-semibold tracking-luxury-sm uppercase shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleCapturePhoto}
            disabled={!itemDescription} // Disable if no description is entered
          >
            Capture Piece
          </button>
          <button
            className="text-[10px] font-semibold tracking-luxury-sm text-text-muted dark:text-slate-400 uppercase transition-opacity hover:opacity-70 pb-4"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </footer>
      </main>
    </div>
  );
};

export default ItemCaptureScreen;