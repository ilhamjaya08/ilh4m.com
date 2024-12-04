import { FC, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = {
  home: { label: 'Home', href: '/' },
  projects: { label: 'Projects', href: '/projects' },
  about: { label: 'About', href: '/about' },
  contact: { label: 'Contact', href: '/contact' },
};

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 mx-auto w-[90%] md:w-1/2 z-50"
    >
      <nav className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-4 rounded-3xl">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="/" 
              className="text-2xl font-bold hover:text-gray-700 transition-colors"
            >
              Ilham.live
            </Link>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-4 border-black p-2 hover:bg-gray-100 active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </motion.button>
          <ul className="hidden md:flex gap-6">
            {Object.values(navItems).map((item) => (
              <motion.li key={item.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className="font-medium hover:text-gray-700 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white md:hidden z-50"
          >
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] m-4 p-6 rounded-3xl h-[calc(100vh-2rem)]">
              <div className="flex justify-between items-center mb-8">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link 
                    href="/" 
                    className="text-2xl font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>
                </motion.div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="border-4 border-black p-2 hover:bg-gray-100 active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="w-6 h-0.5 bg-black transform rotate-45 translate-y-0.5"></div>
                  <div className="w-6 h-0.5 bg-black transform -rotate-45 -translate-y-0"></div>
                </motion.button>
              </div>
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, staggerChildren: 0.1 }}
                className="flex flex-col gap-6"
              >
                {Object.values(navItems).map((item) => (
                  <motion.li 
                    key={item.href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-medium block border-4 border-black p-4 rounded-2xl hover:bg-gray-100 active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;