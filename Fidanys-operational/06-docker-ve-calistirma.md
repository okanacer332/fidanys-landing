# Docker ve Calistirma

## Eklenen Docker Yapisi

Kok dizine `docker-compose.yml` eklendi. Ayrica frontend ve backend icin ayri Dockerfile'lar eklendi:

```text
client/Dockerfile
client/.dockerignore
fidanys-server/Dockerfile
fidanys-server/.dockerignore
.dockerignore
docker-compose.yml
```

## Servisler

### mongo

- Image: `mongo:7`
- Port: `27017:27017`
- Command: `mongod --replSet rs0 --bind_ip_all`
- Volume: `mongo-data:/data/db`
- Healthcheck replica set'i yoksa init eder.

Neden replica set:

Backend `MongoTransactionManager` ve `@Transactional` servisler kullaniyor. MongoDB transaction destegi icin standalone mod yeterli degil; tek node replica set gerekir.

### backend

- Build context: `./fidanys-server`
- Runtime: Eclipse Temurin 17 JRE
- Port: `8081:8081`
- Mongo URI: `mongodb://mongo:27017/acrTech?replicaSet=rs0`
- Profile: `docker`

Backend Dockerfile iki asamalidir:

1. Maven image ile jar build.
2. JRE image ile jar calistirma.

### frontend

- Build context: `./client`
- Runtime: Node 22 Alpine
- Port: `3000:3000`
- Next standalone output kullanir.
- Build sirasinda `BACKEND_INTERNAL_URL=http://backend:8081`.
- Browser tarafinda API base: `/api`.

## Komutlar

Ilk kurulum veya yeniden build:

```bash
docker compose up -d --build
```

Sadece baslat:

```bash
docker compose up -d
```

Durum:

```bash
docker compose ps
```

Loglar:

```bash
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f mongo
```

Durdur:

```bash
docker compose down
```

Volume dahil temiz baslatma:

```bash
docker compose down -v
docker compose up -d --build
```

## Adresler

- Frontend: `http://localhost:3000`
- Sign-in: `http://localhost:3000/auth/sign-in`
- Backend: `http://localhost:8081`
- Frontend proxy test: `http://localhost:3000/api/users/me`
- Mongo: `localhost:27017`

## Env Ayarlari

Backend `application.properties` artik env override destekler:

```properties
SPRING_DATA_MONGODB_URI
JWT_SECRET_KEY
JWT_EXPIRATION_MS
SECURITY_LOG_LEVEL
SPRING_PROFILES_ACTIVE
TCMB_API_KEY
SERVER_PORT
PORT
```

Frontend:

```properties
BACKEND_INTERNAL_URL
NEXT_PUBLIC_API_BASE_URL
NEXT_PUBLIC_API_URL
```

Docker varsayilanlari:

```text
BACKEND_INTERNAL_URL=http://backend:8081
NEXT_PUBLIC_API_BASE_URL=/api
NEXT_PUBLIC_API_URL=/api
```

## Canli Ortam Notlari

Canli hedef mimari:

- Frontend: Vercel project `fidanys`
- Backend: Google Cloud Run service `fidanys-api`
- Cloud Run region: `europe-west1`
- Cloud Run URL: `https://fidanys-api-5jzmdzz6lq-ew.a.run.app`
- Son deploy servis URL'i: `https://fidanys-api-66765735737.europe-west1.run.app`
- Veritabani: MongoDB Atlas
- Kullanici domaini: `https://ata.fidanys.com.tr`

Cloud Run ucretsiz kalacak sekilde `min-instances=0`, `max-instances=1`, `512Mi` memory ve `1` CPU ile deploy edilir. Cloud Run container portu platform tarafindan `PORT` env'i ile verildigi icin backend `server.port=${PORT:${SERVER_PORT:8081}}` sozlesmesini destekler.

Vercel tarafinda backend'e server-side rewrite ile gidilir:

```text
BACKEND_INTERNAL_URL=https://fidanys-api-5jzmdzz6lq-ew.a.run.app
NEXT_PUBLIC_API_BASE_URL=/api
NEXT_PUBLIC_API_URL=/api
```

Natro DNS tarafinda Vercel'in dogrulama icin istedigi kayit:

