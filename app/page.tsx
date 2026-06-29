"use client";

import { useMemo, useState } from "react";
import { STORE } from "@/lib/store/constants";
import {
  HITACHI_HOSE_KIT_PRODUCT,
  PANASONIC_BRUSH_PRODUCT,
  PANASONIC_RELATED_PRODUCTS,
  whatsappLink,
} from "@/lib/store/products";

const products = [
  {
    id: "panasonic-brush",
    brand: "Panasonic",
    brandAr: "باناسونيك",
    problem: "weak-cleaning",
    problemLabel: "ضعف تنظيف الأرضيات والسجاد",
    name: PANASONIC_BRUSH_PRODUCT.name,
    summary: "فرشة أصلية تعيد حركة المكنسة وتنظيفها على الأرضيات والسجاد.",
    price: `${PANASONIC_BRUSH_PRODUCT.price} ريال`,
    image: PANASONIC_BRUSH_PRODUCT.images[0].url,
    imageAlt: PANASONIC_BRUSH_PRODUCT.images[0].alt,
    detailsHref: `/${PANASONIC_BRUSH_PRODUCT.slug}`,
    buyHref: PANASONIC_BRUSH_PRODUCT.url,
    badge: PANASONIC_BRUSH_PRODUCT.offer,
  },
  {
    id: "hitachi-hose-kit",
    brand: "Hitachi",
    brandAr: "هيتاشي",
    problem: "broken-hose",
    problemLabel: "اللي أو الفرشة أو العصا تالفة",
    name: HITACHI_HOSE_KIT_PRODUCT.name,
    summary: "طقم كامل يجمع اللي والفرشة وزوج العصا لموديلات هيتاشي المحددة.",
    price: `${HITACHI_HOSE_KIT_PRODUCT.price} ريال`,
    image: HITACHI_HOSE_KIT_PRODUCT.images[0].url,
    imageAlt: HITACHI_HOSE_KIT_PRODUCT.images[0].alt,
    detailsHref: `/${HITACHI_HOSE_KIT_PRODUCT.slug}`,
    buyHref: HITACHI_HOSE_KIT_PRODUCT.url,
    badge: "تحقق من الموديل",
  },
  ...PANASONIC_RELATED_PRODUCTS.map((item, index) => ({
    id: `panasonic-related-${index}`,
    brand: "Panasonic",
    brandAr: "باناسونيك",
    problem: index === 0 ? "full-refresh" : "bag-filter",
    problemLabel: index === 0 ? "أحتاج تجديد أكثر من قطعة" : "أحتاج كيس أو فلتر",
    name: item.name,
    summary:
      index === 0
        ? "خيار مناسب عندما تحتاج أكثر من قطعة باناسونيك في طلب واحد."
        : "خيار مساعد للمحافظة على الشفط ونظافة الهواء داخل المكنسة.",
    price: `${item.price} ريال`,
    image: item.image,
    imageAlt: item.name,
    detailsHref: "/panasonic-brush",
    buyHref: item.url,
    badge: "منتج مكمل",
  })),
];

const brands = ["الكل", "باناسونيك", "هيتاشي"] as const;

const problems = [
  { id: "all", label: "كل الاحتياجات" },
  { id: "weak-cleaning", label: "ضعف التنظيف" },
  { id: "broken-hose", label: "لي أو عصا تالفة" },
  { id: "bag-filter", label: "كيس أو فلتر" },
  { id: "full-refresh", label: "تجديد كامل" },
] as const;

