"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Mock Data Portfolio (Anda bisa menambahkannya nanti)
const portfolioItems = [
  { id: 1, category: "Handtapping", src: "/portofolio/Portofolio1.JPG", alt: "Traditional Handtapping Tattoo in Bali" },
  { id: 2, category: "Machine", src: "/portofolio/Portofolio2.JPG", alt: "Custom Black and Grey Machine Tattoo Canggu" },
  { id: 3, category: "Handpoke", src: "/portofolio/Portofolio3.JPG", alt: "Minimalist Handpoke Tattoo Art Bali" },
  { id: 4, category: "Handtapping", src: "/portofolio/Portofolio4.JPG", alt: "Professional Body Piercing North Kuta" },
  { id: 5, category: "Handtapping", src: "/portofolio/Portofolio5.JPG", alt: "Balinese Motif Handtapping Tattoo" },
  { id: 6, category: "Machine", src: "/portofolio/Portofolio6.JPG", alt: "Neo Traditional Color Tattoo Bali" },
  { id: 7, category: "Handpoke", src: "/portofolio/Portofolio7.JPG", alt: "Fine Line Handpoke Tattoo in Bali" },
  { id: 8, category: "Handpoke", src: "/portofolio/Portofolio8.JPG", alt: "Safe Piercing Studio near Canggu" },
  { id: 9, category: "Handtapping", src: "/portofolio/Portofolio9.JPG", alt: "Authentic Indonesian Tattoo Ritual" },
  { id: 10, category: "Machine", src: "/portofolio/Portofolio10.JPG", alt: "Black and Grey Realism Tattoo Bali" },
  { id: 11, category: "Handpoke", src: "/portofolio/Portofolio11.JPG", alt: "Custom Handpoke Design in Bali" },
  { id: 12, category: "Handpoke", src: "/portofolio/Portofolio12.JPG", alt: "Ear and Body Piercing Bali" },
  { id: 13, category: "Handtapping", src: "/portofolio/Portofolio13.JPG", alt: "Dotlinetattu Traditional Ink" },
  { id: 14, category: "Machine", src: "/portofolio/Portofolio14.JPG", alt: "Premium Machine Tattoo Artist Bali" },
  { id: 15, category: "Handpoke", src: "/portofolio/Portofolio15.JPG", alt: "Handpoke Tattoo Session in Bali" },
  { id: 16, category: "Handpoke", src: "/portofolio/Portofolio16.JPG", alt: "Piercing Jewelry Dotlinetattu" },
  { id: 17, category: "Handtapping", src: "/portofolio/Portofolio17.JPG", alt: "Cultural Handtapping Tattoo Canggu Area" }
];

const categories = ["All", "Handtapping", "Handpoke", "Machine", "Piercing"];

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Filter logika
  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Kategori Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all border ${
              activeFilter === category 
                ? "border-gingerbread bg-gingerbread text-white" 
                : "border-white/20 text-muted-foreground hover:border-gingerbread hover:text-gingerbread"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* CSS Masonry Grid */}
      {/* break-inside-avoid memastikan gambar tidak terpotong di tengah kolom */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-white/10"
            onClick={() => setLightboxImg(item.src)}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gingerbread/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ZoomIn size={32} />
                <span className="text-[10px] tracking-widest uppercase">View Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImg(null)} // Tutup saat background diklik
        >
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-gingerbread transition-colors p-2"
            onClick={() => setLightboxImg(null)}
          >
            <X size={40} />
          </button>
          
          <img 
            src={lightboxImg} 
            alt="Zoomed Tattoo Portfolio" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Mencegah tertutup saat gambar diklik
          />
        </div>
      )}
    </>
  );
}