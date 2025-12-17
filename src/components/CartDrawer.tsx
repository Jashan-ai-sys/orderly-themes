import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { restaurantInfo } from '@/data/menuData';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  const generateWhatsAppMessage = () => {
    let message = `🍽️ *Order from ${restaurantInfo.name}*\n\n`;
    message += `📋 *Order Details:*\n`;
    message += `─────────────────\n`;
    
    items.forEach((item, index) => {
      const price = item.selectedSize === 'half' && item.halfPrice ? item.halfPrice : item.price;
      const sizeLabel = item.selectedSize === 'half' ? '(Half)' : '(Full)';
      message += `${index + 1}. ${item.name} ${sizeLabel}\n`;
      message += `   Qty: ${item.quantity} × ₹${price} = ₹${price * item.quantity}\n`;
    });
    
    message += `─────────────────\n`;
    message += `💰 *Total: ₹${totalPrice}*\n\n`;
    message += `📍 *Delivery Address:*\n[Please enter your address]\n\n`;
    message += `Thank you for ordering! 🙏`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const isMinOrderMet = totalPrice >= restaurantInfo.minOrder;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-card border-l border-border flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="flex items-center justify-between text-foreground">
            <span className="font-serif text-xl">Your Cart</span>
            {items.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive hover:text-destructive/80">
                <Trash2 className="w-4 h-4 mr-1" />
                Clear
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <span className="text-4xl">🍽️</span>
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground text-sm">Add some delicious items from our menu!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => {
                const price = item.selectedSize === 'half' && item.halfPrice ? item.halfPrice : item.price;
                return (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-3 h-3 border rounded-sm flex items-center justify-center flex-shrink-0 ${
                          item.isVeg ? 'border-green-500' : 'border-red-500'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
                        </span>
                        <h4 className="font-medium text-sm text-foreground truncate">{item.name}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground capitalize">{item.selectedSize} portion</p>
                      <p className="text-sm font-semibold text-primary mt-1">₹{price * item.quantity}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 border-border"
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-6 text-center font-medium text-sm">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 border-border"
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-green-500">{totalPrice >= restaurantInfo.minOrder ? 'FREE' : `Min. ₹${restaurantInfo.minOrder}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">₹{totalPrice}</span>
                </div>
              </div>

              {!isMinOrderMet && (
                <p className="text-xs text-center text-amber-500">
                  Add ₹{restaurantInfo.minOrder - totalPrice} more for free delivery
                </p>
              )}

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6"
                onClick={handleWhatsAppOrder}
                disabled={!isMinOrderMet}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Your order will be sent to our WhatsApp for confirmation
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
