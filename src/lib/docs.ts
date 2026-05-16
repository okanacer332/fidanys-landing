export interface DocSection {
  title: string;
  content: string; // HTML string
}

export interface DocScreenshot {
  id: string;
  title: string;
  description: string;
}

export interface DocPage {
  title: string;
  description: string;
  screenshot?: DocScreenshot;
  sections: DocSection[];
  relatedLinks?: { title: string; href: string }[];
}

const docsData: Record<string, DocPage> = {
  "baslangic/sisteme-giris": {
    title: "Sisteme İlk Giriş",
    description: "FidanYS sistemine ilk kez giren bir kullanıcının oturum açmasından başlayarak sistemi kullanabilmesi için temel bilgiler.",
    screenshot: {
      id: "sisteme-giris",
      title: "Kullanıcı Giriş Ekranı",
      description: "Kullanıcı adı ve parola alanlarının, 'Giriş Yap' butonunun bulunduğu login ekranının tam ekran görüntüsü."
    },
    sections: [
      {
        title: "1. Uygulama Adresi",
        content: "<p>Canlı ortam için uygulama adresi: <code>https://ata.fidanys.com.tr</code></p><p>Tarayıcıda bu adrese girildiğinde kullanıcı giriş ekranı açılır.</p>"
      },
      {
        title: "2. İlk Kullanıcı Bilgisi",
        content: "<p>İlk kurulumdan sonra varsayılan yönetici girişi:</p><ul><li>Kullanıcı Adı: <strong>admin</strong></li><li>Parola: <strong>admin</strong></li></ul><p>Bu kullanıcı sistemin ana yöneticisidir. Güvenlik için Kullanıcı Yönetimi veya profil alanı üzerinden daha güçlü bir parola kullanılması önerilir.</p>"
      },
      {
        title: "3. Aktif Oturum Uyarısı",
        content: "<p>Aynı kullanıcı daha önce başka bir cihazda veya tarayıcıda açık kaldıysa sistem aktif oturum uyarısı gösterebilir. Bu uyarıda 'Evet, Devam Et' seçilerek önceki oturum sonlandırılabilir.</p>"
      }
    ],
    relatedLinks: [
      { title: "Roller ve Yetkiler", href: "/docs/baslangic/roller-ve-yetkiler" },
      { title: "İlk Kurulum Sırası", href: "/docs/baslangic/ilk-kurulum" }
    ]
  },
  "operasyonlar/siparis-yonetimi": {
    title: "Sipariş Yönetimi",
    description: "Müşteriden gelen satış taleplerini kaydetmek, siparişi sevk etmek, teslim etmek ve fatura sürecine aktarmak için kullanılır.",
    screenshot: {
      id: "siparis-yonetimi",
      title: "Sipariş Listesi ve Yeni Sipariş Formu",
      description: "Siparişlerin listelendiği tablo ve 'Yeni Sipariş' butonuna basıldığında açılan form (Müşteri seçimi, Çıkış deposu, Fidan kalemleri vb.) görüntüsü."
    },
    sections: [
      {
        title: "Kimler Kullanır?",
        content: "<p>Bu sayfayı varsayılan olarak ADMIN, SALES ve WAREHOUSE_STAFF rolleri görebilir.</p>"
      },
      {
        title: "Ön Koşullar",
        content: "<p>Sipariş oluşturmak için önce <strong>müşteri</strong>, <strong>depo</strong>, <strong>fidan kartı</strong> ve <strong>stok</strong> hazır olmalıdır.</p>"
      },
      {
        title: "Adım Adım Kullanım",
        content: "<ol><li>'Yeni Sipariş' butonuna bas.</li><li>Müşteriyi seç.</li><li>Çıkış deposunu seç.</li><li>Fidan kalemini ekle.</li><li>Miktar ve satış fiyatını gir.</li><li>'Siparişi Oluştur' butonuna bas.</li><li>Sipariş hazır olunca 'Durumu Güncelle' ile 'Sevk Et'.</li><li>Teslimden sonra 'Teslim Et'.</li><li>Fatura ikonuyla faturayı oluştur.</li></ol>"
      },
      {
        title: "Başarılı İşlem Sonucu",
        content: "<p>Sipariş sevk edilince stok azalır, müşteri cari hesabına borç hareketi yazılır. Fatura oluşturulunca fatura listesinde yeni kayıt görünür.</p>"
      }
    ],
    relatedLinks: [
      { title: "Stok Durumu", href: "/docs/operasyonlar/stok-durumu" },
      { title: "Faturalar", href: "/docs/muhasebe/faturalar" }
    ]
  },
  "raporlar/kar-zarar": {
    title: "Kar/Zarar Analizi",
    description: "Görünen nominal kar ile enflasyon karşısında bugünkü değere taşınmış reel kar arasındaki farkı gösterir.",
    screenshot: {
      id: "kar-zarar-analizi",
      title: "Kar/Zarar Rapor Ekranı",
      description: "Nominal Net Kar, Bugünkü Değer Farkı ve Reel Net Kar kartlarının ve 'Karın Yolculuğu' grafiklerinin bulunduğu analiz ekranı."
    },
    sections: [
      {
        title: "Amacı",
        content: "<p>Sisteme girilen fatura, gider ve stok çıkış maliyetlerini enflasyon (TCMB EVDS3 verileri) ile düzelterek işletmenin gerçekte ne kadar kazandığını veya kaybettiğini gösterir.</p>"
      },
      {
        title: "Matematiksel Mantık",
        content: "<ul><li><code>Nominal Net Kar = Nominal Gelir - Nominal SMM - Nominal Gider</code></li><li><code>Reel Net Kar = Reel Gelir - Reel SMM - Reel Gider</code></li><li><code>Bugünkü Değer Farkı = Reel Net Kar - Nominal Net Kar</code></li></ul><p>SMM satış fiyatından değil, stok çıkış hareketinde saklanan unitCost değerinden hesaplanır.</p>"
      },
      {
        title: "Doğru Rapor Almak İçin Adımlar",
        content: "<ol><li>İlgili dönemin enflasyon verilerini 'Enflasyon Verileri' ekranından çek.</li><li>Dönemdeki mal girişlerinin birim maliyetle kaydedildiğinden emin ol.</li><li>Siparişlerin sevk edildiğinden emin ol.</li><li>Faturaların oluştuğundan emin ol.</li><li>Giderlerin kaydedildiğinden emin ol.</li><li>Kar/Zarar Analizi ekranına git, tarih aralığını seç.</li></ol>"
      }
    ],
    relatedLinks: [
      { title: "Enflasyon Verileri", href: "/docs/tanimlar/enflasyon-verileri" }
    ]
  }
};

