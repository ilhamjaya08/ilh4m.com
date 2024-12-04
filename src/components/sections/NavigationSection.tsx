import { motion, AnimatePresence } from "framer-motion";
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { PlayWithMeModal } from "../modals/PlayWithMe.modal";
import { CodeWithMeModal } from "../modals/CodeWithMe.modal";
import { DesignWithMeModal } from "../modals/DesignWithMe.modal";
import { LearnWithMeModal } from "../modals/LearnWithMe.modal";

export const NavigationSection = () => {
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];
  const totalItems = menuItems.length;
  const angleStep = (2 * Math.PI) / totalItems;
  const [windowWidth, setWindowWidth] = useState(768);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 bg-[#E5E5FF] py-10"
      >
        <div className="relative w-full lg:w-[500px] h-[500px] mb-10 lg:mb-0">
          {menuItems.map((item, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const x = Math.cos(angle) * (windowWidth < 768 ? 150 : 200);
            const y = Math.sin(angle) * (windowWidth < 768 ? 150 : 200);

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: index * 0.1 }}
                className="absolute p-4 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
                style={{
                  left: `calc(50% + ${x}px - 48px)`,
                  top: `calc(50% + ${y}px - 48px)`,
                }}
              >
                <h3 className="text-xs md:text-sm font-bold text-center">{item}</h3>
              </motion.div>
            );
          })}
          <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            <span className="text-base md:text-lg font-bold">Menu</span>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 px-4">
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