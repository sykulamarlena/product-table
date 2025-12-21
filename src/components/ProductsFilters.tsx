"use client";

import { Group, NumberInput, Select, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import useCategories from "@/hooks/useCategories";
import useTableParams from "@/hooks/useTableParams";
import type { Category } from "@/types/types";

export default function ProductsFilters() {
  const { params, setParams } = useTableParams();
  const { data: categories } = useCategories();
  const [title, setTitle] = useState(params.get("title") ?? "");
  const [debouncedTitle] = useDebouncedValue(title, 400);

  useEffect(() => {
    if (debouncedTitle) {
      setParams("title", debouncedTitle);
    } else {
      setParams("title", undefined);
    }
  }, [debouncedTitle]);

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
        placeholder="Wpisz nazwę produktu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Select
        label="Kategoria"
        placeholder="Wybierz kategorię"
        data={renderCategoryOptions()}
        value={params.get("categoryId")}
        onChange={(v) => setParams("categoryId", v ?? undefined)}
        clearable
      />
      <NumberInput
        label="Cena od"
        placeholder="0"
        min={0}
        value={Number(params.get("price_min")) || undefined}
        onChange={(v) => setParams("price_min", v?.toString())}
      />
      <NumberInput
        label="Cena do"
        placeholder="0"
        min={0}
        value={Number(params.get("price_max")) || undefined}
        onChange={(v) => setParams("price_max", v?.toString())}
      />
    </Group>
  );
}
