"use client";

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { BookOpen, Search, GraduationCap, CheckCircle2, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { sendEmail } from "../../actions/email";

export default function LibraryPage() {
  const t = useTranslations("Library");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const book = formData.get("book");
    
    // We override the email in the server action to send it TO the org, 
    // but we include the user's email and phone in the body of the message.
    const result = await sendEmail({
      name: name as string,
      email: email as string, // The reply-to address
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
                
                {status === "success" && (
                  <div className="absolute inset-0 z-20 bg-white/95 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                    <CheckCircle2 size={64} className="text-green-500 mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-brand-emerald mb-2">Request Sent!</h3>
                    <p className="text-gray-600 mb-6">Our librarians will check the archives and get back to you.</p>
                  </div>
                )}

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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqEmailLabel")}</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50" placeholder={t("reqEmailPlace")} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqPhoneLabel")}</label>
                        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50" placeholder={t("reqPhonePlace")} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="book" className="block text-sm font-semibold text-gray-700 mb-2">{t("reqBookLabel")}</label>
                      <textarea id="book" name="book" required rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50 resize-none" placeholder={t("reqBookPlace")}></textarea>
                    </div>
                    
                    {status === "error" && (
                      <p className="text-red-500 text-sm font-semibold">Something went wrong. Please try again.</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-emerald px-8 py-4 rounded-md font-bold hover:bg-[#e0b53f] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>Sending... <Loader2 size={18} className="animate-spin" /></>
                      ) : (
                        <>{t("reqBtn")} <Search size={18} /></>
                      )}
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