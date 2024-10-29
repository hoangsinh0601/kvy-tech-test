import { useState, useMemo } from "react";
import { Product, FilterState, SortOption } from "../types";

export function useFilters(products: Product[]) {
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    searchQuery: "",
    sortBy: "price-asc",
  });
  const [sortBy, setSortBy] = useState<SortOption>("price-asc");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map((p) => p.category));
    return Array.from(uniqueCategories);
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          !filters.category || product.category === filters.category;
        const matchesPrice =
          product.price >= filters.minPrice &&
          product.price <= filters.maxPrice;
        const matchesRating = product.rating.rate >= filters.minRating;
        const matchesSearch = product.title
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase());
        return (
          matchesCategory && matchesPrice && matchesRating && matchesSearch
        );
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "rating-desc":
            return b.rating.rate - a.rating.rate;
          case "name-asc":
            return a.title.localeCompare(b.title);
          case "name-desc":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
  }, [products, filters, sortBy]);

  return {
    filters,
    setFilters,
    sortBy,
    setSortBy,
    filteredProducts,
    categories,
  };
}
