export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F7F3EB] text-[#171717]"
      style={{ fontFamily: "'Tajawal', sans-serif" }}
    >
      <section className="mx-auto flex min-h-screen max-w-[1100px] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-[34px] font-black leading-snug md:text-[48px]">
          صفحات مقشة لقطع غيار المكانس
        </h1>

        <p className="mt-4 max-w-[640px] text-[17px] leading-8 text-[#666]">
          اختر صفحة المنتج المناسبة وتأكد من توافق القطعة مع موديل مكنستك قبل الطلب.
        </p>

        <div className="mt-10 grid w-full max-w-[760px] gap-4 md:grid-cols-2">
          <a
            href="/panasonic-brush"
            className="rounded-2xl border border-[#EDE8DF] bg-white p-6 text-right transition hover:border-[#A8894A]"
          >
            <p className="text-[13px] font-bold text-[#A8894A]">Panasonic</p>
            <h2 className="mt-2 text-[20px] font-black">
              فرشة مكنسة باناسونيك
            </h2>
            <p className="mt-2 text-[14px] leading-7 text-[#666]">
              صفحة مخصصة لفرشة مكنسة باناسونيك مع معلومات المنتج والطلب.
            </p>
          </a>

          <a
            href="/hitachi-hose-kit"
            className="rounded-2xl border border-[#EDE8DF] bg-white p-6 text-right transition hover:border-[#A8894A]"
          >
            <p className="text-[13px] font-bold text-[#A8894A]">Hitachi</p>
            <h2 className="mt-2 text-[20px] font-black">
              طقم لي مكنسة هيتاشي
            </h2>
            <p className="mt-2 text-[14px] leading-7 text-[#666]">
              طقم يجمع اللي والفرشة وزوج العصا مع التحقق من الموديل.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}