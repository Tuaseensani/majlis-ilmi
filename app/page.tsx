"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />

      <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-4 pt-24 pb-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-brand-emerald/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold"
          >
            Research and Reference Education
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl drop-shadow-lg"
          >
            {t("title")}<br />
            <span className="text-brand-gold italic">{t("subtitle")}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl drop-shadow-md"
          >
            {t("description")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link 
              href="/publications" 
              className="group flex items-center justify-center gap-2 rounded-md bg-brand-gold px-8 py-4 font-bold text-brand-emerald transition-all hover:bg-[#b89322] hover:shadow-lg"
            >
              {t("exploreBtn")} 
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
            <Link 
              href="/about" 
              className="rounded-md border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/20"
            >
              {t("heritageBtn")}
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/50">{t("scroll")}</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={20} className="text-brand-gold" />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {/* USING TRANSLATIONS FOR STATS */}
              {[
                { number: "30,000+", label: t("stat1") },
                { number: "48+", label: t("stat2") },
                { number: "700+", label: t("stat3") },
                { number: "90+", label: t("stat4") },
              ].map((stat, i) => (
                <div key={i} className="border-gray-100 p-6 last:border-r-0 md:border-r">
                  <div className="mb-2 font-serif text-4xl font-bold text-brand-emerald md:text-5xl">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wide text-gray-500 md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="overflow-hidden py-32 px-4 bg-brand-cream">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            {/* USING TRANSLATIONS FOR LEGACY */}
            <h2 className="mb-8 font-serif text-4xl font-bold text-brand-emerald md:text-5xl">
              {t("legacyTitle")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {t("legacyDesc")}
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}