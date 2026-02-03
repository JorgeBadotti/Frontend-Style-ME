import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BAG_ITEMS, RoutePath } from '../constants';
import { BagItem } from '../types';

interface ShoppingBagScreenProps {
  // onFinalizeSelection?: (items: BagItem[]) => void;
  // onRemoveItem?: (itemId: string) => void;
}

const ShoppingBagScreen: React.FC<ShoppingBagScreenProps> = () => {
  const navigate = useNavigate();
  const [bagItems, setBagItems] = useState<BagItem[]>(MOCK_BAG_ITEMS);
  const [showAIAdjustment, setShowAIAdjustment] = useState<boolean>(false);

  const handleRemoveItem = (itemId: string) => {
    setBagItems(prevItems => prevItems.filter(item => item.id !== itemId));
    setShowAIAdjustment(true); // Show AI adjustment animation on item removal
    setTimeout(() => setShowAIAdjustment(false), 2000); // Hide after 2 seconds
  };

  const calculateTotal = () => {
    return bagItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleFinalizeSelection = () => {
    console.log('Finalizing selection:', bagItems);
    // In a real app, this would lead to checkout process
    alert('Selection finalized!');
    // navigate to confirmation or home
    navigate(RoutePath.Home);
  };

  const handleContinueShopping = () => {
    console.log('Continuing shopping...');
    navigate(RoutePath.Closet); // Or a specific store catalog if exists
  };

  return (
    <div className="relative h-full flex flex-col bg-background-light dark:bg-background-dark animate-fade-in">
      {/* Background Image (simulated from a previous screen) */}
      <div className="absolute inset-0 w-full h-full z-0 bg-slate-200 dark:bg-slate-800 opacity-60">
        <img
          alt="High Fashion Outfit"
          className="w-full h-full object-cover blur-sm"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCltnMpvuznHnzsZyT25M7ZRB37PzP6c3N3G-aOqCClIJB9gN6qGqX5rN362zclRU_GJjegf4Y9d0ODwVGpRwO7lKjz0VCCkucpbVz2YFjPDF_vxz--UHvhQIcSUOkqiptCoCn7e2Pop6vcrfspA6dj6x-arN7gCIyINZ5IOKqDRHGJFVwoaEkXWls49xmBnlftkG8UE-i3LwZJuuYaGFN-Ansc56maJVIDMBZAWuw4mA2qbgtFu0ObKtmH0ZB603NnkwCP5wIpQGKa"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Top action bar, blurred from underlying content */}
      <div className="absolute top-16 left-6 right-6 flex justify-between items-center z-10 opacity-50 pointer-events-none">
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>

      {/* Shopping Bag Sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-card-light dark:bg-card-dark rounded-t-4xl ios-shadow-top flex flex-col max-h-[85%] z-20 animate-slide-up-lux opacity-0">
        <div className="w-full flex justify-center py-4 shrink-0">
          <div className="w-12 h-1 bg-sheet-handle rounded-full"></div>
        </div>

        <div className="px-8 pb-8 pt-2 overflow-y-auto hide-scrollbar">
          <div className="flex justify-center mb-10">
            <h2 className="font-display text-2xl tracking-luxury-lg uppercase text-slate-900 dark:text-slate-100">Your Bag</h2>
          </div>

          <div className="space-y-6">
            {bagItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 bg-card-light dark:bg-card-dark border-b border-background-light dark:border-border-dark pb-4 last:border-b-0">
                <div className="w-20 h-20 bg-background-light dark:bg-slate-700 rounded-xl overflow-hidden border border-border-light dark:border-border-dark flex items-center justify-center p-2">
                  <img alt={item.name} className="w-full h-full object-contain" src={item.imageUrl} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.name}</p>
                  <p className="text-sm text-slate-500">${item.price.toFixed(2)}</p>
                </div>
                <button className="flex flex-col items-center gap-0.5 group" onClick={() => handleRemoveItem(item.id)}>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-red-alert text-xl">cancel</span>
                  <span className="text-[8px] font-accent font-bold tracking-widest text-slate-400 uppercase">Remove</span>
                </button>
              </div>
            ))}

            {showAIAdjustment && (
              <div className="bg-background-light/80 dark:bg-card-dark rounded-2xl p-4 flex items-center justify-between border border-border-light dark:border-border-dark animate-fade-in">
                <div>
                  <p className="text-[9px] font-accent font-bold tracking-luxury-sm text-slate-900 dark:text-slate-100 uppercase">AI Adjustment:</p>
                  <p className="text-[10px] text-slate-500">Learning from your removal.</p>
                </div>
                <div className="w-5 h-5 border-2 border-slate-200 border-t-slate-400 rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[11px] font-accent font-bold tracking-luxury-lg text-slate-900 dark:text-slate-100 uppercase mb-8 border-t border-background-light dark:border-border-dark pt-6">
              Estimated Total: ${calculateTotal().toFixed(2)}
            </p>
            <button
              className="w-full bg-primary text-white font-accent font-bold text-[11px] py-5 rounded-full uppercase tracking-luxury-lg shadow-lg active:scale-[0.98] transition-all mb-8"
              onClick={handleFinalizeSelection}
              disabled={bagItems.length === 0}
            >
              Finalize Selection
            </button>
            <div className="flex flex-col items-center">
              <button className="flex items-center gap-3 text-primary dark:text-slate-100" onClick={handleContinueShopping}>
                <span className="material-symbols-outlined text-2xl">barcode_scanner</span>
                <span className="text-[13px] font-accent font-bold tracking-luxury-md uppercase">Continue Shopping</span>
              </button>
              <p className="text-[10px] text-slate-400">Re-open scanner to find more items.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pb-2 pt-4 bg-card-light dark:bg-card-dark">
          <div className="w-32 h-1 bg-sheet-handle rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagScreen;