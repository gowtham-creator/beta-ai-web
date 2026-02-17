'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down';

interface ViewportOptions {
  once?: boolean;
  margin?: string;
  amount?: number | 'some' | 'all';
}

interface ScrollElementProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  viewport?: ViewportOptions;
}

const directionVariants: Record<Direction, Variants> = {
  left: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  up: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
  },
};

const ScrollElement: React.FC<ScrollElementProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  viewport = { amount: 0.3, once: true },
}) => {
  const variants = directionVariants[direction];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollElement;
