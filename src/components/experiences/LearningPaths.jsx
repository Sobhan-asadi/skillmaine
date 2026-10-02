import { useQuery } from "@tanstack/react-query";
import { HiArrowPath, HiOutlineExclamationTriangle } from "react-icons/hi2";

import { fetchCourses } from "../../api/courses";
import LearningPathCard from "./LearningPathCard";

const learningPaths = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Move from JavaScript fundamentals into React, TypeScript, and backend-aware application development.",
    courseIds: [
      "advanced-javascript",
      "react-modern-apps",
      "typescript-professional",
      "node-api-development",
    ],
    accentClass: "bg-lime",
  },
  {
    number: "02",
    title: "Product Design",
    description:
      "Build a foundation in interface design, move into professional Figma workflows, and finish with purposeful web motion.",
    courseIds: [
      "ui-ux-foundations",
      "figma-product-design",
      "motion-web-design",
    ],
    accentClass: "bg-coral",
  },
  {
    number: "03",
    title: "Data & ML",
    description:
      "Develop problem-solving foundations, learn practical data analysis, and progress into machine learning concepts.",
    courseIds: [
      "python-data-structures",
      "data-analysis-python",
      "machine-learning-foundations",
    ],
    accentClass: "bg-lavender",
  },
];

function LearningPathsSkeleton() {
  return (
    <div
      aria-label="Loading learning paths"
      aria-busy="true"
      className="space-y-6"
    >
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="border-ink/10 bg-paper grid min-h-[420px] animate-pulse border-2 lg:grid-cols-[280px_minmax(0,1fr)]"
        >
          <div className="border-ink/10 border-b-2 p-8 lg:border-r-2 lg:border-b-0">
            <div className="bg-ink/10 h-4 w-4" />
            <div className="bg-ink/10 mt-12 h-8 w-3/4" />
            <div className="bg-ink/10 mt-3 h-8 w-1/2" />
            <div className="bg-ink/[0.07] mt-7 h-3 w-full" />
            <div className="bg-ink/[0.07] mt-2 h-3 w-4/5" />
          </div>

          <div className="divide-ink/10 divide-y">
            {[1, 2, 3].map((row) => (
              <div key={row} className="bg-ink/[0.025] h-[130px]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LearningPaths() {
  const {
    data: courses = [],
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const paths = learningPaths.map((path) => ({
    ...path,
    courses: path.courseIds
      .map((courseId) => courses.find((course) => course.id === courseId))
      .filter(Boolean),
  }));

  return (
    <section
      id="learning-paths"
      className="border-ink bg-canvas scroll-mt-[72px] border-b-2"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="border-ink mb-10 flex flex-col gap-7 border-b-2 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker text-ink/35">
              Curated directions / 03
            </p>

            <h2 className="mt-5 max-w-[760px] text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.88] font-black tracking-[-0.065em] uppercase">
              Choose a
              <br />
              <span className="text-electric">direction.</span>
            </h2>
          </div>

          <p className="text-ink/50 max-w-[420px] text-sm leading-7 font-medium">
            These paths organize related courses into practical directions. They
            are guides, not prerequisites—you can explore any course
            independently.
          </p>
        </div>

        {isPending && <LearningPathsSkeleton />}

        {isError && (
          <div role="alert" className="border-ink bg-paper border-2 p-6 sm:p-8">
            <span className="bg-coral text-ink flex h-11 w-11 items-center justify-center">
              <HiOutlineExclamationTriangle
                aria-hidden="true"
                className="text-xl"
              />
            </span>

            <h3 className="text-ink mt-6 text-2xl font-black tracking-[-0.04em]">
              Learning paths couldn&apos;t be loaded.
            </h3>

            <p className="text-ink/50 mt-2 max-w-[520px] text-sm leading-6">
              Course data is temporarily unavailable. Try loading the paths
              again.
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              className="skill-button mt-6"
            >
              <HiArrowPath aria-hidden="true" className="text-base" />
              Try again
            </button>
          </div>
        )}

        {!isPending && !isError && (
          <div className="space-y-6">
            {paths.map((path) => (
              <LearningPathCard
                key={path.number}
                number={path.number}
                title={path.title}
                description={path.description}
                courses={path.courses}
                accentClass={path.accentClass}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
