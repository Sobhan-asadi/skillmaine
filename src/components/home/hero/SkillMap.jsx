import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const skillAreas = [
  {
    id: "01",
    title: "Development",
    subtitle: "Build for the web",
    courseCount: 4,
    path: "/courses?category=Development",
    className:
      "col-span-2 min-h-[190px] bg-electric text-white sm:min-h-[220px]",
  },
  {
    id: "02",
    title: "Design",
    subtitle: "Shape digital ideas",
    courseCount: 3,
    path: "/courses?category=Design",
    className: "min-h-[165px] bg-lime text-ink sm:min-h-[190px]",
  },
  {
    id: "03",
    title: "Data Science",
    subtitle: "Work with data",
    courseCount: 3,
    path: "/courses?category=Data%20Science",
    className: "min-h-[165px] bg-lavender text-ink sm:min-h-[190px]",
  },
  {
    id: "04",
    title: "Marketing",
    subtitle: "Grow with strategy",
    courseCount: 2,
    path: "/courses?category=Marketing",
    className: "col-span-2 min-h-[130px] bg-coral text-ink sm:min-h-[145px]",
  },
];

export default function SkillMap() {
  return (
    <div className="relative">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="section-kicker text-ink/45">Skill map / 04 areas</p>

          <p className="text-ink mt-1 text-sm font-semibold tracking-[-0.02em]">
            Choose where to start.
          </p>
        </div>

        <span className="text-ink/35 hidden font-mono text-[9px] tracking-[0.1em] uppercase sm:block">
          Explore by field
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {skillAreas.map((area) => (
          <Link
            key={area.id}
            to={area.path}
            className={`group border-ink relative flex flex-col justify-between overflow-hidden border-2 p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 ${area.className}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[9px] font-bold tracking-[0.12em] opacity-55">
                / {area.id}
              </span>

              <HiArrowUpRight
                aria-hidden="true"
                className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:text-2xl"
              />
            </div>

            <div>
              <p className="mb-2 font-mono text-[9px] font-semibold tracking-[0.1em] uppercase opacity-55">
                {String(area.courseCount).padStart(2, "0")} courses
              </p>

              <h2 className="max-w-[280px] text-[clamp(1.35rem,3vw,2.5rem)] leading-[0.92] font-black tracking-[-0.06em] uppercase">
                {area.title}
              </h2>

              <p className="mt-2 text-xs font-medium opacity-65 sm:text-sm">
                {area.subtitle}
              </p>
            </div>

            <span className="pointer-events-none absolute -right-3 -bottom-7 font-mono text-[clamp(4rem,9vw,7rem)] leading-none font-bold opacity-[0.08] transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
              {area.id}
            </span>
          </Link>
        ))}
      </div>

      <div className="border-ink bg-ink mt-2 flex items-center justify-between border-2 px-4 py-3 text-white sm:px-5">
        <span className="font-mono text-[9px] font-semibold tracking-[0.1em] uppercase">
          12 courses available
        </span>

        <span className="bg-lime h-2 w-2 animate-pulse rounded-full" />
      </div>
    </div>
  );
}
