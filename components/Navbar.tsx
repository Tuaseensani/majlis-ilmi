"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import PillNav from "./PillNav";
import LanguageToggle from "./LanguageToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("publications"), href: "/publications" },
    { label: t("library"), href: "/library" },
    { label: t("gallery"), href: "/gallery" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-brand-emerald shadow-md">
        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Logo (Visible only on mobile) */}
          <div className="flex items-center md:hidden">
            <Link href="/">
              <img 
                src="/logo.jpeg" 
                alt="Logo" 
                className="w-12 h-12 object-cover rounded-full border border-brand-gold" 
              />
            </Link>
          </div>

          {/* Desktop: Centered PillNav */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <PillNav
              items={navItems}
              activeHref={pathname}
              logo="/logo.jpeg" 
              logoHref="/"
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

          {/* Desktop: Language Toggle on Right */}
          <div className="ml-auto hidden md:block">
            <LanguageToggle />
          </div>

          {/* Mobile: Hamburger Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-brand-emerald px-4 py-8 md:hidden flex flex-col h-[calc(100vh-5rem)]"
          >
            <nav className="flex flex-col gap-6 text-center mt-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-serif font-bold transition-colors ${
                    pathname === item.href ? "text-brand-gold" : "text-white hover:text-brand-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom section of mobile menu */}
            <div className="mt-auto flex flex-col items-center gap-6 pb-8">
              <div className="text-white scale-125">
                <LanguageToggle />
              </div>
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-gold text-brand-emerald px-8 py-3 rounded-md font-bold text-lg w-full text-center"
              >
                {t("visit")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}