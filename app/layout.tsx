import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exemplo.com"),
  title: {
    default: "Psicanálise e Saúde Mental | Consultório Profissional",
    template: "%s | Psicanálise e Saúde Mental",
  },
  description: "Atendimento psicanalítico profissional focando em saúde mental, bem-estar e autoconhecimento. Agende sua consulta.",
  keywords: ["psicanálise", "saúde mental", "terapia", "psicanalista", "atendimento psicológico", "terapia individual", "terapia de casal"],
  authors: [{ name: "Psicanalista" }],
  creator: "Psicanalista",
  publisher: "Psicanalista",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://exemplo.com",
    siteName: "Psicanálise e Saúde Mental",
    title: "Psicanálise e Saúde Mental | Consultório Profissional",
    description: "Atendimento psicanalítico profissional focando em saúde mental e bem-estar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psicanálise e Saúde Mental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicanálise e Saúde Mental",
    description: "Atendimento psicanalítico profissional",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione suas verificações do Google Search Console e outras aqui
    // google: "seu-codigo-de-verificacao",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <StructuredData />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
