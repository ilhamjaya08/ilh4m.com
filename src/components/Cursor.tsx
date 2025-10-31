import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

type CursorState = 'default' | 'pointer' | 'text';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports touch (mobile/tablet)
    const checkTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    setIsTouchDevice(checkTouchDevice());

    // Don't setup cursor on touch devices
    if (checkTouchDevice()) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Check if element is clickable (buttons, links, etc)
    const isClickable = (element: HTMLElement): boolean => {
      const tag = element.tagName.toLowerCase();
      const role = element.getAttribute('role');

      return (
        tag === 'a' ||
        tag === 'button' ||
        role === 'button' ||
        element.onclick !== null ||
        element.classList.contains('cursor-pointer') ||
        // Check parent for Link components
        element.closest('a') !== null ||
        element.closest('button') !== null
      );
    };

    // Check if element is text input
    const isTextInput = (element: HTMLElement): boolean => {
      const tag = element.tagName.toLowerCase();

      return (
        tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        element.contentEditable === 'true'
      );
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (isTextInput(target)) {
        setCursorState('text');
      } else if (isClickable(target)) {
        setCursorState('pointer');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseOut = () => {
      setCursorState('default');
    };

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Add global styles to remove default cursor from ALL elements
    const style = document.createElement('style');
    style.textContent = `
      *,
      *::before,
      *::after,
      a,
      button,
      input,
      textarea,
      select,
      [role="button"],
      [contenteditable="true"],
      input[type="submit"],
      input[type="button"],
      input[type="reset"] {
        cursor: none !important;
      }
      body {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  // Get cursor icon based on state
  const getCursorIcon = () => {
    switch (cursorState) {
      case 'pointer':
        return 'clarity:cursor-hand-solid';
      case 'text':
        return 'mdi:cursor-text';
      default:
        return 'fluent:cursor-20-filled';
    }
  };

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-none"
      style={{
        left: 0,
        top: 0,
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) ${cursorState !== 'text' ? 'rotate(-45deg)' : 'rotate(0deg)'}`,
        willChange: 'transform',
      }}
    >
      <Icon
        icon={getCursorIcon()}
        className="w-8 h-8 text-black"
      />
    </div>
  );
};

export default Cursor;