'use client';

import { useState, useRef } from 'react';
import { Upload, Play, Pause, Download, Sparkles, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancementSettings {
  noiseReduction: boolean;
  colorCorrection: boolean;
  frameRateUpscaling: boolean;
  detailEnhancement: boolean;
  hdrToneMapping: boolean;
}

export default function EnhancementPanel() {
  const [video, setVideo] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [enhancing, setEnhancing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [exportFormat, setExportFormat] = useState<'mp4' | 'mov' | 'mkv'>('mp4');
  const [settings, setSettings] = useState<EnhancementSettings>({
    noiseReduction: true,
    colorCorrection: true,
    frameRateUpscaling: false,
    detailEnhancement: true,
    hdrToneMapping: false,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideo(file);
      setVideoUrl(URL.createObjectURL(file));
      setEnhanced(false);
      setProgress(0);
    }
  };

  const startEnhancement = () => {
    setEnhancing(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setEnhancing(false);
          setEnhanced(true);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const toggleSetting = (key: keyof EnhancementSettings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const downloadVideo = () => {
    // Simulate download
    alert(`Downloading enhanced video as ${exportFormat.toUpperCase()}`);
  };

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Video Enhancement Studio</h2>
          <p className="text-gray-400">Upload and enhance your videos to 4K UHD quality</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload and Preview Section */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-[#111] border-2 border-dashed border-gray-700 rounded-2xl p-8 text-center"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="video/*"
                className="hidden"
              />
              {!video ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer py-12"
                >
                  <Upload className="mx-auto mb-4 text-blue-500" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Upload Video</h3>
                  <p className="text-gray-400 text-sm">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    MP4, MOV, MKV up to 500MB
                  </p>
                </div>
              ) : (
                <div>
                  <video
                    src={videoUrl}
                    controls
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-400 mb-2">{video.name}</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Change video
                  </button>
                </div>
              )}
            </motion.div>

            {enhanced && videoUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#111] rounded-2xl p-6 border border-green-500/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-green-500" size={20} />
                  <h3 className="text-lg font-semibold">Enhanced Preview</h3>
                </div>
                <video
                  src={videoUrl}
                  controls
                  className="w-full rounded-lg"
                />
                <div className="mt-4 flex gap-4">
                  <select
                    value={exportFormat}
                    onChange={(e) => setExportFormat(e.target.value as any)}
                    className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-sm"
                  >
                    <option value="mp4">MP4</option>
                    <option value="mov">MOV</option>
                    <option value="mkv">MKV</option>
                  </select>
                  <button
                    onClick={downloadVideo}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Download size={18} />
                    Export
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Settings and Controls Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#111] rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Enhancement Settings</h3>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-blue-500 hover:text-blue-400"
                >
                  <Settings size={20} />
                </button>
              </div>

              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-4 mb-6"
                  >
                    {Object.entries(settings).map(([key, value]) => (
                      <label
                        key={key}
                        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                      >
                        <span className="text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <div
                          onClick={() => toggleSetting(key as keyof EnhancementSettings)}
                          className={`w-12 h-6 rounded-full transition-colors relative ${
                            value ? 'bg-blue-600' : 'bg-gray-700'
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              value ? 'translate-x-7' : 'translate-x-1'
                            }`}
                          />
                        </div>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="bg-gray-800/30 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Target Quality</span>
                  <span className="text-sm font-semibold text-blue-400">4K UHD</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Resolution</span>
                  <span className="text-sm font-semibold">3840 × 2160</span>
                </div>
                {settings.frameRateUpscaling && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Frame Rate</span>
                    <span className="text-sm font-semibold">60 FPS</span>
                  </div>
                )}
              </div>

              {video && !enhancing && !enhanced && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={startEnhancement}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/50"
                >
                  <Sparkles size={20} />
                  Start Enhancement
                </motion.button>
              )}

              {enhancing && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Enhancing video...</span>
                    <span className="font-semibold text-blue-400">{progress}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent" />
                    Processing with AI...
                  </div>
                </div>
              )}

              {enhanced && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-600/20 border border-green-600/50 rounded-xl p-4 text-center"
                >
                  <p className="text-green-400 font-semibold">✓ Enhancement Complete!</p>
                  <p className="text-sm text-gray-400 mt-1">Your video is now 4K UHD quality</p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/30 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-3">Pro Features</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  AI-powered noise reduction
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  Automatic color correction
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Frame rate upscaling (24→60fps)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  Detail enhancement for faces
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  HDR tone mapping
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
