"use client";

import useProducts from "@/hooks/useProducts";
import { useSearchParams } from "next/navigation";
import { Stack } from "@mantine/core";
import ProductsFilters from "@/components/ProductsFilters";
import ProductsTable from "@/components/ProductsTable";

export default function Products() {
  const params = useSearchParams();
  const { data, isLoading } = useProducts(params);
  
  return (
    <Stack p="md">
      <ProductsFilters />
      <ProductsTable data={data} isLoading={isLoading} params={params} />
    </Stack>
  );
}