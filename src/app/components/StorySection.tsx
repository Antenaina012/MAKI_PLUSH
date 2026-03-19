import { motion } from "motion/react";
import { Sparkles, Heart, Leaf } from "lucide-react";

export function StorySection() {
  const features = [
    {
      icon: Heart,
      title: "Fait avec Amour",
      description: "Chaque peluche est créée avec passion et attention aux détails"
    },
    {
      icon: Leaf,
      title: "Écologique",
      description: "Matériaux durables et respectueux de l'environnement"
    },
    {
      icon: Sparkles,
      title: "Unique",
      description: "Inspiré des vrais makis de Madagascar"
    }
  ];

  return (
    <section id="notre-histoire" className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/20 dark:bg-teal-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1656163157888-a5198941486e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRhZ2FzY2FyJTIwbmF0dXJlJTIwZm9yZXN0fGVufDF8fHx8MTc3MzkxMzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Madagascar nature"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transition-colors"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 transition-colors">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Artisanal</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
              Notre Histoire
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors">
              Inspirés par la beauté unique de Madagascar et ses habitants les plus 
              charmants, les makis, nous avons créé une collection de peluches qui 
              capture leur esprit joueur et leur douceur.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors">
              Chaque peluche est fabriquée avec soin, utilisant des matériaux de 
              qualité supérieure pour garantir confort et durabilité. Notre mission 
              est de partager la magie de Madagascar avec le monde entier.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center transition-colors">
                    <feature.icon className="text-emerald-600 dark:text-emerald-400 transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}