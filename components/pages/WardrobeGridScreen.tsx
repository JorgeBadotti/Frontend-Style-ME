import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_CLOSET_CATEGORIES, RoutePath } from '../../constants';
import { ClothingItem } from '../../types';
import styles from './WardrobeGridScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Button from '../atoms/Button/Button';
import GenUIImage from '../atoms/Image/Image'; // FIX: Changed Image to GenUIImage
import ItemCard from '../molecules/ItemCard/ItemCard';

const WardrobeGridScreen: React.FC = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams<{ categoryName: string }>();
  const [selectedItems, setSelectedItems] = useState<Map<string, ClothingItem>>(new Map());
  const [currentCategoryItems, setCurrentCategoryItems] = useState<ClothingItem[]>([]);

  useEffect(() => {
    if (categoryName) {
      const category = MOCK_CLOSET_CATEGORIES.find(
        cat => cat.name.toLowerCase() === categoryName.toLowerCase()
      );
      if (category) {
        setCurrentCategoryItems(category.items);
        // Pre-select items that were already marked as selected in mock data
        const initialSelected = new Map<string, ClothingItem>();
        category.items.filter(item => item.selected).forEach(item => initialSelected.set(item.id, item));
        setSelectedItems(initialSelected);
      } else {
        setCurrentCategoryItems([]);
      }
    }
  }, [categoryName]);

  const handleItemToggle = (item: ClothingItem) => {
    setSelectedItems(prev => {
      const next = new Map(prev);
      if (next.has(item.id)) {
        next.delete(item.id);
      } else {
        next.set(item.id, item);
      }
      return next;
    });
  };

  const isItemSelected = (itemId: string) =>
    selectedItems.has(itemId);

  const handleGenerateLook = () => {
    console.log('Generating look with items:', Array.from(selectedItems.values()));
    navigate(RoutePath.LookDetail.replace(':lookId', 'generated-look-from-grid'));
  };

  const currentCategoryTitle = categoryName
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    : 'Category';

  return (
    <div className={`${styles.wardrobeGridScreen} animate-fade-in`}>
      {/* Header with back button, title, item count and filter buttons */}
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.titleArea}>
            <Button variant="ghost" className={styles.backButton} onClick={() => navigate(-1)}>
              <Icon name="chevron_left" size="lg" />
            </Button>
            <TextElement variant="h2" as="h2" font="display" className={styles.categoryTitle}>
              {currentCategoryTitle} &amp; Tops
            </TextElement>
          </div>
          <TextElement variant="small" font="accent" weight="bold" spacing="widest" className={styles.itemCount}>
            {currentCategoryItems.length} Items
          </TextElement>
        </div>

        <div className={`${styles.filterButtonsContainer} hide-scrollbar`}>
          <Button variant="primary" className={styles.filterButton}>
            Color <Icon name="expand_more" size="sm" />
          </Button>
          <Button variant="secondary" className={styles.filterButton}>
            Season <Icon name="expand_more" size="sm" />
          </Button>
          <Button variant="secondary" className={styles.filterButton}>
            Fabric <Icon name="expand_more" size="sm" />
          </Button>
          <Button variant="secondary" className={styles.filterButton}>
            Style <Icon name="expand_more" size="sm" />
          </Button>
        </div>
      </div>

      {/* Item Grid */}
      <div className={`${styles.itemGridContainer} hide-scrollbar`}>
        <div className={styles.itemGrid}>
          {currentCategoryItems.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              isSelected={isItemSelected(item.id)}
              onToggleSelect={handleItemToggle}
              size="large" // Specific size for this view
            />
          ))}
        </div>
      </div>

      {/* Bottom Action Panel (similar to ClosetScreen) */}
      <div className={styles.actionPanel}>
        <div className={`${styles.actionPanelContent} ios-shadow-top`}>
          <div className={styles.sheetHandle}></div>
          <div className={styles.summarySection}>
            <div className={styles.selectedItemsPreview}>
              {Array.from(selectedItems.values()).slice(0, 3).map((item) => (
                <div key={item.id} className={styles.previewItem}>
                  <GenUIImage alt="Thumb" src={item.imageUrl} className={styles.previewImage} objectFit="contain" /> {/* FIX: Changed Image to GenUIImage */}
                </div>
              ))}
              {selectedItems.size > 3 && (
                <div className={styles.moreItemsCount}>
                  <TextElement variant="span" font="accent" weight="bold" className={styles.moreItemsText}>+{selectedItems.size - 3}</TextElement>
                </div>
              )}
            </div>
            <TextElement variant="p" font="accent" weight="bold" spacing="widest" className={styles.selectedCountText}>
              {selectedItems.size} Item{selectedItems.size !== 1 ? 's' : ''} Selected
            </TextElement>
            <Button
              className={styles.generateButton}
              onClick={handleGenerateLook}
              icon="auto_awesome"
              disabled={selectedItems.size === 0}
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobeGridScreen;