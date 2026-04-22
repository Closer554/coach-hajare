import { motion } from "framer-motion";
import { siteContent } from "../content/siteContent";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { useAutoScrollCarousel } from "./useAutoScrollCarousel";

const duplicatedServices = [...siteContent.services, ...siteContent.services];

export function Method() {
  const carouselRef = useAutoScrollCarousel({ cycleDurationMs: 38000, resumeDelay: 10000 });

  return (
    <section id="benefices" className="py-20 sm:py-24">
      <div className="section-wrap">
        <Reveal>
          <SectionTitle
            title={siteContent.benefitsSection.title}
            accent={siteContent.benefitsSection.accent}
            subtitle={siteContent.benefitsSection.subtitle}
            align="center"
          />
        </Reveal>

        <Reveal className="mt-12" delay={0.12}>
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
                    data-nosnippet={isDuplicate ? true : undefined}
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
