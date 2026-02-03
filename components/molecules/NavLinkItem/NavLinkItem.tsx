import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinkItem.module.css';
import Icon from '../../atoms/Icon/Icon';
import TextElement from '../../atoms/TextElement/TextElement';
import { NavItem } from '../../../types';

interface NavLinkItemProps {
  item: NavItem;
  isActivePath: boolean; // Determines if the current route matches this item's route
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ item, isActivePath }) => {
  const isStudioButton = item.name === 'Studio';
  const iconFilled = isStudioButton || isActivePath; // Studio always filled, others only when active

  return (
    <NavLink
      to={item.route}
      className={`${styles.navLink} ${isActivePath ? styles.active : ''}`}
    >
      {isStudioButton ? (
        <div className={styles.studioButtonContainer}>
          <div className={styles.studioButtonIconWrapper}>
            <Icon name={item.icon} className={styles.studioButtonIcon} />
          </div>
          <TextElement variant="span" font="accent" weight="bold" spacing="luxury-lg" className={styles.studioButtonLabel}>
            {item.name}
          </TextElement>
        </div>
      ) : (
        <>
          <Icon name={item.icon} filled={iconFilled} className={styles.navIcon} />
          <TextElement variant="span" font="accent" weight="bold" spacing="luxury-lg" className={styles.navLabel}>
            {item.name}
          </TextElement>
        </>
      )}
    </NavLink>
  );
};

export default NavLinkItem;
