'use client';

import { motion } from 'framer-motion';
import { Video, TrendingUp, Clock, Zap } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Videos Enhanced', value: '127', icon: Video, color: 'blue' },
    { label: 'Quality Improvement', value: '+340%', icon: TrendingUp, color: 'green' },
    { label: 'Processing Time Saved', value: '48h', icon: Clock, color: 'purple' },
    { label: 'AI Credits Used', value: '8,420', icon: Zap, color: 'yellow' },
  ];

  const recentActivity = [
    { name: 'vacation_video.mp4', date: '2 hours ago', status: 'completed' },
    { name: 'presentation_demo.mov', date: '5 hours ago', status: 'completed' },
    { name: 'conference_recording.mkv', date: '1 day ago', status: 'completed' },
    { name: 'family_memories.mp4', date: '2 days ago', status: 'completed' },
  ];

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
          <p className="text-gray-400">Overview of your video enhancement activity</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-${stat.color}-600/20 border border-${stat.color}-600/50`}
                >
                  <stat.icon className={`text-${stat.color}-500`} size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#111] border border-gray-800 rounded-2xl p-6 mb-8"
        >
          <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Video size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  {item.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#111] border border-gray-800 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-6">Enhancement Quality Trends</h3>
          <div className="h-64 flex items-end justify-around gap-4">
            {[65, 72, 78, 85, 88, 92, 95].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg relative group"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap">
                  {height}% quality
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-around mt-4 text-xs text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
