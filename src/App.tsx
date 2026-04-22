import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Method } from "./components/Method";
import { Navbar } from "./components/Navbar";
import { OrganicDivider } from "./components/Doodles";
import { Pricing } from "./components/Pricing";
import { PricingSection } from "./components/PricingSection";
import { Reviews } from "./components/Reviews";
import { Seo } from "./components/Seo";
import { Social } from "./components/Social";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Seo />
      <Navbar />
      <main className="pt-20 md:pt-0">
        <Hero />
        <PricingSection />
        <OrganicDivider flip />
        <Method />
        <OrganicDivider flip />
        <Pricing />
        <OrganicDivider flip={false} />
        <Reviews />
        <OrganicDivider flip />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;
