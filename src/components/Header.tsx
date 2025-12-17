import { Phone, ShoppingCart, MapPin } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { restaurantInfo } from '@/data/menuData';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href={`tel:${restaurantInfo.phone1}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              {restaurantInfo.phone1}
            </a>
            <a href={`tel:${restaurantInfo.phone2}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              {restaurantInfo.phone2}
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-xs max-w-md truncate">{restaurantInfo.address}</span>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient bg-clip-text">
              {restaurantInfo.name}
            </h1>
            <span className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase">
              {restaurantInfo.tagline}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-xs text-muted-foreground">{restaurantInfo.deliveryInfo}</p>
              <p className="text-xs text-primary">Min. Order ₹{restaurantInfo.minOrder}</p>
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="relative border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5 text-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
