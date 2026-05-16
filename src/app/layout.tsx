import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FidanYS | Dokümantasyon ve Kullanım Kılavuzu",
  description: "FidanYS Fidanlık Yönetim Sistemi uçtan uca kullanım rehberi, ekran modülleri ve eğitim dokümanları.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-zinc-900 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-1 max-w-8xl mx-auto w-full flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 min-w-0 flex flex-col">
            <div className="flex-1 px-4 py-8 md:px-8 md:py-10 lg:px-12 max-w-5xl w-full mx-auto">
              {children}
            </div>
            <footer className="border-t border-zinc-200 mt-auto py-6 px-4 md:px-8 text-center md:text-left text-sm text-zinc-500">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p>&copy; {new Date().getFullYear()} FidanYS. Tüm hakları saklıdır.</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-zinc-900 transition-colors">Kullanım Koşulları</a>
                  <a href="#" className="hover:text-zinc-900 transition-colors">Gizlilik Politikası</a>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
