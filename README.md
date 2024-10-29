# 🛍️ Product Display Project

A modern React component library for displaying product information with an "Add to Cart" feature.

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Quick Start

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 💻 Usage Example

Here's how to implement the ProductCard component:

```typescript
import React from "react";
import { ProductCard } from "./components/ProductCard";
import { Product } from "./types";

const mockProduct: Product = {
  id: 1,
  title: "Sample Product",
  description: "This is a description of the sample product.",
  image: "https://via.placeholder.com/150",
  price: 29.99,
};

function App() {
  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ProductCard product={mockProduct} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
```

## 🧪 Testing

Run the test suite:

```bash
# Watch mode
npm test

# Single run
npm test -- --watchAll=false
```

## 📚 Technical Overview

### Component Architecture

- **Component Structure**: Clean and modular design using Tailwind CSS
- **Props Interface**: Type-safe props with TypeScript
- **Event Handling**: Robust callback system for cart interactions

### Testing Strategy

- Unit tests for component rendering
- Integration tests for user interactions
- Mock data handling for consistent testing

## 🔄 Development Workflow

### Challenges Addressed

1. **Type Safety**

   - Implemented comprehensive TypeScript interfaces
   - Strict prop validation

2. **Responsive Design**

   - Mobile-first approach with Tailwind CSS
   - Cross-device compatibility

3. **Testing Complexity**
   - Async component testing
   - Mock data management

### Future Roadmap

1. **Enhanced Features**

   - Product ratings system
   - Wishlist functionality
   - Advanced filtering options

2. **Technical Improvements**

   - Redux integration for state management
   - Performance optimizations
   - Accessibility enhancements

3. **User Experience**
   - Loading states
   - Error boundaries
   - Animation effects

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
