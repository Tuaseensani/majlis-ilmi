"use client";

import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-emerald shadow-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.jpeg" 
              alt="Majlis-e-Ilmi Logo" 
              className="w-12 h-12 object-cover rounded-full shadow-sm ring-2 ring-brand-gold group-hover:ring-white transition-all" 
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

                   <nav className="hidden md:flex gap-8 font-medium text-white/90">
            <Link href="/" className="hover:text-brand-gold transition-colors">{t("home")}</Link>
            <Link href="/about" className="hover:text-brand-gold transition-colors">{t("about")}</Link>
            <Link href="/publications" className="hover:text-brand-gold transition-colors">{t("publications")}</Link>
            <Link href="/library" className="hover:text-brand-gold transition-colors">{t("library")}</Link>
            <Link href="/gallery" className="hover:text-brand-gold transition-colors">{t("gallery")}</Link>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">{t("contact")}</Link>
          </nav>

          <div className="flex items-center gap-6">
            <LanguageToggle />
            <Link 
              href="/contact" 
              className="hidden md:flex bg-brand-gold text-brand-emerald px-6 py-2.5 rounded-md font-bold hover:bg-[#e0b53f] transition-all shadow-sm"
            >
              {t("visit")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}