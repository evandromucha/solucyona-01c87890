import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Network,
  Zap,
  Cpu,
  GraduationCap,
  ClipboardList,
  Globe2,
  Eye,
  Briefcase,
  Rocket,
  HeartHandshake,
  Target,
  Search,
  PencilRuler,
  Wrench,
  LifeBuoy,
  Factory,
  Store,
  School,
  HardHat,
  Building2,
  UserRound,
  Mail,
  Linkedin,
  Phone,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511994393807?text=" +
  encodeURIComponent("Olá! Gostaria de falar com a Solucyona.");

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand shadow-glow">
        <span className="font-display text-lg font-bold text-ink">S</span>
      </div>
      <div className="leading-tight">
        <div
          className={`font-display text-base font-bold tracking-tight ${
            light ? "text-ink-foreground" : "text-foreground"
          }`}
        >
          Solucyona
        </div>
        <div
          className={`text-[10px] uppercase tracking-[0.18em] ${
            light ? "text-ink-foreground/60" : "text-muted-foreground"
          }`}
        >
          Smart Solutions
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Solucyona Smart Solutions">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Falar no WhatsApp
        </a>
        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-ink"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink pt-16">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink/90 to-ink/70" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8 animate-float-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Desde 2004 · Brasil & Portugal
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-ink-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Soluções <span className="text-primary">Inteligentes</span> para
            Infraestrutura, Tecnologia e Gestão
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/80">
            Mais de duas décadas ajudando empresas a transformar tecnologia em
            produtividade, segurança e crescimento.
          </p>
          <p className="mt-3 max-w-2xl text-base text-ink-foreground/60">
            Experiência construída no Brasil e em Portugal, entregando soluções que unem
            tecnologia, infraestrutura e gestão de projetos.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              Solicitar Proposta <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 inline-block border-l-2 border-primary pl-4">
            <p className="font-display text-xl italic text-ink-foreground sm:text-2xl">
              "Qual seu problema? A gente <span className="text-primary">Solucyona</span>."
            </p>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <div className="relative h-full">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4">
              {[
                { n: "20+", l: "anos de experiência" },
                { n: "2", l: "países de atuação" },
                { n: "100%", l: "foco em resultados" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-5 backdrop-blur-md"
                >
                  <div className="font-display text-3xl font-bold text-primary">
                    {s.n}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-ink-foreground/70">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Quem somos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground text-balance sm:text-4xl md:text-5xl">
            Experiência que conecta tecnologia e resultados
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7 lg:text-lg">
          <p>
            A Solucyona Smart Solutions nasceu em <strong className="text-foreground">2004 no Brasil</strong> e expandiu sua atuação para
            <strong className="text-foreground"> Portugal entre 2016 e 2025</strong>.
          </p>
          <p>
            Nossa experiência em diferentes segmentos permite compreender os desafios dos
            clientes e desenvolver soluções eficientes, seguras e alinhadas aos objetivos
            estratégicos de cada organização.
          </p>
          <p>
            Atuamos integrando infraestrutura, tecnologia, treinamento e gestão de
            projetos para transformar desafios em resultados.
          </p>
        </div>
      </div>
    </section>
  );
}

const differentiators = [
  { icon: Globe2, title: "Experiência Internacional", text: "Atuação no Brasil e em Portugal trazendo diferentes perspectivas e melhores práticas." },
  { icon: Eye, title: "Visão Sistêmica", text: "Compreendemos tanto a tecnologia quanto os processos de negócio." },
  { icon: Briefcase, title: "Gestão Profissional", text: "Projetos conduzidos com base nas melhores práticas do PMBOK." },
  { icon: Rocket, title: "Agilidade", text: "Soluções práticas com foco em resultados rápidos e sustentáveis." },
  { icon: HeartHandshake, title: "Atendimento Personalizado", text: "Cada cliente recebe uma solução adequada à sua realidade." },
  { icon: Target, title: "Compromisso com Resultados", text: "Nosso foco é gerar valor para o negócio através da tecnologia." },
];

function Differentiators() {
  return (
    <section id="diferenciais" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Diferenciais
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Por que escolher a Solucyona
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-ink">
                <d.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Network,
    title: "Infraestrutura de Redes",
    items: ["Cabeamento estruturado", "Redes corporativas", "Wi-Fi empresarial", "Organização e documentação"],
  },
  {
    icon: Zap,
    title: "Infraestrutura Elétrica",
    items: ["Instalações de baixa tensão", "Organização técnica", "Adequação de ambientes"],
  },
  {
    icon: Cpu,
    title: "Tecnologia da Informação",
    items: ["Suporte técnico", "Administração de sistemas", "Consultoria em TI", "Segurança da informação"],
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    items: ["Literacia digital", "Capacitação corporativa", "Boas práticas de TI"],
  },
  {
    icon: ClipboardList,
    title: "Gestão de Projetos",
    items: ["Planejamento", "PMBOK", "Governança", "Controle", "Transformação digital"],
  },
];

function Services() {
  return (
    <section id="servicos" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Soluções completas para o seu negócio
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 ${
                i === 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand text-ink shadow-glow">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Search, title: "Diagnóstico", text: "Entendimento das necessidades do cliente." },
  { icon: PencilRuler, title: "Planejamento", text: "Definição da melhor solução." },
  { icon: Wrench, title: "Implementação", text: "Execução técnica com qualidade." },
  { icon: LifeBuoy, title: "Suporte e Evolução", text: "Acompanhamento contínuo e melhoria." },
];

function Process() {
  return (
    <section className="bg-gradient-dark py-24 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Como trabalhamos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Um método claro, do desafio ao resultado
          </h2>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent md:block" />
          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-ink shadow-glow ring-8 ring-ink">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-2 font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Etapa {i + 1}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-foreground/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const segments = [
  { icon: Factory, label: "Indústria" },
  { icon: Store, label: "Comércio" },
  { icon: School, label: "Educação" },
  { icon: HardHat, label: "Serviços" },
  { icon: Building2, label: "Escritórios" },
  { icon: UserRound, label: "Profissionais Liberais" },
];

function Segments() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Segmentos atendidos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Quem confia na Solucyona
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Independentemente do porte ou segmento, ajudamos organizações a utilizar a
            tecnologia como ferramenta para crescimento.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {segments.map((s) => (
            <div
              key={s.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-ink">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="text-sm font-semibold text-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaMid() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 20% 50%, var(--color-primary), transparent 40%), radial-gradient(800px circle at 80% 60%, var(--color-primary), transparent 50%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink-foreground text-balance sm:text-4xl md:text-5xl">
          Seu próximo desafio tecnológico começa aqui.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-foreground/75">
          Vamos conversar sobre como a Solucyona pode ajudar sua empresa.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.03]"
        >
          <MessageCircle className="h-5 w-5" />
          Falar com um Especialista
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contato" className="bg-muted py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contato
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Vamos conversar sobre o seu projeto
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Conte-nos o desafio da sua empresa. Respondemos rapidamente com uma proposta
            personalizada para a sua realidade.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </div>
                <div className="font-semibold text-foreground">+55 11 99439-3807</div>
              </div>
            </a>
            <a
              href="mailto:contato@solucyona.com"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  E-mail
                </div>
                <div className="font-semibold text-foreground">contato@solucyona.com</div>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-10">
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-brand text-ink shadow-glow">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Mensagem enviada com sucesso!
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Obrigado pelo contato. A equipe da Solucyona retornará em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Nome" name="nome" required />
                <Field label="Empresa" name="empresa" />
                <Field label="Telefone" name="telefone" type="tel" />
                <Field label="E-mail" name="email" type="email" required />
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Conte-nos sobre seu desafio..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
                  >
                    Quero Falar com a Solucyona <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-16 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs font-display text-lg italic text-ink-foreground/80">
            "Qual seu problema? A gente <span className="text-primary">Solucyona</span>."
          </p>
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/60">
            Soluções inteligentes para impulsionar o seu negócio.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contato
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
                +55 11 99439-3807
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:contato@solucyona.com" className="hover:text-primary">
                contato@solucyona.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-primary" />
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
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">
            Navegação
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-ink-foreground/80">
            <li><a href="#inicio" className="hover:text-primary">Início</a></li>
            <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-primary">Diferenciais</a></li>
            <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
            <li><a href="#contato" className="hover:text-primary">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-ink-foreground/10 px-4 pt-6 text-center text-xs text-ink-foreground/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Solucyona Smart Solutions. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110 animate-pulse-ring"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

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