const guideSteps = [
  { title: "اعرف الشركة", body: "ابدأ باسم المكنسة: باناسونيك أو هيتاشي أو أرسل الصورة إذا غير متأكد." },
  { title: "حدد المشكلة", body: "ضعف تنظيف، لي مكسور، فرشة تالفة، أو كيس وفلتر يحتاج تبديل." },
  { title: "اطلب من المتجر", body: "نقلك للمنتج في متجر مِقَشّة الرئيسي يتم بعد التأكد من القطعة." },
];

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<(typeof brands)[number]>("الكل");
  const [selectedProblem, setSelectedProblem] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const brandMatch = selectedBrand === "الكل" || product.brandAr === selectedBrand;
      const problemMatch = selectedProblem === "all" || product.problem === selectedProblem;
      return brandMatch && problemMatch;
    });
  }, [selectedBrand, selectedProblem]);

  const visibleProducts = filteredProducts.length > 0 ? filteredProducts : products.slice(0, 2);

  return (
    <main dir="rtl" className="min-h-screen bg-[#F7F3EB] text-[#211B13]">
      <header className="border-b border-[#E8DDCB] bg-white/90">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href={STORE.url} className="flex items-center gap-3">
            <img src={STORE.logo} alt={STORE.name} className="h-10 w-10 rounded-md object-cover" />
            <div>
              <p className="text-[16px] font-black leading-tight">{STORE.name}</p>
              <p className="text-[11px] font-bold text-[#8A775E]">دليل قطع الغيار</p>
            </div>
          </a>
          <a
            href={whatsappLink("السلام عليكم، أحتاج مساعدة في اختيار قطعة غيار لمكنستي")}
            className="rounded-md border border-[#D9CAB3] px-4 py-2 text-[13px] font-extrabold text-[#211B13] transition hover:border-[#A8894A]"
          >
            اسألنا عن القطعة
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-14">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-[13px] font-black text-[#A8894A]">مساعد اختيار قطع غيار المكانس</p>
          <h1 className="max-w-[700px] text-[34px] font-black leading-[1.25] md:text-[52px]">
            اعرف القطعة المناسبة لمكنستك قبل ما تطلب
          </h1>
          <p className="mt-5 max-w-[650px] text-[16px] font-medium leading-8 text-[#6E6253] md:text-[18px]">
            اختر الشركة أو المشكلة، وشوف القطعة الأقرب لاحتياجك. وإذا الموديل غير واضح، نوصلك مباشرة بواتساب للتأكد قبل الشراء من متجر مِقَشّة الرئيسي.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#finder" className="rounded-md bg-[#211B13] px-6 py-3 text-[15px] font-black text-white transition hover:bg-[#3A2C1C]">
              ابدأ الاختيار
            </a>
            <a href={STORE.url} className="rounded-md border border-[#D9CAB3] bg-white px-6 py-3 text-[15px] font-black text-[#211B13] transition hover:border-[#A8894A]">
              زيارة المتجر الرئيسي
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {products.slice(0, 2).map((product) => (
            <a
              key={product.id}
              href={product.detailsHref}
              className="group overflow-hidden rounded-lg border border-[#E8DDCB] bg-white transition hover:border-[#A8894A]"
            >
              <div className="aspect-square bg-[#FBF7F0] p-5">
                <img src={product.image} alt={product.imageAlt} className="h-full w-full object-contain transition group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <p className="text-[12px] font-black text-[#A8894A]">{product.brand}</p>
                <h2 className="mt-1 text-[17px] font-black leading-7">{product.name}</h2>
                <p className="mt-2 text-[13px] font-bold text-[#6E6253]">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="finder" className="border-y border-[#E8DDCB] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-9 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="lg:border-l lg:border-[#E8DDCB] lg:pl-6">
              <h2 className="text-[22px] font-black">اختر بسرعة</h2>
              <p className="mt-2 text-[14px] leading-7 text-[#6E6253]">فلتر القطع حسب الشركة أو حسب المشكلة التي تواجهك.</p>

              <div className="mt-6">
                <p className="mb-3 text-[12px] font-black text-[#8A775E]">الشركة</p>
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setSelectedBrand(brand)}
                      className={`rounded-md border px-3 py-2 text-[13px] font-black transition ${
                        selectedBrand === brand
                          ? "border-[#211B13] bg-[#211B13] text-white"
                          : "border-[#E8DDCB] bg-[#FBF7F0] text-[#211B13] hover:border-[#A8894A]"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-[12px] font-black text-[#8A775E]">المشكلة</p>
                <div className="grid gap-2">
                  {problems.map((problem) => (
                    <button
                      key={problem.id}
                      type="button"
                      onClick={() => setSelectedProblem(problem.id)}
                      className={`rounded-md border px-3 py-2 text-right text-[13px] font-black transition ${
                        selectedProblem === problem.id
                          ? "border-[#A8894A] bg-[#F7F3EB] text-[#211B13]"
                          : "border-[#E8DDCB] bg-white text-[#6E6253] hover:border-[#A8894A]"
                      }`}
                    >
                      {problem.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-[12px] font-black text-[#A8894A]">النتائج المناسبة</p>
                  <h2 className="mt-1 text-[24px] font-black">قطع يمكن طلبها من المتجر الرئيسي</h2>
                </div>
                {filteredProducts.length === 0 && (
                  <p className="rounded-md bg-[#F7F3EB] px-3 py-2 text-[12px] font-bold text-[#6E6253]">
                    لم نجد تطابقًا مباشرًا، هذه أقرب خيارات متاحة.
                  </p>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {visibleProducts.map((product) => (
                  <article key={product.id} className="grid grid-cols-[112px_1fr] overflow-hidden rounded-lg border border-[#E8DDCB] bg-white sm:grid-cols-[150px_1fr]">
                    <div className="bg-[#FBF7F0] p-3">
                      <img src={product.image} alt={product.imageAlt} className="h-full min-h-[150px] w-full object-contain" />
                    </div>
                    <div className="flex min-w-0 flex-col p-4">
                      <div className="mb-2 flex flex-wrap gap-2">
                        <span className="rounded border border-[#D9CAB3] px-2 py-1 text-[11px] font-black text-[#8A775E]">{product.brandAr}</span>
                        <span className="rounded border border-[#E8DDCB] px-2 py-1 text-[11px] font-black text-[#6E6253]">{product.badge}</span>
                      </div>
                      <h3 className="text-[18px] font-black leading-7">{product.name}</h3>
                      <p className="mt-2 text-[13px] font-semibold leading-6 text-[#6E6253]">{product.summary}</p>
                      <p className="mt-3 text-[18px] font-black">{product.price}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <a href={product.detailsHref} className="rounded-md border border-[#D9CAB3] px-3 py-2 text-[12px] font-black text-[#211B13] transition hover:border-[#A8894A]">
                          التفاصيل والتوافق
                        </a>
                        <a href={product.buyHref} className="rounded-md bg-[#211B13] px-3 py-2 text-[12px] font-black text-white transition hover:bg-[#3A2C1C]">
                          اطلب من المتجر
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-5 px-5 py-10 md:grid-cols-3 md:px-8">
        {guideSteps.map((step, index) => (
          <div key={step.title} className="border-r-4 border-[#A8894A] bg-white px-5 py-5">
            <p className="text-[12px] font-black text-[#A8894A]">خطوة {index + 1}</p>
            <h2 className="mt-2 text-[18px] font-black">{step.title}</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#6E6253]">{step.body}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#211B13]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-5 px-5 py-9 text-white md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-[12px] font-black text-[#C9AE77]">غير متأكد من رقم الموديل؟</p>
            <h2 className="mt-2 text-[24px] font-black">أرسل صورة الملصق أو المكنسة ونحدد القطعة لك</h2>
            <p className="mt-2 max-w-[640px] text-[14px] font-medium leading-7 text-white/70">
              الهدف من هذا الموقع تقليل الحيرة قبل الشراء، ثم تحويلك للمتجر الرئيسي عندما تكون القطعة واضحة.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappLink("السلام عليكم، أريد إرسال صورة المكنسة لمعرفة القطعة المناسبة")}
              className="rounded-md bg-[#25D366] px-5 py-3 text-[14px] font-black text-white transition hover:bg-[#1fbd59]">
              تواصل واتساب
            </a>
            <a href={STORE.url} className="rounded-md border border-white/25 px-5 py-3 text-[14px] font-black text-white transition hover:border-white/60">
              المتجر الرئيسي
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
