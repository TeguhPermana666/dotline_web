import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Journal | Dotlinetattu Studio Bali",
  // REVISI KLIEN: Penambahan SEO lokasi secara natural di meta description
  description: "Read our latest articles on traditional tattoo culture, handtapping techniques, piercing aftercare, and life at our Bali studio, welcoming readers and clients from Canggu, Ubud, Uluwatu, and Denpasar.",
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden">
      
      {/* 
        === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Konsistensi efek cahaya Burn Ginger dari atas menggantikan blur ornament lama
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gingerbread font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
            Studio Journal
          </span>
          <h1 className="text-5xl md:text-7xl font-graduated mb-6">
            THE <span className="text-gingerbread">INK</span> CHRONICLES
          </h1>
          
          {/* 
            === REVISI KLIEN: SEO LOKASI === 
            Memasukkan target lokasi ke dalam paragraf pengantar
          */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Stories, insights, and cultural explorations from the artists at Dotlinetattu. Dive deep into the world of traditional Indonesian tattooing at our <strong className="text-white font-normal">BALI</strong> studio, an inspiring destination for ink collectors from <strong className="text-white font-normal">Canggu, Ubud, Uluwatu, Denpasar</strong>, and beyond.
          </p>
        </div>

        {/* Blog Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.slug} 
                className="group border border-white/10 bg-white/5 flex flex-col h-full hover:border-gingerbread/50 transition-colors duration-300"
              >
                {/* Thumbnail Image */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gingerbread/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    loading="lazy"
                  />
                </Link>

                {/* Content Box */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
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

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`} className="block mb-3">
                    <h2 className="text-2xl font-graduated leading-snug group-hover:text-gingerbread transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-8">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-white hover:text-gingerbread transition-colors mt-auto"
                  >
                    Read Article <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State if no markdown files are found */
          <div className="text-center py-20 border border-white/10 bg-white/5">
            <h3 className="text-xl font-graduated text-white mb-2">No Articles Found</h3>
            <p className="text-sm text-muted-foreground">Check back later for new stories from the studio.</p>
          </div>
        )}

      </div>
    </div>
  );
}