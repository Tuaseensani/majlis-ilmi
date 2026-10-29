"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react"; // Removed FacebookIcon and InstagramIcon
import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-brand-emerald text-white pt-16 pb-8 border-t-4 border-brand-gold">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <img 
                src="/logo.jpeg" 
                alt="Majlis-e-Ilmi Logo" 
                className="w-14 h-14 object-cover rounded-full shadow-sm ring-2 ring-brand-gold group-hover:ring-white transition-all" 
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg md:text-xl text-white leading-tight">
                  Majlis-e-Ilmi Foundation
                </span>
                <span className="text-xs tracking-widest text-brand-gold uppercase">
                  Since 1931
                </span>
              </div>
            </Link>
            <p className="text-blue-100/80 leading-relaxed mb-6 max-w-md">
              {t("desc")}
            </p>
            {/* Social Icons */}
                        {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-brand-gold uppercase tracking-wider">
                {t("followUs")}
              </span>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/groups/386603211351851/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-emerald transition-all"
                  aria-label="Facebook"
                >
                  {/* Facebook SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/majlisilmifoundation/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-emerald transition-all"
                  aria-label="Instagram"
                >
                  {/* Instagram SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-brand-gold">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-blue-100/80 hover:text-brand-gold transition-colors">{t("about")}</Link></li>
              <li><Link href="/publications" className="text-blue-100/80 hover:text-brand-gold transition-colors">{t("publications")}</Link></li>
              <li><Link href="/library" className="text-blue-100/80 hover:text-brand-gold transition-colors">{t("library")}</Link></li>
              <li><Link href="/gallery" className="text-blue-100/80 hover:text-brand-gold transition-colors">{t("gallery")}</Link></li>
              <li><Link href="/contact" className="text-blue-100/80 hover:text-brand-gold transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-brand-gold">{t("contactTitle")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-100/80">
                <MapPin size={20} className="text-brand-gold shrink-0 mt-1" />
                <a 
                  href="https://www.google.com/maps?q=24.8836923,67.0471191&z=17&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  {t("address")}
                </a>
              </li>
              <li className="flex items-start gap-3 text-blue-100/80">
                <Phone size={20} className="text-brand-gold shrink-0 mt-1" />
                <div className="flex flex-col" dir="ltr">
                  <span>+92 21 349 13 953</span>
                  <span>+92 21 348 60 959</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-blue-100/80">
                <Mail size={20} className="text-brand-gold shrink-0" />
                <span>info@majlisilmi.org</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/60">
          <p>&copy; {new Date().getFullYear()} {t("rights")}</p>
          <p>Designed for Majlis-e-Ilmi Foundation</p>
        </div>
      </div>
    </footer>
  );
}