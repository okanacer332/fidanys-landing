# Frontend Modulleri

Frontend kok: `client`

## Temel Yapi

- App Router kullanilir: `src/app`.
- Dashboard route'lari authenticated layout altindadir.
- Tema ve global stiller `src/styles`.
- Ortak UI bilesenleri `src/components/common` ve `src/components/core`.
- Dashboard bilesenleri `src/components/dashboard`.
- Backend ile konusma `src/lib/apiClient.ts`, `src/services/*`, `src/api/*`, `src/hooks/*` uzerinden dagilmis durumdadir.

## PWA ve Ana Ekrana Ekleme

Uygulama Progressive Web App olarak kurulum sinyalleri verir. Amac, kullanicinin
`https://ata.fidanys.com.tr` adresine girdikten sonra uygulamayi telefon ana
ekranina ekleyebilmesidir.

Dosyalar:

- `public/manifest.webmanifest`: Uygulama adi, kisa ad, start URL, standalone
  display modu, tema rengi, ikonlar ve kisayollar.
- `public/sw.js`: Service worker. API ve sayfa HTML'i cache'lemez; yalnizca
  manifest, ikonlar, asset'ler ve Next statik dosyalari icin cache kullanir.
- `public/icons/icon-192.png`: PWA 192x192 ikon.
- `public/icons/icon-512.png`: PWA 512x512 ikon.
- `src/components/core/pwa-install-prompt.tsx`: Kullaniciya kurulum popup'i
  gosteren client bileseni.
- `src/app/layout.tsx`: Metadata, manifest linki, apple touch icon, theme color
  ve `PwaInstallPrompt` entegrasyonu.

Kurulum davranisi:

- Android/Chrome veya destekleyen tarayicilarda `beforeinstallprompt` yakalanir.
  Popup'taki `Ana ekrana ekle` butonu tarayicinin native kurulum penceresini
  acar.
- iPhone/iPad tarafinda Apple tek tuslu web install API'si vermedigi icin
  uygulama native kurulum penceresi acamaz. Bu nedenle popup, kullaniciya
  `Safari > Paylas > Ana Ekrana Ekle` adimlarini gosterir.
- Uygulama zaten standalone modda acilmissa popup gosterilmez.
- Kullanici popup'i kapatirsa ayni cihazda 7 gun tekrar gosterilmez.
- Service worker kaydi basarisiz olursa uygulama acilisi engellenmez.

PWA manifest ozeti:

```text
name: FidanYS Fidanlik Yonetim Sistemi
short_name: FidanYS
start_url: /auth/sign-in?source=pwa
display: standalone
theme_color: #15b56d
scope: /
```

Canli dogrulamada bakilacak URL'ler:

- `https://ata.fidanys.com.tr/manifest.webmanifest`
- `https://ata.fidanys.com.tr/sw.js`
- `https://ata.fidanys.com.tr/icons/icon-192.png`
- `https://ata.fidanys.com.tr/icons/icon-512.png`

## Layout ve Navigasyon

`src/app/dashboard/layout.tsx`:

- `AuthGuard` ile kullaniciyi korur.
- `SideNav` ve `MainNav` kullanir.
- Global MUI layout degiskenlerini tanimlar.
- `react-hot-toast` toaster ekler.

`src/components/dashboard/layout/config.ts`:

- Sol menu config'i.
- Her item icin `roles` tanimlanmis.
- Guncel yapida item ve group'lar `permissions` alanini da destekler.
- `SideNav`, kullanicinin rollerinden gelen permission setini okur.
- Kullanici `ADMIN` ise veya `TUM_YETKILER` yetkisine sahipse tum menuye
  erisebilir.
- Diger rollerde menu gorunurlugu permission bazli filtrelenir.
- Ana gruplar: Anasayfa, Operasyonlar, Muhasebe, Tanimlar, Raporlar, Sistem, Profilim.

`src/paths.ts`:

- Turkce gorunen route'lar ile gercek Next sayfalari arasindaki merkezi path sozlesmesi.
- `next.config.mjs` rewrites bu Turkce route'lari mevcut sayfalara yonlendirir.

## Auth Akisi

`src/lib/auth/client.ts`:

- Hostname'den tenant belirler.
- Localhost icin `ata.fidanys.com.tr` kullanir.
- `signInWithPassword`: `/auth/login`.
- `forceSignIn`: `/auth/login/force`.
- `getUser`: `/users/me`.
- `signOut`: `/auth/logout`.
- Token `localStorage.authToken` olarak saklanir.

Tek oturum kuralindan dolayi backend `409` donerse UI tarafinda force login akisi desteklenir.

## API Katmani

`src/lib/apiClient.ts`:

- Merkezi fetch wrapper.
- Prefix: `/api`.
- Authorization header'i localStorage token'ina gore eklenir.
- JSON body ve temel hata yonetimi yapar.

`src/hooks/use-api-swr.ts`:

- SWR ile `apiClient.get` kullanir.

`src/hooks/use-api.ts`:

