"use client";

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { BookOpen, Quote, Landmark, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />

      <section className="bg-brand-emerald py-24 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="mb-6 font-serif text-5xl font-bold md:text-6xl">{t("title")}</h1>
            <p className="text-lg text-emerald-100 leading-relaxed md:text-xl">
              {t("subtitle")}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-brand-emerald mb-4">{t("journeyTitle")}</h2>
              <p className="text-gray-600">{t("journeyDesc")}</p>
            </div>
          </FadeIn>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-gold/30 before:to-transparent">
            
            <FadeIn>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-gold text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Landmark size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-cream rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-brand-emerald text-lg">{t("t1Title")}</h3>
                    <span className="font-serif text-brand-gold font-bold">{t("t1Year")}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t("t1Desc")}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-gold text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <BookOpen size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-cream rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-brand-emerald text-lg">{t("t2Title")}</h3>
                    <span className="font-serif text-brand-gold font-bold">{t("t2Year")}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t("t2Desc")}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-gold text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Users size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-cream rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-brand-emerald text-lg">{t("t3Title")}</h3>
                    <span className="font-serif text-brand-gold font-bold">{t("t3Year")}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{t("t3Desc")}</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <Quote className="absolute top-8 left-8 text-brand-gold/20 w-24 h-24 -z-0" />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold text-brand-emerald mb-6">{t("edTitle")}</h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed italic">
                  <p className="mb-4">{t("edP1")}</p>
                  <p className="mb-4">{t("edP2")}</p>
                  <p>{t("edP3")}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-bold text-brand-emerald">{t("edName")}</p>
                  <p className="text-sm text-gray-500">{t("edOrg")}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}