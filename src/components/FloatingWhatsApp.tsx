import { MessageCircle } from 'lucide-react';
import { restaurantInfo } from '@/data/menuData';

const FloatingWhatsApp = () => {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(
            `Hi ${restaurantInfo.name}! I'd like to place an order.`
        );
        const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 whatsapp-gradient text-white p-4 rounded-full shadow-luxury glow-whatsapp hover:scale-110 transition-all duration-300 animate-glow group"
            aria-label="Order on WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 glass-dark px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Order on WhatsApp
            </span>

            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full whatsapp-gradient opacity-30 animate-ping" />
        </button>
    );
};

export default FloatingWhatsApp;
