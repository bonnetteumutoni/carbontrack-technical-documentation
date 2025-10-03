import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimatedSectionProps = {
  children: React.ReactNode;
  id: string;
};

export default function AnimatedSection({ children, id }: AnimatedSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        backgroundColor: 'white',
        borderRadius: 12,
        padding: '2rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      }}
    >
      {children}
    </motion.section>
  );
}