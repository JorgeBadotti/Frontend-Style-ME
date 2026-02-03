import React from 'react';
import { useLookDetailLogic } from './LookDetailScreen.hooks';
import FeedbackModal from '../../FeedbackModal'; // Ajustado para subir dois níveis
import styles from './LookDetailScreen.module.css';
import Icon from '../../../atoms/Icon/Icon'; // Ajustado para o caminho correto dos átomos
import TextElement from '../../../atoms/TextElement/TextElement';
import Button from '../../../atoms/Button/Button';
import GenUIImage from '../../../atoms/Image/Image';

export const LookDetailScreen: React.FC = () => {
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
      {/* ... Resto do JSX mantido conforme sua estrutura anterior ... */}
      
      {showFeedbackModal && (
        <FeedbackModal
          onClose={handleCloseFeedbackModal}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default LookDetailScreen;
