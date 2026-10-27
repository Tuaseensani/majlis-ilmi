import { BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-cream">
      <div className="animate-bounce mb-4">
        <div className="bg-brand-emerald p-4 rounded-xl text-white shadow-lg">
          <BookOpen size={40} />
        </div>
      </div>
      <h2 className="font-serif text-2xl font-bold text-brand-emerald tracking-widest uppercase">
        Majlis-e-Ilmi
      </h2>
      <p className="text-sm text-gray-500 mt-2">Loading archives...</p>
    </div>
  );
}