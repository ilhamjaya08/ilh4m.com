import { motion } from "framer-motion";
import { Icon } from '@iconify/react';

interface PlayWithMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlayWithMeModal = ({ isOpen, onClose }: PlayWithMeModalProps) => {
  const games = [
    { name: 'Garena Free Fire', id: 'UID: 1583297502' },
    { name: 'Mobile Legends', id: 'UID: 779957123 (12111)' },
    { name: 'Minecraft', id: 'UID: @ilhamjaya08' },
    { name: 'Roblox', id: 'UID: @ilhamxd111' },
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#FFE5E5] p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto"
      >
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFD700] rounded-full border-2 border-black"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF69B4] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#98FB98] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#87CEEB] rounded-full border-2 border-black"></div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Play Games With Me! 🎮</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Icon icon="carbon:close" className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-xl font-bold mb-2">{game.name}</h3>
              <p className="text-gray-700">{game.id}</p>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center">
          <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            Send Message
          </button>
        </div> */}

        <div className="absolute -z-10 w-32 h-32 top-1/2 -translate-y-1/2 -right-16 opacity-10">
          <Icon icon="game-icons:game-console" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};