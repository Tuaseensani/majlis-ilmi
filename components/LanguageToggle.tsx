"use client";

import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const router = useRouter();

  const toggleLanguage = () => {
    // Check if we are currently in Urdu
    const isUrdu = document.documentElement.lang === "ur";
    const newLocale = isUrdu ? "en" : "ur";
    
    // Save choice to cookie and refresh page to apply
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-semibold text-brand-emerald hover:text-brand-gold transition-colors"
    >
      <Globe size={18} />
      {/* Show English if currently in Urdu, and vice versa */}
      <span className="hidden md:block">English / اردو</span>
    </button>
  );
}