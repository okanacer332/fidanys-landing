# Mimari Genel Bakis

## Repo Yapisi

```text
FidanlikYonetimSistemi/
  client/                 Next.js frontend
  fidanys-server/         Spring Boot backend
  docker-compose.yml      Mongo + backend + frontend calisma orkestrasyonu
  DEPLOYMENT.md           Eski production deploy notlari
  SERVER_PORTS.md         Eski sunucu port haritasi
  nginx-fidanys.conf      Nginx reverse proxy ornegi
```

## Uygulama Yigini

Frontend:

- Next.js `15.3.3`
- React `19.1.0`
- TypeScript `5.8.3`
- Material UI `7.x`
- SWR, React Hook Form, Zod
- `output: standalone` ile container/production uyumlu build
- PWA manifest, service worker ve mobil ana ekrana ekleme popup'i

Backend:

- Java 17
- Spring Boot `3.5.0`
- Spring Web, Spring Security, Spring Data MongoDB
- Spring GraphQL dependency mevcut, GraphQL path `/graphql`; aktif is yuku REST uzerinden ilerliyor.
- JWT icin `jjwt 0.12.5`
- PDF/CSV export icin iText ve Apache Commons CSV

Veritabani:

- MongoDB
- Collection bazli multi-tenant veri ayrimi
- Transaction kullanan servisler nedeniyle replica set gerekir.

## Ana Calisma Akisi

1. Kullanici frontend'de `/auth/sign-in` sayfasina gelir.
2. Frontend hostname'den tenant adini turetir. Localhost icin varsayilan tenant `ata.fidanys.com.tr`.
3. Login istegi `/api/auth/login` endpoint'ine gider.
4. Next rewrite `/api/:path*` isteklerini backend'e proxy eder.
5. Backend tenant'i bulur, kullaniciyi tenant icinde dogrular, JWT uretir ve `user_tokens` collection'ina yazar.
6. Frontend token'i `localStorage.authToken` altinda saklar.
7. Sonraki API isteklerinde `Authorization: Bearer <token>` header'i kullanilir.
8. Backend JWT icindeki `tenantId` ile kullaniciyi ve rollerini cozer.

Mobil PWA akisi:

1. Kullanici siteyi HTTPS uzerinden acar.
2. Browser `manifest.webmanifest`, `theme-color`, ikonlar ve `sw.js` sinyalini
   gorur.
3. Frontend `PwaInstallPrompt` bileseni kurulum uygunlugunu kontrol eder.
4. Android/Chrome tarafinda native `beforeinstallprompt` yakalanir ve
   `Ana ekrana ekle` butonu ile kurulum baslatilir.
5. iPhone/iPad tarafinda Apple tek tuslu kurulum API'si vermedigi icin Safari
   `Paylas > Ana Ekrana Ekle` adimlari gosterilir.
6. Ana ekrandan acilan uygulama `/auth/sign-in?source=pwa` adresinden
   standalone deneyimle baslar.

## Multi-Tenant Tasarim

Tenant bilgisi backend'de `Tenant` collection'i ile tutulur. Cogu domain entity'sinde `tenantId` alani vardir. Bu alan:

- Veri izolasyonu icin filtrelerde kullanilir.
- Controllerlarda `@AuthenticationPrincipal User currentUser` ile gelen kullanicidan alinir.
- Seed sirasinda her tenant icin roller, izinler ve varsayilan kullanicilar olusturulur.

Guncel dinamik RBAC:

- Roller tenant bazinda olusturulur.
- Her rol bir permission seti tasir.
- Kullaniciya rol atama `roleIds` ile yapilir.
- Backend principal hem `ROLE_*` hem de `PERM_*` authority uretir.
- Frontend side nav hem rol hem permission okur.
- Admin, `Kullanici Yonetimi` sayfasinin altindaki rol panelinden yeni rol
  olusturup tree yapisindan yetki secebilir.

Seed edilen tenant'lar:

- `ata.fidanys.com.tr`
- `saygi.fidanys.com.tr`
- `test.fidanys.com.tr`

## Guvenlik Mimarisi

`SecurityConfiguration`:

- CSRF kapali.
- CORS belirli localhost ve `fidanys.com.tr` originleri icin acik.
- Public endpointler: `/api/auth/login`, `/api/auth/login/force`, `/graphql`.
- Diger tum endpointler authenticated.
- Stateless session policy.
- `JwtAuthenticationFilter`, `UsernamePasswordAuthenticationFilter` oncesinde calisir.

Tek oturum politikasi:

- Login basarili olunca token `user_tokens` collection'ina yazilir.
- Ayni kullanici icin aktif token varsa normal login `409 Conflict` dondurur.

## Raporlama ve Maliyet Mimarisi

Guncel raporlama akisinda:

- TCMB verisi EVDS3 servisi uzerinden gelir.
- Enflasyon kayitlari `inflation_data` collection'inda ayin ilk gunu ile saklanir.
- Kar/Zarar Analizi nominal tutarlari secilen baz tarihe gore reel degere tasir.
- Satis maliyeti satis fiyatindan degil, sevk aninda stok hareketine yazilan
  gercek `unitCost` degerinden hesaplanir.
- `Bugunku Deger Farki`, reel net kar ile nominal net kar arasindaki farktir.
- `/api/auth/login/force` eski token'i silip yeni token uretir.

## Docker Sonrasi Yerel Mimari

Docker Compose uc servis calistirir:

- `mongo`: MongoDB 7, tek node `rs0` replica set.
- `backend`: Spring Boot jar, `mongo:27017/acrTech?replicaSet=rs0` ile baglanir.
- `frontend`: Next.js standalone server, `/api` isteklerini `http://backend:8081/api` adresine proxy eder.

Bu yaklasim frontend ve backend'i ayri terminallerde calistirma ihtiyacini kaldirir.
