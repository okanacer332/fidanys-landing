import React from 'react';
import Link from 'next/link';
import { BookOpen, Box, Users, BarChart3, Settings, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="prose prose-zinc prose-a:text-green-600 max-w-none">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">
        FidanYS Dokümantasyon Merkezi
      </h1>
      <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
        Fidanlık süreçlerinizi dijitalleştiren, uçtan uca operasyon ve muhasebe yönetimi sağlayan FidanYS sistemine hoş geldiniz. 
        Bu rehber, sistemin tüm modüllerini adım adım ve ekran görüntüleriyle öğrenmeniz için hazırlanmıştır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
        <Link href="/docs/baslangic/sisteme-giris" className="group block p-6 border border-zinc-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all bg-white">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
            <BookOpen className="w-6 h-6 text-green-700 group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Başlangıç Rehberi</h3>
          <p className="text-sm text-zinc-600">Sisteme ilk giriş, genel ekran mantığı ve roller hakkında temel bilgiler.</p>
        </Link>
        
        <Link href="/docs/tanimlar/depo-yonetimi" className="group block p-6 border border-zinc-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all bg-white">
          <div className="bg-zinc-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
            <Settings className="w-6 h-6 text-zinc-700 group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Sistem Tanımları</h3>
          <p className="text-sm text-zinc-600">Müşteriler, depolar, tedarikçiler ve fidan kartlarının oluşturulması.</p>
        </Link>

        <Link href="/docs/operasyonlar/siparis-yonetimi" className="group block p-6 border border-zinc-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all bg-white">
          <div className="bg-zinc-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
            <Box className="w-6 h-6 text-zinc-700 group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Operasyonlar</h3>
          <p className="text-sm text-zinc-600">Siparişler, mal girişleri, üretim partileri ve canlı stok takibi.</p>
        </Link>

        <Link href="/docs/muhasebe/musteri-cari" className="group block p-6 border border-zinc-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all bg-white">
          <div className="bg-zinc-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
            <Users className="w-6 h-6 text-zinc-700 group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Muhasebe Modülü</h3>
          <p className="text-sm text-zinc-600">Cari hesaplar, faturalandırma, gelir/gider yönetimi ve tahsilatlar.</p>
        </Link>
        
        <Link href="/docs/raporlar/kar-zarar" className="group block p-6 border border-zinc-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all bg-white">
          <div className="bg-zinc-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
            <BarChart3 className="w-6 h-6 text-zinc-700 group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Finansal Raporlar</h3>
          <p className="text-sm text-zinc-600">Merkez Bankası (EVDS3) entegrasyonu ile enflasyondan arındırılmış kar/zarar ve maliyet analizi.</p>
        </Link>

        <Link href="/docs/sistem/rol-yetki" className="group block p-6 border border-zinc-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all bg-white">
          <div className="bg-zinc-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
            <ShieldCheck className="w-6 h-6 text-zinc-700 group-hover:text-white" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Sistem Güvenliği</h3>
          <p className="text-sm text-zinc-600">Gelişmiş rol tabanlı erişim kontrolü (RBAC) ve kullanıcı yetkilendirmesi.</p>
        </Link>
      </div>

      <hr className="my-8 border-zinc-200" />

      <h2>Nasıl Okunmalı?</h2>
      <p>
        Bu dokümantasyon, hiç bilmeyen bir kullanıcının (Sıfırdan) FidanYS'yi kurup işletmesini sağlamak amacıyla yazılmıştır. 
        Her sayfada şunları bulacaksınız:
      </p>
      <ul>
        <li><strong>Kısa Amaç:</strong> Ekranın ne işe yaradığı.</li>
        <li><strong>Ekran Görüntüsü:</strong> Sistem arayüzünün birebir yansıması.</li>
        <li><strong>Kullanım Adımları:</strong> Hangi butona basılacağı ve hangi verilerin girileceği.</li>
        <li><strong>Beklenen Sonuç:</strong> İşlem sonrasında sistemde neyin değiştiği (Örn: "Stok azalır, cariye borç yazılır").</li>
      </ul>
      
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg not-prose">
        <h4 className="text-sm font-bold text-blue-800 mb-1">İpucu</h4>
        <p className="text-sm text-blue-700">
          En iyi öğrenme deneyimi için sol taraftaki menüyü yukarıdan aşağıya doğru sırasıyla okumanızı tavsiye ederiz.
        </p>
      </div>
    </div>
  );
}
