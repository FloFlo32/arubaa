import Link from "next/link";
import { ArrowRight, ArrowUpRight, PlayCircle, Plane, Globe, Compass } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { HeroVideo } from "@/components/magic/hero-video";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Carousel } from "@/components/magic/carousel";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { cn } from "@/lib/utils";

const updates = [
  {
    eyebrow: "Festival culinario",
    title: "Autentico Aruba Culinary Festival",
    body: "Autentico regresa este octubre para otra celebración inolvidable de la escena culinaria de Aruba.",
    href: "/es/things-to-do#dining",
    img: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Planifica mejor",
    title: "myAruba App",
    body: "¿Quieres explorar Aruba? Prueba myAruba, la aplicación que te ayuda a elegir lugares increíbles en la isla.",
    href: "/es/plan-your-visit",
    img: "/ingested/arubaa/img-038.webp",
  },
  {
    eyebrow: "Sostenibilidad",
    title: "Campaña del Agua Potable",
    body: "Aruba es conocida por sus playas prístinas y aguas turquesas, y estamos trabajando para que sigan así.",
    href: "/es/our-island#island-facts",
    img: "/ingested/arubaa/img-030.webp",
  },
  {
    eyebrow: "Antes de viajar",
    title: "Requisitos de viaje",
    body: "Aquí tienes algunos detalles a tener en cuenta al viajar hacia y desde Aruba, incluida la nueva tarifa de sostenibilidad de $20.",
    href: "/es/plan-your-visit#tips",
    img: "/ingested/arubaa/img-044.webp",
  },
];

