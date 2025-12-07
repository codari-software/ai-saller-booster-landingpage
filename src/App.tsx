import TopBanner from "./components/TopBanner.js";
import BeforeAfterAISection from "./sections/BeforeAfterAISection.js";
import BonusSection from "./sections/BonusSection.js";
import CooldownSection from "./sections/CooldownSection.js";
import FAQSection from "./sections/FAQSection.js";
import FeaturesSection from "./sections/FeaturesSection.js";
import GarantiaSection from "./sections/GarantiaSection.js";
import HeroSection from "./sections/HeroSection.js";
import HistorySection from "./sections/HistorySection.js";
import PlansSection from "./sections/PlansSection.js";
import ProblemSection from "./sections/ProblemSection.js";
import PromiseSection from "./sections/PromiseSetion.js";
import TestimonialsSection from "./sections/TestimonialsSection.js";
import TutorialSection from "./sections/TutorialSection.js";
import VideoSection from "./sections/VideoSection.js";

export function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <div className="sticky top-0 z-50">
        <TopBanner />
      </div>
      <TestimonialsSection />
      <ProblemSection />
      <PromiseSection />
      <VideoSection />
      <TutorialSection />
      <FeaturesSection />
      <BeforeAfterAISection />
      <PlansSection />
      <CooldownSection />
      <GarantiaSection />
      <HistorySection />
      <FAQSection />
      <BonusSection />
    </div>
  );
}
