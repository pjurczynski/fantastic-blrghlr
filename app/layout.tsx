import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Czy Dominik jest już zdrowy?",
  description: "Licznik życzeń powrotu do zdrowia dla Dominika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
