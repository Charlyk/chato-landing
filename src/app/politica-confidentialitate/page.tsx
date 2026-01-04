import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Chato",
  description:
    "Politica de confidențialitate Chato - cum colectăm, folosim și protejăm datele tale personale conform GDPR.",
};

export default function PrivacyPolicy() {
  return (
    <main className="py-20">
      <div className="container-chato">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-primary hover:underline mb-8 inline-block"
          >
            &larr; Înapoi la pagina principală
          </Link>

          <h1 className="text-section mb-4">Politica de Confidențialitate</h1>
          <p className="text-muted-foreground mb-8">
            Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-subheading">1. Introducere</h2>
              <p>
                Bine ai venit la Chato! Această Politică de Confidențialitate
                explică modul în care Chato (&quot;noi&quot;, &quot;nouă&quot;,
                &quot;al nostru&quot;) colectează, utilizează, stochează și
                protejează informațiile tale personale atunci când folosești
                site-ul nostru web chato.ro (&quot;Site-ul&quot;) și serviciile
                noastre.
              </p>
              <p>
                Ne angajăm să protejăm confidențialitatea ta și să procesăm
                datele tale personale în conformitate cu Regulamentul General
                privind Protecția Datelor (GDPR - Regulamentul UE 2016/679) și
                legislația română aplicabilă în domeniul protecției datelor.
              </p>
              <p>
                Te rugăm să citești cu atenție această politică pentru a
                înțelege practicile noastre privind datele tale personale și
                modul în care le vom trata.
              </p>
            </section>

            {/* 2. Data Controller */}
            <section className="space-y-4">
              <h2 className="text-subheading">2. Operatorul de Date</h2>
              <p>
                Operatorul de date responsabil pentru prelucrarea datelor tale
                personale este:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p>
                  <strong>Chato</strong>
                </p>
                <p>Email: contact@chato.ro</p>
                <p>Email DPO: privacy@chato.ro</p>
              </div>
              <p>
                Pentru orice întrebări legate de această Politică de
                Confidențialitate sau de modul în care procesăm datele tale, ne
                poți contacta folosind datele de mai sus.
              </p>
            </section>

            {/* 3. Data We Collect */}
            <section className="space-y-4">
              <h2 className="text-subheading">3. Datele pe Care le Colectăm</h2>
              <p>
                Colectăm și procesăm următoarele categorii de date personale:
              </p>

              <h3 className="font-semibold mt-6">
                3.1 Date furnizate direct de tine
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Date de identificare și contact:</strong> numele
                  clinicii, adresa de email, numărul de telefon
                </li>
                <li>
                  <strong>Date despre clinică:</strong> orașul/localitatea,
                  informații despre existența unui website, volumul estimat de
                  pacienți, principalele provocări
                </li>
                <li>
                  <strong>Conținutul conversațiilor:</strong> mesajele pe care
                  le trimiți prin chat-ul nostru AI, inclusiv informațiile pe
                  care alegi să le împărtășești în timpul conversației
                </li>
                <li>
                  <strong>Preferințe de comunicare:</strong> consimțământul
                  pentru a fi contactat
                </li>
              </ul>

              <h3 className="font-semibold mt-6">
                3.2 Date colectate automat
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Date tehnice:</strong> adresa IP, tipul și versiunea
                  browserului, sistemul de operare, tipul dispozitivului,
                  rezoluția ecranului, fusul orar
                </li>
                <li>
                  <strong>Date de utilizare:</strong> paginile vizitate, timpul
                  petrecut pe site, sursa de trafic (de unde ai venit), acțiunile
                  efectuate pe site
                </li>
                <li>
                  <strong>Date de localizare:</strong> țara și regiunea
                  aproximativă (derivate din adresa IP)
                </li>
              </ul>

              <h3 className="font-semibold mt-6">
                3.3 Date de la terți
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Platforme de publicitate:</strong> date despre
                  interacțiunea cu reclamele noastre (Facebook, Google)
                </li>
              </ul>
            </section>

            {/* 4. How We Collect Data */}
            <section className="space-y-4">
              <h2 className="text-subheading">
                4. Cum Colectăm Datele
              </h2>
              <p>Colectăm date personale prin următoarele metode:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Formulare de pe site:</strong> când completezi
                  formularul de înscriere pe lista de așteptare
                </li>
                <li>
                  <strong>Chat AI:</strong> când interacționezi cu asistentul
                  nostru virtual și furnizezi informații în conversație
                </li>
                <li>
                  <strong>Cookie-uri și tehnologii similare:</strong> prin
                  cookie-uri, pixeli de urmărire și alte tehnologii de
                  tracking (vezi Secțiunea 8)
                </li>
                <li>
                  <strong>Navigare pe site:</strong> automat, când vizitezi și
                  interacționezi cu site-ul nostru
                </li>
              </ul>
            </section>

            {/* 5. Purposes */}
            <section className="space-y-4">
              <h2 className="text-subheading">
                5. Scopurile Prelucrării Datelor
              </h2>
              <p>Folosim datele tale personale pentru:</p>

              <h3 className="font-semibold mt-6">5.1 Furnizarea serviciilor</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestionarea listei de așteptare pentru lansarea Chato</li>
                <li>Comunicarea informațiilor despre lansare și disponibilitate</li>
                <li>Oferirea de demonstrații ale asistentului AI</li>
                <li>Răspunsul la întrebările și solicitările tale</li>
              </ul>

              <h3 className="font-semibold mt-6">5.2 Îmbunătățirea serviciilor</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Analiza conversațiilor pentru îmbunătățirea răspunsurilor AI
                </li>
                <li>Înțelegerea nevoilor utilizatorilor și a pieței</li>
                <li>Dezvoltarea de noi funcționalități</li>
                <li>Optimizarea experienței utilizatorilor pe site</li>
              </ul>

              <h3 className="font-semibold mt-6">5.3 Marketing și publicitate</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Afișarea de reclame relevante pe alte platforme</li>
                <li>Măsurarea eficienței campaniilor publicitare</li>
                <li>Crearea de audiențe similare pentru publicitate</li>
                <li>
                  Trimiterea de comunicări de marketing (doar cu
                  consimțământul tău)
                </li>
              </ul>

              <h3 className="font-semibold mt-6">5.4 Analiză și statistici</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analiza traficului și comportamentului pe site</li>
                <li>Generarea de statistici agregate</li>
                <li>Identificarea tendințelor și modelelor de utilizare</li>
              </ul>

              <h3 className="font-semibold mt-6">5.5 Securitate și conformitate</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Protejarea împotriva fraudelor și abuzurilor</li>
                <li>Asigurarea securității site-ului</li>
                <li>Conformitatea cu obligațiile legale</li>
              </ul>
            </section>

            {/* 6. Legal Basis */}
            <section className="space-y-4">
              <h2 className="text-subheading">6. Temeiul Legal</h2>
              <p>
                Prelucrăm datele tale personale pe baza următoarelor temeiuri
                legale conform GDPR:
              </p>

              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">
                    Consimțământul (Art. 6(1)(a) GDPR)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pentru: cookie-uri de analiză și marketing, comunicări de
                    marketing, procesarea conversațiilor din chat
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">
                    Executarea contractului (Art. 6(1)(b) GDPR)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pentru: furnizarea serviciilor solicitate, gestionarea
                    contului tău când devii client
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">
                    Interesul legitim (Art. 6(1)(f) GDPR)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pentru: îmbunătățirea serviciilor, securitatea site-ului,
                    prevenirea fraudelor, analize interne
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">
                    Obligație legală (Art. 6(1)(c) GDPR)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pentru: conformitatea cu cerințele legale și fiscale,
                    răspunsul la solicitările autorităților
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Data Sharing */}
            <section className="space-y-4">
              <h2 className="text-subheading">7. Partajarea Datelor</h2>
              <p>
                <strong>Nu vindem și nu închiriem</strong> datele tale personale
                către terți. Partajăm date doar în următoarele situații:
              </p>

              <h3 className="font-semibold mt-6">7.1 Furnizori de servicii</h3>
              <p>
                Lucrăm cu furnizori de încredere care ne ajută să oferim
                serviciile:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm mt-4">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Furnizor</th>
                      <th className="text-left py-2">Serviciu</th>
                      <th className="text-left py-2">Locație</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="py-2">Vercel</td>
                      <td className="py-2">Hosting și infrastructură</td>
                      <td className="py-2">SUA (DPA)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Neon</td>
                      <td className="py-2">Bază de date</td>
                      <td className="py-2">UE</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Anthropic</td>
                      <td className="py-2">Procesare AI (Claude)</td>
                      <td className="py-2">SUA (DPA)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Google</td>
                      <td className="py-2">Analytics</td>
                      <td className="py-2">SUA (DPA)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Meta (Facebook)</td>
                      <td className="py-2">Pixel de tracking</td>
                      <td className="py-2">SUA (DPA)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                DPA = Data Processing Agreement (Acord de Prelucrare a Datelor)
                în conformitate cu GDPR
              </p>

              <h3 className="font-semibold mt-6">7.2 Autorități</h3>
              <p>
                Putem divulga date către autorități atunci când suntem obligați
                legal sau când este necesar pentru:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respectarea unei obligații legale</li>
                <li>Protejarea drepturilor și siguranței noastre sau a altora</li>
                <li>Prevenirea sau investigarea fraudelor</li>
              </ul>

              <h3 className="font-semibold mt-6">7.3 Transferuri de afaceri</h3>
              <p>
                În cazul unei fuziuni, achiziții sau vânzări de active, datele
                tale pot fi transferate. Te vom notifica înainte ca datele să
                facă obiectul unei alte Politici de Confidențialitate.
              </p>
            </section>

            {/* 8. Cookies */}
            <section className="space-y-4">
              <h2 className="text-subheading">
                8. Cookie-uri și Tehnologii de Tracking
              </h2>

              <h3 className="font-semibold mt-6">8.1 Ce sunt cookie-urile?</h3>
              <p>
                Cookie-urile sunt fișiere text mici stocate pe dispozitivul tău
                când vizitezi un site web. Ele permit site-ului să îți
                recunoască dispozitivul și să rețină informații despre vizita ta.
              </p>

              <h3 className="font-semibold mt-6">
                8.2 Tipurile de cookie-uri pe care le folosim
              </h3>

              <div className="space-y-4 mt-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">
                    Cookie-uri strict necesare
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Esențiale pentru funcționarea site-ului. Includ cookie-uri
                    pentru preferințele de consimțământ și sesiune. Nu pot fi
                    dezactivate.
                  </p>
                  <p className="text-xs mt-2">
                    <strong>Durata:</strong> Sesiune / 1 an
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">
                    Cookie-uri de analiză (Google Analytics)
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ne ajută să înțelegem cum folosești site-ul, ce pagini
                    vizitezi și cât timp petreci. Toate datele sunt anonimizate.
                  </p>
                  <p className="text-xs mt-2">
                    <strong>Cookie-uri:</strong> _ga, _ga_*, _gid
                  </p>
                  <p className="text-xs">
                    <strong>Durata:</strong> până la 2 ani
                  </p>
                  <p className="text-xs">
                    <strong>Temei legal:</strong> Consimțământ
                  </p>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">
                    Cookie-uri de marketing (Facebook Pixel)
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Folosite pentru a măsura eficiența reclamelor și pentru a-ți
                    afișa reclame relevante pe Facebook și Instagram.
                  </p>
                  <p className="text-xs mt-2">
                    <strong>Cookie-uri:</strong> _fbp, fr
                  </p>
                  <p className="text-xs">
                    <strong>Durata:</strong> până la 90 de zile
                  </p>
                  <p className="text-xs">
                    <strong>Temei legal:</strong> Consimțământ
                  </p>
                </div>
              </div>

              <h3 className="font-semibold mt-6">
                8.3 Cum îți poți gestiona preferințele
              </h3>
              <p>
                Poți gestiona preferințele cookie-urilor prin:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Banner-ul de cookie-uri:</strong> La prima vizită,
                  îți cerem consimțământul. Poți modifica preferințele oricând
                  prin setările browserului.
                </li>
                <li>
                  <strong>Setările browserului:</strong> Poți configura
                  browserul să blocheze sau să șteargă cookie-urile
                </li>
                <li>
                  <strong>Opt-out Google Analytics:</strong>{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </li>
                <li>
                  <strong>Setări reclame Facebook:</strong>{" "}
                  <a
                    href="https://www.facebook.com/settings/?tab=ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://www.facebook.com/settings/?tab=ads
                  </a>
                </li>
              </ul>

              <h3 className="font-semibold mt-6">8.4 Alte tehnologii de tracking</h3>
              <p>
                Pe lângă cookie-uri, putem folosi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Pixeli de tracking:</strong> Imagini mici
                  transparente care ne informează dacă ai vizitat o pagină
                </li>
                <li>
                  <strong>Local Storage:</strong> Pentru a stoca preferințele
                  tale (ex: consimțământ cookie-uri)
                </li>
              </ul>
            </section>

            {/* 9. International Transfers */}
            <section className="space-y-4">
              <h2 className="text-subheading">
                9. Transferuri Internaționale de Date
              </h2>
              <p>
                Unii dintre furnizorii noștri de servicii sunt localizați în
                afara Spațiului Economic European (SEE), în special în SUA.
                Pentru aceste transferuri, ne asigurăm că:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Furnizorii au semnat Clauze Contractuale Standard (SCC)
                  aprobate de Comisia Europeană
                </li>
                <li>
                  Există acorduri de prelucrare a datelor (DPA) conforme cu GDPR
                </li>
                <li>
                  Se implementează măsuri tehnice și organizaționale
                  suplimentare pentru protecția datelor
                </li>
              </ul>
              <p>
                Poți obține o copie a garanțiilor pe care le-am implementat
                contactându-ne la privacy@chato.ro.
              </p>
            </section>

            {/* 10. Data Retention */}
            <section className="space-y-4">
              <h2 className="text-subheading">10. Păstrarea Datelor</h2>
              <p>
                Păstrăm datele tale personale doar atât timp cât este necesar
                pentru scopurile pentru care au fost colectate:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm mt-4">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Tip de date</th>
                      <th className="text-left py-2">Perioadă de păstrare</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="py-2">Date lista de așteptare</td>
                      <td className="py-2">
                        Până la lansare + 6 luni sau până la ștergere
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Date clienți</td>
                      <td className="py-2">
                        Durata contractului + 5 ani (obligații fiscale)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Conversații chat</td>
                      <td className="py-2">
                        12 luni pentru îmbunătățirea AI
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Date de analiză</td>
                      <td className="py-2">26 de luni (Google Analytics)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Log-uri tehnice</td>
                      <td className="py-2">90 de zile</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                La expirarea perioadei de păstrare, datele sunt șterse sau
                anonimizate ireversibil.
              </p>
            </section>

            {/* 11. Security */}
            <section className="space-y-4">
              <h2 className="text-subheading">11. Securitatea Datelor</h2>
              <p>
                Implementăm măsuri tehnice și organizaționale adecvate pentru a
                proteja datele tale împotriva accesului neautorizat, pierderii
                sau distrugerii:
              </p>

              <h3 className="font-semibold mt-6">Măsuri tehnice</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Criptare în tranzit:</strong> Toate conexiunile sunt
                  protejate prin HTTPS/TLS 1.3
                </li>
                <li>
                  <strong>Criptare la stocare:</strong> Datele sunt criptate în
                  baza de date
                </li>
                <li>
                  <strong>Infrastructură securizată:</strong> Servere gestionate
                  de furnizori cu certificări de securitate (SOC 2)
                </li>
                <li>
                  <strong>Backup-uri:</strong> Copii de siguranță regulate și
                  criptate
                </li>
              </ul>

              <h3 className="font-semibold mt-6">Măsuri organizaționale</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acces restricționat pe bază de rol (principiul nevoii de a ști)</li>
                <li>Autentificare în doi pași pentru accesul la sisteme</li>
                <li>Instruirea echipei privind protecția datelor</li>
                <li>Evaluări periodice de securitate</li>
              </ul>
            </section>

            {/* 12. Your Rights */}
            <section className="space-y-4">
              <h2 className="text-subheading">12. Drepturile Tale (GDPR)</h2>
              <p>
                Conform GDPR, ai următoarele drepturi cu privire la datele tale
                personale:
              </p>

              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">Dreptul de acces</h3>
                  <p className="text-sm text-muted-foreground">
                    Poți solicita o copie a datelor personale pe care le deținem
                    despre tine.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">Dreptul la rectificare</h3>
                  <p className="text-sm text-muted-foreground">
                    Poți cere corectarea datelor incorecte sau incomplete.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">
                    Dreptul la ștergere (&quot;dreptul de a fi uitat&quot;)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Poți cere ștergerea datelor tale în anumite circumstanțe.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">
                    Dreptul la restricționarea prelucrării
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Poți cere limitarea modului în care folosim datele tale.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">Dreptul la portabilitate</h3>
                  <p className="text-sm text-muted-foreground">
                    Poți primi datele tale într-un format structurat, utilizat
                    frecvent și care poate fi citit automat.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">Dreptul la opoziție</h3>
                  <p className="text-sm text-muted-foreground">
                    Te poți opune prelucrării datelor tale în scopuri de
                    marketing direct sau bazate pe interes legitim.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">
                    Dreptul de a retrage consimțământul
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Poți retrage consimțământul oricând, fără a afecta
                    legalitatea prelucrării anterioare.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-semibold">
                    Dreptul de a nu face obiectul unei decizii automatizate
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ai dreptul de a nu fi supus unei decizii bazate exclusiv pe
                    prelucrare automatizată care produce efecte juridice.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg mt-6">
                <h3 className="font-semibold">Cum îți poți exercita drepturile</h3>
                <p className="text-sm mt-2">
                  Trimite-ne un email la{" "}
                  <a
                    href="mailto:privacy@chato.ro"
                    className="text-primary hover:underline"
                  >
                    privacy@chato.ro
                  </a>{" "}
                  cu:
                </p>
                <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
                  <li>Numele tău și datele de contact</li>
                  <li>Dreptul pe care dorești să îl exerciți</li>
                  <li>Orice informații care ne pot ajuta să te identificăm</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Termen de răspuns:</strong> 30 de zile (poate fi
                  extins cu 60 de zile pentru cereri complexe)
                </p>
              </div>
            </section>

            {/* 13. Children */}
            <section className="space-y-4">
              <h2 className="text-subheading">13. Confidențialitatea Copiilor</h2>
              <p>
                Site-ul și serviciile noastre sunt destinate profesioniștilor
                din domeniul stomatologic și nu sunt adresate persoanelor sub
                16 ani. Nu colectăm cu bună știință date personale de la copii.
              </p>
              <p>
                Dacă afli că un copil ne-a furnizat date personale, te rugăm
                să ne contactezi imediat la privacy@chato.ro pentru a le șterge.
              </p>
            </section>

            {/* 14. Third Party Links */}
            <section className="space-y-4">
              <h2 className="text-subheading">
                14. Link-uri către Site-uri Terțe
              </h2>
              <p>
                Site-ul nostru poate conține link-uri către site-uri externe.
                Nu suntem responsabili pentru practicile de confidențialitate
                ale acestor site-uri. Te încurajăm să citești politicile lor
                de confidențialitate înainte de a furniza date personale.
              </p>
            </section>

            {/* 15. AI and Automated Processing */}
            <section className="space-y-4">
              <h2 className="text-subheading">
                15. Inteligență Artificială și Prelucrare Automatizată
              </h2>
              <p>
                Folosim inteligența artificială (Claude de la Anthropic) pentru
                a oferi serviciul de chat automatizat. Aceasta implică:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Procesarea conversațiilor:</strong> Mesajele tale sunt
                  trimise către API-ul Anthropic pentru a genera răspunsuri
                </li>
                <li>
                  <strong>Îmbunătățirea serviciului:</strong> Conversațiile pot
                  fi analizate pentru a îmbunătăți calitatea răspunsurilor
                </li>
                <li>
                  <strong>Extragerea datelor de contact:</strong> AI-ul poate
                  identifica și salva datele de contact pe care le furnizezi
                  voluntar
                </li>
              </ul>
              <p>
                <strong>Important:</strong> Nu luăm decizii automatizate cu
                efecte juridice sau semnificative bazate exclusiv pe prelucrarea
                AI fără intervenție umană.
              </p>
            </section>

            {/* 16. Marketing */}
            <section className="space-y-4">
              <h2 className="text-subheading">16. Comunicări de Marketing</h2>
              <p>
                Putem trimite comunicări de marketing doar dacă:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ți-ai dat consimțământul explicit</li>
                <li>
                  Ești deja client și comunicările se referă la servicii similare
                </li>
              </ul>
              <p>
                <strong>Dezabonare:</strong> Fiecare email de marketing conține
                un link de dezabonare. Te poți dezabona oricând.
              </p>
            </section>

            {/* 17. Changes */}
            <section className="space-y-4">
              <h2 className="text-subheading">
                17. Modificări ale Politicii
              </h2>
              <p>
                Ne rezervăm dreptul de a actualiza această Politică de
                Confidențialitate. Modificările vor fi publicate pe această
                pagină cu data ultimei actualizări.
              </p>
              <p>
                Pentru modificări semnificative, te vom notifica prin:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email (dacă avem adresa ta)</li>
                <li>O notificare vizibilă pe site</li>
              </ul>
              <p>
                Continuarea utilizării site-ului după publicarea modificărilor
                constituie acceptarea noii politici.
              </p>
            </section>

            {/* 18. Contact */}
            <section className="space-y-4">
              <h2 className="text-subheading">18. Contact</h2>
              <p>
                Pentru orice întrebări sau solicitări legate de această
                Politică de Confidențialitate sau de datele tale personale:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <p>
                  <strong>Responsabil cu Protecția Datelor (DPO)</strong>
                </p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:privacy@chato.ro"
                    className="text-primary hover:underline"
                  >
                    privacy@chato.ro
                  </a>
                </p>
                <p className="mt-4">
                  <strong>Contact General</strong>
                </p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:contact@chato.ro"
                    className="text-primary hover:underline"
                  >
                    contact@chato.ro
                  </a>
                </p>
              </div>
            </section>

            {/* 19. Complaints */}
            <section className="space-y-4">
              <h2 className="text-subheading">19. Plângeri</h2>
              <p>
                Dacă consideri că datele tale personale nu sunt prelucrate
                corect, ai dreptul să depui o plângere la:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <p>
                  <strong>
                    Autoritatea Națională de Supraveghere a Prelucrării Datelor
                    cu Caracter Personal (ANSPDCP)
                  </strong>
                </p>
                <p className="mt-2">
                  Website:{" "}
                  <a
                    href="https://www.dataprotection.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.dataprotection.ro
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:anspdcp@dataprotection.ro"
                    className="text-primary hover:underline"
                  >
                    anspdcp@dataprotection.ro
                  </a>
                </p>
                <p>Adresa: B-dul G-ral Gheorghe Magheru 28-30, București</p>
                <p>Telefon: +40.318.059.211</p>
              </div>
              <p className="mt-4">
                Te încurajăm să ne contactezi mai întâi pentru a încerca să
                rezolvăm orice problemă direct.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
