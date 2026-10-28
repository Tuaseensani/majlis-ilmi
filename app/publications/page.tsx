import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Book } from "lucide-react";
import Navbar from "../../components/Navbar";
import FadeIn from "../../components/FadeIn";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";

export default async function PublicationsPage() {
	// Use getTranslations for Server Components
	const t = await getTranslations("Publications");
	
	const cookieStore = await cookies();
	const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
	
	// Choose folder based on locale
	const folderName = locale === "ur" ? "publications-ur" : "publications";
	const publicationsDirectory = path.join(process.cwd(), "content", folderName);
	
	let files: string[] = [];
	// Safely check if folder exists
	if (fs.existsSync(publicationsDirectory)) {
		files = fs.readdirSync(publicationsDirectory).filter((file) => file.endsWith(".md"));
	}
	
	const publications = files.map((file) => {
		const markdown = fs.readFileSync(path.join(publicationsDirectory, file), "utf8");
		const { data, content } = matter(markdown);

		return {
			slug: file.replace(".md", ""), 
			title: data.title as string,
			author: data.author as string,
			year: data.year as string,
			category: data.category as string,
			description: content.trim(),
		};
	});

	return (
		<main className="min-h-screen bg-brand-cream">
			<Navbar />
			<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<FadeIn>
					<div className="mb-10">
						<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-emerald">
							Majlis-e-Ilmi Foundation
						</p>
						<h1 className="font-serif text-4xl font-bold text-brand-emerald">
							{t("headerTitle")}
						</h1>
						<p className="mt-4 text-gray-600 max-w-2xl">
							{t("headerDesc")}
						</p>
					</div>
				</FadeIn>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{publications.map((publication, index) => (
						<FadeIn key={publication.slug} delay={index * 0.1}>
							<Link href={`/publications/${publication.slug}`} className="group block h-full">
								<article className="flex h-full flex-col border border-gray-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-emerald hover:shadow-md">
									<div className="mb-5 flex size-11 items-center justify-center rounded-md bg-brand-emerald text-white group-hover:bg-brand-gold group-hover:text-brand-emerald transition-colors">										<Book size={22} aria-hidden="true" />
									</div>
									<p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-emerald">
										{publication.category} · {publication.year}
									</p>
									<h2 className="mb-2 font-serif text-2xl font-bold text-gray-900 group-hover:text-brand-emerald transition-colors">
										{publication.title}
									</h2>
									<p className="mb-4 text-sm text-gray-500">{publication.author}</p>
									<p className="leading-relaxed text-gray-700 line-clamp-3">
										{publication.description}
									</p>
								</article>
							</Link>
						</FadeIn>
					))}
					
					{publications.length === 0 && locale === "ur" && (
						<div className="col-span-full text-center py-12 text-gray-500">
							اردو میں کتابیں جلد شامل کی جائیں گی۔ (Urdu books coming soon)
						</div>
					)}
				</div>
			</section>
		</main>
	);
}