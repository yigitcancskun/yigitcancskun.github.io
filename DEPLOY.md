# Vercel Deploy Rehberi

## 🚀 Adım Adım Deployment

### 1. Vercel Hesabı Oluştur

- https://vercel.com adresine git
- "Sign Up" butonuna tıkla
- GitHub hesabınla giriş yap

### 2. Projeyi Import Et

1. Vercel dashboard'da **"Add New Project"** tıkla
2. **"Import Git Repository"** seç
3. GitHub'dan `yigitcancskun/mysite` repo'sunu seç
4. **"Import"** butonuna tıkla

### 3. Deploy Ayarları

Vercel otomatik olarak algılayacak:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (değiştirme)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**Hiçbir ayarı değiştirme!** Sadece **"Deploy"** butonuna tıkla.

### 4. Deploy Süreci

- Build başlayacak (~2-3 dakika)
- Build tamamlandığında otomatik domain verilecek
- Domain formatı: `mysite-xxx.vercel.app`

### 5. Ücretsiz Domain

Vercel otomatik olarak şu formatta domain verir:

- `mysite.vercel.app` (eğer müsaitse)
- veya `mysite-yigitcancskun.vercel.app`

### 6. Özel Domain (Opsiyonel)

Kendi domain'iniz varsa:

1. Project Settings → Domains
2. Domain'inizi ekleyin
3. DNS ayarlarını yapın

## 🔄 Otomatik Deployment

Her GitHub push'unda Vercel otomatik olarak:

- Yeni build yapacak
- Test edecek
- Deploy edecek

## 📊 Ücretsiz Plan Limitleri

- ✅ Sınırsız deployment
- ✅ Otomatik HTTPS
- ✅ Otomatik CDN
- ✅ 100GB bandwidth/ay
- ✅ Serverless Functions

## 🎉 Tamamlandı!

Deploy tamamlandığında Vercel size bir URL verecek.
Bu URL'yi herkesle paylaşabilirsiniz!

Örnek: https://mysite-yigitcancskun.vercel.app
