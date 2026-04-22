import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteContent } from "../content/siteContent";
import { Button } from "./Button";

function BrandWordmark() {
  return (
    <span className="font-serif text-2xl font-semibold tracking-tight text-[var(--ink)]">
      Coach <span className="font-script text-4xl text-[var(--accent)]">H</span>ajare
    </span>
  );
}

export function Navbar() {
  const [activeId, setActiveId] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = siteContent.nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: [0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(251,248,243,.9)] backdrop-blur md:sticky">
      <nav className="section-wrap flex h-20 items-center justify-between gap-6">
        <a href="#hero" aria-label="Aller en haut de la page Coach Hajare">
          <BrandWordmark />
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {siteContent.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "page" : undefined}
                className={`relative text-sm font-medium transition ${activeId === item.id ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
              >
                {item.label}
                {activeId === item.id ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[var(--accent)]"
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <Button
            as="a"
            href={siteContent.brand.instagramDmUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            ariaLabel={"Ouvrir le DM Instagram de Coach Hajare"}
          >
            {"DM d\u00e9couverte"}
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] xl:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          <span className="text-lg">{open ? "x" : "="}</span>
        </button>
      </nav>

      {open ? (
        <div className="section-wrap pb-4 xl:hidden">
          <ul className="paper-card flex flex-col gap-2 p-4">
            {siteContent.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--ink)] hover:bg-[rgba(201,167,125,.18)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                as="a"
                href={siteContent.brand.instagramDmUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="w-full"
                ariaLabel={"Ouvrir le DM Instagram de Coach Hajare"}
              >
                {"DM d\u00e9couverte"}
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
