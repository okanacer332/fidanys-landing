import React from "react";
import Link from "next/link";
import { BarChart3, BookOpen, Box, Settings, ShieldCheck, Users } from "lucide-react";

const cards = [
  {
    href: "/docs/baslangic/sisteme-giris",
    icon: BookOpen,
    title: "Başlangıç Rehberi",
    description: "Sisteme giriş, genel ekran mantığı, ilk kurulum sırası ve rol yapısı.",
  },
  {
    href: "/docs/tanimlar/depo-yonetimi",
    icon: Settings,
    title: "Sistem Tanımları",
    description: "Depo, müşteri, tedarikçi, gider kategorisi, fidan kartı ve enflasyon verileri.",
  },
  {
    href: "/docs/operasyonlar/siparis-yonetimi",
    icon: Box,
    title: "Operasyonlar",
    description: "Mal girişi, stok takibi, sipariş, sevkiyat ve üretim partisi akışları.",
  },
  {
    href: "/docs/muhasebe/musteri-cari",
    icon: Users,
    title: "Muhasebe Modülü",
    description: "Cari hesaplar, ekstreler, faturalar, tahsilatlar, tediyeler ve giderler.",
  },
  {
    href: "/docs/raporlar/kar-zarar",
    icon: BarChart3,
    title: "Finansal Raporlar",
    description: "Enflasyon, maliyet, satış fiyatı performansı ve reel kâr/zarar analizi.",
  },
  {
    href: "/docs/sistem/rol-yetki",
    icon: ShieldCheck,
    title: "Sistem Güvenliği",
    description: "Dinamik RBAC, kullanıcı yönetimi, rol oluşturma ve yetki atama.",
  },
];

export default function Home() {
  return (
    <div className="prose prose-zinc prose-a:text-green-600 max-w-none">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">FidanYS Dokümantasyon Merkezi</h1>
      <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
        Fidanlık süreçlerinizi dijitalleştiren FidanYS sisteminin tüm modülleri burada gerçek ekran görüntüleri,
        adım adım kullanım açıklamaları ve iş etkisi notlarıyla anlatılır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group block p-6 border border-zinc-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all bg-white"
            >
              <div className="bg-zinc-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <Icon className="w-6 h-6 text-zinc-700 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{card.title}</h3>
              <p className="text-sm text-zinc-600">{card.description}</p>
            </Link>
          );
        })}
      </div>

      <hr className="my-8 border-zinc-200" />

      <h2>Nasıl Okunmalı?</h2>
      <p>
        Bu dokümantasyon, FidanYS&apos;yi hiç bilmeyen bir kullanıcının sistemi ekrandan takip ederek öğrenebilmesi için
        sıfırdan yazıldı. En iyi deneyim için sol menüyü yukarıdan aşağıya doğru takip edin.
      </p>
      <ul>
        <li><strong>Ekranın amacı:</strong> Sayfanın hangi iş için kullanıldığını açıklar.</li>
        <li><strong>Gerçek ekran görüntüsü:</strong> Canlı uygulamadan alınan güncel görüntüyü gösterir.</li>
        <li><strong>Kullanım adımları:</strong> Hangi butona basılacağını ve hangi verinin girileceğini anlatır.</li>
        <li><strong>İş etkisi:</strong> İşlemden sonra stok, cari, fatura veya rapor tarafında ne değiştiğini belirtir.</li>
      </ul>

      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg not-prose">
        <h4 className="text-sm font-bold text-blue-800 mb-1">İpucu</h4>
        <p className="text-sm text-blue-700">
          Eğitim verirken önce Başlangıç ve Tanımlar bölümlerini, sonra Operasyonlar, Muhasebe ve Raporlar bölümlerini
          sırayla açmak kullanıcıların sistemi daha hızlı kavramasını sağlar.
        </p>
      </div>
    </div>
  );
}
