import { useQuery } from "@tanstack/react-query";
import {
  HiArrowLeft,
  HiArrowPath,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";

import { fetchCourseById } from "../api/courses";
import Seo from "../components/Seo";
import ItemDetails from "../components/details/ItemDetails";
import NotFoundPage from "./NotFoundPage";

export default function DetailsPage() {
  const { courseId } = useParams();

  const {
    data: course,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["courses", courseId],
    queryFn: () => fetchCourseById(courseId),
    enabled: Boolean(courseId),
    retry: (failureCount, queryError) => {
      if (queryError?.status === 404) {
        return false;
      }

      return failureCount < 1;
    },
  });

  if (isPending) {
    return (
      <main className="bg-canvas min-h-screen pt-[72px]">
        <Seo
          title="Course"
          description="Explore course details, curriculum, skills, and learning information on SkillMaine."
        />

        <div className="site-container py-14 sm:py-16 lg:py-20">
          <div
            aria-label="Loading course details"
            aria-busy="true"
            className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]"
          >
            <div>
              <div className="bg-ink/10 h-3 w-32 animate-pulse" />

              <div className="bg-ink/10 mt-8 h-14 w-[85%] animate-pulse" />
              <div className="bg-ink/10 mt-3 h-14 w-[60%] animate-pulse" />

              <div className="bg-ink/[0.07] mt-8 h-4 w-full max-w-[650px] animate-pulse" />
              <div className="bg-ink/[0.07] mt-3 h-4 w-full max-w-[520px] animate-pulse" />

              <div className="bg-ink/10 mt-10 aspect-[16/9] animate-pulse" />
            </div>

            <div className="border-ink/10 bg-paper h-[520px] animate-pulse border-2" />
          </div>
        </div>
      </main>
    );
  }

  if (isError && error?.status === 404) {
    return <NotFoundPage />;
  }

  if (isError) {
    return (
      <main className="bg-canvas flex min-h-screen items-center pt-[72px]">
        <Seo
          title="Course Unavailable"
          description="This SkillMaine course is temporarily unavailable."
        />

        <div className="site-container py-16">
          <div
            role="alert"
            className="border-ink bg-paper max-w-[760px] border-2 p-6 sm:p-9"
          >
            <span className="bg-coral text-ink flex h-12 w-12 items-center justify-center">
              <HiOutlineExclamationTriangle
                aria-hidden="true"
                className="text-xl"
              />
            </span>

            <p className="section-kicker text-ink/35 mt-7">
              Course / Unavailable
            </p>

            <h1 className="text-ink mt-3 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              We couldn&apos;t load this course.
            </h1>

            <p className="text-ink/55 mt-4 max-w-[560px] text-sm leading-6">
              The course data is currently unavailable. Please try again.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => refetch()}
                className="skill-button"
              >
                <HiArrowPath aria-hidden="true" className="text-base" />
                Try again
              </button>

              <Link to="/courses" className="outline-button">
                <HiArrowLeft aria-hidden="true" className="text-base" />
                Back to courses
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Seo
        title={course.title}
        description={
          course.shortDescription ||
          `Explore ${course.title} course details, curriculum, and skills on SkillMaine.`
        }
      />

      <ItemDetails course={course} />
    </>
  );
}
