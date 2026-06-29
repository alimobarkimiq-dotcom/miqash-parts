"use client";

import { useState } from "react";
import { STORE } from "@/lib/store/constants";
import { HITACHI_HOSE_KIT_PRODUCT as product, whatsappLink } from "@/lib/store/products";

const compatibleModels = product.compatibleModels;

const productImages = product.images.map((image) => image.url);

const WA_LINK = whatsappLink("مرحبا، أريد الاستفسار عن طقم لي مكنسة هيتاشي");

const reviews = [
  {
    name: "خالد",
    date: "15/6/2026",
    time: "16:28",
    stars: 5,
    text: "ممتاز جدا وأنصح فيه",
  },
  {
    name: "ناذر الخليل",
    date: "30/6/2024",
    time: "20:15",
    stars: 5,
    text: "كما طلبته .. رائع",
  },
  {
    name: "أمل بنت محمد",
    date: "30/1/2023",
    time: "20:08",
    stars: 5,
    text: "للأمانة طلبت من عندكم لي مكنسة هيتاشي كامل، منجد أتكلم لكم عن الجودة — مرا ممتازة، شكراً لكم 💞",
  },
];

const faqs = [
  {
    q: "هل الطقم يناسب كل موديلات هيتاشي؟",
    a: "لا، الطقم مخصص لموديلات محددة مذكورة في القائمة أعلاه. إذا كنت غير متأكد، تواصل معنا على واتساب قبل الطلب.",
  },
  {
    q: "كم قطعة تشمل الطقم؟",
    a: "الطقم يتكون من 3 قطع: اللي (الخرطوم المرن)، الفرشة (رأس التنظيف)، وزوج العصا الممتدة.",
  },
  {
    q: "كيف أعرف رقم موديل مكنستي؟",
    a: "رقم الموديل موجود على لافتة صغيرة أسفل الجهاز أو على الجانب. ابحث عن رقم يبدأ بـ CV- أو SS.",
  },
  {
    q: "كم يستغرق التوصيل؟",
    a: "التوصيل خلال 2-4 أيام عمل لمعظم مناطق المملكة.",
  },
  {
    q: "هل يمكن الإرجاع إذا لم تناسب مكنستي؟",
    a: "نعم، تواصل معنا عبر واتساب وسنحل المسألة معك.",
  },
];

