import React from 'react';
import styles from './BottomSheet.module.css';
import { useBottomSheetLogic } from './BottomSheet.hooks';

interface BottomSheetProps {
  children: React.ReactNode;
  initialState?: 'collapsed' | 'half' | 'full';
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ children, initialState = 'half' }) => {
  const {
    sheetRef,
    state,
    offsetY,
    isDragging,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    height
  } = useBottomSheetLogic(initialState);

  // Apply inline styles for dynamic height/transform during drag
  const style = {
    height,
    transform: isDragging ? `translateY(${offsetY}px)` : 'translateY(0)',
    transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
  };

  return (
    <div
      className={styles.container}
      ref={sheetRef}
      style={style}
    >
      <div
        className={styles.handleContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.handle} />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
