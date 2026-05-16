# FidanYS Dokuman Page Yayin Plani

Bu dokuman, `.md` klasorundeki iceriklerin ileride sayfa sayfa bir dokumantasyon
sitesine veya uygulama icinde yardim merkezine donusturulmesi icin hazirlandi.
Amac sadece bilgi saklamak degil, kullanicinin ekrandaki isi adim adim
tamamlayabilmesini saglamaktir.

Her dokuman sayfasi su mantikla yazilmalidir:

1. Sayfa ne ise yarar?
2. Sayfaya kimler erisir?
3. Sayfaya hangi menuden gidilir?
4. Sayfayi kullanmadan once hangi veri hazir olmalidir?
5. Ekrandaki alanlar ve butonlar ne yapar?
6. Kullanici adim adim hangi sirayla ilerler?
7. Kayit basarili olunca sistemde ne degisir?
8. Hangi hatalar veya yetki sorunlari gorulebilir?
9. Bu ekran diger ekranlari nasil etkiler?
10. Canli ortamda dogrulama nasil yapilir?

---

## 1. Dokuman Sitesi Ana Hiyerarsisi

Dokumantasyon sitesi veya uygulama ici yardim merkezi asagidaki ana bolumlere
ayrilmalidir.

### 1.1. Baslangic

Bu bolum ilk kez sistemi kullanacak kisiler icindir.

Sayfalar:

- `Sisteme Giris`
- `Mobil Ana Ekrana Ekleme (PWA)`
- `Ilk Kurulum Sirasi`
- `Roller ve Yetkiler`
- `Genel Ekran Mantigi`
- `Tablo, Arama, Siralama ve Export Kullanimi`

### 1.2. Tanimlar

Bu bolum is operasyonu baslamadan once olusturulan temel kayitlari anlatir.

Sayfalar:

- `Fidan Yonetimi`
- `Depo Yonetimi`
- `Musteri Yonetimi`
- `Tedarikci Yonetimi`
- `Gider Kategorileri`
- `Enflasyon Verileri`

### 1.3. Operasyonlar

Bu bolum gunluk saha ve satis akislarini anlatir.

Sayfalar:

- `Siparis Yonetimi`
- `Mal Girisi`
- `Uretim Partileri`
- `Uretim Partisi Detayi`
- `Stok Durumu`

### 1.4. Muhasebe

Bu bolum cari, fatura, odeme ve gider sureclerini anlatir.

Sayfalar:

- `Cari Hesaplar - Musteri`
- `Musteri Ekstresi`
- `Cari Hesaplar - Tedarikci`
- `Tedarikci Ekstresi`
- `Faturalar`
- `Kasa ve Banka Hareketleri`
- `Gider Yonetimi`

### 1.5. Raporlar

Bu bolum yonetsel analiz ve karar ekranlarini anlatir.

Sayfalar:

- `Enflasyon Genel Bakis`
- `Maliyet Analizi`
- `Satis Fiyati Performansi`
- `Kar/Zarar Analizi`

### 1.6. Sistem

Bu bolum kullanici, rol ve yetki yonetimini anlatir.

Sayfalar:

- `Kullanici Yonetimi`
- `Rol ve Yetki Yonetimi`
- `Profilim`

### 1.7. Teknik Devralma

Bu bolum yazilimci, mimar veya operasyon ekibi icindir.

Sayfalar:

- `Mimari Genel Bakis`
- `Backend Modulleri`
- `Frontend Modulleri`
- `API Sozlesmesi`
- `Veri Modeli`
- `Docker ve Calistirma`
- `Canli Ortam ve Deployment`
- `Dogrulama ve Smoke Testler`

---

## 2. Her Kullanici Dokuman Sayfasinin Standart Sablonu

Her kullanici odakli sayfa ayni sirayla yazilmalidir. Bu sayede dokuman sitesi
icinde kullanici her ekranda ayni okuma ritmini yakalar.

### 2.1. Sayfa Basligi

Baslik dogrudan ekran adiyla ayni olmalidir.

Ornek:

```text
Siparis Yonetimi
```

### 2.2. Kisa Amac

Bir veya iki cumleyle ekranin amaci yazilir.

Ornek:

```text
Siparis Yonetimi, musteriden gelen satis talebini kaydetmek, siparisi sevk
etmek, teslim etmek ve fatura surecine aktarmak icin kullanilir.
```

### 2.3. Kimler Kullanir?

Roller ve dinamik izin mantigi birlikte yazilmalidir.

Ornek:

```text
Bu sayfayi varsayilan olarak ADMIN, SALES ve WAREHOUSE_STAFF rolleri gorebilir.
Dinamik RBAC kullaniliyorsa SIPARIS_OLUSTURMA veya SIPARIS_SEVKIYAT yetkisine
sahip roller ilgili aksiyonlara erisebilir.
```

