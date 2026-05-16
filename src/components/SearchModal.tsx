"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Search, X } from "lucide-react";
import { navigation } from "@/lib/nav";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const flatItems = navigation.flatMap((group) => group.items.map((item) => ({ ...item, groupTitle: group.title })));
  const filteredItems =
    query.trim() === ""
      ? flatItems
      : flatItems.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.groupTitle.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-16 sm:pt-24">
      <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all mx-4 flex flex-col max-h-[80vh]">
        <div className="relative border-b border-zinc-100">
          <Search className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            className="h-14 w-full bg-transparent pl-12 pr-12 text-zinc-900 placeholder:text-zinc-400 focus:outline-none sm:text-sm"
            placeholder="Dokümanlarda ara... (modül veya sayfa adı)"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 bg-zinc-100 hover:bg-zinc-200 rounded-md p-1 transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Kapat</span>
          </button>
        </div>

        <div className="overflow-y-auto p-2" style={{ maxHeight: "calc(80vh - 56px)" }}>
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-sm text-zinc-500">
              <p>Sonuç bulunamadı.</p>
              <p className="mt-1">Farklı bir arama terimi deneyin.</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {filteredItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSelect(item.href)}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-green-50 focus:bg-green-50 focus:outline-none group"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-zinc-100 group-hover:bg-white group-hover:text-green-600 transition-colors">
                      <FileText className="h-4 w-4 text-zinc-500 group-hover:text-green-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-zinc-900 group-hover:text-green-700">{item.title}</span>
                      <span className="text-xs text-zinc-500">{item.groupTitle}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-zinc-100 px-4 py-3 bg-zinc-50/50 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            <kbd className="mr-1 rounded border border-zinc-200 px-1 font-sans">↑</kbd>
            <kbd className="mr-2 rounded border border-zinc-200 px-1 font-sans">↓</kbd>
            ile gezin, <kbd className="mx-1 rounded border border-zinc-200 px-1 font-sans">Enter</kbd> ile seç
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">FidanYS Search</span>
        </div>
      </div>
    </div>
  );
}
