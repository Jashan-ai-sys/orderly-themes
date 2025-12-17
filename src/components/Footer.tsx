import { Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '@/data/menuData';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative bg-black/40 border-t border-white/5">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-serif font-bold text-gold-gradient bg-clip-text">
              {restaurantInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0">
              {restaurantInfo.slogan} - Experience authentic flavors crafted with passion and served with love.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {restaurantInfo.cuisines.map((cuisine) => (
                <span
                  key={cuisine}
                  className="glass px-3 py-1 rounded-full text-xs font-medium"
                >
                  {cuisine}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-serif font-semibold text-foreground">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${restaurantInfo.phone1}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start group"
              >
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:glow-whatsapp transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                {restaurantInfo.phone1}
              </a>
              <a
                href={`tel:${restaurantInfo.phone2}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start group"
              >
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:glow-whatsapp transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                {restaurantInfo.phone2}
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-left">{restaurantInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Delivery Info Section */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-serif font-semibold text-foreground">
              Delivery Info
            </h4>
            <div className="space-y-3">
              <div className="glass-dark p-4 rounded-2xl space-y-2">
                <p className="text-sm font-medium text-foreground">
                  {restaurantInfo.deliveryInfo}
                </p>
                <p className="text-xs text-muted-foreground">
                  Minimum order: ₹{restaurantInfo.minOrder}
                </p>
                <p className="text-xs text-muted-foreground">
                  Daily: 11:00 AM - 11:00 PM
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="icon"
                  className="glass border-white/10 hover:border-pink-500/50 hover:glow-orange transition-all"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="glass border-white/10 hover:border-primary/50 hover:glow-whatsapp transition-all"
                  asChild
                >
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(restaurantInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Made with ❤️ for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
