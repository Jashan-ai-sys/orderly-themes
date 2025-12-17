import { restaurantInfo } from '@/data/menuData';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block">
            <span className="text-xs md:text-sm tracking-[0.3em] text-primary uppercase border border-primary/30 px-4 py-2 rounded-full">
              {restaurantInfo.cuisines.join(' • ')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            <span className="text-gold-gradient bg-clip-text">{restaurantInfo.slogan}</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Experience authentic flavors crafted with passion. From sizzling tandoori delights to gourmet pizzas, 
            every dish tells a story of culinary excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">Now Accepting Orders</span>
            </div>
            <span className="hidden sm:block text-border">|</span>
            <span className="text-sm text-primary font-medium">
              {restaurantInfo.deliveryInfo} (Min. ₹{restaurantInfo.minOrder})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
