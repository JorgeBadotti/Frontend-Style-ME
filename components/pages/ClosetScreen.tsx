import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CLOSET_CATEGORIES, RoutePath } from '../../constants';
import { ClothingItem } from '../../types';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Button from '../atoms/Button/Button';
import ItemCard from '../molecules/ItemCard/ItemCard';
import GenUIImage from '../atoms/Image/Image';

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
    <div className="relative h-full flex flex-col bg-white dark:bg-background-dark animate-fade-in">
      {/* Header with Nav and Title */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-card-light dark:bg-card-dark pt-12">
        <div className="px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" className="w-8 h-8 p-0 text-primary dark:text-slate-100" onClick={() => navigate(-1)}>
            <Icon name="chevron_left" size="lg" />
          </Button>
          <TextElement variant="h3" as="h1" font="display" weight="bold" className="text-xl text-primary dark:text-slate-100">Style-Me</TextElement>
          <Button variant="ghost" className="w-8 h-8 p-0 text-primary dark:text-slate-100">
            <Icon name="more_horiz" size="lg" />
          </Button>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark pt-28 pb-64 px-6 hide-scrollbar">
        {MOCK_CLOSET_CATEGORIES.map(category => (
          <div key={category.name} className="mb-8">
            <div className="flex justify-between items-center px-0 mb-4">
              <TextElement variant="h4" as="h3" font="display" weight="bold" spacing="widest" className="text-sm text-primary uppercase dark:text-slate-100">{category.name}</TextElement>
              <Button
                variant="secondary"
                className="px-3 py-1.5 rounded-full text-[8px] text-primary tracking-widest uppercase shadow-sm bg-card-light border border-border-light dark:bg-card-dark dark:border-border-dark dark:text-slate-100 h-auto"
                onClick={() => handleViewAll(category.name.toLowerCase())}
              >
                See All
              </Button>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              {category.items.map(item => (
                <ItemCard
                  key={item.id}
                  item={item}
                  isSelected={isItemSelected(item.id)}
                  onToggleSelect={handleItemToggle}
                  size="small" // Specific size for this view
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Floating Action Panel */}
      <div className="absolute bottom-0 left-0 right-0 z-[70] flex flex-col animate-slide-up-lux">
        <div className="bg-card-light dark:bg-card-dark rounded-t-[40px] px-6 pt-3 pb-4 ios-shadow-top">
          <div className="w-10 h-1 bg-sheet-handle rounded-full mx-auto mb-6"></div>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              {selectedItems.slice(0, 3).map((item) => (
                <div key={item.id} className="w-8 h-8 rounded-full border-2 border-card-light dark:border-card-dark bg-background-light dark:bg-card-dark flex items-center justify-center overflow-hidden shadow-sm">
                  <GenUIImage alt="Thumb" src={item.imageUrl} className="w-6 h-6" objectFit="contain" />
                </div>
              ))}
              {selectedItems.length > 3 && (
                <div className="w-8 h-8 rounded-full border-2 border-card-light bg-primary flex items-center justify-center shadow-sm -ml-3">
                  <TextElement variant="span" font="accent" weight="bold" className="text-[8px] text-card-light uppercase">+{selectedItems.length - 3}</TextElement>
                </div>
              )}
            </div>
            <TextElement variant="p" font="accent" weight="bold" spacing="wide" className="text-[10px] text-primary uppercase dark:text-slate-100">
              {selectedItems.length} Item{selectedItems.length !== 1 ? 's' : ''} Selected
            </TextElement>
            <Button
              className="bg-primary text-card-light rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg disabled:opacity-50"
              onClick={handleGenerateLook}
              icon="auto_awesome"
              disabled={selectedItems.length === 0}
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosetScreen;
