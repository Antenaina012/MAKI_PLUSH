import { Heart, ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🐒</div>
            <span className="text-xl">Peluches Maki</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Accueil
            </a>
            <a href="#produits" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Nos Peluches
            </a>
            <a href="#a-propos" className="text-gray-700 hover:text-emerald-600 transition-colors">
              À Propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