```text
Tip: A
Ad: ata
Icerik: 76.76.21.21
```

Mevcut wildcard `* -> 46.224.56.114` kaydi `ata.fidanys.com.tr` icin eski sunucuya dusme riski yaratir. Natro panelinde `ata` icin explicit A kaydi eklenmeli; DNS paneli wildcard ustune ayni hostu kabul etmezse wildcard kaydi kaldirilmali veya Vercel hedefiyle uyumlu hale getirilmelidir.

MongoDB Atlas tarafinda Cloud Run dinamik cikis IP'leri kullanildigi icin tamamen ucretsiz mimaride pratik ag ayari Atlas Network Access listesine `0.0.0.0/0` eklemektir. Daha kilitli ag modeli istenirse statik outbound IP icin VPC/NAT gibi ucretli Google Cloud parcalari gerekir.

## Production Deploy Sirasi

Canliya cikarken siralama:

1. Backend kodu compile edilir.
2. Cloud Run deploy edilir.
3. Cloud Run login smoke testi yapilir.
4. Frontend production build alinir.
5. Vercel production deploy edilir.
6. `ata.fidanys.com.tr` alias kontrol edilir.
7. Uygulama uzerinden login, rol endpointleri, enflasyon veri cekme ve kritik
   sayfa route'lari test edilir.
8. PWA statik dosyalari ve ana ekrana ekleme sinyalleri test edilir.

Backend deploy komutu:

```powershell
gcloud run deploy fidanys-api --source . --region europe-west1 --allow-unauthenticated --min-instances 0 --max-instances 1 --memory 512Mi --cpu 1
```

Frontend deploy komutu:

```powershell
vercel deploy --prod --yes
```

PWA deploy kontrolu:

1. Frontend production build alininca `manifest.webmanifest`, `sw.js` ve
   `public/icons/*` dosyalari Vercel tarafindan statik olarak servis edilir.
2. Deploy sonrasi su URL'ler 200 donmelidir:
   - `https://ata.fidanys.com.tr/manifest.webmanifest`
   - `https://ata.fidanys.com.tr/sw.js`
   - `https://ata.fidanys.com.tr/icons/icon-192.png`
   - `https://ata.fidanys.com.tr/icons/icon-512.png`
3. `manifest.webmanifest` icinde `display: standalone`, `start_url:
   /auth/sign-in?source=pwa`, `name: FidanYS Fidanlik Yonetim Sistemi` ve iki
   ikon kaydi bulunmalidir.
4. Chrome DevTools > Application > Manifest ekraninda hata olmamalidir.
5. Android cihazda tarayici kurulum onerisini gosterebilmelidir. iPhone'da
   manuel `Paylas > Ana Ekrana Ekle` adimi beklenir.

Son PWA frontend deploy:

```text
Vercel production: https://fidanys-7uw8xvfgw-okans-projects-4268d940.vercel.app
Alias: https://ata.fidanys.com.tr
```

Son canli deploy dogrulamasi:

```text
Cloud Run revision: fidanys-api-00002-j2d
Vercel alias: https://ata.fidanys.com.tr
Login force: 200
Roles endpoint: 200
Permissions endpoint: 200
Inflation fetch: 200
Customer statement route: 200
Profit report endpoint: 200
```

## Smoke Test Komutlari

Frontend:

```powershell
Invoke-WebRequest -UseBasicParsing http://localhost:3000/auth/sign-in
```

Backend force login:

```powershell
$body = @{ username='admin'; password='admin'; tenantName='ata.fidanys.com.tr' } | ConvertTo-Json -Compress
$r = Invoke-WebRequest -UseBasicParsing http://localhost:8081/api/auth/login/force -Method Post -ContentType 'application/json' -Body $body
$token = ($r.Content | ConvertFrom-Json).token
Invoke-WebRequest -UseBasicParsing http://localhost:8081/api/users/me -Headers @{ Authorization = "Bearer $token" }
```

Frontend proxy:

```powershell
Invoke-WebRequest -UseBasicParsing http://localhost:3000/api/users/me -Headers @{ Authorization = "Bearer $token" }
```

Mongo replica set:

```bash
docker exec fidanys-mongo mongosh --quiet --eval "rs.status().ok"
```

Beklenen cikti: `1`
