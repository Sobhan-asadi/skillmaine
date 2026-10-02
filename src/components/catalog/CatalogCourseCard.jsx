import {
  HiArrowUpRight,
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineSignal,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const categoryAccent = {
  Development: "bg-lime text-ink",
  Design: "bg-lavender text-ink",
  "Data Science": "bg-electric text-white",
  Marketing: "bg-coral text-ink",
};

export default function CatalogCourseCard({ course, index }) {
  const accentClass = categoryAccent[course.category] ?? "bg-paper text-ink";

  return (
    <article className="group border-ink flex h-full flex-col border-t-2 pt-3">
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="text-ink/35 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
          Course / {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`px-2.5 py-1 font-mono text-[8px] font-bold tracking-[0.08em] uppercase ${accentClass}`}
        >
          {course.category}
        </span>
      </div>

      <Link
        to={`/courses/${course.id}`}
        className="focus-ring bg-ink/5 relative block aspect-[16/10] overflow-hidden"
      >
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {course.bestseller && (
            <span className="bg-ink px-3 py-1.5 font-mono text-[8px] font-bold tracking-[0.08em] text-white uppercase">
              Bestseller
            </span>
          )}

          {course.featured && (
            <span className="bg-lime text-ink px-3 py-1.5 font-mono text-[8px] font-bold tracking-[0.08em] uppercase">
              Featured
            </span>
          )}
        </div>

        <span className="bg-paper text-ink group-hover:bg-lime absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <HiArrowUpRight aria-hidden="true" className="text-xl" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <div className="text-ink/40 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[8px] font-semibold tracking-[0.05em] uppercase">
          <span className="flex items-center gap-1.5">
            <HiOutlineSignal aria-hidden="true" className="text-sm" />

            {course.level}
          </span>

          <span className="flex items-center gap-1.5">
            <HiOutlineClock aria-hidden="true" className="text-sm" />

            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <HiOutlineBookOpen aria-hidden="true" className="text-sm" />
            {course.lessons} lessons
          </span>
        </div>

        <Link to={`/courses/${course.id}`} className="focus-ring mt-4 block">
          <h2 className="text-ink group-hover:text-electric text-[clamp(1.4rem,2vw,2rem)] leading-[1.02] font-black tracking-[-0.045em] transition-colors duration-300">
            {course.title}
          </h2>
        </Link>

        <p className="text-ink/50 mt-3 line-clamp-2 text-sm leading-6">
          {course.shortDescription}
        </p>

        <div className="border-ink/10 mt-5 flex items-center justify-between gap-4 border-y py-3">
          <div>
            <p className="text-ink/30 font-mono text-[8px] font-semibold tracking-[0.08em] uppercase">
              Instructor
            </p>

            <p className="text-ink/65 mt-1 text-xs font-bold">
              {course.instructor.name}
            </p>
          </div>

          <div className="text-right">
            <p className="text-ink text-sm font-black">★ {course.rating}</p>

            <p className="text-ink/35 mt-1 font-mono text-[8px]">
              {course.reviews} reviews
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-5 pt-5">
          <div className="text-ink/45 flex items-center gap-2">
            <HiOutlineUserGroup aria-hidden="true" className="text-base" />

            <span className="font-mono text-[9px] font-semibold">
              {Number(course.students).toLocaleString()} students
            </span>
          </div>

          <div className="text-right">
            {course.originalPrice > course.price && (
              <p className="text-ink/35 font-mono text-[9px] line-through">
                ${course.originalPrice}
              </p>
            )}

            <p className="text-ink text-xl font-black tracking-[-0.04em]">
              {course.price === 0 ? "Free" : `$${course.price}`}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
