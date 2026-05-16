# Backend Modulleri

Backend kok paket: `com.fidanlik.fidanysserver`

## Giris Noktasi

`FidanysServerApplication` Spring Boot uygulamasini baslatir ve `MongoTransactionManager` bean'i tanimlar. Bu bean nedeniyle MongoDB replica set olarak calismalidir.

## Config ve Ortak Katman

`common/config`

- `ApplicationConfig`: BCrypt `PasswordEncoder` ve tenant authentication provider beanleri.
- `SecurityConfiguration`: Security filter chain, CORS, public/protected route ayrimi.
- `DataInitializer`: Tenant, permission, role ve varsayilan kullanici seed islemleri.
- `MongoCascadeListener`: Mongo event listener.
- `WebClientConfig`: TCMB gibi dis servis cagrilari icin `WebClient.Builder`.

`common/security`

- `JwtService`: JWT uretimi, username ve tenantId claim cozumleme.
- `JwtAuthenticationFilter`: Bearer token dogrulama, DB token eslesmesi, SecurityContext doldurma.
- `TenantAuthenticationProvider`: Username/password dogrulamasini tenantId ile yapar.
- `TenantAuthenticationToken`: Authentication token icinde tenantId tasir.
- `UserDetailsServiceImpl`: Tenant'a gore kullanici ve rol yukleme.
- `JwtAuthenticationEntryPoint`, `CustomAccessDeniedHandler`: 401/403 hata davranisi.

`common/export`

- `ExportController`: Entity bazli PDF/CSV export endpoint'i.
- `ExportService`: iText ile PDF, Commons CSV ile CSV uretimi.

`common/inflation`

- `InflationCalculationService`: Nominal tutarlari enflasyon verisiyle reel degere cevirir.

## Auth

Paket: `auth`

- `AuthenticationController`: `/api/auth` endpointleri.
- `AuthenticationService`: login, force login, logout.
- `LoginRequest`: `username`, `password`, `tenantName`.
- `LoginResponse`: `token`.

Kurallar:

- Tenant adi zorunlu.
- Tenant pasifse login reddedilir.
- Ayni kullanici icin aktif token varsa normal login `409` verir.
- Force login mevcut token'i siler.

## Tenant, Rol ve Kullanici

Paketler: `tenant`, `role`, `user`

- Tenant: sistemdeki sirket/alan ayrimi.
- Permission: yetki kodlari.
- Role: permission seti.
- User: username, email, password, roleIds, tenantId.
- UserToken: aktif JWT saklama.

Varsayilan roller:

- `ADMIN`: tum izinler.
- `ACCOUNTANT`: cari, fatura, odeme, gider, raporlama, stok goruntuleme.
- `WAREHOUSE_STAFF`: stok, mal kabul, sevkiyat.
- `SALES`: siparis, stok, fidan ekleme.

Guncel dinamik RBAC davranisi:

- `RoleController` artik rol listeleme disinda rol olusturma, guncelleme,
  silme ve permission listeleme endpointlerini de saglar.
- Yeni roller tenant bazinda olusturulur ve `permissionIds` ile yetki seti
  atanir.
- Varsayilan roller (`ADMIN`, `ACCOUNTANT`, `WAREHOUSE_STAFF`, `SALES`) sistem
  rolleri olarak korunur; bu roller silinemez.
- `User.getAuthorities()` hem klasik `ROLE_*` authority uretir hem de
  permission bazli `PERM_*` authority uretir.
- Geriye uyumluluk icin permission setleri eski rol tabanli controller
  guard'larina da authority olarak yansitilir.
- `TUM_YETKILER`, sistem genelinde admin benzeri tam erisim icin kullanilir.

## Fidan Tanimi ve Uretim

Paket: `fidan`

Alt modeller:

- `PlantType`: fidan turu.
- `PlantVariety`: tur altinda cesit.
- `Rootstock`: anac.
- `PlantSize`: boy/ebat.
- `PlantAge`: yas.
- `Land`: arazi.
- `Plant`: yukaridaki tanimlarin kombinasyonu.
- `ProductionBatch`: uretim partisi.

Controllerlar:

- `/api/plant-types`
- `/api/plant-varieties`
- `/api/rootstocks`
- `/api/plant-sizes`
- `/api/plant-ages`
- `/api/lands`
- `/api/plants`
- `/api/production-batches`

Production batch davranisi:

- Parti kodu, adi, baslangic tarihi, baslangic/mevcut miktar tutulur.
- `costPool` ve `inflationAdjustedCostPool` maliyet takibinde kullanilir.
- Status: `ACTIVE`, `COMPLETED`, `CANCELLED`.
- Complete/cancel gibi operasyonlar transaction altinda calisir.

## Depo ve Stok

Paketler: `warehouse`, `stock`

- `Warehouse`: depo adi/adresi.
- `Stock`: plant + warehouse bazli miktar.
- `StockMovement`: giris/cikis hareketleri, related document, unit cost.

Endpointler:

- `/api/warehouses`
- `/api/stock`
- `/api/stock/summary`

Stock hareketleri mal girisi, siparis sevkiyati ve uretim operasyonlarindan etkilenir.

Guncel maliyet notu:

- `StockMovement.unitCost`, satis fiyati degil gercek stok maliyetidir.
- Mal girisinde `unitCost`, tedarikci alis maliyeti veya uretim partisi birim
  maliyeti olarak yazilir.
- Siparis sevkinde stok dusulurken `unitCost`, mevcut stok hareketlerinden
  hesaplanan agirlikli ortalama maliyet olarak yazilir.
- Bu alan Kar/Zarar Analizi icin SMM kaynagidir.

## Mal Girisi

Paket: `goodsreceipt`

