# Veri Modeli

Backend MongoDB collection'lari Spring `@Document` entity'leri ile tanimlanir. Neredeyse tum is entity'lerinde `tenantId` bulunur.

## Tenant ve Guvenlik

`tenants`

- `id`
- `name`
- `active`

`users`

- `id`
- `username`
- `email`
- `password`
- `roleIds`
- `tenantId`
- `roles` DBRef/lookup olarak doldurulur.

`user_tokens`

- `id`
- `userId`
- `token`
- `tenantId`

`roles`

- `id`
- `name`
- `description`
- `permissions`
- `tenantId`

`permissions`

- `id`
- `name`
- `description`
- `tenantId`

Dinamik RBAC notu:

- Rol tenant'a aittir.
- Rol bir veya daha fazla permission icerebilir.
- Kullanici rol baglantisini `roleIds` ile tutar.
- Runtime'da roller ve permission setleri user principal uzerine doldurulur.
- Authority uretimi hem `ROLE_*` hem de `PERM_*` bicimindedir.

## Fidan Tanimlari

`plantTypes`

- `id`
- `name`
- `tenantId`

`plantVarieties`

- `id`
- `name`
- `plantTypeId`
- `plantType`
- `tenantId`

`rootstocks`

- `id`
- `name`
- `tenantId`

`plantSizes`

- `id`
- `name`
- `tenantId`

`plantAges`

- `id`
- `name`
- `tenantId`

`lands`

- `id`
- `name`
- `location`
- `tenantId`

`plants`

- `id`
- `plantTypeId`
- `plantVarietyId`
- `rootstockId`
- `plantSizeId`
- `plantAgeId`
- `landId`
- `plantType`
- `plantVariety`
- `rootstock`
- `plantSize`
- `plantAge`
- `land`
- `tenantId`

## Uretim

`production_batches`

- `id`
- `batchCode`
- `batchName`
- `startDate`
- `initialQuantity`
- `currentQuantity`
- `costPool`
- `description`
- `inflationAdjustedCostPool`
- `lastCostUpdateDate`
- `expectedHarvestQuantity`
- `harvestedQuantity`
- `status`
- `plantTypeId`
- `plantVarietyId`
- `plantType`
- `plantVariety`
- `tenantId`

Status:

- `ACTIVE`
- `COMPLETED`
- `CANCELLED`

## Depo ve Stok

`warehouses`

- `id`
- `name`
- `address`
- `tenantId`

`stocks`

- `id`
- `plantId`
- `warehouseId`
- `quantity`
- `tenantId`

`stockMovements`

- `id`
- `plantId`
- `warehouseId`
- `quantity`
- `type`
- `relatedDocumentId`
- `description`
- `userId`
- `timestamp`
- `tenantId`
- `unitCost`

`unitCost` is kurali:

- Mal girisi hareketinde alis/uretim birim maliyetidir.
- Satis hareketinde satis fiyati degildir.
- Satis hareketinde sevk anindaki agirlikli ortalama stok maliyetidir.
- Kar/Zarar Analizi SMM hesaplarken oncelikle bu alani okur.
- Eski kayitlarda bu alan satis fiyati olarak yazilmis olabilir; yeni kayitlar
  icin bu davranis duzeltilmistir.

Movement type:

- `IN`
- `OUT`
- diger enum degerleri icin model dosyasi kontrol edilmeli.

## Mal Girisi

`goodsReceipts`

- `id`
- `receiptNumber`
- `warehouseId`
- `items`
- `totalValue`
- `status`
- `userId`
- `receiptDate`
- `tenantId`
- `sourceType`
- `sourceId`

`GoodsReceiptItem`

- `plantId`
- `quantity`
- `unitCost`

Source type:

- `SUPPLIER`
- `PRODUCTION_BATCH`

Status:

- `ACTIVE`
- `CANCELLED`

## Musteri ve Tedarikci

`customers`

- `id`
- `firstName`
- `lastName`
- `companyName`
- `phone`
- `email`
- `address`
- `tenantId`

`suppliers`

- `id`
- `name`
- `contactPerson`
- `phone`
- `email`
- `address`
- `tenantId`

## Siparis

`orders`

- `id`
- `orderNumber`
- `customerId`
- `warehouseId`
- `items`
- `totalAmount`
- `status`
- `orderDate`
- `userId`
- `tenantId`
- `expectedDeliveryDate`

`OrderItem`

- `plantId`
- `quantity`
- `salePrice`
- `orderDate`

Status:

- `PENDING`
- `SHIPPED`
- `DELIVERED`
- `CANCELLED`

## Fatura

`invoices`

- `id`
- `tenantId`
- `invoiceNumber`
- `customerId`
- `orderId`
- `issueDate`
- `dueDate`
- `totalAmount`
- `status`
- `items`
- `userId`

`InvoiceItem`

- `plantId`
- `description`
- `quantity`
- `unitPrice`
- `totalPrice`

Status:

- `DRAFT`
- `SENT`
- `PAID`
- `OVERDUE`
- `CANCELLED`

## Odeme ve Muhasebe

`payments`

- `id`
- `tenantId`
- `userId`
- `type`
- `method`
- `paymentDate`
- `amount`
- `description`
- `relatedId`
- `relatedEntityType`
- `invoiceId`

Payment type:

- `TAHSILAT`
- `TEDIYE`

Payment method:

- `NAKIT`
- `BANKA_TRANSFERI`
- `KREDI_KARTI`

Related entity type:

- `CUSTOMER`
- `SUPPLIER`
- `EXPENSE`

`transactions`

- `id`
- `tenantId`
- `transactionDate`
- `customerId`
- `supplierId`
- `relatedEntityId`
- `type`
- `amount`
- `description`
- `relatedDocumentId`
- `userId`

Transaction type:

- `BORC`
- `ALACAK`

## Gider ve Enflasyon

`expense_categories`

- `id`
- `name`
- `description`
- `tenantId`

`expenses`

- `id`
- `tenantId`
- `userId`
- `description`
- `amount`
- `expenseDate`
- `categoryId`
- `category`
- `paymentId`
- `productionBatchId`

`inflation_data`

- `id`
- `date`
- `value`
- `seriesName`

Enflasyon veri notu:

- `date`, ilgili ayin ilk gunudur. Ornek: Mart 2024 verisi
  `2024-03-01` olarak saklanir.
- `value`, aylik degisim yuzdesidir. Ornek: `3.40346189`.
- `seriesName`, TCMB seri kodudur. Guncel kullanimda `TP.FG.J01`.
- Bu collection Kar/Zarar, Maliyet Analizi ve Fiyat Performansi icin ana
  enflasyon kaynagidir.

## Model Iliskileri

- `tenantId` tum temel kayitlari tenant'a baglar.
- `Plant`, fidan tanim koleksiyonlarinin idlerini tasir ve DBRef/lookup alanlariyla zenginlesir.
- `ProductionBatch`, `PlantType` ve `PlantVariety` ile iliskilidir.
- `Stock`, `plantId + warehouseId` ekseninde miktar tutar.
- `StockMovement`, stok degisiminin audit kaydidir.
- `Order`, customer/warehouse/plant iliskisini satis operasyonu olarak kurar.
- `Invoice`, order'dan uretilebilir.
- `Payment`, customer/supplier/expense/fatura ile iliskilenebilir.
- `Transaction`, cari hesap hareketlerinin ortak defteridir.
- `Expense`, kategori ve opsiyonel uretim partisi maliyetiyle iliskilenir.
