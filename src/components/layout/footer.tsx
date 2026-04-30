import Link from "next/link";
import { MapPin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    // JSON-LD for local SEO Business
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TattooParlor",
        "name": "Dotlinetattu",
        "image": "https://dotlinetattu.com/logo.png",
        "description": "Premium traditional and modern tattoo studio in Bali. Art by Silver Jerry.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dalung, Kuta Utara",
            "addressRegion": "Bali",
            "addressCountry": "ID"
        },
        "telephone": "+628xxxxxxxxx", // Jangan lupa isi dengan nomor WhatsApp asli
        "url": "https://dotlinetattu.com" 
    };

    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            {/* Injeksi SEO JSON-LD in DOM */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <div className="container px-6 mx-auto">
                {/* GRID SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    
                    {/* 1. Brand Info & CTAs */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-graduated text-gingerbread">
                            Dotlinetattu 
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                            Traditional Indonesian Tattoo Artistry. Rooted in culture, delivered with modern precision.
                        </p>
                        
                        {/* Area Tombol Booking & Instagram */}
                        <div className="flex flex-col gap-3 pt-2 max-w-xs">
                            <a 
                                href="https://linkbio.co/Tattoo-Booking?utm_source=website&utm_medium=organic" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-gingerbread hover:bg-[#9A4C2E] text-white px-6 py-3.5 text-xs tracking-[0.2em] uppercase text-center font-medium transition-colors"
                            >
                                Book Free Consultation
                            </a>
                            <a 
                                href="https://www.instagram.com/dotlinetattu/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="border border-white/20 hover:border-gingerbread hover:text-gingerbread text-white px-6 py-3.5 text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-colors"
                            >
                                {/* SVG Instagram anti-error */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                Follow Instagram
                            </a>
                        </div>

                        {/* Kontak Tambahan */}
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="p-2.5 border border-white/10 rounded-full hover:border-gingerbread hover:text-gingerbread transition-all text-muted-foreground">
                                <MessageCircle size={18} />
                            </a>
                            <a href="mailto:silverjerryink@gmail.com" className="p-2.5 border border-white/10 rounded-full hover:border-gingerbread hover:text-gingerbread transition-all text-muted-foreground">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* 2. Sitemap Links */}
                    <div>
                        <h3 className="text-white font-medium tracking-[0.2em] mb-6 text-sm">SITEMAP</h3>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                        {/* PERBAIKAN: Menghapus 'Book Consultation' agar tidak memicu link internal yang rusak (404) */}
                        {['Home', 'About', 'Portfolio', 'Testimonials', 'FAQ', 'Apprentices', 'Blog'].map((item) => (
                            <Link 
                                key={item} 
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-muted-foreground hover:text-gingerbread text-sm transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                        </div>
                    </div>

                    {/* 3. Location */}
                    <div>
                        <h3 className="text-white font-medium tracking-[0.2em] mb-6 text-sm">STUDIO</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-muted-foreground text-sm">
                                <MapPin size={18} className="text-gingerbread shrink-0 mt-0.5" />
                                {/* PERBAIKAN: Alamat dirapikan agar tidak ada break line yang kosong */}
                                <p>Dalung, Kuta Utara<br />Kabupaten Badung, Bali</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-4 italic">
                                *By appointment only. Please book your consultation online.
                            </p>
                        </div>
                    </div>

                </div> {/* END OF GRID */}

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider text-white/40">
                    <p>&copy; {currentYear} Dotlinetattu. All rights reserved.</p>
                    <p>Designed by @silverjery___</p>
                </div>
                
            </div>
        </footer>
    );
}