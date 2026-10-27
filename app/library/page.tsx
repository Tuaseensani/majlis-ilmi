"use client";

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { BookOpen, Search, GraduationCap, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LibraryPage() {
  const t = useTranslations("Library");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const book = formData.get("book");
    
    const mailtoLink = `mailto:info@majlisilmi.org?subject=${encodeURIComponent(
      `Research Request: ${book}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nRequested Book/Subject: ${book}\n\nPlease let me know if this is available to view at the library.`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />

      <section className="bg-brand-emerald py-24 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="mb-6 font-serif text-5xl font-bold md:text-6xl">{t("title")}</h1>
            <p className="text-lg text-emerald-100 leading-relaxed md:text-xl">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <FadeIn>
              <div className="bg-brand-cream p-8 rounded-2xl border border-gray-100 h-full">
                <div className="bg-brand-emerald text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{t("c1Title")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("c1Desc")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-brand-cream p-8 rounded-2xl border border-gray-100 h-full">
                <div className="bg-brand-emerald text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{t("c2Title")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("c2Desc")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-brand-cream p-8 rounded-2xl border border-gray-100 h-full">
                <div className="bg-brand-emerald text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{t("c3Title")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("c3Desc")}</p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-brand-cream">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <FadeIn>
              <div>
                <h2 className="font-serif text-4xl font-bold text-brand-emerald mb-6">{t("guideTitle")}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {t("guideDesc")}
                </p>
                
                <ul className="space-y-4">
                  {[t("g1"), t("g2"), t("g3"), t("g4"), t("g5"), t("g6")].map((rule, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand-gold/20 p-1 rounded-full text-brand-gold">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-bl-full -z-0"></div>
                <div className="relative z-10">
                  <h2 className="font-serif text-3xl font-bold text-brand-emerald mb-2">{t("reqTitle")}</h2>
                  <p className="text-gray-600 mb-8 text-sm">
                    {t("reqDesc")}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqNameLabel")}</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50" placeholder={t("reqNamePlace")} />
                    </div>
                    <div>
                      <label htmlFor="book" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqBookLabel")}</label>
                      <textarea id="book" name="book" required rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50 resize-none" placeholder={t("reqBookPlace")}></textarea>
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-emerald px-8 py-4 rounded-md font-bold hover:bg-[#b89322] transition-colors">
                      <Search size={18} /> {t("reqBtn")}
                    </button>
                  </form>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </main>
  );
}