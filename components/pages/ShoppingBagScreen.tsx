import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BAG_ITEMS, RoutePath } from '../../constants';
import { BagItem } from '../../types';
import styles from './ShoppingBagScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Button from '../atoms/Button/Button';
import GenUIImage from '../atoms/Image/Image'; // FIX: Changed Image to GenUIImage

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
    <div className={`${styles.shoppingBagScreen} animate-fade-in`}>
      {/* Background Image (simulated from a previous screen) */}
      <div className={styles.backgroundImageContainer}>
        <GenUIImage // FIX: Changed Image to GenUIImage
          alt="High Fashion Outfit"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCltnMpvuznHnzsZyT25M7ZRB37PzP6c3N3G-aOqCClIJB9gN6qGqX5rN362zclRU_GJjegf4Y9d0ODwVGpRwO7lKjz0VCCkucpbVz2YFjPDF_vxz--UHvhQIcSUOkqiptCoCn7e2Pop6vcrfspA6dj6x-arN7gCIyINZ5IOKqDRHGJFVwoaEkXWls49xmBnlftxG8UE-i3LwZJuuYaGFN-Ansc56maJVIDMBZAWuw4mA2qbgtFu0ObKtmH0ZB603NnkwCP5wIpQGKa"
          className={styles.backgroundImage}
          blur
        />
        <div className={styles.backgroundImageOverlay}></div>
      </div>

      {/* Top action bar, blurred from underlying content */}
      <div className={styles.topActionBar}>
        <Button variant="iconOnly" className={styles.actionButton} aria-label="Go back">
          <Icon name="arrow_back_ios_new" />
        </Button>
        <Button variant="iconOnly" className={styles.actionButton} aria-label="Add to favorites">
          <Icon name="favorite" />
        </Button>
      </div>

      {/* Shopping Bag Sheet */}
      <div className={`${styles.shoppingBagSheet} ios-shadow-top animate-slide-up-lux`}>
        <div className={styles.sheetHandleContainer}>
          <div className={styles.sheetHandle}></div>
        </div>

        <div className={`${styles.scrollableContent} hide-scrollbar`}>
          <div className={styles.bagHeader}>
            <TextElement variant="h2" as="h2" font="display" spacing="luxury-lg" className={styles.bagTitle}>Your Bag</TextElement>
          </div>

          <div className={styles.bagItemsList}>
            {bagItems.map(item => (
              <div key={item.id} className={styles.bagItem}>
                <div className={styles.itemImageContainer}>
                  <GenUIImage alt={item.name} src={item.imageUrl} className={styles.itemImage} objectFit="contain" /> {/* FIX: Changed Image to GenUIImage */}
                </div>
                <div className={styles.itemDetails}>
                  <TextElement variant="p" weight="medium" className={styles.itemName}>{item.name}</TextElement>
                  <TextElement variant="p" className={styles.itemPrice}>${item.price.toFixed(2)}</TextElement>
                </div>
                <Button variant="ghost" className={styles.removeItemButton} onClick={() => handleRemoveItem(item.id)}>
                  <Icon name="cancel" className={styles.removeIcon} />
                  <TextElement variant="small" font="accent" weight="bold" spacing="widest" className={styles.removeText}>Remove</TextElement>
                </Button>
              </div>
            ))}

            {showAIAdjustment && (
              <div className={`${styles.aiAdjustmentCard} animate-fade-in`}>
                <div>
                  <TextElement variant="small" font="accent" weight="bold" spacing="luxury-sm" className={styles.aiAdjustmentTitle}>AI Adjustment:</TextElement>
                  <TextElement variant="small" className={styles.aiAdjustmentText}>Learning from your removal.</TextElement>
                </div>
                <div className={`${styles.loadingSpinner} animate-spin-slow`}></div>
              </div>
            )}
          </div>

          <div className={styles.summarySection}>
            <TextElement variant="p" font="accent" weight="bold" spacing="luxury-lg" className={styles.totalText}>
              Estimated Total: ${calculateTotal().toFixed(2)}
            </TextElement>
            <Button
              className={styles.finalizeButton}
              onClick={handleFinalizeSelection}
              disabled={bagItems.length === 0}
            >
              Finalize Selection
            </Button>
            <div className={styles.continueShoppingContainer}>
              <Button variant="ghost" className={styles.continueShoppingButton} onClick={handleContinueShopping}>
                <Icon name="barcode_scanner" size="lg" />
                <TextElement variant="p" font="accent" weight="bold" spacing="luxury-md" className={styles.continueShoppingText}>Continue Shopping</TextElement>
              </Button>
              <TextElement variant="small" className={styles.scannerHint}>Re-open scanner to find more items.</TextElement>
            </div>
          </div>
        </div>
        <div className={styles.homeIndicatorSpace}>
          <div className={styles.sheetHandleBottom}></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBagScreen;