import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageCurtain } from "@/components/ui/PageCurtain";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vander Pro | Estrutura Digital para Empresas",
  description:
    "Organizamos, corrigimos e implantamos a estrutura digital que sua empresa precisa para atrair, atender e converter melhor.",
  openGraph: {
    title: "Vander Pro | Estrutura Digital para Empresas",
    description:
      "Organizamos, corrigimos e implantamos a estrutura digital que sua empresa precisa para atrair, atender e converter melhor.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <PageCurtain />
        <CustomCursor />
        <SmoothScroll>
          <div style={{ paddingTop: "64px" }}>
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
