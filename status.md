# Status

Date: 2026-04-21

- Adaptation du site vers Coach Hajare effectuee en conservant les composants React/Tailwind et le rythme visuel du projet existant.
- Le parcours couvre desormais : hero, a propos, tarifs, benefices, planning Paris, temoignages, FAQ et contact Instagram. La Methode HH est traitee en FAQ avec un texte plus leger.
- Section Tarifs ajoutee immediatement sous le hero : cards responsives, distinction tarifs fixes / sur mesure, prix hierarchises et CTA Instagram.
- Les anciens visuels brandes ont ete remplaces par des SVG sobres et facilement remplacables pour l'integration future des vrais assets.
- Optimisations SEO renforcees : canonical absolu, robots + sitemap, manifest, Open Graph/Twitter enrichis, image LCP prioritaire, prerendu HTML au build et donnees structurees WebSite/WebPage/Person/ProfessionalService/Service/FAQ.
- Verification technique effectuee : lint ESLint et build Vite + prerendu SSR passes.
- Verification restante optionnelle : substituer les placeholders visuels par les photos finales des qu'elles seront recues.
- Point a confirmer avant production si besoin : remplacer `https://coach-hajare.fr` par le domaine public definitif.
