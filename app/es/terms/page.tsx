import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Scale, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Términos Y Condiciones",
  description: "Términos y condiciones para el uso de Aruba.com.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "Aceptación De Los Términos",
    body: "Al acceder o utilizar este Sitio, usted acepta quedar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que deje de utilizar el Sitio y sus Servicios.",
  },
  {
    heading: "Uso Del Sitio",
    body: "Puede navegar y utilizar el Sitio con fines lícitos relacionados con la planificación y el disfrute de su visita a Aruba. Usted se compromete a no hacer un uso indebido del Sitio, no interferir con su funcionamiento normal y no intentar acceder a él por medios distintos de la interfaz e instrucciones que proporcionamos.",
  },
  {
    heading: "Propiedad Intelectual",
    body: "Todo el contenido de este Sitio, incluyendo textos, imágenes, logotipos y elementos de diseño, es propiedad de la Autoridad de Turismo de Aruba o está licenciado a su favor, y está protegido por las leyes de propiedad intelectual aplicables. Usted puede ver y compartir el contenido con fines personales y no comerciales, pero no puede reproducirlo ni redistribuirlo sin autorización.",
  },
  {
    heading: "Enlaces A Terceros",
    body: "Este Sitio puede enlazar a resorts, operadores turísticos y otros sitios web de terceros por su comodidad. No controlamos ni somos responsables del contenido, las políticas o las prácticas de esos sitios de terceros, y la inclusión de un enlace no implica su respaldo.",
  },
  {
    heading: "Limitación De Responsabilidad",
    body: "El Sitio y su contenido se proporcionan tal cual. En la máxima medida permitida por la ley, la Autoridad de Turismo de Aruba renuncia a toda responsabilidad por daños indirectos, incidentales o consecuentes derivados del uso del Sitio o de la confianza en la información aquí contenida.",
  },
  {
    heading: "Cambios A Estos Términos",
    body: "Podemos actualizar estos Términos y Condiciones periódicamente para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o regulatorias. El uso continuado del Sitio después de que entren en vigor dichos cambios constituye su aceptación de los términos revisados.",
  },
  {
    heading: "Ley Aplicable",
    body: "Estos Términos y Condiciones se rigen por las leyes de Aruba, sin tener en cuenta los principios de conflicto de leyes. Cualquier disputa derivada del uso del Sitio estará sujeta a la jurisdicción exclusiva de los tribunales de Aruba.",
  },
  {
    heading: "Contacto",
    body: `Si tiene preguntas sobre estos Términos y Condiciones, puede comunicarse con la Autoridad de Turismo de Aruba por teléfono o correo electrónico utilizando los datos que aparecen en nuestro pie de página, o escribiendo a ${brand.social.email}.`,
  },
];

export default function TermsPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <Scale className="size-3.5" /> Legal
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Términos Y Condiciones
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Los términos que rigen el uso de este sitio.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Este es un resumen con fines de demostración. Para conocer los términos
                completos y legalmente vinculantes, consulte los términos y condiciones
                oficiales de Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Términos oficiales <ExternalLink className="size-3.5" />
              </a>
            </div>
          </Reveal>
        </section>

        <article className="container-px mx-auto max-w-3xl pb-24">
          <Reveal>
            <div className="space-y-10 border-t border-border pt-10">
              {sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="text-2xl font-semibold">{s.heading}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                </section>
              ))}
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
