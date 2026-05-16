# FidanYS Kullanici Deneyimi ve Operasyon Kilavuzu

Bu dokuman, FidanYS sistemine ilk kez giren bir kullanicinin `admin/admin` ile
oturum acmasindan baslayarak sistemi gunluk operasyonda kullanabilecek seviyeye
gelmesini hedefler. Teknik kurulum dokumani degil, ekran ekran ve buton buton
kullanim kilavuzudur.

Ana hedef sudur:

- Kullanici sisteme nasil girer?
- Ilk bos sistemde hangi tanimlar hangi sirayla yapilir?
- Fidan, depo, musteri, tedarikci, stok, siparis, mal girisi, uretim partisi,
  fatura, cari hesap, tahsilat, tediye, gider ve rapor ekranlari nasil
  kullanilir?
- Hangi buton hangi islemi yapar?
- Hangi ekran hangi veriye baglidir?
- Bir kullanici sifirdan baslayip sistemi gunluk isletmeye nasil alir?

---

## 1. Sisteme Ilk Giris

### 1.1. Uygulama adresi

Canli ortam icin uygulama adresi:

```text
https://ata.fidanys.com.tr
```

Tarayicida bu adrese girildiginde kullanici giris ekrani acilir.

### 1.2. Ilk kullanici bilgisi

Ilk kurulumdan sonra varsayilan yonetici girisi:

```text
Kullanici Adi: admin
Parola: admin
```

Bu kullanici sistemin ana yoneticisidir. Ilk giristen sonra guvenlik icin
`Kullanici Yonetimi` veya profil alani uzerinden daha guclu bir parola
kullanilmasi onerilir.

### 1.3. Giris ekrani alanlari

Giris ekraninda su alanlar vardir:

- `Kullanici Adi`: Sisteme tanimli kullanici adidir.
- `Parola`: Kullanici parolasidir.
- `Goz ikonu`: Parolayi gosterir veya gizler.
- `Giris Yap`: Bilgileri dogrular ve kullaniciyi panele alir.

### 1.4. Aktif oturum uyarisi

Ayni kullanici daha once baska bir cihazda veya tarayicida acik kaldiysa sistem
aktif oturum uyarisi gosterebilir.

Uyari penceresindeki butonlar:

- `Iptal`: Mevcut giris denemesini durdurur.
- `Evet, Devam Et`: Onceki aktif oturumu gecersiz sayar ve bu cihazdan girise
  devam eder.

Bu davranis ozellikle mobil cihaz, VPN veya farkli tarayici kullaniminda
normaldir.

---

## 2. Genel Ekran Mantigi

FidanYS, sol menulu bir yonetim panelidir. Kullanici giris yaptiktan sonra
ekranin sol tarafinda ana navigasyon, sag tarafta secilen sayfanin icerigi
gorunur.

### 2.1. Ana menu gruplari

Sistemdeki menu gruplari:

- `Anasayfa`
- `Operasyonlar`
- `Muhasebe`
- `Tanimlar`
- `Raporlar`
- `Kar/Zarar Analizi`
- `Sistem`
- `Profilim`

Kullanicinin rolune gore bazi menuler gorunmeyebilir.

### 2.2. Sayfa basligi ve ana aksiyon butonu

Cogu sayfanin ust kisminda bir baslik ve varsa ana islem butonu bulunur.

Ornek:

- `Fidan Yonetimi` sayfasinda `Yeni Fidan Ekle`
- `Depo Yonetimi` sayfasinda `Yeni Depo Ekle`
- `Siparis Yonetimi` sayfasinda `Yeni Siparis`
- `Mal Giris Yonetimi` sayfasinda `Yeni Giris Yap`
- `Uretim Partileri` sayfasinda `Yeni Parti Olustur`

Bu ana butonlar genellikle sayfanin ustunde form acarak yeni kayit olusturma
surecini baslatir.

### 2.3. Tablo arama kutusu

Liste ekranlarinda tablo ustunde arama alani bulunur.

Arama kutusu:

- Liste icindeki kayitlari filtreler.
- Sayfaya gore musteri adi, fidan adi, depo adi, tedarikci adi, siparis no gibi
  alanlarda arama yapar.
- Arama yapildiginda sayfa genellikle ilk sayfaya doner.

### 2.4. Sutun siralama

Tablolarda bazi sutun basliklari tiklanabilir.

Tiklanan sutun:

- Ilk tiklamada artan siralar.
- Ikinci tiklamada azalan siralar.
- Ucuncu tiklamada varsayilan siralamaya donebilir.

Bu ozellik ozellikle tarih, tutar, ad, miktar gibi alanlarda kullanislidir.

### 2.5. CSV ve PDF disa aktarma

Bir cok tabloda `CSV` ve `PDF` aktarma butonlari bulunur.

- `CSV`: Listedeki veriyi tablo dosyasi olarak indirir. Excel veya benzeri
  programlarda acilabilir.
- `PDF`: Listeyi rapor formatinda PDF olarak indirir.

Aktarilan dosya, ilgili sayfanin kayitlarini temsil eder. Arama ve filtreleme
ekranda aktifse, kullanici gorunen veriyi kontrol ederek aktarim yapmalidir.

### 2.6. Sayfalama

Liste altinda sayfalama alani bulunur.

Kullanici:

- Sayfa basina `5`, `10` veya `25` kayit gosterebilir.
- Onceki veya sonraki sayfaya gecebilir.
- Toplam kayit sayisini takip edebilir.

### 2.7. Satir aksiyon ikonlari

Tablolarda satirin en saginda islem ikonlari yer alir.

En yaygin ikonlar:

- `Kalem`: Kaydi duzenler.
- `Cop kutusu`: Kaydi siler.
- `Goz`: Detay goruntuler.
- `Makbuz/Fatura ikonu`: Siparisten fatura olusturur.
- `Carpi`: Tamamlanmis bir hareketi iptal eder.

Silme ve iptal islemleri genellikle onay penceresi ister.

### 2.8. Form butonlari

Formlarda en yaygin butonlar:

- `Kaydet`: Yeni kaydi olusturur veya mevcut kaydi gunceller.
- `Iptal`: Formu kapatir, girilen bilgileri kaydetmez.
- `Yeni Kalem Ekle`: Siparis veya mal girisi gibi kalemli formlara yeni satir
  ekler.
- `Sil`: Onay verildikten sonra kaydi siler.
- `Vazgec`: Onay penceresini kapatir.

### 2.9. Bildirimler

Basarili veya hatali islemlerden sonra ekranin alt/ust bolumunde bildirim
gorunebilir.

Ornekler:

- Kayit basariyla olusturuldu.
- Kayit guncellendi.
- Kayit silindi.
- Zorunlu alan eksik.
- Sunucu hatasi olustu.
- Yetkiniz yok.

---

## 3. Roller ve Yetki Mantigi

Sistemde kullanici rolleri vardir. Her kullanici birden fazla role sahip
olabilir.

### 3.1. ADMIN

`ADMIN` sistem yoneticisidir.

Genel olarak:

- Tum ana ekranlari gorebilir.
- Tanimlari yonetebilir.
- Kullanici olusturabilir.
- Fidan, depo, musteri, tedarikci, siparis, mal girisi, uretim partisi,
  muhasebe ve rapor ekranlarinda en genis yetkiye sahiptir.

Ilk `admin/admin` kullanicisi bu role sahiptir.

### 3.2. SALES

`SALES` satis odakli kullanicidir.

Genel olarak:

- Musterileri gorur ve yonetebilir.
- Siparis olusturabilir.
- Fidan ve stok bilgilerini gorur.
- Satis surecinde gerekli ekranlara erisir.

### 3.3. WAREHOUSE_STAFF

`WAREHOUSE_STAFF` depo ve operasyon personelidir.

Genel olarak:

- Depo, stok, mal girisi ve tedarikci ekranlarinda calisir.
- Siparisin stok etkisini takip eder.
- Fidan ve stok bilgilerini gorur.

### 3.4. ACCOUNTANT

`ACCOUNTANT` muhasebe kullanicisidir.

Genel olarak:

- Cari hesaplari gorur.
- Fatura, tahsilat, tediye, kasa/banka, gider ve rapor ekranlarini kullanir.
- Enflasyon verisi ve maliyet analizlerini takip eder.

---

## 4. Sifirdan Kullanim Sirasi

Bos bir sistemde dogru kullanim sirasi asagidaki gibidir.

### 4.1. Birinci asama: temel tanimlar

Once sistemin operasyon icin ihtiyac duydugu temel kayitlar girilir:

