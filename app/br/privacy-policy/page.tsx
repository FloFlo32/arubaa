import type { Metadata } from "next";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Política De Privacidade",
  description:
    "Política de privacidade global da Aruba Tourism Authority: como coletamos, usamos e protegemos seus dados.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Introdução",
    body: "A Aruba Tourism Authority (ATA) fornece esta Política de Privacidade Global para explicar como processa dados pessoais em suas propriedades digitais, incluindo o Aruba.com e plataformas associadas. Ao usar o Site ou os Serviços, você reconhece que podemos coletar informações sobre você e usar ou divulgar tais informações conforme descrito neste documento.",
  },
  {
    heading: "2. Leis De Proteção De Dados Aplicáveis",
    body: "A ATA está comprometida em cumprir as regulamentações de privacidade em todo o mundo. Trataremos seus Dados Pessoais de acordo com o Regulamento Geral de Proteção de Dados (UE) 2016/679 (GDPR) e outros requisitos específicos de cada jurisdição. Dados Pessoais significam qualquer informação relacionada a uma pessoa identificável, seja de forma direta ou indireta.",
  },
  {
    heading: "3. Informações Que Coletamos",
    body: "A ATA reúne diversas categorias de dados dependendo de como você interage conosco: informações de identidade, dados de contato, preferências de viagem, dados técnicos do seu dispositivo, solicitações de clientes, padrões de uso, preferências de marketing e informações financeiras limitadas. A ATA não coleta nem processa, de outra forma, informações de cartão de pagamento de consumidores em conexão com reservas turísticas. Informações não identificáveis, agregadas ou anonimizadas ficam fora da definição de Dados Pessoais segundo as leis de proteção aplicáveis.",
  },
  {
    heading: "4. Dados Pertencentes A Menores",
    body: "Nosso Site e nossos Serviços são destinados ao público em geral e não são direcionados a crianças. Não coletamos, com conhecimento, Dados Pessoais de menores sem o consentimento apropriado de um dos pais ou responsável legal. Se tomarmos conhecimento de que coletamos Dados Pessoais de um menor sem o consentimento exigido, tomaremos medidas razoáveis para excluir essas informações.",
  },
  {
    heading: "5. Como Coletamos Suas Informações",
    body: "Coletamos informações diretamente de você quando você navega pelo Site, envia um formulário, assina comunicações ou contata nossa equipe, além de coletarmos automaticamente por meio de cookies, ferramentas de análise e tecnologias semelhantes conforme você interage com nossas propriedades digitais. Também podemos receber informações de parceiros de viagens e turismo de confiança que trabalham com a ATA para apoiar sua visita.",
  },
  {
    heading: "6. Finalidade E Base Legal Do Processamento De Dados",
    body: "Processamos Dados Pessoais para fornecer e melhorar nossos Serviços, responder a solicitações, personalizar sua experiência no Site, enviar comunicações solicitadas e cumprir obrigações legais. Dependendo do contexto, nossa base legal inclui seu consentimento, o cumprimento de uma solicitação que você fez e o interesse legítimo da ATA em promover Aruba como destino.",
  },
  {
    heading: "7. Retenção De Dados",
    body: "Retemos Dados Pessoais apenas pelo tempo razoavelmente necessário para cumprir as finalidades descritas nesta política, incluindo o atendimento de requisitos legais, contábeis ou de relatórios. Quando os Dados Pessoais deixam de ser necessários, tomamos medidas razoáveis para excluí-los, anonimizá-los ou arquivá-los de forma segura, de acordo com nossas práticas internas de retenção.",
  },
  {
    heading: "8. Segurança Dos Dados Pessoais",
    body: "A ATA mantém salvaguardas administrativas, técnicas e físicas razoáveis, projetadas para proteger os Dados Pessoais contra perda, uso indevido, acesso não autorizado, divulgação, alteração e destruição. Embora nenhum sistema possa garantir segurança absoluta, revisamos regularmente nossas práticas para reduzir riscos e responder prontamente a qualquer incidente suspeito.",
  },
  {
    heading: "9. Compartilhamento De Seus Dados Pessoais",
    body: "Podemos compartilhar Dados Pessoais com prestadores de serviços de confiança que apoiam a operação do Site e dos Serviços, com parceiros de turismo e viagens envolvidos no atendimento de sua solicitação e quando exigido por lei ou para proteger os direitos e a segurança da ATA e de seus visitantes. Não vendemos Dados Pessoais a terceiros para fins de marketing próprio.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <ShieldCheck className="size-3.5" /> Jurídico
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Política De Privacidade Global
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Como a Aruba Tourism Authority processa dados pessoais no Aruba.com
              e em suas propriedades digitais.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Este é um resumo para fins de demonstração. Para a política completa e
                juridicamente vinculante, consulte a política de privacidade oficial do
                Aruba.com.
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
