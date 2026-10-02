import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function CategoryRow({
  index,
  title,
  description,
  skills,
  courseCount,
  accent,
}) {
  return (
    <Link
      to={`/courses?category=${encodeURIComponent(title)}`}
      className="group border-ink hover:bg-paper relative grid overflow-hidden border-t-2 py-6 transition-colors duration-300 last:border-b-2 sm:py-8 lg:grid-cols-[90px_minmax(220px,0.8fr)_minmax(0,1.2fr)_72px] lg:items-center lg:gap-6 lg:px-5"
    >
      <div className="flex items-center justify-between lg:block">
        <span className="text-ink/35 font-mono text-[10px] font-bold tracking-[0.12em]">
          / {String(index).padStart(2, "0")}
        </span>

        <span
          aria-hidden="true"
          className={`h-3 w-3 lg:mt-5 lg:h-4 lg:w-4 ${accent}`}
        />
      </div>

      <div className="mt-5 lg:mt-0">
        <p className="text-ink/40 font-mono text-[9px] font-semibold tracking-[0.1em] uppercase">
          {String(courseCount).padStart(2, "0")} courses
        </p>

        <h3 className="mt-2 text-[clamp(1.8rem,3.5vw,3.8rem)] leading-[0.92] font-black tracking-[-0.06em] uppercase transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
      </div>

      <div className="mt-5 lg:mt-0">
        <p className="text-ink/55 max-w-[560px] text-sm leading-6 font-medium">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border-ink/15 text-ink/55 group-hover:border-ink/25 group-hover:bg-canvas border px-2.5 py-1 font-mono text-[8px] font-semibold tracking-[0.06em] uppercase transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end lg:mt-0">
        <span className="border-ink text-ink group-hover:bg-ink flex h-12 w-12 items-center justify-center border-2 bg-transparent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white lg:h-14 lg:w-14">
          <HiArrowUpRight aria-hidden="true" className="text-xl" />
        </span>
      </div>
    </Link>
  );
}