1. `Depo Yonetimi`: En az bir depo olusturulur.
2. `Musteri Yonetimi`: Satis yapilacak musteriler olusturulur.
3. `Tedarikci Yonetimi`: Alim yapilacak tedarikciler olusturulur.
4. `Gider Kategorileri`: Giderler icin kategoriler tanimlanir.
5. `Fidan Yonetimi`: Fidan turu, cesidi, anac, boy, yas ve arazi bilgileriyle
   satilacak/uretilecek fidan kartlari olusturulur.

### 4.2. Ikinci asama: stok baslatma

Fidan kartlari ve depo hazir olduktan sonra stok olusturulur.

Stok dogrudan `Stok Durumu` ekranindan eklenmez. Stok miktari su islemlerle
olusur:

- `Mal Girisi` ekranindan tedarikciden alim girisi yapilir.
- `Mal Girisi` ekranindan uretim partisinden giris yapilir.
- Siparis sevk edildiginde stok azalir.
- Tamamlanmis mal girisi iptal edilirse stok geri duser.

### 4.3. Ucuncu asama: satis sureci

Satis icin:

1. Musteri secilir.
2. Cikis deposu secilir.
3. Siparis kalemleri eklenir.
4. Siparis olusturulur.
5. Siparis hazirlanir, sevk edilir ve teslim edilir.
6. Sevk veya teslim durumundaki siparisten fatura olusturulur.
7. Musteri cari hesabindan tahsilat kaydedilir.

### 4.4. Dorduncu asama: uretim sureci

Uretim icin:

1. `Uretim Partileri` ekranindan parti olusturulur.
2. Parti detayinda uretim giderleri eklenir.
3. Uretimden elde edilen fidanlar `Mal Girisi` ile depoya alinir.
4. Bu giris stok miktarini ve maliyet bilgisini etkiler.

### 4.5. Besinci asama: muhasebe ve raporlar

Operasyon ilerledikce:

- Musteri cari hareketleri takip edilir.
- Tedarikci cari hareketleri takip edilir.
- Tahsilat ve tediye girilir.
- Giderler kaydedilir.
- Kasa ve banka hareketleri izlenir.
- Enflasyon, maliyet, fiyat performansi ve kar/zarar raporlari incelenir.

---

## 5. Anasayfa

`Anasayfa`, kullanicinin rolune gore ozet bilgi sunar.

### 5.1. ADMIN anasayfasi

Yonetici kullanicida asagidaki kartlar gorunur:

- `Son 30 Gun Gelir`: Son 30 gunde satislardan olusan gelir ozeti.
- `Bu Ayki Gider`: Icinde bulunulan ayin gider toplami.
- `Bekleyen Siparisler`: Henuz tamamlanmamis siparis adedi.
- `Toplam Stok Degeri`: Sistemdeki stok miktari ve maliyetlere gore stok
  toplam degeri.

Grafikler:

- `Aylik Satis Trendi`: Aylara gore satis trendini gosterir.
- `En Cok Satan 5 Fidan`: Satis miktarina gore en cok satan fidanlari gosterir.

Bos sistemde stok veya satis olmadigi icin tutarlar sifir olmalidir.

### 5.2. Depo personeli anasayfasi

Depo kullanicisinda asagidaki bilgiler one cikar:

- Kritik stoktaki urunler.
- Bugun sevk edilecek siparisler.
- Son 24 saatteki mal girisleri.
- Depolara gore stok dagilimi.

### 5.3. Muhasebe anasayfasi

Muhasebe kullanicisinda asagidaki bilgiler one cikar:

- Vadesi gecmis alacaklar.
- Odenmemis tedarikci borclari.
- Son 7 gunluk nakit akisi.
- Giderlerin dagilimi.

### 5.4. Yeni kullanici karsilama ekrani

Sistemde yeterli veri yoksa karsilama ekrani gorunebilir. Bu ekran kullaniciya
su sirayi hatirlatir:

- Fidanlik bilgilerini kur.
- Stok ekle.
- Musterileri tanimla.
- Ilk siparisi olustur.
- Finansal islemleri takip et.
- Raporlari incele.

---

## 6. Tanimlar

Tanimlar bolumu, sistemde operasyon baslamadan once girilmesi gereken temel
verileri icerir.

## 6.1. Fidan Yonetimi

Bu ekran sistemin ana urun kartlarini yonetir. Siparis, mal girisi, stok ve
rapor ekranlari fidan kartlarini kullanir.

### 6.1.1. Ekranin amaci

Fidan karti, asagidaki bilesenlerin bir araya gelmesiyle olusur:

- Fidan turu
- Fidan cesidi
- Anac
- Fidan boyu
- Fidan yasi
- Arazi

Bu yapi sayesinde ayni fidan turunun farkli cesit, yas, boy veya arazi
kombinasyonlari ayri urun karti olarak izlenebilir.

### 6.1.2. Yeni Fidan Ekle butonu

`Yeni Fidan Ekle` butonu yeni fidan karti olusturma formunu acar.

Form adimli calisir. Kullanici her adimda bir secim yapar.

Adimlar:

1. `Fidan Turu`
2. `Fidan Cesidi`
3. `Anac`
4. `Fidan Boyu`
5. `Fidan Yasi`
6. `Arazi`

Bir adim secildiginde secim ekranda etiket olarak gorunur.

### 6.1.3. Adimlari silme

Secilen adimlarin yaninda silme ikonu bulunur.

Bir adim silinirse:

- O adim temizlenir.
- Ona bagli sonraki adimlar da sifirlanir.

Ornek: Fidan turu degistirilirse, ona bagli cesit secimi de yeniden
yapilmalidir.

### 6.1.4. Tanim listesine hizli kayit ekleme

Fidan formundaki secim alanlarinda yeni tanim ekleme aksiyonu bulunur.

Kullanici mevcut listede aradigi degeri bulamazsa:

- Yeni fidan turu ekleyebilir.
- Yeni fidan cesidi ekleyebilir.
- Yeni anac ekleyebilir.
- Yeni fidan boyu ekleyebilir.
- Yeni fidan yasi ekleyebilir.
- Yeni arazi ekleyebilir.

Bu hizli kayit pencereleri, ana fidan karti olusturma surecinden kopmadan eksik
tanimlari tamamlamayi saglar.

### 6.1.5. Kaydet butonu

Tum adimlar tamamlandiktan sonra `Kaydet` butonu fidan kartini olusturur.

Eksik zorunlu alan varsa sistem kayda izin vermez.

### 6.1.6. Fidan tablosu

Tabloda su sutunlar bulunur:

- `Fidan Turu`
- `Fidan Cesidi`
- `Anac`
- `Boy`
- `Yas`
- `Arazi`
- `Islemler`

Arama, fidan turu, cesidi, anac ve arazi gibi alanlarda yapilir.

### 6.1.7. Kalem ikonu

Kalem ikonu fidan kartini duzenleme formunu acar.

Kullanici mevcut fidanin bilesenlerini guncelleyebilir. Bu islem daha once
olusturulan kaydin tanimini degistirir.

### 6.1.8. Cop kutusu ikonu

Cop kutusu ikonu fidan kartini silmek icin onay penceresi acar.

Silme islemi oncesinde kullaniciya onay sorulur. Operasyonda kullanilmis fidan
kartlarinin silinmesi stok, siparis veya rapor baglantilarini etkileyebilecegi
icin dikkatli kullanilmalidir.

---

## 6.2. Depo Yonetimi

Depo Yonetimi, stoklarin fiziksel veya operasyonel olarak tutuldugu yerleri
tanimlar.

### 6.2.1. Yeni Depo Ekle butonu

`Yeni Depo Ekle` butonu yeni depo formunu acar.

Form alanlari:

- `Depo Adi`: Deponun sistemde gorunecek adidir.
- `Adres`: Deponun adres veya aciklama bilgisidir.

### 6.2.2. Kaydet butonu

`Kaydet`, depo kaydini olusturur.

Depo olusturulduktan sonra:

- Mal girisinde giris deposu olarak secilebilir.
- Sipariste cikis deposu olarak secilebilir.
- Stok durumunda depo bazli miktar izlenebilir.

### 6.2.3. Depo tablosu

Tabloda su sutunlar bulunur:

- `Depo Adi`
- `Adres`
- `Islemler`

### 6.2.4. Kalem ikonu

Depo bilgilerini duzenler.

### 6.2.5. Cop kutusu ikonu

Depoyu silmek icin onay penceresi acar.

