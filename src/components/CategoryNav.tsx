import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuCategories } from '@/data/menuData';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkArrows();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkArrows);
      return () => scrollEl.removeEventListener('scroll', checkArrows);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-card border-y border-border">
      {showLeftArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card shadow-lg"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      )}
      
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide py-3 px-4 md:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <button
          onClick={() => onCategoryChange('all')}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
          }`}
        >
          All Items
        </button>
        {menuCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {showRightArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card shadow-lg"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default CategoryNav;
