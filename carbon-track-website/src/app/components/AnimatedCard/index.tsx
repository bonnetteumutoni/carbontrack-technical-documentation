import React from 'react';
import { motion } from 'framer-motion';

type AnimatedCardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export default function AnimatedCard({ children, style, onClick }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        backgroundColor: 'white',
        borderRadius: 12,
        padding: '1.5rem',
        marginBottom: '2rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}