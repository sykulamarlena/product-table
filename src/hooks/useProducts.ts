"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/actions/api";

const filterKeys = ["title", "categoryId", "price_min", "price_max"];

function buildProductsQuery(params: URLSearchParams) {
  const page = Number(params.get("page") ?? 1);
  const limit = Number(params.get("limit") ?? 10);

  const query = new URLSearchParams();
  filterKeys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      query.set(key, value);
    }
  });

  // TODO dodanie sortowania po stronie serwera
  // obecnie sort i order są ignorowane przez API
  // const sort = params.get("sort");
  // const order = params.get("order");
  // if (sort && order) {
  //   query.set("sort", sort);
  //   query.set("order", order);
  // }

  query.set("offset", String((page - 1) * limit));
  query.set("limit", String(limit));
  return query.toString();
}

function useProducts(params: URLSearchParams) {
  const query = buildProductsQuery(params);

  return useQuery({
    queryKey: ["products", query],
    queryFn: () => fetchProducts(query),
  });
}

export default useProducts;