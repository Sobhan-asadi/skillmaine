import Seo from "../components/Seo";
import ExperiencesCTA from "../components/experiences/ExperiencesCTA";
import ExperiencesHero from "../components/experiences/ExperiencesHero";
import LearningPaths from "../components/experiences/LearningPaths";

export default function ExperiencesPage() {
  return (
    <main className="bg-canvas pt-[72px]">
      <Seo
        title="Learning Experiences"
        description="Explore curated SkillMaine learning paths across frontend development, product design, data, and machine learning."
      />

      <ExperiencesHero />
      <LearningPaths />
      <ExperiencesCTA />
    </main>
  );
}
