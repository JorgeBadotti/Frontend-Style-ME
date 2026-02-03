import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { RoutePath } from './constants';
import Layout from './components/Layout';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import MyMomentsScreen from './components/MyMomentsScreen';
import ClosetScreen from './components/ClosetScreen';
import ItemCaptureScreen from './components/ItemCaptureScreen';
import ProfileScreen from './components/ProfileScreen';
import ShoppingBagScreen from './components/ShoppingBagScreen';
import LookDetailScreen from './components/LookDetailScreen';
import ItemDetailSheet from './components/ItemDetailSheet';
import WardrobeGridScreen from './components/WardrobeGridScreen';
import QRScannerScreen from './components/QRScannerScreen';
import BodyPhotoCaptureScreen from './components/BodyPhotoCaptureScreen';

const App: React.FC = () => {
  // Assume a simple authentication state for demonstration
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    // In a real app, this would involve API calls and token storage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <HashRouter>
      <Layout isAuthenticated={isAuthenticated} onLogout={handleLogout}>
        <Routes>
          <Route path={RoutePath.Welcome} element={<WelcomeScreen />} />
          <Route path={RoutePath.Login} element={<LoginScreen onLogin={handleLogin} />} />
          {/* Protected Routes (simple client-side protection for demo) */}
          <Route path={RoutePath.Home} element={isAuthenticated ? <MyMomentsScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.Closet} element={isAuthenticated ? <ClosetScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.WardrobeGrid} element={isAuthenticated ? <WardrobeGridScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.ItemCapture} element={isAuthenticated ? <ItemCaptureScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.QRScanner} element={isAuthenticated ? <QRScannerScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.BodyPhotoCapture} element={isAuthenticated ? <BodyPhotoCaptureScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.Profile} element={isAuthenticated ? <ProfileScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.Bag} element={isAuthenticated ? <ShoppingBagScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.LookDetail} element={isAuthenticated ? <LookDetailScreen /> : <LoginScreen onLogin={handleLogin} />} />
          <Route path={RoutePath.ItemDetail} element={isAuthenticated ? <ItemDetailSheet /> : <LoginScreen onLogin={handleLogin} />} />

          {/* Redirect to welcome if no route matches */}
          <Route path="*" element={<WelcomeScreen />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