- Manuel fetch hook'u.
- Yeni Docker uyumlu varsayilan base URL: `/api`.
- Eski `/api/v1` kullanimlarini backend'in gercek `/api` sozlesmesine cevirir.

`src/services`:

- Daha yeni ve temiz servis katmani.
- `apiClient` ve `useApiSWR` kullanir.
- Customer, supplier, user, warehouse, plant, payment, invoice, stock, production batch servisleri burada.

`src/api`:

- Eski yardimci API dosyalari.
- Docker calismasi icin varsayilan URL'ler `/api` yapildi.
- `/api/v1` path varsayimlari backend ile uyumlu olacak sekilde `/api` altina indirildi.

## Sayfa Haritasi

Auth:

- `/auth/sign-in`
- `/auth/sign-up`
- `/auth/reset-password`

Dashboard:

- `/dashboard`
- `/dashboard/account`
- `/dashboard/user-management`
- `/dashboard/settings`
- `/dashboard/settings/inflation`

Tanimlar:

- `/dashboard/plants`
- `/dashboard/warehouses`
- `/dashboard/customers`
- `/dashboard/suppliers`
- `/dashboard/definitions/expense-categories`

Operasyonlar:

- `/dashboard/orders`
- `/dashboard/goods-receipts`
- `/dashboard/production-batches`
- `/dashboard/production-batches/[id]`
- `/dashboard/stok-durumu`

Muhasebe:

- `/dashboard/accounting/current-accounts`
- `/dashboard/accounting/current-accounts/[customerId]`
- `/dashboard/accounting/suppliers`
- `/dashboard/accounting/suppliers/[supplierId]`
- `/dashboard/accounting/invoices`
- `/dashboard/accounting/invoices/[invoiceId]`
- `/dashboard/accounting/payments`
- `/dashboard/accounting/expenses`

Raporlar:

- `/dashboard/reports/profitability`
- `/dashboard/raporlar/enflasyon-genel-bakis`
- `/dashboard/raporlar/maliyet-analizi`
- `/dashboard/raporlar/satis-fiyati-performansi`

Guncel route ve rapor notlari:

- Musteri listesinde `Ekstreyi Goruntule` butonu
  `paths.dashboard.muhasebe.currentAccountDetails(customerId)` helper'i ile
  detay sayfasina gider.
- Dogru public route:

```text
/dashboard/muhasebe/cari-hesaplar-musteri/:customerId
```

- Kar/Zarar sayfasi `use-real-profit-loss.ts` hook'u ile
  `/accounting/reports/profit-loss/real` endpointine gider.
- Kartlar `Nominal Net Kar`, `Bugunku Deger Farki` ve `Reel Net Kar` olarak
  okunur.

## Dashboard Bilesenleri

`components/dashboard/overview`:

- `AdminDashboard`
- `AccountantDashboard`
- `WarehouseDashboard`
- chart ve stat card bilesenleri

Rollere gore dashboard icerigi degisir.

## Is Modulu Bilesenleri

- `dashboard/nursery`: fidan tanim formlari.
- `dashboard/production-batches`: uretim partisi tablo, create form, hasat ve gider ekleme.
- `dashboard/goods-receipt`: mal girisi tablo ve create form.
- `dashboard/order`: siparis tablo, create form, status update.
- `dashboard/accounting`: tahsilat/tediye ve transaction tablolar.
- `dashboard/invoicing`: fatura tablo ve detay.
- `dashboard/expense`: gider ve gider kategori ekranlari.
- `dashboard/customer`, `supplier`, `warehouse`, `user`: CRUD ekranlari.
- `dashboard/user/role-management-panel.tsx`: Kullanici Yonetimi altinda rol ve
  permission tree yonetimi.

Dinamik RBAC UI:

- Admin `Yeni Rol Ekle` ile rol adi, aciklama ve tree yapisindan yetki secer.
- Permission tree gruplari: Operasyonlar, Muhasebe, Raporlar ve Sistem.
- Yeni rol kaydedildikten sonra kullanici olusturma ve duzenleme formlarinda
  secilebilir.
- Varsayilan roller listelenir; silme aksiyonu varsayilan roller icin gizlenir.

## PDF ve Export

`src/lib/pdf/generate-invoice-pdf.ts` frontend tarafinda fatura PDF uretimi icin bulunur. Backend tarafinda ayrica `/api/export/{format}` ile PDF/CSV export vardir.

## Dikkat Edilecek Teknik Noktalar

- API katmani iki nesil kod barindiriyor: yeni `services + apiClient`, eski `src/api + fetch`.
- `NEXT_PUBLIC_API_BASE_URL` ve `NEXT_PUBLIC_API_URL` Docker'da `/api` olarak ayarlandi.
- `next.config.mjs` rewrite'i `BACKEND_INTERNAL_URL` ile container icinde `backend:8081` adresine bakar.
- Eski `8080` ve `/api/v1` varsayimlari bir kisim yardimci dosyada temizlendi; yeni kod yazarken sadece `/api` sozlesmesi kullanilmali.
