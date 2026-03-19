import { motion } from "motion/react";

export function Lemur3D() {
  return (
    <div className="h-full w-full relative">
      {/* Floating orbs with CSS 3D effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 opacity-60 blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 opacity-50 blur-2xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 opacity-40 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 opacity-30 blur-2xl"
        animate={{
          y: [0, 35, 0],
          x: [0, -15, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
}