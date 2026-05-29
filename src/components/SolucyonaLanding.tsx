import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Linkedin,
  Phone,
  Plus,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511994393807?text=" +
  encodeURIComponent("Olá! Gostaria de falar com a Solucyona.");

/* -------------------------------------------------------------------------- */
/* Primitives                                                                 */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
          light ? "text-ink-foreground/70" : "text-foreground/60"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="group flex items-baseline gap-1.5" aria-label="Solucyona Smart Solutions">
      <span
        className={`font-display text-2xl font-normal tracking-tight ${
          light ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        Solucyona
      </span>
      <span className="text-primary">.</span>
      <span
        className={`hidden font-mono text-[10px] uppercase tracking-[0.2em] sm:inline ${
          light ? "text-ink-foreground/50" : "text-foreground/50"
        }`}
      >
        Smart Solutions
      </span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Header                                                                     */
/* -------------------------------------------------------------------------- */

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#metodo", label: "Método" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <>
      <div className="h-1 bg-gradient-brand" />
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <Logo />
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:border-primary hover:text-ink lg:inline-flex"
          >
            Falar no WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button className="p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 text-sm font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-foreground px-5 py-3 text-sm font-medium text-background"
              >
                Falar no WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />

      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-24 md:pt-32 lg:px-12 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <Eyebrow light>Solucyona / Consultoria em Tecnologia</Eyebrow>
            <h1 className="mt-8 font-display text-[44px] font-normal leading-[1.02] tracking-[-0.02em] text-balance sm:text-6xl md:text-7xl lg:text-[88px]">
              Soluções inteligentes para{" "}
              <span className="italic text-primary">infraestrutura</span>, tecnologia e{" "}
              <span className="italic text-primary">gestão</span>.
            </h1>
          </div>

          <div className="lg:col-span-3 lg:pt-8">
            <p className="text-sm leading-relaxed text-ink-foreground/70">
              Mais de duas décadas ajudando empresas a transformar tecnologia em
              produtividade, segurança e crescimento — com experiência construída no
              Brasil e em Portugal.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-3 bg-primary px-6 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Falar no WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-between gap-3 border border-ink-foreground/20 px-6 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/5"
              >
                Solicitar Proposta <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="mt-20 grid gap-px border-t border-ink-foreground/10 bg-ink-foreground/10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {[
            { n: "2004", l: "Fundada no Brasil" },
            { n: "2016—2025", l: "Operação em Portugal" },
            { n: "20+", l: "Anos de experiência" },
            { n: "100%", l: "Foco em resultados" },
          ].map((s) => (
            <div key={s.l} className="bg-ink px-2 pt-8">
              <div className="font-display text-3xl font-normal text-primary lg:text-4xl">
                {s.n}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-foreground/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slogan tag */}
      <div className="border-t border-ink-foreground/10 bg-ink/60">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 lg:px-12">
          <p className="font-display text-base italic text-ink-foreground/80 sm:text-lg">
            "Qual seu problema? A gente <span className="text-primary">Solucyona</span>."
          </p>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground/40 sm:inline">
            Piracicaba · SP · Brasil
          </span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section id="sobre" className="border-b border-border bg-background py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Eyebrow>01 / Quem somos</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-normal leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Experiência que conecta tecnologia e <span className="italic text-primary">resultados</span>.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-[1.7] text-foreground/75 lg:col-span-6 lg:col-start-7 lg:text-[17px]">
          <p>
            A Solucyona Smart Solutions nasceu em <span className="font-medium text-foreground">2004 no Brasil</span> e
            expandiu sua atuação para <span className="font-medium text-foreground">Portugal entre 2016 e 2025</span>.
            Em maio de 2025 retomamos operações em Piracicaba/SP.
          </p>
          <p>
            Nossa experiência em diferentes segmentos permite compreender os desafios dos
            clientes e desenvolver soluções eficientes, seguras e alinhadas aos objetivos
            estratégicos de cada organização.
          </p>
          <p>
            Atuamos integrando infraestrutura, tecnologia, treinamento e gestão de projetos
            para transformar desafios em resultados.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Differentiators                                                            */
/* -------------------------------------------------------------------------- */

const differentiators = [
  { title: "Experiência Internacional", text: "Atuação no Brasil e em Portugal trazendo diferentes perspectivas e melhores práticas." },
  { title: "Visão Sistêmica", text: "Compreendemos tanto a tecnologia quanto os processos de negócio." },
  { title: "Gestão Profissional", text: "Projetos conduzidos com base nas melhores práticas do PMBOK." },
  { title: "Agilidade", text: "Soluções práticas com foco em resultados rápidos e sustentáveis." },
  { title: "Atendimento Personalizado", text: "Cada cliente recebe uma solução adequada à sua realidade." },
  { title: "Compromisso com Resultados", text: "Nosso foco é gerar valor para o negócio através da tecnologia." },
];

function Differentiators() {
  return (
    <section id="diferenciais" className="border-b border-border bg-muted py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>02 / Diferenciais</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-normal leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Por que organizações maduras escolhem a Solucyona.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground/70 lg:col-span-4 lg:col-start-9">
            Combinamos rigor técnico, visão de negócio e a disciplina de quem entrega
            projetos em diferentes culturas e mercados.
          </p>
        </div>

        <div className="mt-16 grid border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <article
              key={d.title}
              className="group relative flex flex-col gap-6 border-b border-border bg-background p-8 transition-colors hover:bg-ink hover:text-ink-foreground lg:p-10 [&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 [&:not(:nth-child(3n))]:lg:border-r [&:nth-child(2n+1)]:md:border-r md:[&:nth-child(2n+1)]:lg:border-r"
              style={{ borderRightColor: "var(--color-border)" }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Plus className="h-4 w-4 text-foreground/40 transition-transform group-hover:rotate-45 group-hover:text-primary" />
              </div>
              <h3 className="font-display text-2xl font-normal leading-tight tracking-tight">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/65 transition-colors group-hover:text-ink-foreground/70">
                {d.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

const services = [
  {
    n: "01",
    title: "Infraestrutura de Redes",
    lead: "Conectividade corporativa estável, segura e bem documentada.",
    items: ["Cabeamento estruturado", "Redes corporativas", "Wi-Fi empresarial", "Organização e documentação"],
  },
  {
    n: "02",
    title: "Infraestrutura Elétrica",
    lead: "Base elétrica adequada para ambientes técnicos e operacionais.",
    items: ["Instalações de baixa tensão", "Organização técnica", "Adequação de ambientes"],
  },
  {
    n: "03",
    title: "Tecnologia da Informação",
    lead: "Suporte, administração e consultoria que sustentam a operação.",
    items: ["Suporte técnico", "Administração de sistemas", "Consultoria em TI", "Segurança da informação"],
  },
  {
    n: "04",
    title: "Treinamentos",
    lead: "Capacitação das pessoas para extrair valor real da tecnologia.",
    items: ["Literacia digital", "Capacitação corporativa", "Boas práticas de TI"],
  },
  {
    n: "05",
    title: "Gestão de Projetos",
    lead: "Projetos conduzidos com método, governança e foco em entrega.",
    items: ["Planejamento", "PMBOK", "Governança", "Controle", "Transformação digital"],
  },
];

function Services() {
  return (
    <section id="servicos" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-28 lg:px-12 lg:pt-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>03 / Serviços</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-normal leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Um portfólio integrado de capacidades.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground/70 lg:col-span-4 lg:col-start-9">
            Da camada física à camada de gestão — entregamos cada disciplina com
            profundidade e a articulamos em soluções coerentes.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1400px] px-6 lg:px-12">
        <div className="border-t border-border">
          {services.map((s) => (
            <article
              key={s.title}
              className="group grid items-start gap-6 border-b border-border py-10 transition-colors hover:bg-muted/60 lg:grid-cols-12 lg:gap-10 lg:py-14"
            >
              <div className="flex items-baseline gap-6 lg:col-span-5">
                <span className="font-mono text-xs text-primary">{s.n}</span>
                <h3 className="font-display text-3xl font-normal leading-[1.05] tracking-tight transition-colors group-hover:text-primary sm:text-4xl lg:text-5xl">
                  {s.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-foreground/75 lg:col-span-4">
                {s.lead}
              </p>
              <ul className="space-y-2 lg:col-span-3">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-foreground/70"
                  >
                    <span className="h-px w-3 bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Process                                                                    */
/* -------------------------------------------------------------------------- */

const steps = [
  { title: "Diagnóstico", text: "Entendimento das necessidades do cliente." },
  { title: "Planejamento", text: "Definição da melhor solução." },
  { title: "Implementação", text: "Execução técnica com qualidade." },
  { title: "Suporte e Evolução", text: "Acompanhamento contínuo e melhoria." },
];

function Process() {
  return (
    <section id="metodo" className="bg-ink py-28 text-ink-foreground lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow light>04 / Como trabalhamos</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-normal leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Um método claro, do desafio ao <span className="italic text-primary">resultado</span>.
            </h2>
          </div>
        </div>

        <div className="mt-20 grid gap-px border-t border-ink-foreground/15 bg-ink-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="flex h-full flex-col gap-6 bg-ink p-8 lg:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary">
                  Etapa {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-primary" />
              </div>
              <h3 className="font-display text-2xl font-normal leading-tight tracking-tight lg:text-3xl">
                {s.title}
              </h3>
              <p className="mt-auto text-sm leading-relaxed text-ink-foreground/65">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Segments                                                                   */
/* -------------------------------------------------------------------------- */

const segments = ["Indústria", "Comércio", "Educação", "Serviços", "Escritórios", "Profissionais Liberais"];

function Segments() {
  return (
    <section className="border-b border-border bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>05 / Segmentos atendidos</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-normal leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Organizações de diferentes portes e setores.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground/70 lg:col-span-4 lg:col-start-9">
            Independentemente do porte ou segmento, ajudamos organizações a utilizar a
            tecnologia como ferramenta para crescimento.
          </p>
        </div>

        <div className="mt-16 border-y border-border">
          {segments.map((s, i) => (
            <div
              key={s}
              className="group flex items-center justify-between border-b border-border py-6 transition-colors last:border-b-0 hover:text-primary lg:py-8"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs text-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl font-normal tracking-tight sm:text-3xl lg:text-4xl">
                  {s}
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-foreground/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Mid CTA                                                                    */
/* -------------------------------------------------------------------------- */

function CtaMid() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-24 text-ink lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:items-end lg:px-12">
        <div className="lg:col-span-8">
          <Eyebrow>Próximo passo</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-normal leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Seu próximo desafio tecnológico <em>começa aqui</em>.
          </h2>
          <p className="mt-6 max-w-xl text-base text-ink/80 lg:text-lg">
            Vamos conversar sobre como a Solucyona pode ajudar sua empresa.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-ink bg-ink px-8 py-4 text-sm font-medium text-ink-foreground transition-colors hover:bg-transparent hover:text-ink"
          >
            Falar com um Especialista <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="border-b border-border pb-3">
      <label htmlFor={name} className="block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent text-base text-foreground placeholder:text-foreground/30 focus:outline-none"
      />
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contato" className="border-b border-border bg-background py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Eyebrow>06 / Contato</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-normal leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Vamos conversar sobre o <span className="italic text-primary">seu projeto</span>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
            Conte-nos o desafio da sua empresa. Respondemos rapidamente com uma proposta
            personalizada para a sua realidade.
          </p>

          <div className="mt-12 space-y-px border-t border-border">
            {[
              { icon: Phone, label: "WhatsApp", value: "+55 11 99439-3807", href: WHATSAPP_URL },
              { icon: Mail, label: "E-mail", value: "contato@solucyona.com", href: "mailto:contato@solucyona.com" },
              { icon: Linkedin, label: "LinkedIn", value: "solucyonasmartsolutions", href: "https://linkedin.com/showcase/solucyonasmartsolutions" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:text-primary"
              >
                <div className="flex items-center gap-4">
                  <c.icon className="h-4 w-4 text-primary" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                      {c.label}
                    </div>
                    <div className="mt-1 font-display text-xl">{c.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="border border-border p-10 lg:p-14">
              <Eyebrow>Mensagem enviada</Eyebrow>
              <h3 className="mt-6 font-display text-3xl font-normal leading-tight tracking-tight">
                Obrigado pelo contato.
              </h3>
              <p className="mt-4 text-foreground/70">
                A equipe da Solucyona retornará em breve.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-8 sm:grid-cols-2"
            >
              <Field label="Nome" name="nome" required />
              <Field label="Empresa" name="empresa" />
              <Field label="Telefone" name="telefone" type="tel" />
              <Field label="E-mail" name="email" type="email" required />
              <div className="border-b border-border pb-3 sm:col-span-2">
                <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                  Mensagem <span className="text-primary">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  className="mt-2 w-full resize-none bg-transparent text-base text-foreground placeholder:text-foreground/30 focus:outline-none"
                  placeholder="Conte-nos sobre seu desafio…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-between gap-3 bg-foreground px-6 py-4 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-ink sm:col-span-2"
              >
                Quero falar com a Solucyona <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Logo light />
            <p className="mt-10 max-w-xl font-display text-3xl font-normal leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              "Qual seu problema?{" "}
              <span className="italic text-primary">A gente Solucyona</span>."
            </p>
            <p className="mt-8 max-w-sm text-sm text-ink-foreground/60">
              Soluções inteligentes para impulsionar o seu negócio.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Contato
            </div>
            <ul className="mt-6 space-y-4 text-sm text-ink-foreground/80">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
                  +55 11 99439-3807
                </a>
              </li>
              <li>
                <a href="mailto:contato@solucyona.com" className="hover:text-primary">
                  contato@solucyona.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/showcase/solucyonasmartsolutions"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Navegação
            </div>
            <ul className="mt-6 space-y-4 text-sm text-ink-foreground/80">
              <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-primary">Diferenciais</a></li>
              <li><a href="#metodo" className="hover:text-primary">Método</a></li>
              <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ink-foreground/10 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Solucyona Smart Solutions</span>
          <span>Brasil · Portugal · Piracicaba SP</span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* Floating WhatsApp                                                          */
/* -------------------------------------------------------------------------- */

function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110 animate-pulse-ring"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function SolucyonaLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Differentiators />
        <Services />
        <Process />
        <Segments />
        <CtaMid />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
