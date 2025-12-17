import { useState } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

export interface Filters {
  search: string;
  sortBy: 'default' | 'price-low' | 'price-high' | 'name';
  priceRange: 'all' | 'under-100' | '100-200' | '200-300' | 'above-300';
  diet: 'all' | 'veg' | 'non-veg';
  cuisine: 'all' | 'Indian' | 'Chinese' | 'Continental';
}

interface MenuFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const MenuFilters = ({ filters, onFiltersChange }: MenuFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: '',
      sortBy: 'default',
      priceRange: 'all',
      diet: 'all',
      cuisine: 'all',
    });
  };

  const activeFilterCount = [
    filters.sortBy !== 'default',
    filters.priceRange !== 'all',
    filters.diet !== 'all',
    filters.cuisine !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="sticky top-[73px] md:top-[121px] z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
      <div className="container mx-auto px-4 space-y-4">
        {/* Search and filter toggle */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for dishes..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-10 bg-card border-border focus:border-primary"
            />
            {filters.search && (
              <button
                onClick={() => updateFilter('search', '')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <Button
            variant="outline"
            className={`border-border ${isExpanded || activeFilterCount > 0 ? 'border-primary text-primary' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="default" className="ml-2 bg-primary text-primary-foreground">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Expanded filters */}
        {isExpanded && (
          <div className="flex flex-wrap gap-3 animate-fade-in">
            {/* Sort */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-border">
                  Sort by
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={filters.sortBy} onValueChange={(v) => updateFilter('sortBy', v as Filters['sortBy'])}>
                  <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="name">Name: A to Z</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Price Range */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className={`border-border ${filters.priceRange !== 'all' ? 'border-primary text-primary' : ''}`}>
                  Price Range
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                <DropdownMenuRadioGroup value={filters.priceRange} onValueChange={(v) => updateFilter('priceRange', v as Filters['priceRange'])}>
                  <DropdownMenuRadioItem value="all">All Prices</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="under-100">Under ₹100</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="100-200">₹100 - ₹200</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="200-300">₹200 - ₹300</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="above-300">Above ₹300</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Diet */}
            <div className="flex gap-2">
              <Button
                variant={filters.diet === 'veg' ? 'default' : 'outline'}
                size="sm"
                className={filters.diet === 'veg' ? 'bg-green-600 hover:bg-green-700' : 'border-border'}
                onClick={() => updateFilter('diet', filters.diet === 'veg' ? 'all' : 'veg')}
              >
                <span className="w-3 h-3 border-2 border-green-500 rounded-sm mr-2 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                </span>
                Veg
              </Button>
              <Button
                variant={filters.diet === 'non-veg' ? 'default' : 'outline'}
                size="sm"
                className={filters.diet === 'non-veg' ? 'bg-red-600 hover:bg-red-700' : 'border-border'}
                onClick={() => updateFilter('diet', filters.diet === 'non-veg' ? 'all' : 'non-veg')}
              >
                <span className="w-3 h-3 border-2 border-red-500 rounded-sm mr-2 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                </span>
                Non-Veg
              </Button>
            </div>

            {/* Cuisine */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className={`border-border ${filters.cuisine !== 'all' ? 'border-primary text-primary' : ''}`}>
                  Cuisine
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                <DropdownMenuRadioGroup value={filters.cuisine} onValueChange={(v) => updateFilter('cuisine', v as Filters['cuisine'])}>
                  <DropdownMenuRadioItem value="all">All Cuisines</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Indian">Indian</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Chinese">Chinese</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Continental">Continental</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Clear filters */}
            {activeFilterCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4 mr-1" />
                Clear all
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuFilters;
