"use client";

import { Group, TextInput, Select, NumberInput } from "@mantine/core";
import useCategories from "@/hooks/useCategories";
import useTableParams from "@/hooks/useTableParams";
import { Category } from "@/types/types";

export default function ProductsFilters() {
  const { params, setParams } = useTableParams();
  const { data: categories } = useCategories();

  const renderCategoryOptions = () => {
    if (!categories) {
      return [];
    }

    return categories.map((c: Category) => ({
      value: String(c.id),
      label: c.name,
    }));
  };

  return (
    <Group grow>
      <TextInput
        label="Nazwa"
        value={params.get("title") ?? ""}
        onChange={(e) => setParams("title", e.target.value)}
      />
      <Select
        label="Kategoria"
        data={renderCategoryOptions()}
        value={params.get("categoryId")}
        onChange={(v) => setParams("categoryId", v ?? undefined)}
        clearable
      />
      <NumberInput
        label="Cena od"
        value={Number(params.get("price_min")) || undefined}
        onChange={(v) => setParams("price_min", v?.toString())}
      />
      <NumberInput
        label="Cena do"
        value={Number(params.get("price_max")) || undefined}
        onChange={(v) => setParams("price_max", v?.toString())}
      />
    </Group>
  );
};