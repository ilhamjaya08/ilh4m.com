import { motion, AnimatePresence } from "framer-motion";
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

export const Navo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(768);
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];
  const totalItems = menuItems.length;
  const angleStep = (2 * Math.PI) / totalItems;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      header.style.zIndex = isOpen ? '30' : '50';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-6 right-6 flex flex-col items-end gap-2 z-50">
        <motion.button
          className="w-14 h-14 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {isOpen ? (
            <Icon icon="maki:cross" className="w-8 h-8" />
          ) : (
            <Icon icon="famicons:menu-sharp" className="w-8 h-8" />
          )}
        </motion.button>
      </div>

      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50 flex items-center justify-center md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon="heroicons:bars-3-20-solid" className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={handleClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 z-50"
              onClick={handleClose}
            >
              <div 
                className="relative w-[500px] h-[500px] mx-auto mt-[calc(50vh-250px)]"
                onClick={(e) => e.stopPropagation()}
              >
                {menuItems.map((item, index) => {
                  const angle = index * angleStep - Math.PI / 2;
                  const x = Math.cos(angle) * (windowWidth < 768 ? 150 : 200);
                  const y = Math.sin(angle) * (windowWidth < 768 ? 150 : 200);

                  return (
                    <motion.a
                      href={item.href}
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute p-4 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${x}px - 48px)`,
                        top: `calc(50% + ${y}px - 48px)`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                      }}
                    >
                      <h3 className="text-xs md:text-sm font-bold text-center">{item.name}</h3>
                    </motion.a>
                  );
                })}
                <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <span className="text-base md:text-lg font-bold">Menu</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};