import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ce este Chato?",
    answer:
      "Chato este un asistent AI care răspunde automat la întrebările pacienților pe site-ul clinicii tale stomatologice, 24/7. Preia întrebările repetitive despre prețuri, program, servicii - exact ce consumă mult timp din ziua ta.",
  },
  {
    question: "Cum funcționează Chato?",
    answer:
      "Simplu: copiezi un cod pe site (2 minute, ca un script de Google Analytics). În dashboard completezi informațiile clinicii - prețuri, servicii, program. Chato învață și începe să răspundă automat. Când e ceva ce nu știe, îți trimite notificare pe WhatsApp.",
  },
  {
    question: "Ce întrebări poate răspunde Chato?",
    answer:
      "Chato poate răspunde la întrebări despre: prețuri servicii (detartraj, albire, implant), program de lucru, adresă și indicații, servicii disponibile, cum se face o programare, informații despre proceduri, doctorii disponibili, metode de plată și dacă acceptați asigurări.",
  },
  {
    question: "Ce se întâmplă când Chato nu știe răspunsul?",
    answer:
      "Când Chato primește o întrebare pe care nu o știe, încearcă să ajute cu ce știe. Dacă nu poate, spune sincer, colectează datele pacientului (nume, telefon) și îți trimite notificare pe WhatsApp/email. Tu continui conversația direct cu pacientul.",
  },
  {
    question: "Cât costă Chato?",
    answer:
      "Planul Start e 150 RON/lună pentru 500 conversații - ajunge pentru majoritatea clinicilor mici-medii. Planul Business e 350 RON/lună cu 2000 conversații și analytics. Planul Pro e 700 RON/lună cu conversații nelimitate și WhatsApp. Pentru comparație, o recepționeră part-time costă minim 2000 RON/lună.",
  },
  {
    question: "E nevoie de cunoștințe tehnice pentru instalare?",
    answer:
      "Nu. Dacă poți face copy-paste, poți instala Chato. Setup-ul de bază durează sub 10 minute, iar configurarea completă (toate prețurile, serviciile) durează sub o oră.",
  },
  {
    question: "Ce platforme suportă Chato?",
    answer:
      "Chato funcționează pe orice website (WordPress, Wix, custom, etc.). În curând vom lansa și integrări cu Facebook Messenger și WhatsApp Business.",
  },
  {
    question: "Nu am website. Pot folosi Chato?",
    answer:
      "Momentan Chato funcționează pe website. Dar poți să te înscrii pe waitlist și te contactăm când lansăm integrarea cu Facebook Messenger - nu e nevoie de website pentru asta.",
  },
  {
    question: "Nu cred că un AI poate răspunde corect la întrebări medicale.",
    answer:
      "Înțelegerea asta e normală - multe chatbot-uri sunt proaste. Chato e diferit: nu inventează răspunsuri, ci răspunde doar pe baza informațiilor pe care le configurezi tu - prețuri exacte, servicii, program. E ca un FAQ inteligent, nu un doctor. Și când nu știe ceva, îți transferă conversația.",
  },
  {
    question: "Ce primesc dacă mă înscriu pe waitlist?",
    answer:
      "Clinicile de pe waitlist primesc 2 luni gratuite în loc de 14 zile trial standard, acces prioritar la funcționalități noi, și posibilitatea de a sugera ce feature-uri să adăugăm. Nicio obligație - doar îți rezervi locul.",
  },
];

export function FAQ() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-chato">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-section mb-4">Întrebări frecvente</h2>
            <p className="text-body text-muted-foreground">
              Tot ce trebuie să știi despre Chato
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
