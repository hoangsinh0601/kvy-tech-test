import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductCard } from "../components/ProductCard";
import { Product } from "../types";
import React from "react";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  description: "This is a description for the test product.",
  image: "https://via.placeholder.com/150",
  price: 19.99,
  category: "price-desc",
  rating: {
    rate: 1,
    count: 1,
  },
};

describe("ProductCard", () => {
  it("renders product details correctly", () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(
      screen.getByText(`$${mockProduct.price.toFixed(2)}`)
    ).toBeInTheDocument();

    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img).toHaveAttribute("src", mockProduct.image);
    expect(img).toHaveAttribute("alt", mockProduct.title);
  });

  it("calls onAddToCart when the Add to Cart button is clicked", () => {
    const onAddToCartMock = jest.fn();
    render(<ProductCard product={mockProduct} onAddToCart={onAddToCartMock} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(onAddToCartMock).toHaveBeenCalledTimes(1);
    expect(onAddToCartMock).toHaveBeenCalledWith(mockProduct);
  });
});
