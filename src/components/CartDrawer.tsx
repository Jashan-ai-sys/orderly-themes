import { X, Plus, Minus, Trash2, MessageCircle, MapPin } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { restaurantInfo } from '@/data/menuData';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    phone: '',
    address: '',
    area: '',
    saveForFuture: false
  });

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

    if (deliveryDetails.name && deliveryDetails.phone && deliveryDetails.address) {
      message += `📍 *Delivery Details:*\n`;
      message += `Name: ${deliveryDetails.name}\n`;
      message += `Phone: +91 ${deliveryDetails.phone}\n`;
      message += `Address: ${deliveryDetails.address}\n`;
      if (deliveryDetails.area) {
        message += `Area: ${deliveryDetails.area}\n`;
      }
      message += `\n`;
    }

    message += `Thank you for ordering! 🙏`;

    return encodeURIComponent(message);
  };

  const handleProceedToCheckout = () => {
    if (items.length === 0) return;
    setShowDeliveryForm(true);
  };

  const handlePlaceOrder = () => {
    if (!deliveryDetails.name || !deliveryDetails.phone || !deliveryDetails.address) {
      alert('Please fill in all required delivery details');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Optionally clear cart after order
    // clearCart();
    // setShowDeliveryForm(false);
    // setIsCartOpen(false);
  };

  const isMinOrderMet = totalPrice >= restaurantInfo.minOrder;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-card border-l border-border flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="flex items-center justify-between text-foreground">
            <span className="font-serif text-xl">Your Cart</span>
            {items.length > 0 && !showDeliveryForm && (
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
        ) : showDeliveryForm ? (
          // Delivery Form
          <div className="flex-1 overflow-y-auto py-6 px-2">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-serif font-semibold">Delivery Details</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={deliveryDetails.name}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })}
                    className="glass border-white/10 bg-muted/20 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <div className="glass border-white/10 bg-muted/20 px-3 py-2 rounded-md flex items-center">
                      <span className="text-muted-foreground">+91</span>
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={deliveryDetails.phone}
                      onChange={(e) => setDeliveryDetails({ ...deliveryDetails, phone: e.target.value.replace(/\D/g, '') })}
                      className="glass border-white/10 bg-muted/20 focus:border-primary/50 flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium">
                    Street Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="House/Flat no., Building, Street"
                    value={deliveryDetails.address}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
                    className="glass border-white/10 bg-muted/20 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area" className="text-sm font-medium">
                    Area / Locality <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="area"
                    placeholder="Area or locality name"
                    value={deliveryDetails.area}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, area: e.target.value })}
                    className="glass border-white/10 bg-muted/20 focus:border-primary/50"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="save"
                    checked={deliveryDetails.saveForFuture}
                    onCheckedChange={(checked) => setDeliveryDetails({ ...deliveryDetails, saveForFuture: checked as boolean })}
                  />
                  <Label htmlFor="save" className="text-sm cursor-pointer">
                    Save for future orders
                  </Label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Cart Items
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => {
                const price = item.selectedSize === 'half' && item.halfPrice ? item.halfPrice : item.price;
                return (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 p-3 glass-dark rounded-lg">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-3 h-3 border rounded-sm flex items-center justify-center flex-shrink-0 ${item.isVeg ? 'border-green-500' : 'border-red-500'
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
                        className="h-8 w-8 border-border glass"
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-6 text-center font-medium text-sm">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 border-border glass"
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-4">
            <div className="space-y-2 px-2">
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

            {!isMinOrderMet && !showDeliveryForm && (
              <p className="text-xs text-center text-amber-500 px-2">
                Add ₹{restaurantInfo.minOrder - totalPrice} more for free delivery
              </p>
            )}

            {showDeliveryForm ? (
              <div className="space-y-2 px-2">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 rounded-full"
                  onClick={handlePlaceOrder}
                  disabled={!deliveryDetails.name || !deliveryDetails.phone || !deliveryDetails.address || !deliveryDetails.area}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Place Order via WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => setShowDeliveryForm(false)}
                >
                  Back to Cart
                </Button>
              </div>
            ) : (
              <>
                <Button
                  className="w-full whatsapp-gradient text-white font-semibold py-6 rounded-full hover:scale-105 transition-all duration-300"
                  onClick={handleProceedToCheckout}
                  disabled={!isMinOrderMet}
                >
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-center text-muted-foreground px-2">
                  Your order will be sent to our WhatsApp for confirmation
                </p>
              </>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
