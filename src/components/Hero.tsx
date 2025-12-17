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
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered Content */}
          <div className="text-center space-y-8 mb-16">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full animate-fade-in">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium tracking-wide">
                Premium {restaurantInfo.cuisines.join(' & ')} Cuisine
              </span>
              <Star className="w-4 h-4 text-gold fill-gold" />
            </div>

            {/* Main Headline - Centered */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight">
                <span className="block mb-2">Order Authentic</span>
                <span className="text-gold-gradient bg-clip-text">
                  Indian & Chinese Food
                </span>
                <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl">Anytime, Anywhere</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the finest blend of traditional Indian spices and authentic Chinese flavors,
                crafted fresh daily and delivered with love.
              </p>
            </div>

            {/* CTAs - Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="whatsapp-gradient text-white font-bold text-lg px-10 py-7 rounded-full shadow-luxury glow-whatsapp hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Order on WhatsApp Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={scrollToMenu}
                className="glass border-white/20 hover:bg-white/10 text-white font-semibold text-lg px-10 py-7 rounded-full transition-all duration-300 hover:border-gold/50"
              >
                Explore Menu
              </Button>
            </div>

            {/* Trust Indicators - Centered Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="glass-dark p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
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

              <div className="glass-dark p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
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

              <div className="glass-dark p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
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

          {/* Featured Dishes Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {[
              { name: 'Butter Chicken', price: '₹280', emoji: '🍗' },
              { name: 'Paneer Tikka', price: '₹220', emoji: '🧀' },
              { name: 'Chicken Fried Rice', price: '₹200', emoji: '🍚' },
              { name: 'Veg Momos', price: '₹100', emoji: '🥟' }
            ].map((dish, idx) => (
              <div
                key={idx}
                className="glass-dark p-4 rounded-2xl text-center hover-lift cursor-pointer group"
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

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
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
