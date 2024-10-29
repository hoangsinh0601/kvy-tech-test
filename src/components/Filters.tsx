import { Search } from "lucide-react";
import { FilterState, SortOption } from "../types";

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  categories: string[];
}

export function Filters({
  filters,
  onFilterChange,
  sortBy,
  onSortChange,
  categories,
}: FiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
          value={filters.searchQuery}
          onChange={(e) =>
            onFilterChange({ ...filters, searchQuery: e.target.value })
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          className="border rounded-lg p-2"
          value={filters.category}
          onChange={(e) =>
            onFilterChange({ ...filters, category: e.target.value })
          }
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full border rounded-lg p-2"
              value={filters.minPrice}
              onChange={(e) =>
                onFilterChange({ ...filters, minPrice: Number(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full border rounded-lg p-2"
              value={filters.maxPrice}
              onChange={(e) =>
                onFilterChange({ ...filters, maxPrice: Number(e.target.value) })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Minimum Rating</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            className="w-full"
            value={filters.minRating}
            onChange={(e) =>
              onFilterChange({ ...filters, minRating: Number(e.target.value) })
            }
          />
          <span className="text-sm text-gray-600">
            {filters.minRating} stars
          </span>
        </div>

        <select
          className="border rounded-lg p-2"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Highest Rated</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
      </div>
    </div>
  );
}
