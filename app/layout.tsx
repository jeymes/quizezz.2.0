import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { NotificationProvider } from "./components/notificationProvider";

// Configuração das fontes Google Inter e Roboto
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Quizezz",
  description: "Crie Funis de Conversão com Quizzes Interativos e Aumente Suas Vendas",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}
