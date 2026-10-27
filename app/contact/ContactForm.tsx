"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:info@majlisilmi.org?subject=${encodeURIComponent(
      `Website Inquiry: ${subject}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="mb-6 font-serif text-3xl font-bold text-brand-emerald">{t("formTitle")}</h2>
      <p className="text-gray-600 mb-8 text-sm">
        {t("formDesc")}
      </p>

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

        <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-emerald text-white px-8 py-4 rounded-md font-bold hover:bg-[#0a3a23] transition-colors">
          {t("fBtn")} <Send size={18} />
        </button>
      </form>
    </div>
  );
}