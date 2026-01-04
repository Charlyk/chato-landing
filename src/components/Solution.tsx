import { Card, CardContent } from "@/components/ui/card";
import { Clock, Database, Bell, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Răspunde instant, 24/7",
    description: "Și noaptea. Și în weekend. Și când ești în vacanță.",
    mockup: (
      <div className="bg-muted rounded-2xl p-4 space-y-3">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div className="message-bot max-w-[200px]">
            Bună! Cu ce te pot ajuta?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="message-user max-w-[180px]">
            Cât costă detartrajul?
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div className="message-bot max-w-[240px]">
            Detartrajul costă 150 RON și durează aproximativ 30 minute. Doriți să faceți o programare?
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Database,
    title: "Știe tot despre clinica ta",
    description:
      "Prețuri, servicii, program - configurezi o dată, răspunde mereu.",
    mockup: (
      <div className="bg-muted rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Database className="w-4 h-4" />
          <span>Dashboard Chato</span>
        </div>
        <div className="space-y-2">
          <div className="bg-card rounded-lg p-3 border border-border">
            <div className="text-xs text-muted-foreground">Detartraj</div>
            <div className="font-medium">150 RON</div>
          </div>
          <div className="bg-card rounded-lg p-3 border border-border">
            <div className="text-xs text-muted-foreground">Albire dentară</div>
            <div className="font-medium">800 RON</div>
          </div>
          <div className="bg-card rounded-lg p-3 border border-border">
            <div className="text-xs text-muted-foreground">Program</div>
            <div className="font-medium">L-V: 9:00-18:00</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Bell,
    title: "Te anunță când e nevoie",
    description: "Când pacientul are întrebare complexă, primești notificare.",
    mockup: (
      <div className="bg-muted rounded-2xl p-4">
        <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm">Chato</span>
                <span className="text-xs text-muted-foreground">acum</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Întrebare nouă de la un pacient care dorește să afle despre
                implant dentar...
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function Solution() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-chato">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">
            Cum te ajută <span className="text-primary">Chato</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
            >
              {/* Text content */}
              <div className="flex-1 text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-subheading mb-3">{feature.title}</h3>
                <p className="text-body text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Mockup */}
              <div className="flex-1 w-full max-w-md">{feature.mockup}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
