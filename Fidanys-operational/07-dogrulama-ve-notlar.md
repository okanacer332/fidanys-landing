# Dogrulama ve Notlar

## 2026-05-16 PWA Ana Ekrana Ekleme Dogrulamasi

Bu bolum, FidanYS'nin mobil cihazlarda ana ekrana eklenebilmesi icin yapilan
PWA entegrasyonunu dogrular.

Eklenen dosyalar:

- `client/public/manifest.webmanifest`
- `client/public/sw.js`
- `client/public/icons/icon-192.png`
- `client/public/icons/icon-512.png`
- `client/src/components/core/pwa-install-prompt.tsx`

Guncellenen dosya:

- `client/src/app/layout.tsx`

Teknik dogrulama:

```powershell
npm run typecheck
```

Sonuc: basarili.

```powershell
$env:NODE_OPTIONS='--max-old-space-size=4096'; npx next build
```

Sonuc: basarili. Not: `npm run build` Windows PowerShell'de dogrudan
calismadi, cunku package script'i Linux tarzinda `NODE_OPTIONS=... next build`
yaziyor. PowerShell uyumlu sekilde env set edilerek ayni production build
dogrulandi.

HTTP dogrulama:

- `http://localhost:3100/auth/sign-in` 200 dondu.
- `http://localhost:3100/manifest.webmanifest` 200 dondu.
- `http://localhost:3100/sw.js` 200 dondu.
- `http://localhost:3100/icons/icon-192.png` 200 dondu.
- `http://localhost:3100/icons/icon-512.png` 200 dondu.
- Login HTML'i icinde `rel="manifest"`, `apple-touch-icon` ve `theme-color`
  metadata baglantilari goruldu.

Canli deploy ve domain dogrulamasi:

```text
Vercel production deployment:
https://fidanys-7uw8xvfgw-okans-projects-4268d940.vercel.app

Alias:
https://ata.fidanys.com.tr
```

Canli smoke sonucu:

- `https://ata.fidanys.com.tr/manifest.webmanifest` 200 dondu.
- Manifest: `name=FidanYS Fidanlik Yonetim Sistemi`, `display=standalone`,
  `start=/auth/sign-in?source=pwa`, `icons=2`.
- `https://ata.fidanys.com.tr/sw.js` 200 dondu.
- `https://ata.fidanys.com.tr/icons/icon-192.png` 200 dondu.
- `https://ata.fidanys.com.tr/icons/icon-512.png` 200 dondu.
- `https://ata.fidanys.com.tr/auth/sign-in` HTML'i icinde `rel="manifest"`,
  `apple-touch-icon` ve `theme-color` metadata baglantilari goruldu.

Davranis notu:

- Android/Chrome tarafinda `beforeinstallprompt` event'i gelirse popup'taki
  `Ana ekrana ekle` butonu native kurulum penceresini acar.
- iPhone/iPad tarafinda Apple tek tuslu PWA install API'si sunmadigi icin
  popup, kullaniciya Safari uzerinden `Paylas > Ana Ekrana Ekle` adimlarini
  gosterir.
- Service worker API veya dashboard HTML cache'lemez. Bu tercih, stok,
  muhasebe ve rapor ekranlarinda bayat veri riskini azaltmak icin yapildi.

## Yapilan Degisiklikler

Docker:

- `docker-compose.yml` eklendi.
- MongoDB tek node replica set olarak calisacak sekilde ayarlandi.
- Backend Dockerfile eklendi.
- Frontend Dockerfile eklendi.
- `.dockerignore` dosyalari eklendi.

Backend:

- `application.properties` env override destekleyecek hale getirildi.
- Mongo URI, JWT secret, token expiration, security log level, profile, TCMB API key, Cloud Run `PORT` ve server port disaridan verilebilir oldu.
- Dashboard toplam stok degeri hardcoded demo tutardan cikarildi; stok hareketleri uzerinden hesaplanacak sekilde degistirildi.

Frontend:

- `next.config.mjs` rewrite hedefi `BACKEND_INTERNAL_URL` ile ayarlanabilir oldu.
- Docker build/runtime icin `/api` proxy sozlesmesi netlestirildi.
- Eski `8080` ve `/api/v1` varsayimlari `src/api/*` ve `use-api.ts` tarafinda `/api` sozlesmesine cekildi.
- Vercel deployment icin `client/vercel.json` eklendi ve Next.js surumu Vercel guvenlik kontrolunu gececek sekilde guncellendi.

Dokumantasyon:

- `.md` klasoru altinda proje devralma dokumantasyonu olusturuldu.

## Dogrulama Sonuclari

Backend Maven build:

```text
.\mvnw.cmd -q -DskipTests package
Sonuc: basarili
```

Frontend typecheck:

```text
npm run typecheck
Sonuc: basarili
```

Frontend production build:

```text
npx next build
Sonuc: basarili
32 route static/dynamic olarak uretildi.
```

Docker build:

```text
docker compose build
Sonuc: backend ve frontend image build basarili
```

Docker runtime:

```text
docker compose up -d
Sonuc: mongo, backend, frontend ayakta
```

Servis durumu:

```text
fidanys-mongo: healthy
fidanys-backend: up
fidanys-frontend: up
```

HTTP smoke test:

```text
GET http://localhost:3000/auth/sign-in -> 200
POST http://localhost:8081/api/auth/login/force -> 200
GET http://localhost:8081/api/users/me -> 200, username admin
GET http://localhost:3000/api/users/me -> 200, username admin
docker exec fidanys-mongo mongosh --quiet --eval "rs.status().ok" -> 1
```

Canli deploy:

```text
Cloud Run service: fidanys-api
Cloud Run region: europe-west1
Cloud Run URL: https://fidanys-api-5jzmdzz6lq-ew.a.run.app
Vercel project: fidanys
Vercel production URL: https://fidanys.vercel.app
Vercel deployment status: Ready
Custom domain: ata.fidanys.com.tr Vercel'e eklendi, DNS dogrulamasi Natro A kaydi bekliyor.
```

Canli HTTP kontrol:

```text
GET https://fidanys.vercel.app/auth/sign-in -> 200
POST https://fidanys-api-5jzmdzz6lq-ew.a.run.app/api/auth/login/force -> MongoDB Atlas ag erisimi nedeniyle 500
```

Atlas log kok nedeni:

```text
MongoSocketWriteException
javax.net.ssl.SSLException: Received fatal alert: internal_error
Timed out while waiting for a server that matches ReadPreferenceServerSelector
```

Bu servis kodunun baslamadigi anlamina gelmez; Cloud Run container basliyor, Tomcat `8080` uzerinden ayaga kalkiyor, ancak uygulama Atlas replica set'e baglanamadigi icin seed/giris islemlerinde dusuyor. Ucretsiz mimaride tamamlanmasi gereken panel aksiyonu Atlas Network Access icinde `0.0.0.0/0` kaydidir.

## 2026-05-15 Guncel Duzeltme Dogrulamalari

Bu bolum, TCMB, kar/zarar, musteri ekstresi ve dinamik RBAC guncellemesinden
sonra yapilan dogrulamalari kaydeder.

Kod duzeyi:

```powershell
cd fidanys-server
.\mvnw.cmd -q -DskipTests compile

cd ..\client
$env:NODE_OPTIONS='--max-old-space-size=4096'
npx next build
```

Sonuc: backend compile ve frontend production build basarili.

Canli deploy:

```text
Cloud Run service: fidanys-api
Revision: fidanys-api-00002-j2d
URL: https://fidanys-api-66765735737.europe-west1.run.app
Vercel alias: https://ata.fidanys.com.tr
Production deployment: https://fidanys-bha7i7m79-okans-projects-4268d940.vercel.app
```

Canli smoke test:

```text
POST /api/auth/login/force -> 200
GET  /api/roles -> 200, 4 varsayilan rol
GET  /api/roles/permissions -> 200, 12 permission
POST /api/inflation/fetch?startDate=01-01-2024&endDate=31-03-2024 -> 200
GET  /api/inflation -> 200, 3 kayit
GET  /dashboard/muhasebe/cari-hesaplar-musteri/:customerId -> 200
GET  /api/accounting/reports/profit-loss/real -> 200
```

