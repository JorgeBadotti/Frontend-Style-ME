import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_CLOSET_CATEGORIES, RoutePath } from '../constants';
import { ClothingItem } from '../types';

const WardrobeGridScreen: React.FC = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams<{ categoryName: string }>();
  const [selectedItems, setSelectedItems] = useState<ClothingItem[]>([]);
  const [currentCategoryItems, setCurrentCategoryItems] = useState<ClothingItem[]>([]);

  useEffect(() => {
    if (categoryName) {
      const category = MOCK_CLOSET_CATEGORIES.find(
        cat => cat.name.toLowerCase() === categoryName.toLowerCase()
      );
      if (category) {
        setCurrentCategoryItems(category.items);
        // Pre-select items that were already marked as selected in mock data
        setSelectedItems(category.items.filter(item => item.selected));
      } else {
        setCurrentCategoryItems([]);
      }
    }
  }, [categoryName]);

  const handleItemToggle = (item: ClothingItem) => {
    setSelectedItems(prev =>
      prev.some(selected => selected.id === item.id)
        ? prev.filter(selected => selected.id !== item.id)
        : [...prev, item]
    );
  };

  const isItemSelected = (itemId: string) =>
    selectedItems.some(item => item.id === itemId);

  const handleGenerateLook = () => {
    console.log('Generating look with items:', selectedItems);
    navigate(RoutePath.LookDetail.replace(':lookId', 'generated-look-from-grid'));
  };

  const currentCategoryTitle = categoryName
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    : 'Category';

  return (
    <div className="relative h-full flex flex-col bg-background-light dark:bg-background-dark animate-fade-in">
      {/* Header with back button, title, item count and filter buttons */}
      <div className="absolute top-0 left-0 right-0 z-[55] bg-card-light dark:bg-card-dark pt-12">
        <div className="px-6 pt-4 pb-4 border-b border-background-light dark:border-border-dark bg-card-light dark:bg-card-dark">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full flex items-center justify-center bg-background-light dark:bg-card-dark text-primary dark:text-slate-100 active:bg-slate-200" onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <h2 className="font-display text-2xl text-primary dark:text-slate-100">
                {currentCategoryTitle} &amp; Tops
              </h2>
            </div>
            <span className="text-[10px] font-accent font-bold text-text-muted tracking-widest uppercase">
              {currentCategoryItems.length} Items
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            <button className="flex-shrink-0 px-4 py-2 bg-primary text-white rounded-full text-[9px] font-accent font-bold tracking-widest uppercase flex items-center gap-2 shadow-md">
              Color <span className="material-symbols-outlined text-[12px]">expand_more</span>
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-background-light dark:bg-card-dark text-primary dark:text-slate-100 rounded-full text-[9px] font-accent font-bold tracking-widest uppercase flex items-center gap-2 border border-transparent">
              Season <span className="material-symbols-outlined text-[12px]">expand_more</span>
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-background-light dark:bg-card-dark text-primary dark:text-slate-100 rounded-full text-[9px] font-accent font-bold tracking-widest uppercase flex items-center gap-2 border border-transparent">
              Fabric <span className="material-symbols-outlined text-[12px]">expand_more</span>
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-background-light dark:bg-card-dark text-primary dark:text-slate-100 rounded-full text-[9px] font-accent font-bold tracking-widest uppercase flex items-center gap-2 border border-transparent">
              Style <span className="material-symbols-outlined text-[12px]">expand_more</span>
            </button>
          </div>
        </div>
      </div>

      {/* Item Grid */}
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 pt-48">
        <div className="grid grid-cols-2 gap-4 pb-52">
          {currentCategoryItems.map(item => (
            <button
              key={item.id}
              className={`aspect-[3/4] bg-card-light dark:bg-card-dark rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm relative transition-all duration-200 ${
                isItemSelected(item.id) ? 'border-2 border-primary' : 'border border-background-light dark:border-border-dark'
              }`}
              onClick={() => handleItemToggle(item)}
            >
              {isItemSelected(item.id) && (
                <div className="absolute top-2 right-2 bg-primary rounded-full w-5 h-5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
                </div>
              )}
              <img alt={item.name} className="w-full h-28 object-contain mb-3" src={item.imageUrl} />
              <p className="text-[9px] font-accent font-bold tracking-widest text-primary dark:text-slate-100 uppercase text-center">{item.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Action Panel (similar to ClosetScreen) */}
      <div className="absolute bottom-0 left-0 right-0 z-[70] flex flex-col">
        <div className="bg-card-light dark:bg-card-dark rounded-t-3xl ios-shadow-top px-8 pt-3 pb-6">
          <div className="w-12 h-1 bg-sheet-handle rounded-full mx-auto mb-4"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {selectedItems.slice(0, 3).map((item) => (
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
              <p className="text-[10px] font-accent font-bold tracking-widest text-primary dark:text-slate-100 uppercase">
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

export default WardrobeGridScreen;