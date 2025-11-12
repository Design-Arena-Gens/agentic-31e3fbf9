'use client';

import { motion } from 'framer-motion';
import { Video, Download, Trash2, Play } from 'lucide-react';
import { format } from 'date-fns';

export default function HistoryPanel() {
  const videos = [
    {
      id: 1,
      name: 'Summer_Vacation_2024.mp4',
      originalSize: '245 MB',
      enhancedSize: '892 MB',
      date: new Date('2024-11-10'),
      duration: '5:23',
      quality: '4K UHD',
    },
    {
      id: 2,
      name: 'Product_Demo_Final.mov',
      originalSize: '156 MB',
      enhancedSize: '634 MB',
      date: new Date('2024-11-09'),
      duration: '3:45',
      quality: '4K UHD',
    },
    {
      id: 3,
      name: 'Conference_Keynote.mkv',
      originalSize: '512 MB',
      enhancedSize: '1.8 GB',
      date: new Date('2024-11-08'),
      duration: '12:08',
      quality: '4K UHD',
    },
    {
      id: 4,
      name: 'Wedding_Highlights.mp4',
      originalSize: '389 MB',
      enhancedSize: '1.2 GB',
      date: new Date('2024-11-07'),
      duration: '8:15',
      quality: '4K UHD',
    },
    {
      id: 5,
      name: 'Tutorial_Recording.mp4',
      originalSize: '178 MB',
      enhancedSize: '721 MB',
      date: new Date('2024-11-06'),
      duration: '4:32',
      quality: '4K UHD',
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Enhancement History</h2>
          <p className="text-gray-400">View and manage your enhanced videos</p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Video</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Duration</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Size</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Quality</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video, index) => (
                  <motion.tr
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Video size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{video.name}</p>
                          <p className="text-xs text-gray-500">Original: {video.originalSize}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-300">{video.duration}</td>
                    <td className="p-4 text-sm text-gray-300">{video.enhancedSize}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/50">
                        {video.quality}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-400">
                      {format(video.date, 'MMM dd, yyyy')}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                          title="Preview"
                        >
                          <Play size={16} className="text-gray-400 hover:text-white" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download size={16} className="text-gray-400 hover:text-green-400" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} className="text-gray-400 hover:text-red-400" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Batch Enhancement Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-600/30 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Batch Enhancement</h3>
              <p className="text-sm text-gray-400 mb-4">
                Upload multiple videos and enhance them all at once
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Start Batch Processing
              </button>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-purple-400">5x</p>
              <p className="text-xs text-gray-400">Faster Processing</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
