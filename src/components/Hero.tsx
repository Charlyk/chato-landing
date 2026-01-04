"use client";

import { Button } from "@/components/ui/button";
import { useChat } from "./ChatContext";

export function Hero() {
  const { openChat } = useChat();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary">
      <div className="container-chato text-center">
        {/* Eyebrow */}
        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium bg-white/20 text-white rounded-full">
          Pentru clinici stomatologice
        </span>

        {/* Headline */}
        <h1 className="text-hero max-w-4xl mx-auto mb-6 text-white">
          Asistentul AI care răspunde{" "}
          <span className="text-white/90">pacienților tăi 24/7</span>
        </h1>

        {/* Subheadline */}
        <p className="text-body text-white/80 max-w-2xl mx-auto mb-10">
          Chato preia întrebările repetitive.
          <br className="hidden sm:block" /> Tu te ocupi de tratamente.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg"
          >
            <a href="#waitlist">Înscrie-te pe waitlist</a>
          </Button>
          <Button
            onClick={openChat}
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-xl"
          >
            Sau întreabă-l pe Chato
          </Button>
        </div>

        {/* Scarcity text */}
        <p className="text-sm text-white/70">
          <span className="text-white font-semibold">2 luni gratuite</span>{" "}
          pentru primele 20 de clinici
        </p>
      </div>
    </section>
  );
}
