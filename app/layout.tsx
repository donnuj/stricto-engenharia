import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5b0311",
};

export const metadata: Metadata = {
  title: "Stricto Engenharia | Consultoria e Projetos no Distrito Federal",
  description:
    "Empresa brasileira de engenharia e consultoria sediada no DF. Projetos técnicos, gerenciamento e fiscalização de obras, consultoria técnica e engenharia ambiental.",
  keywords: [
    "engenharia",
    "consultoria",
    "projetos",
    "fiscalização de obras",
    "Distrito Federal",
    "Brasília",
  ],
  openGraph: {
    title: "Stricto Engenharia",
    description: "Precisão técnica que transforma projetos em realidade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
