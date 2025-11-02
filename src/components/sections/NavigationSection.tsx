import { motion, AnimatePresence } from "framer-motion";
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { PlayWithMeModal } from "../modals/PlayWithMe.modal";
import { CodeWithMeModal } from "../modals/CodeWithMe.modal";
import { DesignWithMeModal } from "../modals/DesignWithMe.modal";
import { LearnWithMeModal } from "../modals/LearnWithMe.modal";

export const NavigationSection = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const cards = [
    { title: 'Play with Me', icon: 'game-icons:dice-twenty-faces-twenty', description: 'Let\'s play some games together!' },
    { title: 'Code with Me', icon: 'clarity:code-line', description: 'Collaborate on coding projects' },
    { title: 'Design with Me', icon: 'carbon:pen-fountain', description: 'Create beautiful designs' },
    { title: 'Learn with Me', icon: 'carbon:education', description: 'Share knowledge and grow together' },
  ];

  const handleCardClick = (title: string) => {
    setActiveModal(title);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <motion.section
      id="navigation"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="min-h-screen flex items-center justify-center px-4 bg-[#E5E5FF] py-10"
      >
        <div className="relative w-full max-w-2xl px-4">
          <div className="text-center mb-8 font-bold text-2xl">Click here to interact with me!</div>
          <div className="bg-white p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#FFD700] rounded-full border-2 border-black"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#FF69B4] rounded-full border-2 border-black"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#98FB98] rounded-full border-2 border-black"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#87CEEB] rounded-full border-2 border-black"></div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#F8F8FF] p-6 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                  onClick={() => handleCardClick(card.title)}
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon icon={card.icon} className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        <PlayWithMeModal 
          isOpen={activeModal === 'Play with Me'} 
          onClose={handleCloseModal} 
        />
      </AnimatePresence>

      <AnimatePresence>
        <CodeWithMeModal 
          isOpen={activeModal === 'Code with Me'} 
          onClose={handleCloseModal} 
        />
      </AnimatePresence>
      
      <AnimatePresence>
        <DesignWithMeModal 
          isOpen={activeModal === 'Design with Me'} 
          onClose={handleCloseModal} 
        />
      </AnimatePresence>
      
      <AnimatePresence>
        <LearnWithMeModal 
          isOpen={activeModal === 'Learn with Me'} 
          onClose={handleCloseModal} 
        />
      </AnimatePresence>
    </>
  );
};