import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { DailyPage } from './pages/DailyPage';
import { LandingPage } from './pages/LandingPage';
import { ChatPage } from './pages/ChatPage';
import { MemoryPage } from './pages/MemoryPage';
import { SettingsPage } from './pages/SettingsPage';
import { ProfilePage } from './pages/ProfilePage';
import { FeatureStatusPage } from './pages/FeatureStatusPage';
import type { ThemeMode } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <AppContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route path="chat" element={<ChatPage />} />
          <Route path="memory" element={<MemoryPage />} />
          <Route path="daily" element={<DailyPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="status" element={<FeatureStatusPage />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

const AppContext = {
  Provider: ({ children, value }: { children: React.ReactNode; value: { theme: ThemeMode; setTheme: (theme: ThemeMode) => void } }) => {
    document.body.dataset.theme = value.theme;
    return <>{children}</>;
  }
};
