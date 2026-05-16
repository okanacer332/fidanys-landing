"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/nav';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 flex-shrink-0 border-r border-zinc-200 bg-zinc-50/50 hidden md:block h-[calc(100vh-64px)] overflow-y-auto sticky top-16">
      <nav className="p-4 space-y-8">
        {navigation.map((group, index) => (
          <div key={index} className="space-y-3">
            <h4 className="font-semibold text-zinc-900 text-sm tracking-tight">
              {group.title}
            </h4>
            <ul className="space-y-1.5 border-l border-zinc-200 ml-2 pl-3">
              {group.items.map((item, itemIndex) => {
                const isActive = pathname === item.href;
                return (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block text-sm transition-colors relative",
                        isActive
                          ? "text-green-600 font-medium"
                          : "text-zinc-600 hover:text-zinc-900"
                      )}
                    >
                      {isActive && (
                        <div className="absolute -left-[13px] top-1/2 -translate-y-1/2 w-[2px] h-full bg-green-600 rounded-r-full" />
                      )}
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
  );
}
