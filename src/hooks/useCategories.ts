"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/actions/api";

function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
}

export default useCategories;