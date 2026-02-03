import React from 'react';
import styles from './PhoneFrame.module.css';
import Icon from '../atoms/Icon/Icon'; // Import Icon atom

interface PhoneFrameProps {
  children: React.ReactNode;
  isLightStatusBar?: boolean;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, isLightStatusBar = false }) => {
  return (
    <div className={styles.phoneFrame}>
      {/* Status Bar */}
      <div className={`${styles.statusBar} ${isLightStatusBar ? styles.statusBarLight : styles.statusBarDark}`}>
        <span className={styles.time}>9:41</span>
        <div className={styles.statusBarIcons}>
          <Icon name="signal_cellular_alt" className={styles.statusBarIcon} size="xs" />
          <Icon name="wifi" className={styles.statusBarIcon} size="xs" />
          <Icon name="battery_full" className={styles.batteryIcon} size="sm" />
        </div>
      </div>

      {/* Screen Content */}
      <div className={styles.screenContent}>
        {children}
      </div>

      {/* iOS Home Indicator */}
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicatorLine}></div>
      </div>
    </div>
  );
};

export default PhoneFrame;