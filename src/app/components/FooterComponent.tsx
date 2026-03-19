import { motion } from "motion/react";
import { Heart, Facebook, Instagram, Twitter } from "lucide-react";

export function FooterComponent() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🐵</span>
              <span className="text-2xl font-bold text-emerald-400 dark:text-emerald-300">Maki Madagascar</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4 transition-colors">
              Des peluches uniques inspirées de la faune merveilleuse de Madagascar.
              Fait avec amour et passion.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500 transition-colors">
              <li><a href="#accueil" className="hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors">Accueil</a></li>
              <li><a href="#peluches" className="hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors">Peluches</a></li>
              <li><a href="#notre-histoire" className="hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors">Notre Histoire</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Informations</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500 transition-colors">
              <li><a href="mailto:hei.antenaina.7@gmail.com" className="hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors">Contact</a></li>
              <li><a href="tel:+261321957305" className="hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors">Téléphone</a></li>
              <li><a href="#peluches" className="hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors">Catalogue</a></li>
              <li><a href="#notre-histoire" className="hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors">À propos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 transition-colors">
          <p className="text-center text-gray-400 dark:text-gray-500 flex items-center justify-center gap-2 transition-colors">
            © 2026 Maki Madagascar. Fait avec <Heart size={16} className="text-red-500 fill-current" /> à Antananarivo, Madagascar
          </p>
        </div>
      </div>
    </footer>
  );
}