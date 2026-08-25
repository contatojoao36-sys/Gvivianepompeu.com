import { Instagram } from "lucide-react";
import { doctor, footer, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-bone/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 text-center sm:px-8">
        <span className="font-display text-2xl italic text-bone">{doctor.fullName}</span>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.68rem] uppercase tracking-[0.2em] transition-colors hover:text-champagne"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={doctor.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.75rem] transition-colors hover:text-champagne"
        >
          <Instagram className="h-4 w-4" />
          {doctor.instagramHandle}
        </a>

        <div className="rule-line w-full max-w-xs" />

        <p className="text-[0.68rem]">{footer.legal}</p>
      </div>
    </footer>
  );
}
