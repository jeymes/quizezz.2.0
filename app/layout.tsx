import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

// Importando as fontes Google Inter e Roboto
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"], // Corrigido: array de strings para pesos
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"], // Corrigido: array de strings para pesos
});

export const metadata: Metadata = {
  title: "Quizezz",
  description: "Crie Funis de Conversão com Quizzes Interativos e Aumente Suas Vendas",
  icons: {
    icon: "/favicon.svg", // Caminho correto para o ícone
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
