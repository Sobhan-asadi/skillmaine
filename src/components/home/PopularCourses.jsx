import { useQuery } from "@tanstack/react-query";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import { fetchCourses } from "../../api/courses";
import CourseCard from "./courses/CourseCard";
import CoursesError from "./courses/CoursesError";
import CoursesSkeleton from "./courses/CoursesSkeleton";

export default function PopularCourses() {
  const {
    data: courses = [],
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const featuredCourses = courses.slice(0, 4);

  return (
    <section className="bg-ink relative overflow-hidden py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full border border-white/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[620px] w-[620px] translate-x-1/3 -translate-y-1/3 rounded-full border border-white/[0.04]"
      />

      <div className="site-container relative">
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-lime h-2.5 w-2.5" />

              <p className="section-kicker text-white/40">
                Featured learning / 01
              </p>
            </div>

            <h2 className="mt-6 max-w-[850px] text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.88] font-black tracking-[-0.07em] uppercase">
              Start with
              <br />
              something <span className="text-lime">useful.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-[330px] text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              A focused selection of practical courses for building skills you
              can actually use in your next project.
            </p>
            <Link
              to="/courses"
              className="group border-lime bg-lime text-ink mt-7 flex w-full max-w-[330px] items-center justify-between border-2 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <div>
                <span className="block font-mono text-[8px] font-bold tracking-[0.12em] uppercase opacity-50">
                  Full catalog
                </span>

                <span className="mt-1 block text-sm font-black tracking-[-0.02em] uppercase">
                  Explore all courses
                </span>
              </div>

              <span className="bg-ink flex h-10 w-10 items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <HiArrowUpRight aria-hidden="true" className="text-xl" />
              </span>
            </Link>
          </div>
        </div>

        <div className="pt-12 sm:pt-14">
          {isPending && <CoursesSkeleton />}

          {isError && (
            <CoursesError message={error?.message} onRetry={refetch} />
          )}

          {!isPending && !isError && (
            <>
              <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
                {featuredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
              </div>

              <div className="mt-16 grid border-y border-white/15 sm:grid-cols-3">
                <div className="border-b border-white/15 py-6 sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0">
                  <p className="font-mono text-[9px] font-semibold tracking-[0.12em] text-white/30 uppercase">
                    Catalog
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-[-0.05em]">
                    {String(courses.length).padStart(2, "0")} courses
                  </p>
                </div>

                <div className="border-b border-white/15 py-6 sm:border-r sm:border-b-0 sm:px-5">
                  <p className="font-mono text-[9px] font-semibold tracking-[0.12em] text-white/30 uppercase">
                    Learning fields
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-[-0.05em]">
                    04 categories
                  </p>
                </div>

                <div className="py-6 sm:pl-5">
                  <p className="font-mono text-[9px] font-semibold tracking-[0.12em] text-white/30 uppercase">
                    Format
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-[-0.05em]">
                    Self-paced
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
