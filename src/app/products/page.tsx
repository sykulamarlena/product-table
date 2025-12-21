import { Container, Title } from "@mantine/core";
import Products from "@/containers/Products";

export default function ProductsPage() {
  return (
    <Container size="md" py="xl">
      <Title>Tabela produktów</Title>
      <Products />
    </Container>
  );
}
