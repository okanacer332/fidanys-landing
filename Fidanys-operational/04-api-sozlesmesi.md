# API Sozlesmesi

Backend base path: `/api`

Frontend Docker/prod icinde API'ye dogrudan backend hostu ile degil, Next rewrite uzerinden ulasir:

```text
Browser -> http://localhost:3000/api/... -> Next rewrite -> http://backend:8081/api/...
```

## Auth

```http
POST /api/auth/login
POST /api/auth/login/force
POST /api/auth/logout
```

Login body:

```json
{
  "username": "admin",
  "password": "admin",
  "tenantName": "ata.fidanys.com.tr"
}
```

Basarili cevap:

```json
{
  "token": "jwt"
}
```

Davranis:

- Normal login aktif oturum varsa `409 Conflict` verir.
- Force login eski token'i siler.
- Logout authenticated kullanicinin token'ini siler.

## Kullanici ve Roller

```http
GET    /api/users/me
GET    /api/users
POST   /api/users
PUT    /api/users/{id}
DELETE /api/users/{id}
GET    /api/roles
POST   /api/roles
PUT    /api/roles/{id}
DELETE /api/roles/{id}
GET    /api/roles/permissions
```

Role create/update payload:

```json
{
  "name": "OPERASYON_SORUMLUSU",
  "description": "Siparis ve stok operasyonlarini yonetir.",
  "permissionIds": ["permission-id-1", "permission-id-2"]
}
```

Notlar:

- Role write endpointleri admin authority ister.
- Varsayilan roller silinemez.
- Varsayilan rol adlari degistirilemez.
- Kullaniciya rol atama `roleIds` alanindan yapilir.

## Tenant

```http
GET/POST/... /api/tenants
```

Tenant controller mevcut, detayli CRUD davranisi servis implementasyonuna baglidir.

## Fidan Tanimlari

```http
GET    /api/master-data

GET    /api/plant-types
POST   /api/plant-types
PUT    /api/plant-types/{id}
DELETE /api/plant-types/{id}

GET    /api/plant-varieties
GET    /api/plant-varieties/by-plant-type/{plantTypeId}
POST   /api/plant-varieties
PUT    /api/plant-varieties/{id}
DELETE /api/plant-varieties/{id}

GET    /api/rootstocks
POST   /api/rootstocks
PUT    /api/rootstocks/{id}
DELETE /api/rootstocks/{id}

GET    /api/plant-sizes
POST   /api/plant-sizes
PUT    /api/plant-sizes/{id}
DELETE /api/plant-sizes/{id}

GET    /api/plant-ages
POST   /api/plant-ages
PUT    /api/plant-ages/{id}
DELETE /api/plant-ages/{id}

GET    /api/lands
POST   /api/lands
PUT    /api/lands/{id}
DELETE /api/lands/{id}

GET    /api/plants
GET    /api/plants/by-type-and-variety
POST   /api/plants
PUT    /api/plants/{id}
DELETE /api/plants/{id}
```

## Uretim Partileri

```http
GET   /api/production-batches
GET   /api/production-batches/{id}
POST  /api/production-batches
PATCH /api/production-batches/{id}/complete
PATCH /api/production-batches/{id}/cancel
```

## Depo ve Stok

```http
GET    /api/warehouses
POST   /api/warehouses
PUT    /api/warehouses/{id}
DELETE /api/warehouses/{id}

GET    /api/stock
GET    /api/stock/{id}
POST   /api/stock
PUT    /api/stock/{id}
DELETE /api/stock/{id}
GET    /api/stock/summary
```

## Mal Girisi

```http
POST /api/goods-receipts
GET  /api/goods-receipts
POST /api/goods-receipts/{id}/cancel
```

## Musteri ve Tedarikci

```http
GET    /api/customers
GET    /api/customers/{id}
POST   /api/customers
PUT    /api/customers/{id}
DELETE /api/customers/{id}

GET    /api/suppliers
GET    /api/suppliers/{id}
POST   /api/suppliers
PUT    /api/suppliers/{id}
DELETE /api/suppliers/{id}
```

## Siparis

```http
POST /api/orders
GET  /api/orders
POST /api/orders/{id}/ship
POST /api/orders/{id}/deliver
POST /api/orders/{id}/cancel
```

## Fatura

```http
POST /api/invoices/from-order/{orderId}
GET  /api/invoices
GET  /api/invoices/{invoiceId}
```

## Odeme

```http
POST /api/payments/collection
POST /api/payments/payment-to-supplier
GET  /api/payments
```

## Gider

```http
POST /api/expenses
GET  /api/expenses
GET  /api/expenses/by-batch/{productionBatchId}

GET    /api/expense-categories
POST   /api/expense-categories
PUT    /api/expense-categories/{id}
DELETE /api/expense-categories/{id}
```

## Muhasebe

```http
GET /api/accounting/customers/{customerId}/transactions
GET /api/accounting/suppliers/{supplierId}/transactions
GET /api/accounting/reports/profit-loss/real
```

Profit loss query:

```http
GET /api/accounting/reports/profit-loss/real?startDate=dd-MM-yyyy&endDate=dd-MM-yyyy&baseDate=dd-MM-yyyy
```

Hesap sozlesmesi:

```text
nominalNetProfit = nominalRevenue - nominalCostOfGoodsSold - nominalOperatingExpenses
realNetProfit = realRevenue - realCostOfGoodsSold - realOperatingExpenses
bugunkuDegerFarki = realNetProfit - nominalNetProfit
```

SMM kaynagi oncelikle satis stok hareketindeki `unitCost` alanidir.

## Dashboard ve Raporlar

```http
GET /api/dashboard/summary

GET /api/reports/inflation-overview
GET /api/reports/cost-analysis
GET /api/reports/price-performance
```

## Enflasyon

```http
POST /api/inflation/fetch
GET  /api/inflation
```

Guncel TCMB sozlesmesi:

- Backend TCMB EVDS3 endpointini kullanir.
- Servis kok adresi: `https://evds3.tcmb.gov.tr/igmevdsms-dis`
- Seri: `TP.FG.J01`
- Formul: `formulas=1`
- Frekans: `frequency=5`
- Basarili cevap sonrasi backend `200` doner ve verileri DB'ye yazar.

## Export

```http
GET /api/export/{format}?entity={entity}
```

Format beklenen degerler: controller implementasyonuna gore PDF/CSV. Entity degeri export controller icindeki switch akisi ile desteklenir.

## GraphQL

`spring-boot-starter-graphql` dependency ve `/graphql` public path mevcut. Kod incelemesinde ana islevler REST controllerlar uzerinden ilerliyor; GraphQL schema/resolver dosyasi gorunmedi.
