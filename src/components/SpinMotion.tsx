'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface SpinMotionProps {
  children: React.ReactNode
  className?: string
}

const SpinMotion: React.FC<SpinMotionProps> = ({ 
  children, 
  className = '' 
}) => (
  <motion.div
    initial={{ 
      opacity: 0, 
      rotate: 180,
      scale: 0.5 
    }}
    whileInView={{ 
      opacity: 1, 
      rotate: 0,
      scale: 1 
    }}
    viewport={{ once: false }}
    transition={{ 
      type: "spring",
      stiffness: 120,
      damping: 10,
      duration: 0.6
    }}
    className={className}
  >
    {children}
  </motion.div>
)
export default SpinMotion