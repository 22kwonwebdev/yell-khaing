"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const name = 'Hi There!'
  const letters = name.split('')

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Total duration for the animation

    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) {
    return null
  }

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: -100,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background backdrop-blur-sm"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10 flex items-center justify-center">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={`
                    text-4xl md:text-6xl lg:text-7xl font-bold 
                    bg-gradient-to-r from-primary to-primary/60 
                    bg-clip-text text-transparent
                    ${letter === ' ' ? 'mx-2' : ''}
                  `}
                  style={{
                    textShadow: '0 0 30px rgba(var(--primary), 0.5)'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}