### 2.4. Menu Yolu

Kullanici ekrana nasil gider, net yazilmalidir.

Ornek:

```text
Sol menu > Operasyonlar > Siparis Yonetimi
```

### 2.5. On Kosullar

Ekrani kullanmadan once gereken kayitlar yazilir.

Ornek:

```text
Siparis olusturmak icin once musteri, depo, fidan karti ve stok hazir olmalidir.
```

### 2.6. Ekrandaki Alanlar

Form alanlari tablo halinde yazilmalidir.

| Alan | Zorunlu | Ne Ise Yarar |
| --- | --- | --- |
| Musteri | Evet | Siparisi veren cari hesabi belirler. |
| Cikis Deposu | Evet | Stok dusumunun hangi depodan yapilacagini belirler. |
| Tahmini Teslim Tarihi | Hayir | Planlama icin kullanilir. |

### 2.7. Butonlar ve Ikonlar

Her buton tek tek anlatilmalidir.

| Buton/Ikon | Islev |
| --- | --- |
| Yeni Siparis | Yeni siparis formunu acar. |
| Yeni Kalem Ekle | Siparise yeni fidan satiri ekler. |
| Cop Kutusu | Formdaki kalemi siler. |
| Durumu Guncelle | Siparis sevk/teslim/iptal penceresini acar. |
| Fatura Ikonu | Uygun durumdaki siparisten fatura olusturur. |

### 2.8. Adim Adim Kullanim

Bu kisim numarali yazilmalidir.

Ornek:

1. `Yeni Siparis` butonuna bas.
2. Musteriyi sec.
3. Cikis deposunu sec.
4. Fidan kalemini ekle.
5. Miktar ve satis fiyatini gir.
6. `Siparisi Olustur` butonuna bas.
7. Siparis hazir olunca `Durumu Guncelle` ile `Sevk Et`.
8. Teslimden sonra `Teslim Et`.
9. Fatura ikonuyla faturayi olustur.

### 2.9. Basarili Islem Sonucu

Kullanicinin islemi yaptiktan sonra sistemde ne degistigini bilmesi gerekir.

Ornek:

```text
Siparis sevk edilince stok azalir, musteri cari hesabina borc hareketi yazilir.
Fatura olusturulunca fatura listesinde yeni kayit gorunur.
```

### 2.10. Hata ve Uyari Durumlari

Sik hatalar ve ne anlama geldikleri yazilir.

Ornek:

- `Yetersiz stok`: Secilen depoda istenen miktar kadar stok yoktur.
- `Yetkiniz yok`: Kullanici rolunde ilgili islem icin gereken izin yoktur.
- `Zorunlu alan`: Formda doldurulmasi gereken alan eksiktir.

### 2.11. Iliskili Sayfalar

Ekranin hangi diger sayfalari etkiledigi yazilir.

Ornek:

- `Stok Durumu`
- `Faturalar`
- `Musteri Ekstresi`
- `Kar/Zarar Analizi`

### 2.12. Canli Dogrulama

Yonetici veya destek ekibi icin kontrol adimlari yazilir.

Ornek:

1. Siparis olustur.
2. Sevk et.
3. Stok miktarinin azaldigini kontrol et.
4. Musteri ekstresinde borc hareketini kontrol et.
5. Fatura olusturup fatura listesinde gor.

---

## 3. Teknik Dokuman Sayfasi Sablonu

Teknik dokumanlarda kullanici adimlari yerine mimari ve sozlesme netligi
onceliklidir.

### 3.1. Modul Amaci

Modulun is siniri yazilir.

### 3.2. Paketler ve Dosyalar

Ilgili backend/frontend dosyalari listelenir.

### 3.3. Ana Veri Modelleri

Collection/entity alanlari ve iliskiler yazilir.

### 3.4. API Sozlesmesi

Endpoint, method, request, response ve yetki yazilir.

### 3.5. Is Kurallari

Ornek:

- Siparis sevk edilmeden fatura olusmaz.
- Mal girisi stok artirir.
- Satis maliyeti satis fiyatindan degil, stok hareketindeki `unitCost` alanindan
  okunur.
- Enflasyon verisi ayin ilk gunu ile saklanir.

### 3.6. Hata Senaryolari

Beklenen hata kodlari ve nedenleri yazilir.

### 3.7. Test ve Smoke

Lokal ve canli dogrulama komutlari yazilir.

---

## 4. Sayfa Sayfa Yayin Sirasi

Dokuman sitesi olusturulurken once asagidaki sirayla sayfalar yayinlanmalidir.

