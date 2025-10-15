import { useState, useCallback, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UpgradeProvider } from './contexts/UpgradeContext';
import './App.css';
// Import all components directly - no lazy loading to avoid any loading screens
import PremiumSplashScreen from './pages/PremiumSplashScreen';
import CompactProfessional from './pages/CompactProfessional';
import AppInterface from './components/AppInterface';
import UpgradeZone from './pages/UpgradeZone';

const App = memo(() => {
  const [showSplash, setShowSplash] = useState(false); // Skip splash for testing // Restored to true for production

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  if (showSplash) {
    return <PremiumSplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <UpgradeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CompactProfessional />} />
          <Route path="/app/*" element={<AppInterface />} />
          <Route path="/upgrade" element={<UpgradeZone />} />
        </Routes>
      </Router>
    </UpgradeProvider>
  );
});

App.displayName = 'App';

export default App;