Stok hareketlerinde kullanilmis depolar silinmeden once dikkatle kontrol
edilmelidir.

---

## 6.3. Musteri Yonetimi

Musteri Yonetimi, satis yapilan kisileri veya firmalari tanimlar.

### 6.3.1. Yeni Musteri Ekle butonu

`Yeni Musteri Ekle` butonu musteri formunu acar.

Form alanlari:

- `Adi`
- `Soyadi`
- `Firma Adi`
- `Telefon`
- `E-posta`
- `Adres`

`Firma Adi` opsiyonel olabilir. Bireysel musteri icin ad ve soyad yeterli,
kurumsal musteri icin firma adi da girilebilir.

### 6.3.2. Musteriyi Kaydet butonu

Musteri kaydini olusturur.

Musteri olusturulduktan sonra:

- Siparis olustururken secilebilir.
- Faturada taraf olarak gorunur.
- Cari hesap ekstresi olusur.
- Tahsilat girisi yapilabilir.

### 6.3.3. Musteri tablosu

Tabloda su sutunlar bulunur:

- `Adi Soyadi`
- `Firma Adi`
- `Telefon`
- `E-posta`
- `Islemler`

Arama musteri adi, firma adi ve e-posta uzerinden calisir.

### 6.3.4. Kalem ikonu

Musteri bilgilerini duzenler.

### 6.3.5. Cop kutusu ikonu

Musteriyi silmek icin onay penceresi acar.

Siparis, fatura veya cari hareketi olan musterilerde silme islemi operasyonel
gecmisi etkileyebilecegi icin dikkatli kullanilmalidir.

---

## 6.4. Tedarikci Yonetimi

Tedarikci Yonetimi, fidan veya hizmet alimi yapilan firmalari tanimlar.

### 6.4.1. Yeni Tedarikci Ekle butonu

`Yeni Tedarikci Ekle` butonu tedarikci formunu acar.

Form alanlari:

- `Tedarikci Adi`
- `Yetkili Kisi`
- `Telefon`
- `E-posta`
- `Adres`

### 6.4.2. Tedarikciyi Kaydet butonu

Tedarikci kaydini olusturur.

Tedarikci olusturulduktan sonra:

- Mal girisinde kaynak olarak secilebilir.
- Tedarikci cari hesabinda takip edilir.
- Tediye girisi yapilabilir.

### 6.4.3. Tedarikci tablosu

Tabloda su sutunlar bulunur:

- `Tedarikci Adi`
- `Yetkili Kisi`
- `Telefon`
- `E-posta`
- `Islemler`

### 6.4.4. Kalem ikonu

Tedarikci bilgilerini duzenler.

### 6.4.5. Cop kutusu ikonu

Tedarikciyi silmek icin onay penceresi acar.

Mal girisi veya cari hareketi olan tedarikcilerde silme islemi dikkatle
yapilmalidir.

---

## 6.5. Gider Kategorileri

Gider Kategorileri, giderlerin siniflandirilmasi icin kullanilir.

### 6.5.1. Yeni Kategori Ekle butonu

`Yeni Kategori Ekle` butonu kategori formunu acar.

Form alanlari:

- `Kategori Adi`
- `Aciklama`

### 6.5.2. Kaydet butonu

Gider kategorisini olusturur.

Kategori olusturulduktan sonra:

- Genel gider girisinde secilebilir.
- Uretim partisi giderlerinde secilebilir.
- Gider raporlarinda dagilim icin kullanilir.

### 6.5.3. Kategori tablosu

Tabloda su sutunlar bulunur:

- `Kategori Adi`
- `Aciklama`
- `Islemler`

### 6.5.4. Kalem ikonu

Kategori bilgisini duzenler.

### 6.5.5. Cop kutusu ikonu

Kategoriyi silmek icin onay penceresi acar.

Giderlerde kullanilmis kategoriler silinmeden once rapor etkisi dikkate
alinmalidir.

---

## 6.6. Enflasyon Verileri

Enflasyon Verileri ekrani, TCMB kaynakli enflasyon verilerini sisteme almak ve
raporlarda kullanmak icindir.

### 6.6.1. Baslangic Tarihi alani

Cekilecek enflasyon verisinin baslangic tarihini belirler.

### 6.6.2. Bitis Tarihi alani

Cekilecek enflasyon verisinin bitis tarihini belirler.

### 6.6.3. Verileri Cek butonu

`Verileri Cek`, secilen tarih araligi icin TCMB servisinden enflasyon verilerini
alir ve sisteme kaydeder.

Basarili olursa tablo guncellenir.

Guncel davranis:

- Sistem TCMB EVDS3 servisinden veri ceker.
- Kullanilan seri `TP.FG.J01` aylik UFE degisim serisidir.
- Her veri ilgili ayin ilk gunuyle kaydedilir.
- Ornek: Mart 2024 verisi `2024-03-01` olarak saklanir.
- Bu veriler sadece tablo icin degil, Kar/Zarar Analizi, Maliyet Analizi ve
  Fiyat Performansi raporlari icin de zorunlu kaynaktir.

Adim adim kullanim:

1. `Baslangic Tarihi` alanindan ilk tarihi sec.
2. `Bitis Tarihi` alanindan son tarihi sec.
3. `Verileri Cek` butonuna bas.
4. Basari bildirimi gelmesini bekle.
5. Tabloya gelen ay ve yuzde degerlerini kontrol et.
6. Rapor ekranlarina gecmeden once ilgili donemin eksiksiz geldiginden emin ol.

### 6.6.4. Enflasyon verisi tablosu

Tabloda su sutunlar bulunur:

- `Tarih`
- `Deger (%)`

Bu veriler rapor ekranlarinda maliyet, fiyat performansi ve kar/zarar analizine
yardimci olur.

---

## 7. Operasyonlar

Operasyonlar bolumu gunluk is akisini yonetir: siparis, mal girisi, uretim ve
stok.

## 7.1. Siparis Yonetimi

Siparis Yonetimi, musteriden gelen satis taleplerini kaydetmek, durumunu
ilerletmek ve faturalandirmak icin kullanilir.

### 7.1.1. Yeni Siparis butonu

`Yeni Siparis` butonu siparis olusturma formunu acar.

Bu buton genellikle `ADMIN` ve `SALES` rollerinde gorunur.

### 7.1.2. Siparis Bilgileri bolumu

Formun sol tarafinda siparisin ana bilgileri bulunur.

Alanlar:

- `Musteri`: Siparisi veren musteri secilir.
- `Cikis Deposu`: Urunun hangi depodan cikacagi secilir.
- `Tahmini Teslim Tarihi`: Siparis icin planlanan teslim tarihi girilir.

Musteri ve depo daha once ilgili tanim ekranlarinda olusturulmus olmalidir.

### 7.1.3. Siparis Kalemleri bolumu

Formun sag tarafinda siparise eklenecek fidan satirlari bulunur.

Her satirda:

- `Fidan`: Satilacak fidan karti secilir.
- `Miktar`: Siparis edilen adet girilir.
- `Satis Fiyati`: Birim satis fiyati girilir.
- `Islem`: Satiri silmek icin cop kutusu ikonu bulunur.

### 7.1.4. Yeni Kalem Ekle butonu

Siparise yeni fidan satiri ekler.

Bir sipariste birden fazla fidan kalemi olabilir.

### 7.1.5. Cop kutusu ikonu

Siparis kalemini formdan kaldirir.

Bu islem siparis kaydedilmeden once form icindeki satiri siler.

### 7.1.6. Iptal butonu

Siparis formunu kapatir ve girilen bilgileri kaydetmez.

### 7.1.7. Siparisi Olustur butonu

Siparisi kaydeder.

Siparis olusturuldugunda baslangic durumu genellikle hazirlaniyor seklindedir.

### 7.1.8. Siparis tablosu

Tabloda su sutunlar bulunur:

- `Siparis No`
- `Musteri`
- `Tutar`
- `Siparis Tarihi`
- `Durum`
- `Islemler`

Durumlar:

- `Hazirlaniyor`
- `Sevk Edildi`
- `Teslim Edildi`
- `Iptal Edildi`

### 7.1.9. Durumu Guncelle butonu

Satirdaki kalem ikonu siparis durum guncelleme penceresini acar.

Pencerede `Yapilacak Islem` secilir.

Siparisin mevcut durumuna gore secenekler:

- Hazirlaniyorsa: `Sevk Et`
- Sevk edildiyse: `Teslim Et`
- Teslim edilmemisse: `Siparisi Iptal Et`

