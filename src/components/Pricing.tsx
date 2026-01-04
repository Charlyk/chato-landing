import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Start",
    price: "150",
    description: "Pentru clinici mici",
    features: [
      "500 conversații/lună",
      "1 utilizator",
      "Widget personalizabil",
      "Notificări email",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "350",
    description: "Cel mai popular",
    features: [
      "2000 conversații/lună",
      "2 utilizatori",
      "Analytics detaliat",
      "Notificări WhatsApp",
      "Suport prioritar",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "700",
    description: "Pentru clinici mari",
    features: [
      "Conversații nelimitate",
      "Utilizatori nelimitați",
      "Integrare WhatsApp",
      "API access",
      "Manager dedicat",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-chato">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Prețuri simple, fără surprize</h2>
          <p className="text-body text-muted-foreground">
            Alege planul potrivit pentru clinica ta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative card-hover ${
                plan.popular
                  ? "border-primary border-2 shadow-lg"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4">
                  Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-2">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> RON/lună</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  <a href="#waitlist">Înscrie-te</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonus text */}
        <div className="text-center">
          <p className="text-body">
            <span className="text-primary font-semibold">
              Primele 20 de clinici:
            </span>{" "}
            2 luni gratuite
          </p>
          <p className="text-small mt-2">Nicio obligație. Anulezi oricând.</p>
        </div>
      </div>
    </section>
  );
}
