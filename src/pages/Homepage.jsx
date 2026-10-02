import Category from "../components/home/Category";
import DescriptionNoticeSection from "../components/home/DescriptionNoticeSection";
import HeroSection from "../components/home/hero/HeroSection";
import PopularCourses from "../components/home/PopularCourses";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Homepage() {
  return (
    <>
      <HeroSection />

      <section id="featured-courses" className="w-full">
        <PopularCourses />
      </section>

      <section className="w-full">
        <Category />
      </section>

      <section className="w-full">
        <DescriptionNoticeSection />
      </section>

      <section className="w-full">
        <TestimonialsSection />
      </section>
    </>
  );
}
