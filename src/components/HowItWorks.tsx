import { Code2, FileText, Sparkles } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Code2,
    title: "Instalezi widget-ul",
    description: "Copy-paste un cod pe site. Durează 2 minute.",
  },
  {
    number: "2",
    icon: FileText,
    title: "Completezi info clinicii",
    description: "Prețuri, servicii, program - tot ce trebuie să știe Chato.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Chato răspunde automat",
    description: "Instant, 24/7, exact cum ai răspunde tu.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-spacing">
      <div className="container-chato">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">
            Cum funcționează
          </h2>
          <p className="text-body text-muted-foreground">
            Setup simplu, fără cunoștințe tehnice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              {/* Step circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
