import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { cookies } from "next/headers";

export async function generateStaticParams() {
  const enDirectory = path.join(process.cwd(), "content/publications");
  const urDirectory = path.join(process.cwd(), "content/publications-ur");
  
  let files: string[] = [];
  if (fs.existsSync(enDirectory)) files = fs.readdirSync(enDirectory);
  
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function BookPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const folderName = locale === "ur" ? "publications-ur" : "publications";

  const filePath = path.join(process.cwd(), "content", folderName, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    // If the Urdu version doesn't exist yet, fallback to English
    const fallbackPath = path.join(process.cwd(), "content", "publications", `${slug}.md`);
    if (!fs.existsSync(fallbackPath)) {
      return (
        <main className="min-h-screen bg-brand-cream">
          <Navbar />
          <div className="max-w-3xl mx-auto px-4 py-24 text-center">
            <h1 className="text-4xl font-serif text-brand-emerald mb-4">Book Not Found</h1>
            <Link href="/publications" className="text-brand-gold hover:underline">
              Return to Publications
            </Link>
          </div>
        </main>
      );
    }
  }

  const readPath = fs.existsSync(filePath) ? filePath : path.join(process.cwd(), "content", "publications", `${slug}.md`);
  const fileContents = fs.readFileSync(readPath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/publications" className="inline-flex items-center gap-2 text-brand-emerald hover:text-brand-gold transition-colors mb-8 font-semibold">
          <ArrowLeft size={18} /> Back to Publications
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {data.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User size={16} className="text-brand-emerald" />
                <span>{data.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-emerald" />
                <span>{data.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-brand-emerald" />
                <span className="bg-emerald-50 text-brand-emerald px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {data.category}
                </span>
              </div>
            </div>
          </div>

          <hr className="border-gray-100 mb-8" />

          <div className="prose prose-lg prose-emerald max-w-none text-gray-700 leading-relaxed">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </main>
  );
}