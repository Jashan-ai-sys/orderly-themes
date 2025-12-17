import { Phone, ShoppingCart, MapPin, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { restaurantInfo } from '@/data/menuData';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass-dark shadow-luxury-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Info Bar - Desktop Only */}
        <div className="hidden lg:flex items-center justify-between py-2 text-xs border-b border-white/5">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href={`tel:${restaurantInfo.phone1}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3" />
              {restaurantInfo.phone1}
            </a>
            <a
              href={`tel:${restaurantInfo.phone2}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3" />
              {restaurantInfo.phone2}
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span className="max-w-md truncate">{restaurantInfo.address}</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold text-gold-gradient bg-clip-text">
              {restaurantInfo.name}
            </h1>
            <span className="text-[10px] lg:text-xs text-muted-foreground tracking-[0.2em] uppercase">
              {restaurantInfo.tagline}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('menu-section')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('specials')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Specials
            </button>
            <a
              href={`tel:${restaurantInfo.phone1}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="relative glass border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 whatsapp-gradient text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold shadow-lg">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden glass border-white/10 hover:border-primary/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-dark rounded-2xl p-6 mb-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('menu-section')}
                className="text-left text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('specials')}
                className="text-left text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Specials
              </button>
              <a
                href={`tel:${restaurantInfo.phone1}`}
                className="text-left text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Contact
              </a>
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`tel:${restaurantInfo.phone1}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {restaurantInfo.phone1}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
