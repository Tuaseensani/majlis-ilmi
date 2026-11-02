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
  const tFooter = useTranslations("Footer"); 
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
        {/* Increased max-width to 1600px to give elements plenty of room */}
        <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Left: Logo and Organization Name */}
          <div className="flex w-1/3 items-center justify-start">
            <Link href="/" className="group flex items-center gap-2 lg:gap-3">
              <img 
                src="/logo.jpeg" 
                alt="Logo" 
                className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full border-2 border-brand-gold shadow-sm group-hover:scale-105 transition-transform shrink-0" 
              />
              <div className="flex flex-col">
                {/* Reduced text size on medium screens so it doesn't push the PillNav */}
                <span className="font-serif font-bold text-xs sm:text-sm xl:text-base text-white leading-tight">
                  {tFooter("brandName")}
                </span>
                <span className="text-[9px] lg:text-[10px] tracking-widest text-brand-gold uppercase">
                  Since 1931
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop PillNav (Using flex-1 to center it perfectly) */}
          <div className="hidden md:flex flex-1 justify-center">
            <PillNav
              items={navItems}
              activeHref={pathname}
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

          {/* Right: Language Toggle & Mobile Button */}
          <div className="flex w-1/3 items-center justify-end">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

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
            className="fixed inset-0 top-[6rem] z-40 bg-brand-emerald px-4 py-8 md:hidden flex flex-col h-[calc(100vh-6rem)]"
          >
            <nav className="flex flex-col gap-6 text-center mt-4">
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