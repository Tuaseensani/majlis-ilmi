"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-brand-emerald p-2 rounded-lg text-white group-hover:bg-brand-gold transition-colors">
              <BookOpen size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-brand-emerald leading-tight">
                Majlis-e-Ilmi
              </span>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Since 1931
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-brand-emerald transition-colors">{t("home")}</Link>
            <Link href="/about" className="hover:text-brand-emerald transition-colors">{t("about")}</Link>
            <Link href="/publications" className="hover:text-brand-emerald transition-colors">{t("publications")}</Link>
            <Link href="/library" className="hover:text-brand-emerald transition-colors">{t("library")}</Link>
            <Link href="/contact" className="hover:text-brand-emerald transition-colors">{t("contact")}</Link>
          </nav>

          <div className="flex items-center gap-6">
            <LanguageToggle />
            <Link 
              href="/contact" 
              className="hidden md:flex bg-brand-emerald text-white px-6 py-2.5 rounded-md font-semibold hover:bg-brand-gold hover:text-brand-emerald transition-all shadow-sm hover:shadow"
            >
              {t("visit")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}