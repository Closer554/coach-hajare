import { siteContent } from "../content/siteContent";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Social() {
  return (
    <section id="social" className="py-20 sm:py-24">
      <div className="section-wrap">
        <Reveal>
          <SectionTitle title={siteContent.social.title} accent="Instagram" subtitle={siteContent.social.intro} />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal className="paper-card p-7 sm:p-9" delay={0.1}>
            <p className="text-sm text-[var(--muted)]">Instagram</p>
            <p className="mt-2 font-serif text-4xl">{siteContent.brand.instagramHandle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                as="a"
                href={siteContent.brand.instagramDmUrl}
                target="_blank"
                rel="noreferrer"
                ariaLabel={"Ouvrir le DM Instagram de Coach Hajare"}
              >
                {siteContent.social.dmLabel}
              </Button>
              <Button
                as="a"
                href={siteContent.brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                ariaLabel={"Ouvrir le profil Instagram de Coach Hajare"}
              >
                {siteContent.social.profileLabel}
              </Button>
            </div>
          </Reveal>

          <Reveal className="paper-card p-7 sm:p-9" delay={0.2}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {siteContent.social.messageLabel}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{siteContent.social.messageIntro}</p>
            <div className="mt-5 rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,.55)] p-5">
              <p className="text-sm leading-relaxed text-[var(--ink)]">
                {"\u201c"}
                {siteContent.brand.discoveryMessage}
                {"\u201d"}
              </p>
            </div>

            <h3 className="mt-8 font-serif text-2xl font-semibold">FAQ</h3>
            <div className="mt-6 space-y-3">
              {siteContent.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,.55)] px-4 py-3"
                >
                  <summary className="cursor-pointer list-none pr-6 text-sm font-medium text-[var(--ink)]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
