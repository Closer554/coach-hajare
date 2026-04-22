import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { siteContent } from "../content/siteContent";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "./Button";

export function Pricing() {
  const [activeDay, setActiveDay] = useState(siteContent.schedule[0]?.key ?? "monday");

  const current = useMemo(
    () => siteContent.schedule.find((day) => day.key === activeDay) ?? siteContent.schedule[0],
    [activeDay],
  );

  if (!current) {
    return null;
  }

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="section-wrap">
        <Reveal>
          <SectionTitle
            title={"Planning des cours de Pilates et posture \u00e0 Paris"}
            accent="Paris"
            subtitle={"Retrouvez les cours par jour dans une lecture claire et mobile-friendly."}
            align="center"
          />
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl" delay={0.1}>
          <div className="paper-card relative grid grid-cols-2 gap-1.5 p-1.5 sm:grid-cols-4">
            {siteContent.schedule.map((day) => (
              <button
                key={day.key}
                className={`relative z-10 rounded-full px-3 py-3 text-sm font-semibold transition ${
                  activeDay === day.key ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
                type="button"
                onClick={() => setActiveDay(day.key)}
                aria-pressed={activeDay === day.key}
                aria-label={`Afficher le planning du ${day.label.toLowerCase()}`}
              >
                {activeDay === day.key ? (
                  <motion.span
                    layoutId="schedule-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[rgba(201,167,125,.34)]"
                    transition={{ type: "spring", stiffness: 290, damping: 26 }}
                  />
                ) : null}
                {day.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-5xl" delay={0.15}>
          <div className="paper-card p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold">{current.label}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{siteContent.scheduleNote}</p>
              </div>
              <Button
                as="a"
                href={siteContent.brand.instagramDmUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                ariaLabel={"Demander les disponibilit\u00e9s par Instagram"}
              >
                {"DM pour les disponibilit\u00e9s"}
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {current.sessions.map((session) => (
                <article
                  key={`${current.key}-${session.venue}-${session.time}-${session.className ?? "general"}`}
                  className="rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,.58)] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-xl font-semibold">{session.venue}</p>
                      <p className="mt-2 text-sm text-[var(--muted)]">{session.className ?? "Cours signature"}</p>
                    </div>
                    <span className="rounded-full border border-[var(--line)] bg-[rgba(216,199,182,.24)] px-3 py-1 text-sm font-semibold text-[var(--ink)]">
                      {session.time}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-xs text-[var(--muted)]">
              {"Planning indicatif. Contact en DM pour la s\u00e9ance d\u00e9couverte, les cr\u00e9neaux \u00e0 domicile et les mises \u00e0 jour."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
