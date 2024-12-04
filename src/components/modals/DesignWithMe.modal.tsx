import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import { useState } from 'react';

interface DesignWithMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignWithMeModal = ({ isOpen, onClose }: DesignWithMeModalProps) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const socialLinks = [
    { name: 'Figma', url: 'https://figma.com/@yourusername', icon: 'logos:figma' },
    { name: 'Dribbble', url: 'https://dribbble.com/yourusername', icon: 'logos:dribbble-icon' },
    { name: 'LottieFiles', url: 'https://lottiefiles.com/yourusername', icon: 'uil:lottiefiles' },
    { name: 'Behance', url: 'https://behance.net/yourusername', icon: 'cib:behance' },
  ];

  const projectTypes = [
    { name: 'UI Design', icon: 'ph:layout-bold' },
    { name: 'Illustration', icon: 'ph:paint-brush-bold' },
    { name: 'Animation', icon: 'ph:video-bold' },
  ];

  const categories = [
    { name: 'Website', icon: 'ph:browser-bold' },
    { name: 'Mobile App', icon: 'ph:device-mobile-bold' },
    { name: 'Brand Identity', icon: 'ph:palette-bold' },
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
        className="relative w-full max-w-2xl mx-4 bg-[#FFF0F5] p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FF69B4] rounded-full border-2 border-black"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#9370DB] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#FFB6C1] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#DDA0DD] rounded-full border-2 border-black"></div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Design With Me! 🎨</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Icon icon="carbon:close" className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
          <p className="text-gray-600 italic">
            Note: I'm primarily a developer who enjoys design. While I may not be a professional designer,
            I'm passionate about creating visually appealing and user-friendly interfaces. Let's collaborate
            and bring your design ideas to life! 🚀
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Design Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectTypes.map((type, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedType(type.name)}
                  className={`p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    selectedType === type.name ? 'bg-[#FF69B4] text-white' : 'bg-white'
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
              <h3 className="text-xl font-bold mb-3">Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                      selectedCategory === category.name ? 'bg-[#FF69B4] text-white' : 'bg-white'
                    }`}
                  >
                    <Icon icon={category.icon} className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-bold">{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {selectedCategory && (
            <div className="space-y-4">
              <div>
                <label className="font-bold block mb-2">Design Brief</label>
                <textarea
                  className="w-full p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  rows={3}
                  placeholder="Describe your design needs and inspiration..."
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

          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Icon icon={link.icon} className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF69B4] text-white px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Submit Design Request
            </motion.button>
          </div>
        </div>

        <div className="absolute -z-10 w-32 h-32 top-1/2 -translate-y-1/2 -right-16 opacity-10">
          <Icon icon="ph:paint-brush-bold" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};
