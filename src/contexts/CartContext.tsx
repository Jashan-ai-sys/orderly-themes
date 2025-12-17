import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '@/data/menuData';

export interface CartItem extends MenuItem {
  quantity: number;
  selectedSize: 'half' | 'full';
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, size: 'half' | 'full') => void;
  removeFromCart: (itemId: string, size: 'half' | 'full') => void;
  updateQuantity: (itemId: string, size: 'half' | 'full', quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItem, size: 'half' | 'full') => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        i => i.id === item.id && i.selectedSize === size
      );
      
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      
      return [...prev, { ...item, quantity: 1, selectedSize: size }];
    });
  };

  const removeFromCart = (itemId: string, size: 'half' | 'full') => {
    setItems(prev => prev.filter(i => !(i.id === itemId && i.selectedSize === size)));
  };

  const updateQuantity = (itemId: string, size: 'half' | 'full', quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId, size);
      return;
    }
    
    setItems(prev =>
      prev.map(item =>
        item.id === itemId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = items.reduce((sum, item) => {
    const price = item.selectedSize === 'half' && item.halfPrice 
      ? item.halfPrice 
      : item.price;
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isCartOpen,
      setIsCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
