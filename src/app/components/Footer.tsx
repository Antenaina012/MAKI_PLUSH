import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🐒</div>
              <span className="text-xl text-white">Peluches Maki</span>
            </div>
            <p className="text-sm mb-4">
              Des peluches de maki uniques et adorables, faites avec passion et attention aux détails.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="hover:text-emerald-400 transition-colors">Accueil</a></li>
              <li><a href="#produits" className="hover:text-emerald-400 transition-colors">Nos Peluches</a></li>
              <li><a href="#a-propos" className="hover:text-emerald-400 transition-colors">À Propos</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Retours</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">CGV</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-sm">contact@peluchesmaki.fr</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-sm">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Peluches Maki. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
