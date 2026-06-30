"use client";

import { useEffect, useState } from "react";
import { clarityEvent, setupScrollTracking } from "@/lib/analytics/events";
import { STORE as store } from "@/lib/store/constants";
import { PANASONIC_FULL_KIT_PRODUCT as product } from "@/lib/store/products";
import { waLink } from "@/lib/utils/whatsapp";

const kitHighlights = [
  {
    title: "طقم عملي",
    desc: "يجمع أهم القطع التي قد تحتاجها مكنسة باناسونيك بدل البحث عنها قطعة قطعة.",
  },
  {
    title: "يرفع قيمة الطلب",
    desc: "مناسب للعميل الذي لا يريد قطعة واحدة فقط، بل تجهيز المكنسة بمجموعة أوسع.",
  },
  {
    title: "تأكد قبل الشراء",
    desc: "أرسل صورة موديل المكنسة على واتساب إذا لم تكن متأكدًا من التوافق.",
  },
];

const faqs = [
  {
    q: "هل هذا المنتج قطعة واحدة؟",
    a: "لا، هذا بكج كامل يجمع لي المكنسة، فرشة الشفط، زوج العصا، كيس فلتر، شبك، وأداة تنظيف الشبابيك.",
  },
  {
    q: "ما الفرق بينه وبين صفحة الفرشة؟",
    a: "صفحة الفرشة تستهدف قطعة واحدة، أما هذا البكج فيستهدف تجهيز المكنسة بعدة قطع في طلب واحد.",
  },
  {
    q: "هل يناسب كل موديلات باناسونيك؟",
    a: "يناسب الموديلات المذكورة في الصفحة. إذا لم تجد موديلك، تواصل معنا قبل الطلب.",
  },
  {
    q: "هل الطلب يتم من موقع قطع الغيار؟",
    a: "زر الطلب ينقلك مباشرة إلى منتج البكج في متجر مِقَشّة الرئيسي.",
  },
];

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function track(event: Parameters<typeof clarityEvent>[0]) {
  clarityEvent(event);
}

