import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
}

export function ProductCard({ name, price, image, description, isNew }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-emerald-500 hover:bg-emerald-600">
            Nouveau
          </Badge>
        )}
        <button className="absolute top-3 left-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <p className="text-2xl text-emerald-600">{price}€</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
}
