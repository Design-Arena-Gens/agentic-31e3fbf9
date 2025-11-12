'use client';

import { motion } from 'framer-motion';
import { User, Crown, Zap, Video, Calendar, Mail, Shield } from 'lucide-react';

export default function ProfilePanel() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Profile & Subscription</h2>
          <p className="text-gray-400">Manage your account and subscription plan</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 bg-[#111] border border-gray-800 rounded-2xl p-6"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={40} />
              </div>
              <h3 className="text-xl font-bold mb-1">Alex Morrison</h3>
              <p className="text-sm text-gray-400 mb-4">alex.morrison@email.com</p>

              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-600/50 rounded-xl p-3 mb-4">
                <div className="flex items-center justify-center gap-2 text-yellow-500 mb-1">
                  <Crown size={18} />
                  <span className="font-semibold">Pro Plan</span>
                </div>
                <p className="text-xs text-gray-400">Active until Dec 12, 2024</p>
              </div>

              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition-colors mb-2">
                Edit Profile
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                Change Password
              </button>
            </div>
          </motion.div>

          {/* Details and Subscription */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6">Account Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <Mail className="text-blue-500" size={20} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Email Address</p>
                    <p className="font-medium">alex.morrison@email.com</p>
                  </div>
                  <button className="text-blue-500 text-sm hover:underline">Change</button>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <Calendar className="text-purple-500" size={20} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Member Since</p>
                    <p className="font-medium">January 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <Shield className="text-green-500" size={20} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Two-Factor Authentication</p>
                    <p className="font-medium">Enabled</p>
                  </div>
                  <button className="text-green-500 text-sm hover:underline">Manage</button>
                </div>
              </div>
            </motion.div>

            {/* Subscription Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6">Subscription Plan</h3>

              <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-600/30 rounded-xl p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="text-yellow-500" size={24} />
                      <h4 className="text-2xl font-bold">Pro Plan</h4>
                    </div>
                    <p className="text-gray-400 text-sm">Unlimited AI-powered enhancements</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">$29</p>
                    <p className="text-sm text-gray-400">/month</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="text-yellow-500" size={16} />
                    <span>Unlimited video enhancements</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="text-yellow-500" size={16} />
                    <span>Up to 4K UHD quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="text-yellow-500" size={16} />
                    <span>Priority processing queue</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="text-yellow-500" size={16} />
                    <span>Batch enhancement (up to 10 videos)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="text-yellow-500" size={16} />
                    <span>Advanced AI features</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Cancel Subscription
                  </button>
                  <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Upgrade to Premium
                  </button>
                </div>
              </div>

              {/* Usage Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-400">127</p>
                  <p className="text-xs text-gray-400 mt-1">Videos Enhanced</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-purple-400">8.4k</p>
                  <p className="text-xs text-gray-400 mt-1">AI Credits Used</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-green-400">∞</p>
                  <p className="text-xs text-gray-400 mt-1">Credits Left</p>
                </div>
              </div>
            </motion.div>

            {/* Billing History */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#111] border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Billing History</h3>
              <div className="space-y-3">
                {[
                  { date: 'Nov 12, 2024', amount: '$29.00', status: 'Paid' },
                  { date: 'Oct 12, 2024', amount: '$29.00', status: 'Paid' },
                  { date: 'Sep 12, 2024', amount: '$29.00', status: 'Paid' },
                ].map((invoice, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium">{invoice.date}</p>
                      <p className="text-xs text-gray-400">Pro Plan - Monthly</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold">{invoice.amount}</span>
                      <span className="text-xs text-green-500 bg-green-500/20 px-2 py-1 rounded">
                        {invoice.status}
                      </span>
                      <button className="text-blue-500 text-xs hover:underline">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
