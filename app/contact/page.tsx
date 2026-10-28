import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />

      <section className="bg-brand-emerald py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="mb-4 font-serif text-5xl font-bold md:text-6xl">{t("title")}</h1>
            <p className="text-lg text-emerald-100">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            
            <FadeIn>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 h-full">
                <h2 className="mb-8 font-serif text-3xl font-bold text-brand-emerald">{t("infoTitle")}</h2>
                
                <div className="space-y-8">
                  
                  {/* Location with Google Maps Link */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-full text-brand-emerald shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{t("location")}</h3>
                      <a 
                        href="https://www.google.com/maps?q=24.8836923,67.0471191&z=17&hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm leading-relaxed hover:text-brand-gold transition-colors whitespace-pre-line"
                      >
                        {t("locDesc")}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-full text-brand-emerald shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{t("hours")}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {t("hoursDesc")}
                      </p>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-full text-brand-emerald shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{t("phone")}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed" dir="ltr">
                        {t("phoneNum1")} <br /> {t("phoneNum2")}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-full text-brand-emerald shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{t("email")}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">info@majlisilmi.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>
    </main>
  );
}