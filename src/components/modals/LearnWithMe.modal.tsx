import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import { useState } from 'react';

interface LearnWithMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LearnWithMeModal = ({ isOpen, onClose }: LearnWithMeModalProps) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');

  const learningTypes = [
    { name: 'Learn from Me', icon: 'ph:student-bold' },
    { name: 'Share Knowledge', icon: 'ph:brain-bold' },
    { name: 'Free Tutoring', icon: 'ph:hand-heart-bold' },
    { name: 'Learn Together', icon: 'ph:users-three-bold' },
  ];

  const platforms = [
    { name: 'Chat/Video Call', icon: 'ph:chat-circle-text-bold' },
    { name: 'Online Course', icon: 'ph:monitor-play-bold' },
    { name: 'Other', icon: 'ph:dots-three-bold' },
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl mx-4 bg-[#E5F3FF] p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFD700] rounded-full border-2 border-black"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF69B4] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#98FB98] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#87CEEB] rounded-full border-2 border-black"></div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Learn With Me! 📚</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Icon icon="carbon:close" className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Learning Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {learningTypes.map((type, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedType(type.name)}
                  className={`p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    selectedType === type.name ? 'bg-[#4CAF50] text-white' : 'bg-white'
                  }`}
                >
                  <Icon icon={type.icon} className="w-6 h-6 mx-auto mb-2" />
                  <span className="font-bold">{type.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {selectedType && (
            <div>
              <h3 className="text-xl font-bold mb-3">Preferred Platform</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {platforms.map((platform, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPlatform(platform.name)}
                    className={`p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                      selectedPlatform === platform.name ? 'bg-[#4CAF50] text-white' : 'bg-white'
                    }`}
                  >
                    <Icon icon={platform.icon} className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-bold">{platform.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {selectedPlatform && (
            <div className="space-y-4">
              <div>
                <label className="font-bold block mb-2">Description</label>
                <textarea
                  className="w-full p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  rows={3}
                  placeholder="Describe what you want to learn or teach..."
                />
              </div>
              <div>
                <label className="font-bold block mb-2">Contact Information</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="Your email or preferred contact method"
                />
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Submit Request
            </motion.button>
          </div>
        </div>

        <div className="absolute -z-10 w-32 h-32 top-1/2 -translate-y-1/2 -right-16 opacity-10">
          <Icon icon="ph:graduation-cap-bold" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};
