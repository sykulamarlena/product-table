// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

export const metadata = {
  title: "Zadanie rekrutacyjne - tabela produktów",
  description:
    "Zadanie rekrutacyjne dla Senior Frontend Developera: przygotuj tabelę produktów z paginacją, filtrowaniem i sortowaniem na bazie external API Platzi Fake Store. W projekcie dostępna jest biblioteka Mantine wspomagająca budowę UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
