import { useState, useRef, useEffect, TouchEvent } from 'react';

export const useBottomSheetLogic = (initialState: 'collapsed' | 'half' | 'full' = 'half') => {
  const [state, setState] = useState<'collapsed' | 'half' | 'full'>(initialState);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);
  const sheetRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Constants for thresholds (could be props)
  const SCREEN_HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 800;
  const SNAP_THRESHOLDS = {
    collapsed: SCREEN_HEIGHT * 0.85, // 15% visible
    half: SCREEN_HEIGHT * 0.5,      // 50% visible
    full: 0,                        // 100% visible (top)
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    startY.current = e.touches[0].clientY;
    currentY.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touchY = e.touches[0].clientY;
    const deltaY = touchY - startY.current;

    // Prevent dragging up past the top (negative offset) if already full
    // Simple logic: update offset
    setOffsetY(deltaY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Determine next state based on drag direction and magnitude
    // This is a simplified logic. In production, velocity would also be considered.
    const dragDistance = offsetY;
    const dragThreshold = 50; // pixels to trigger state change

    let nextState = state;

    if (dragDistance < -dragThreshold) {
      // Dragged Up
      if (state === 'collapsed') nextState = 'half';
      else if (state === 'half') nextState = 'full';
    } else if (dragDistance > dragThreshold) {
      // Dragged Down
      if (state === 'full') nextState = 'half';
      else if (state === 'half') nextState = 'collapsed';
    }

    setState(nextState);
    setOffsetY(0); // Reset offset, CSS transition handles the snap
  };

  const getHeightForState = (s: typeof state) => {
    switch (s) {
      case 'full': return '95vh'; // Leave a bit of space at top
      case 'half': return '50vh';
      case 'collapsed': return '15vh'; // Or min-height
    }
  };

  return {
    sheetRef,
    state,
    offsetY,
    isDragging,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    height: getHeightForState(state),
  };
};
