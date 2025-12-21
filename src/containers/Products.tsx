"use client";

import { Stack } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import ProductsFilters from "@/components/ProductsFilters";
import ProductsTable from "@/components/ProductsTable";
import useProducts from "@/hooks/useProducts";

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
