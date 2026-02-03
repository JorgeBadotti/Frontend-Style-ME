import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../constants';
import styles from './BodyPhotoCaptureScreen.module.css';
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Button from '../atoms/Button/Button';

const BodyPhotoCaptureScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleCapturePhoto = () => {
    // In a real app, this would trigger camera access and photo capture.
    console.log('Capturing body photo...');
    // After capture, perhaps navigate to a confirmation or upload screen, or back to profile
    navigate(RoutePath.Profile);
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous screen
  };

  return (
    <div className={`${styles.bodyPhotoCaptureScreen} animate-fade-in`}>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerIconContainer}>
            <svg className={styles.headerIcon} fill="none" height="36" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 2C24 2 20 2 20 6C20 8 22 9 24 9C26 9 28 8 28 6C28 2 24 2 24 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
              <path d="M24 9V14M24 14L4 30H44L24 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
            </svg>
          </div>
          <TextElement variant="h2" as="h1" font="display" weight="normal" spacing="luxury-lg" className={styles.appTitle}>
            Style Me
          </TextElement>
          <TextElement variant="p" spacing="luxury-xl" className={styles.screenSubtitle}>
            Foto de Perfil do Usuário
          </TextElement>
        </header>

        <div className={styles.scannerContainer}>
          <div className={styles.scannerFrame}>
            <div className={styles.scannerBackground}></div>
            <div className={`${styles.scannerCorner} ${styles.topLeft}`}></div>
            <div className={`${styles.scannerCorner} ${styles.topRight}`}></div>
            <div className={`${styles.scannerCorner} ${styles.bottomLeft}`}></div>
            <div className={`${styles.scannerCorner} ${styles.bottomRight}`}></div>
            <div className={styles.bodySilhouetteContainer}>
              <svg className={styles.bodySilhouette} fill="none" height="300" viewBox="0 0 100 200" width="150" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="25" r="12" stroke="currentColor"></circle>
                <path d="M35 45C35 45 40 40 50 40C60 40 65 45 65 45L75 80L70 85L62 65V180H38V65L30 85L25 80L35 45Z" stroke="currentColor"></path>
              </svg>
            </div>
            <div className={styles.scannerInstructions}>
              <TextElement variant="small" font="sans" weight="medium" spacing="luxury-sm" className={styles.instructionText}>
                POSITION IN FRONT OF A MIRROR
              </TextElement>
              <div className={styles.instructionDivider}></div>
              <TextElement variant="small" font="sans" weight="medium" spacing="luxury-sm" className={styles.instructionText}>
                ASK A SALESPERSON FOR HELP
              </TextElement>
            </div>
          </div>
          <div className={styles.captureButtonOuter}>
            <Button className={styles.captureButtonInner}>
              <div className={styles.captureButtonDot}></div>
            </Button>
          </div>
        </div>

        <div className={styles.hintCard}>
          <TextElement variant="small" font="sans" weight="medium" spacing="luxury-sm" className={styles.hintText}>
            HOLD YOUR PHONE AT CHEST HEIGHT
          </TextElement>
        </div>

        <footer className={styles.footer}>
          <Button
            className={styles.mainCaptureButton}
            onClick={handleCapturePhoto}
          >
            Capture Photo
          </Button>
          <Button variant="ghost" className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </Button>
        </footer>
      </main>
    </div>
  );
};

export default BodyPhotoCaptureScreen;