### 4.1. Faz 1 - Sisteme Giris ve Temel Kullanim

1. Sisteme Giris
2. Mobil Ana Ekrana Ekleme (PWA)
3. Genel Ekran Mantigi
4. Roller ve Yetkiler
5. Ilk Kurulum Sirasi

### 4.2. Faz 2 - Tanimlar

1. Depo Yonetimi
2. Musteri Yonetimi
3. Tedarikci Yonetimi
4. Gider Kategorileri
5. Fidan Yonetimi
6. Enflasyon Verileri

### 4.3. Faz 3 - Operasyon

1. Mal Girisi
2. Stok Durumu
3. Siparis Yonetimi
4. Uretim Partileri
5. Uretim Partisi Detayi

### 4.4. Faz 4 - Muhasebe

1. Musteri Cari Hesaplari
2. Musteri Ekstresi
3. Tedarikci Cari Hesaplari
4. Tedarikci Ekstresi
5. Faturalar
6. Kasa ve Banka Hareketleri
7. Gider Yonetimi

### 4.5. Faz 5 - Raporlar

1. Enflasyon Genel Bakis
2. Maliyet Analizi
3. Satis Fiyati Performansi
4. Kar/Zarar Analizi

### 4.6. Faz 6 - Sistem Yonetimi

1. Kullanici Yonetimi
2. Rol ve Yetki Yonetimi
3. Profilim

---

## 5. Son Guncellemeler Icin Mutlaka Yazilmasi Gereken Sayfalar

Son canli guncellemelerden sonra asagidaki sayfalar ayrica detayli
yayinlanmalidir.

### 5.1. Enflasyon Verileri Sayfasi

Mutlaka anlatilacak noktalar:

- TCMB verisi EVDS3 servisinden cekilir.
- Kullanici tarih araligi secer.
- `Verileri Cek` butonu backend'e POST istegi yapar.
- Gelen veri MongoDB `inflation_data` collection'ina yazilir.
- Her ay verisi ayin ilk gunu ile saklanir.
- Bu veri Kar/Zarar, Maliyet Analizi ve Fiyat Performansi raporlarini besler.

### 5.2. Kar/Zarar Analizi Sayfasi

Mutlaka anlatilacak noktalar:

- Nominal gelir faturalardan okunur.
- Nominal gider gider kayitlarindan okunur.
- SMM stok hareketlerindeki gercek `unitCost` ile hesaplanir.
- Reel gelir/gider/maliyet secilen baz tarihe tasinir.
- `Bugunku Deger Farki`, reel net kar ile nominal net kar arasindaki farktir.
- Enflasyon verisi eksikse ilgili ay icin oran `0` kabul edilir; bu nedenle
  rapor oncesi enflasyon verileri cekilmelidir.

### 5.3. Rol ve Yetki Yonetimi Sayfasi

Mutlaka anlatilacak noktalar:

- Admin bu panelden rol olusturur.
- Rol adi sistemde buyuk harf ve alt cizgi formatina getirilir.
- Tree yapisinda operasyon, muhasebe, rapor ve sistem yetkileri secilir.
- Rol kaydedildikten sonra kullanici ekleme/duzenleme formlarinda secilebilir.

### 5.4. Mobil Ana Ekrana Ekleme (PWA) Sayfasi

Mutlaka anlatilacak noktalar:

- Bu ozelligin teknik adi PWA'dir: Progressive Web App.
- Android/Chrome tarafinda popup'taki `Ana ekrana ekle` butonu native kurulum
  penceresini baslatir.
- iPhone/iPad tarafinda Apple tek tuslu kurulum API'si vermedigi icin Safari
  uzerinden `Paylas > Ana Ekrana Ekle` adimlari anlatilmalidir.
- Popup kapatilirse ayni cihazda 7 gun tekrar gosterilmez.
- Uygulama ana ekrandan acildiginda standalone modda calisir.
- Baslangic adresi `/auth/sign-in?source=pwa` olarak acilir.
- Teknik kontrolde `manifest.webmanifest`, `sw.js`, `icon-192.png` ve
  `icon-512.png` URL'lerinin 200 dondugu yazilmalidir.

Bu sayfada Android ve iPhone kullanicisi ayni sayfada ama ayri basliklarla
anlatilmalidir. Kullaniciya "telefonuna yuklenir" denirken iPhone kisiti
saklanmamalidir; iPhone'da manuel Safari adimi gerektigi net yazilmalidir.
- Varsayilan roller korunur; temel rollerin silinmesi engellenir.
- `TUM_YETKILER` tum menulere erisim saglar.

### 5.4. Musteri Ekstresi Sayfasi

