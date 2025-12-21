import { API_URL } from "@/types/types";

export const fetchProducts = async (query: string) => {
  const response = await fetch(`${API_URL}/products?${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};
