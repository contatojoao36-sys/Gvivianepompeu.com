import { Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { MoonMark } from "./MoonMark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background px-5 pb-28 pt-14 text-center sm:pb-16">
      <MoonMark className="mx-auto h-8 w-8 text-purple/70" />

      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.24em] text-ink/70 transition-colors hover:text-primary"
      >
        <Instagram className="h-4 w-4" strokeWidth={1.75} />
        {site.handle}
      </a>

      <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.72rem] uppercase tracking-[0.14em] text-ink/60">
        <a
          href={site.allProductsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          Produtos
        </a>
        <a
          href={site.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          Contato
        </a>
        <a
          href={site.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          Loja oficial
        </a>
      </nav>

      <div className="rule-line mx-auto mt-8 max-w-[220px]" />

      <p className="font-script mt-6 text-[1.35rem] text-primary">{site.footerTagline}</p>
      <p className="mt-3 text-[0.7rem] text-ink/50">{site.materials}</p>
      <p className="mt-4 text-[0.68rem] text-ink/40">
        © {year} {site.brand} — {site.tagline}
      </p>
    </footer>
  );
}
