import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true);
        (e.target as HTMLElement).style.cursor = 'none';
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      setIsHovering(false);
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        (e.target as HTMLElement).style.cursor = 'none';
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.body.style.cursor = 'none';

    // Add global styles to remove default cursor from all interactive elements
    const style = document.createElement('style');
    style.textContent = `
      a, button, [role="button"], input[type="submit"], input[type="button"], input[type="reset"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'default';
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        rotate: -45,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
      }}
    >
      <Icon 
        icon={isHovering ? 'clarity:cursor-hand-solid' : 'fluent:cursor-20-filled'} 
        className="w-8 h-8 text-black -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
};

export default Cursor;