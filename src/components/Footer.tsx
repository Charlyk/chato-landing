import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container-chato">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Chato" width={32} height={32} />
            <span className="text-xl font-bold text-foreground">Chato</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:contact@chato.ro"
              className="hover:text-foreground transition-colors"
            >
              contact@chato.ro
            </a>
            <Separator orientation="vertical" className="h-4" />
            <span>Dezvoltat în România 🇷🇴</span>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-small">
          © {new Date().getFullYear()} Chato. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
