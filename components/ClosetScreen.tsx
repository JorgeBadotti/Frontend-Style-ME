import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CLOSET_CATEGORIES, RoutePath } from '../constants';
import { ClothingItem } from '../types';

interface ClosetScreenProps {}

const ClosetScreen: React.FC<ClosetScreenProps> = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<ClothingItem[]>([]);

  const handleItemToggle = (item: ClothingItem) => {
    setSelectedItems(prev =>
      prev.some(selected => selected.id === item.id)
        ? prev.filter(selected => selected.id !== item.id)
        : [...prev, item]
    );
  };

  const handleGenerateLook = () => {
    console.log('Generating look with items:', selectedItems);
    // Navigate to a look generation/detail screen, perhaps passing selected item IDs
    navigate(RoutePath.LookDetail.replace(':lookId', 'new-generated-look')); // Mock navigation
  };

  const isItemSelected = (itemId: string) =>
    selectedItems.some(item => item.id === itemId);

  const handleViewAll = (categoryName: string) => {
    navigate(RoutePath.WardrobeGrid.replace(':categoryName', categoryName));
  };

  return (
    <div className="relative h-full flex flex-col bg-background-light dark:bg-background-dark animate-fade-in">
      {/* Header with Nav and Title */}
      <div className="absolute top-0 left-0 right-0 z-[55] bg-card-light dark:bg-card-dark pt-12">
        <div className="px-6 py-4 flex items-center justify-between">
          <button className="w-8 h-8 flex items-center justify-center text-primary dark:text-slate-100" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h1 className="font-display text-xl text-primary dark:text-slate-100 font-bold">Style-Me</h1>
          <button className="w-8 h-8 flex items-center justify-center text-primary dark:text-slate-100">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark pt-28 pb-64 px-6">
        {MOCK_CLOSET_CATEGORIES.map(category => (
          <div key={category.name} className="mb-8">
            <div className="flex justify-between items-center px-0 mb-4">
              <h3 className="font-display text-sm tracking-widest text-primary dark:text-slate-100 uppercase font-bold">{category.name}</h3>
              <button
                className="bg-card-light dark:bg-card-dark px-3 py-1.5 rounded-full border border-border-light dark:border-border-dark text-[8px] font-accent font-bold text-primary dark:text-slate-100 tracking-widest uppercase shadow-sm"
                onClick={() => handleViewAll(category.name.toLowerCase())}
              >
                See All
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              {category.items.map(item => (
                <button
                  key={item.id}
                  className={`flex-shrink-0 w-32 h-40 bg-card-light dark:bg-card-dark rounded-xl p-3 flex flex-col items-center justify-center shadow-sm relative transition-all duration-200 ${
                    isItemSelected(item.id) ? 'border-2 border-primary' : 'border border-transparent'
                  }`}
                  onClick={() => handleItemToggle(item)}
                >
                  {isItemSelected(item.id) && (
                    <div className="absolute top-1.5 right-1.5 bg-primary rounded-full w-4 h-4 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[10px] font-bold">check</span>
                    </div>
                  )}
                  <img alt={item.name} className="w-full h-24 object-contain mb-3" src={item.imageUrl} />
                  <p className="text-[9px] font-accent font-bold tracking-widest text-primary dark:text-slate-100 uppercase text-center">{item.name}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Floating Action Panel */}
      <div className="absolute bottom-0 left-0 right-0 z-[70] flex flex-col animate-slide-up-lux opacity-0">
        <div className="bg-card-light dark:bg-card-dark rounded-t-3xl ios-shadow-top px-6 pt-3 pb-4">
          <div className="w-10 h-1 bg-sheet-handle rounded-full mx-auto mb-6"></div> {/* Sheet handle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {selectedItems.slice(0, 3).map((item, index) => (
                  <div key={item.id} className="w-8 h-8 rounded-full border-2 border-white bg-background-light dark:bg-card-dark flex items-center justify-center overflow-hidden shadow-sm">
                    <img alt="Thumb" className="w-6 h-6 object-contain" src={item.imageUrl} />
                  </div>
                ))}
                {selectedItems.length > 3 && (
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center shadow-sm">
                    <span className="text-[8px] font-accent font-bold text-white uppercase">+{selectedItems.length - 3}</span>
                  </div>
                )}
              </div>
              <p className="text-[10px] font-accent font-bold tracking-wide text-primary dark:text-slate-100 uppercase">
                {selectedItems.length} Item{selectedItems.length !== 1 ? 's' : ''} Selected
              </p>
            </div>
            <button
              className="bg-primary text-white rounded-full px-5 py-2.5 flex items-center gap-2 active:scale-95 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleGenerateLook}
              disabled={selectedItems.length === 0}
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              <span className="text-[9px] font-accent font-bold tracking-widest uppercase">Generate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosetScreen;