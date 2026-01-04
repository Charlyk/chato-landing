import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const questions = [
  "Cât costă detartrajul?",
  "Aveți loc mâine?",
  "Ce program aveți?",
];

export function Problem() {
  return (
    <section className="section-spacing">
      <div className="container-chato">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-section mb-4">
            Câte ore pierzi răspunzând la{" "}
            <span className="text-primary">aceleași întrebări?</span>
          </h2>
        </div>

        {/* Question cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {questions.map((question, index) => (
            <Card
              key={index}
              className="card-hover p-6 text-center"
            >
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-medium text-foreground">
                  &quot;{question}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-body text-muted-foreground max-w-xl mx-auto">
          Aceste întrebări vin zilnic. Răspunsul e mereu același.
          <br />
          <span className="text-foreground font-medium">
            Dar timpul tău nu e.
          </span>
        </p>
      </div>
    </section>
  );
}
