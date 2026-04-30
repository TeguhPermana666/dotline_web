import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About Dotlinetattu | Traditional Tattoo Studio in Bali",
  description: "Learn about Dotlinetattu, a premier tattoo studio in Bali. Specializing in traditional Balinese handpoke, handtapping, and custom machine tattoos.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden">
      
      {/* 
        === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Konsistensi dengan Landing Page, memberikan efek cahaya Burn Ginger dari atas
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        
        {/* SEO Header & Philosophy */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-gingerbread font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
            The Philosophy of Ink
          </span>
          <h1 className="text-4xl md:text-6xl font-graduated mb-8 leading-tight">
            ABOUT <span className="text-gingerbread">Dotlinetattu</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
            "For us, tattooing is a ritual. A sacred place where awareness, faith, and patience come together."
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
            
            {/* 
              === REVISI KLIEN: SEO LOKASI === 
              Menyisipkan Bali sebagai fokus utama, dan menargetkan Canggu, Ubud, Uluwatu, Denpasar
            */}
            <p>
              Located in the artistic heart of <strong className="text-white font-normal">BALI</strong>, Dotlinetattu is an exclusive tattoo studio dedicated to preserving ancient body art. While nestled in a private, peaceful space, we proudly welcome clients traveling from <strong className="text-white font-normal">Canggu, Ubud, Uluwatu, Denpasar</strong>, and across the globe to experience authentic traditional Handpoke and Handtapping tattoos.
            </p>
            <p>
              Our tattoo designs are deeply rooted in the traditions of Indonesian woven ornaments and interior carvings. We carefully develop and process these historical elements into highly personalized, custom tattoo art. A careful eye for body anatomy and a deep sensitivity to the tattooing process are our keys to unlocking the birthplace of every unique idea.
            </p>
          </div>
        </div>

        {/* SEO Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 border-y border-white/10 py-16 text-justify">
          <div className="space-y-4">
            <h3 className="text-2xl font-graduated text-gingerbread">TRADITIONAL INK</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              As a specialist in Balinese tattoo culture, we offer authentic <strong>Handtapping</strong> and <strong>Handpoke</strong> techniques. This machine-free process is perfect for those seeking a deeply spiritual and traditional tattoo experience in Bali.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-graduated text-gingerbread">MODERN MACHINE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Beyond tradition, our Bali tattoo studio provides top-tier <strong>Custom Machine Tattoos</strong>. We use high-quality ink and modern equipment to ensure flawless, long-lasting results for every collector visiting the island.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-graduated text-gingerbread">PIERCING STUDIO</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We also provide professional <strong>Body Piercing services</strong>. Operating with strict hygiene standards and premium medical-grade jewelry, ensuring a safe and comfortable piercing experience in Bali.
            </p>
          </div>
        </div>

        {/* Artist & Collaborator Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Silver Jerry */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden relative group">
              <img 
                src="/jerry.jpeg" 
                alt="Silver Jerry - Lead Tattoo Artist in Bali" 
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Lead Tattoo Artist</span>
              <h3 className="text-4xl font-graduated">SILVER JERRY</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The creative force behind Dotlinetattu. Jerry specializes in translating ancient Indonesian motifs into breathtaking contemporary tattoos.
              </p>
              <a href="https://instagram.com/silverjerry" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gingerbread hover:text-white transition-colors text-sm font-medium tracking-widest uppercase pt-4">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg> Follow Work
              </a>
            </div>
          </div>

          {/* RA.VA.NA */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Music & Art Collaborator</span>
              <h3 className="text-4xl font-graduated">RA.VA.NA</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Through an electronic music approach rooted in traditional nuances, his presence adds a new layer to our video process. It is a meeting of two practices, uniting rhythm, atmosphere, and energy where sound and ink lines coexist simultaneously.
              </p>
              <a href="https://instagram.com/ravana" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gingerbread hover:text-white transition-colors text-sm font-medium tracking-widest uppercase pt-4">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg> Discover Music
              </a>
            </div>
            <div className="w-full md:w-1/2 aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden relative group order-1 md:order-2">
              <img 
                src="/ravana.jpeg" 
                alt="RA.VA.NA - Music Collaborator Dotlinetattu" 
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}