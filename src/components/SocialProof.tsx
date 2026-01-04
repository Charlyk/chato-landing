import { MapPin, Users } from "lucide-react";

export function SocialProof() {
  return (
    <section className="social-proof-bar border-y border-border">
      <div className="container-chato">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-secondary" />
            <span>
              <span className="font-semibold text-foreground">12 clinici</span>{" "}
              înscrise
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>București, Cluj, Timișoara, Brașov</span>
          </div>
        </div>
      </div>
    </section>
  );
}