Butonlar:

- `Vazgec`: Pencereyi kapatir.
- `Onayla`: Secilen islemi uygular.

Stok etkisi acisindan en kritik adim `Sevk Et` islemidir. Sevk islemi stok
cikis surecini temsil eder.

### 7.1.10. Fatura Olustur butonu

Siparis satirindaki fatura/makbuz ikonu siparisten fatura olusturur.

Bu buton:

- Siparis `Sevk Edildi` veya `Teslim Edildi` durumundaysa aktif olur.
- Siparis icin daha once fatura olusturulduysa pasif olur.
- Siparis henuz hazirlaniyorsa aktif olmaz.

Fatura olusturulduktan sonra kayit `Faturalar` ekraninda gorunur.

---

## 7.2. Mal Girisi

Mal Girisi, depoya giren fidanlarin kaydedildigi ekrandir. Stok miktari ve stok
degeri bu ekran uzerinden artar.

### 7.2.1. Yeni Giris Yap butonu

`Yeni Giris Yap` butonu mal girisi formunu acar.

### 7.2.2. Giris Bilgileri bolumu

Formun ust bolumunde mal girisinin ana bilgileri vardir.

Alanlar:

- `Irsaliye/Fis Numarasi`: Giris belgesi numarasi.
- `Giris Deposu`: Fidanlarin girecegi depo.
- `Giris Tarihi`: Girisin tarihi.
- `Giris Kaynagi`: Girisin nereden geldigini belirler.

### 7.2.3. Giris Kaynagi secimi

Iki kaynak tipi vardir:

- `Tedarikci`: Disaridan alinan fidanlar icin kullanilir.
- `Uretim Partisi`: Kendi uretiminden depoya alinacak fidanlar icin kullanilir.

Kaynak `Tedarikci` ise tedarikci secilir.

Kaynak `Uretim Partisi` ise uretim partisi secilir.

### 7.2.4. Giris Yapilacak Fidanlar bolumu

Her mal girisi bir veya daha fazla fidan kalemi icerebilir.

Her satirda:

- `Fidan`: Depoya girecek fidan karti.
- `Miktar`: Girecek adet.
- `Birim Maliyet`: Alis veya uretim birim maliyeti.
- `Islem`: Satiri silme ikonu.

### 7.2.5. Yeni Kalem Ekle butonu

Mal girisine yeni fidan satiri ekler.

### 7.2.6. Cop kutusu ikonu

Formdaki kalemi siler.

### 7.2.7. Iptal butonu

Formu kapatir ve kayit olusturmaz.

### 7.2.8. Mal Girisini Kaydet butonu

Mal girisini kaydeder.

Kayit basarili olursa:

- Secilen depodaki stok miktari artar.
- Stok maliyeti guncellenir.
- Tedarikci veya uretim kaynagi ile hareket baglantisi kurulur.

### 7.2.9. Mal girisi tablosu

Tabloda su sutunlar bulunur:

- `Fis/Irsaliye No`
- `Kaynak`
- `Depo`
- `Toplam Tutar`
- `Giris Tarihi`
- `Durum`
- `Islemler`

### 7.2.10. Girisi Iptal Et butonu

Tamamlanmis mal girisi satirinda carpi ikonu gorunur.

Bu buton:

- Girisi iptal eder.
- Girise bagli stok miktarini geri duser.
- Onay penceresi ister.

Onay penceresinde:

- `Vazgec`: Islemi iptal eder.
- `Evet, Iptal Et`: Mal girisini iptal eder.

Bu islem stok miktarini etkiledigi icin dikkatli kullanilmalidir.

---

## 7.3. Uretim Partileri

Uretim Partileri, fidan uretim sureclerini parti bazinda takip etmek icin
kullanilir.

### 7.3.1. Yeni Parti Olustur butonu

`Yeni Parti Olustur` butonu uretim partisi formunu acar.

Bu islem genellikle yonetici rolundedir.

### 7.3.2. Parti formu alanlari

Form alanlari:

- `Parti Kodu`: Partinin takip kodu.
- `Parti Adi`: Partinin okunabilir adi.
- `Fidan Turu`: Uretilecek fidan turu.
- `Fidan Cesidi`: Secilen ture bagli fidan cesidi.
- `Baslangic Adedi`: Uretime baslanan adet.
- `Baslangic Tarihi`: Uretim baslangic tarihi.

### 7.3.3. Iptal butonu

Formu kapatir ve parti olusturmaz.

### 7.3.4. Parti Olustur butonu

Uretim partisini kaydeder.

Parti olustuktan sonra listeye eklenir ve detay sayfasindan izlenebilir.

### 7.3.5. Uretim partileri tablosu

Tabloda su sutunlar bulunur:

- `Parti Kodu`
- `Parti Adi`
- `Baslangic Adedi`
- `Baslangic Tarihi`
- `Durum`
- `Islemler`

### 7.3.6. Kalem ikonu

Parti detay sayfasina gider.

Bu ikon duzenleme/detay anlaminda kullanilir.

---

## 7.4. Uretim Partisi Detayi

Uretim partisi detay ekrani, tek bir partinin maliyet ve adet durumunu gosterir.

### 7.4.1. Listeye Geri Don butonu

`Listeye Geri Don`, kullaniciyi uretim partileri listesine geri goturur.

### 7.4.2. Genel Bilgiler karti

Bu kartta:

- Parti kodu
- Fidan bilgisi
- Durum
- Baslangic tarihi

gorunur.

### 7.4.3. Adet Bilgileri karti

Bu kartta:

- Baslangic adedi
- Mevcut adet
- Hasat edilen adet
- Beklenen hasat

gorunur.

### 7.4.4. Maliyet Bilgileri karti

Bu kartta:

- Maliyet havuzu
- Enflasyon duzeltilmis maliyet
- Son guncelleme bilgisi

gorunur.

### 7.4.5. Gider Ekle butonu

`Gider Ekle`, secili uretim partisine gider ekleme formunu acar.

Partiye ait giderler, partinin maliyet havuzunu etkiler.

### 7.4.6. Partiye Ait Giderler tablosu

Tabloda su sutunlar bulunur:

- `Aciklama`
- `Kategori`
- `Tutar`
- `Tarih`

Bu tablo, partinin uretim surecinde olusan maliyetleri takip etmek icin
kullanilir.

---

## 7.5. Stok Durumu

Stok Durumu ekrani, depolardaki mevcut fidan miktarlarini gosterir.

### 7.5.1. Ekranin amaci

Bu ekran takip ekranidir. Yeni stok dogrudan buradan eklenmez.

Stok miktari su islemlerle degisir:

- Mal girisi yapildiginda artar.
- Siparis sevk edildiginde azalir.
- Mal girisi iptal edildiginde azalir.
- Iptal veya ters hareketler stok durumunu etkileyebilir.

### 7.5.2. Stok tablosu

Tabloda su sutunlar bulunur:

- `Fidan Tipi`
- `Fidan Cesidi`
- `Anac`
- `Depo`
- `Miktar`
- `Durum`

### 7.5.3. Durum alani

Durum, miktara gore okunur.

Genel yorum:

- Miktar yuksekse stok normaldir.
- Miktar azsa kritik stok olarak takip edilir.
- Miktar sifirsa stok yoktur.

### 7.5.4. Arama ve disa aktarma

Stok listesinde fidan turu, cesidi, anac ve depo uzerinden arama yapilabilir.

CSV/PDF aktarim butonlari stok raporu almak icin kullanilir.

---

## 8. Muhasebe

Muhasebe bolumu, cari hesap, fatura, odeme, tahsilat, gider ve kasa/banka
hareketlerini yonetir.

## 8.1. Cari Hesaplar - Musteri

Bu ekran musterilerin cari hesaplarina ulasmak icin kullanilir.

### 8.1.1. Musteri cari tablosu

Tabloda su sutunlar bulunur:

- `Musteri Adi`
- `Firma Adi`
- `E-posta`
- `Islemler`

### 8.1.2. Ekstreyi Goruntule butonu

Satirdaki buton musteri cari ekstresini acar.

Ekstrede musterinin borc, alacak ve bakiye hareketleri gorulur.

---

## 8.2. Musteri Ekstresi

Musteri ekstresi, secilen musterinin finansal hareketlerini gosterir.

### 8.2.1. Bakiye bilgisi

Sayfada musterinin guncel bakiyesi gorunur.

Genel yorum:

- Borc bakiyesi musterinin firmaya borcunu gosterir.
- Alacak/eksi bakiye firmanin musteriye karsi durumunu gosterir.

