import Cursor from '@/components/Cursor';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <motion.div
      onMouseDown={() => setCursorVariant('click')}
      onMouseUp={() => setCursorVariant('default')}
      className='h-screen'
    >
      <Head>
        <title>Custom Cursor :3</title>
      </Head>

      <Cursor cursorVariant={cursorVariant} />
    </motion.div>
  );
};

export default Home;
