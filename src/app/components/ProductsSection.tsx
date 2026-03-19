import { motion } from "motion/react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Maki Catta Classique",
    price: "29.99€",
    image: "https://images.unsplash.com/photo-1562550700-2df2d4e06b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW5nJTIwdGFpbGVkJTIwbGVtdXJ8ZW58MXx8fHwxNzczOTEzMzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    description: "Notre maki à queue annelée emblématique, doux et câlin"
  },
  {
    id: 2,
    name: "Peluche Maki Géante",
    price: "49.99€",
    image: "https://images.unsplash.com/photo-1669212409006-4684413000aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVzaCUyMHRveSUyMGFuaW1hbHxlbnwxfHx8fDE3NzM5MTMzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    description: "Version XL pour les grands câlins"
  },
  {
    id: 3,
    name: "Maki Bébé",
    price: "19.99€",
    image: "https://images.unsplash.com/photo-1700146606640-0202e6463425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW11ciUyMG1hZGFnYXNjYXIlMjBjdXRlfGVufDF8fHx8MTc3MzkxMzMyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    description: "Petit format parfait pour les enfants"
  },
];

export function ProductsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
      toast.info("Retiré des favoris");
    } else {
      setFavorites([...favorites, id]);
      toast.success("Ajouté aux favoris ❤️");
    }
  };

  const addToCart = (productName: string) => {
    toast.success(`${productName} ajouté au panier!`, {
      description: "Continuez vos achats ou passez à la caisse"
    });
  };

  return (
    <section id="peluches" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Notre Collection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Découvrez nos adorables peluches maki, fabriquées avec des matériaux de qualité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === product.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Overlay with actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-3 rounded-full shadow-lg transition-colors ${
                      favorites.includes(product.id)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white hover:bg-emerald-600 hover:text-white'
                    }`}
                  >
                    <Heart size={20} className={favorites.includes(product.id) ? 'fill-current' : ''} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => addToCart(product.name)}
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </motion.button>
                </motion.div>

                {/* Badge "Nouveau" */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Nouveau
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm transition-colors">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 transition-colors">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product.name)}
                    className="px-6 py-2 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
                  >
                    Acheter
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}