export async function getDocContent(slugPath: string): Promise<DocPage | null> {
  // Try to find the exact match
  if (docsData[slugPath]) {
    return docsData[slugPath];
  }
  
  // Return a generic fallback for undefined pages to demonstrate the structure
  const parts = slugPath.split('/');
  const title = parts[parts.length - 1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return {
    title: title + " Yönetimi",
    description: "Bu modül " + title + " ile ilgili işlemlerin yapıldığı alandır. Operasyonel veya finansal kayıtlarınızı buradan yönetebilirsiniz.",
    screenshot: {
      id: slugPath.replace(/\//g, '-'),
      title: title + " Ekranı",
      description: `Canlı sistemdeki ${title} menüsüne girildiğinde görünen liste, tablo veya formun ekran görüntüsü.`
    },
    sections: [
      {
        title: "Genel Bakış",
        content: "<p>Bu sayfa henüz detaylandırılmamıştır. Ancak sistemin genel yapısına uygun olarak tablo listelemesi, arama, filtreleme, Excel/PDF dışa aktarma ve 'Yeni Ekle' butonu üzerinden form işlemlerini destekler.</p>"
      },
      {
        title: "Adım Adım Kullanım",
        content: "<ol><li>Sol menüden ilgili sayfaya gidin.</li><li>Tablo üzerinden mevcut kayıtları inceleyin.</li><li>Yeni bir kayıt eklemek için ana aksiyon butonuna tıklayın.</li><li>Formdaki zorunlu alanları doldurup 'Kaydet' butonuna basın.</li></ol>"
      }
    ]
  };
}