### 8.2.2. Tahsilat Ekle butonu

`Tahsilat Ekle`, musteriden alinan odemeyi kaydetmek icin kullanilir.

### 8.2.3. Tahsilat formu alanlari

Form alanlari:

- `Tutar`
- `Odeme Tarihi`
- `Odeme Yontemi`
- `Aciklama`

Odeme yontemleri:

- `Nakit`
- `Banka Transferi`
- `Kredi Karti`

### 8.2.4. Tahsilati Kaydet butonu

Tahsilati kaydeder.

Kayit basarili olursa:

- Musteri cari ekstresinde alacak hareketi olusur.
- Kasa/banka hareketlerinde tahsilat olarak gorunur.
- Musteri bakiyesi guncellenir.

### 8.2.5. Ekstre tablosu

Tabloda su sutunlar bulunur:

- `Tarih`
- `Aciklama`
- `Islem Tipi`
- `Borc`
- `Alacak`
- `Bakiye`

---

## 8.3. Cari Hesaplar - Tedarikci

Bu ekran tedarikcilerin cari hesaplarina ulasmak icin kullanilir.

### 8.3.1. Tedarikci cari tablosu

Tabloda su sutunlar bulunur:

- `Tedarikci Adi`
- `Yetkili Kisi`
- `Telefon`
- `Islemler`

### 8.3.2. Ekstreyi Goruntule butonu

Satirdaki buton tedarikci ekstresini acar.

---

## 8.4. Tedarikci Ekstresi

Tedarikci ekstresi, secilen tedarikci ile olan borc/alacak hareketlerini
gosterir.

### 8.4.1. Tediye Ekle butonu

`Tediye Ekle`, tedarikciye yapilan odemeyi kaydetmek icin kullanilir.

### 8.4.2. Tediye formu alanlari

Form alanlari:

- `Tutar`
- `Odeme Tarihi`
- `Odeme Yontemi`
- `Aciklama`

Odeme yontemleri:

- `Nakit`
- `Banka Transferi`
- `Kredi Karti`

### 8.4.3. Tediyeyi Kaydet butonu

Tediye kaydini olusturur.

Kayit basarili olursa:

- Tedarikci cari ekstresinde hareket olusur.
- Kasa/banka hareketlerinde tediye olarak gorunur.
- Tedarikci bakiyesi guncellenir.

---

## 8.5. Faturalar

Faturalar ekrani siparislerden olusan faturalarin takip edildigi ekrandir.

### 8.5.1. Fatura nasil olusur?

Fatura bu ekrandan manuel olusturulmaz. Fatura olusturma islemi
`Siparis Yonetimi` ekranindaki fatura ikonuyla yapilir.

Bir siparisten fatura olusturmak icin siparis:

- `Sevk Edildi` veya
- `Teslim Edildi`

durumunda olmalidir.

### 8.5.2. Fatura tablosu

Tabloda su sutunlar bulunur:

- `Fatura No`
- `Musteri`
- `Tarih`
- `Tutar`
- `Durum`
- `Islemler`

Fatura durumlari:

- `Taslak`
- `Gonderildi`
- `Odendi`
- `Iptal Edildi`

### 8.5.3. Goz ikonu

Fatura detayini goruntuler.

Detay ekraninda fatura bilgileri, musteri, kalemler ve toplam tutarlar takip
edilir.

---

## 8.6. Kasa ve Banka Hareketleri

Bu ekran sisteme girilen odeme ve tahsilat hareketlerini listeler.

### 8.6.1. Ekranin amaci

Kasa/banka ekrani takip ekranidir.

Hareketler genellikle su islemlerden dogar:

- Musteri ekstresinden tahsilat girisi.
- Tedarikci ekstresinden tediye girisi.
- Gider odemeleri.

### 8.6.2. Hareket tablosu

Tabloda su sutunlar bulunur:

- `Tarih`
- `Islem Tipi`
- `Iliskili Taraf`
- `Aciklama`
- `Odeme Yontemi`
- `Tutar`

`Tahsilat` hareketleri gelir, `Tediye` hareketleri cikis olarak okunur.

---

## 8.7. Gider Yonetimi

Gider Yonetimi, isletme giderlerini kaydetmek icin kullanilir.

### 8.7.1. Yeni Gider Ekle butonu

`Yeni Gider Ekle` gider formunu acar.

### 8.7.2. Gider formu alanlari

Form alanlari:

- `Kategori`
- `Aciklama`
- `Tutar`
- `Gider Tarihi`

Kategori daha once `Gider Kategorileri` ekraninda tanimlanmis olmalidir.

### 8.7.3. Gideri Kaydet butonu

Gider kaydini olusturur.

Kayit basarili olursa:

- Gider listesine eklenir.
- Muhasebe ve rapor ekranlarinda gider olarak dikkate alinir.

### 8.7.4. Gider tablosu

Tabloda su sutunlar bulunur:

- `Tarih`
- `Kategori`
- `Aciklama`
- `Tutar`

---

## 9. Raporlar

Raporlar bolumu, operasyonel veriyi yonetsel bilgiye donusturur.

## 9.1. Enflasyon Genel Bakis

Bu ekran enflasyon verisini ozetler.

### 9.1.1. Yillik Uretici Fiyat Endeksi

Gosterge formunda yillik UFE degerini gosterir.

### 9.1.2. 1 Yil Onceki 10.000 TL Degeri

Bir yil onceki 10.000 TL'nin bugunku alim gucu veya karsiligi hakkinda fikir
verir.

### 9.1.3. Son 12 Aylik Enflasyon Trendi

Cizgi grafik olarak aylik enflasyon trendini gosterir.

---

## 9.2. Maliyet Analizi

Maliyet Analizi, isletme veya uretim partisi maliyetlerinin enflasyonla
karsilastirilmasini saglar.

### 9.2.1. Baslangic Tarihi

Analiz baslangic tarihini belirler.

### 9.2.2. Bitis Tarihi

Analiz bitis tarihini belirler.

### 9.2.3. Analiz Kapsami

Iki ana kapsam vardir:

- `Genel Isletme Giderleri`
- Secili `Uretim Partisi`

Genel gider secilirse sistem isletme giderlerini analiz eder.

Uretim partisi secilirse ilgili partinin maliyetleri analiz edilir.

### 9.2.4. Yenile butonu

Ekrandaki filtreler degistirildiginde rapor verisi yenilenir. `Yenile` butonu
kullaniciya raporu tekrar alma aksiyonunu temsil eder.

### 9.2.5. Maliyet Endeksi grafigi

Grafik, baslangic degeri 100 kabul edilerek maliyet artisini ve piyasa
enflasyonunu karsilastirir.

---

## 9.3. Satis Fiyati Performansi

Bu ekran, secili fidanin satis fiyatinin enflasyon karsisinda nasil performans
gosterdigini inceler.

### 9.3.1. Baslangic Tarihi

Analiz baslangic tarihini belirler.

### 9.3.2. Bitis Tarihi

Analiz bitis tarihini belirler.

### 9.3.3. Analiz Edilecek Fidan

Raporun hangi fidan karti icin calisacagini belirler.

Fidan secilmeden rapor anlamli veri uretmez.

### 9.3.4. Grafik yorumu

Grafik nominal ortalama satis fiyati ile enflasyona gore olmasi gereken fiyat
seviyesini karsilastirir.

Sistem fiyatlarin enflasyonun uzerinde veya altinda kaldigini analiz eder.

---

## 9.4. Kar/Zarar Analizi

Kar/Zarar Analizi, nominal kar ile enflasyon etkisinden arindirilmis reel kari
karsilastirir.

### 9.4.1. Baslangic Tarihi

Rapor baslangic tarihini belirler.

### 9.4.2. Bitis Tarihi

Rapor bitis tarihini belirler.

### 9.4.3. Raporu Getir butonu

Ekrandaki tarih araligi ile raporun alinmasini temsil eder. Tarih alani
degistiginde rapor verisi guncel araliga gore yeniden hesaplanir.

### 9.4.4. Nominal Net Kar

Muhasebe kayitlarina gore gorunen net kari gosterir.

### 9.4.5. Bugunku Deger Farki

Nominal net kar ile reel net kar arasindaki farki gosterir.

Hesap:

```text
Bugunku Deger Farki = Reel Net Kar - Nominal Net Kar
```

Pozitif fark, nominal karin bugunku degere tasindiginda daha yuksek gorundugunu
anlatir. Negatif fark, enflasyon ve maliyet etkileri sonrasinda reel karin
nominal kardan dusuk kaldigini anlatir.

