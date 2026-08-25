import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Authority } from "@/components/sections/Authority";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { VisualExperience } from "@/components/sections/VisualExperience";
import { Links } from "@/components/sections/Links";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

const title = "Dra. Helo Porcelli | Medicina Estética";
const description =
  "Dra. Helo Porcelli — medicina estética autoral. Conheça a abordagem, os procedimentos e os canais oficiais de contato.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-bone">
      <Nav />
      <Hero />
      <Authority />
      <About />
      <Services />
      <VisualExperience />
      <Links />
      <CTA />
      <Footer />
    </main>
  );
}
