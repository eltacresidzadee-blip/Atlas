# Gömrük müsahibə sual-cavabları

Gömrük müsahibəsinə hazırlıq üçün sual-cavab kartları: 820 sual, gündəlik təkrar, mövzular və axtarış.
Proqram internetsiz işləyir; "bilirdim / unutmuşdum" işarələri telefonun özündə saxlanır.

## Android

Ən son APK: **[Gomruk-sual-cavab.apk](https://github.com/eltacresidzadee-blip/Atlas/releases/latest/download/Gomruk-sual-cavab.apk)**

1. Linki telefonda açın, fayl yüklənsin.
2. Faylı açın. Telefon "naməlum mənbədən quraşdırma" icazəsi istəyəcək: razılaşın.

Hər dəyişiklikdən sonra GitHub APK-nı özü yığır və **Releases** bölməsinə qoyur (5–8 dəqiqə).

## iPhone (və Android) — veb-tətbiq

1. iPhone-da **Safari**-də açın: <https://eltacresidzadee-blip.github.io/Atlas/>
2. **Paylaş** düyməsi → **Ana ekrana əlavə et**.

Ana ekranda ikonu olur, tam ekran açılır və ilk açılışdan sonra internetsiz işləyir.

## Tərkibi

- `www/index.html`: proqramın özü (bir HTML səhifəsi, suallar və cavablar içindədir)
- `.github/workflows/android.yml`: APK-nı yığan iş axını
- `.github/workflows/web.yml`: veb-tətbiqi dərc edən iş axını

Bu repozitoriyada əvvəl "Atlas" tətbiqi var idi. Onun son vəziyyəti `v1.0.7` etiketində qalır.
