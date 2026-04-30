import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "FAQ & Location | Dotlinetattu Studio Bali",
  description: "Got questions about traditional tattoos? Find answers about handtapping, handpoke, piercing, and visit our tattoo studio in Bali, welcoming clients from Canggu, Ubud, Uluwatu, and Denpasar.",
};

// Data FAQ yang dioptimasi untuk SEO Lokal & Long-tail Keywords
const faqs = [
  {
    question: "What is the difference between Handtapping and Handpoke tattoos?",
    answer: "Both are traditional, machine-free tattoo methods. Handtapping is an ancient Indonesian technique using a stick and a mallet to rhythmically tap the ink into the skin. Handpoke uses a single needle operated manually by the artist's hand for extreme precision. Both offer a deeply cultural and less traumatic healing experience, available right here at our Bali studio."
  },
  {
    question: "Is getting a traditional tattoo safe and hygienic at Dotlinetattu?",
    answer: "Absolutely. Whether you choose Handtapping, Handpoke, or Custom Machine tattoos, we strictly enforce modern international hygiene standards. We use 100% single-use sterile needles, medical-grade equipment, and hospital-grade surface disinfectants to ensure your safety in Bali."
  },
  {
    question: "Do you create custom tattoo designs?",
    answer: "Yes! Silver Jerry specializes in custom designs that blend traditional Indonesian woven ornaments and interior carvings with your personal vision. We recommend booking a consultation so we can draw a personalized concept that fits your body anatomy perfectly."
  },
  {
    /* REVISI KLIEN: Pertanyaan dan Jawaban disesuaikan untuk menjangkau target area luas di Bali */
    question: "How do I book a tattoo session in Bali?",
    answer: "You can secure your spot by clicking the 'Book Consultation' button which will direct you to our official booking form. Since we operate mainly by appointment to maintain exclusivity and focus, we highly recommend booking your session in advance. Our studio is strategically located to warmly welcome clients traveling from Canggu, Ubud, Uluwatu, Denpasar, and across the globe."
  },
  {
    question: "Does Handtapping hurt more than a machine tattoo?",
    answer: "Most of our clients report that Handtapping and Handpoke actually hurt less than machine tattoos. Because the process is manual, it causes less trauma to the skin, resulting in less bleeding and a generally faster, more comfortable healing process."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative selection:bg-gingerbread selection:text-white overflow-hidden">
      
      {/* 
        === REVISI KLIEN: DOMINASI WARNA BURN GINGER === 
        Konsistensi efek cahaya Burn Ginger dari atas
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-gingerbread)_0%,_transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-gingerbread font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
            Studio Information
          </span>
          <h1 className="text-5xl md:text-7xl font-graduated mb-6">
            FAQ <span className="text-white/50">&</span> <span className="text-gingerbread">LOCATION</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mt-8">
            Got questions about your next tattoo? <br />
            <span className="italic text-gingerbread">Ask our artist directly at our Bali studio!</span>
          </p>
        </div>

        {/* SEO FAQ Accordion (Menggunakan HTML5 Native <details>) */}
        <div className="space-y-4 mb-24 text-justify">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group border border-white/10 bg-white/5 rounded-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-gingerbread/50 transition-colors duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-graduated text-lg lg:text-xl tracking-wide hover:text-gingerbread transition-colors duration-300">
                {/* Teks Pertanyaan */}
                <span className="group-hover:text-gingerbread transition-colors duration-300">
                  {faq.question}
                </span>
                
                {/* Icon Panah */}
                <span className="text-white/50 group-hover:text-gingerbread transition-all duration-300 transform group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </summary>
              
              <div className="p-6 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-white/5 mt-2 animate-in slide-in-from-top-2 group-open:bg-gingerbread/5 transition-colors duration-300">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Location & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          
          {/* Info Studio */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-graduated mb-6 text-gingerbread">VISIT US</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-muted-foreground">
                  <MapPin className="text-white shrink-0" size={20} />
                  <div>
                    <strong className="block text-white font-medium mb-1 tracking-wider uppercase text-xs">Dotlinetattu Studio</strong>
                    {/* REVISI: Teks alamat dirapikan, menghilangkan <br> yang tidak perlu dan fokus pada lokasi */}
                    <p className="text-sm leading-relaxed">Dalung, Kuta Utara<br/>Kabupaten Badung, Bali</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-muted-foreground">
                  <Clock className="text-white shrink-0" size={20} />
                  <div>
                    <strong className="block text-white font-medium mb-1 tracking-wider uppercase text-xs">Operating Hours</strong>
                    <p className="text-sm leading-relaxed">By Appointment Only<br/>Please book in advance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="https://linkbio.co/Tattoo-Booking?utm_source=website" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-gingerbread hover:bg-gingerbread-hover text-white rounded-none py-6 tracking-widest text-xs uppercase">
                Book Your Session
              </Button>
            </a>
          </div>

          {/* Google Maps Iframe */}
          <div className="lg:col-span-2 relative aspect-square md:aspect-[2/1] lg:aspect-auto bg-black border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-gingerbread/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-gingerbread/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.7946397611618!2d115.16573517587243!3d-8.615704991430032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd239875c75b12b%3A0xaa4d5ada60d8484d!2sDotlinetattu!5e0!3m2!1sen!2sid!4v1777278397963!5m2!1sen!2sid" 
                className="w-full h-full grayscale invert-[90%] hue-rotate-180 contrast-75 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 group-hover:hue-rotate-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Label Interaktif di Pojok Peta */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a 
                href="https://maps.app.goo.gl/pkpmXJHmPdj2Ahw79" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/80 backdrop-blur-md border border-gingerbread/50 text-gingerbread text-[10px] px-3 py-1.5 tracking-widest uppercase hover:bg-gingerbread hover:text-white transition-all"
                >
                Open In Google Maps
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}