import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// 1. Generate Static Params: Memberitahu Next.js artikel apa saja yang harus di-build saat deploy
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

// 2. Dynamic SEO Metadata: Mengambil judul & deskripsi langsung dari file MDX
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | Dotlinetattu Journal`,
      description: post.description,
      openGraph: {
        images: [post.coverImage],
      },
    };
  } catch (error) {
    return {
      title: "Not Found | Dotlinetattu",
    };
  }
}

// 3. Halaman Utama Artikel
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    // Jika artikel tidak ditemukan, lemparkan ke halaman 404 Next.js
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden">
      
      {/* 
        === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Konsistensi efek cahaya Burn Ginger dari atas menggantikan ornamen lama
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      {/* Tambahan class 'relative z-10' agar konten berada di atas pendar cahaya */}
      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        
        {/* Tombol Back */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-gingerbread transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gingerbread" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-gingerbread" />
              {post.author}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-graduated mb-8 leading-tight text-white">
            {post.title}
          </h1>

          {/* Cover Image */}
          <div className="w-full aspect-[21/9] md:aspect-[2.5/1] relative overflow-hidden border border-white/10 mb-12">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* 
          Article Body (MDX Content)
          Prose class dari Tailwind akan otomatis memformat h1, h2, p, ul, img dll 
          dari file Markdown menjadi rapi. Paragraf sudah diset justify agar rata kanan kiri.
        */}
        <div className="prose prose-invert prose-gingerbread max-w-none 
          prose-headings:font-graduated prose-headings:font-normal prose-headings:tracking-wide
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-light prose-p:text-justify
          prose-a:text-gingerbread hover:prose-a:text-gingerbread-hover prose-a:transition-colors
          prose-img:rounded-sm prose-img:border prose-img:border-white/10 prose-img:w-full
          prose-strong:text-white"
        >
          <MDXRemote source={post.content} />
        </div>

      </div>
    </article>
  );
}