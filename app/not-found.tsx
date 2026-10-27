import Link from "next/link";
import { BookX, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-cream flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-brand-emerald/10 p-6 rounded-full text-brand-emerald">
              <BookX size={64} strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="font-serif text-6xl font-bold text-brand-emerald mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            It seems the page you are looking for has been moved, removed, or perhaps never existed in our archives.
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-brand-emerald text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0a3a23] transition-colors"
          >
            <ArrowLeft size={18} /> Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}