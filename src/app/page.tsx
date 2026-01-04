import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { ChatProvider } from "@/components/ChatContext";

export default function Home() {
  return (
    <ChatProvider>
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </ChatProvider>
  );
}