### 9.4.6. Reel Net Kar

Enflasyon etkisi dikkate alindiktan sonra kalan gercek kazanci gosterir.

### 9.4.7. Grafikler

Ekranda:

- `Karin Yolculugu`
- `Nominal Karin Akibeti`

grafikleri yer alir.

Bu grafikler gelirin, giderin, nominal karin ve reel karin nasil olustugunu
gorsellestirir.

### 9.4.8. Matematiksel Mantik

Kar/Zarar Analizi su mantikla calisir:

```text
Nominal Net Kar = Nominal Gelir - Nominal SMM - Nominal Gider
Reel Net Kar = Reel Gelir - Reel SMM - Reel Gider
Bugunku Deger Farki = Reel Net Kar - Nominal Net Kar
```

Burada:

- `Nominal Gelir`: Faturalardan gelen toplam tutardir.
- `Nominal Gider`: Gider kayitlarindan gelen toplam tutardir.
- `Nominal SMM`: Satilan malin maliyetidir.
- `Reel Gelir/Gider/SMM`: Enflasyon verileriyle baz tarihe tasinmis tutarlardir.

Kritik not:

- SMM satis fiyatindan hesaplanmaz.
- SMM, siparis sevk edilirken stok hareketine yazilan gercek `unitCost`
  bilgisinden okunur.
- Yeni sevklerde `unitCost`, stok hareketlerine gore agirlikli ortalama maliyet
  olarak yazilir.
- Eski kayitlarda maliyet eksikse sistem uretim partisi maliyetinden fallback
  hesap yapabilir.

### 9.4.9. Dogru Rapor Almak Icin Adimlar

1. Ilgili donemin enflasyon verilerini `Enflasyon Verileri` ekranindan cek.
2. Donemdeki mal girislerinin birim maliyetle kaydedildiginden emin ol.
3. Siparislerin sevk edildiginden emin ol.
4. Faturalarin olustugundan emin ol.
5. Giderlerin `Gider Yonetimi` ekranindan kaydedildiginden emin ol.
6. Kar/Zarar Analizi ekranina git.
7. Baslangic ve bitis tarihini sec.
8. Nominal net kar, bugunku deger farki ve reel net kar kartlarini birlikte oku.
9. Grafiklerde hangi kalemin kari dusurdugunu veya artirdigini incele.

---

## 10. Sistem

Sistem bolumu kullanici ve hesap yonetimiyle ilgilidir.

## 10.1. Kullanici Yonetimi

Kullanici Yonetimi sadece yetkili kullanicilar icindir.

### 10.1.1. Yeni Kullanici Ekle butonu

`Yeni Kullanici Ekle` yeni kullanici formunu acar.

### 10.1.2. Kullanici formu alanlari

Form alanlari:

- `Kullanici Adi`
- `E-posta`
- `Sifre`
- `Roller`

Roller coklu secilebilir.

Rol secenekleri:

- `Yonetici`
- `Satis`
- `Muhasebeci`
- `Depo Personeli`

### 10.1.3. Olustur butonu

Yeni kullaniciyi olusturur.

Kullanici olusturulduktan sonra secilen rollere gore sisteme giris yapabilir.

### 10.1.4. Iptal butonu

Formu kapatir ve kullanici olusturmaz.

### 10.1.5. Kullanici tablosu

Tabloda su sutunlar bulunur:

- `Kullanici Adi`
- `E-posta`
- `Roller`
- `Islemler`

### 10.1.6. Kalem ikonu

Kullanici bilgilerini ve rollerini duzenlemek icin kullanilir.

### 10.1.7. Cop kutusu ikonu

Kullaniciyi silmek icin onay penceresi acar.

Bazi sistem kullanicilari korunmus olabilir ve duzenleme/silme islemi pasif
olabilir.

---

## 10.2. Rol ve Yetki Yonetimi

Rol ve Yetki Yonetimi, admin kullanicinin yeni roller olusturmasini ve bu
rollere hangi sayfa/islem yetkilerinin verilecegini belirlemesini saglar.

Bu bolum `Kullanici Yonetimi` sayfasinin altinda yer alir.

### 10.2.1. Ekranin amaci

Bu ekran sayesinde:

- Yeni rol olusturulur.
- Role aciklama yazilir.
- Tree yapisindan yetkiler secilir.
- Rol kaydedilir.
- Kaydedilen rol kullanici ekleme/duzenleme formunda atanabilir hale gelir.

### 10.2.2. Yeni Rol Ekle butonu

`Yeni Rol Ekle`, rol olusturma formunu acar.

Form acildiginda:

- `Rol Adi`
- `Aciklama`
- Yetki tree alani
- `Iptal`
- `Kaydet`

alanlari gorunur.

### 10.2.3. Rol Adi alani

Rolun sistemdeki adidir.

Kullanim onerisi:

- Kisa yaz.
- Turkce karakter kullanmadan yaz.
- Bosluk yerine alt cizgi kullan.

Ornekler:

```text
OPERASYON_SORUMLUSU
SAHA_PERSONELI
MUHASEBE_YARDIMCI
```

Sistem kayit sirasinda rol adini buyuk harf ve alt cizgi formatina yaklastirir.

### 10.2.4. Aciklama alani

Rolun ne icin kullanildigini anlatir.

Ornek:

```text
Siparis olusturur, stok gorur ve sevkiyat islemlerini takip eder.
```

### 10.2.5. Yetki Tree Yapisi

Yetkiler gruplar halinde gosterilir.

Ana gruplar:

- `Operasyonlar`
- `Muhasebe`
- `Raporlar ve Sistem`

Operasyon yetkileri:

- `Siparis olusturur`
- `Siparis sevk eder`
- `Mal girisi yapar`
- `Stoklari gorur`
- `Fidan tanimlarini yonetir`

Muhasebe yetkileri:

- `Cari hesaplari yonetir`
- `Faturalari yonetir`
- `Odeme ve tahsilatlari yonetir`
- `Giderleri yonetir`

Rapor ve sistem yetkileri:

- `Raporlari gorur`
- `Kullanici ve rol yonetir`
- `Tum sisteme erisir`

### 10.2.6. Kaydet butonu

`Kaydet`, rolu secilen yetkilerle kaydeder.

Kayit basarili olursa:

- Rol listesine eklenir.
- Kullanici ekleme formunda secilebilir.
- Kullanici duzenleme formunda atanabilir.

### 10.2.7. Iptal butonu

Formu kapatir ve rol kaydetmez.

### 10.2.8. Rol listesi

Rol listesinde:

- Rol adi
- Aciklama
- Yetkiler
- Islemler

gorunur.

### 10.2.9. Kalem ikonu

Rol duzenleme formunu acar.

Bu formda:

- Aciklama degistirilebilir.
- Yetki seti degistirilebilir.
- Ozel rollerin adi duzenlenebilir.

Varsayilan sistem rollerinde rol adi korunur.

### 10.2.10. Cop kutusu ikonu

Ozel rolu siler.

Varsayilan roller:

- `ADMIN`
- `ACCOUNTANT`
- `WAREHOUSE_STAFF`
- `SALES`

silinemez.

### 10.2.11. Yeni rol kullaniciya nasil atanir?

1. Rol ve yetki panelinden yeni rolu olustur.
2. Sayfanin ustundeki `Yeni Kullanici Ekle` butonuna bas.
3. Kullanici bilgilerini gir.
4. `Roller` alaninda yeni rolu sec.
5. `Olustur` butonuna bas.

Mevcut kullaniciya rol atamak icin:

1. Kullanici tablosunda kalem ikonuna bas.
2. `Roller` alanindan yeni rolu sec.
3. `Kaydet` butonuna bas.
4. Kullanici oturumu yenilendiginde yeni yetkiler aktif olur.

### 10.2.12. Yetki hatasi olursa ne yapilir?

1. Kullanici hangi role sahip kontrol et.
2. Rolun hangi yetkilere sahip oldugunu kontrol et.
3. Gerekli yetki yoksa role ekle.
4. Kullanici oturumunu kapatip tekrar girsin.
5. Menu hala gorunmuyorsa kullanicinin dogru tenant altinda oldugunu kontrol et.

---

## 10.3. Profilim

Profilim ekrani, giris yapan kullanicinin hesap bilgilerini gormesi ve uygun
alanlari guncellemesi icindir.

Bu ekranda:

- Kullanici bilgileri goruntulenir.
- Hesap detaylari incelenir.
- Desteklenen alanlar guncellenebilir.

