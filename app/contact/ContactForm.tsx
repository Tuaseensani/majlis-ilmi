"use client";

import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { sendEmail } from "../../actions/email";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
      {/* Success Overlay */}
      {status === "success" && (
        <div className="absolute inset-0 z-20 bg-white/95 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
          <CheckCircle2 size={64} className="text-green-500 mb-4" />
          <h3 className="text-2xl font-serif font-bold text-brand-emerald mb-2">Message Sent!</h3>
          <p className="text-gray-600 mb-6">Thank you for reaching out. We will get back to you soon.</p>
          <button onClick={() => setStatus("idle")} className="bg-brand-emerald text-white px-6 py-2 rounded-md font-semibold hover:bg-brand-gold hover:text-brand-emerald transition-colors">
            Send Another Message
          </button>
        </div>
      )}

      <h2 className="mb-6 font-serif text-3xl font-bold text-brand-emerald">{t("formTitle")}</h2>
      <p className="text-gray-600 mb-8 text-sm">{t("formDesc")}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t("fName")}</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50" placeholder={t("fNamePlace")} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t("fEmail")}</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50" placeholder={t("fEmailPlace")} />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">{t("fSubject")}</label>
          <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50" placeholder={t("fSubjectPlace")} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{t("fMessage")}</label>
          <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-gray-50 resize-none" placeholder={t("fMessagePlace")}></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 bg-brand-emerald text-white px-8 py-4 rounded-md font-bold hover:bg-brand-gold hover:text-brand-emerald transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>Sending... <Loader2 size={18} className="animate-spin" /></>
          ) : (
            <>{t("fBtn")} <Send size={18} /></>
          )}
        </button>
      </form>
    </div>
  );
}