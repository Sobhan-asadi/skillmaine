import {
  HiArrowLeft,
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineSignal,
  HiOutlineStar,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const categoryAccent = {
  Development: "bg-lime text-ink",
  Design: "bg-lavender text-ink",
  "Data Science": "bg-electric text-white",
  Marketing: "bg-coral text-ink",
};

export default function CourseDetailsHeader({ course }) {
  const accentClass = categoryAccent[course.category] ?? "bg-lime text-ink";

  return (
    <section className="border-ink bg-ink relative overflow-hidden border-b-2 pt-[72px] text-white">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.06]"
      />

      <div className="site-container relative">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)]">
          <div className="py-12 lg:border-r lg:border-white/15 lg:py-16 lg:pr-12 xl:py-20 xl:pr-16">
            <Link
              to="/courses"
              className="focus-ring hover:text-lime inline-flex items-center gap-2 font-mono text-[9px] font-bold tracking-[0.1em] text-white/45 uppercase transition"
            >
              <HiArrowLeft aria-hidden="true" className="text-sm" />
              Back to catalog
            </Link>

            <div className="mt-9 flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-1.5 font-mono text-[8px] font-bold tracking-[0.1em] uppercase ${accentClass}`}
              >
                {course.category}
              </span>

              {course.bestseller && (
                <span className="border border-white/20 px-3 py-1.5 font-mono text-[8px] font-bold tracking-[0.1em] text-white/60 uppercase">
                  Bestseller
                </span>
              )}

              {course.featured && (
                <span className="border-lime/40 text-lime border px-3 py-1.5 font-mono text-[8px] font-bold tracking-[0.1em] uppercase">
                  Featured
                </span>
              )}
            </div>

            <h1 className="mt-6 max-w-[900px] text-[clamp(3rem,6vw,6.8rem)] leading-[0.88] font-black tracking-[-0.07em]">
              {course.title}
            </h1>

            <p className="mt-7 max-w-[720px] text-base leading-7 text-white/55 sm:text-lg">
              {course.shortDescription}
            </p>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-4 border-y border-white/15 py-5">
              <div className="flex items-center gap-2">
                <HiOutlineSignal
                  aria-hidden="true"
                  className="text-lime text-lg"
                />

                <span className="font-mono text-[9px] font-bold tracking-[0.06em] text-white/55 uppercase">
                  {course.level}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineClock
                  aria-hidden="true"
                  className="text-lime text-lg"
                />

                <span className="font-mono text-[9px] font-bold tracking-[0.06em] text-white/55 uppercase">
                  {course.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineBookOpen
                  aria-hidden="true"
                  className="text-lime text-lg"
                />

                <span className="font-mono text-[9px] font-bold tracking-[0.06em] text-white/55 uppercase">
                  {course.lessons} lessons
                </span>
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineUserGroup
                  aria-hidden="true"
                  className="text-lime text-lg"
                />

                <span className="font-mono text-[9px] font-bold tracking-[0.06em] text-white/55 uppercase">
                  {Number(course.students).toLocaleString()} students
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <p className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/30 uppercase">
                  Instructor
                </p>

                <p className="mt-1 text-sm font-bold text-white/80">
                  {course.instructor.name}
                </p>
              </div>

              <div>
                <p className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/30 uppercase">
                  Language
                </p>

                <p className="mt-1 text-sm font-bold text-white/80">
                  {course.language}
                </p>
              </div>

              <div>
                <p className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/30 uppercase">
                  Rating
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <HiOutlineStar
                    aria-hidden="true"
                    className="text-lime text-base"
                  />

                  <span className="text-sm font-black text-white">
                    {course.rating}
                  </span>

                  <span className="font-mono text-[8px] text-white/35">
                    ({course.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 py-8 lg:border-t-0 lg:py-16 lg:pl-10 xl:py-20 xl:pl-12">
            <div className="relative overflow-hidden border border-white/15 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="grid grid-cols-2 border-t border-white/15">
                <div className="border-r border-white/15 p-4">
                  <p className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/30 uppercase">
                    Course price
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-lime text-2xl font-black tracking-[-0.04em]">
                      {course.price === 0 ? "Free" : `$${course.price}`}
                    </p>

                    {course.originalPrice > course.price && (
                      <p className="pb-1 font-mono text-[9px] text-white/30 line-through">
                        ${course.originalPrice}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/30 uppercase">
                    Curriculum
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
                    {String(course.curriculum?.length ?? 0).padStart(2, "0")}
                  </p>

                  <p className="mt-1 font-mono text-[8px] text-white/35 uppercase">
                    Sections
                  </p>
                </div>
              </div>
            </div>

            <p className="border-lime mt-4 border-l-2 pl-3 font-mono text-[8px] leading-5 font-semibold tracking-[0.07em] text-white/35 uppercase">
              Review the course structure and requirements below before adding
              it to your learning cart.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-electric border-t border-white/15">
        <div className="site-container flex min-h-11 items-center">
          <p className="font-mono text-[9px] font-bold tracking-[0.1em] text-white uppercase">
            Course details &nbsp;→&nbsp; Skills &nbsp;→&nbsp; Requirements
            &nbsp;→&nbsp; Curriculum
          </p>
        </div>
      </div>
    </section>
  );
}
