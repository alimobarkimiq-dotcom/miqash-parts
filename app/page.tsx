"use client";
import { useState } from "react";

const store = {
  name: "مِقَشّة",
  logo: "https://cdn.salla.sa/Wzrln/2tiiGhb6KmkwN31exgPiQjQPz9GWulZ8YUM1lbHg.jpg",
  url: "https://miqash.shop/ar",
  email: "miqash11@gmail.com",
  whatsapp: "966554670717",
  instagram: "https://instagram.com/miqash.shop",
  x: "https://x.com/miqash_shop",
};

const product = {
  name: "فرشة مكنسة باناسونيك أصلي",
  hook: "ضعف تنظيف المكنسة يبدأ من الفرشة",
  sub: "وفرنا لك فرشة أصلية ترجع قوة الأداء وتريح بالك",
  price: "٧٥",
  badge: "أصلي ١٠٠٪",
  origin: "ماليزي الصنع",
  compat: "يتوافق مع جميع موديلات باناسونيك",
  offer: "توصيل مجاني",
  url: "https://miqash.shop/ar/dPRVOxo",
  images: [
    "https://cdn.salla.sa/Wzrln/dad3c51d-90c0-4c99-9347-c02f68775347-1000x838.88888888889-DKhlGSHz6CFz23XLPxwPHR5QAN3AMdm2DA1Nplc8.jpg",
    "https://cdn.salla.sa/Wzrln/771a59cf-73a4-4c9d-88f8-66ea6eb7f5ae-1000x563.98104265403-qZYF2FvS4dUFlwsmemYO6KRrT5wDVrjO8C5qgGIa.jpg",
    "https://cdn.salla.sa/Wzrln/7039598a-d028-48d9-9d4d-f5a3f2244045-1000x1000-Q3qpIGwoNUVFUjDgrcGlNYeR2CqvH2LZcpQkHe2T.jpg",
  ],
};

const benefits = [
  { title: "شفط أقوى", desc: "تحسّن أداء الشفط على الأرضيات والسجاد فوراً" },
  { title: "حركة أسهل", desc: "تنزلق بسلاسة بدون جهد على جميع الأسطح" },
  { title: "توافق شامل", desc: "تناسب جميع موديلات باناسونيك بدون تعديل" },
];

const guarantees = [
  "قطعة أصلية ماليزية معتمدة من باناسونيك",
  "توصيل لجميع مناطق المملكة",
  "ضمان الجودة أو الاسترجاع",
];

const faqs = [
  {
    q: "هل تناسب موديل مكنستي؟",
    a: "تتوافق مع جميع موديلات باناسونيك. إذا كنت غير متأكد أرسل صورة مكنستك على واتساب ونتأكد لك مجاناً.",
  },
  {
    q: "متى أحتاج أبدل الفرشة؟",
    a: "عند ضعف الشفط، أو ظهور صوت غريب، أو تآكل شعيرات الفرشة القديمة.",
  },
  {
    q: "ما هي مدة التوصيل؟",
    a: "من يوم إلى ٤ أيام عمل حسب منطقتك.",
  },
  {
    q: "هل يمكن الإرجاع؟",
    a: "نعم، ضمان الجودة أو الاسترجاع في حال وجود أي مشكلة في القطعة.",
  },
];

const related = [
  {
    name: "بكج باناسونيك كامل",
    price: "١٣٠",
    url: "https://miqash.shop/ar/vXvrZya",
    image: "https://cdn.salla.sa/Wzrln/a05cda71-1bbb-463e-86f3-d5e269647506-1000x1000-u6BKIdb0HMr9Ui2TiNNqVrXo5w8BIbdU8hdNl17e.png",
  },
  {
    name: "كيس وشبك باناسونيك",
    price: "٧٠",
    url: "https://miqash.shop/ar/KjVVbew",
    image: "https://cdn.salla.sa/Wzrln/1acbfe44-ccc2-4afd-8bc0-7e0c22f05df1-1000x1000-3Z0TVaZyjtTi5UCd8Y8nZExg2AqTbdjKWMA77WQ3.png",
  },
];

function waLink(text: string) {
  return `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(text)}`;
}

