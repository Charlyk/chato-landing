import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-chato flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Chato" width={32} height={32} />
          <span className="text-xl font-bold text-foreground">Chato</span>
        </a>

        {/* CTA Button */}
        <Button asChild className="btn-primary">
          <a href="#waitlist">Înscrie-te</a>
        </Button>
      </div>
    </nav>
  );
}
