import { Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '@/data/menuData';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold-gradient bg-clip-text">
              {restaurantInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {restaurantInfo.slogan} - Experience authentic flavors crafted with passion and served with love.
            </p>
            <div className="flex gap-2">
              {restaurantInfo.cuisines.map((cuisine) => (
                <span key={cuisine} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">
                  {cuisine}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a href={`tel:${restaurantInfo.phone1}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                {restaurantInfo.phone1}
              </a>
              <a href={`tel:${restaurantInfo.phone2}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                {restaurantInfo.phone2}
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{restaurantInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Hours & Delivery */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-foreground">Delivery Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Open Daily: 11:00 AM - 11:00 PM</span>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                <p className="text-sm font-medium text-foreground">{restaurantInfo.deliveryInfo}</p>
                <p className="text-xs text-muted-foreground">Minimum order: ₹{restaurantInfo.minOrder}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