- `GoodsReceipt`: fis/irsaliye, depo, kalemler, toplam deger, kaynak tipi.
- `GoodsReceiptItem`: plantId, quantity, unitCost.
- Kaynak tipi: `SUPPLIER` veya `PRODUCTION_BATCH`.
- Status: `ACTIVE`, `CANCELLED`.

Endpointler:

- `POST /api/goods-receipts`
- `GET /api/goods-receipts`
- `POST /api/goods-receipts/{id}/cancel`

Servis transaction kullanir. Tedarikci kaynakli girislerde stok artar ve cari hareket olusur. Uretim partisi kaynakli girislerde parti/stock/maliyet akisi devreye girer.

## Siparis

Paket: `order`

- `Order`: orderNumber, customerId, warehouseId, items, totalAmount, status, expectedDeliveryDate.
- `OrderItem`: plantId, quantity, salePrice, orderDate.
- Status: `PENDING`, `SHIPPED`, `DELIVERED`, `CANCELLED`.

Endpointler:

- `POST /api/orders`
- `GET /api/orders`
- `POST /api/orders/{id}/ship`
- `POST /api/orders/{id}/deliver`
- `POST /api/orders/{id}/cancel`

Siparis servisinde stok dusme ve cari hareket uretme davranislari transaction altinda calisir.

## Fatura

Paket: `invoicing`

- `Invoice`: invoiceNumber, customerId, orderId, issueDate, dueDate, totalAmount, status, items.
- `InvoiceItem`: plantId, description, quantity, unitPrice, totalPrice.
- Status: `DRAFT`, `SENT`, `PAID`, `OVERDUE`, `CANCELLED`.

Endpointler:

- `POST /api/invoices/from-order/{orderId}`
- `GET /api/invoices`
- `GET /api/invoices/{invoiceId}`

## Odeme ve Muhasebe

Paketler: `payment`, `accounting`

Payment:

- Type: `TAHSILAT`, `TEDIYE`.
- Method: `NAKIT`, `BANKA_TRANSFERI`, `KREDI_KARTI`.
- Related entity: `CUSTOMER`, `SUPPLIER`, `EXPENSE`.

Endpointler:

- `POST /api/payments/collection`
- `POST /api/payments/payment-to-supplier`
- `GET /api/payments`

Accounting:

- `Transaction`: customerId/supplierId/relatedEntityId, type, amount, description, relatedDocumentId.
- Transaction type: `BORC`, `ALACAK`.

Endpointler:

- `GET /api/accounting/customers/{customerId}/transactions`
- `GET /api/accounting/suppliers/{supplierId}/transactions`
- `GET /api/accounting/reports/profit-loss/real`

## Gider

Paket: `expense`

- `ExpenseCategory`: gider kategori tanimi.
- `Expense`: description, amount, expenseDate, categoryId, paymentId, productionBatchId.
- Gider kaydi odeme ve uretim partisi maliyeti ile iliskilenebilir.

Endpointler:

- `/api/expenses`
- `/api/expenses/by-batch/{productionBatchId}`
- `/api/expense-categories`

## Musteri ve Tedarikci

Paketler: `customer`, `supplier`

Customer alanlari:

- firstName, lastName, companyName, phone, email, address, tenantId.

Supplier alanlari:

- name, contactPerson, phone, email, address, tenantId.

Endpointler:

- `/api/customers`
- `/api/suppliers`

## Dashboard ve Raporlama

Paket: `dashboard`

- `DashboardService`: role gore ozet veri uretir.
- `ReportService`: enflasyon, maliyet ve fiyat performansi raporlari.

Endpointler:

- `GET /api/dashboard/summary`
- `GET /api/reports/inflation-overview`
- `GET /api/reports/cost-analysis`
- `GET /api/reports/price-performance`

Dashboard rollerine gore farkli metrikler:

- Admin: gelir, gider, stok degeri, bekleyen siparis, en cok satan fidanlar.
- Accountant: vadesi gecmis faturalar, nakit akisi, gider dagilimi, tedarikci borcu.
- Warehouse staff: kritik stok, bugun sevk edilecek siparis, son mal girisleri, depo dagilimi.

## Enflasyon

Paket: `inflation`

- `InflationData`: date, value, seriesName.
- `InflationService`: TCMB API'den veri cekip kaydeder.

Endpointler:

- `POST /api/inflation/fetch`
- `GET /api/inflation`

`tcmb.api.key` artik env ile override edilebilir.

Guncel TCMB/EVDS notu:

- TCMB verisi eski `evds2.tcmb.gov.tr/service/evds` yolundan cekilmez.
- Yeni servis kok adresi `https://evds3.tcmb.gov.tr/igmevdsms-dis` olarak
  kullanilir.
- UFE aylik degisim serisi `TP.FG.J01` icin `formulas=1` ve `frequency=5`
  kullanilir.
- API yanitindaki seri alani `TP_FG_J01-1` gibi dinamik adla gelir. DTO
  `JsonAnySetter` ile `TP_` ile baslayan alani yakalar.
- Veriler `inflation_data` collection'inda ayin ilk gunu ile saklanir.

Guncel Kar/Zarar hesap notu:

- `calculateRealValue(nominal, transactionDate, targetDate)` islem ayini tekrar
  carpmadan, islem ayindan sonraki aydan hedef aya kadar enflasyon uygular.
- Geriye dogru duzeltmede hedef aydan sonraki ay ile islem ayi arasindaki
  oranlar ters carpanla kullanilir.
- Enflasyon verisi olmayan aylar icin oran `0` kabul edilir.
- Nominal net kar = gelir - SMM - gider.
- Reel net kar = reel gelir - reel SMM - reel gider.
- SMM once satisa ait stok hareketindeki `unitCost` ile hesaplanir; veri
  bulunamazsa uretim partisi maliyet fallback'i devreye girer.
