"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAudio } from "@/components/providers/audio-provider";

const tattooServices = [
  {
    id: "handtapping",
    title: "HANDTAPPING",
    subtitle: "Traditional Bali Art",
    locationLabel: "BALI",
    image: "/Handtapping.jpg",
    description: "Experience the most authentic traditional tattoo in Bali with our signature Balinese Handtapping method. Rooted in ancient Indonesian heritage, our expert artists bring cultural storytelling to life using rhythmic tapping techniques right here near in Canggu."
  },
  {
    id: "handpoke",
    title: "HANDPOKE",
    subtitle: "Manual Precision",
    locationLabel: "NORTH KUTA",
    image: "/Handpoke.jpg",
    description: "Searching for a precise, machine-free tattoo in Bali? Our handpoke tattoo process ensures minimal trauma to the skin while delivering incredibly detailed custom designs. It is the perfect choice for fine-line enthusiasts visiting Bali."
  },
  {
    id: "machine",
    title: "CUSTOM MACHINE",
    subtitle: "Modern Ink",
    locationLabel: "NEAR IN CANGGU",
    image: "/Machine.jpg",
    description: "Beyond traditional roots, Dotlinetattu is recognized as a premier custom tattoo studio in Bali offering high-quality machine work. From black and grey realism to bold neo-traditional ink, we turn your artistic vision into reality."
  },
  {
    id: "piercing",
    title: "PIERCING",
    subtitle: "Professional Studio",
    locationLabel: "BALI STUDIO",
    image: "/Piercing.jpg",
    description: "Complete your body art journey at the safest and most trusted piercing studio in Bali. We use medical-grade jewelry and strict sterilization protocols, making us the top recommendation for locals and tourists in the North Kuta area."
  }
];

