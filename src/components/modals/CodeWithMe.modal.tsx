  import { motion } from "framer-motion";
  import { Icon } from '@iconify/react';
  import { useState } from 'react';

  interface CodeWithMeModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  export const CodeWithMeModal = ({ isOpen, onClose }: CodeWithMeModalProps) => {
    const [selectedType, setSelectedType] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const socialLinks = [
      { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'mdi:github' },
      { name: 'CodePen', url: 'https://codepen.io/yourusername', icon: 'mdi:codepen' },
      { name: 'StackBlitz', url: 'https://stackblitz.com/@yourusername', icon: 'simple-icons:stackblitz' },
    ];

    const projectTypes = [
      { name: 'Fun Project', icon: 'ph:smiley-bold' },
      { name: 'Learning', icon: 'ph:books-bold' },
      { name: 'Paid Project', icon: 'ph:money-bold' },
    ];

    const categories = [
      { name: 'Web Development', icon: 'ph:globe-bold' },
      { name: 'Mobile Development', icon: 'ph:device-mobile-bold' },
      { name: 'Desktop Development', icon: 'ph:desktop-bold' },
      { name: 'Other', icon: 'ph:dots-three-bold' },
    ];

    if (!isOpen) return null;

    return (
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-8"
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
            <h2 className="text-3xl font-bold">Code With Me! 💻</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Icon icon="carbon:close" className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Project Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projectTypes.map((type, index) => (
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
                <h3 className="text-xl font-bold mb-3">Category</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                        selectedCategory === category.name ? 'bg-[#4CAF50] text-white' : 'bg-white'
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
                  <label className="font-bold block mb-2">Project Idea</label>
                  <textarea
                    className="w-full p-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    rows={3}
                    placeholder="Describe your project idea..."
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
                className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Submit Proposal
              </motion.button>
            </div>
          </div>

          <div className="absolute -z-10 w-32 h-32 top-1/2 -translate-y-1/2 -right-16 opacity-10">
            <Icon icon="ph:code-bold" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    );
  };
