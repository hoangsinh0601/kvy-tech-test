import { Product } from "../../types";
import axiosInstance from "../axiosInstance";

export const fetchProducts = async (limit: number): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products", {
    params: { limit },
  });
  return response.data;
};
