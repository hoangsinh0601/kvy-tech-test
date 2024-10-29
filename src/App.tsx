import React, { lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart as CartIcon, Loader } from "lucide-react";
import { ProductGrid } from "./components/ProductGrid";
import { Filters } from "./components/Filters";
import { RootState } from "./store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "./store/slices/cartSlice";
import { Product } from "./types";
import { useFilters } from "./hooks/useFilters";
import { useProducts } from "./hooks/useProduct";

const Cart = lazy(() =>
  import("./components/Cart").then((module) => ({ default: module.default }))
);

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { products, loading, error } = useProducts(10);

  const {
    filters,
    setFilters,
    sortBy,
    setSortBy,
    filteredProducts,
    categories,
  } = useFilters(products);

  const handleAddToCart = (product: Product) => dispatch(addToCart(product));
  const handleRemoveFromCart = (id: number) => dispatch(removeFromCart(id));
  const handleUpdateQuantity = (id: number, quantity: number) =>
    dispatch(updateQuantity({ id, quantity }));

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return !error ? (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">StyleStore</h1>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <CartIcon size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Filters
          filters={filters}
          onFilterChange={setFilters}
          sortBy={sortBy}
          onSortChange={setSortBy}
          categories={categories}
        />

        <div className="mt-6">
          {
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          }
          {loading && (
            <div className="w-full h-full flex justify-center items-center">
              <Loader size={50} />
            </div>
          )}
        </div>
      </main>

      <Suspense fallback={null}>
        {isCartOpen && (
          <Cart
            items={cartItems}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onRemove={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        )}
      </Suspense>
    </div>
  ) : (
    <div className="w-screen h-screen flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-triangle-alert"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    </div>
  );
}

export default App;
