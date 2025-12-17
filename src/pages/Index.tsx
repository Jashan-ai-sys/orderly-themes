import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background font-sans">
        <Header />
        <main className="flex-1">
          <Hero />
          <MenuSection />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
};

export default Index;
