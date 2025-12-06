import TopBanner from "./components/TopBanner.js";
import BeforeAfterAISection from "./sections/BeforeAfterAISection.js";
import FeaturesSection from "./sections/FeaturesSection.js";
import HeroSection from "./sections/HeroSection.js";
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
    </div>
  );
}
