import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants';
import styles from './ItemCaptureScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';

const ItemCaptureScreen: React.FC = () => {
  const navigate = useNavigate();
  const [itemDescription, setItemDescription] = useState<string>('');
  // const [capturedImage, setCapturedImage] = useState<string | null>(null); // State to hold captured image, not directly used in mock UI

  const handleCapturePhoto = () => {
    console.log('Capturing item:', itemDescription);
    // In a real application, this would trigger camera access and actual photo capture.
    // For this mock, immediately navigate to the confirmation screen with mock data
    navigate(RoutePath.ItemDetail.replace(':itemId', 'scanned-item-1'));
  };

  const handleCancel = () => {
    navigate(-1); // Go back
  };

  return (
    <div className={`${styles.itemCaptureScreen} animate-fade-in`}>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerIconContainer}>
            <svg className={styles.headerIcon} fill="none" height="40" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </div>
          <TextElement variant="h1" as="h1" font="display" weight="normal" spacing="luxury-lg" className={styles.appTitle}>
            Style Me
          </TextElement>
          <TextElement variant="p" spacing="luxury-xl" className={styles.screenSubtitle}>
            Item Capture
          </TextElement>
        </header>

        <div className={styles.scannerFrameContainer}>
          <div className={styles.scannerFrame}>
            <div className={styles.scannerBackground}></div>
            <div className={`${styles.scannerCorner} ${styles.topLeft}`}></div>
            <div className={`${styles.scannerCorner} ${styles.topRight}`}></div>
            <div className={`${styles.scannerCorner} ${styles.bottomLeft}`}></div>
            <div className={`${styles.scannerCorner} ${styles.bottomRight}`}></div>
            <div className={styles.clothingSilhouetteContainer}>
              <svg className={styles.clothingSilhouette} fill="none" height="260" viewBox="0 0 100 120" width="180" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 20C30 20 40 15 50 15C60 15 70 20 70 20L85 35L80 50L70 45V105H30V45L20 50L15 35L30 20Z" stroke="currentColor" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className={styles.scannerInstructions}>
              <TextElement variant="small" font="sans" weight="medium" spacing="luxury-sm" className={styles.instructionText}>
                Align Clothing Item
              </TextElement>
            </div>
          </div>
        </div>

        <div className={styles.descriptionCard}>
          <div className={styles.descriptionInputGroup}>
            <TextElement variant="label" font="sans" weight="semibold" spacing="luxury-sm" className={styles.descriptionLabel}>
              What is this piece?
            </TextElement>
            <Input
              id="item-type"
              placeholder="e.g., Silk Blazer, Blue Jeans"
              type="text"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              className={styles.descriptionInput}
            />
          </div>
        </div>

        <footer className={styles.footer}>
          <Button
            className={styles.captureButton}
            onClick={handleCapturePhoto}
            disabled={!itemDescription}
          >
            Capture Piece
          </Button>
          <Button variant="ghost" className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </Button>
        </footer>
      </main>
    </div>
  );
};

export default ItemCaptureScreen;