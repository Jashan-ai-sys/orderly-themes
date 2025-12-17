import { Plus, Minus } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { items, addToCart, updateQuantity } = useCart();
  
  const cartItemFull = items.find(i => i.id === item.id && i.selectedSize === 'full');
  const cartItemHalf = items.find(i => i.id === item.id && i.selectedSize === 'half');

  return (
    <Card className="group bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
      <div className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center flex-shrink-0 ${
                item.isVeg ? 'border-green-500' : 'border-red-500'
              }`}>
                <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
              </span>
              <h3 className="font-medium text-foreground truncate">{item.name}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{item.cuisine} • {item.category}</p>
          </div>
        </div>

        {/* Price and Add buttons */}
        <div className="space-y-2">
          {/* Full portion */}
          <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
            <div>
              <span className="text-xs text-muted-foreground">Full</span>
              <p className="font-semibold text-primary">₹{item.price}</p>
            </div>
            {cartItemFull ? (
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 border-primary/50"
                  onClick={() => updateQuantity(item.id, 'full', cartItemFull.quantity - 1)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-6 text-center font-medium">{cartItemFull.quantity}</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 border-primary/50"
                  onClick={() => updateQuantity(item.id, 'full', cartItemFull.quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => addToCart(item, 'full')}
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            )}
          </div>

          {/* Half portion (if available) */}
          {item.halfPrice && (
            <div className="flex items-center justify-between bg-muted/30 rounded-lg px-3 py-2">
              <div>
                <span className="text-xs text-muted-foreground">Half</span>
                <p className="font-semibold text-primary">₹{item.halfPrice}</p>
              </div>
              {cartItemHalf ? (
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 border-primary/50"
                    onClick={() => updateQuantity(item.id, 'half', cartItemHalf.quantity - 1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-6 text-center font-medium">{cartItemHalf.quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 border-primary/50"
                    onClick={() => updateQuantity(item.id, 'half', cartItemHalf.quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                  onClick={() => addToCart(item, 'half')}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MenuItemCard;