const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export default function Home() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main dir="rtl" className="min-h-screen bg-white text-[#1a1a1a]"
      style={{ fontFamily: "'Tajawal', sans-serif" }}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-[#ede8df] bg-white">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <img src={store.logo} alt={store.name} className="h-10 w-10 rounded-full object-cover" />
            <span className="text-[17px] font-black">{store.name}</span>
          </div>
          <a href={waLink("السلام عليكم")}
            className="flex items-center gap-2 rounded-md border border-[#ede8df] px-4 py-2 text-[14px] font-bold text-[#1a1a1a] transition hover:border-[#A8894A]">
            <WaIcon />
            تواصل معنا
          </a>
        </div>
      </header>

      {/* ── HOOK ── */}
      <div className="border-b border-[#ede8df] bg-[#f9f5ef]">
        <div className="mx-auto max-w-[1200px] px-8 py-8 text-center">
          <h1 className="text-[32px] font-black leading-snug text-[#1a1a1a] md:text-[40px]">
            {product.hook}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#666]">
            {product.sub}
          </p>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="mx-auto max-w-[1200px] px-8 py-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* معرض الصور */}
          <div className="flex flex-col gap-3">
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-[#f9f5ef] p-10">
              <img src={product.images[active]} alt={product.name}
                className="w-full object-contain transition-opacity duration-200" key={active} />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`flex h-[88px] w-[88px] flex-1 items-center justify-center rounded-xl border-2 bg-[#f9f5ef] p-2 transition ${
                    active === i ? "border-[#A8894A]" : "border-transparent hover:border-[#ede8df]"
                  }`}>
                  <img src={img} alt={`صورة ${i + 1}`} className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* المعلومات */}
          <div className="flex flex-col gap-6">

            <div>
              <div className="mb-2 flex flex-wrap gap-2">
                <span className="rounded border border-[#A8894A] px-2.5 py-1 text-[11px] font-bold text-[#7a6235]">
                  {product.badge}
                </span>
                <span className="rounded border border-[#A8894A] px-2.5 py-1 text-[11px] font-bold text-[#7a6235]">
                  {product.origin}
                </span>
                <span className="rounded border border-[#ede8df] px-2.5 py-1 text-[11px] font-bold text-[#666]">
                  {product.compat}
                </span>
              </div>
              <h2 className="text-[26px] font-black leading-snug text-[#1a1a1a]">
                {product.name}
              </h2>
            </div>

            {/* السعر */}
            <div className="border-y border-[#ede8df] py-5">
              <p className="mb-1.5 text-[12px] font-semibold text-[#999]">السعر</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[52px] font-black leading-none text-[#1a1a1a]">{product.price}</span>
                <span className="text-[18px] font-bold text-[#666]">ريال</span>
                <span className="mr-auto text-[13px] font-bold text-[#A8894A]">{product.offer}</span>
              </div>
            </div>

            {/* الضمانات */}
            <div className="flex flex-col gap-3">
              {guarantees.map((g) => (
                <div key={g} className="flex items-center gap-2.5 text-[15px] font-semibold text-[#444]">
                  <span className="text-[#A8894A]">✓</span>
                  {g}
                </div>
              ))}
            </div>

            {/* الأزرار */}
            <div className="flex flex-col gap-3 pt-2">
              <a href={product.url}
                className="rounded-xl bg-[#1a1a1a] py-4 text-center text-[16px] font-black text-white transition hover:bg-[#333]">
                اطلب الآن — {product.price} ريال
              </a>
              <a href={waLink(`السلام عليكم، أريد التأكد من مناسبة هذا المنتج لجهازي: ${product.name}`)}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#ede8df] py-4 text-[15px] font-bold text-[#1a1a1a] transition hover:border-[#A8894A]">
                <WaIcon />
                غير متأكد من الموديل؟ تواصل معنا
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="border-t border-[#ede8df] bg-[#f9f5ef]">
        <div className="mx-auto max-w-[1200px] px-8 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-[#ede8df] bg-white p-6">
                <p className="mb-2 text-[16px] font-black text-[#A8894A]">{b.title}</p>
                <p className="text-[14px] leading-relaxed text-[#555]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="border-t border-[#ede8df]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-around gap-4 px-8 py-6">
          <div className="text-center">
            <p className="text-[24px] font-black text-[#A8894A]">١٢٠</p>
            <p className="mt-1 text-[12px] font-semibold text-[#888]">قطعة مباعة</p>
          </div>
          <div className="h-8 w-px bg-[#ede8df]" />
          <div className="text-center">
            <p className="text-[18px] text-[#A8894A]">★★★★★</p>
            <p className="mt-1 text-[12px] font-semibold text-[#888]">تقييم واحد</p>
          </div>
          <div className="h-8 w-px bg-[#ede8df]" />
          <div className="text-center">
            <p className="text-[24px] font-black text-[#A8894A]">١–٤ أيام</p>
            <p className="mt-1 text-[12px] font-semibold text-[#888]">مدة التوصيل</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-[#ede8df] bg-[#f9f5ef]">
        <div className="mx-auto max-w-[1200px] px-8 py-10">
          <h2 className="mb-6 text-[20px] font-black text-[#1a1a1a]">أسئلة شائعة</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-[#ede8df] bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-right text-[15px] font-bold text-[#1a1a1a]">
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

      {/* ── FINAL CTA ── */}
      <section className="border-t border-[#ede8df]">
        <div className="mx-auto max-w-[1200px] px-8 py-10">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#1a1a1a] px-8 py-10 text-center md:flex-row md:justify-between md:text-right">
            <div>
              <p className="text-[11px] font-bold tracking-widest text-[#A8894A]">أصلي ماليزي · توصيل مجاني</p>
              <p className="mt-2 text-[22px] font-black text-white">جاهز للطلب؟</p>
              <p className="mt-1 text-[14px] text-white/60">فرشة أصلية لمكنستك بـ {product.price} ريال شاملة التوصيل</p>
            </div>
            <div className="flex flex-col gap-3 md:min-w-[220px]">
              <a href={product.url}
                className="rounded-xl bg-[#A8894A] px-8 py-4 text-center text-[15px] font-black text-white transition hover:bg-[#96793e]">
                اطلب الآن — {product.price} ريال
              </a>
              <a href={waLink("السلام عليكم، أريد الاستفسار عن فرشة باناسونيك")}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-3 text-[14px] font-bold text-white/80 transition hover:border-white/40">
                <WaIcon />
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="border-t border-[#ede8df] bg-[#f9f5ef]">
        <div className="mx-auto max-w-[1200px] px-8 py-10">
          <p className="mb-4 text-[14px] font-bold text-[#999]">قد تحتاجها معها</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <a key={item.name} href={item.url}
                className="flex items-center gap-4 rounded-xl border border-[#ede8df] bg-white p-4 transition hover:border-[#A8894A]">
                <div className="flex h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-xl bg-[#f9f5ef]">
                  <img src={item.image} alt={item.name} className="h-[64px] w-[64px] object-contain" />
                </div>
                <div>
                  <p className="text-[14px] font-extrabold leading-snug text-[#1a1a1a]">{item.name}</p>
                  <p className="mt-1.5 text-[18px] font-black text-[#1a1a1a]">{item.price} ريال</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#ede8df] bg-white">
        <div className="mx-auto max-w-[1200px] px-8 py-8">

          {/* الصف الأول: الشعار + روابط التواصل */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#ede8df]">
            <div className="flex items-center gap-2.5">
              <img src={store.logo} alt={store.name} className="h-9 w-9 rounded-full object-cover" />
              <div>
                <div className="text-[15px] font-black text-[#1a1a1a]">{store.name}</div>
                <div className="text-[11px] text-[#999]">قطع غيار أصلية معتمدة</div>
              </div>
            </div>
            <div className="flex gap-5 text-[13px] font-semibold text-[#888]">
              <a href="https://miqash.shop/ar/brands/229855681" className="hover:text-[#A8894A] transition">باناسونيك</a>
              <a href={store.instagram} className="hover:text-[#A8894A] transition">إنستغرام</a>
              <a href={store.x} className="hover:text-[#A8894A] transition">X</a>
              <a href={waLink("السلام عليكم")} className="hover:text-[#A8894A] transition">واتساب</a>
            </div>
          </div>

          {/* الصف الثاني: روابط قانونية + توثيق */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5">
            <div className="flex gap-5 text-[12px] font-semibold text-[#aaa]">
              <a href="https://miqash.shop/ar/p/ddgGe" className="hover:text-[#1a1a1a] transition">سياسة الاستبدال والاسترجاع</a>
            </div>
            <a
              href="https://miqash.shop/ar/redirect/pages/1278257063"
              className="flex items-center gap-2 text-[12px] font-semibold text-[#aaa] hover:text-[#1a1a1a] transition"
            >
              <img src="https://cdn.salla.network/images/sbc.png?v=2.0.5" alt="المركز السعودي للأعمال" className="h-6 w-6 object-contain" />
              توثيق المركز السعودي للأعمال
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}