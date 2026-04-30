import { PortfolioGallery } from "@/components/ui/portfolio-gallery";

// Metadata ini dibaca oleh Google saat merayapi halaman /portfolio
export const metadata = {
  title: "Work Examples & Portfolio | Dotlinetattu Studio in Bali",
  description: "Explore our gallery of traditional handtapping, handpoke, and custom machine tattoos by Silver Jerry at Dotlinetattu in Bali.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden">
      
      {/* 
        === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Konsistensi efek cahaya Burn Ginger dari atas
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        
        {/* SEO Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* REVISI KLIEN: Penggunaan kata "Work Example" */}
          <span className="text-gingerbread font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
            Work Examples
          </span>
          <h1 className="text-5xl md:text-7xl font-graduated mb-6">
            <span className="text-gingerbread">PORTFOLIO</span>
          </h1>
          
          {/* 
            === REVISI KLIEN: SEO LOKASI === 
            Menyisipkan Bali sebagai fokus utama, dan menargetkan Canggu, Ubud, Uluwatu, Denpasar
          */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            A visual documentation of our journey in preserving traditional Indonesian tattoo art and embracing modern custom designs. Browse through our collection of Handtapping, Handpoke, and Machine tattoos crafted in our <strong className="text-white font-normal">BALI</strong> studio. Proudly welcoming art collectors from <strong className="text-white font-normal">Canggu, Ubud, Uluwatu, Denpasar</strong>, and beyond.
          </p>
        </div>

        {/* Memanggil Client Component */}
        <PortfolioGallery />

      </div>
    </div>
  );
}