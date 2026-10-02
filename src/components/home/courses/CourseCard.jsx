import {
  HiArrowUpRight,
  HiOutlineClock,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const accentClasses = [
  "bg-lime text-ink",
  "bg-lavender text-ink",
  "bg-coral text-ink",
  "bg-electric text-white",
];

export default function CourseCard({ course, index }) {
  const accentClass = accentClasses[index % accentClasses.length];

  return (
    <Link
      to={`/courses/${course.id}`}
      className="group flex h-full flex-col border-t border-white/15 pt-3 text-white"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="font-mono text-[9px] font-semibold tracking-[0.12em] text-white/35 uppercase">
          Course / {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`px-2.5 py-1 font-mono text-[8px] font-bold tracking-[0.08em] uppercase ${accentClass}`}
        >
          {course.category}
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="text-ink group-hover:bg-lime absolute right-3 bottom-3 flex h-11 w-11 items-center justify-center bg-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <HiArrowUpRight aria-hidden="true" className="text-xl" />
        </div>

        {course.bestseller && (
          <span className="bg-ink absolute top-3 left-3 px-3 py-1.5 font-mono text-[8px] font-bold tracking-[0.1em] text-white uppercase">
            Bestseller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[9px] font-semibold tracking-[0.05em] text-white/45 uppercase">
          <span className="flex items-center gap-1.5">
            <HiOutlineClock aria-hidden="true" className="text-sm" />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <HiOutlineUserGroup aria-hidden="true" className="text-sm" />
            {course.students.toLocaleString()} students
          </span>
        </div>

        <h3 className="group-hover:text-lime mt-4 max-w-[520px] text-[clamp(1.35rem,2vw,2rem)] leading-[1.02] font-bold tracking-[-0.045em] transition-colors duration-300">
          {course.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/50">
          {course.shortDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-5 pt-6">
          <div>
            <p className="font-mono text-[8px] font-semibold tracking-[0.1em] text-white/30 uppercase">
              Instructor
            </p>

            <p className="mt-1 text-xs font-semibold text-white/70">
              {course.instructor.name}
            </p>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5">
              <span className="text-lime text-sm font-bold">
                ★ {course.rating}
              </span>

              <span className="font-mono text-[8px] text-white/30">
                ({course.reviews})
              </span>
            </div>

            <p className="mt-1 text-lg font-black tracking-[-0.04em]">
              {course.price === 0 ? "Free" : `$${course.price}`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
