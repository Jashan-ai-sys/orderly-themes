import { useMemo, useState } from 'react';
import { menuCategories, MenuItem } from '@/data/menuData';
import MenuItemCard from './MenuItemCard';
import CategoryNav from './CategoryNav';
import MenuFilters, { Filters } from './MenuFilters';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filters, setFilters] = useState<Filters>({
    search: '',
    sortBy: 'default',
    priceRange: 'all',
    diet: 'all',
    cuisine: 'all',
  });

  const filteredItems = useMemo(() => {
    let items: MenuItem[] = [];
    
    // Get items based on category
    if (activeCategory === 'all') {
      items = menuCategories.flatMap(cat => cat.items);
    } else {
      const category = menuCategories.find(cat => cat.id === activeCategory);
      items = category ? category.items : [];
    }

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower)
      );
    }

    // Apply diet filter
    if (filters.diet === 'veg') {
      items = items.filter(item => item.isVeg);
    } else if (filters.diet === 'non-veg') {
      items = items.filter(item => !item.isVeg);
    }

    // Apply cuisine filter
    if (filters.cuisine !== 'all') {
      items = items.filter(item => item.cuisine === filters.cuisine);
    }

    // Apply price filter
    if (filters.priceRange !== 'all') {
      items = items.filter(item => {
        const price = item.halfPrice || item.price;
        switch (filters.priceRange) {
          case 'under-100': return price < 100;
          case '100-200': return price >= 100 && price < 200;
          case '200-300': return price >= 200 && price < 300;
          case 'above-300': return price >= 300;
          default: return true;
        }
      });
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        items = [...items].sort((a, b) => (a.halfPrice || a.price) - (b.halfPrice || b.price));
        break;
      case 'price-high':
        items = [...items].sort((a, b) => (b.halfPrice || b.price) - (a.halfPrice || a.price));
        break;
      case 'name':
        items = [...items].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return items;
  }, [activeCategory, filters]);

  // Group items by category for display
  const groupedItems = useMemo(() => {
    if (activeCategory !== 'all') {
      return [{ id: activeCategory, name: menuCategories.find(c => c.id === activeCategory)?.name || '', items: filteredItems }];
    }
    
    const groups: { id: string; name: string; items: MenuItem[] }[] = [];
    menuCategories.forEach(category => {
      const categoryItems = filteredItems.filter(item => item.category === category.name);
      if (categoryItems.length > 0) {
        groups.push({ id: category.id, name: category.name, items: categoryItems });
      }
    });
    return groups;
  }, [activeCategory, filteredItems]);

  return (
    <section className="min-h-screen">
      <MenuFilters filters={filters} onFiltersChange={setFilters} />
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <div className="container mx-auto px-4 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedItems.map((group) => (
              <div key={group.id}>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary" />
                  {group.name}
                  <span className="text-sm font-normal text-muted-foreground">({group.items.length} items)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {group.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
