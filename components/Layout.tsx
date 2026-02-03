import React from 'react';
import { useLocation } from 'react-router-dom';
import BottomNavBar from './organisms/BottomNavBar'; // Updated path
import PhoneFrame from './organisms/PhoneFrame'; // Updated path
import { RoutePath } from '../constants';
import { AppRoute } from '../types';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isAuthenticated, onLogout }) => {
  const location = useLocation();

  // Determine if the bottom navigation bar should be visible
  const showBottomNav = isAuthenticated && (
    location.pathname === RoutePath.Home ||
    location.pathname.startsWith(RoutePath.Closet.split('/')[0]) || // Includes /closet and /closet/category/:categoryName
    location.pathname === RoutePath.Profile ||
    location.pathname.startsWith(RoutePath.ItemCapture.split('/')[0]) || // Includes /studio routes
    location.pathname.startsWith(RoutePath.Bag) ||
    location.pathname.startsWith(RoutePath.LookDetail.split(':')[0]) // /look/:lookId
  );

  // Determine if the phone status bar should be dark or light
  // For screens with dark backgrounds (like Welcome and some LookDetails), it might be light text.
  const isLightStatusBar = location.pathname === RoutePath.Welcome || location.pathname.startsWith(RoutePath.LookDetail.split(':')[0]);

  return (
    <PhoneFrame isLightStatusBar={isLightStatusBar}>
      <div className={styles.content}>
        {children}
      </div>
      {showBottomNav && (
        <div className={styles.bottomNavContainer}>
          <BottomNavBar />
        </div>
      )}
    </PhoneFrame>
  );
};

export default Layout;