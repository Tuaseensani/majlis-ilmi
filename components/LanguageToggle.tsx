"use client";

import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const router = useRouter();

  const toggleLanguage = () => {
    const isUrdu = document.documentElement.lang === "ur";
    const newLocale = isUrdu ? "en" : "ur";
    
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-gold transition-colors"
    >
      <Globe size={18} />
      <span className="hidden md:block">English / اردو</span>
    </button>
  );
}