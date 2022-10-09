import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC<{ cursorVariant: string }> = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      top: 0,
    },
    click: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      top: 0,
      height: 15,
      width: 15,
    },
  };

  return (
    <motion.div
      className='bg-slate-800 h-5 w-5 rounded-full fixed top-[1000px] left-0 pointer-events-none'
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
};

export default Cursor;
