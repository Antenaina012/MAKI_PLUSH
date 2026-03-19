import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-800 text-sm mb-6">
              ✨ Collection 2026
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Des peluches de maki <span className="text-emerald-600">adorables</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez notre collection unique de peluches de maki faites à la main. 
              Chaque peluche est créée avec amour et attention aux détails.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Découvrir la collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t">
              <div>
                <div className="text-3xl mb-1">100+</div>
                <div className="text-sm text-gray-600">Peluches vendues</div>
              </div>
              <div>
                <div className="text-3xl mb-1">⭐ 4.9</div>
                <div className="text-sm text-gray-600">Satisfaction client</div>
              </div>
              <div>
                <div className="text-3xl mb-1">🌱</div>
                <div className="text-sm text-gray-600">Éco-responsable</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1679605866861-6e681edde158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW5nLXRhaWxlZCUyMGxlbXVyfGVufDF8fHx8MTc3MzkxMjU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Maki peluche"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="text-4xl">🎁</div>
                <div>
                  <div className="text-sm text-gray-600">Livraison offerte</div>
                  <div className="text-lg">dès 50€ d'achat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
