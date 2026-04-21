import { motion } from "framer-motion";
import { siteContent } from "../content/siteContent";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { useAutoScrollCarousel } from "./useAutoScrollCarousel";

const duplicatedReviews = [...siteContent.reviews, ...siteContent.reviews];

export function Reviews() {
  const carouselRef = useAutoScrollCarousel({ cycleDurationMs: 34000, resumeDelay: 10000 });

  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="section-wrap">
        <Reveal>
          <SectionTitle
            title={"T\u00e9moignages"}
            accent={"\u00c9l\u00e8ves"}
            subtitle={"Des retours qui parlent de transformation, de pr\u00e9cision et de qualit\u00e9 d'accompagnement."}
            align="center"
          />
        </Reveal>

        <Reveal className="mt-12" delay={0.08}>
          <div
            ref={carouselRef}
            className="reviews-carousel-shell interactive-carousel"
            aria-label="Carousel des temoignages"
          >
            <div className="reviews-carousel-track interactive-carousel-track">
              {duplicatedReviews.map((review, index) => {
                const isDuplicate = index >= siteContent.reviews.length;

                return (
                  <article
                    key={`${review.name}-${review.context}-${index}`}
                    aria-hidden={isDuplicate}
                    className="reviews-carousel-card"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="paper-card relative flex h-full flex-col overflow-hidden p-6 sm:p-7"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-5 top-3 font-serif text-7xl leading-none text-[rgba(201,167,125,.32)]"
                      >
                        {"\u201c"}
                      </span>
                      <p className="relative z-10 whitespace-pre-line pl-6 text-sm leading-7 text-[var(--muted)]">
                        {review.text}
                      </p>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[var(--ink)]">{review.name}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                            {review.context}
                          </p>
                        </div>
                        <span className="rounded-full border border-[var(--line)] bg-[rgba(216,199,182,.22)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">
                          {"HH\u2122"}
                        </span>
                      </div>
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
