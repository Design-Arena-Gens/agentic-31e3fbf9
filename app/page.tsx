'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import EnhancementPanel from './components/EnhancementPanel';
import Dashboard from './components/Dashboard';
import HistoryPanel from './components/HistoryPanel';
import ProfilePanel from './components/ProfilePanel';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'enhance' | 'dashboard' | 'history' | 'profile'>('enhance');

  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'enhance' && <EnhancementPanel />}
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'history' && <HistoryPanel />}
        {activeTab === 'profile' && <ProfilePanel />}
      </main>
    </div>
  );
}
