# Fidanlik Yonetim Sistemi Dokumantasyon Indeksi

Bu klasor, proje incelemesi sonrasinda olusturulan teknik devralma ve kullanici deneyimi dokumantasyonudur. Amac; kodu yeni alan bir yazilimci veya mimarin projeyi hizla ayaga kaldirmasi, hangi modulu nerede arayacagini bilmesi, Docker tabanli calisma seklini tekrarlanabilir bicimde kullanmasi ve son kullanicinin sistemi ekrandan ekrana ogrenebilmesidir.

## Dokumanlar

- [01-mimari-genel-bakis.md](01-mimari-genel-bakis.md): Repo yapisi, teknoloji yigini, calisma mantigi, multi-tenant akisi.
- [02-backend-modulleri.md](02-backend-modulleri.md): Spring Boot paketleri, servisler, controllerlar ve is kurallari.
- [03-frontend-modulleri.md](03-frontend-modulleri.md): Next.js App Router yapisi, sayfalar, layout, servis ve hook katmani.
- [04-api-sozlesmesi.md](04-api-sozlesmesi.md): REST endpoint haritasi, auth davranisi, proxy sozlesmesi.
- [05-veri-modeli.md](05-veri-modeli.md): MongoDB collection/entity alanlari ve iliskiler.
- [06-docker-ve-calistirma.md](06-docker-ve-calistirma.md): Docker Compose mimarisi, komutlar, portlar, env ayarlari.
- [07-dogrulama-ve-notlar.md](07-dogrulama-ve-notlar.md): Yapilan dogrulamalar, test sonuclari, bilinen riskler ve teknik borclar.
- [08-kullanici-operasyon-kilavuzu.md](08-kullanici-operasyon-kilavuzu.md): Ilk giristen baslayarak ekran ekran, buton buton son kullanici operasyon kilavuzu.
- [09-dokuman-page-yayin-plani.md](09-dokuman-page-yayin-plani.md): Bu `.md` iceriklerinin sayfa sayfa urun dokumani olarak nasil yayinlanacagi ve her sayfada hangi bolumlerin bulunacagi.

## Kisa Ozet

Proje iki ana uygulamadan olusur:

- `client`: Next.js 15, React 19, TypeScript, MUI tabanli web paneli.
- `fidanys-server`: Java 17, Spring Boot 3.5, Spring Security, Spring Data MongoDB tabanli REST API.

Veritabani MongoDB'dir. Backend `MongoTransactionManager` kullandigi icin MongoDB'nin transaction destekli calismasi gerekir; Docker kurulumunda bu nedenle tek node `rs0` replica set kullanilir.

Docker ile standart lokal calisma:

```bash
docker compose up -d --build
```

Ana adresler:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8081`
- MongoDB: `localhost:27017`

Varsayilan seed kullanicilari her tenant icin uretilir:

- `admin` / `admin`
- `muhasebe` / `muhasebe`
- `depo` / `depo`
- `satis` / `satis`

Bu seed yalnizca giris yapilabilmesi icin tenant, rol, izin ve kullanici tabanini olusturur. Stok, siparis, musteri, tedarikci, fatura, uretim partisi veya finansal hareket gibi is verisi seed edilmez. Dashboard'daki toplam stok degeri gercek stok hareketlerinden hesaplanir; temiz veritabaninda `0` donmelidir.

Son guncel mimari notlar:

- TCMB enflasyon verisi EVDS3 servisi uzerinden cekilir: `https://evds3.tcmb.gov.tr/igmevdsms-dis`.
- Kar/Zarar Analizi nominal tutarlari secilen baz tarihe gore reel degere tasir; satis maliyeti stok hareketlerinde saklanan gercek birim maliyet uzerinden okunur.
- Kullanici Yonetimi altinda dinamik rol ve yetki yonetimi vardir. Admin yeni rol olusturabilir, tree yapisindan yetki secip kullaniciya atayabilir.
- Musteri cari ekstre route'u `/dashboard/muhasebe/cari-hesaplar-musteri/:customerId` olarak calisir.
- Frontend PWA olarak calisir. Android/Chrome kullanicisinda `Ana ekrana ekle` kurulumu tek tusla baslatilir; iPhone kullanicisinda Apple kisiti nedeniyle Safari `Paylas > Ana Ekrana Ekle` adimlari popup icinde gosterilir.

Tenant ornekleri:

- `ata.fidanys.com.tr`
- `saygi.fidanys.com.tr`
- `test.fidanys.com.tr`

Canli hedef:

- Frontend: Vercel
- Backend: Cloud Run
- Veritabani: MongoDB Atlas
- Kullanici adresi: `https://ata.fidanys.com.tr`
