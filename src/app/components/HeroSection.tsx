import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Lemur3D } from "./Lemur3D";

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <Lemur3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
            >
              Peluches
              <span className="text-emerald-600 dark:text-emerald-400"> Maki</span>
              <br />
              de Madagascar
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors"
            >
              Découvrez nos adorables peluches maki, fabriquées avec amour et 
              inspirées de la faune unique de Madagascar. Chaque peluche est 
              une œuvre d'art douce et câline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#peluches">
                <button className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg">
                  Découvrir la collection
                </button>
              </a>
              <a href="#notre-histoire">
                <button className="px-8 py-4 bg-white text-emerald-600 rounded-full hover:bg-gray-50 transition-all border-2 border-emerald-600">
                  En savoir plus
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1700146606640-0202e6463425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW11ciUyMG1hZGFnYXNjYXIlMjBjdXRlfGVufDF8fHx8MTc3MzkxMzMyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Maki de Madagascar"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-emerald-600" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}