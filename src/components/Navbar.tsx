"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Sprout, X } from "lucide-react";
import { navigation } from "@/lib/nav";
import { cn } from "./Sidebar";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="mr-2 md:hidden p-2 -ml-2 text-zinc-600 hover:bg-zinc-100 rounded-md"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menüyü aç</span>
            </button>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-zinc-900 tracking-tight hover:opacity-80 transition-opacity">
              <div className="bg-green-600 p-1.5 rounded-lg">
                <Sprout className="h-5 w-5 text-white" />
              </div>
              FidanYS
              <span className="bg-zinc-100 text-zinc-600 text-[10px] px-1.5 py-0.5 rounded-full font-medium ml-1">DOCS</span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end md:justify-between ml-4 md:ml-8 gap-4">
            <div className="hidden md:flex flex-1 max-w-md">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="relative w-full group flex items-center justify-between pl-3 pr-2 py-2 border border-zinc-200 rounded-lg leading-5 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-300 transition-all text-sm text-zinc-500 text-left"
              >
                <div className="flex items-center">
                  <Search className="h-4 w-4 mr-2 text-zinc-400 group-hover:text-green-600 transition-colors" />
                  <span>Dokümanlarda ara...</span>
                </div>
                <kbd className="hidden sm:inline-block border border-zinc-200 rounded px-2 text-[10px] font-semibold text-zinc-400 bg-white">Ctrl K</kbd>
              </button>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <button onClick={() => setIsSearchOpen(true)} className="md:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md">
                <Search className="h-5 w-5" />
                <span className="sr-only">Arama yap</span>
              </button>

              <a href="https://ata.fidanys.com.tr" target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block ml-2">
                Canlı Sistem
              </a>
              <div className="h-4 w-px bg-zinc-200 hidden sm:block" />
              <a
                href="https://ata.fidanys.com.tr/auth/sign-in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 h-9 px-3 md:px-4 py-2"
              >
                Giriş Yap
              </a>
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white md:hidden overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between px-4 h-16 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-green-600 p-1.5 rounded-lg">
                <Sprout className="h-5 w-5 text-white" />
              </div>
              FidanYS
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-zinc-600 hover:bg-zinc-100 rounded-md">
              <X className="h-6 w-6" />
              <span className="sr-only">Menüyü kapat</span>
            </button>
          </div>

          <div className="p-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="relative w-full mb-6 group flex items-center justify-between pl-3 pr-2 py-3 border border-zinc-200 rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-all text-sm text-zinc-500 text-left"
            >
              <div className="flex items-center">
                <Search className="h-4 w-4 mr-2 text-zinc-400 group-hover:text-green-600 transition-colors" />
                <span>Dokümanlarda ara...</span>
              </div>
            </button>

            <nav className="space-y-8 pb-12">
              {navigation.map((group, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-bold text-zinc-900 text-sm tracking-tight px-2">{group.title}</h4>
                  <ul className="space-y-1">
                    {group.items.map((item, itemIndex) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={itemIndex}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block px-4 py-2.5 rounded-md text-sm transition-colors",
                              isActive ? "bg-green-50 text-green-700 font-medium" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                            )}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
