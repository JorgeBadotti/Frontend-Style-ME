import React from 'react';
import { useLookDetailLogic } from './LookDetailScreen.hooks';
import FeedbackModal from '../../FeedbackModal';
import styles from './LookDetailScreen.module.css';
import Icon from '../../atoms/Icon/Icon';
import TextElement from '../../atoms/TextElement/TextElement';
import Button from '../../atoms/Button/Button';
import GenUIImage from '../../atoms/Image/Image';
import { BottomSheet } from '../../organisms/BottomSheet';

export const LookDetailScreen = () => {
  const {
    look,
    showFeedbackModal,
    isWorn,
    handleLookAction,
    handleItemDetailClick,
    handleFeedbackSubmit,
    handleGoBack,
    handleCloseFeedbackModal
  } = useLookDetailLogic();

  if (!look) {
    return (
      <div className={`${styles.lookNotFoundContainer} animate-fade-in`}>
        <TextElement variant="p" className={styles.lookNotFoundText}>Look not found.</TextElement>
        <Button variant="ghost" onClick={handleGoBack} className={styles.goBackButton}>
          Go Back
        </Button>
      </div>
    );
  }

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

      {/* Replaced manual bottom sheet implementation with new atomic Organism */}
      <BottomSheet initialState="half">
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
              >
                <Icon name="thumb_down" size="md" />
              </Button>
              <Button
                variant="secondary"
                className={styles.feedbackButton}
                onClick={() => handleLookAction('like')}
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
      </BottomSheet>

      {showFeedbackModal && (
        <FeedbackModal
          onClose={handleCloseFeedbackModal}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};
