import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/nalua/Header";
import { Hero } from "@/components/nalua/Hero";
import { Categories } from "@/components/nalua/Categories";
import { FeaturedProducts } from "@/components/nalua/FeaturedProducts";
import { BrandUniverse } from "@/components/nalua/BrandUniverse";
import { CollectionSpotlight } from "@/components/nalua/CollectionSpotlight";
import { FinalCta } from "@/components/nalua/FinalCta";
import { Footer } from "@/components/nalua/Footer";
import { FloatingCta } from "@/components/nalua/FloatingCta";

const title = "NaLua | Acessórios artesanais personalizados";
const description =
  "Brincos, colares, pulseiras, chaveiros e presilhas feitos à mão pela NaLua — peças exclusivas inspiradas em k-pop, animes e cultura pop. Confira no Instagram @ynalua.arte.";

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
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen bg-background">
        <Header />
        <Hero />
        <Categories />
        <FeaturedProducts />
        <BrandUniverse />
        <CollectionSpotlight />
        <FinalCta />
        <Footer />
        <FloatingCta />
      </main>
    </MotionConfig>
  );
}
