import type { Metadata } from "next";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Política De Privacidad",
  description:
    "Política de privacidad global de la Autoridad de Turismo de Aruba: cómo recopilamos, usamos y protegemos sus datos.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Introducción",
    body: "La Autoridad de Turismo de Aruba (ATA) proporciona esta Política de Privacidad Global para explicar cómo procesa los datos personales en sus propiedades digitales, incluyendo Aruba.com y las plataformas asociadas. Al utilizar el Sitio o los Servicios, usted reconoce que podemos recopilar información sobre usted y usar o divulgar dicha información según se describe en este documento.",
  },
  {
    heading: "2. Leyes De Protección De Datos Aplicables",
    body: "ATA se compromete a cumplir con las regulaciones de privacidad en todo el mundo. Trataremos sus Datos Personales de conformidad con el Reglamento General de Protección de Datos (UE) 2016/679 (RGPD) y otros requisitos específicos de cada jurisdicción. Datos Personales significa cualquier información relacionada con una persona identificable, ya sea de forma directa o indirecta.",
  },
  {
    heading: "3. Información Que Recopilamos",
    body: "ATA recopila varias categorías de datos según cómo interactúe con nosotros: información de identidad, datos de contacto, preferencias de viaje, datos técnicos de su dispositivo, consultas de clientes, patrones de uso, preferencias de marketing e información financiera limitada. ATA no recopila ni procesa de otro modo información de tarjetas de pago de los consumidores en relación con las reservas turísticas. La información no identificable, agregada o anonimizada queda fuera de la definición de Datos Personales conforme a las leyes de protección aplicables.",
  },
  {
    heading: "4. Datos Pertenecientes A Menores",
    body: "Nuestro Sitio y Servicios están dirigidos a un público general y no están destinados a niños. No recopilamos a sabiendas Datos Personales de menores sin el consentimiento adecuado de un padre o tutor. Si llegamos a saber que hemos recopilado Datos Personales de un menor sin el consentimiento requerido, tomaremos medidas razonables para eliminar dicha información.",
  },
  {
    heading: "5. Cómo Recopilamos Su Información",
    body: "Recopilamos información directamente de usted cuando navega por el Sitio, completa un formulario, se suscribe a comunicaciones o se pone en contacto con nuestro equipo, así como de forma automática mediante cookies, herramientas analíticas y tecnologías similares mientras interactúa con nuestras propiedades digitales. También podemos recibir información de socios de viajes y turismo de confianza que trabajan con ATA para respaldar su visita.",
  },
  {
    heading: "6. Finalidad Y Base Legal Del Procesamiento De Datos",
    body: "Procesamos Datos Personales para brindar y mejorar nuestros Servicios, responder a consultas, personalizar su experiencia en el Sitio, enviar las comunicaciones solicitadas y cumplir con las obligaciones legales. Según el contexto, nuestra base legal incluye su consentimiento, la ejecución de una solicitud que usted haya realizado y el interés legítimo de ATA en promover a Aruba como destino.",
  },
  {
    heading: "7. Retención De Datos",
    body: "Conservamos los Datos Personales únicamente durante el tiempo razonablemente necesario para cumplir con los fines descritos en esta política, incluyendo el cumplimiento de requisitos legales, contables o de presentación de informes. Cuando los Datos Personales ya no sean necesarios, tomamos medidas razonables para eliminarlos, anonimizarlos o archivarlos de forma segura conforme a nuestras prácticas internas de retención.",
  },
  {
    heading: "8. Seguridad De Los Datos Personales",
    body: "ATA mantiene salvaguardas administrativas, técnicas y físicas razonables diseñadas para proteger los Datos Personales contra pérdida, uso indebido, acceso no autorizado, divulgación, alteración y destrucción. Aunque ningún sistema puede garantizar una seguridad absoluta, revisamos regularmente nuestras prácticas para reducir riesgos y responder con prontitud ante cualquier incidente sospechoso.",
  },
  {
    heading: "9. Cómo Compartimos Sus Datos Personales",
    body: "Podemos compartir Datos Personales con proveedores de servicios de confianza que respaldan la operación del Sitio y los Servicios, con socios de viajes y turismo involucrados en atender su solicitud, y cuando la ley lo requiera o para proteger los derechos y la seguridad de ATA y sus visitantes. No vendemos Datos Personales a terceros para sus propios fines de marketing.",
  },
];

export default function PrivacyPolicyPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <ShieldCheck className="size-3.5" /> Legal
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Política De Privacidad Global
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Cómo la Autoridad de Turismo de Aruba procesa los datos personales en
              Aruba.com y sus propiedades digitales.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Este es un resumen con fines de demostración. Para conocer la política
                completa y legalmente vinculante, consulte la política de privacidad
                oficial de Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Política oficial <ExternalLink className="size-3.5" />
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
