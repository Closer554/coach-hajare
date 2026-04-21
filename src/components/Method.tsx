import { motion } from "framer-motion";
import { siteContent } from "../content/siteContent";
import { Reveal } from "./Reveal";
import { Scribble, StarDoodle } from "./Doodles";
import { SectionTitle } from "./SectionTitle";
import { useAutoScrollCarousel } from "./useAutoScrollCarousel";

const duplicatedServices = [...siteContent.services, ...siteContent.services];

export function Method() {
  const carouselRef = useAutoScrollCarousel({ cycleDurationMs: 38000, resumeDelay: 10000 });

  return (
    <section id="method" className="py-20 sm:py-24">
      <div className="section-wrap">
        <Reveal>
          <SectionTitle
            title={"La M\u00e9thode HH\u2122 \u2014 Hexis Harmonia"}
            accent="HH"
            subtitle={"Une signature de mouvement qui articule la methode et ses benefices dans une seule lecture."}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <Reveal className="paper-card relative overflow-hidden p-8 sm:p-10" delay={0.1}>
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[rgba(201,167,125,.2)] blur-3xl" />
            <div className="absolute -bottom-16 left-6 h-40 w-40 rounded-full bg-[rgba(182,158,138,.16)] blur-3xl" />
            <StarDoodle className="absolute right-6 top-6 h-14 w-14 opacity-60" />
            <Scribble className="absolute bottom-6 right-6 hidden w-32 opacity-60 sm:block" />

            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Signature</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                {siteContent.method.signatureTitle}
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {siteContent.method.body}
              </p>
              <p className="mt-6 rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,.5)] px-5 py-4 text-sm leading-relaxed text-[var(--ink)]">
                {siteContent.method.detail}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <motion.article
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="paper-card h-full p-7 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {"Vision"}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                {"Un corps plus net, sans effets demonstratifs."}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {siteContent.method.note}
              </p>
              <p className="mt-6 rounded-[22px] border border-[var(--line)] bg-[rgba(216,199,182,.2)] px-4 py-4 text-sm leading-relaxed text-[var(--ink)]">
                {"Le resultat recherche tient dans la qualite d'execution, la regularite et la sensation d'un corps mieux tenu, plus stable et plus present."}
              </p>
            </motion.article>
          </Reveal>
        </div>

        <Reveal className="mt-10" delay={0.18}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {"Accompagnements & b\u00e9n\u00e9fices"}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                {"Une lecture plus horizontale de ce que la methode transforme."}
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              {"Fais glisser les cartes : le defilement automatique se coupe pendant l'interaction, puis repart apres 10 secondes."}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8" delay={0.22}>
          <div
            ref={carouselRef}
            className="method-carousel-shell interactive-carousel"
            aria-label="Carousel des accompagnements et benefices"
          >
            <div className="method-carousel-track interactive-carousel-track">
              {duplicatedServices.map((service, index) => {
                const isDuplicate = index >= siteContent.services.length;

                return (
                  <article
                    key={`${service.title}-${index}`}
                    aria-hidden={isDuplicate}
                    className="method-carousel-card"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="paper-card flex h-full flex-col p-6"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                        {service.focus}
                      </p>
                      <h4 className="mt-3 font-serif text-2xl font-semibold">{service.title}</h4>
                      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
                      <ul className="mt-5 space-y-2 text-sm text-[var(--ink)]">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
