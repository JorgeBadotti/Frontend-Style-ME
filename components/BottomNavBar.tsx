import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BOTTOM_NAV_ITEMS, RoutePath } from '../constants';
import { AppRoute } from '../types'; // Import AppRoute from types

const BottomNavBar: React.FC = () => {
  const location = useLocation();

  const getActiveClass = (path: string, currentPath: string) => {
    // Special handling for closet: highlight if on /closet or /closet/category/:categoryName
    if (path === AppRoute.CLOSET && currentPath.startsWith(RoutePath.Closet.split('/')[0])) {
      return 'text-primary fill-1';
    }
    // Special handling for studio: highlight if on any /studio route
    if (path === RoutePath.ItemCapture && currentPath.startsWith(RoutePath.ItemCapture.split('/')[0])) {
      return 'text-primary fill-1';
    }
    
    return currentPath === path ? 'text-primary fill-1' : 'text-slate-400';
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md px-8 pt-4 pb-8 flex justify-between items-center border-t border-slate-50">
      {BOTTOM_NAV_ITEMS.map((item) => (
        <NavLink
          key={item.name}
          to={item.route}
          className={({ isActive }) => `flex flex-col items-center gap-1 group transition-colors duration-200 ${getActiveClass(item.route, location.pathname)}`}
        >
          {item.name === 'Studio' ? (
            <div className="relative -mt-12 flex flex-col items-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg mb-1">
                <span className="material-symbols-outlined text-white text-2xl">photo_camera</span>
              </div>
              <span className="text-[8px] font-accent font-bold tracking-luxury-lg uppercase text-primary">
                {item.name}
              </span>
            </div>
          ) : (
            <>
              <span className={`material-symbols-outlined text-xl ${item.fillIcon || getActiveClass(item.route, location.pathname).includes('fill-1') ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[8px] font-accent font-bold tracking-luxury-lg uppercase">
                {item.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavBar;