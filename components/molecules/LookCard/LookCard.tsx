import React from 'react';
import styles from './LookCard.module.css';
import GenUIImage from '../../atoms/Image/Image';
import TextElement from '../../atoms/TextElement/TextElement';
import Button from '../../atoms/Button/Button';

interface LookCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  lookId: string;
  onLookClick: (lookId: string) => void;
}

const LookCard: React.FC<LookCardProps> = ({ imageUrl, title, subtitle, lookId, onLookClick }) => {
  return (
    <div className={styles.lookCard}>
      <div className={styles.imageWrapper}>
        <GenUIImage alt={title} src={imageUrl} className={styles.image} />
        <div className={styles.buttonContainer}>
          <Button
            className={styles.actionButton}
            onClick={() => onLookClick(lookId)}
          >
            I'll wear this today
          </Button>
        </div>
      </div>
      <div className={styles.textContainer}>
        <TextElement variant="h4" as="h4" font="accent" weight="bold" spacing="luxury-sm" className={styles.title}>
          {title}
        </TextElement>
        <TextElement variant="small" font="accent" spacing="luxury-sm" className={styles.subtitle}>
          {subtitle}
        </TextElement>
      </div>
    </div>
  );
};

export default LookCard;