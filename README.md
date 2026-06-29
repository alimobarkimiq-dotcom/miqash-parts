# Miqash Parts

موقع صفحات هبوط لمنتجات قطع غيار المكانس في متجر مِقَشّة، مبني بـ Next.js App Router.

## الصفحات

- `/` فهرس صفحات المنتجات.
- `/panasonic-brush` صفحة فرشة مكنسة باناسونيك.
- `/hitachi-hose-kit` صفحة طقم لي مكنسة هيتاشي.

## التشغيل

```bash
npm run dev
```

ثم افتح `http://localhost:3000`.

## فحص الإنتاج

```bash
npm run build
```

## ملفات مهمة

- `lib/store/constants.ts`: بيانات المتجر وروابطه العامة.
- `lib/store/products.ts`: بيانات المنتجات والروابط والصور المشتركة.
- `lib/seo/`: أدوات metadata و JSON-LD.
- `app/*/seo.ts`: بيانات SEO لكل صفحة منتج.

## متغيرات البيئة

- `NEXT_PUBLIC_CLARITY_ID`: معرّف Microsoft Clarity، اختياري. إذا لم يوجد، لن يتم تحميل سكربت Clarity.
