import { restaurantInfo } from '@/data/menuData';
import { MessageCircle, ChefHat, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi ${restaurantInfo.name}! I'd like to place an order.`
    );
    const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu-section');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center animate-pan-zoom"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay for readability */}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered Content */}
          <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
            {/* Logo - Mobile Only */}
            <div className="md:hidden opacity-0 animate-fade-down" style={{ animationFillMode: 'both' }}>
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full ring-2 ring-gold/20">
                <img
                  src="/logo.jpg"
                  alt="The Urban Oven"
                  className="w-full h-full object-cover scale-150"
                />
              </div>
            </div>

            {/* Premium Badge - Desktop Only */}
            <div className="hidden md:inline-flex items-center gap-3 glass px-6 py-3 rounded-full opacity-0 animate-fade-down" style={{ animationFillMode: 'both' }}>
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium tracking-wide">
                Premium {restaurantInfo.cuisines.join(' & ')} Cuisine
              </span>
              <Star className="w-4 h-4 text-gold fill-gold" />
            </div>

            {/* Main Headline - Responsive */}
            <div className="space-y-4 md:space-y-6">
              {/* Mobile - Animated Dish Image */}
              <div className="md:hidden py-4 perspective-1000">
                <img
                  src="/hero-dish.png"
                  alt="Delicious Dish"
                  className="w-64 h-64 mx-auto object-cover rounded-full shadow-2xl animate-spin-slow ring-4 ring-black/30"
                />
              </div>

              {/* Desktop Headline - Full Version */}
              <h1 className="hidden md:block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight">
                <span className="block mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>Order Authentic</span>
                <span className="text-gold-gradient bg-clip-text opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  Indian & Chinese Food
                </span>
                <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl opacity-0 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Anytime, Anywhere</span>
              </h1>

              {/* Description - Desktop Only */}
              <p
                className="hidden md:block text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-up"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                Experience the finest blend of traditional Indian spices and authentic Chinese flavors,
                crafted fresh daily and delivered with love.
              </p>
            </div>

            {/* CTAs - Simplified for Mobile */}
            <div
              className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center items-center opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto whatsapp-gradient text-white font-bold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full shadow-luxury glow-whatsapp hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:animate-pulse" />
                Order on WhatsApp
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToMenu}
                className="w-full sm:w-auto glass border-white/20 hover:bg-white/10 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full transition-all duration-300 hover:border-gold/50"
              >
                View Menu
              </Button>
            </div>

            {/* Trust Indicators - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
              <div
                className="glass-dark p-6 rounded-2xl hover:scale-105 transition-transform duration-300 opacity-0 animate-scale-in"
                style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <ChefHat className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">Fresh Ingredients</p>
                    <p className="text-sm text-muted-foreground">Premium Quality Daily</p>
                  </div>
                </div>
              </div>

              <div
                className="glass-dark p-6 rounded-2xl hover:scale-105 transition-transform duration-300 opacity-0 animate-scale-in"
                style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">{restaurantInfo.deliveryInfo}</p>
                    <p className="text-sm text-muted-foreground">Min. Order ₹{restaurantInfo.minOrder}</p>
                  </div>
                </div>
              </div>

              <div
                className="glass-dark p-6 rounded-2xl hover:scale-105 transition-transform duration-300 opacity-0 animate-scale-in"
                style={{ animationDelay: '1.0s', animationFillMode: 'both' }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                    <Star className="w-7 h-7 text-gold fill-gold" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">4.8★ Rating</p>
                    <p className="text-sm text-muted-foreground">2,500+ Happy Orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Dishes Strip - Hidden on Mobile */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'Butter Chicken', price: '₹280', emoji: '🍗' },
              { name: 'Paneer Tikka', price: '₹220', emoji: '🧀' },
              { name: 'Chicken Fried Rice', price: '₹200', emoji: '🍚' },
              { name: 'Veg Momos', price: '₹100', emoji: '🥟' }
            ].map((dish, idx) => (
              <div
                key={idx}
                className="glass-dark p-4 rounded-2xl text-center hover-lift cursor-pointer group opacity-0 animate-fade-up"
                style={{ animationDelay: `${1.2 + (idx * 0.1)}s`, animationFillMode: 'both' }}
                onClick={scrollToMenu}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {dish.emoji}
                </div>
                <p className="font-semibold text-sm mb-1">{dish.name}</p>
                <p className="text-gold text-xs font-bold">{dish.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator - Desktop Only */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
