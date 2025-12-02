"use client";

import Link from "next/link";
import {
  Title,
  Text,
  List,
  Anchor,
  Stack,
  Paper,
  Container,
  Space,
  Code,
} from "@mantine/core";

export default function HomePage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {/* Nagłówek */}
        <Stack gap="xs" align="flex-start">
          <Title order={2}>Zadanie rekrutacyjne - tabela produktów</Title>
          <Text c="dimmed" size="md">
            Senior Frontend Developer - React / Next.js / TypeScript
          </Text>
        </Stack>

        {/* Sekcja - Wprowadzenie */}
        <Paper shadow="sm" radius="md" p="lg">
          <Title order={4} mb="xs">
            🎯 Cel zadania
          </Title>
          <Text mb="sm">
            Twoim zadaniem jest przygotowanie widoku listy produktów na
            podstawie zewnętrznego API{" "}
            <Anchor
              href="https://fakeapi.platzi.com/en"
              target="_blank"
              rel="noreferrer"
            >
              Platzi Fake Store
            </Anchor>
            . Widok powinien zachowywać się jak typowa tabela produktowa w
            systemie e-commerce B2B.
          </Text>

          <List spacing="xs" mb="sm">
            <List.Item>paginacja wyników (offset + limit),</List.Item>
            <List.Item>
              filtrowanie po nazwie, kategorii i zakresie ceny,
            </List.Item>
            <List.Item>sortowanie (np. po cenie lub nazwie),</List.Item>
            <List.Item>
              synchronizacja stanu tabeli w parametrach adresu URL.
            </List.Item>
          </List>
        </Paper>

        {/* Sekcja - API / dane */}
        <Paper shadow="sm" radius="md" p="lg">
          <Title order={4} mb="xs">
            🌐 Dane z Platzi Fake Store API
          </Title>

          <Text mb="xs">
            Produkty pochodzą z publicznego API{" "}
            <Anchor
              href="https://fakeapi.platzi.com/en/rest/products/"
              target="_blank"
              rel="noreferrer"
            >
              Platzi Fake Store API - Products
            </Anchor>
            . Podstawowy endpoint REST to:
          </Text>

          <Code
            block
            mb="sm"
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            https://api.escuelajs.co/api/v1/products
          </Code>

          <Text mb="xs">API obsługuje m.in.:</Text>

          <List spacing="xs" mb="sm">
            <List.Item>
              <strong>Paginację</strong> za pomocą parametrów{" "}
              <Code>offset</Code> i <Code>limit</Code>, np.:
              <Code
                block
                mt={4}
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                https://api.escuelajs.co/api/v1/products?offset=0&amp;limit=10
              </Code>
            </List.Item>
            <List.Item>
              <strong>Filtrowanie</strong> po nazwie (tytule), zakresie ceny i
              kategorii, np.:
              <Code
                block
                mt={4}
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                https://api.escuelajs.co/api/v1/products?title=Generic&amp;price_min=900&amp;price_max=1000&amp;categoryId=1&amp;limit=10&amp;offset=10
              </Code>
            </List.Item>
          </List>

          <Text mb="xs">Listę kategorii możesz pobrać z endpointu:</Text>
          <Code
            block
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            https://api.escuelajs.co/api/v1/categories
          </Code>

          <Text c="dimmed" size="sm" mt="sm">
            Możesz dobrać sposób łączenia paginacji i filtrów (np. tytuł, zakres
            cen, kategoria) w taki sposób, aby interfejs był spójny i
            przewidywalny dla użytkownika.
          </Text>
        </Paper>

        {/* Sekcja - UI / Mantine */}
        <Paper shadow="sm" radius="md" p="lg">
          <Title order={4} mb="xs">
            🎨 Warstwa UI - Mantine
          </Title>

          <Text mb="sm">
            W projekcie została zainstalowana biblioteka{" "}
            <Anchor
              href="https://mantine.dev/"
              target="_blank"
              rel="noreferrer"
              fw={600}
            >
              Mantine
            </Anchor>
            , aby ułatwić budowanie interfejsów i przyspieszyć realizację
            zadania. Możesz korzystać z gotowych komponentów takich jak{" "}
            <Code>Table</Code>, <Code>Pagination</Code>, <Code>Select</Code>,
            <Code>TextInput</Code> czy <Code>Loader</Code>.
          </Text>

          <Text c="dimmed" size="sm">
            Jeśli jednak preferujesz inną bibliotekę komponentów UI (np. MUI,
            Chakra, Ant Design) lub chcesz użyć rozwiązań własnych — możesz to
            zrobić. Ważne, aby finalny interfejs był czytelny oraz poprawnie
            odzwierciedlał logikę paginacji, filtrów i sortowania obsługiwanych
            przez endpointy API.
          </Text>
        </Paper>

        {/* Sekcja - Zakres implementacji */}
        <Paper shadow="sm" radius="md" p="lg">
          <Title order={4} mb="xs">
            🧭 Zakres implementacji na stronie /products
          </Title>
          <Text mb="sm">
            Zadanie wykonaj na stronie{" "}
            <Anchor component={Link} href="/products" fw={600}>
              /products
            </Anchor>
            . Twoim celem jest przygotowanie tabeli produktów, w której
            wszystkie operacje (paginacja, filtrowanie, sortowanie) oparte są na
            zapytaniach do endpointów API - nie na wyłącznym przetwarzaniu
            danych po stronie przeglądarki.
          </Text>

          <List spacing="xs" mb="sm">
            <List.Item>
              <strong>Paginacja</strong> - zmiana strony powinna powodować
              wykonanie nowego zapytania do API z odpowiednimi parametrami{" "}
              <Code>offset</Code> i <Code>limit</Code>, a bieżąca strona powinna
              być odzwierciedlona w URL.
            </List.Item>

            <List.Item>
              <strong>Filtrowanie / wyszukiwanie</strong> - na podstawie
              parametrów zapytania do API, np.:
              <List withPadding spacing={4} mt={4}>
                <List.Item>
                  pole wyszukiwania po nazwie produktu (title),
                </List.Item>
                <List.Item>
                  filtr kategorii (na bazie endpointu /categories),
                </List.Item>
                <List.Item>
                  filtr zakresu ceny (parametry <Code>price_min</Code> /{" "}
                  <Code>price_max</Code> w zapytaniu).
                </List.Item>
              </List>
              UI powinien odzwierciedlać aktualnie użyte filtry i parametry
              zapytania.
            </List.Item>

            <List.Item>
              <strong>Sortowanie</strong> - wybór sortowania (np. po cenie lub
              nazwie) powinien również skutkować wysłaniem odpowiednio
              zbudowanego zapytania do API (REST lub GraphQL), tak aby dane w
              tabeli pochodziły z odpowiedzi endpointu już w zadanym porządku.
            </List.Item>

            <List.Item>
              <strong>Synchronizacja stanu z URL</strong> - parametry takie jak
              strona, limit, wyszukiwanie, filtry i sortowanie powinny być
              odzwierciedlone w query paramach, tak aby po odświeżeniu strony
              stan widoku został zachowany, a UI potrafił zrekonstruować
              właściwe zapytanie do API.
            </List.Item>
          </List>

          <Text c="dimmed" size="sm">
            Struktura komponentów, sposób zarządzania stanem (np. hooki,
            context, zewnętrzna biblioteka) oraz szczegóły UX są po Twojej
            stronie - chcemy zobaczyć Twoje podejście do architektury, pracy z
            API i jakości kodu.
          </Text>
        </Paper>

        {/* Sekcja - Czas */}
        <Paper shadow="sm" radius="md" p="lg">
          <Title order={4} mb="xs">
            ⏱ Czas realizacji
          </Title>
          <Text>
            Rekomendowany czas pracy nad zadaniem:{" "}
            <Text span fw={600}>
              około 90 minut
            </Text>
            .
          </Text>
          <Space h="xs" />
          <Text c="dimmed" size="sm">
            Jeśli nie zdążysz dokończyć wszystkich elementów - możesz zostawić
            komentarz w kodzie lub w README, co byłoby Twoim kolejnym krokiem
            (np. dodatkowe testy, refaktoryzacja, obsługa dodatkowych edge
            case&apos;ów).
          </Text>
        </Paper>

        {/* Ostatnia sekcja */}
        <Paper shadow="sm" radius="md" p="lg">
          <Title order={4} mb="xs">
            🚀 Start
          </Title>
          <Text mb="xs">
            Gdy będziesz gotowy, przejdź do:{" "}
            <Anchor component={Link} href="/products" fw={600}>
              /products
            </Anchor>
            .
          </Text>
          <Text c="dimmed" size="sm">
            Możesz dowolnie organizować kod (komponenty, hooki, funkcje
            pomocnicze), o ile pozostanie on czytelny i łatwy do rozwijania.
          </Text>
        </Paper>
      </Stack>
    </Container>
  );
}
