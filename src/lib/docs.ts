export interface DocSection {
  title: string;
  content: string; // HTML string
  screenshot?: DocScreenshot;
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
      { title: "Genel Ekran Mantığı", href: "/docs/baslangic/genel-ekran-mantigi" },
      { title: "Roller ve Yetkiler", href: "/docs/baslangic/roller-ve-yetkiler" },
      { title: "İlk Kurulum Sırası", href: "/docs/baslangic/ilk-kurulum" }
    ]
  },
  "baslangic/genel-ekran-mantigi": {
    title: "Genel Ekran Mantığı",
    description: "FidanYS'nin genel menü yapısı, tabloları, aksiyon butonları ve raporlama özelliklerinin kullanımı.",
    screenshot: {
      id: "genel-ekran-mantigi",
      title: "Genel Tablo ve Menü Görünümü",
      description: "Sol menünün açık olduğu, bir liste ekranının (Örn: Sipariş veya Fidan Listesi) arama kutusu ve 'Yeni Ekle' butonuyla göründüğü ekran."
    },
    sections: [
      {
        title: "Temel Yapı",
        content: "<p>FidanYS, sol menülü bir yönetim panelidir. Kullanıcı giriş yaptıktan sonra ekranın sol tarafında ana navigasyon, sağ tarafta seçilen sayfanın içeriği görünür.</p>"
      },
      {
        title: "Menü Grupları ve Yetkiler",
        content: "<p>Sistemdeki ana menü grupları: <strong>Anasayfa, Operasyonlar, Muhasebe, Tanımlar, Raporlar ve Sistem</strong> olarak ayrılmıştır. Kullanıcının rolüne göre bazı menüler hiç görünmeyebilir. (Örneğin sadece depo sorumlusu yetkisine sahip biri muhasebe sekmelerini göremez).</p>"
      },
      {
        title: "Tablo Arama ve Sıralama",
        content: "<p>Liste ekranlarında tablo üstünde arama alanı bulunur. Bu alan sayfaya göre müşteri adı, fidan adı veya sipariş numarası gibi kritik verilerde anlık filtreleme yapar.</p><ul><li>Tablolardaki sütun başlıklarına (Örn: Tarih, Tutar) tıklayarak artan veya azalan sıralama yapabilirsiniz.</li></ul>"
      },
      {
        title: "Satır Aksiyon İkonları",
        content: "<p>Tablolarda her satırın en sağında o kayda ait işlem ikonları yer alır:</p><ul><li><strong>Kalem:</strong> Kaydı düzenler.</li><li><strong>Çöp Kutusu:</strong> Kaydı siler.</li><li><strong>Göz:</strong> Detay görüntüler.</li><li><strong>Makbuz İkonu:</strong> Siparişten fatura oluşturur vs.</li></ul>"
      },
      {
        title: "Dışa Aktarma (Excel/PDF)",
        content: "<p>Çoğu tabloda <code>CSV</code> ve <code>PDF</code> aktarma butonları bulunur. O an ekranda filtrelenmiş veriyi direkt bilgisayarınıza indirmenizi sağlar.</p>"
      }
    ],
    relatedLinks: [
      { title: "Sisteme Giriş", href: "/docs/baslangic/sisteme-giris" },
      { title: "Roller ve Yetkiler", href: "/docs/baslangic/roller-ve-yetkiler" }
    ]
  },
  "baslangic/kullanici-yonetimi-ve-roller": {
    title: "Kullanıcı Yönetimi ve Roller",
    description: "Sistem içerisindeki kullanıcı yetkilendirmeleri (RBAC), her rolün erişebildiği ekranlar ve sahip olduğu yetkiler.",
    screenshot: {
      id: "kullanici-yonetimi",
      title: "Kullanıcı Yönetimi Ekranı",
      description: "Sistem -> Kullanıcılar ekranında kullanıcılara atanan Roller (ADMIN, SALES vs.) listesi veya yetki atama formunun görüntüsü."
    },
    sections: [
      {
        title: "Çoklu Rol Yapısı",
        content: "<p>FidanYS sisteminde kullanıcı rolleri bulunur. Sistemin esnekliği gereği <strong>her kullanıcı birden fazla role sahip olabilir.</strong> Kullanıcının gördüğü menüler, sahip olduğu en üst yetkilere göre şekillenir.</p>"
      },
      {
        title: "ADMIN (Sistem Yöneticisi)",
        content: "<p><code>ADMIN</code>, sistemdeki en yetkili roldür.</p><ul><li>Tüm ana ekranları ve modülleri (Tanımlar, Raporlar dahil) görebilir.</li><li>Kullanıcı oluşturabilir ve rol atayabilir.</li><li>Fidan, depo, müşteri, tedarikçi, sipariş, üretim partisi ve muhasebe ekranlarında tam (okuma/yazma/silme) yetkiye sahiptir.</li><li>Sistemi kuran ilk <code>admin/admin</code> kullanıcısı varsayılan olarak bu role sahiptir.</li></ul>"
      },
      {
        title: "SALES (Satış Personeli)",
        content: "<p><code>SALES</code>, satış odaklı işlemleri yürüten kullanıcıdır.</p><ul><li>Müşterileri görür ve yönetebilir.</li><li>Sipariş oluşturabilir ve durumunu güncelleyebilir.</li><li>Fidan ve stok bilgilerini (Depo bakiyesi vb.) görebilir.</li><li>Satış sürecini etkilemeyen muhasebe veya gider ekranlarına erişemez.</li></ul>"
      },
      {
        title: "WAREHOUSE_STAFF (Depo Sorumlusu)",
        content: "<p><code>WAREHOUSE_STAFF</code>, depo, tedarik ve stok operasyonlarını yürüten personeldir.</p><ul><li>Depo, stok, mal girişi ve tedarikçi ekranlarında çalışır.</li><li>Satış personelinin oluşturduğu siparişlerin sevk durumlarını ve stok etkisini takip eder.</li><li>Fidan kartlarını ve stok hareketlerini görebilir.</li></ul>"
      },
      {
        title: "ACCOUNTANT (Muhasebeci)",
        content: "<p><code>ACCOUNTANT</code>, sistemin finansal tarafını yürüten kullanıcıdır.</p><ul><li>Cari hesapları (Müşteri ve Tedarikçi) görür.</li><li>Fatura, tahsilat, tediye, kasa/banka, gider ve finansal rapor ekranlarını kullanır.</li><li>Enflasyon verisi (EVDS3) ve reel kar/zarar maliyet analizlerini takip eder.</li></ul>"
      },
      {
        title: "Spesifik Kullanıcı Rol ve Yetki Ataması",
        content: "<p>Genel rollerin haricinde, sistemi bir kişiye özel hale getirmek veya mevcut bir kullanıcının (Örn: Depo sorumlusu) yan yetkilerini artırmak için spesifik rol ve yetki atamaları yapabilirsiniz. Bu işlem yeni kullanıcı eklerken veya mevcut bir kullanıcıyı düzenlerken <strong>Roller</strong> çoklu seçim kutusundan seçilerek kolayca gerçekleştirilir.</p>",
        screenshot: {
          id: "roller-ve-yetkiler-added",
          title: "Özel Rol Atama Formu",
          description: "Bir kullanıcıya birden fazla rol (Örn: Hem SALES hem WAREHOUSE_STAFF) atanırken gösterilen çoklu seçim kutusu ve işlem detayları."
        }
      }
    ],
    relatedLinks: [
      { title: "İlk Kurulum Sırası", href: "/docs/baslangic/ilk-kurulum" },
      { title: "Genel Ekran Mantığı", href: "/docs/baslangic/genel-ekran-mantigi" }
    ]
  },
  "baslangic/ilk-kurulum": {
    title: "Sıfırdan Kullanım (İlk Kurulum) Sırası",
    description: "Boş bir FidanYS sisteminin canlı operasyona alınması için yapılması gereken adımlar.",
    sections: [
      {
        title: "1. Aşama: Temel Tanımlar",
        content: "<p>Önce sistemin operasyon için ihtiyaç duyduğu temel kayıtlar girilir. Sol menüden <strong>Tanımlar</strong> sekmesi kullanılarak şu sıra izlenmelidir:</p><ol><li><strong>Depo Yönetimi:</strong> Stokların tutulacağı en az bir depo (Örn: Merkez Depo) oluşturulur.</li><li><strong>Müşteri Yönetimi:</strong> Satış yapılacak veya daha önce satış yapılmış müşteriler oluşturulur.</li><li><strong>Tedarikçi Yönetimi:</strong> Alım yapılacak, mal girişinde kullanılacak tedarikçiler oluşturulur.</li><li><strong>Gider Kategorileri:</strong> İşletme giderleri için (Örn: Maaş, Elektrik, Sulama) kategoriler tanımlanır.</li><li><strong>Fidan Yönetimi:</strong> Satılacak veya üretilecek fidanlar, özellikleri (türü, çeşidi, anaç, boy, yaş vb.) belirtilerek sistemde bir <strong>Fidan Kartı</strong> olarak açılır.</li></ol>"
      },
      {
        title: "2. Aşama: Stok Başlatma",
        content: "<p>Fidan kartları ve depo hazır olduktan sonra stok oluşturulur. Ancak stok, doğrudan 'Stok Durumu' ekranından elle yazılarak eklenmez. Stok miktarı şu resmi işlemlerle oluşur ve değişir:</p><ul><li><strong>Mal Girişi:</strong> Tedarikçiden alım girişi yapılarak stoğa eklenir.</li><li><strong>Üretim Partisi:</strong> Üretimden (Tohum/Çelik vb.) elde edilen ürünlerin mal girişi yapılarak stoğa eklenir.</li><li><strong>Sipariş Sevk/Teslim:</strong> Müşteriye sipariş sevk edildiğinde stok otomatik olarak azalır.</li><li><strong>İptal İşlemleri:</strong> Tamamlanmış bir mal girişi iptal edilirse stok geri düşer veya sevk iptal edilirse stok tekrar depoya girer.</li></ul>"
      },
      {
        title: "3. Aşama: Satış Süreci",
        content: "<p>Stoklar da oluştuktan sonra operasyonel satış süreci başlar:</p><ol><li>Operasyonlar menüsünden <strong>Sipariş Yönetimi</strong> ekranına gidilir.</li><li>Müşteri ve çıkış deposu seçilir.</li><li>Siparişe fidan kalemleri ve fiyatları eklenerek sipariş oluşturulur.</li><li>Sipariş fiziksel olarak hazırlandığında durum 'Sevk Et' olarak güncellenir. Bu anda stok düşer.</li><li>Müşteriye teslimattan sonra durum 'Teslim Et' yapılır.</li><li>Siparişteki <strong>Fatura (Makbuz)</strong> ikonuna tıklanarak sipariş faturaya dönüştürülür. Fatura oluştuğunda müşterinin cari hesabına borç yansır.</li><li>Son olarak <strong>Müşteri Cari</strong> ekranından tahsilat girilerek ödeme alınır.</li></ol>"
      },
      {
        title: "4. Aşama: Üretim Süreci",
        content: "<p>Eğer işletme dışarıdan hazır almak yerine kendisi üretiyorsa:</p><ol><li><strong>Üretim Partileri</strong> ekranından yeni bir parti (Örn: 2024 Ceviz Üretimi) oluşturulur.</li><li>Parti detayında tohum, poşet, işçilik gibi <strong>üretim giderleri</strong> eklenir.</li><li>Üretimden elde edilen fidanlar, <strong>Mal Girişi</strong> ekranı üzerinden depoya alınır.</li><li>Sistem, bu girişi yaparken girilen tüm giderleri hesaplayıp bir <strong>Birim Maliyet</strong> çıkartarak fidanları stoklara yansıtır.</li></ol>"
      },
      {
        title: "5. Aşama: Muhasebe ve Raporlar",
        content: "<p>Tüm bu operasyonlar devam ederken muhasebe departmanı devreye girer:</p><ul><li>Müşteri ve Tedarikçi <strong>Cari Hareketleri</strong> ve ekstresi takip edilir.</li><li>Alınan tahsilatlar ve yapılan tediyeler girilir.</li><li>Şirket dışı işletme giderleri (Fatura vb.) kaydedilir.</li><li>Aylık/Yıllık olarak <strong>Enflasyon (EVDS3) Verileri</strong> çekilerek <strong>Kar/Zarar Analizi</strong> ve maliyet raporları incelenir.</li></ul>"
      }
    ],
    relatedLinks: [
      { title: "Depo Yönetimi", href: "/docs/tanimlar/depo-yonetimi" },
      { title: "Müşteri Yönetimi", href: "/docs/tanimlar/musteri-yonetimi" },
      { title: "Mal Girişi", href: "/docs/operasyonlar/mal-girisi" },
      { title: "Sipariş Yönetimi", href: "/docs/operasyonlar/siparis-yonetimi" }
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
