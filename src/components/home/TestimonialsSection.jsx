import {
  HiArrowUpRight,
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineCursorArrowRays,
  HiOutlinePaintBrush,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const learningTracks = [
  {
    id: "01",
    title: "Build",
    field: "Development",
    description:
      "Create modern interfaces, understand application logic, and strengthen your web development workflow.",
    skills: ["React", "JavaScript", "TypeScript", "Node.js"],
    icon: HiOutlineCodeBracket,
    accent: "bg-lime text-ink",
    path: "/courses?category=Development",
  },
  {
    id: "02",
    title: "Design",
    field: "Design",
    description:
      "Turn ideas into clear digital experiences with stronger visual, interface, and product design skills.",
    skills: ["UI/UX", "Figma", "Product", "Motion"],
    icon: HiOutlinePaintBrush,
    accent: "bg-lavender text-ink",
    path: "/courses?category=Design",
  },
  {
    id: "03",
    title: "Analyze",
    field: "Data Science",
    description:
      "Work with data, recognize useful patterns, and develop foundations for data-driven problem solving.",
    skills: ["Python", "Analysis", "Data", "ML"],
    icon: HiOutlineChartBar,
    accent: "bg-electric text-white",
    path: "/courses?category=Data%20Science",
  },
  {
    id: "04",
    title: "Grow",
    field: "Marketing",
    description:
      "Explore digital strategy, audience thinking, analytics, and the foundations of sustainable growth.",
    skills: ["Strategy", "Content", "Analytics", "Growth"],
    icon: HiOutlineCursorArrowRays,
    accent: "bg-coral text-ink",
    path: "/courses?category=Marketing",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-ink relative overflow-hidden py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.07]"
      />

      <div className="site-container relative">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16 lg:pb-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-coral h-2.5 w-2.5" />

              <p className="section-kicker text-white/40">
                Learning outcomes / 04
              </p>
            </div>

            <h2 className="mt-6 max-w-[850px] text-[clamp(2.8rem,6vw,6.4rem)] leading-[0.88] font-black tracking-[-0.07em] uppercase">
              Learn for what
              <br />
              you want to <span className="text-coral">do.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-[350px] text-sm leading-7 text-white/50 sm:text-base">
              Start from the outcome you care about, then explore the field and
              courses that can help you develop that skill set.
            </p>

            <Link
              to="/courses"
              className="group text-lime mt-7 inline-flex items-center gap-3 text-xs font-black tracking-[0.05em] uppercase"
            >
              View full catalog
              <HiArrowUpRight
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4">
          {learningTracks.map((track) => {
            const Icon = track.icon;

            return (
              <Link
                key={track.id}
                to={track.path}
                className="group relative flex min-h-[420px] flex-col border-b border-white/15 py-8 md:odd:border-r md:odd:pr-7 md:even:pl-7 xl:border-r xl:border-b-0 xl:px-7 xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-white/30">
                    / {track.id}
                  </span>

                  <span
                    className={`flex h-12 w-12 items-center justify-center ${track.accent}`}
                  >
                    <Icon aria-hidden="true" className="text-xl" />
                  </span>
                </div>

                <div className="mt-14">
                  <p className="font-mono text-[9px] font-bold tracking-[0.12em] text-white/35 uppercase">
                    {track.field}
                  </p>

                  <h3 className="group-hover:text-lime mt-3 text-[clamp(2.4rem,4vw,4rem)] leading-[0.9] font-black tracking-[-0.065em] uppercase transition-colors duration-300">
                    {track.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-white/50">
                    {track.description}
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {track.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/15 px-2.5 py-1 font-mono text-[8px] font-semibold tracking-[0.06em] text-white/45 uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-4">
                    <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-white/35 uppercase">
                      Explore field
                    </span>

                    <HiArrowUpRight
                      aria-hidden="true"
                      className="group-hover:text-lime text-xl text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-2 border-white/15 bg-white/[0.035] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-lime font-mono text-[9px] font-bold tracking-[0.12em] uppercase">
              Your next skill starts somewhere
            </p>

            <p className="mt-2 max-w-[600px] text-sm leading-6 text-white/50">
              Browse the catalog, compare the available topics, and choose the
              course that fits what you want to learn next.
            </p>
          </div>

          <Link
            to="/courses"
            className="group bg-lime text-ink flex min-h-12 shrink-0 items-center justify-between gap-8 px-5 text-xs font-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Explore courses
            <HiArrowUpRight
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
