import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_ITEM_DETAILS } from '../constants';

interface ItemDetailSheetProps {
  // We can add a prop for `onAddToLook` if this component is used in a context
  // where adding to a look is a direct action from the sheet.
}

const ItemDetailSheet: React.FC<ItemDetailSheetProps> = () => {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string }>();

  // In a real app, fetch item details using itemId
  const item = MOCK_ITEM_DETAILS; // Using mock data for now

  const handleDismiss = () => {
    navigate(-1); // Go back to the previous screen
  };

  const handleAddToMyLook = () => {
    console.log('Adding item to my look:', item);
    // Logic to add item to user's current look
    handleDismiss(); // Dismiss the sheet after action
  };

  if (!item) {
    return (
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark animate-fade-in">
        <p className="text-text-muted">Item not found.</p>
        <button onClick={handleDismiss} className="mt-4 text-primary dark:text-link-blue hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md animate-fade-in" onClick={handleDismiss}></div>

      {/* Item Image in Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="High Fashion Editorial"
          className="w-full h-full object-cover blur-md scale-105"
          src={item.imageUrl}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Top Controls (blurred, simulating underlying screen) */}
      <div className="relative z-10 flex flex-col p-6 gap-6 opacity-20 pointer-events-none">
        <div className="flex items-center justify-between text-white">
          <span className="material-symbols-outlined text-3xl">close</span>
          <span className="font-bold text-lg tracking-widest uppercase">Style Me</span>
          <span className="material-symbols-outlined text-3xl">share</span>
        </div>
      </div>

      {/* Bottom Sheet Modal Content */}
      <div className="bottom-sheet absolute inset-x-0 bottom-0 z-20 flex flex-col items-stretch bg-card-light dark:bg-card-dark rounded-t-3xl pt-3 shadow-xl ios-shadow-top animate-slide-up-lux opacity-0">
        <div className="flex flex-col items-center w-full pt-1 pb-4">
          <div className="h-1.5 w-12 rounded-full bg-sheet-handle dark:bg-slate-700 mb-2"></div>
          <span className="text-[9px] font-medium text-text-muted uppercase tracking-luxury-lg font-sans">Swipe down to dismiss</span>
        </div>

        <div className="w-full text-center px-6 pb-10">
          <h3 className="text-primary dark:text-slate-100 tracking-widest text-lg font-bold leading-tight font-sans uppercase">
            Item Details
          </h3>
        </div>

        <div className="w-full px-10 pb-12 space-y-10">
          <div className="flex flex-col items-start gap-1.5">
            <span className="text-[10px] font-bold text-text-muted dark:text-slate-500 tracking-luxury-lg uppercase font-sans">Material</span>
            <p className="text-primary dark:text-slate-200 text-sm font-medium tracking-wide font-display">{item.material}</p>
          </div>
          <div className="flex flex-col items-start gap-1.5">
            <span className="text-[10px] font-bold text-text-muted dark:text-slate-500 tracking-luxury-lg uppercase font-sans">Fit</span>
            <p className="text-primary dark:text-slate-200 text-sm font-medium tracking-wide font-display uppercase">{item.fit}</p>
          </div>
          <div className="flex flex-col items-start gap-1.5">
            <span className="text-[10px] font-bold text-text-muted dark:text-slate-500 tracking-luxury-lg uppercase font-sans">Color</span>
            <div className="flex items-center gap-3">
              {/* This color should be dynamic based on item.color */}
              <div className="w-4 h-4 rounded-full border border-gray-100 shadow-sm bg-[#F7E7CE]"></div>
              <p className="text-primary dark:text-slate-200 text-sm font-medium tracking-wide font-display uppercase">{item.color}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1.5">
            <span className="text-[10px] font-bold text-text-muted dark:text-slate-500 tracking-luxury-lg uppercase font-sans">Care</span>
            <p className="text-primary dark:text-slate-200 text-sm font-medium tracking-wide font-display uppercase">{item.care}</p>
          </div>
        </div>

        <div className="w-full px-8 pb-14">
          <button
            className="group relative flex w-full h-16 items-center justify-center overflow-hidden rounded-full bg-primary text-white text-sm font-bold tracking-luxury-sm transition-all active:scale-[0.98] shadow-xl shadow-primary/20 font-sans"
            onClick={handleAddToMyLook}
          >
            <span className="z-10 uppercase">Add to my look</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
        <div className="h-6 w-full bg-card-light dark:bg-card-dark"></div> {/* iOS Home Indicator Spacing */}
      </div>
    </div>
  );
};

export default ItemDetailSheet;