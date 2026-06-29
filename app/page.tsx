import { STORE } from "@/lib/store/constants";
import { whatsappLink } from "@/lib/store/products";

const storeHighlights = [
  {
    title: "قطع غيار للمكانس",
    body: "نوفر قطع تساعدك تعيد أداء المكنسة بدل استبدال الجهاز كامل.",
  },
  {
    title: "تأكد قبل الطلب",
    body: "إذا لم تعرف القطعة المناسبة، أرسل صورة الموديل ونساعدك قبل الشراء.",
  },
  {
    title: "طلب آمن من المتجر",
    body: "الشراء يتم من متجر مِقَشّة الرئيسي مع روابط السياسات والتوثيق.",
  },
];

const helpTopics = [
  "أحتاج قطعة غيار ولا أعرف اسمها",
  "أريد التأكد من توافق القطعة مع موديل المكنسة",
  "المكنسة ضعف تنظيفها أو تغيّر صوتها",
  "أريد الوصول للمتجر الرئيسي مباشرة",
];

const quickLinks = [
  { label: "زيارة متجر مِقَشّة", href: STORE.url },
  { label: "سياسة الاستبدال والاسترجاع", href: STORE.returnPolicy },
  { label: "توثيق المتجر", href: STORE.sbc },
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F7F3EB] text-[#211B13]">
      <header className="border-b border-[#E8DDCB] bg-white">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href={STORE.url} className="flex items-center gap-3" aria-label="متجر مِقَشّة">
            <img src={STORE.logo} alt={STORE.name} className="h-10 w-10 rounded-md object-cover" />
            <div>
              <p className="text-[16px] font-black leading-tight">{STORE.name}</p>
              <p className="text-[11px] font-bold text-[#8A775E]">قطع غيار المكانس</p>
            </div>
          </a>
          <a
            href={STORE.url}
            className="rounded-md bg-[#211B13] px-4 py-2 text-[13px] font-black text-white transition hover:bg-[#3A2C1C]"
          >
            دخول المتجر
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1120px] gap-8 px-5 py-12 md:grid-cols-[1fr_360px] md:px-8 md:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-[13px] font-black text-[#A8894A]">وصلت إلى صفحات مِقَشّة المساعدة</p>
          <h1 className="max-w-[760px] text-[34px] font-black leading-[1.25] md:text-[52px]">
            نساعدك تصل لقطعة غيار المكنسة المناسبة
          </h1>
          <p className="mt-5 max-w-[700px] text-[16px] font-medium leading-8 text-[#6E6253] md:text-[18px]">
            هذا الموقع مخصص لمساعدة العملاء الذين يصلون من محركات البحث. إذا كنت تبحث عن قطعة غيار أو تريد التأكد من التوافق، سنوجهك للمتجر الرئيسي أو لفريق خدمة العملاء قبل الطلب.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={STORE.url} className="rounded-md bg-[#211B13] px-6 py-3 text-[15px] font-black text-white transition hover:bg-[#3A2C1C]">
              زيارة المتجر الرئيسي
            </a>
            <a
              href={whatsappLink("السلام عليكم، وصلت من موقع قطع الغيار وأحتاج مساعدة")}
              className="rounded-md border border-[#D9CAB3] bg-white px-6 py-3 text-[15px] font-black text-[#211B13] transition hover:border-[#A8894A]"
            >
              تواصل واتساب
            </a>
          </div>
        </div>

        <aside className="border border-[#E8DDCB] bg-white p-5">
          <p className="text-[12px] font-black text-[#A8894A]">كيف نستفيدك؟</p>
          <ul className="mt-4 space-y-3">
            {helpTopics.map((topic) => (
              <li key={topic} className="flex gap-3 text-[14px] font-bold leading-7 text-[#4F4438]">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#A8894A]" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-y border-[#E8DDCB] bg-white">
        <div className="mx-auto grid max-w-[1120px] gap-4 px-5 py-9 md:grid-cols-3 md:px-8">
          {storeHighlights.map((item) => (
            <article key={item.title} className="border-r-4 border-[#A8894A] bg-[#FBF7F0] px-5 py-5">
              <h2 className="text-[18px] font-black">{item.title}</h2>
              <p className="mt-2 text-[14px] font-semibold leading-7 text-[#6E6253]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-[13px] font-black text-[#A8894A]">قبل شراء القطعة</p>
            <h2 className="mt-2 text-[28px] font-black leading-snug">أرسل رقم الموديل إذا كنت غير متأكد</h2>
            <p className="mt-3 text-[15px] font-medium leading-8 text-[#6E6253]">
              رقم الموديل غالبًا يكون على ملصق أسفل الجهاز أو خلفه. صورة واحدة واضحة تساعدنا نوجهك للقطعة الأنسب ونقلل احتمالية طلب قطعة غير متوافقة.
            </p>
          </div>
          <div className="bg-[#211B13] p-6 text-white">
            <p className="text-[13px] font-black text-[#C9AE77]">الخطوة الأسرع</p>
            <h3 className="mt-2 text-[24px] font-black">افتح واتساب وأرسل صورة الموديل</h3>
            <p className="mt-3 text-[14px] font-medium leading-7 text-white/70">
              سنرد عليك باسم القطعة المناسبة أو رابط المنتج في متجر مِقَشّة الرئيسي.
            </p>
            <a
              href={whatsappLink("السلام عليكم، أريد التأكد من قطعة غيار لمكنستي وسأرسل صورة الموديل")}
              className="mt-5 inline-flex rounded-md bg-[#25D366] px-5 py-3 text-[14px] font-black text-white transition hover:bg-[#1fbd59]"
            >
              تواصل مع خدمة العملاء
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1120px] px-5 py-9 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[13px] font-black text-[#A8894A]">روابط مفيدة</p>
              <h2 className="mt-1 text-[24px] font-black">كل الطلبات تتم عبر متجر مِقَشّة الرئيسي</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md border border-[#D9CAB3] px-4 py-3 text-[13px] font-black text-[#211B13] transition hover:border-[#A8894A]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
