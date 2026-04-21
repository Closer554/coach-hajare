import { motion } from "framer-motion";
import { siteContent } from "../content/siteContent";
import { Button } from "./Button";
import { Scribble, StarDoodle } from "./Doodles";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-5rem)] items-center py-14 sm:py-20">
      <div className="section-wrap">
        <div className="paper-card relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[rgba(201,167,125,.22)] blur-2xl" />
          <div className="absolute -bottom-20 -left-8 h-60 w-60 rounded-full bg-[rgba(182,158,138,.2)] blur-2xl" />
          <StarDoodle className="absolute right-5 top-5 h-12 w-12 opacity-70 sm:h-16 sm:w-16" />
          <Scribble className="absolute bottom-6 right-6 hidden w-40 opacity-70 sm:block" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,.8fr)] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="mb-5 inline-flex rounded-full border border-[var(--line)] bg-[rgba(216,199,182,.42)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">
                {siteContent.hero.locationLabel}
              </div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {siteContent.hero.kicker}
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {siteContent.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {siteContent.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button as="a" href="#method" ariaLabel={"D\u00e9couvrir la M\u00e9thode HH\u2122"}>
                  {siteContent.hero.primaryCtaLabel}
                </Button>
                <Button
                  as="a"
                  href={siteContent.brand.instagramDmUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  ariaLabel={"Envoyer un DM Instagram \u00e0 Coach Hajare"}
                >
                  {siteContent.hero.secondaryCtaLabel}
                </Button>
              </div>

              <p className="mt-5 text-sm text-[var(--muted)]">{siteContent.hero.reassurance}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
              className="relative mx-auto w-full max-w-[24rem]"
            >
              <div className="absolute -right-4 top-8 h-16 w-16 rounded-full bg-[rgba(201,167,125,.16)] blur-xl" />
              <div className="paper-card overflow-hidden p-2">
                <div className="aspect-[4/5] overflow-hidden rounded-[24px]">
                  <img
                    src={siteContent.presentation.portraitSrc}
                    alt={siteContent.presentation.portraitAlt}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            id="about"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.14 }}
            className="relative z-10 mt-8 grid gap-5 lg:grid-cols-[1.15fr_.85fr]"
          >
            <div className="rounded-[28px] border border-[var(--line)] bg-[rgba(255,255,255,.5)] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {"\u00c0 propos"}
              </p>
              <h2 className="mt-3 whitespace-pre-line font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                {siteContent.presentation.greeting}
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {siteContent.presentation.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
