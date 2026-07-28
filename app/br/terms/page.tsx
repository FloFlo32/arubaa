import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Scale, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Termos E Condições",
  description: "Termos e condições para o uso do Aruba.com.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "Aceitação Dos Termos",
    body: "Ao acessar ou usar este Site, você concorda em se vincular a estes Termos e Condições. Se você não concordar com qualquer parte destes termos, interrompa o uso do Site e de seus Serviços.",
  },
  {
    heading: "Uso Do Site",
    body: "Você pode navegar e usar o Site para fins lícitos relacionados ao planejamento e à sua visita a Aruba. Você concorda em não fazer uso indevido do Site, não interferir em seu funcionamento normal e não tentar acessá-lo por meios diferentes da interface e das instruções que fornecemos.",
  },
  {
    heading: "Propriedade Intelectual",
    body: "Todo o conteúdo deste Site, incluindo textos, imagens, logotipos e elementos de design, é de propriedade da Aruba Tourism Authority ou licenciado a ela, e é protegido pelas leis de propriedade intelectual aplicáveis. Você pode visualizar e compartilhar o conteúdo para fins pessoais e não comerciais, mas não pode reproduzi-lo ou redistribuí-lo sem permissão.",
  },
  {
    heading: "Links De Terceiros",
    body: "Este Site pode conter links para resorts, operadoras de turismo e outros sites de terceiros para sua conveniência. Não controlamos e não somos responsáveis pelo conteúdo, pelas políticas ou pelas práticas desses sites de terceiros, e a inclusão de um link não implica endosso.",
  },
  {
    heading: "Limitação De Responsabilidade",
    body: "O Site e seu conteúdo são fornecidos no estado em que se encontram. Na maior extensão permitida por lei, a Aruba Tourism Authority se isenta de responsabilidade por quaisquer danos indiretos, incidentais ou consequenciais decorrentes do uso do Site ou da confiança nas informações aqui encontradas.",
  },
  {
    heading: "Alterações A Estes Termos",
    body: "Podemos atualizar estes Termos e Condições periodicamente para refletir alterações em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. O uso continuado do Site após a entrada em vigor de quaisquer alterações constitui sua aceitação dos termos revisados.",
  },
  {
    heading: "Lei Aplicável",
    body: "Estes Termos e Condições são regidos pelas leis de Aruba, sem consideração a princípios de conflito de leis. Quaisquer disputas decorrentes do seu uso do Site estarão sujeitas à jurisdição exclusiva dos tribunais de Aruba.",
  },
  {
    heading: "Contato",
    body: `Se você tiver dúvidas sobre estes Termos e Condições, pode entrar em contato com a Aruba Tourism Authority por telefone ou e-mail, usando os dados em nosso rodapé, ou escrevendo para ${brand.social.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <Scale className="size-3.5" /> Jurídico
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Termos E Condições
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Os termos que regem o uso deste site.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Este é um resumo para fins de demonstração. Para os termos completos e
                juridicamente vinculantes, consulte os termos e condições oficiais do
                Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Termos oficiais <ExternalLink className="size-3.5" />
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