export default function PanasonicFullKitPage() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    track("landing_view");
    return setupScrollTracking();
  }, []);

  function chooseImage(index: number) {
    setActive(index);
    track("change_product_image");
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white text-[#1a1a1a]"
      style={{ fontFamily: "'Tajawal', sans-serif" }}
    >
      <header className="sticky top-0 z-50 border-b border-[#ede8df] bg-white">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-8">
          <a href={store.url} className="flex items-center gap-3">
            <img
              src={store.logo}
              alt={store.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-[17px] font-black">{store.name}</span>
          </a>
          <a
            href={waLink(`السلام عليكم، أريد التأكد من مناسبة هذا البكج لجهازي: ${product.name}`)}
            onClick={() => track("click_whatsapp")}
            className="flex items-center gap-2 rounded-md border border-[#ede8df] px-4 py-2 text-[14px] font-bold text-[#1a1a1a] transition hover:border-[#A8894A]"
          >
            <WaIcon />
            تواصل معنا
          </a>
        </div>
      </header>

      <section className="border-b border-[#ede8df] bg-[#f9f5ef]">
        <div className="mx-auto max-w-[1200px] px-6 py-9 text-center md:px-8">
          <p className="mb-3 text-[12px] font-black tracking-wide text-[#A8894A]">
            طقم كامل لمكنسة باناسونيك
          </p>
          <h1 className="text-[34px] font-black leading-snug text-[#1a1a1a] md:text-[46px]">
            {product.marketingTitle}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[17px] font-bold leading-relaxed text-[#555]">
            {product.sub}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-3">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#f5efe5] p-8">
              <span className="absolute right-4 top-4 rounded bg-[#1a1a1a] px-3 py-1 text-[12px] font-black text-white">
                {product.badge}
              </span>
              <img
                src={product.images[active].url}
                alt={product.images[active].alt}
                className="w-full object-contain transition-opacity duration-200"
                key={active}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, i) => (
                <button
                  key={image.url}
                  onClick={() => chooseImage(i)}
                  className={`flex h-[92px] items-center justify-center rounded-xl border-2 bg-[#f9f5ef] p-2 transition ${
                    active === i
                      ? "border-[#A8894A]"
                      : "border-transparent hover:border-[#ede8df]"
                  }`}
                  type="button"
                >
                  <img
                    src={image.url}
                    alt={`صورة ${i + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded border border-[#A8894A] px-2.5 py-1 text-[11px] font-bold text-[#7a6235]">
                  {product.badge}
                </span>
                <span className="rounded border border-[#A8894A] px-2.5 py-1 text-[11px] font-bold text-[#7a6235]">
                  {product.offer}
                </span>
                <span className="rounded border border-[#ede8df] px-2.5 py-1 text-[11px] font-bold text-[#666]">
                  {product.compat}
                </span>
              </div>
              <h2 className="text-[27px] font-black leading-snug text-[#1a1a1a]">
                {product.name}
              </h2>
              <p className="mt-3 text-[15px] font-semibold leading-8 text-[#666]">
                بدل ما تدور كل قطعة لحالها، هذا البكج يجمع أهم القطع التي قد تحتاجها لمكنسة باناسونيك في طلب واحد.
              </p>
            </div>

            <div className="border-y border-[#ede8df] py-5">
              <p className="mb-1.5 text-[12px] font-semibold text-[#999]">السعر</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[52px] font-black leading-none text-[#1a1a1a]">
                  {product.price}
                </span>
                <span className="text-[18px] font-bold text-[#666]">ريال</span>
                <span className="mr-auto text-[13px] font-bold text-[#A8894A]">
                  طقم كامل
                </span>
              </div>
            </div>

            <div>
              <p className="mb-3 text-[13px] font-black text-[#A8894A]">
                المجموعة تتكون من
              </p>
              <div className="grid grid-cols-2 gap-3">
                {product.includes.map((item) => (
                  <div key={item} className="rounded-xl border border-[#ede8df] bg-[#f9f5ef] p-4">
                    <p className="text-[14px] font-black text-[#1a1a1a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-1">
              <a
                href={product.url}
                onClick={() => track("click_buy_now")}
                className="rounded-xl bg-[#1a1a1a] py-4 text-center text-[16px] font-black text-white transition hover:bg-[#333]"
              >
                اطلب الآن — {product.price} ريال
              </a>
              <a
                href={waLink(`السلام عليكم، أريد التأكد من مناسبة هذا البكج لجهازي: ${product.name}`)}
                onClick={() => track("click_whatsapp")}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#ede8df] py-4 text-[15px] font-bold text-[#1a1a1a] transition hover:border-[#A8894A]"
              >
                <WaIcon />
                مو متأكد من الموديل؟ تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ede8df] bg-[#f9f5ef]">
        <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {kitHighlights.map((item) => (
              <div key={item.title} className="rounded-xl border border-[#ede8df] bg-white p-6">
                <p className="mb-2 text-[16px] font-black text-[#A8894A]">
                  {item.title}
                </p>
                <p className="text-[14px] leading-relaxed text-[#555]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ede8df]">
        <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[13px] font-black text-[#A8894A]">الموديلات المتوافقة</p>
              <h2 className="mt-1 text-[22px] font-black text-[#1a1a1a]">
                تأكد من رقم موديل مكنستك قبل الطلب
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {product.compatibleModels.map((model) => (
              <span key={model} className="rounded-lg border border-[#ede8df] bg-[#f9f5ef] px-3 py-3 text-center text-[13px] font-black text-[#1a1a1a]">
                {model}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ede8df] bg-[#f9f5ef]">
        <div className="mx-auto max-w-[900px] px-6 py-10 md:px-8">
          <h2 className="mb-6 text-[20px] font-black text-[#1a1a1a]">
            أسئلة شائعة
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="overflow-hidden rounded-xl border border-[#ede8df] bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-right text-[15px] font-bold text-[#1a1a1a]"
                  type="button"
                >
                  {faq.q}
                  <span className={`mr-4 text-[#A8894A] transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="border-t border-[#ede8df] px-5 py-4 text-[14px] leading-relaxed text-[#555]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ede8df] bg-[#1a1a1a]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-6 py-10 text-center md:flex-row md:justify-between md:px-8 md:text-right">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-[#A8894A]">
              طقم كامل · طلب واحد · دعم قبل الشراء
            </p>
            <h2 className="mt-2 text-[24px] font-black text-white">
              جهّز مكنستك بدل شراء كل قطعة لحالها
            </h2>
            <p className="mt-2 text-[14px] text-white/60">
              إذا لم تعرف التوافق، أرسل صورة الموديل قبل الطلب.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:min-w-[240px]">
            <a
              href={product.url}
              onClick={() => track("click_buy_now")}
              className="rounded-xl bg-[#A8894A] px-8 py-4 text-center text-[15px] font-black text-white transition hover:bg-[#96793e]"
            >
              اطلب البكج الآن
            </a>
            <a
              href={waLink("السلام عليكم، أريد الاستفسار عن بكج باناسونيك الكامل")}
              onClick={() => track("click_whatsapp")}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-3 text-[14px] font-bold text-white/80 transition hover:border-white/40"
            >
              <WaIcon />
              تواصل معنا
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ede8df] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ede8df] pb-6">
            <a href={store.url} className="flex items-center gap-2.5">
              <img
                src={store.logo}
                alt={store.name}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div>
                <div className="text-[15px] font-black text-[#1a1a1a]">
                  {store.name}
                </div>
                <div className="text-[11px] text-[#999]">قطع غيار أصلية معتمدة</div>
              </div>
            </a>
            <div className="flex flex-wrap gap-5 text-[13px] font-semibold text-[#888]">
              <a href={store.url} className="transition hover:text-[#A8894A]">
                المتجر
              </a>
              <a href={store.returnPolicy} className="transition hover:text-[#A8894A]">
                سياسة الاستبدال والاسترجاع
              </a>
              <a href={store.instagram} className="transition hover:text-[#A8894A]">
                إنستغرام
              </a>
              <a href={waLink("السلام عليكم")} className="transition hover:text-[#A8894A]">
                واتساب
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
