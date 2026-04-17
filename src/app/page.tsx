"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Instagram, MessageCircle, Volume2, VolumeX } from "lucide-react";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnterStudio = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log("Autoplay blocked", err));
    }
  };

  return (
    <main className="relative min-h-screen bg-background selection:bg-gingerbread selection:text-white">
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        loop 
        src="/VoiceBackgroundDotline.mp4" 
        className="hidden" 
      />

      {/* Splash Screen / Enter Studio Overlay */}
      {!hasEntered && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000">
          <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
            <h1 className="text-7xl md:text-9xl text-gingerbread font-graduated tracking-tighter">
              DOTLINE TATTU
            </h1>
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
              Traditional Indonesian Tattoo Artistry
            </p>
            <Button 
              onClick={handleEnterStudio}
              variant="outline" 
              className="border-gingerbread text-gingerbread hover:bg-gingerbread hover:text-white px-12 py-6 text-lg rounded-none transition-all duration-300"
            >
              ENTER STUDIO
            </Button>
          </div>
        </div>
      )}

      {/* Main Content - Trigered Enter */}
      <div className={`transition-opacity duration-1000 ${hasEntered ? "opacity-100" : "opacity-0"}`}>
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] bg-cover bg-center opacity-20 pointer-events-none" />
          
          <div className="container px-6 relative z-10 text-center">
            <span className="text-gingerbread font-medium tracking-widest uppercase mb-4 block animate-in slide-in-from-bottom duration-700">
              ESTD 2018 — Bali, Indonesia
            </span>
            <h2 className="text-6xl md:text-[120px] leading-none font-graduated mb-8 animate-in slide-in-from-bottom duration-1000 delay-150">
              ART BY <br /> <span className="text-gingerbread">SILVER JERRY</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <Button size="lg" className="bg-gingerbread hover:bg-gingerbread-hover text-white px-10 py-7 rounded-none text-lg">
                BOOK CONSULTATION
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 px-10 py-7 rounded-none text-lg hover:bg-white hover:text-black">
                VIEW PORTFOLIO
              </Button>
            </div>
          </div>

          {/* Music Control Floating Button */}
          <button 
            onClick={() => {
              setIsMuted(!isMuted);
              if (audioRef.current) audioRef.current.muted = !isMuted;
            }}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-gingerbread hover:scale-110 transition-transform"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </section>

        {/* Services / Style Section */}
        <section className="py-24 bg-black/40">
          <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {['HANDTAPPING', 'HANDPOKE', 'MACHINE', 'PIERCING'].map((style) => (
                <div key={style} className="group cursor-pointer border-t border-white/5 pt-8 hover:border-gingerbread transition-colors">
                  <h3 className="text-2xl font-graduated group-hover:text-gingerbread transition-colors mb-2">
                    {style}
                  </h3>
                  <p className="text-xs text-muted-foreground tracking-tighter uppercase">
                    Traditional Technique
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}