TCMB kayit ornegi:

```text
latest=2024-03-01
value=3.40346189
seriesName=TP.FG.J01
```

Cozulen sorunlar:

1. Eski EVDS endpointi HTML dondugu icin TCMB verisi DB'ye yazilamiyordu.
   Yeni EVDS3 endpointi kullanildi.
2. Enflasyon verisi ayin ilk gunu saklandigi halde hesap servisi ayin son
   gununu ariyordu. Eslesme ayin ilk gunune alindi.
3. Reel deger hesabi islem ayini da carparak fazla sisme riski tasiyordu.
   Hesap islem ayindan sonraki ay ile hedef ay araligina cekildi.
4. Siparis sevkinde `unitCost` alanina satis fiyati yaziliyordu. Artik
   agirlikli ortalama stok maliyeti yazilir.
5. Musteri ekstre route'u yanlis path uretiyordu. `currentAccountDetails`
   helper'i kullanildi.
6. Rol CRUD, permission listesi ve frontend tree secimli rol yonetim paneli
   eklendi.

## Karsilasilan Sorun ve Cozum

Ilk Docker denemesinde login su hata ile 500 dondu:

```text
Transaction numbers are only allowed on a replica set member or mongos
```

Kok neden:

- Backend `MongoTransactionManager` kullaniyor.
- MongoDB standalone baslamisti.

Cozum:

- Mongo servisi `--replSet rs0` ile baslatildi.
- Healthcheck `rs.initiate` calistiracak hale getirildi.
- Backend URI `?replicaSet=rs0` ile guncellendi.

## Bilinen Teknik Borclar

1. Frontend API katmani iki farkli donemden kod barindiriyor.

   Yeni kodlar `src/lib/apiClient.ts` ve `src/services/*` kullaniyor. Eski kodlar `src/api/*` ve dogrudan `fetch` kullaniyor. Yeni gelistirmelerde tek standart `apiClient + /api` olmali.

2. Kod yorumlarinda ve eski markdown dosyalarinda encoding bozulmalari goruluyor.

   PowerShell ciktilarinda `Ä`, `Å` gibi karakterler gorundu. Yeni `.md` dosyalari okunabilir Turkce ile yazildi, ancak mevcut kaynak yorumlarinda mojibake temizligi ayri bir refactor olarak ele alinmali.

3. Production dokumanlari eski PM2/systemd modelini anlatiyor.

   Bu calismada Docker tabanli lokal calisma kuruldu. Production da Docker'a alinacaksa `DEPLOYMENT.md`, `SERVER_PORTS.md` ve `nginx-fidanys.conf` yeni hedef mimariye gore ayrica guncellenmeli.

4. npm audit uyarilari var.

   `npm ci` sonrasinda 15 vulnerability raporlandi. Otomatik `npm audit fix --force` uygulanmadi cunku major/breaking dependency degisiklikleri yapabilir.

5. Browser plugin ile gorsel dogrulama denenirken iki kez zaman asimi oldu.

   HTTP smoke testleri basarili oldugu icin runtime dogrulamasi tamamlandi, ancak in-app browser screenshot alinmadi.

6. Canli backend Atlas ag erisimi bekliyor.

   Cloud Run servis deploy edildi, fakat MongoDB Atlas Network Access Cloud Run cikislarini kabul edene kadar backend tam saglikli login vermez.

## Bakim Tavsiyeleri

- Yeni API cagrisinda `NEXT_PUBLIC_API_BASE_URL` yerine mumkunse `apiClient` ve relative endpoint kullan.
- Mongo'yu transaction gerektiren her ortamda replica set olarak calistir.
- Production secretlari repository icinde tutma; `JWT_SECRET_KEY` ve `TCMB_API_KEY` env/secrets ile verilmeli.
- Default seed sifreleri production ortamda degistirilmeli. Seed is verisi uretmez; yalnizca tenant, rol, izin ve giris kullanicilari uretir.
- Tek oturum politikasi UI tarafinda acik anlatilmali; `409` normal bir is kuralidir.
