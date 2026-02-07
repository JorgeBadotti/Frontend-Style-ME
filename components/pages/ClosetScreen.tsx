import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CLOSET_CATEGORIES, RoutePath } from '../../constants';
import { ClothingItem } from '../../types';
import styles from './ClosetScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Button from '../atoms/Button/Button';
import ItemCard from '../molecules/ItemCard/ItemCard';
// FIX: Imported GenUIImage for use in the action panel
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

  const selectedItemIds = useMemo(() => new Set(selectedItems.map(item => item.id)), [selectedItems]);

  const isItemSelected = (itemId: string) =>
    selectedItemIds.has(itemId);

  const handleViewAll = (categoryName: string) => {
    navigate(RoutePath.WardrobeGrid.replace(':categoryName', categoryName));
  };

  return (
    <div className={`${styles.closetScreen} animate-fade-in`}>
      {/* Header with Nav and Title */}
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Button variant="ghost" className={styles.navButton} onClick={() => navigate(-1)} aria-label="Go back">
            <Icon name="chevron_left" size="lg" />
          </Button>
          <TextElement variant="h3" as="h1" font="display" weight="bold" className={styles.title}>Style-Me</TextElement>
          <Button variant="ghost" className={styles.navButton} aria-label="More options">
            <Icon name="more_horiz" size="lg" />
          </Button>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className={`${styles.scrollableContent} hide-scrollbar`}>
        {MOCK_CLOSET_CATEGORIES.map(category => (
          <div key={category.name} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <TextElement variant="h4" as="h3" font="display" weight="bold" spacing="widest" className={styles.categoryTitle}>{category.name}</TextElement>
              <Button
                variant="secondary"
                className={styles.seeAllButton}
                onClick={() => handleViewAll(category.name.toLowerCase())}
              >
                See All
              </Button>
            </div>
            <div className={`${styles.itemCardsContainer} hide-scrollbar`}>
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
      <div className={`${styles.actionPanel} animate-slide-up-lux`}>
        <div className={`${styles.actionPanelContent} ios-shadow-top`}>
          <div className={styles.sheetHandle}></div>
          <div className={styles.summarySection}>
            <div className={styles.selectedItemsPreview}>
              {selectedItems.slice(0, 3).map((item) => (
                <div key={item.id} className={styles.previewItem}>
                  {/* FIX: Replaced img tag with GenUIImage component */}
                  <GenUIImage alt="Thumb" src={item.imageUrl} className={styles.previewImage} objectFit="contain" />
                </div>
              ))}
              {selectedItems.length > 3 && (
                <div className={styles.moreItemsCount}>
                  <TextElement variant="span" font="accent" weight="bold" className={styles.moreItemsText}>+{selectedItems.length - 3}</TextElement>
                </div>
              )}
            </div>
            <TextElement variant="p" font="accent" weight="bold" spacing="wide" className={styles.selectedCountText}>
              {selectedItems.length} Item{selectedItems.length !== 1 ? 's' : ''} Selected
            </TextElement>
            <Button
              className={styles.generateButton}
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