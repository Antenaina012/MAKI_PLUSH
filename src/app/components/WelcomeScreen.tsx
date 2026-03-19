import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "Français" },
  { text: "Manahoana", lang: "Malagasy" },
  { text: "Hola", lang: "Español" },
  { text: "Ciao", lang: "Italiano" },
  { text: "こんにちは", lang: "日本語" },
  { text: "你好", lang: "中文" },
  { text: "مرحبا", lang: "العربية" },
];

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowWelcome(false);
        setTimeout(onComplete, 600);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <h1 className="text-6xl md:text-8xl font-light text-white">
                  {greetings[currentIndex].text}
                </h1>
                <p className="text-xl md:text-2xl text-white/70 mt-4 font-light">
                  {greetings[currentIndex].lang}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
