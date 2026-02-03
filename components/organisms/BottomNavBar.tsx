import React from 'react';
import { useLocation } from 'react-router-dom';
import NavLinkItem from '../molecules/NavLinkItem/NavLinkItem';
import { BOTTOM_NAV_ITEMS, RoutePath } from '../../constants'; // FIX: Removed AppRoute from constants import
import { AppRoute } from '../../types'; // FIX: Imported AppRoute from types
import styles from './BottomNavBar.module.css';

const BottomNavBar: React.FC = () => {
  const location = useLocation();

  const getIsActivePath = (itemRoute: string, currentPath: string) => {
    // Special handling for closet: highlight if on /closet or /closet/category/:categoryName
    if (itemRoute === AppRoute.CLOSET && currentPath.startsWith(RoutePath.Closet.split('/')[0])) {
      return true;
    }
    // Special handling for studio: highlight if on any /studio route
    if (itemRoute === RoutePath.ItemCapture && currentPath.startsWith(RoutePath.ItemCapture.split('/')[0])) {
      return true;
    }
    
    return currentPath === itemRoute;
  };

  return (
    <nav className={styles.navBar}>
      {BOTTOM_NAV_ITEMS.map((item) => (
        <NavLinkItem
          key={item.name}
          item={item}
          isActivePath={getIsActivePath(item.route, location.pathname)}
        />
      ))}
    </nav>
  );
};

export default BottomNavBar;