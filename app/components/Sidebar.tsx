'use client';

import { Sparkles, LayoutDashboard, History, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeTab: 'enhance' | 'dashboard' | 'history' | 'profile';
  setActiveTab: (tab: 'enhance' | 'dashboard' | 'history' | 'profile') => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'enhance', icon: Sparkles, label: 'Enhance' },
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'profile', icon: User, label: 'Profile' },
  ] as const;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-[#111] border-r border-gray-800 p-6 flex flex-col"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI Video Enhancer
        </h1>
        <p className="text-xs text-gray-500 mt-1">4K UHD Enhancement</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              activeTab === item.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <div className="text-xs text-gray-500">
          <p>© 2024 AI Video Enhancer</p>
          <p className="mt-1">Powered by AI Technology</p>
        </div>
      </div>
    </motion.div>
  );
}
