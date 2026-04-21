import { siteContent } from "../content/siteContent";
import { Button } from "./Button";

function BrandWordmark() {
  return (
    <p className="font-serif text-2xl">
      Coach <span className="font-script text-4xl text-[var(--accent)]">H</span>ajare
    </p>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[rgba(251,248,243,.78)] py-10">
      <div className="section-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <BrandWordmark />
          <p className="mt-2 text-sm text-[var(--muted)]">{siteContent.footer.tagline}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{siteContent.footer.zone}</p>
          <p className="mt-1 text-xs text-[var(--muted)]">{siteContent.footer.rights}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            as="a"
            href={siteContent.brand.instagramDmUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            ariaLabel={"Ouvrir le DM Instagram de Coach Hajare"}
          >
            {"DM pour s\u00e9ance d\u00e9couverte"}
          </Button>
          <Button
            as="a"
            href={siteContent.brand.instagramUrl}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            ariaLabel="Ouvrir Instagram Coach Hajare"
          >
            Instagram
          </Button>
        </div>
      </div>
    </footer>
  );
}
