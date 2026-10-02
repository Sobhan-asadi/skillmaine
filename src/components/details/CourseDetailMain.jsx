import CourseCurriculum from "./CourseCurriculum";
import CourseInstructor from "./CourseInstructor";
import CourseOverview from "./CourseOverview";
import CoursePurchaseCard from "./CoursePurchaseCard";
import RequirementsSection from "./RequirementsSection";

export default function CourseDetailMain({ course }) {
  return (
    <section className="bg-canvas">
      <div className="site-container">
        <div className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-12 lg:py-20 xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-16">
          <div className="min-w-0">
            <CourseOverview
              description={course.description}
              skills={course.skills ?? []}
            />

            <RequirementsSection
              label="Before you start"
              title="Requirements"
              items={course.requirements ?? []}
            />

            <CourseCurriculum curriculum={course.curriculum ?? []} />

            <CourseInstructor
              instructor={course.instructor}
              category={course.category}
              level={course.level}
            />
          </div>

          <CoursePurchaseCard course={course} />
        </div>
      </div>
    </section>
  );
}
