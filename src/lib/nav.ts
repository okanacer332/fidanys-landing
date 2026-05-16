export interface NavItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    title: "Başlangıç",
    items: [
      { title: "Sisteme Giriş", href: "/docs/baslangic/sisteme-giris" },
      { title: "Genel Ekran Mantığı", href: "/docs/baslangic/genel-ekran-mantigi" },
      { title: "Kullanıcı Yönetimi ve Roller", href: "/docs/baslangic/kullanici-yonetimi-ve-roller" },
      { title: "İlk Kurulum Sırası", href: "/docs/baslangic/ilk-kurulum" },
    ],
  },
  {
    title: "Tanımlar",
    items: [
      { title: "Depo Yönetimi", href: "/docs/tanimlar/depo-yonetimi" },
      { title: "Müşteri Yönetimi", href: "/docs/tanimlar/musteri-yonetimi" },
      { title: "Tedarikçi Yönetimi", href: "/docs/tanimlar/tedarikci-yonetimi" },
      { title: "Gider Kategorileri", href: "/docs/tanimlar/gider-kategorileri" },
      { title: "Fidan Yönetimi", href: "/docs/tanimlar/fidan-yonetimi" },
      { title: "Enflasyon Verileri", href: "/docs/tanimlar/enflasyon-verileri" },
    ],
  },
  {
    title: "Operasyonlar",
    items: [
      { title: "Mal Girişi", href: "/docs/operasyonlar/mal-girisi" },
      { title: "Stok Durumu", href: "/docs/operasyonlar/stok-durumu" },
      { title: "Sipariş Yönetimi", href: "/docs/operasyonlar/siparis-yonetimi" },
      { title: "Üretim Partileri", href: "/docs/operasyonlar/uretim-partileri" },
      { title: "Üretim Partisi Detayı", href: "/docs/operasyonlar/uretim-partisi-detayi" },
    ],
  },
  {
    title: "Muhasebe",
    items: [
      { title: "Müşteri Cari Hesapları", href: "/docs/muhasebe/musteri-cari" },
      { title: "Müşteri Ekstresi", href: "/docs/muhasebe/musteri-ekstresi" },
      { title: "Tedarikçi Cari Hesapları", href: "/docs/muhasebe/tedarikci-cari" },
      { title: "Tedarikçi Ekstresi", href: "/docs/muhasebe/tedarikci-ekstresi" },
      { title: "Faturalar", href: "/docs/muhasebe/faturalar" },
      { title: "Kasa ve Banka Hareketleri", href: "/docs/muhasebe/kasa-banka" },
      { title: "Gider Yönetimi", href: "/docs/muhasebe/gider-yonetimi" },
    ],
  },
  {
    title: "Raporlar",
    items: [
      { title: "Enflasyon Genel Bakış", href: "/docs/raporlar/enflasyon-genel" },
      { title: "Maliyet Analizi", href: "/docs/raporlar/maliyet-analizi" },
      { title: "Satış Fiyatı Performansı", href: "/docs/raporlar/satis-fiyati" },
      { title: "Kar/Zarar Analizi", href: "/docs/raporlar/kar-zarar" },
    ],
  },
  {
    title: "Sistem Yönetimi",
    items: [
      { title: "Kullanıcı Yönetimi", href: "/docs/sistem/kullanici-yonetimi" },
      { title: "Rol ve Yetki Yönetimi", href: "/docs/sistem/rol-yetki" },
      { title: "Profilim", href: "/docs/sistem/profilim" },
    ],
  },
];
