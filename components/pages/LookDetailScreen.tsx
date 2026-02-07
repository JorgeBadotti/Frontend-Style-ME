import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOCK_LOOK_SUGGESTION, RoutePath } from '../../constants';
import FeedbackModal from '../FeedbackModal'; // Correct path
import styles from './LookDetailScreen.module.css'; // Import styles
import Icon from '../atoms/Icon/Icon';
import TextElement from '../atoms/TextElement/TextElement';
import Button from '../atoms/Button/Button';
import GenUIImage from '../atoms/Image/Image';

interface LookDetailScreenProps {
  // We can pass a prop `lookId` or fetch from URL params
}

export const LookDetailScreen: React.FC<LookDetailScreenProps> = () => { // Changed to named export
  const navigate = useNavigate();
  const { lookId } = useParams<{ lookId: string }>();
  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);
  const [isWorn, setIsWorn] = useState<boolean>(false); // New state for "Mark as Worn" functionality

  // In a real app, fetch look details based on lookId
  const look = MOCK_LOOK_SUGGESTION; // Using mock data for now

  if (!look) {
    return (
      <div className={`${styles.lookNotFoundContainer} animate-fade-in`}>
        <TextElement variant="p" className={styles.lookNotFoundText}>Look not found.</TextElement>
        <Button variant="ghost" onClick={() => navigate(-1)} className={styles.goBackButton}>
          Go Back
        </Button>
      </div>
    );
  }

  const handleLookAction = (action: 'like' | 'dislike' | 'wear') => {
    if (action === 'dislike') {
      console.log(`User disliked look: ${look.name}`);
      setShowFeedbackModal(true);
    } else if (action === 'wear') {
      console.log(`User marked look as worn: ${look.name}`);
      setIsWorn(true); // Mark as worn
      alert(`Look "${look.name}" marcado como usado!`); // Confirmation message
      // Optionally navigate away or update UI without immediate navigation
      // navigate(RoutePath.Home); 
    } else if (action === 'like') {
      console.log(`User liked look: ${look.name}`);
      alert(`Look "${look.name}" salvo nos favoritos!`);
      // navigate(RoutePath.Home); // Go back to home after action
    }
  };

  const handleItemDetailClick = (itemId: string) => {
    navigate(RoutePath.ItemDetail.replace(':itemId', itemId));
  };

  const handleFeedbackSubmit = (feedback: string[]) => {
    console.log('Feedback submitted:', feedback);
    // Process feedback, then dismiss modal
    setShowFeedbackModal(false);
    navigate(RoutePath.Home); // Navigate away or update UI
  };

  return (
    <div className={`${styles.lookDetailScreen} animate-fade-in`}>
      {/* Full-width Image Carousel (single image for simplicity) */}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <GenUIImage alt={look.name} src={look.imageUrl} className={styles.lookImage} />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>

      {/* Header for Style Me branding */}
      <header className={styles.header}>
        <TextElement variant="h1" as="h1" font="display" weight="bold" spacing="luxury-lg" className={styles.appTitle}>STYLE ME</TextElement>
      </header>

      {/* Bottom Sheet for Look Details */}
      <div className={`${styles.bottomSheet} ios-shadow-top animate-slide-up-lux`}>
        <div className={styles.sheetHandleContainer}>
          <div className={styles.sheetHandle}></div>
        </div>

        <div className={`${styles.scrollableContent} hide-scrollbar`}>
          <div className={styles.lookInfo}>
            <div>
              <TextElement variant="h2" as="h2" font="display" weight="bold" className={styles.lookName}>{look.name}</TextElement>
              <TextElement variant="small" font="accent" weight="bold" spacing="luxury-sm" className={styles.lookOccasion}>{look.occasion}</TextElement>
            </div>
            <div className={styles.matchScoreContainer}>
              <TextElement variant="h2" as="span" font="display" weight="bold" className={styles.matchScore}>{look.matchScore}%</TextElement>
              <TextElement variant="small" font="accent" weight="medium" spacing="luxury-sm" className={styles.matchScoreLabel}>Match Score</TextElement>
            </div>
          </div>

          <div className={styles.reasoningCard}>
            <div className={styles.reasoningHeader}>
              <Icon name="auto_awesome" size="sm" className={styles.reasoningIcon} />
              <TextElement variant="small" font="accent" weight="bold" spacing="luxury-sm" className={styles.reasoningTitle}>Style AI Reasoning</TextElement>
            </div>
            <TextElement variant="p" className={styles.reasoningText}>
              {look.reasoning}
            </TextElement>
          </div>

          <div className={styles.itemBreakdownSection}>
            <TextElement variant="small" font="accent" weight="bold" spacing="luxury-sm" className={styles.itemBreakdownTitle}>Item Breakdown</TextElement>
            {look.items.map(item => (
              <div key={item.id} className={styles.itemDetailCard} onClick={() => handleItemDetailClick(item.id)}>
                <div className={styles.itemDetailContent}>
                  <div className={styles.itemImageWrapper}>
                    <GenUIImage src={item.imageUrl} alt={item.name} className={styles.itemImage} />
                  </div>
                  <div>
                    <TextElement variant="p" weight="semibold" className={styles.itemName}>{item.name}</TextElement>
                    <TextElement variant="small" className={styles.itemSource}>{item.source === 'mine' ? 'Your Wardrobe' : 'The Row Collection'}</TextElement>
                  </div>
                </div>
                <Icon name="arrow_forward_ios" size="md" className={styles.itemDetailArrow} />
              </div>
            ))}
          </div>

          <div className={styles.actionButtonsContainer}>
            <div className={styles.feedbackButtons}>
              <Button
                variant="secondary"
                className={styles.feedbackButton}
                onClick={() => handleLookAction('dislike')}
                aria-label="Dislike look"
              >
                <Icon name="thumb_down" size="md" />
              </Button>
              <Button
                variant="secondary"
                className={styles.feedbackButton}
                onClick={() => handleLookAction('like')}
                aria-label="Like look"
              >
                <Icon name="favorite" size="md" />
              </Button>
            </div>
            <Button
              className={`${styles.wearButton} ${isWorn ? styles.wornButton : ''}`}
              onClick={() => handleLookAction('wear')}
              disabled={isWorn} // Disable if already worn
            >
              {isWorn ? 'Look Marcado como Usado!' : 'É o meu Look!'}
            </Button>
          </div>
        </div>
      </div>

      {showFeedbackModal && (
        <FeedbackModal
          onClose={() => setShowFeedbackModal(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default LookDetailScreen;