export default function Home() {
  const { isPlaying } = useAudio();
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play Slideshow (Berpindah setiap 4 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % tattooServices.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background selection:bg-gingerbread selection:text-white overflow-hidden">
      
      {/* 
        === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Radial gradient glow di background atas untuk memberikan nuansa 
        Burn Ginger / Spiced Gingerbread tanpa merusak readability teks.
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-25 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] lg:min-h-[110vh] flex items-center justify-center overflow-hidden pt-24 lg:pt-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay z-0" />
        
        <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center mt-12 md:mt-0">
          <h2 className="text-gingerbread font-medium tracking-widest uppercase mb-4 md:mb-6 block animate-in slide-in-from-bottom duration-700 text-[10px] md:text-xs">
            Premium Traditional Tattoo Studio in Bali
          </h2>
          
          <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] leading-[0.9] md:leading-none font-graduated mb-6 md:mb-8 animate-in slide-in-from-bottom duration-1000 delay-150">
            ART BY <br /> <span className="text-gingerbread">SILVER JERRY</span>
          </h1>
          
          <p className="max-w-[90%] md:max-w-2xl text-muted-foreground mb-10 md:mb-12 animate-in fade-in duration-1000 delay-300 text-sm md:text-base leading-relaxed">
            Bringing authentic traditional and modern tattoo art in Bali, just minutes from Canggu. Specializing in Balinese Handtapping, Handpoke, and Custom Machine designs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20 px-4 sm:px-0">
            <a 
              href="https://linkbio.co/Tattoo-Booking?utm_source=website&utm_medium=organic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full bg-gingerbread hover:bg-gingerbread-hover text-white px-8 md:px-10 py-6 md:py-7 rounded-none text-sm md:text-lg">
                BOOK CONSULTATION
              </Button>
            </a>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 px-8 md:px-10 py-6 md:py-7 rounded-none text-sm md:text-lg hover:bg-white hover:text-black">
              VIEW PORTFOLIO
            </Button>
          </div>
        </div>

        {!isPlaying && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-0 animate-pulse opacity-50 pointer-events-none text-center w-full">
            <p className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase">Tap anywhere to play audio</p>
          </div>
        )}
      </section>

      {/* Local SEO & Slideshow Layout */}
      <section className="py-16 lg:py-24 bg-black/40 border-y border-white/5 overflow-hidden relative z-10 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* Kiri: Automated Slideshow */}
            <div className="w-full lg:w-5/12 relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gingerbread/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:block pointer-events-none" />
              
              <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden border border-white/10 rounded-sm lg:rounded-none">
                <div 
                  className="flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {tattooServices.map((service, index) => (
                    <div key={service.id} className="min-w-full h-full relative">
                      <img 
                        src={service.image} 
                        alt={`${service.title} Tattoo in Bali`} 
                        className={`object-cover w-full h-full transition-all duration-[2000ms] ${activeSlide === index ? 'grayscale-0 scale-100' : 'grayscale scale-110'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 lg:opacity-80 pointer-events-none" />
                    </div>
                  ))}
                </div>
                
                {/* Dynamic Floating Badge */}
                <div className="absolute bottom-6 md:bottom-8 left-4 md:left-8 border-l-2 border-gingerbread pl-3 md:pl-4 z-10 pointer-events-none">
                  <p className="text-white font-graduated text-lg md:text-2xl tracking-wider transition-all duration-500">
                    {tattooServices[activeSlide].locationLabel}
                  </p>
                  <p className="text-gingerbread text-[10px] md:text-xs tracking-[0.2em] uppercase mt-1">
                    {tattooServices[activeSlide].subtitle}
                  </p>
                </div>

                {/* Slideshow Indicators (Dots) */}
                <div className="absolute bottom-6 md:bottom-8 right-4 md:right-8 flex gap-1.5 md:gap-2 z-10">
                  {tattooServices.map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-1 transition-all duration-500 ${activeSlide === index ? 'w-4 md:w-6 bg-gingerbread' : 'w-1.5 md:w-2 bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Kanan: SEO Content & Interactive List */}
            <div className="w-full lg:w-7/12 space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="space-y-3 md:space-y-4">
                <span className="text-gingerbread font-medium tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase">
                  Local Expertise
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-graduated leading-[1.1] md:leading-tight">
                  THE BEST <span className="text-gingerbread block sm:inline">TATTOO EXPERIENCE</span> IN BALI
                </h2>
              </div>

              {/* 
                === REVISI KLIEN: SEO LOKASI ===
                Menambahkan target spesifik Canggu, Ubud, Uluwatu, dan Denpasar secara natural.
                Tulisan Dotlinetattu juga dipastikan tanpa spasi.
              */}
              <div className="text-muted-foreground leading-relaxed text-sm md:text-base pr-0 md:pr-10">
                <p>
                  Based in the artistic heart of <span className="text-white font-medium">BALI</span>, Dotlinetattu proudly welcomes clients from <span className="text-white font-medium">Canggu, Ubud, Uluwatu, Denpasar</span>, and across the globe. Experience authentic handtapping and world-class ink artistry in a premium, private setting.
                </p>
              </div>

              {/* Interactive Keyword-Rich Service List */}
              <div className="flex flex-col gap-1 md:gap-2 pt-2 md:pt-4 text-justify">
                {tattooServices.map((service, index) => (
                  <div 
                    key={service.id}
                    onClick={() => setActiveSlide(index)}
                    className={`cursor-pointer p-3 md:p-4 rounded-sm border-l-2 transition-all duration-500 ease-out ${
                      activeSlide === index 
                        ? 'border-gingerbread bg-white/5 opacity-100 translate-x-1 md:translate-x-2' 
                        : 'border-transparent opacity-50 hover:opacity-80 hover:bg-white/5'
                    }`}
                  >
                    <h4 className={`text-lg md:text-xl font-graduated tracking-wide transition-colors flex flex-col sm:flex-row sm:items-center ${activeSlide === index ? 'text-gingerbread' : 'text-white'}`}>
                      {service.title} 
                      <span className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-sans sm:ml-3 mt-1 sm:mt-0 opacity-70">
                        <span className="hidden sm:inline">— </span>{service.subtitle}
                      </span>
                    </h4>
                    
                    <div className={`grid transition-all duration-500 ease-in-out ${activeSlide === index ? 'grid-rows-[1fr] opacity-100 mt-2 md:mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed overflow-hidden pr-2 md:pr-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 md:pt-6">
                <Button variant="outline" className="w-full sm:w-auto rounded-none border-gingerbread text-gingerbread hover:bg-gingerbread hover:text-white px-8 py-5 md:py-6 tracking-widest text-xs">
                  LEARN OUR STORY
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}