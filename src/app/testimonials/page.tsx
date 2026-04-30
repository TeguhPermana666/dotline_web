import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Client Reviews | Dotlinetattu Studio Bali",
  description: "Read real reviews from our clients about their traditional handtapping, handpoke, and custom tattoo experiences at Dotlinetattu Bali, welcoming clients from Canggu, Ubud, Uluwatu, and Denpasar.",
};

export default function TestimonialPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden">
      
      {/* 
        === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Konsistensi efek cahaya Burn Ginger dari atas
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gingerbread font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
            Words From Our Clients
          </span>
          <h1 className="text-5xl md:text-7xl font-graduated mb-6">
            CLIENT <span className="text-gingerbread">VOICES</span>
          </h1>
          
          {/* 
            === REVISI KLIEN: SEO LOKASI === 
            Fokus Bali dan sebutkan target area secara natural
          */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Every tattoo tells a story, and so does every client. Read authentic reviews from art collectors across <strong className="text-white font-normal">BALI</strong>. Whether you're traveling from <strong className="text-white font-normal">Canggu, Ubud, Uluwatu, or Denpasar</strong>, discover why Dotlinetattu is the trusted choice for premium traditional and modern ink experiences.
          </p>
        </div>

        {/* Carousel Component */}
        <TestimonialCarousel />

        {/* Call to Action Bawah */}
        <div className="text-center mt-24 pt-16 border-t border-white/10 max-w-2xl mx-auto">
          <h3 className="text-3xl font-graduated mb-6 text-white">READY TO TELL YOUR STORY?</h3>
          <p className="text-muted-foreground mb-8 text-sm">
            Join hundreds of satisfied clients. Secure your appointment for a custom tattoo session today.
          </p>
          <a href="https://linkbio.co/Tattoo-Booking?utm_source=website" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gingerbread hover:bg-gingerbread-hover text-white px-10 py-7 rounded-none tracking-widest text-xs md:text-sm">
              BOOK YOUR SESSION
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
}