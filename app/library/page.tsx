"use client";

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { BookOpen, Search, GraduationCap, CheckCircle2, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { sendEmail } from "../../actions/email";

export default function LibraryPage() {
  const t = useTranslations("Library");
  const tPage = useTranslations("LibraryPage");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // ... (handleSubmit remains exactly the same)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const book = formData.get("book");
    
    const result = await sendEmail({
      name: name as string,
      email: email as string,
      subject: `Book Request: ${book}`,
      message: `Name/Institution: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nBook Requested / Topic:\n${book}`,
    });

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
    }
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

      {/* Detailed About the Library Section */}
      <section className="py-24 px-4 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-serif text-4xl font-bold text-brand-emerald mb-8 text-center">{tPage("legacyTitle")}</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed md:text-lg">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-emerald first-letter:float-left first-letter:mr-3 rtl:first-letter:float-right rtl:first-letter:mr-0 rtl:first-letter:ml-3">
                {tPage("p1")}
              </p>
              <p>{tPage("p2")}</p>
              <p>{tPage("p3")}</p>

              <div className="bg-white p-8 rounded-2xl border-l-4 border-brand-gold my-10 shadow-sm rtl:border-l-0 rtl:border-r-4">
                <h3 className="font-serif text-2xl font-bold text-brand-emerald mb-4">{tPage("collectionTitle")}</h3>
                <p className="mb-6">{tPage("collectionDesc")}</p>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    "Qur’anic Studies", "Exegesis (Tafsir)", "Hadith", "Asma al-Rijal", 
                    "Seerah ﷺ", "Islamic Jurisprudence", "History", "Lexicography", 
                    "Biography", "Economics", "Mysticism", "Ethics", 
                    "Arabic & Urdu Literature", "Comparative Religion", "Philosophy", 
                    "Science and Religion", "Sociology", "Theology", "Poetry", 
                    "Education", "Madrasa Studies", "Women’s Studies"
                  ].map((tag, i) => (
                    <span key={i} className="bg-emerald-50 text-brand-emerald px-3 py-1 rounded-full text-sm font-medium border border-emerald-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p>{tPage("p4")}</p>
              <p>{tPage("p5")}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Centered Request a Book Form */}
      <section className="py-24 px-4 bg-brand-cream border-t border-gray-200">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              
              {status === "success" && (
                <div className="absolute inset-0 z-20 bg-white/95 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                  <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-brand-emerald mb-2">{t("successTitle")}</h3>
                  <p className="text-gray-600 mb-6">{t("successDesc")}</p>
                </div>
              )}

              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/5 rounded-bl-full -z-0"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-4xl font-bold text-brand-emerald mb-4">{t("reqTitle")}</h2>
                  <p className="text-gray-600 md:text-lg">{t("reqDesc")}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqNameLabel")}</label>
                    <input type="text" id="name" name="name" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50 text-lg" placeholder={t("reqNamePlace")} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqEmailLabel")}</label>
                      <input type="email" id="email" name="email" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50 text-lg" placeholder={t("reqEmailPlace")} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqPhoneLabel")}</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50 text-lg" placeholder={t("reqPhonePlace")} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="book" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqBookLabel")}</label>
                    <textarea id="book" name="book" required rows={5} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50 text-lg resize-none" placeholder={t("reqBookPlace")}></textarea>
                  </div>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-semibold">Something went wrong. Please try again.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-3 bg-brand-gold text-brand-emerald px-8 py-5 rounded-xl font-bold text-lg hover:bg-[#e0b53f] transition-all transform hover:scale-[1.01] shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>Sending... <Loader2 size={22} className="animate-spin" /></>
                    ) : (
                      <>{t("reqBtn")} <Search size={22} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}