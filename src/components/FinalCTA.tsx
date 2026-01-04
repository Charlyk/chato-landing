"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";

export function FinalCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    clinicName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="waitlist" className="section-spacing">
      <div className="container-chato">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-section mb-4">Rezervă-ți locul pe waitlist</h2>
            <p className="text-body text-muted-foreground">
              Primele 20 de clinici primesc 2 luni gratuite
            </p>
          </div>

          <Card className="card-hover">
            <CardHeader className="pb-0" />
            <CardContent>
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Ești pe listă!
                  </h3>
                  <p className="text-muted-foreground">
                    Te contactăm în curând când deschidem accesul.
                    <br />
                    Ai cele 2 luni gratuite rezervate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="clinicName">Numele clinicii</Label>
                    <Input
                      id="clinicName"
                      name="clinicName"
                      placeholder="ex: DentPlus"
                      value={formData.clinicName}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="contact@clinica.ro"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="0740 123 456"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary h-12 text-lg mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      "Vreau cele 2 luni gratuite"
                    )}
                  </Button>
                </form>
              )}

              <p className="text-center text-small mt-6">
                Nicio obligație. Te contactăm doar când lansăm.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