Mutlaka anlatilacak noktalar:

- Musteri listesinde `Ekstreyi Goruntule` butonu detay route'una gider.
- Dogru route formati: `/dashboard/muhasebe/cari-hesaplar-musteri/:customerId`
- Ekstrede borc, alacak ve bakiye satirlari gorulur.
- Tahsilat girilirse musteri bakiyesi ve kasa/banka hareketleri etkilenir.

---

## 6. Page Icerigi Yazarken Dil ve Stil Kurallari

- Basliklar kisa ve ekrandaki adla ayni olmali.
- Her sayfa once kullanici dilinde anlatilmali, teknik ayrinti sonra gelmeli.
- Buton isimleri ekrandaki metinle birebir yazilmali.
- "Ne ise yarar" ve "islemden sonra ne olur" bolumleri mutlaka olmalidir.
- Muhasebe ve rapor ekranlarinda matematiksel mantik acik yazilmalidir.
- Yetki hatalarinda sadece "yetkiniz yok" denmemeli, hangi rol/yetki gerektigi
  yazilmalidir.
- Canli dogrulama adimlari destek ekibinin kullanabilecegi kadar net olmalidir.
- Her sayfa sonunda iliskili sayfalar verilmelidir.

---

## 7. Ornek Page: Rol ve Yetki Yonetimi

### Amac

Rol ve Yetki Yonetimi, admin kullanicinin sistemde yeni rol olusturmasini ve bu
role hangi ekran/islem yetkilerinin verilecegini belirlemesini saglar.

### Menu Yolu

```text
Sol Menu > Sistem > Kullanici Yonetimi > Rol ve Yetki Yonetimi
```

### Adimlar

1. Admin olarak giris yap.
2. `Kullanici Yonetimi` sayfasina git.
3. Sayfanin altindaki `Rol ve Yetki Yonetimi` bolumunu bul.
4. `Yeni Rol Ekle` butonuna bas.
5. Rol adini yaz.
6. Aciklama yaz.
7. Tree yapisindan gerekli yetkileri sec.
8. `Kaydet` butonuna bas.
9. Yeni kullanici eklerken `Roller` alaninda bu rolu sec.

### Basarili Sonuc

Yeni rol kaydedilir, rol listesinde gorunur ve kullanici formlarinda atanabilir.
Bu role sahip kullanici sadece secilen yetkilerin izin verdigi menuleri ve
islemleri kullanabilir.

---

## 8. Ornek Page: Kar/Zarar Analizi

### Amac

Kar/Zarar Analizi, gorunen nominal kar ile enflasyon karsisinda bugunku degere
tasinmis reel kar arasindaki farki gosterir.

### Menu Yolu

```text
Sol Menu > Kar/Zarar Analizi
```

### On Kosullar

- Fatura verisi olmalidir.
- Gider verisi olmalidir.
- Siparis sevk edilmis ve stok hareketi olusmus olmalidir.
- Enflasyon verileri ilgili tarih araligi icin cekilmis olmalidir.

### Adimlar

1. Baslangic tarihini sec.
2. Bitis tarihini sec.
3. Raporun yuklenmesini bekle.
4. `Nominal Net Kar` kartini oku.
5. `Bugunku Deger Farki` kartini oku.
6. `Reel Net Kar` kartini oku.
7. Grafiklerde gelirin, maliyetin, giderin ve enflasyon farkinin etkisini incele.

### Matematik

```text
Nominal Net Kar = Nominal Gelir - Nominal SMM - Nominal Gider
Reel Net Kar = Reel Gelir - Reel SMM - Reel Gider
Bugunku Deger Farki = Reel Net Kar - Nominal Net Kar
```

SMM satis fiyatindan degil, stok cikis hareketinde saklanan `unitCost`
degerinden hesaplanir.

---

## 9. Ornek Page: Enflasyon Verileri

### Amac

Enflasyon Verileri sayfasi, TCMB EVDS3 servisinden aylik UFE degisim oranlarini
ceker ve raporlarda kullanilmak uzere veritabanina kaydeder.

### Menu Yolu

```text
Sol Menu > Tanimlar > Enflasyon Verileri
```

### Adimlar

1. Baslangic tarihini sec.
2. Bitis tarihini sec.
3. `Verileri Cek` butonuna bas.
4. Basari bildirimi bekle.
5. Tabloyu kontrol et.
6. Rapor ekranlarina gec.

### Teknik Not

Backend endpoint:

```text
POST /api/inflation/fetch?startDate=dd-MM-yyyy&endDate=dd-MM-yyyy
```

Canli dogrulamada `01-01-2024 / 31-03-2024` araligi icin 3 kayit basariyla
yazilmistir.
