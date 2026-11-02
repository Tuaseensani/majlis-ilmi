"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import PillNav from "./PillNav";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("publications"), href: "/publications" },
    { label: t("library"), href: "/library" },
    { label: t("gallery"), href: "/gallery" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-emerald shadow-md">
            <div className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Big Custom Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img 
              src="/logo.jpeg" 
              alt="Logo" 
              className="w-16 h-16 object-cover rounded-full border-2 border-brand-gold shadow-lg hover:scale-105 transition-transform" 
            />
          </Link>
        </div>

        {/* Center: PillNav (Without the logo) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <PillNav
            items={navItems}
            activeHref={pathname}
            // Removed the logo prop completely so it's just the pills
            linkComponent={Link}
            theme="dark" 
            size="md"
            itemStyle="pill"
            hoverEffect="glide"
            indicator="pill"
            highlightColor="#F2C94C" 
            highlightTextColor="#002B7F" 
            barColor="rgba(0, 43, 127, 0.4)" 
            textColor="#ffffff"
          />
        </div>

        {/* Right: Language Toggle */}
        <div className="ml-auto">
          <LanguageToggle />
        </div>

      </div>
    </header>
  );
}