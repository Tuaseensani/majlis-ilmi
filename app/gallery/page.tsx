"use client";

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { Camera, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function GalleryPage() {
  const t = useTranslations("GalleryPage");
  
  const images = [
    "/hero-1.jpeg", 
    "/hero-2.jfif",
    "/hero-3.jfif",
    "/hero-4.jfif", 
    "/hero-5.jfif",
    "/hero-6.jfif",
    "/hero-7.jfif",
    "/hero-8.jfif",
    
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />

      {/* Page Header */}
      <section className="bg-brand-emerald py-24 px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <div className="bg-brand-gold p-4 rounded-full text-brand-emerald shadow-lg">
                <Camera size={40} />
              </div>
            </div>
            <h1 className="mb-6 font-serif text-5xl font-bold md:text-6xl">{t("title")}</h1>
            <p className="text-lg text-emerald-100 leading-relaxed md:text-xl">
              {t("desc")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Masonry Image Grid */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {images.map((src, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div 
                  className="relative group overflow-hidden rounded-2xl shadow-sm border border-gray-100 break-inside-avoid cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-emerald/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-serif text-xl font-bold tracking-wider">
                      {t("viewImage")}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged Gallery Image"
              className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}