export default function MiqashLandingPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [modelInput, setModelInput] = useState("");
  const [checkResult, setCheckResult] = useState<null | boolean>(null);
  const [matchedModel, setMatchedModel] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function checkCompatibility() {
    const val = modelInput.trim().toUpperCase().replace(/\s/g, "");
    if (!val) return;
    const found = compatibleModels.find((m) => {
      const norm = m.toUpperCase().replace(/[-\s]/g, "");
      const input = val.replace(/[-\s]/g, "");
      // strip leading prefix (CV / SS) from the stored model and compare suffix only
      const suffix = norm.replace(/^(CV|SS)/, "");
      return norm === input || suffix === input;
    });
    setMatchedModel(found ?? null);
    setCheckResult(found !== undefined);
  }

  return (
    <div
      dir="rtl"
      style={{ backgroundColor: "#F7F3EB", color: "#3D2F1A", fontFamily: "'Tajawal', Arial, sans-serif" }}
      className="min-h-screen"
    >

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background-color: #F7F3EB; }

        .btn-dark {
          background: #3D2F1A; color: #F7F3EB;
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 15px 24px; border-radius: 4px; font-size: 16px; font-weight: 700;
          text-decoration: none; border: none; cursor: pointer; width: 100%;
          transition: background 0.2s, transform 0.15s;
          font-family: 'Tajawal', Arial, sans-serif;
        }
        .btn-dark:hover { background: #2a1f10; transform: translateY(-1px); }

        .btn-wa {
          background: #25D366; color: #fff;
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 15px 24px; border-radius: 4px; font-size: 16px; font-weight: 700;
          text-decoration: none; border: none; cursor: pointer; width: 100%;
          transition: background 0.2s;
          font-family: 'Tajawal', Arial, sans-serif;
        }
        .btn-wa:hover { background: #1ebe5e; }

        .thumb {
          cursor: pointer; border: 2px solid transparent; border-radius: 4px;
          overflow: hidden; transition: border-color 0.2s; flex-shrink: 0;
          width: 60px; height: 60px; background: #F7F3EB;
        }
        .thumb.active { border-color: #A8894A; }
        .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .model-tag {
          background: #fff; border: 1px solid #EDE8DF; border-radius: 3px;
          padding: 5px 12px; font-size: 13px; font-weight: 600; color: #3D2F1A;
          letter-spacing: 0.04em; display: inline-block;
        }
        .feature-row { display: flex; align-items: flex-start; gap: 12px; }
        .dot { width: 7px; height: 7px; min-width: 7px; background: #A8894A; border-radius: 50%; margin-top: 7px; }

        .check-input {
          border: 1.5px solid #EDE8DF; border-radius: 4px; padding: 10px 14px;
          font-size: 15px; font-family: 'Tajawal', Arial, sans-serif;
          background: #fff; color: #3D2F1A; outline: none; flex: 1;
          transition: border-color 0.2s;
          text-align: right; direction: ltr;
        }
        .check-input:focus { border-color: #A8894A; }
        .check-btn {
          background: #A8894A; color: #fff; border: none; border-radius: 4px;
          padding: 10px 20px; font-size: 14px; font-weight: 700; cursor: pointer;
          font-family: 'Tajawal', Arial, sans-serif; white-space: nowrap;
          transition: background 0.2s;
        }
        .check-btn:hover { background: #8a6e35; }

        .faq-item { border-bottom: 1px solid #EDE8DF; }
        .faq-q {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 0; font-size: 15px; font-weight: 700; color: #3D2F1A;
          font-family: 'Tajawal', Arial, sans-serif; text-align: right; gap: 12px;
        }
        .faq-q:hover { color: #A8894A; }
        .faq-a { padding: 0 0 16px; font-size: 14px; color: #666; line-height: 1.7; }

        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; }
          .hero-img-col, .hero-info-col { width: 100% !important; }
          .hero-img-col { border-left: none !important; border-bottom: 1px solid #EDE8DF !important; }
          .hero-info-col { padding: 28px 20px !important; }
          .header-inner { padding: 0 20px !important; }
          .footer-row { flex-direction: column; gap: 14px; }
          .models-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .section-pad { padding: 40px 20px !important; }
        }
      `}</style>

      {/* ─── HEADER ─── */}
      <header style={{ backgroundColor: "#3D2F1A", padding: "13px 0" }}>
        <div className="header-inner" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href={STORE.url} target="_blank" rel="noopener noreferrer">
            <img src={STORE.logo} alt="مِقَشّة" style={{ height: 38, borderRadius: 5, objectFit: "contain", display: "block" }} />
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#A8894A", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <WaIcon size={17} />
            تواصل معنا
          </a>
        </div>
      </header>

      {/* ─── HOOK ─── */}
      <section className="section-pad" style={{ maxWidth: 1100, margin: "0 auto", padding: "44px 40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h1 style={{ fontSize: "clamp(20px, 4.5vw, 42px)", fontWeight: 900, lineHeight: 1.3, marginBottom: 12 }}>
            مكنسة هيتاشي ما تخدمك مثل أول؟
          </h1>
          <p style={{ fontSize: "clamp(15px, 2.5vw, 19px)", color: "#666", maxWidth: 540, margin: "0 auto" }}>
            هذا الطقم يجمع لك القطع الأساسية في طلب واحد
          </p>
        </div>

        {/* ─── PRODUCT CARD ─── */}
        <div className="hero-grid" style={{ display: "flex", backgroundColor: "#fff", border: "1px solid #EDE8DF", borderRadius: 8, overflow: "hidden" }}>

          {/* Images */}
          <div className="hero-img-col" style={{ width: "50%", borderLeft: "1px solid #EDE8DF" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "100%", backgroundColor: "#F7F3EB", overflow: "hidden" }}>
              <img src={productImages[activeImage]} alt="طقم لي مكنسة هيتاشي" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", gap: 8, padding: "12px 14px", borderTop: "1px solid #EDE8DF" }}>
              {productImages.map((src, i) => (
                <div key={i} className={`thumb${activeImage === i ? " active" : ""}`} onClick={() => setActiveImage(i)}>
                  <img src={src} alt={`صورة ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="hero-info-col" style={{ width: "50%", padding: "36px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <p style={{ color: "#A8894A", fontSize: 12, fontWeight: 700, marginBottom: 6, letterSpacing: "0.05em" }}>متجر مِقَشّة</p>
              <h2 style={{ fontSize: "clamp(18px, 2.8vw, 26px)", fontWeight: 900, lineHeight: 1.4, marginBottom: 14, color: "#3D2F1A" }}>
                طقم لي مكنسة هيتاشي كامل
              </h2>
              {/* Social proof row */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#A8894A"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#3D2F1A" }}>4.9</span>
                  <span style={{ fontSize: 13, color: "#888" }}>(18 تقييم)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, backgroundColor: "#F7F3EB", border: "1px solid #EDE8DF", borderRadius: 3, padding: "3px 9px" }}>
                  <CartIcon />
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#3D2F1A" }}>+2,226</span>
                  <span style={{ fontSize: 12, color: "#888" }}>عملية شراء</span>
                </div>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #EDE8DF" }} />

            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#A8894A", marginBottom: 12, letterSpacing: "0.05em" }}>محتويات الطقم</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "لي", desc: "الخرطوم المرن" },
                  { name: "فرشة", desc: "رأس التنظيف" },
                  { name: "زوج عصا", desc: "العصا الممتدة" },
                ].map((item) => (
                  <div key={item.name} className="feature-row">
                    <span className="dot" />
                    <div>
                      <span style={{ fontWeight: 700, fontSize: 14 }}>{item.name}</span>
                      <span style={{ color: "#666", fontSize: 13, marginRight: 5 }}>— {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* السعر */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: "#3D2F1A" }}>60</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#3D2F1A" }}>ريال</span>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["توصيل سريع", "جودة عالية", "دعم ما بعد البيع"].map((b) => (
                <span key={b} style={{ backgroundColor: "#F7F3EB", border: "1px solid #EDE8DF", borderRadius: 3, padding: "4px 10px", fontSize: 12, fontWeight: 600 }}>✓ {b}</span>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn-dark">
                <CartIcon />
                اطلب الآن
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <WaIcon size={19} />
                مو متأكد من الموديل؟ تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPATIBLE MODELS ─── */}
      <section className="section-pad" style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ backgroundColor: "#fff", border: "1px solid #EDE8DF", borderRadius: 8, padding: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span style={{ width: 3, height: 22, backgroundColor: "#A8894A", borderRadius: 2, display: "block", flexShrink: 0 }} />
            <h3 style={{ fontSize: 19, fontWeight: 800 }}>الموديلات المتوافقة</h3>
          </div>
          <p style={{ color: "#666", fontSize: 13, marginBottom: 20, paddingRight: 13 }}>
            رقم الموديل على لافتة أسفل الجهاز — تأكد منه قبل الطلب
          </p>
          <div className="models-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 9 }}>
            {compatibleModels.map((m) => (
              <span key={m} className="model-tag">{m}</span>
            ))}
          </div>
          <div style={{ marginTop: 20, padding: "12px 16px", backgroundColor: "#F7F3EB", borderRadius: 4, borderRight: "3px solid #A8894A" }}>
            <p style={{ fontSize: 13, color: "#555" }}>
              <strong>مو متأكد من الموديل؟</strong> استخدم أداة التحقق أدناه للتأكد قبل الطلب
            </p>
          </div>
        </div>
      </section>

      {/* ─── COMPATIBILITY CHECKER ─── */}
      <section className="section-pad" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px 48px" }}>
        <div style={{ backgroundColor: "#fff", border: "1px solid #EDE8DF", borderRadius: 8, padding: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ width: 3, height: 22, backgroundColor: "#A8894A", borderRadius: 2, display: "block", flexShrink: 0 }} />
            <h3 style={{ fontSize: 19, fontWeight: 800 }}>تأكد من توافق الطقم لمكنستك</h3>
          </div>
          <p style={{ color: "#666", fontSize: 13, marginBottom: 20, paddingRight: 13 }}>
            اكتب رقم موديل مكنستك وتأكد فوراً — مثال: CV-975F
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              className="check-input"
              type="text"
              placeholder="CV-975F"
              value={modelInput}
              onChange={(e) => { setModelInput(e.target.value); setCheckResult(null); setMatchedModel(null); }}
              onKeyDown={(e) => e.key === "Enter" && checkCompatibility()}
            />
            <button className="check-btn" onClick={checkCompatibility}>تحقق</button>
          </div>

          {checkResult === true && (
            <div style={{ marginTop: 16, padding: "12px 16px", backgroundColor: "#edfaf3", border: "1px solid #86efb3", borderRadius: 4, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>✅</span>
              <div>
                <p style={{ fontWeight: 700, color: "#166534", fontSize: 14 }}>الموديل متوافق!</p>
                <p style={{ color: "#166534", fontSize: 13 }}>
                  ما كتبته يتوافق مع <strong>{matchedModel}</strong> — يمكنك الطلب الآن.
                </p>
              </div>
            </div>
          )}
          {checkResult === false && (
            <div style={{ marginTop: 16, padding: "12px 16px", backgroundColor: "#fef3f2", border: "1px solid #fca5a5", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>❌</span>
                <div>
                  <p style={{ fontWeight: 700, color: "#991b1b", fontSize: 14 }}>الموديل غير مذكور في القائمة</p>
                  <p style={{ color: "#991b1b", fontSize: 13 }}>تواصل معنا للتأكد قبل الطلب</p>
                </div>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", borderRadius: 4, padding: "8px 14px", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                <WaIcon size={14} />
                استفسر عبر واتساب
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="section-pad" style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span style={{ width: 3, height: 22, backgroundColor: "#A8894A", borderRadius: 2, display: "block", flexShrink: 0 }} />
          <h3 style={{ fontSize: 19, fontWeight: 800 }}>تقييمات العملاء</h3>
        </div>
        <p style={{ color: "#666", fontSize: 13, marginBottom: 24, paddingRight: 13 }}>
          +2,226 عملية شراء · 18 تقييم · متوسط 4.9 من 5
        </p>
        <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ backgroundColor: "#fff", border: "1px solid #EDE8DF", borderRadius: 8, padding: "20px", display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={s <= r.stars ? "#A8894A" : "#EDE8DF"}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              {/* Review text */}
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#3D2F1A", flexGrow: 1 }}>«{r.text}»</p>
              {/* Reviewer info */}
              <div style={{ borderTop: "1px solid #EDE8DF", paddingTop: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {/* Avatar */}
                  <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#EDE8DF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#A8894A", flexShrink: 0 }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#3D2F1A", marginBottom: 1 }}>{r.name}</p>
                    <p style={{ fontSize: 11, color: "#888" }}>قام بالشراء · تم التقييم · {r.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-pad" style={{ maxWidth: 760, margin: "0 auto", padding: "0 40px 56px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <span style={{ width: 3, height: 22, backgroundColor: "#A8894A", borderRadius: 2, display: "block", flexShrink: 0 }} />
          <h3 style={{ fontSize: 19, fontWeight: 800 }}>الأسئلة الشائعة</h3>
        </div>
        <div style={{ backgroundColor: "#fff", border: "1px solid #EDE8DF", borderRadius: 8, padding: "8px 24px" }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" style={{ borderBottom: i === faqs.length - 1 ? "none" : "1px solid #EDE8DF" }}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8894A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openFaq === i && (
                <p className="faq-a">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="section-pad" style={{ maxWidth: 640, margin: "0 auto", padding: "0 40px 60px", textAlign: "center" }}>
        <p style={{ color: "#A8894A", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 10 }}>جاهز تعيد مكنستك لأفضل حالاتها؟</p>
        <h2 style={{ fontSize: "clamp(20px, 4vw, 30px)", fontWeight: 900, marginBottom: 24, lineHeight: 1.35 }}>
          اطلب طقمك الآن وصله لباب بيتك
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 380, margin: "0 auto" }}>
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn-dark">
            <CartIcon />
            اطلب من المتجر
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <WaIcon size={19} />
            مو متأكد من الموديل؟ تواصل معنا
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ backgroundColor: "#3D2F1A", borderTop: "1px solid #5a4428", padding: "32px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
            <a href={STORE.url} target="_blank" rel="noopener noreferrer">
              <img src={STORE.logo} alt="مِقَشّة" style={{ height: 30, borderRadius: 4, objectFit: "contain", display: "block" }} />
            </a>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {[
                { label: "المتجر", href: STORE.url },
                { label: "سياسة الاستبدال والاسترجاع", href: STORE.returnPolicy },
                { label: "إنستغرام", href: STORE.instagram },
                { label: "X", href: STORE.x },
                { label: "واتساب", href: whatsappLink("السلام عليكم") },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "#C4AA80", fontSize: 13, textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A8894A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C4AA80")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* SBC Badge */}
          <div style={{ borderTop: "1px solid #5a4428", paddingTop: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <a
              href={STORE.sbc}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
            >
              <img
                src="https://cdn.salla.network/images/sbc.png?v=2.0.5"
                alt="المركز السعودي للأعمال"
                style={{ height: 36, objectFit: "contain" }}
              />
              <span style={{ color: "#C4AA80", fontSize: 13, fontWeight: 600 }}>
                موثق لدى المركز السعودي للأعمال
              </span>
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #5a4428", margin: "16px 0" }} />
          <p style={{ color: "#8a6e45", fontSize: 11, textAlign: "center" }}>© 2025 مِقَشّة · جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}

// ─── Icons ───

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}