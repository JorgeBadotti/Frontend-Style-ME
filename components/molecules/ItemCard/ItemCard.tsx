import React from 'react';
import styles from './ItemCard.module.css';
import { ClothingItem } from '../../../types';
import GenUIImage from '../../atoms/Image/Image'; // FIX: Changed Image to GenUIImage
import TextElement from '../../atoms/TextElement/TextElement';
import Icon from '../../atoms/Icon/Icon';

interface ItemCardProps {
  item: ClothingItem;
  isSelected: boolean;
  onToggleSelect: (item: ClothingItem) => void;
  size?: 'small' | 'large'; // Added size prop
}

const ItemCard: React.FC<ItemCardProps> = ({ item, isSelected, onToggleSelect, size = 'small' }) => {
  const cardClasses = [
    styles.itemCard,
    styles[size],
    isSelected ? styles.selected : '',
  ].filter(Boolean).join(' ');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const imageSize = size === 'small' ? 'medium' : 'large'; // Control image size based on card size

  return (
    <button className={cardClasses} onClick={() => onToggleSelect(item)}>
      {isSelected && (
        <div className={styles.checkmark}>
          <Icon name="check" size="xs" className={styles.checkmarkIcon} />
        </div>
      )}
      <div className={styles.imageContainer}>
        <GenUIImage alt={item.name} src={item.imageUrl} className={styles.itemImage} objectFit="contain" /> {/* FIX: Changed Image to GenUIImage */}
      </div>
      <TextElement variant="small" font="accent" weight="bold" spacing="widest" className={styles.itemName}>
        {item.name}
      </TextElement>
    </button>
  );
};

export default ItemCard;