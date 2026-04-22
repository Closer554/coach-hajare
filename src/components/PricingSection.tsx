import { motion } from "framer-motion";
import { siteContent } from "../content/siteContent";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function PricingSection() {
  return (
    <section
      id="tarifs"
      className="border-y border-[var(--line)] bg-[rgba(251,248,243,.64)] py-20 sm:py-24"
      aria-label={siteContent.tariffs.title}
    >
      <div className="section-wrap">
        <Reveal>
          <SectionTitle
            title={siteContent.tariffs.title}
            accent={siteContent.tariffs.accent}
            subtitle={siteContent.tariffs.subtitle}
            align="center"
          />
        </Reveal>

        <Reveal className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3" delay={0.1}>
          {siteContent.tariffs.offers.map((offer, index) => {
            const isCustom = offer.kind === "custom";

            return (
              <motion.article
                key={offer.name}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="paper-card relative flex min-h-[18rem] flex-col overflow-hidden p-6 sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className={`absolute right-0 top-0 h-28 w-28 rounded-bl-full ${
                    isCustom ? "bg-[rgba(182,158,138,.14)]" : "bg-[rgba(201,167,125,.18)]"
                  }`}
                />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <p className="font-serif text-2xl font-semibold leading-tight text-[var(--ink)]">{offer.name}</p>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${
                      isCustom
                        ? "border-[rgba(111,101,92,.24)] bg-[rgba(255,255,255,.54)] text-[var(--muted)]"
                        : "border-[rgba(201,167,125,.38)] bg-[rgba(201,167,125,.16)] text-[var(--ink)]"
                    }`}
                  >
                    {isCustom ? siteContent.tariffs.customLabel : siteContent.tariffs.fixedLabel}
                  </span>
                </div>

                <p
                  className={`relative z-10 mt-7 font-serif font-semibold leading-tight text-[var(--ink)] ${
                    isCustom ? "text-2xl sm:text-3xl" : "text-5xl"
                  }`}
                >
                  {offer.price}
                </p>

                <p className="relative z-10 mt-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {offer.description}
                </p>

                <div className="relative z-10 mt-auto pt-7">
                  <Button
                    as="a"
                    href={siteContent.brand.instagramDmUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant={index === 0 ? "primary" : "outline"}
                    ariaLabel={`${offer.ctaLabel} - ${offer.name}`}
                  >
                    {offer.ctaLabel}
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
