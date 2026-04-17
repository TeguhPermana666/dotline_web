import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "TESTIMONIAL", href: "/testimonial" },
  { name: "FAQ", href: "/faq" },
  { name: "APPRENTICES", href: "/apprentices" },
  { name: "BLOG", href: "/blog" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-graduated text-gingerbread tracking-tighter">
          DOTLINE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-medium tracking-[0.2em] hover:text-gingerbread transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Button variant="outline" className="rounded-none border-gingerbread text-gingerbread text-[10px] tracking-widest h-9 px-4">
          BOOK NOW
        </Button>
      </div>
    </nav>
  );
}