import { restaurantInfo } from '@/data/menuData';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi ${restaurantInfo.name}! I'd like to place an order.`
    );
    const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.png"
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3298572/3298572-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 opacity-0 animate-fade-down" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto overflow-hidden rounded-full ring-2 ring-gold/30 shadow-luxury">
            <img
              src="/logo.jpg"
              alt={restaurantInfo.name}
              className="w-full h-full object-cover scale-150"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
          <span 
            className="block text-white opacity-0 animate-fade-up" 
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Experience the
          </span>
          <span 
            className="block text-gold opacity-0 animate-fade-up" 
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            Authentic
          </span>
        </h1>

        {/* Description */}
        <p 
          className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Fresh, flavorful dishes delivered to your doorstep. 
          Free delivery on orders above ₹{restaurantInfo.minOrder}.
        </p>

        {/* Contact & Delivery Info */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          <a 
            href={`tel:${restaurantInfo.phone1}`}
            className="flex items-center gap-2 text-white/90 hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm md:text-base">{restaurantInfo.phone1}</span>
          </a>
          
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-sm md:text-base">Free Home Delivery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col items-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="whatsapp-gradient text-white font-bold text-base md:text-lg px-10 py-6 md:py-7 rounded-full shadow-luxury glow-whatsapp hover:scale-105 transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-3 group-hover:animate-pulse" />
            Order on WhatsApp
          </Button>
          
          <button
            onClick={() => document.querySelector('#menu-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/70 hover:text-gold transition-colors text-sm tracking-wide underline underline-offset-4"
          >
            View Menu
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
