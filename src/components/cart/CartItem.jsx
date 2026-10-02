import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineTrash,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function CartItem({ course, index, onRemove }) {
  const hasDiscount = Number(course.originalPrice) > Number(course.price);

  return (
    <article className="border-ink/15 grid gap-5 border-b py-6 sm:grid-cols-[180px_minmax(0,1fr)_auto] sm:items-start">
      <Link
        to={`/courses/${course.id}`}
        className="focus-ring bg-ink/5 block overflow-hidden"
      >
        <img
          src={course.image}
          alt={course.title}
          className="aspect-[16/10] h-full w-full object-cover transition duration-500 hover:scale-[1.04] sm:aspect-[4/3]"
        />
      </Link>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-ink/30 font-mono text-[8px] font-bold tracking-[0.1em] uppercase">
            / {String(index + 1).padStart(2, "0")}
          </span>

          <span className="bg-lavender text-ink px-2.5 py-1 font-mono text-[8px] font-bold tracking-[0.07em] uppercase">
            {course.category}
          </span>
        </div>

        <Link
          to={`/courses/${course.id}`}
          className="focus-ring mt-3 block w-fit"
        >
          <h2 className="text-ink hover:text-electric text-xl leading-[1.05] font-black tracking-[-0.04em] transition sm:text-2xl">
            {course.title}
          </h2>
        </Link>

        {course.instructor?.name && (
          <p className="text-ink/45 mt-2 text-xs font-semibold">
            By {course.instructor.name}
          </p>
        )}

        <div className="text-ink/40 mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[8px] font-semibold tracking-[0.05em] uppercase">
          <span className="flex items-center gap-1.5">
            <HiOutlineClock aria-hidden="true" className="text-sm" />

            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <HiOutlineBookOpen aria-hidden="true" className="text-sm" />
            {course.lessons} lessons
          </span>

          <span>{course.level}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
        <div className="text-left sm:text-right">
          <p className="text-ink text-xl font-black tracking-[-0.04em]">
            {Number(course.price) === 0
              ? "Free"
              : `$${Number(course.price).toFixed(2)}`}
          </p>

          {hasDiscount && (
            <p className="text-ink/35 mt-1 font-mono text-[9px] line-through">
              ${Number(course.originalPrice).toFixed(2)}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => onRemove(course.id)}
          aria-label={`Remove ${course.title} from cart`}
          className="focus-ring border-ink/15 text-ink/40 hover:border-coral hover:bg-coral hover:text-ink flex h-10 w-10 items-center justify-center border transition"
        >
          <HiOutlineTrash aria-hidden="true" className="text-lg" />
        </button>
      </div>
    </article>
  );
}