const cells = [
  {
    title: "Playas Y Calas De Aruba",
    description:
      "Más de 20 playas y calas públicas, desde bahías tranquilas y familiares hasta costas salvajes acariciadas por el viento.",
    href: "/es/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Qué Hacer En Aruba",
    description: "Una amplia variedad de experiencias para todos los ritmos.",
    href: "/es/things-to-do",
    src: "/ingested/arubaa/img-034.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Bodas",
    description: "Casarse en Aruba es la manera ideal de unir dos corazones felices.",
    href: "/es/why-aruba#weddings",
    src: "/ingested/arubaa/img-050.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Bienestar En Aruba",
    description:
      "¿Es realmente una vacación si sientes que necesitas otra al terminar? Buenas noticias: Aruba no es ese tipo de viaje.",
    href: "/es/why-aruba#wellness",
    src: "/ingested/arubaa/img-031.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Ciudad De San Nicolas",
    description:
      "Rica en historia, cultura y arquitectura, un verdadero reflejo de los habitantes de San Nicolas y su vida cotidiana.",
    href: "/es/things-to-do#arts-culture",
    src: "/ingested/arubaa/img-033.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

const features = [
  {
    icon: Plane,
    title: "Fácil",
    body: "Aruba cuenta con vuelos convenientes y directos desde las principales ciudades de EE. UU. y Canadá.",
  },
  {
    icon: Globe,
    title: "Conveniente",
    body: "Hablamos cuatro idiomas y tenemos más días de sol que cualquier otra isla del Caribe.",
  },
  {
    icon: Compass,
    title: "Explorable",
    body: "Somos pequeños, seguros y modernos, así que puedes convertir toda nuestra isla en tu patio de juegos.",
  },
];

const effects = [
  {
    eyebrow: "Efecto 01",
    title: "Sol, Arena, Serenidad",
    description:
      "Arena blanca interminable y agua azul cristalina. Tiéndete al sol, flota en éxtasis y llénate de la calidez arubeña que tanto necesitas para tu regreso a casa.",
    href: "/es/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
  },
  {
    eyebrow: "Efecto 02",
    title: "Saboréalo Todo",
    description:
      "Con más de cien nacionalidades en la isla, Aruba está llena de sabores de cada rincón del planeta. No te sorprendas si te vas con un nuevo plato favorito.",
    href: "/es/things-to-do#dining",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Efecto 03",
    title: "Uno Con La Naturaleza",
    description:
      "En Aruba realmente no nos quedamos bajo techo. No hay una forma incorrecta de conectar con la naturaleza aquí, pero tenemos algunas sugerencias para empezar.",
    href: "/es/things-to-do#natural-wonders",
    src: "/ingested/arubaa/img-031.webp",
  },
  {
    eyebrow: "Efecto 04",
    title: "Una Familia Feliz",
    description:
      "Al Efecto Aruba no le importa si tienes 5 o 50 años, lo siente cualquiera que se abra a la magia de Aruba. Perfecto tanto para padres como para hijos.",
    href: "/es/why-aruba#families",
    src: "/ingested/arubaa/img-037.webp",
  },
  {
    eyebrow: "Efecto 05",
    title: "Baja El Ritmo",
    description:
      "A veces todo lo que necesitas es paz y tranquilidad para reconectar con quienes más te importan. Aruba está llena del sosiego que necesitas para bajar el ritmo.",
    href: "/es/why-aruba#wellness",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Efecto 06",
    title: "Local Al Instante",
    description:
      "Solo bastan unos minutos en Aruba para sentirte como un local. Toma asiento en una tienda de ron o encuentra el mejor lugar local para nadar: de cualquier manera, te sentirás como en casa.",
    href: "/es/why-aruba#culture",
    src: "/ingested/arubaa/img-033.webp",
  },
];

const slides = [
  { src: "/ingested/arubaa/img-029.webp", alt: "Vista aérea de bañistas en las aguas turquesas de Aruba", caption: "Sol, arena, serenidad" },
  { src: "/ingested/arubaa/img-041.webp", alt: "Un padre cargando a un niño junto a la playa en Aruba", caption: "Niños Felices, Vacaciones Felices" },
  { src: "/ingested/arubaa/img-019.webp", alt: "Una mujer relajándose con una bata de spa en Aruba", caption: "En El Regazo Del Lujo" },
  { src: "/ingested/arubaa/img-040.webp", alt: "Un viajero sonriendo en una playa de Aruba", caption: "Viajando En Solitario" },
  { src: "/ingested/arubaa/img-033.webp", alt: "Amigos reunidos en la playa de Aruba", caption: "Saboréalo Todo" },
];

export default function HomeEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[90vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/bf675846-d8a4-4914-ad0a-75c106743d6b/mp4/01_ArubaHomepage_BGvideo_16x9_main.mp4"
            poster="/ingested/arubaa/img-040.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />

          <div className="container-px relative z-10 mx-auto max-w-3xl py-24 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Una Isla Feliz
              </Badge>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                Ama Aruba. Siéntelo de vuelta.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                Cuando llegas con curiosidad y una mente abierta, Aruba responde de la misma
                manera. Descubre las conexiones, la cultura y los momentos tranquilos que
                convierten a los visitantes en familia.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/es/why-aruba">
                    Descubre el Efecto Aruba <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <a
                    href="https://www.youtube.com/watch?v=GJYpiOU2mM0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircle className="size-4" /> Ver el video
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
                <span className="font-display text-lg font-bold">300+</span>
                <span className="text-sm text-white/80">días de sol al año, más que cualquier otra isla del Caribe</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Updates */}
        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Mantente informado
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Nuestras novedades más felices</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Cómo hacemos que tu viaje a Aruba sea seguro, conveniente, flexible e inolvidable.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {updates.map((u) => (
              <RevealItem key={u.title}>
                <Link
                  href={u.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={u.img}
                      alt={u.title}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      {u.eyebrow}
                    </span>
                    <h3 className="flex items-start justify-between gap-2 font-display text-base font-semibold leading-snug">
                      {u.title}
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{u.body}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Happiness */}
        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              El Efecto Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Incontables maneras de encontrar la felicidad
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {cells.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className={cn(c.span)}>
                <ImageCard
                  src={c.src}
                  alt={c.title}
                  title={c.title}
                  description={c.description}
                  href={c.href}
                  ratio={c.ratio}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Next Stop */}
        <section className="bg-primary py-20 text-primary-foreground sm:py-24">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                Por qué somos diferentes
              </span>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
                Próxima parada, Una isla feliz.
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                Hay muchas razones por las que tantos huéspedes regresan a Aruba año tras año.
                Estas son solo algunas de las cosas que hacen que nuestra isla feliz sea
                diferente a cualquier otro destino.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.08}>
              {features.map((f) => (
                <RevealItem key={f.title}>
                  <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary-foreground/15">
                      <f.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/85">{f.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Effects */}
        <section id="the-aruba-effect" className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Qué hacer en Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Sí, nuestras playas están entre las mejores del mundo.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Pero mira más allá del sol, la arena y el agua interminables, y encontrarás una
              isla llena de experiencias: caminatas escénicas, calas impresionantes y una
              gastronomía inolvidable. Explora los Efectos Aruba a continuación, escritos por
              expertos locales.
            </p>
          </Reveal>

          <div className="mt-10">
            <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[32%]">
              {effects.map((e) => (
                <ImageCard
                  key={e.title}
                  src={e.src}
                  alt={e.title}
                  eyebrow={e.eyebrow}
                  title={e.title}
                  description={e.description}
                  href={e.href}
                  className="h-full"
                />
              ))}
            </AutoSlider>
          </div>
        </section>

        {/* Itineraries */}
        <section id="itineraries" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground">
                Itinerarios
              </Badge>
              <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
                Tu escape a Aruba, planeado por locales
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
                Explora itinerarios escritos por expertos locales: desde Sol, Arena, Serenidad
                hasta Niños Felices, Vacaciones Felices, En El Regazo Del Lujo y Viajando En
                Solitario. Cada uno traza un día completo del Efecto Aruba.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="relative mx-auto max-w-4xl rounded-[2rem] bg-background p-2 shadow-2xl shadow-black/20">
                <BorderBeam />
                <Carousel slides={slides} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="container-px mx-auto max-w-6xl py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
              <GridPattern />
              <BorderBeam />
              <h2 className="mx-auto max-w-xl text-balance text-4xl font-bold sm:text-5xl">
                No podemos esperar a verte.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Sea cual sea tu forma de viajar, Aruba te facilita reservar la estancia
                perfecta para ti.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/es/book-now">
                    Reservar Ahora <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/es/deals">Ver Las Ofertas De Hoy</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
