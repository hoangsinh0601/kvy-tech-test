export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface CartItem extends Product {
  quantity: number;
}
export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  searchQuery: string;
  sortBy: SortOption;
}

export type SortOption =
  | "price-asc"
  | "price-desc"
  | "rating-asc"
  | "rating-desc"
  | "name-asc"
  | "name-desc";
