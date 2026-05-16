export interface DocSection {
  title: string;
  content: string;
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

const screen = (id: string, title: string, description: string): DocScreenshot => ({ id, title, description });

const listControls = `
  <ul>
    <li><strong>Yeni Ekle / Oluştur:</strong> Sayfaya yeni kayıt eklemek için kullanılır. Zorunlu alanlar boş bırakılırsa sistem kaydı kabul etmez.</li>
    <li><strong>Arama ve filtreleme:</strong> Tablo içindeki kayıtları hızlı bulmak için kullanılır. Arama metni yazıldıkça liste daralır.</li>
    <li><strong>Kalem ikonu:</strong> Var olan kaydı düzenler.</li>
    <li><strong>Çöp kutusu ikonu:</strong> Kaydı siler. Stok, sipariş veya cari geçmişi olan kayıtlar silinmeden önce iş etkisi kontrol edilmelidir.</li>
    <li><strong>CSV / PDF:</strong> Ekrandaki listeyi dışa aktarır. Bu butonlar raporlama ve denetim için kullanılır.</li>
  </ul>
`;

const docsData: Record<string, DocPage> = {
  "baslangic/sisteme-giris": {
    title: "Sisteme Giriş",
    description: "FidanYS'ye ilk kez giren kullanıcının oturum açması, aktif oturum uyarısını yönetmesi ve panele ulaşması.",
    screenshot: screen("sisteme-giris", "Giriş ekranı", "Kullanıcı adı, parola, parola görünürlük ikonu ve Giriş Yap butonunun bulunduğu canlı giriş ekranı."),
    sections: [
      {
        title: "Ekranın amacı",
        content: `<p>Bu ekran FidanYS'ye güvenli giriş yapılan ilk noktadır. Canlı kullanım adresi <code>https://ata.fidanys.com.tr</code> üzerinden açılır. Kullanıcı giriş yapmadan operasyon, muhasebe, tanım ve rapor sayfalarına erişemez.</p>`,
      },
      {
        title: "Adım adım giriş",
        content: `
          <ol>
            <li>Tarayıcıdan <code>https://ata.fidanys.com.tr</code> adresini açın.</li>
            <li><strong>Kullanıcı Adı</strong> alanına kullanıcı adınızı yazın. İlk kurulumda yönetici hesabı genellikle <code>admin</code> kullanıcısıdır.</li>
            <li><strong>Parola</strong> alanına parolanızı yazın. Parolayı kontrol etmek için göz ikonuna basabilirsiniz.</li>
            <li><strong>Giriş Yap</strong> butonuna basın.</li>
            <li>Giriş başarılıysa sistem sizi yönetim paneline yönlendirir.</li>
          </ol>
        `,
      },
      {
        title: "Aktif oturum uyarısı",
        content: `<p>Aynı kullanıcı başka cihazda açık kalmışsa sistem güvenlik için mevcut oturum uyarısı gösterebilir. Bu durumda devam etmeyi onaylarsanız eski oturum kapatılır ve yeni cihazdan giriş yapılır. Bu davranış, aynı kullanıcı hesabının kontrolsüz şekilde birden fazla yerde açık kalmasını engeller.</p>`,
      },
      {
        title: "Girişten sonra yapılacak ilk kontrol",
        content: `<p>İlk girişten sonra sol menüde <strong>Anasayfa</strong>, <strong>Operasyonlar</strong>, <strong>Muhasebe</strong>, <strong>Tanımlar</strong>, <strong>Raporlar</strong> ve <strong>Sistem</strong> bölümlerinin görünüp görünmediğini kontrol edin. Görünmeyen menüler rol yetkileriyle ilgilidir.</p>`,
      },
    ],
    relatedLinks: [
      { title: "Genel Ekran Mantığı", href: "/docs/baslangic/genel-ekran-mantigi" },
      { title: "İlk Kurulum Sırası", href: "/docs/baslangic/ilk-kurulum" },
    ],
  },

  "baslangic/genel-ekran-mantigi": {
    title: "Genel Ekran Mantığı",
    description: "Sol menü, üst kırıntı yolu, tablolar, işlem ikonları, dışa aktarma ve canlı uygulama davranışları.",
    screenshot: screen("genel-ekran-mantigi", "Genel panel görünümü", "Sol menünün açık olduğu, kartlar ve grafiklerle anasayfanın göründüğü gerçek panel ekranı."),
    sections: [
      {
        title: "Ekran düzeni",
        content: `<p>FidanYS yönetim paneli sol menü ve ana içerik alanından oluşur. Sol menü modüller arasında geçiş sağlar. Ana içerik alanında seçilen sayfanın tablo, form, rapor veya detay bileşenleri gösterilir.</p>`,
      },
      {
        title: "Sol menü grupları",
        content: `
          <ul>
            <li><strong>Anasayfa:</strong> İşletmenin genel özetini gösterir.</li>
            <li><strong>Operasyonlar:</strong> Mal girişi, stok, sipariş ve üretim partisi süreçleri burada yürür.</li>
            <li><strong>Muhasebe:</strong> Cari hesap, fatura, kasa/banka ve gider işlemleri burada takip edilir.</li>
            <li><strong>Tanımlar:</strong> Depo, müşteri, tedarikçi, fidan ve enflasyon gibi temel veriler burada kurulur.</li>
            <li><strong>Raporlar:</strong> Enflasyon, maliyet, satış fiyatı ve kâr/zarar analizleri burada yer alır.</li>
            <li><strong>Sistem:</strong> Kullanıcı, rol ve profil işlemleri burada yapılır.</li>
          </ul>
        `,
      },
      {
        title: "Tablo ekranlarında ortak davranış",
        content: `<p>Liste ekranlarının büyük bölümü aynı mantıkla çalışır. Bu yüzden bir ekranı öğrendiğinizde diğerlerini de rahat kullanırsınız.</p>${listControls}`,
      },
      {
        title: "Kullanıcıya anlatırken dikkat edilecek nokta",
        content: `<p>FidanYS'de stok miktarı veya cari bakiye gibi kritik sonuçlar doğrudan elle değiştirilmez; işlem akışının sonucunda oluşur. Örneğin stok, mal girişiyle artar; sipariş sevk edilince azalır. Cari bakiye, fatura ve ödeme hareketlerinden doğar.</p>`,
      },
    ],
    relatedLinks: [
      { title: "İlk Kurulum Sırası", href: "/docs/baslangic/ilk-kurulum" },
      { title: "Kullanıcı Yönetimi ve Roller", href: "/docs/baslangic/kullanici-yonetimi-ve-roller" },
    ],
  },

  "baslangic/kullanici-yonetimi-ve-roller": {
    title: "Kullanıcı Yönetimi ve Roller",
    description: "FidanYS içindeki kullanıcı hesapları, rol atama mantığı ve sayfa/yetki bazlı erişim kontrolü.",
    screenshot: screen("kullanici-yonetimi", "Kullanıcı yönetimi", "Kullanıcı listesi, rol sütunu, yeni kullanıcı butonu ve rol yönetimi alanının canlı görüntüsü."),
    sections: [
      {
        title: "RBAC mantığı",
        content: `<p>FidanYS rol tabanlı erişim kontrolü kullanır. Bir kullanıcıya bir veya birden fazla rol atanabilir. Kullanıcının görebildiği menüler ve yapabildiği işlemler bu rollerin yetkilerinden oluşur.</p>`,
      },
      {
        title: "Varsayılan roller",
        content: `
          <ul>
            <li><strong>ADMIN:</strong> Tüm modülleri görür, kullanıcı ve rol yönetir, sistem ayarlarını yapar.</li>
            <li><strong>ACCOUNTANT:</strong> Muhasebe, cari hesap, fatura, gider ve rapor ekranlarına odaklanır.</li>
            <li><strong>SALES:</strong> Müşteri, sipariş ve satış operasyonlarını yürütür.</li>
            <li><strong>WAREHOUSE_STAFF:</strong> Depo, stok, mal girişi ve sevkiyat süreçlerinde çalışır.</li>
          </ul>
        `,
      },
      {
        title: "Rol yönetimi",
        content: `<p>Kullanıcı Yönetimi sayfasının altındaki rol panelinde yeni rol eklenebilir. Rol oluştururken sayfa ve işlem bazlı yetkiler tree yapısında seçilir. Bu sayede örneğin sadece rapor gören, sadece sipariş oluşturan veya sadece stok görüntüleyen özel roller hazırlanabilir.</p>`,
        screenshot: screen("rol-yetki", "Rol ve yetki yönetimi", "Roller ve yetkiler panelinde tree mantığıyla yetki seçimi yapılan canlı ekran."),
      },
      {
        title: "Kullanıcı eklerken rol atama",
        content: `<p>Yeni kullanıcı oluştururken kullanıcının adı, kullanıcı adı, parola ve rol bilgisi girilir. Rol seçimi yanlış yapılırsa kullanıcı bazı sayfaları göremez veya işlem yapamaz. Yetki problemi yaşandığında önce bu ekrandaki rol ataması kontrol edilir.</p>`,
      },
    ],
    relatedLinks: [
      { title: "Kullanıcı Yönetimi", href: "/docs/sistem/kullanici-yonetimi" },
      { title: "Rol ve Yetki Yönetimi", href: "/docs/sistem/rol-yetki" },
    ],
  },

  "baslangic/ilk-kurulum": {
    title: "İlk Kurulum Sırası",
    description: "Boş bir FidanYS sisteminin gerçek kullanıma hazırlanması için izlenmesi gereken doğru veri giriş sırası.",
    screenshot: screen("genel-ekran-mantigi", "Kurulum başlangıç noktası", "İlk kurulumda tüm işlemler sol menüdeki Tanımlar ve Operasyonlar bölümlerinden başlar."),
    sections: [
      {
        title: "Neden sıra önemli?",
        content: `<p>FidanYS modülleri birbirine bağlıdır. Sipariş oluşturmak için önce müşteri, depo, fidan kartı ve stok gerekir. Fatura oluşturmak için önce sipariş gerekir. Raporların doğru çıkması için ise operasyon ve muhasebe kayıtlarının doğru sırayla oluşması gerekir.</p>`,
      },
      {
        title: "Sıfırdan doğru kurulum akışı",
        content: `
          <ol>
            <li><strong>Depo Yönetimi:</strong> Fiziksel depo, sera veya üretim alanlarını oluşturun.</li>
            <li><strong>Müşteri Yönetimi:</strong> Satış yapılacak müşterileri ekleyin.</li>
            <li><strong>Tedarikçi Yönetimi:</strong> Mal alınacak kişi ve firmaları ekleyin.</li>
            <li><strong>Gider Kategorileri:</strong> Elektrik, işçilik, sulama, ilaç, nakliye gibi kategorileri tanımlayın.</li>
            <li><strong>Fidan Yönetimi:</strong> Tür, çeşit, anaç, boy ve yaş bilgileriyle fidan kartlarını oluşturun.</li>
            <li><strong>Mal Girişi veya Üretim Partisi:</strong> Stok oluşturacak gerçek işlemi kaydedin.</li>
            <li><strong>Sipariş Yönetimi:</strong> Müşteri satışını oluşturun, sevk edin ve teslim edin.</li>
            <li><strong>Fatura ve Tahsilat:</strong> Siparişi faturaya çevirin, müşteri carisinde tahsilatı işleyin.</li>
            <li><strong>Raporlar:</strong> Enflasyon, maliyet, fiyat performansı ve kâr/zarar analizlerini kontrol edin.</li>
          </ol>
        `,
      },
      {
        title: "İlk veri girişinde kontrol listesi",
        content: `<ul><li>Her fidan kartının tür, çeşit, anaç, yaş ve boy bilgisi açık mı?</li><li>Stok kaydı bir depoya bağlı mı?</li><li>Sipariş kalemlerinin satış fiyatı ve miktarı doğru mu?</li><li>Sevk edilen sipariş gerçekten stoktan düşmüş mü?</li><li>Faturası oluşan sipariş cari hesaba yansımış mı?</li><li>Rapor döneminde enflasyon verisi var mı?</li></ul>`,
      },
    ],
    relatedLinks: [
      { title: "Depo Yönetimi", href: "/docs/tanimlar/depo-yonetimi" },
      { title: "Fidan Yönetimi", href: "/docs/tanimlar/fidan-yonetimi" },
      { title: "Mal Girişi", href: "/docs/operasyonlar/mal-girisi" },
    ],
  },

  "tanimlar/depo-yonetimi": {
    title: "Depo Yönetimi",
    description: "Stokların tutulduğu fiziksel depo, sera, arazi veya operasyon alanlarının tanımlanması.",
    screenshot: screen("depo-yonetimi", "Depo listesi", "Depo yönetimi ekranında mevcut depolar, adres bilgileri, düzenleme ve silme aksiyonları."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Depo Yönetimi, stok hareketlerinin bağlanacağı fiziksel lokasyonları oluşturur. Mal girişi, stok görüntüleme ve sipariş sevkiyatında depo seçimi bu kayıtlardan gelir.</p>` },
      { title: "Yeni depo ekleme", content: `<ol><li><strong>Yeni Depo Ekle</strong> butonuna basın.</li><li>Depo adını yazın. Örnek: Merkez Depo, Sera 1, Soğuk Hava Deposu.</li><li>Adres veya açıklayıcı lokasyon bilgisini girin.</li><li><strong>Kaydet</strong> ile kaydı oluşturun.</li></ol>` },
      { title: "Düzenleme ve silme", content: `<p>Kalem ikonu depo bilgilerini günceller. Çöp kutusu depoyu siler. Daha önce stok hareketi yapılmış depoları silmeden önce stok ve işlem geçmişi kontrol edilmelidir.</p>` },
    ],
    relatedLinks: [{ title: "Stok Durumu", href: "/docs/operasyonlar/stok-durumu" }],
  },

  "tanimlar/musteri-yonetimi": {
    title: "Müşteri Yönetimi",
    description: "Satış yapılacak müşteri kayıtlarının ve iletişim bilgilerinin yönetimi.",
    screenshot: screen("musteri-yonetimi", "Müşteri listesi", "Müşteri kayıtlarının listelendiği, yeni müşteri ekleme ve işlem ikonlarının göründüğü ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Müşteri Yönetimi, sipariş ve cari hesap süreçlerinin temelidir. Sipariş oluştururken müşteri listesi buradaki kayıtlardan gelir.</p>` },
      { title: "Müşteri ekleme", content: `<ol><li><strong>Yeni Müşteri Ekle</strong> butonuna basın.</li><li>Müşteri adı, telefon, e-posta ve adres gibi bilgileri girin.</li><li>Kaydedilen müşteri, sipariş ve cari hesap ekranlarında seçilebilir hale gelir.</li></ol>` },
      { title: "Operasyon etkisi", content: `<p>Müşteri kaydı olmadan satış siparişi ve müşteri cari ekstresi düzgün oluşmaz. Bu nedenle gerçek müşteriler satıştan önce tanımlanmalıdır.</p>` },
    ],
    relatedLinks: [{ title: "Sipariş Yönetimi", href: "/docs/operasyonlar/siparis-yonetimi" }, { title: "Müşteri Cari", href: "/docs/muhasebe/musteri-cari" }],
  },

  "tanimlar/tedarikci-yonetimi": {
    title: "Tedarikçi Yönetimi",
    description: "Fidan, malzeme veya hizmet alınan tedarikçilerin tanımlanması.",
    screenshot: screen("tedarikci-yonetimi", "Tedarikçi listesi", "Tedarikçi kayıtlarının listelendiği gerçek ekran görüntüsü."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Tedarikçi Yönetimi, mal girişi ve tedarikçi cari hesabı için kullanılır. Sisteme alınan ürün veya hizmetin kime borç oluşturduğunu belirler.</p>` },
      { title: "Tedarikçi ekleme", content: `<ol><li><strong>Yeni Tedarikçi Ekle</strong> butonuna basın.</li><li>Firma veya kişi adını, telefonunu, e-postasını ve adresini girin.</li><li>Kaydedilen tedarikçi mal girişi ve tedarikçi cari ekranlarında kullanılabilir.</li></ol>` },
      { title: "Dikkat", content: `<p>Aynı tedarikçiyi farklı isimlerle tekrar tekrar açmak cari borç takibini böler. Tedarikçi eklemeden önce arama alanından var olup olmadığını kontrol edin.</p>` },
    ],
    relatedLinks: [{ title: "Mal Girişi", href: "/docs/operasyonlar/mal-girisi" }, { title: "Tedarikçi Cari", href: "/docs/muhasebe/tedarikci-cari" }],
  },

  "tanimlar/gider-kategorileri": {
    title: "Gider Kategorileri",
    description: "Giderlerin raporlarda doğru kırılıma ayrılabilmesi için kategori yönetimi.",
    screenshot: screen("gider-kategorileri", "Gider kategorileri", "Gider kategorilerinin listelendiği ve yeni kategori ekleme butonunun bulunduğu ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Gider kategorileri, işletme giderlerini anlamlı gruplara ayırır. Elektrik, sulama, işçilik, nakliye, ilaçlama ve bakım gibi giderler bu kategorilerle raporlanır.</p>` },
      { title: "Kategori ekleme", content: `<ol><li><strong>Yeni Kategori Ekle</strong> butonuna basın.</li><li>Kategori adını yazın.</li><li>Açıklama girerek hangi giderlerin bu kategoriye yazılacağını belirtin.</li><li>Kaydedin.</li></ol>` },
      { title: "Rapor etkisi", content: `<p>Kategorisi doğru girilen giderler, gider yönetimi ve maliyet raporlarında işletmenin hangi alanda para harcadığını net gösterir.</p>` },
    ],
    relatedLinks: [{ title: "Gider Yönetimi", href: "/docs/muhasebe/gider-yonetimi" }],
  },

  "tanimlar/fidan-yonetimi": {
    title: "Fidan Yönetimi",
    description: "Satılan veya üretilen fidan kartlarının tür, çeşit, anaç, boy, yaş ve arazi bilgileriyle tanımlanması.",
    screenshot: screen("fidan-yonetimi", "Fidan listesi", "Fidan kartlarının listelendiği, tür/çeşit/anaç gibi özelliklerin göründüğü ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Fidan kartı, stok, sipariş, mal girişi ve üretim süreçlerinin merkezindeki üründür. Aynı türde ama farklı anaç, yaş veya boydaki fidanlar ayrı kartlar olarak tanımlanmalıdır.</p>` },
      { title: "Fidan kartı oluşturma", content: `<ol><li><strong>Yeni Fidan Ekle</strong> butonuna basın.</li><li>Fidan türünü seçin veya tanımlayın.</li><li>Çeşit, anaç, boy, yaş ve arazi bilgilerini girin.</li><li>Kaydettiğiniz kart stok ve sipariş ekranlarında kullanılabilir hale gelir.</li></ol>` },
      { title: "Doğru kart açmanın önemi", content: `<p>Satış fiyatı performansı, stok değeri ve kârlılık analizleri fidan kartına göre hesaplanır. Bu yüzden farklı ticari değere sahip ürünler aynı kartta toplanmamalıdır.</p>` },
    ],
    relatedLinks: [{ title: "Stok Durumu", href: "/docs/operasyonlar/stok-durumu" }, { title: "Satış Fiyatı Performansı", href: "/docs/raporlar/satis-fiyati" }],
  },

  "tanimlar/enflasyon-verileri": {
    title: "Enflasyon Verileri",
    description: "TCMB/EVDS verilerinin sisteme alınması ve reel raporlarda kullanılacak enflasyon tablosunun yönetimi.",
    screenshot: screen("enflasyon-verileri", "Enflasyon veri tablosu", "Yıllara ve aylara göre enflasyon verilerinin listelendiği ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Enflasyon verileri; maliyet analizi, satış fiyatı performansı ve kâr/zarar raporlarının reel değer hesaplarında kullanılır. Veri yoksa raporlar nominal kalır veya eksik yorum üretir.</p>` },
      { title: "Veri çekme ve kontrol", content: `<ol><li>Enflasyon Verileri sayfasını açın.</li><li>Veri çekme veya yenileme işlemini çalıştırın.</li><li>İlgili yıl ve ayların tabloya geldiğini kontrol edin.</li><li>Eksik yıl varsa rapor dönemini veya TCMB veri akışını ayrıca kontrol edin.</li></ol>` },
      { title: "Raporlara etkisi", content: `<p>Bu tabloda yer alan aylık oranlar, 100 bazlı endeks veya tarih bazlı bugünkü değer hesaplarında kullanılır. Raporları yorumlarken hangi döneme kadar veri olduğunu mutlaka kontrol edin.</p>` },
    ],
    relatedLinks: [{ title: "Enflasyon Genel Bakış", href: "/docs/raporlar/enflasyon-genel" }, { title: "Kâr/Zarar Analizi", href: "/docs/raporlar/kar-zarar" }],
  },

  "operasyonlar/mal-girisi": {
    title: "Mal Girişi",
    description: "Tedarikçiden alınan veya üretimden çıkan fidanların depoya resmi olarak alınması.",
    screenshot: screen("mal-girisi", "Mal girişi listesi", "Mal girişlerinin ve yeni mal girişi butonunun göründüğü operasyon ekranı."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Mal Girişi, stoğu artıran resmi işlemdir. Bir fidanın depoda görünmesi için ya mal girişi yapılmalı ya da üretim partisi sonucu depoya alınmalıdır.</p>` },
      { title: "Yeni mal girişi", content: `<ol><li><strong>Yeni Mal Girişi</strong> butonuna basın.</li><li>Tedarikçiyi seçin.</li><li>Giriş yapılacak depoyu seçin.</li><li>Fidan kalemini, miktarı ve birim maliyeti girin.</li><li>Kaydedin.</li></ol>` },
      { title: "İşlem sonucu", content: `<p>Kayıt tamamlandığında seçilen depoda stok artar. Birim maliyet doğru girildiyse ileride kâr/zarar ve stok değeri raporları daha sağlıklı hesaplanır.</p>` },
      { title: "İptal mantığı", content: `<p>Yanlış mal girişi yapıldıysa iptal işlemi stok hareketini geri almalıdır. Girişi silmek yerine iptal mantığı kullanıldığında işlem geçmişi daha güvenilir kalır.</p>` },
    ],
    relatedLinks: [{ title: "Stok Durumu", href: "/docs/operasyonlar/stok-durumu" }],
  },

  "operasyonlar/stok-durumu": {
    title: "Stok Durumu",
    description: "Depolardaki mevcut fidan miktarlarının, kart bazlı stokların ve stok değerinin izlenmesi.",
    screenshot: screen("stok-durumu", "Stok durumu", "Fidan ve depo bazlı stok miktarlarının göründüğü gerçek stok ekranı."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Stok Durumu ekranı mevcut envanteri gösterir. Buradaki miktarlar elle yazılmış sabit değerler değildir; mal girişi, üretim, sevk ve iptal hareketlerinden oluşur.</p>` },
      { title: "Nasıl okunur?", content: `<ul><li><strong>Fidan:</strong> Stoktaki ürün kartını gösterir.</li><li><strong>Depo:</strong> Ürünün hangi lokasyonda bulunduğunu gösterir.</li><li><strong>Miktar:</strong> Satılabilir veya elde bulunan adedi gösterir.</li><li><strong>Birim maliyet/değer:</strong> Stok değerleme ve raporlar için önemlidir.</li></ul>` },
      { title: "Stok neden değişir?", content: `<p>Mal girişi stok artırır. Sipariş sevk edildiğinde stok azalır. Sevk iptali veya mal girişi iptali gibi işlemler stok hareketini tersine çevirir.</p>` },
    ],
    relatedLinks: [{ title: "Mal Girişi", href: "/docs/operasyonlar/mal-girisi" }, { title: "Sipariş Yönetimi", href: "/docs/operasyonlar/siparis-yonetimi" }],
  },

  "operasyonlar/siparis-yonetimi": {
    title: "Sipariş Yönetimi",
    description: "Müşteri siparişlerinin oluşturulması, sevk edilmesi, teslim edilmesi ve faturaya dönüştürülmesi.",
    screenshot: screen("siparis-yonetimi", "Sipariş listesi", "Sipariş numarası, müşteri, depo, tutar ve durum bilgileriyle sipariş listesi."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Sipariş Yönetimi satış operasyonunun ana ekranıdır. Müşteriden gelen talep burada kayda alınır, stoktan sevk edilir ve finansal sürece aktarılır.</p>` },
      { title: "Sipariş oluşturma", content: `<ol><li><strong>Yeni Sipariş</strong> butonuna basın.</li><li>Müşteriyi seçin.</li><li>Çıkış yapılacak depoyu seçin.</li><li>Fidan kalemlerini ekleyin.</li><li>Miktar ve satış fiyatını girin.</li><li>Siparişi kaydedin.</li></ol>` },
      { title: "Durum akışı", content: `<ul><li><strong>Hazırlanıyor:</strong> Sipariş kayıtlıdır ama stok henüz düşmemiş olabilir.</li><li><strong>Sevk Edildi:</strong> Ürün depodan çıkmıştır, stok azalır.</li><li><strong>Teslim Edildi:</strong> Müşteriye teslim süreci tamamlanmıştır.</li><li><strong>İptal:</strong> Sipariş geçersiz hale getirilir; stok etkisi varsa geri alınmalıdır.</li></ul>` },
      { title: "Faturaya aktarma", content: `<p>Sipariş satırındaki fatura/makbuz ikonu kullanılarak sipariş faturaya dönüştürülür. Fatura oluşunca müşteri cari hesabında borç hareketi oluşur.</p>` },
    ],
    relatedLinks: [{ title: "Faturalar", href: "/docs/muhasebe/faturalar" }, { title: "Müşteri Cari", href: "/docs/muhasebe/musteri-cari" }],
  },

  "operasyonlar/uretim-partileri": {
    title: "Üretim Partileri",
    description: "Tohum, çelik, aşı veya üretim süreçlerinin parti bazında takip edilmesi.",
    screenshot: screen("uretim-partileri", "Üretim partileri", "Üretim partilerinin tarih, fidan ve durum bilgileriyle listelendiği ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Üretim Partileri, dışarıdan alım yerine işletme içinde üretilen fidanları parti bazında izler. Her parti başlangıç adedi, süreç giderleri, fire ve depoya alınan ürün açısından takip edilmelidir.</p>` },
      { title: "Yeni üretim partisi", content: `<ol><li><strong>Yeni Üretim Partisi</strong> butonuna basın.</li><li>Parti adını ve üretilecek fidan kartını seçin.</li><li>Başlangıç adedi ve tarih bilgilerini girin.</li><li>Kaydedin.</li></ol>` },
      { title: "Parti takibi", content: `<p>Parti devam ederken işçilik, sulama, ilaçlama, torf, poşet gibi giderler partiye bağlanmalıdır. Böylece partinin gerçek birim maliyeti hesaplanabilir.</p>` },
    ],
    relatedLinks: [{ title: "Üretim Partisi Detayı", href: "/docs/operasyonlar/uretim-partisi-detayi" }],
  },

  "operasyonlar/uretim-partisi-detayi": {
    title: "Üretim Partisi Detayı",
    description: "Bir üretim partisinin gider, adet, fire, hasat ve depoya alma aşamalarının takip edilmesi.",
    screenshot: screen("uretim-partileri", "Üretim partisi detayı", "Parti listesi üzerinden detay sayfasına geçilerek üretim süreci takip edilir."),
    sections: [
      { title: "Detay sayfasının amacı", content: `<p>Üretim partisi detayı, tek bir üretim sürecinin maliyet ve miktar geçmişini gösterir. Bu ekran parti kârlılığını anlamak için kritik veri sağlar.</p>` },
      { title: "Takip edilecek alanlar", content: `<ul><li>Başlangıç adedi</li><li>Mevcut adet</li><li>Fire veya kayıp oranı</li><li>Partiye bağlanan giderler</li><li>Depoya alınan hasat/ürün adedi</li><li>Birim maliyet</li></ul>` },
      { title: "Depoya alma", content: `<p>Üretim sonucu satışa hazır hale gelen fidanlar mal girişi mantığıyla depoya alınmalıdır. Bu işlem stok oluşturur ve üretim maliyetinin satış raporlarına taşınmasını sağlar.</p>` },
    ],
    relatedLinks: [{ title: "Mal Girişi", href: "/docs/operasyonlar/mal-girisi" }, { title: "Maliyet Analizi", href: "/docs/raporlar/maliyet-analizi" }],
  },

  "muhasebe/musteri-cari": {
    title: "Müşteri Cari Hesapları",
    description: "Müşteri borç/alacak bakiyelerinin ve satış sonrası finansal durumun izlenmesi.",
    screenshot: screen("musteri-cari", "Müşteri cari listesi", "Müşteri bazlı bakiye ve ekstreye geçiş ekranı."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Müşteri Cari Hesapları, müşterilerin işletmeye olan borç veya alacak durumunu gösterir. Fatura borç oluşturur, tahsilat borcu azaltır.</p>` },
      { title: "Listeyi okuma", content: `<ul><li><strong>Müşteri:</strong> Cari hesabın sahibidir.</li><li><strong>Bakiye:</strong> Müşterinin güncel borç/alacak durumudur.</li><li><strong>Ekstreyi Görüntüle:</strong> Bu müşteriye ait hareketlerin detayına gider.</li></ul>` },
      { title: "Tahsilat ilişkisi", content: `<p>Müşteri ödeme yaptığında tahsilat kaydı girilir. Tahsilat, müşterinin açık bakiyesini düşürür ve kasa/banka hareketlerinde izlenebilir.</p>` },
    ],
    relatedLinks: [{ title: "Müşteri Ekstresi", href: "/docs/muhasebe/musteri-ekstresi" }],
  },

  "muhasebe/musteri-ekstresi": {
    title: "Müşteri Ekstresi",
    description: "Tek bir müşterinin fatura, tahsilat ve bakiye hareketlerinin kronolojik incelenmesi.",
    screenshot: screen("musteri-cari", "Müşteri ekstresi", "Müşteri cari listesinden ekstreye geçilerek hareket detayları görüntülenir."),
    sections: [
      { title: "Ekstre ne gösterir?", content: `<p>Ekstre, müşterinin tüm cari hareketlerini tarih sırasıyla gösterir. Fatura borç, tahsilat alacak hareketi olarak okunur.</p>` },
      { title: "Nasıl açılır?", content: `<ol><li>Muhasebe menüsünden <strong>Müşteri Cari Hesapları</strong> sayfasına gidin.</li><li>İlgili müşteriyi bulun.</li><li><strong>Ekstreyi Görüntüle</strong> butonuna basın.</li><li>Hareketleri tarih, açıklama, borç, alacak ve bakiye üzerinden kontrol edin.</li></ol>` },
      { title: "Kontrol noktası", content: `<p>Bir sipariş faturaya çevrilmiş ama ekstresinde görünmüyorsa fatura oluşturma adımı kontrol edilmelidir. Tahsilat görünmüyorsa kasa/banka hareketi veya ödeme kaydı kontrol edilir.</p>` },
    ],
    relatedLinks: [{ title: "Faturalar", href: "/docs/muhasebe/faturalar" }, { title: "Kasa ve Banka", href: "/docs/muhasebe/kasa-banka" }],
  },

  "muhasebe/tedarikci-cari": {
    title: "Tedarikçi Cari Hesapları",
    description: "Tedarikçilere olan borçların ve yapılan ödemelerin izlenmesi.",
    screenshot: screen("tedarikci-cari", "Tedarikçi cari listesi", "Tedarikçi bazlı borç/alacak bakiyelerinin göründüğü ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Tedarikçi Cari Hesapları, işletmenin tedarikçilere olan borçlarını takip eder. Mal alımı veya gider borç oluşturur, tediye borcu azaltır.</p>` },
      { title: "Nasıl kullanılır?", content: `<ol><li>Tedarikçiyi listeden bulun.</li><li>Bakiyeyi kontrol edin.</li><li>Detay/ekstre butonuyla hareketleri inceleyin.</li><li>Ödeme yapıldıysa kasa/banka ekranından tediye kaydı girin.</li></ol>` },
      { title: "Operasyon ilişkisi", content: `<p>Mal girişi tedarikçiye bağlı yapıldıysa tedarikçi carisi gerçek alım borcunu yansıtır. Tedarikçi doğru seçilmezse borç yanlış hesapta görünür.</p>` },
    ],
    relatedLinks: [{ title: "Tedarikçi Ekstresi", href: "/docs/muhasebe/tedarikci-ekstresi" }, { title: "Mal Girişi", href: "/docs/operasyonlar/mal-girisi" }],
  },

  "muhasebe/tedarikci-ekstresi": {
    title: "Tedarikçi Ekstresi",
    description: "Tek bir tedarikçiye ait borç, ödeme ve bakiye hareketlerinin incelenmesi.",
    screenshot: screen("tedarikci-cari", "Tedarikçi ekstresi", "Tedarikçi cari ekranından hareket detayına geçiş için kullanılan bölüm."),
    sections: [
      { title: "Ekstre ne işe yarar?", content: `<p>Tedarikçi ekstresi, tedarikçiyle olan finansal ilişkinin geçmişini gösterir. Hangi alımdan ne kadar borç doğduğu ve hangi tarihte ne kadar ödeme yapıldığı buradan izlenir.</p>` },
      { title: "Kontrol adımları", content: `<ol><li>Tedarikçi cari sayfasını açın.</li><li>Tedarikçiyi bulun.</li><li>Ekstre butonuna basın.</li><li>Her hareketin açıklamasını, tarihini ve tutarını kontrol edin.</li></ol>` },
      { title: "Mutabakat", content: `<p>Tedarikçiyle mutabakat yaparken bu ekstre dışa aktarılabilir veya ekrandaki hareketler dönemsel olarak kontrol edilebilir.</p>` },
    ],
    relatedLinks: [{ title: "Kasa ve Banka", href: "/docs/muhasebe/kasa-banka" }],
  },

  "muhasebe/faturalar": {
    title: "Faturalar",
    description: "Siparişlerden oluşan veya manuel takip edilen faturaların listelenmesi ve cari hesaba etkisi.",
    screenshot: screen("faturalar", "Fatura listesi", "Faturaların tarih, müşteri, tutar ve işlem bilgileriyle listelendiği ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Faturalar, satışın finansal belge tarafını temsil eder. Sipariş faturaya çevrildiğinde müşteri cari hesabında borç oluşur.</p>` },
      { title: "Siparişten fatura oluşturma", content: `<ol><li>Sipariş Yönetimi ekranını açın.</li><li>Teslim edilen veya faturalanacak siparişi bulun.</li><li>Fatura/makbuz ikonuna basın.</li><li>Fatura oluşunca Faturalar ekranından kontrol edin.</li></ol>` },
      { title: "Rapor etkisi", content: `<p>Kâr/Zarar raporunda gelir kaynağı faturalar üzerinden değerlendirilebilir. Bu yüzden sevk edilen satışların faturaya dönüştürülmesi rapor doğruluğu için önemlidir.</p>` },
    ],
    relatedLinks: [{ title: "Sipariş Yönetimi", href: "/docs/operasyonlar/siparis-yonetimi" }, { title: "Kâr/Zarar Analizi", href: "/docs/raporlar/kar-zarar" }],
  },

  "muhasebe/kasa-banka": {
    title: "Kasa ve Banka Hareketleri",
    description: "Tahsilat, tediye ve nakit/banka hareketlerinin kayıt altına alınması.",
    screenshot: screen("kasa-banka", "Kasa ve banka hareketleri", "Ödeme ve tahsilat kayıtlarının listelendiği ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Kasa ve Banka Hareketleri, işletmeye giren ve çıkan parayı takip eder. Müşteri tahsilatı, tedarikçi ödemesi ve diğer nakit hareketleri burada kaydedilir.</p>` },
      { title: "Tahsilat girişi", content: `<ol><li>Müşteri seçilir.</li><li>Tahsilat tutarı girilir.</li><li>Ödeme yöntemi seçilir: nakit, banka transferi veya kredi kartı.</li><li>Kaydedildiğinde müşteri cari bakiyesi düşer.</li></ol>` },
      { title: "Tediye girişi", content: `<ol><li>Tedarikçi seçilir.</li><li>Ödenen tutar girilir.</li><li>Ödeme yöntemi ve açıklama yazılır.</li><li>Kaydedildiğinde tedarikçi borcu azalır.</li></ol>` },
    ],
    relatedLinks: [{ title: "Müşteri Cari", href: "/docs/muhasebe/musteri-cari" }, { title: "Tedarikçi Cari", href: "/docs/muhasebe/tedarikci-cari" }],
  },

  "muhasebe/gider-yonetimi": {
    title: "Gider Yönetimi",
    description: "İşletme giderlerinin kategori, tarih ve tutar bazında kaydedilmesi.",
    screenshot: screen("gider-yonetimi", "Gider yönetimi", "Gider kayıtlarının listelendiği ve yeni gider ekleme butonunun bulunduğu ekran."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Gider Yönetimi, işletmenin satış dışı harcamalarını kaydeder. Elektrik, işçilik, bakım, ilaçlama, yakıt ve nakliye gibi giderler burada takip edilir.</p>` },
      { title: "Gider ekleme", content: `<ol><li><strong>Yeni Gider Ekle</strong> butonuna basın.</li><li>Gider kategorisini seçin.</li><li>Tutarı, tarihi ve açıklamayı girin.</li><li>Varsa üretim partisiyle ilişkilendirin.</li><li>Kaydedin.</li></ol>` },
      { title: "Rapor etkisi", content: `<p>Gider kayıtları maliyet analizi ve kâr/zarar raporunu doğrudan etkiler. Üretim partisine bağlanan giderler parti maliyeti için ayrıca önemlidir.</p>` },
    ],
    relatedLinks: [{ title: "Gider Kategorileri", href: "/docs/tanimlar/gider-kategorileri" }, { title: "Maliyet Analizi", href: "/docs/raporlar/maliyet-analizi" }],
  },

  "raporlar/enflasyon-genel": {
    title: "Enflasyon Genel Bakış",
    description: "Enflasyon verilerinin yıllık etkisini ve son dönem trendini gösteren genel rapor.",
    screenshot: screen("enflasyon-genel", "Enflasyon genel bakış", "Yıllık üretici fiyat endeksi, alım gücü ve aylık trend grafiği."),
    sections: [
      { title: "Raporun amacı", content: `<p>Bu rapor, sisteme alınan enflasyon verilerinden genel ekonomik etkiyi gösterir. Kullanıcıya paranın alım gücü ve aylık trend hakkında hızlı fikir verir.</p>` },
      { title: "Kartları okuma", content: `<ul><li><strong>Yıllık ÜFE:</strong> Son 12 ayın kümülatif etkisini gösterir.</li><li><strong>Alım gücü:</strong> Belirli bir paranın bugün ne kadar değer ifade ettiğini anlatır.</li><li><strong>Aylık trend:</strong> Son ayların enflasyon oranlarını grafikle gösterir.</li></ul>` },
      { title: "Dikkat", content: `<p>Bu raporun doğru çalışması için Enflasyon Verileri ekranında ilgili ayların sisteme kaydedilmiş olması gerekir.</p>` },
    ],
    relatedLinks: [{ title: "Enflasyon Verileri", href: "/docs/tanimlar/enflasyon-verileri" }],
  },

  "raporlar/maliyet-analizi": {
    title: "Maliyet Analizi",
    description: "İşletme maliyet trendi ile enflasyon endeksini karşılaştıran rapor.",
    screenshot: screen("maliyet-analizi", "Maliyet analizi", "Fidanlığın kümülatif maliyet endeksi ile Yİ-ÜFE endeksinin karşılaştırıldığı grafik."),
    sections: [
      { title: "Raporun amacı", content: `<p>Maliyet Analizi, işletme giderlerinin dönem içinde nasıl arttığını ve bu artışın enflasyon karşısındaki durumunu gösterir.</p>` },
      { title: "Grafiği okuma", content: `<ul><li><strong>Fidanlığın kümülatif maliyet endeksi:</strong> Seçilen dönemdeki giderlerin baz aya göre birikimli değişimini gösterir.</li><li><strong>Kümülatif Yİ-ÜFE endeksi:</strong> Enflasyon verilerinden 100 bazlı oluşturulan karşılaştırma çizgisidir.</li></ul>` },
      { title: "Yorumlama", content: `<p>İşletme maliyet çizgisi enflasyon çizgisinin çok üstündeyse gider artışı genel piyasa artışından hızlı olabilir. Ancak büyüme kaynaklı gider artışı ile birim maliyet artışı ayrı analiz edilmelidir.</p>` },
    ],
    relatedLinks: [{ title: "Gider Yönetimi", href: "/docs/muhasebe/gider-yonetimi" }],
  },

  "raporlar/satis-fiyati": {
    title: "Satış Fiyatı Performansı",
    description: "Fidan satış fiyatlarının enflasyona göre olması gereken seviyenin üstünde mi altında mı kaldığını gösterir.",
    screenshot: screen("satis-fiyati", "Satış fiyatı performansı", "Tüm fidanlar için enflasyona göre fiyat farkı yüzdesini gösteren grafik."),
    sections: [
      { title: "Raporun amacı", content: `<p>Bu rapor, satılan fidanların fiyatlarının enflasyon karşısında korunup korunmadığını gösterir. Tüm fidanlar seçildiğinde her fidan için son dönemdeki fiyat farkı tek grafikte görünür.</p>` },
      { title: "Tüm fidanlar grafiği", content: `<ul><li><strong>Pozitif yüzde:</strong> Satış fiyatı, enflasyona göre olması gereken fiyatın üstündedir.</li><li><strong>Negatif yüzde:</strong> Satış fiyatı, enflasyonun gerisinde kalmıştır.</li><li><strong>Sıralama:</strong> En riskli fidanlar grafikte negatif tarafta kolayca fark edilir.</li></ul>` },
      { title: "Tek fidan analizi", content: `<p>Analiz Edilecek Fidan alanından tek fidan seçilirse dönem bazlı nominal satış fiyatı ve enflasyona göre olması gereken fiyat yan yana gösterilir.</p>` },
      { title: "Matematiksel not", content: `<p>Mevcut hesaplama ilk satış fiyatını baz alır. İlk satış kampanyalı veya istisnai ise rapor yanıltıcı olabilir. Bu nedenle ileride baz fiyat seçimi eklenmelidir.</p>` },
    ],
    relatedLinks: [{ title: "Fidan Yönetimi", href: "/docs/tanimlar/fidan-yonetimi" }, { title: "Raporlar Analitik Planı", href: "/docs/raporlar/kar-zarar" }],
  },

  "raporlar/kar-zarar": {
    title: "Kâr/Zarar Analizi",
    description: "Nominal kâr ile enflasyon karşısında bugünkü değere taşınmış reel kâr arasındaki farkı gösterir.",
    screenshot: screen("kar-zarar-analizi", "Kâr/Zarar analizi", "Nominal net kâr, bugünkü değer farkı, reel net kâr ve grafiklerin bulunduğu rapor ekranı."),
    sections: [
      { title: "Raporun amacı", content: `<p>Kâr/Zarar Analizi, işletmenin sadece görünen parasal sonucunu değil, enflasyon etkisi sonrası gerçek sonucunu anlamaya çalışır.</p>` },
      { title: "Temel formül", content: `<ul><li><code>Nominal Net Kâr = Gelir - SMM - Gider</code></li><li><code>Reel Net Kâr = Reel Gelir - Reel SMM - Reel Gider</code></li><li><code>Bugünkü Değer Farkı = Reel Net Kâr - Nominal Net Kâr</code></li></ul>` },
      { title: "Raporu doğru almak için", content: `<ol><li>Dönem enflasyon verilerini kaydedin.</li><li>Siparişlerin faturaya dönüştüğünü kontrol edin.</li><li>Stok çıkış maliyetlerinin doğru oluştuğunu kontrol edin.</li><li>Giderlerin eksiksiz girildiğinden emin olun.</li><li>Tarih aralığını seçip raporu yenileyin.</li></ol>` },
      { title: "Geliştirme planı", content: `<p>Bu rapor için tahakkuk bazlı, nakit bazlı ve reel kâr olmak üzere üç ayrı görünüm önerilir. Böylece kullanıcı satış yaptı mı, parasını aldı mı ve enflasyon karşısında gerçekten kazandı mı sorularını ayrı ayrı görebilir.</p>` },
    ],
    relatedLinks: [{ title: "Maliyet Analizi", href: "/docs/raporlar/maliyet-analizi" }, { title: "Faturalar", href: "/docs/muhasebe/faturalar" }],
  },

  "sistem/kullanici-yonetimi": {
    title: "Kullanıcı Yönetimi",
    description: "Sisteme kullanıcı ekleme, kullanıcı düzenleme, rol atama ve kullanıcı erişimlerini yönetme.",
    screenshot: screen("kullanici-yonetimi", "Kullanıcı yönetimi ekranı", "Kullanıcı listesi ve rol yönetimi panelinin bulunduğu sistem ekranı."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Kullanıcı Yönetimi, sisteme kimin hangi hesapla gireceğini belirler. Her kullanıcıya rol atanır ve bu rol kullanıcının hangi modülleri görebileceğini belirler.</p>` },
      { title: "Yeni kullanıcı ekleme", content: `<ol><li><strong>Yeni Kullanıcı Ekle</strong> butonuna basın.</li><li>Ad, kullanıcı adı ve parola bilgilerini girin.</li><li>Kullanıcının görevine uygun rolü seçin.</li><li>Kaydedin.</li><li>Kullanıcı ilk girişte kendisine verilen kullanıcı adı ve parola ile giriş yapabilir.</li></ol>` },
      { title: "Düzenleme", content: `<p>Kalem ikonu ile kullanıcı bilgileri ve rol atamaları güncellenir. Yetki problemi yaşayan kullanıcılar için ilk kontrol edilmesi gereken yer rol atamasıdır.</p>` },
    ],
    relatedLinks: [{ title: "Rol ve Yetki Yönetimi", href: "/docs/sistem/rol-yetki" }],
  },

  "sistem/rol-yetki": {
    title: "Rol ve Yetki Yönetimi",
    description: "Dinamik RBAC yapısında rol oluşturma, yetki seçme ve kullanıcıları bu rollere bağlama.",
    screenshot: screen("rol-yetki", "Rol ve yetki yönetimi", "Sayfa ve işlem bazlı yetkilerin tree mantığında seçildiği rol paneli."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Rol ve Yetki Yönetimi, sabit rollerin ötesinde işletmeye özel kullanıcı profilleri oluşturmayı sağlar. Örneğin sadece rapor gören, sadece stok görüntüleyen veya sadece sipariş oluşturan roller hazırlanabilir.</p>` },
      { title: "Rol oluşturma", content: `<ol><li><strong>Yeni Rol Ekle</strong> butonuna basın.</li><li>Rol adını yazın. Sistem rol adını teknik olarak büyük harfli forma çevirebilir.</li><li>Açıklama girin.</li><li>Tree içinden sayfa ve işlem yetkilerini seçin.</li><li><strong>Kaydet</strong> ile rolü oluşturun.</li></ol>` },
      { title: "Yetki seçimi nasıl düşünülmeli?", content: `<p>Rol tasarlarken kişinin işini yapması için gereken minimum yetki verilmelidir. Depo personeline muhasebe yetkisi, satış personeline rol yönetimi yetkisi verilmemelidir.</p>` },
      { title: "Kullanıcıya bağlama", content: `<p>Rol oluşturulduktan sonra Kullanıcı Yönetimi bölümünden ilgili kullanıcı düzenlenir ve yeni rol atanır. Kullanıcı yeniden giriş yaptığında menüleri yeni yetkilerine göre şekillenir.</p>` },
    ],
    relatedLinks: [{ title: "Kullanıcı Yönetimi", href: "/docs/sistem/kullanici-yonetimi" }],
  },

  "sistem/profilim": {
    title: "Profilim",
    description: "Giriş yapan kullanıcının kendi hesap bilgilerini ve profil alanını görüntülemesi.",
    screenshot: screen("profilim", "Profilim ekranı", "Kullanıcı profil bilgisinin bulunduğu hesap ekranı."),
    sections: [
      { title: "Ekranın amacı", content: `<p>Profilim ekranı, giriş yapan kullanıcının kendi hesap alanıdır. Kullanıcı bilgileri ve ileride eklenecek parola/profil ayarları bu alanda yönetilir.</p>` },
      { title: "Ne zaman kullanılır?", content: `<ul><li>Kendi kullanıcı bilginizi kontrol etmek için.</li><li>Rolünüzün veya hesabınızın doğru kişiye ait olduğunu görmek için.</li><li>Güvenlik amacıyla profil ve parola ayarları eklendiğinde kendi hesabınızı güncellemek için.</li></ul>` },
      { title: "Oturumu kapatma", content: `<p>Sol menünün logo alanındaki <strong>Çıkış Yap</strong> butonu hızlı oturum kapatma için kullanılır. Ortak bilgisayarlarda iş bittikten sonra mutlaka çıkış yapılmalıdır.</p>` },
    ],
    relatedLinks: [{ title: "Sisteme Giriş", href: "/docs/baslangic/sisteme-giris" }],
  },
};

export async function getDocContent(slugPath: string): Promise<DocPage | null> {
  return docsData[slugPath] ?? null;
}
