"use client";

import Link from "next/link";
import { BookOpen, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-brand-emerald text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-brand-gold p-2 rounded-lg text-brand-emerald">
                <BookOpen size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white leading-tight">
                  Majlis-e-Ilmi
                </span>
                <span className="text-xs tracking-widest text-brand-gold uppercase">
                  Since 1931
                </span>
              </div>
            </Link>
            <p className="text-emerald-100/80 leading-relaxed mb-6">
              {t("desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-brand-gold">{t("linksTitle")}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-emerald-100/80 hover:text-white transition-colors">{t("about")}</Link></li>
              <li><Link href="/publications" className="text-emerald-100/80 hover:text-white transition-colors">{t("publications")}</Link></li>
              <li><Link href="/library" className="text-emerald-100/80 hover:text-white transition-colors">{t("library")}</Link></li>
              <li><Link href="/contact" className="text-emerald-100/80 hover:text-white transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-brand-gold">{t("contactTitle")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-emerald-100/80">
                <MapPin size={20} className="text-brand-gold shrink-0 mt-1" />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-3 text-emerald-100/80">
                <Phone size={20} className="text-brand-gold shrink-0" />
                <span dir="ltr">+92 (021) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-emerald-100/80">
                <Mail size={20} className="text-brand-gold shrink-0" />
                <span>info@majlisilmi.org</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-emerald-100/60">
          <p>&copy; {new Date().getFullYear()} {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}