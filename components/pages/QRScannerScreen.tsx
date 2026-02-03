import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants';
import styles from './QRScannerScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';

const QRScannerScreen: React.FC = () => {
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState<string>('');

  const handleCancel = () => {
    navigate(-1); // Go back to the previous screen
  };

  // In a real app, camera feed would be here and QR code detection logic.
  // Upon successful scan, it would navigate to a confirmation or detail screen.
  const handleSimulateScan = () => {
    console.log('Simulating QR scan for occasion:', occasion);
    // In a real app, this would get the scanned item ID
    navigate(RoutePath.ItemDetail.replace(':itemId', 'scanned-qr-item-1'));
  };

  return (
    <div className={`${styles.qrScannerScreen} animate-fade-in`}>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerIconContainer}>
            <svg className={styles.headerIcon} fill="none" height="36" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <TextElement variant="h1" as="h1" font="display" weight="normal" spacing="luxury-lg" className={styles.appTitle}>
            Style Me
          </TextElement>
          <TextElement variant="p" spacing="luxury-xl" className={styles.screenSubtitle}>
            Personal Styling
          </TextElement>
        </header>

        <div className={styles.scannerContainer}>
          <div className={styles.scannerFrame} onClick={handleSimulateScan}>
            <div className={styles.scannerBackground}>
              <Icon name="camera" className={styles.cameraIcon} size="xl" />
            </div>
            <div className={styles.scannerOverlay}>
              <div className={`${styles.qrScannerCorner} ${styles.topLeft}`}></div>
              <div className={`${styles.qrScannerCorner} ${styles.topRight}`}></div>
              <div className={`${styles.qrScannerCorner} ${styles.bottomLeft}`}></div>
              <div className={`${styles.qrScannerCorner} ${styles.bottomRight}`}></div>
              <div className={`${styles.scanningLine} animate-scan-line`}></div>
              <div className={styles.scannerInstructions}>
                <TextElement variant="small" font="sans" weight="semibold" spacing="luxury-md" className={styles.instructionTitle}>
                  Align QR Code Within Frame
                </TextElement>
                <TextElement variant="p" className={styles.instructionText}>
                  Scan the item tag to add it to your fitting room or see more details.
                </TextElement>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.occasionCard}>
          <div className={styles.occasionInputGroup}>
            <TextElement variant="label" font="sans" weight="semibold" spacing="luxury-md" className={styles.occasionLabel}>
              What is the occasion?
            </TextElement>
            <Input
              id="occasion"
              placeholder="Enter occasion (e.g., Wedding, Party)"
              type="text"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className={styles.occasionInput}
            />
          </div>
        </div>

        <footer className={styles.footer}>
          <Button variant="ghost" className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </Button>
        </footer>
      </main>
    </div>
  );
};

export default QRScannerScreen;