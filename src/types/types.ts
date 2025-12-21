export const API_URL = "https://api.escuelajs.co/api/v1";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  image: string;
};