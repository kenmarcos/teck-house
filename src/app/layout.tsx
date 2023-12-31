import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TecK",
  description:
    "Bem-vindo à Teck House, sua loja online de tecnologia e eletrônicos. Encontre as últimas tendências em eletrônicos, com preços competitivos e entrega rápida. Nossa missão é oferecer inovação e conveniência a cada clique. Explore nossa seleção agora e leve a tecnologia para sua casa com a Teck House.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <Header />

              <main className="flex-1">{children}</main>

              <Footer />
              <Toaster />
            </AuthProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
