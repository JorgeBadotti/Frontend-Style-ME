import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_ITEM_DETAILS } from '../../constants';
import styles from './ItemDetailSheet.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Button from '../atoms/Button/Button';
import GenUIImage from '../atoms/Image/Image'; // FIX: Changed Image to GenUIImage

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
      <div className={`${styles.itemNotFoundContainer} animate-fade-in`}>
        <TextElement variant="p" className={styles.itemNotFoundText}>Item not found.</TextElement>
        <Button variant="ghost" onClick={handleDismiss} className={styles.goBackButton}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.itemDetailSheet}>
      {/* Background Overlay */}
      <div className={`${styles.overlay} animate-fade-in`} onClick={handleDismiss}></div>

      {/* Item Image in Background */}
      <div className={styles.backgroundImage}>
        <GenUIImage // FIX: Changed Image to GenUIImage
          alt="High Fashion Editorial"
          src={item.imageUrl}
          className={styles.backgroundImageActual}
          blur
        />
        <div className={styles.backgroundImageOverlay}></div>
      </div>

      {/* Top Controls (blurred, simulating underlying screen) */}
      <div className={styles.topControls}>
        <div className={styles.topControlGroup}>
          <Icon name="close" size="xl" className={styles.controlIcon} />
          <TextElement variant="h3" as="span" weight="bold" spacing="widest" className={styles.brandTitle}>Style Me</TextElement>
          <Icon name="share" size="xl" className={styles.controlIcon} />
        </div>
      </div>

      {/* Bottom Sheet Modal Content */}
      <div className={`${styles.bottomSheet} ios-shadow-top animate-slide-up-lux`}>
        <div className={styles.sheetHandleContainer}>
          <div className={styles.sheetHandle}></div>
          <TextElement variant="small" font="sans" weight="medium" spacing="luxury-lg" className={styles.swipeDismissText}>Swipe down to dismiss</TextElement>
        </div>

        <div className={styles.sheetHeader}>
          <TextElement variant="h3" font="sans" weight="bold" spacing="widest" className={styles.sheetTitle}>
            Item Details
          </TextElement>
        </div>

        <div className={styles.detailsList}>
          <div className={styles.detailItem}>
            <TextElement variant="label" font="sans" weight="bold" spacing="luxury-lg" className={styles.detailLabel}>Material</TextElement>
            <TextElement variant="p" font="display" weight="medium" spacing="wide" className={styles.detailValue}>{item.material}</TextElement>
          </div>
          <div className={styles.detailItem}>
            <TextElement variant="label" font="sans" weight="bold" spacing="luxury-lg" className={styles.detailLabel}>Fit</TextElement>
            <TextElement variant="p" font="display" weight="medium" spacing="wide" className={styles.detailValue}>{item.fit}</TextElement>
          </div>
          <div className={styles.detailItem}>
            <TextElement variant="label" font="sans" weight="bold" spacing="luxury-lg" className={styles.detailLabel}>Color</TextElement>
            <div className={styles.colorDisplay}>
              <div className={styles.colorSwatch}></div> {/* Dynamic color based on item.color */}
              <TextElement variant="p" font="display" weight="medium" spacing="wide" className={styles.detailValue}>{item.color}</TextElement>
            </div>
          </div>
          <div className={styles.detailItem}>
            <TextElement variant="label" font="sans" weight="bold" spacing="luxury-lg" className={styles.detailLabel}>Care</TextElement>
            <TextElement variant="p" font="display" weight="medium" spacing="wide" className={styles.detailValue}>{item.care}</TextElement>
          </div>
        </div>

        <div className={styles.actionButtonContainer}>
          <Button className={styles.addToLookButton} onClick={handleAddToMyLook}>
            Add to my look
          </Button>
        </div>
        <div className={styles.homeIndicatorSpace}></div>
      </div>
    </div>
  );
};

export default ItemDetailSheet;