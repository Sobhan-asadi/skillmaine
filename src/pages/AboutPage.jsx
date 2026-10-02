import AboutHero from "../components/about/AboutHero";
import ExploreLearning from "../components/about/ExploreLearning";
import LearningModel from "../components/about/LearningModel";
import PlatformPrinciples from "../components/about/PlatformPrinciples";
import Seo from "../components/Seo";

export default function AboutPage() {
  return (
    <main className="bg-canvas pt-[72px]">
      <Seo
        title="About"
        description="Learn how SkillMaine approaches course discovery with focused learning paths, clear course information, and flexible skill exploration."
      />

      <AboutHero />
      <LearningModel />
      <PlatformPrinciples />
      <ExploreLearning />
    </main>
  );
}
