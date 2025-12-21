"use client";

import { Center, Group, Loader, Pagination, Table } from "@mantine/core";
import useTableParams from "@/hooks/useTableParams";
import type { Product } from "@/types/types";

type ProductsTableProps = {
  data?: Product[];
  isLoading: boolean;
  params: URLSearchParams;
};

export default function ProductsTable({
  data,
  isLoading,
  params,
}: ProductsTableProps) {
  const { setParams } = useTableParams();

  if (isLoading) {
    return (
      <Center mt="xl" h={500}>
        <Loader />
      </Center>
    );
  }

  const renderPrice = (price: number) => {
    return `${price} zł`;
  };

  const rows = data?.map((p: Product) => (
    <Table.Tr key={p.id}>
      <Table.Td>{p.title}</Table.Td>
      <Table.Td>{p.category?.name || "-"}</Table.Td>
      <Table.Td>{renderPrice(p.price)}</Table.Td>
    </Table.Tr>
  ));

  const page = Number(params.get("page") ?? 1);
  return (
    <>
      <Table highlightOnHover verticalSpacing="md" withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Nazwa</Table.Th>
            <Table.Th>Kategoria</Table.Th>
            <Table.Th>Cena</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      {/* TODO: Total pages should be fetched from API */}
      {/* TODO: Fix pagination after filtering */}
      <Pagination.Root
        total={5}
        value={page}
        onChange={(p) => setParams("page", String(p))}
      >
        <Group gap={5} justify="center">
          <Pagination.First />
          <Pagination.Previous />
          <Pagination.Items />
          <Pagination.Next />
          <Pagination.Last />
        </Group>
      </Pagination.Root>
    </>
  );
}