---

## 11. Gunluk Is Akisi Ornekleri

Bu bolum, sistemi gercek kullanim sirasi ile anlatir.

## 11.1. Bos sistemde ilk kurulum

1. `admin/admin` ile giris yap.
2. `Depo Yonetimi` ekranindan ana depoyu olustur.
3. `Musteri Yonetimi` ekranindan ilk musteriyi olustur.
4. `Tedarikci Yonetimi` ekranindan ilk tedarikciyi olustur.
5. `Gider Kategorileri` ekranindan temel gider kategorilerini olustur.
6. `Fidan Yonetimi` ekranindan satilacak fidan kartlarini olustur.
7. `Mal Girisi` ekranindan tedarikciden gelen ilk stok girisini yap.
8. `Stok Durumu` ekranindan stok miktarini kontrol et.

## 11.2. Tedarikciden fidan alip stoga ekleme

1. Tedarikci tanimli degilse `Tedarikci Yonetimi`nden ekle.
2. Fidan karti tanimli degilse `Fidan Yonetimi`nden ekle.
3. Depo tanimli degilse `Depo Yonetimi`nden ekle.
4. `Mal Girisi` ekranina git.
5. `Yeni Giris Yap` butonuna bas.
6. Irsaliye/fis numarasini gir.
7. Giris deposunu sec.
8. Giris kaynagini `Tedarikci` sec.
9. Tedarikciyi sec.
10. Fidan kalemini, miktari ve birim maliyeti gir.
11. `Mal Girisini Kaydet` butonuna bas.
12. `Stok Durumu` ekranindan stok artisini kontrol et.

## 11.3. Musteriye satis yapma

1. Musteri tanimli degilse `Musteri Yonetimi`nden ekle.
2. Satilacak fidan stokta yoksa once mal girisi yap.
3. `Siparis Yonetimi` ekranina git.
4. `Yeni Siparis` butonuna bas.
5. Musteriyi sec.
6. Cikis deposunu sec.
7. Tahmini teslim tarihini gir.
8. Fidan kalemlerini ekle.
9. Miktar ve satis fiyatini gir.
10. `Siparisi Olustur` butonuna bas.
11. Siparis hazir oldugunda durum ikonundan `Sevk Et` islemini yap.
12. Teslim edildiginde `Teslim Et` islemini yap.
13. Siparis satirindaki fatura ikonuyla fatura olustur.
14. `Faturalar` ekranindan faturayi kontrol et.
15. Musteri odeme yaptiginda musteri ekstresinden `Tahsilat Ekle`.

## 11.4. Uretim partisi olusturup maliyet takip etme

1. `Uretim Partileri` ekranina git.
2. `Yeni Parti Olustur` butonuna bas.
3. Parti kodu ve parti adini gir.
4. Fidan turu ve cesidini sec.
5. Baslangic adedi ve tarihini gir.
6. `Parti Olustur` butonuna bas.
7. Liste satirindaki kalem ikonuyla parti detayina git.
8. `Gider Ekle` butonuyla uretim giderlerini ekle.
9. Uretim depoya alinacaginda `Mal Girisi` ekranina git.
10. Kaynak olarak `Uretim Partisi` sec.
11. Ilgili partiyi sec.
12. Fidan, miktar ve uretim maliyetini gir.
13. `Mal Girisini Kaydet` butonuyla stoga al.

## 11.5. Tedarikciye odeme yapma

1. `Cari Hesaplar (Tedarikci)` ekranina git.
2. Ilgili tedarikci satirinda `Ekstreyi Goruntule` butonuna bas.
3. `Tediye Ekle` butonuna bas.
4. Tutar, tarih, odeme yontemi ve aciklama gir.
5. `Tediyeyi Kaydet` butonuna bas.
6. `Kasa & Banka Hareketleri` ekraninda hareketi kontrol et.

## 11.6. Musteriden tahsilat alma

1. `Cari Hesaplar (Musteri)` ekranina git.
2. Ilgili musteri satirinda `Ekstreyi Goruntule` butonuna bas.
3. `Tahsilat Ekle` butonuna bas.
4. Tutar, tarih, odeme yontemi ve aciklama gir.
5. `Tahsilati Kaydet` butonuna bas.
6. Musteri bakiyesini kontrol et.
7. `Kasa & Banka Hareketleri` ekraninda hareketi kontrol et.

## 11.7. Gider girisi yapma

1. Gider kategorisi yoksa `Gider Kategorileri` ekranindan olustur.
2. `Gider Yonetimi` ekranina git.
3. `Yeni Gider Ekle` butonuna bas.
4. Kategori sec.
5. Aciklama, tutar ve gider tarihini gir.
6. `Gideri Kaydet` butonuna bas.
7. Raporlarda gider etkisini kontrol et.

---

## 12. Veri Bagimlilik Haritasi

Bu bolum hangi kaydin hangi ekrandan once olmasi gerektigini ozetler.

### 12.1. Siparis icin gerekli kayitlar

Siparis olusturmak icin:

- Musteri olmalidir.
- Depo olmalidir.
- Fidan karti olmalidir.
- Stok olmasi operasyonel olarak gereklidir.

### 12.2. Mal girisi icin gerekli kayitlar

Mal girisi icin:

- Depo olmalidir.
- Fidan karti olmalidir.
- Kaynak tedarikci ise tedarikci olmalidir.
- Kaynak uretim partisi ise uretim partisi olmalidir.

### 12.3. Uretim partisi icin gerekli kayitlar

Uretim partisi icin:

- Fidan turu olmalidir.
- Fidan cesidi olmalidir.
- Gider eklenecekse gider kategorisi olmalidir.

### 12.4. Fatura icin gerekli kayitlar

Fatura icin:

- Siparis olmalidir.
- Siparis sevk edilmis veya teslim edilmis olmalidir.
- Siparis daha once faturalandirilmis olmamalidir.

### 12.5. Tahsilat icin gerekli kayitlar

Tahsilat icin:

- Musteri olmalidir.
- Musteri ekstresi acilabilmelidir.
- Tahsilat tutari, tarih ve odeme yontemi girilmelidir.

### 12.6. Tediye icin gerekli kayitlar

Tediye icin:

- Tedarikci olmalidir.
- Tedarikci ekstresi acilabilmelidir.
- Tutar, tarih ve odeme yontemi girilmelidir.

---

## 13. Mobil Ana Ekrana Ekleme (PWA)

Bu bolum, kullanicinin FidanYS'yi telefonunda normal bir mobil uygulama gibi
acabilmesi icindir. Bu ozelligin teknik adi `PWA`dir: Progressive Web App.

### 13.1. Kullanici ne gorur?

Kullanici telefon tarayicisindan `https://ata.fidanys.com.tr` adresine girdiginde
ekranin alt tarafinda bir kurulum onerisi cikar.

Popup'ta genel olarak su bilgiler bulunur:

- `FidanYS'yi ana ekrana ekle` basligi.
- Uygulamayi telefon ana ekranindan hizli acabilecegini anlatan kisa metin.
- Android destekli tarayicilarda `Ana ekrana ekle` butonu.
- iPhone/iPad tarafinda `iPhone'a ekleme adimlari` butonu.
- Sag ustte popup'i kapatmak icin `X` butonu.

### 13.2. Android telefonda adim adim kurulum

1. Kullanici Chrome veya destekleyen Android tarayicisindan
   `https://ata.fidanys.com.tr` adresine girer.
2. Login ekrani acilir.
3. Alt tarafta FidanYS kurulum popup'i gorunur.
4. Kullanici `Ana ekrana ekle` butonuna basar.
5. Tarayicinin native kurulum penceresi acilir.
6. Kullanici tarayicinin gosterdigi `Yukle`, `Ekle` veya benzer onay butonuna
   basar.
7. Telefonun ana ekraninda FidanYS ikonu olusur.
8. Kullanici bundan sonra tarayiciya adres yazmadan bu ikondan uygulamayi acar.

Android tarafinda bu akis tek tusa en yakin akistir. Gercek kurulum onayi
tarayici tarafindan verilir; uygulama bu pencereyi sadece baslatabilir.

### 13.3. iPhone veya iPad'de adim adim kurulum

Apple, web sitelerine Android'deki gibi tek tuslu native kurulum penceresi acma
izni vermez. Bu nedenle iPhone tarafinda kullanici manuel Safari adimini takip
eder.

