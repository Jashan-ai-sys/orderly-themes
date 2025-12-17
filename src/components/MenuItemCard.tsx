import { MenuItem } from '@/data/menuData';
import { restaurantInfo } from '@/data/menuData';
import { MessageCircle, ShoppingCart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi ${restaurantInfo.name}! I would like to order:\n• ${item.name}${item.halfPrice ? ' (Full)' : ''} – ₹${item.price}`
    );
    const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = (size: 'half' | 'full') => {
    addToCart(item, size);
  };

  return (
    <div className="group glass-dark rounded-2xl overflow-hidden hover-lift shadow-luxury-sm hover:shadow-luxury transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-muted/20">
        {!imageError && item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
            <span className="text-6xl opacity-50">🍽️</span>
          </div>
        )}

        {/* Veg/Non-Veg Badge */}
        <div className="absolute top-3 left-3">
          <div className={`glass px-3 py-1.5 rounded-full flex items-center gap-1.5 ${item.isVeg ? 'border-green-500/30' : 'border-red-500/30'
            }`}>
            <div className={`w-3 h-3 border-2 rounded-sm flex items-center justify-center ${item.isVeg ? 'border-green-500' : 'border-red-500'
              }`}>
              <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'
                }`} />
            </div>
            {item.isVeg && <Leaf className="w-3 h-3 text-green-500" />}
          </div>
        </div>

        {/* Cuisine Badge */}
        <div className="absolute top-3 right-3">
          <span className="glass px-3 py-1 rounded-full text-xs font-medium capitalize">
            {item.cuisine}
          </span>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-1 line-clamp-1">
            {item.name}
          </h3>
          <p className="text-xs text-muted-foreground capitalize">
            {item.category}
          </p>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        )}

        {/* Pricing & Actions */}
        <div className="space-y-3 pt-2 border-t border-white/5">
          {/* Price Display */}
          <div className="flex items-center justify-between">
            {item.halfPrice ? (
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Half</p>
                  <p className="text-lg font-bold text-gold-gradient bg-clip-text">₹{item.halfPrice}</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Full</p>
                  <p className="text-lg font-bold text-gold-gradient bg-clip-text">₹{item.price}</p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-2xl font-bold text-gold-gradient bg-clip-text">
                  ₹{item.price}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {item.halfPrice ? (
            <div className="grid grid-cols-2 gap-2">
              <Button
                size="sm"
                onClick={() => handleAddToCart('half')}
                className="glass border border-primary/30 hover:bg-primary/10 text-white font-medium rounded-lg transition-all duration-300"
              >
                <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                Half
              </Button>
              <Button
                size="sm"
                onClick={() => handleAddToCart('full')}
                className="glass border border-primary/30 hover:bg-primary/10 text-white font-medium rounded-lg transition-all duration-300"
              >
                <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                Full
              </Button>
            </div>
          ) : (
            <Button
              size="sm"
              onClick={() => handleAddToCart('full')}
              className="w-full glass border border-primary/30 hover:bg-primary/10 text-white font-medium py-2.5 rounded-lg transition-all duration-300"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
