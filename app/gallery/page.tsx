"use client";

import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { useTranslations } from "next-intl";
import { Camera } from "lucide-react";

export default function GalleryPage() {
  // You can add a "Gallery" section to your JSON files later. 
  // For now, we will hardcode the text so it works instantly.
  
  // Add your real image file names here (make sure they are in the `public` folder)
  const images = [
    "/hero-1.jpeg", 
    "/hero-2.jpeg", 
    "/hero-3.jpeg"
  ];

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
            <h1 className="mb-6 font-serif text-5xl font-bold md:text-6xl">Campus Gallery</h1>
            <p className="text-lg text-emerald-100 leading-relaxed md:text-xl">
              Explore the vibrant moments that make our library special — from rare manuscripts to the reading rooms.
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
                <div className="relative group overflow-hidden rounded-2xl shadow-sm border border-gray-100 break-inside-avoid">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-emerald/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-serif text-xl font-bold tracking-wider">
                      View Image
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}