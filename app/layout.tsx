import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageCurtain } from "@/components/ui/PageCurtain";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ScrollResetOnLoad } from "@/components/ScrollResetOnLoad";
import { SITE_URL } from "@/lib/constants";

// Plus Jakarta Sans: clean geometric grotesque — strong, legible at all sizes,
// instantly professional. No experimental character quirks like Syne.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NEXU | Estrutura Digital para Empresas",
  description:
    "Organizamos, corrigimos e implantamos a estrutura digital que sua empresa precisa para atrair, atender e converter melhor.",
  openGraph: {
    title: "NEXU | Estrutura Digital para Empresas",
    description:
      "Organizamos, corrigimos e implantamos a estrutura digital que sua empresa precisa para atrair, atender e converter melhor.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <PageCurtain />
        <CustomCursor />
        <AmbientBackground />
        <SmoothScroll>
          <ScrollResetOnLoad />
          <div style={{ paddingTop: "64px" }}>
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
