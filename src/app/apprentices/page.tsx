import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Tattoo Apprentices | Dotlinetattu Studio Bali",
  description: "Meet the talented rising tattoo apprentices at Dotlinetattu Bali. Nurturing the next generation of Indonesian tattoo artists, welcoming clients from Canggu, Ubud, Uluwatu, and Denpasar.",
};

const apprenticesData = [
  {
    name: "JESSICA",
    role: "Tattoo Apprentice",
    image: "/jessica.jpg", // Siapkan gambar
    description: "Demonstrating extraordinary natural talent and dedication, Jessica achieved her status as an official tattoo apprentice at Dotlinetattu in a remarkably short time of just 2 weeks. Focusing on precision and traditional aesthetics, she is rapidly mastering the fundamental techniques of professional tattooing right here in our Bali studio.",
    instagram: "https://instagram.com/dotlinetattu"
  },
  {
    name: "FADLAN NANTO",
    role: "Tattoo Apprentice / Fine Arts",
    image: "/fadlan.jpg", // Siapkan gambar
    description: "Bringing a strong academic foundation to the world of ink, Fadlan became a tattoo apprentice directly from his background at the prestigious Indonesian Institute of Arts (ISI). His deep understanding of visual arts, anatomy, and cultural motifs allows him to bring a unique, fine-art perspective to his custom tattoo designs in Bali.",
    instagram: "https://instagram.com/dotlinetattu"
  }
];

export default function ApprenticesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden">
      
      {/* 
        === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Konsistensi efek cahaya Burn Ginger dari atas
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      {/* Header */}
      <div className="container px-6 mx-auto max-w-5xl mb-20 text-center relative z-10">
        <span className="text-gingerbread font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
          The Next Generation of Ink
        </span>
        <h1 className="text-4xl md:text-7xl font-graduated mb-6">
          OUR <span className="text-gingerbread">APPRENTICES</span>
        </h1>
        {/* 
          === REVISI KLIEN: SEO LOKASI === 
          Memasukkan target lokasi ke dalam paragraf pengantar
        */}
        <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed">
          At Dotlinetattu, we believe in nurturing raw talent and passing down the sacred knowledge of traditional and modern tattooing. Meet our dedicated apprentices shaping the future of <strong className="text-white font-normal">BALI'S</strong> tattoo artistry, ready to welcome clients from <strong className="text-white font-normal">Canggu, Ubud, Uluwatu, Denpasar</strong>, and beyond.
        </p>
      </div>

      {/* Apprentice List (Alternating Layout) */}
      <div className="container px-6 mx-auto max-w-5xl space-y-24 relative z-10 text-justify">
        {apprenticesData.map((apprentice, index) => (
          <div 
            key={apprentice.name} 
            // Teknik Tailwind untuk membalik posisi gambar-teks setiap baris genap di desktop
            className={`flex flex-col gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            
            {/* Kolom Gambar */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] relative group overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gingerbread/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none duration-500" />
              <img 
                src={apprentice.image} 
                alt={`${apprentice.name} - Tattoo Apprentice in Bali`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>

            {/* Kolom Teks */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <p className="text-xs text-gingerbread tracking-widest uppercase mb-2">
                  {apprentice.role}
                </p>
                <h2 className="text-4xl lg:text-5xl font-graduated">
                  {apprentice.name}
                </h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                {apprentice.description}
              </p>

              <div className="pt-4">
                <a 
                  href={apprentice.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-gingerbread hover:text-gingerbread transition-colors text-xs tracking-[0.2em] uppercase font-medium"
                >
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
                    </svg> View Portfolio
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA Bottom */}
      <div className="container px-6 mx-auto max-w-4xl text-center mt-32 pt-16 border-t border-white/10 relative z-10">
        <h3 className="text-2xl font-graduated mb-6">WANT TO GET TATTOOED BY OUR APPRENTICES?</h3>
        <p className="text-muted-foreground text-sm mb-8">
          Apprentice tattoos are done under the strict supervision of our senior artists at special rates. Contact us to check their availability.
        </p>
        <Link href="https://linkbio.co/Tattoo-Booking?utm_source=website" target="_blank">
          <Button className="bg-gingerbread hover:bg-gingerbread-hover text-white px-10 py-6 rounded-none tracking-widest text-xs uppercase">
            INQUIRE NOW
          </Button>
        </Link>
      </div>

    </div>
  );
}