1. Kullanici Safari ile `https://ata.fidanys.com.tr` adresine girer.
2. Login ekrani acilir.
3. Alt tarafta FidanYS kurulum popup'i gorunur.
4. Kullanici `iPhone'a ekleme adimlari` butonuna basar.
5. Popup icinde su adimlar acilir:
   - Safari'de alttaki `Paylas` ikonuna dokun.
   - `Ana Ekrana Ekle` secenegini ac.
   - `Ekle` butonuna basarak FidanYS ikonunu ana ekrana yerlestir.
6. Kullanici ana ekrana dondugunde FidanYS ikonunu gorur.
7. Uygulamayi bundan sonra bu ikondan acar.

Onemli not: iPhone'da bu islemin calismasi icin kullanicinin Safari kullanmasi
onerilir. Chrome iOS gibi tarayicilar Apple altyapisini kullansa da ana ekrana
ekleme akisi Safari kadar net olmayabilir.

### 13.4. Popup ne zaman tekrar cikar?

- Uygulama zaten ana ekrandan acilmissa popup cikarilmaz.
- Kullanici popup'i `X` ile kapatirsa ayni cihazda 7 gun boyunca tekrar
  gosterilmez.
- 7 gun sonra kullanici hala uygulamayi ana ekrana eklememis durumdaysa popup
  yeniden gorunebilir.

### 13.5. Ana ekrana eklenen uygulama nasil davranir?

Ana ekrandan acildiginda:

- Tarayici adres cubugu gizlenir veya minimuma iner.
- Uygulama daha cok native mobil uygulama hissi verir.
- Baslangic adresi login ekranidir: `/auth/sign-in?source=pwa`.
- Login sonrasi kullanici yine normal dashboard akisina girer.

### 13.6. Destek veya sorun giderme

Kullanici kurulum popup'ini goremiyorsa:

1. Site HTTPS ile aciliyor mu kontrol et.
2. Kullanici uygulamayi zaten ana ekrana eklemis olabilir; ana ekranda FidanYS
   ikonunu kontrol et.
3. Android'de Chrome kullanmasini iste.
4. iPhone'da Safari kullanmasini iste.
5. Tarayici gizli sekmedeyse normal sekmede tekrar dene.
6. Popup daha once kapatildiysa 7 gun beklemeden test etmek icin tarayici site
   verilerini temizle.

Teknik kontrolde bakilacak adresler:

- `/manifest.webmanifest`
- `/sw.js`
- `/icons/icon-192.png`
- `/icons/icon-512.png`

Bu adresler 200 donmuyorsa PWA kurulum sinyali eksik olabilir.

---

## 14. Kritik Kullanici Notlari

### 14.1. Stok dogrudan elle degistirilmez

Stok ekrani takip ekranidir. Stok miktarini elle degistirmek yerine operasyonel
hareket yapilir:

- Giris icin `Mal Girisi`
- Cikis icin `Siparis Sevk`
- Iptal icin ilgili hareketin iptali

Bu yapi stok gecmisini daha guvenilir tutar.

### 14.2. Fatura siparisten dogar

Fatura olusturmak icin once siparis olmalidir. Siparis sevk veya teslim
edilmeden fatura olusturma butonu aktif olmaz.

### 14.3. Cari hareketler odeme/tahsilatla olusur

Musteri cari hesabinda tahsilat, tedarikci cari hesabinda tediye girilir.

Bu hareketler kasa/banka ekranina da yansir.

### 14.4. Uretim maliyeti parti uzerinden takip edilir

Uretim partisinde giderler toplanir. Uretimden depoya alim yapildiginda mal
girisi ile stok tarafina aktarim saglanir.

### 14.5. Enflasyon raporlari icin veri gerekir

Enflasyon analizlerinin dogru calismasi icin `Enflasyon Verileri` ekranindan
ilgili tarih araligi verileri cekilmelidir.

### 14.6. Yetki hatasi normalde rol kaynaklidir

Bir kullanici bir sayfaya giremiyorsa veya buton goremezse:

- Kullanici rolunu kontrol et.
- `Kullanici Yonetimi` ekranindan gerekli rol verilmis mi bak.
- Oturumu kapatip tekrar gir.

---

## 15. Ekranlara Gore Kisa Referans

| Ekran | Ana Amac | Ana Buton |
| --- | --- | --- |
| Anasayfa | Ozet ve rol bazli dashboard | Yok |
| Fidan Yonetimi | Urun/fidan kartlari | Yeni Fidan Ekle |
| Depo Yonetimi | Depo tanimlari | Yeni Depo Ekle |
| Musteri Yonetimi | Musteri tanimlari | Yeni Musteri Ekle |
| Tedarikci Yonetimi | Tedarikci tanimlari | Yeni Tedarikci Ekle |
| Gider Kategorileri | Gider siniflari | Yeni Kategori Ekle |
| Enflasyon Verileri | TCMB veri cekme | Verileri Cek |
| Siparis Yonetimi | Satis siparisi | Yeni Siparis |
| Mal Girisi | Depoya stok girisi | Yeni Giris Yap |
| Uretim Partileri | Uretim parti takibi | Yeni Parti Olustur |
| Stok Durumu | Depo bazli stok izleme | Yok |
| Cari Hesaplar (Musteri) | Musteri ekstresi | Ekstreyi Goruntule |
| Cari Hesaplar (Tedarikci) | Tedarikci ekstresi | Ekstreyi Goruntule |
| Faturalar | Fatura takibi | Siparis satirindan olusur |
| Kasa & Banka Hareketleri | Odeme/tahsilat hareketleri | Yok |
| Gider Yonetimi | Genel gider kaydi | Yeni Gider Ekle |
| Enflasyon Genel Bakis | Enflasyon ozeti | Yok |
| Maliyet Analizi | Maliyet/enflasyon karsilastirma | Yenile |
| Fiyat Performansi | Fidan satis fiyati analizi | Fidan secimi |
| Kar/Zarar Analizi | Reel/nominal kar analizi | Raporu Getir |
| Kullanici Yonetimi | Kullanici ve rol yonetimi | Yeni Kullanici Ekle |
| Mobil Ana Ekrana Ekleme | PWA kurulum yonlendirmesi | Ana ekrana ekle / iPhone'a ekleme adimlari |
| Profilim | Hesap bilgileri | Desteklenen profil aksiyonlari |

---

## 16. Ilk Egitim Senaryosu

Yeni bir kullaniciya sistemi ogretirken su sirayla uygulamali anlatim yapilmasi
onerilir.

### 16.1. Oturum acma

- Kullanici `https://ata.fidanys.com.tr` adresine girer.
- Telefon kullaniyorsa PWA popup'i ile uygulamayi ana ekrana ekleyebilir.
- `admin/admin` ile oturum acar.
- Aktif oturum uyarisi gelirse `Evet, Devam Et` secenegini gorur.

### 16.2. Temel veri girisi

- Bir depo olusturulur.
- Bir musteri olusturulur.
- Bir tedarikci olusturulur.
- Bir gider kategorisi olusturulur.
- Bir fidan karti olusturulur.

### 16.3. Stok girisi

- Mal girisi ekraninda tedarikciden 100 adet fidan girilir.
- Stok durumunda miktarin 100 oldugu kontrol edilir.

### 16.4. Satis

- Siparis ekraninda musteriye 10 adet satis siparisi olusturulur.
- Siparis sevk edilir.
- Stok durumunda miktarin azaldigi kontrol edilir.
- Siparis teslim edilir.
- Fatura olusturulur.

### 16.5. Tahsilat ve rapor

- Musteri ekstresinden tahsilat girilir.
- Kasa/banka hareketinde tahsilat gorulur.
- Anasayfa ve rapor ekranlarinda etkiler kontrol edilir.

Bu egitim tamamlandiginda kullanici sistemin ana operasyon dongusunu anlamis
olur.

---

## 17. Kullanicinin Aklinda Kalmasi Gereken Ana Mantik

FidanYS'de her sey birbiriyle baglidir:

- Tanimlar operasyonun temelidir.
- Mal girisi stok olusturur.
- Siparis stok cikisini baslatir.
- Fatura siparisten dogar.
- Tahsilat ve tediye cari hesaplari kapatir.
- Giderler ve enflasyon verileri raporlari besler.
- Uretim partileri maliyeti ve uretim surecini izler.

Bu nedenle sistemde en saglikli kullanim, kayitlari gercek is akisi sirasi ile
girmektir. Once tanim, sonra stok, sonra siparis, sonra fatura ve cari hareket
seklinde ilerlemek hem raporlari hem de stok/muhasebe tutarliligini korur.
