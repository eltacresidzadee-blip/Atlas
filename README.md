# Atlas — Android və iOS tətbiqi

Azərbaycan tarixi və coğrafiyası üzrə imtahana hazırlıq tətbiqi: xəritələr, yaddaş kartları, testlər.
Bu qovluq hazır tətbiq layihəsidir (Capacitor). Tətbiqin özü `www/index.html` faylındadır.

Üç yol var — ən asandan başlayın.

---

## 1. Android APK — kompüterə heç nə quraşdırmadan (GitHub ilə)

1. <https://github.com> saytında pulsuz hesab açın.
2. **New repository** → ad verin (məsələn `atlas`) → **Create repository**.
3. **uploading an existing file** linkinə basın və bu qovluğun **bütün** məzmununu
   (gizli `.github` qovluğu da daxil olmaqla) sürüşdürüb atın → **Commit changes**.
   > `.github` qovluğu görünmürsə: zip faylını açarkən gizli faylları göstərin və ya GitHub Desktop istifadə edin.
4. Yuxarıda **Actions** bölməsinə keçin → **Android APK** işinin bitməsini gözləyin (5–8 dəqiqə).
5. Bitmiş işə daxil olun → aşağıda **Artifacts → Atlas-android-apk** → yükləyin, zip-i açın → `Atlas.apk`.
6. APK-nı telefona köçürün və açın. Telefon «naməlum mənbədən quraşdırma» icazəsi istəyəcək — razılaşın.

## 2. iPhone (və Android) — veb-tətbiq kimi quraşdırma

iPhone-a ayrıca tətbiq faylı yalnız Apple-ın icazəsi ilə (Mac + Xcode + Apple hesabı) yüklənə bilər.
Ən sadə yol — tətbiqi veb-tətbiq kimi quraşdırmaqdır: ana ekranda ikonu olur, tam ekran açılır, internetsiz işləyir.

1. Yuxarıdakı 1–3-cü addımları edin.
2. Repozitoriyada **Settings → Pages → Source: GitHub Actions** seçin.
3. **Actions → Veb-tətbiq** işi bitəndən sonra sayt ünvanı görünəcək (`https://<istifadəçi-adı>.github.io/atlas/`).
4. iPhone-da həmin ünvanı **Safari**-də açın → **Paylaş** düyməsi → **Ana ekrana əlavə et**.
   Android-də Chrome-da açın → **⋮ → Tətbiqi quraşdır**.

## 3. Mağazaya hazır versiya (proqramçılar üçün)

Tələblər: Node.js 20, Android Studio (Android üçün), Mac + Xcode 15+ (iOS üçün).

```bash
npm install
npm run android        # android/ layihəsini, ikonları və açılış ekranını yaradır
npx cap open android   # Android Studio-da açılır → Build → Generate Signed Bundle / APK

npm run ios            # ios/ layihəsini yaradır (yalnız Mac)
npx cap open ios       # Xcode-da açılır → komandanı (Team) seçin → telefonda işə salın / App Store-a göndərin
```

`www/index.html` dəyişəndən sonra: `npx cap sync`.

---

### Qeydlər
- Tətbiq ID-si: `az.atlas.tarix` (`capacitor.config.json`-da dəyişmək olar).
- Ikon və açılış ekranı mənbələri: `resources/` qovluğu.
- Kart və test irəliləyişi telefonun özündə saxlanılır.
- Şriftlər və vektor xəritə sərhədləri ilk açılışda internetdən yüklənir; internet olmayanda tətbiq ehtiyat xəritə şəkli ilə işləyir.
