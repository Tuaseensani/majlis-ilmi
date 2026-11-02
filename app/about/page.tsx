"use client";

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { BookOpen, Quote, Landmark, Users, Target, Heart, CheckCircle2, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");
  const aboutPageT = useTranslations("AboutPage");

  const objectives = [
    { title: aboutPageT("obj1Title"), desc: aboutPageT("obj1Desc") },
    { title: aboutPageT("obj2Title"), desc: aboutPageT("obj2Desc") },
    { title: aboutPageT("obj3Title"), desc: aboutPageT("obj3Desc") },
    { title: aboutPageT("obj4Title"), desc: aboutPageT("obj4Desc") },
    { title: aboutPageT("obj5Title"), desc: aboutPageT("obj5Desc") },
    { title: aboutPageT("obj6Title"), desc: aboutPageT("obj6Desc") },
    { title: aboutPageT("obj7Title"), desc: aboutPageT("obj7Desc") },
    { title: aboutPageT("obj8Title"), desc: aboutPageT("obj8Desc") },
    { title: aboutPageT("obj9Title"), desc: aboutPageT("obj9Desc") },
    { title: aboutPageT("obj10Title"), desc: aboutPageT("obj10Desc") },
  ];

  const directors = [
    { title: aboutPageT("d1Title"), name: aboutPageT("d1Name") },
    { title: aboutPageT("d2Title"), name: aboutPageT("d2Name") },
    { title: aboutPageT("d3Title"), name: aboutPageT("d3Name") },
  ];

  // Helper function to get initials from names
  const getInitials = (name: string) => {
    // Remove titles like Dr. or Mr.
    const cleanName = name.replace(/(Dr\.|Mr\.|Mrs\.|Ms\.|Prof\.)\s/gi, "");
    const parts = cleanName.split(" ").filter(Boolean);
    if (parts.length === 0) return "";
    
    // Get the first letter of the first name and the last name
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  };

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

      {/* The Journey / Timeline */}
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

      {/* Mission & Vision Section */}
      <section className="py-24 px-4 bg-brand-cream border-t border-gray-200">
        <div className="mx-auto max-w-5xl">
          
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-brand-emerald mb-4">{aboutPageT("missionTitle")}</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-16 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 text-brand-gold/10 w-32 h-32 -z-0" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-emerald first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                  {aboutPageT("missionText")}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <h3 className="font-serif text-3xl font-bold text-brand-emerald mb-8 flex items-center gap-3">
              <Target className="text-brand-gold" /> {aboutPageT("objectivesTitle")}
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {objectives.map((obj, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full hover:shadow-md hover:border-brand-gold/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-brand-emerald p-2 rounded-full mt-1 shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{obj.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{obj.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-brand-emerald p-8 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <Globe className="absolute -bottom-6 -right-6 text-white/5 w-48 h-48" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-brand-gold p-4 rounded-full text-brand-emerald shrink-0">
                  <Heart size={40} />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold mb-4 text-brand-gold">{aboutPageT("commitmentTitle")}</h3>
                  <p className="text-emerald-50 leading-relaxed md:text-lg">
                    {aboutPageT("commitmentText")}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Executive Director Message */}
      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="bg-brand-cream p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <Quote className="absolute top-8 left-8 text-brand-gold/20 w-24 h-24 -z-0" />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold text-brand-emerald mb-6">{t("edTitle")}</h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed italic">
                  <p className="mb-4">{t("edP1")}</p>
                  <p className="mb-4">{t("edP2")}</p>
                  <p>{t("edP3")}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-bold text-brand-emerald">{t("edName")}</p>
                  <p className="text-sm text-gray-500">{t("edOrg")}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Board Members / Directors Section */}
      <section className="py-24 px-4 bg-brand-cream border-t border-gray-200">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-brand-emerald mb-4">{aboutPageT("boardTitle")}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{aboutPageT("boardDesc")}</p>
              <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mt-6"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directors.map((director, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-brand-gold/30 transition-all group">
                  {/* Replaced UserCircle with Elegant Initials */}
                  <div className="mx-auto w-20 h-20 bg-brand-emerald text-brand-gold font-serif text-2xl font-bold rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                    {getInitials(director.name)}
                  </div>
                  
                  <p className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-2">
                    {director.title}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-gray-900">
                    {director.name}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}