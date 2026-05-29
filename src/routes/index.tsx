import { createFileRoute } from "@tanstack/react-router";
import SolucyonaLanding from "@/components/SolucyonaLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solucyona Smart Solutions | Tecnologia, Infraestrutura e Gestão de Projetos" },
      {
        name: "description",
        content:
          "Empresa especializada em infraestrutura elétrica, redes corporativas, suporte técnico, consultoria em TI, treinamentos e gestão de projetos.",
      },
      {
        name: "keywords",
        content:
          "infraestrutura de redes, suporte técnico, consultoria em TI, gestão de projetos, PMBOK, tecnologia empresarial, infraestrutura elétrica, redes corporativas, transformação digital",
      },
      { property: "og:title", content: "Solucyona Smart Solutions" },
      {
        property: "og:description",
        content:
          "Soluções inteligentes em infraestrutura, tecnologia e gestão. Mais de 20 anos transformando desafios em resultados.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Solucyona Smart Solutions",
          url: "/",
          slogan: "Qual seu problema? A gente Solucyona.",
          foundingDate: "2004",
          areaServed: ["BR", "PT"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55-11-99439-3807",
            contactType: "customer service",
            email: "contato@solucyona.com",
            availableLanguage: ["Portuguese"],
          },
          sameAs: ["https://linkedin.com/showcase/solucyonasmartsolutions"],
        }),
      },
    ],
  }),
  component: SolucyonaLanding,
});
