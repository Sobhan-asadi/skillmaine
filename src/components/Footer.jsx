import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const exploreLinks = [
  {
    label: "All courses",
    path: "/courses",
  },
  {
    label: "Development",
    path: "/courses?category=Development",
  },
  {
    label: "Design",
    path: "/courses?category=Design",
  },
  {
    label: "Data Science",
    path: "/courses?category=Data%20Science",
  },
  {
    label: "Marketing",
    path: "/courses?category=Marketing",
  },
];

const quickLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Explore",
    path: "/courses",
  },
  {
    label: "Learning cart",
    path: "/cart",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-ink bg-ink border-t-2 text-white">
      <div className="bg-lime text-ink">
        <div className="site-container">
          <Link
            to="/courses"
            className="group flex min-h-[86px] items-center justify-between gap-6 py-4"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="font-mono text-[9px] font-bold tracking-[0.12em] uppercase opacity-50">
                Next / 05
              </span>

              <p className="text-lg font-black tracking-[-0.04em] uppercase sm:text-2xl">
                Find something worth learning.
              </p>
            </div>

            <span className="bg-ink flex h-11 w-11 shrink-0 items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-12 sm:w-12">
              <HiArrowUpRight aria-hidden="true" className="text-xl" />
            </span>
          </Link>
        </div>
      </div>

      <div className="site-container">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(180px,0.55fr)_minmax(180px,0.55fr)] lg:gap-12 lg:py-20 xl:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.5fr)_minmax(220px,0.5fr)] xl:gap-16">
          <div>
            <Link
              to="/"
              aria-label="SkillMaine home"
              className="inline-flex items-center gap-3"
            >
              <span className="text-ink relative flex h-11 w-11 items-center justify-center overflow-hidden bg-white text-sm font-black">
                SM
                <span className="bg-lime absolute right-0 bottom-0 h-2.5 w-2.5" />
              </span>

              <div>
                <p className="text-base font-black tracking-[-0.045em] uppercase">
                  SkillMaine
                </p>

                <p className="mt-0.5 font-mono text-[8px] tracking-[0.15em] text-white/35 uppercase">
                  Learn / Build / Grow
                </p>
              </div>
            </Link>

            <h2 className="mt-9 max-w-[620px] text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.88] font-black tracking-[-0.07em] uppercase">
              Keep
              <br />
              building your
              <br />
              <span className="text-lime">next skill.</span>
            </h2>

            <p className="mt-7 max-w-[480px] text-sm leading-7 text-white/45">
              Explore focused courses across development, design, data science,
              and marketing.
            </p>
          </div>

          <div className="border-t border-white/15 pt-5 lg:border-t-0 lg:pt-0">
            <p className="font-mono text-[9px] font-bold tracking-[0.12em] text-white/30 uppercase">
              Explore
            </p>

            <nav aria-label="Explore courses" className="mt-6">
              {exploreLinks.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="group hover:text-lime flex min-h-11 items-center justify-between border-b border-white/10 text-sm font-semibold text-white/55 transition-colors"
                >
                  <span>{item.label}</span>

                  <span className="group-hover:text-lime font-mono text-[8px] text-white/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/15 pt-5 lg:border-t-0 lg:pt-0">
            <p className="font-mono text-[9px] font-bold tracking-[0.12em] text-white/30 uppercase">
              Navigate
            </p>

            <nav aria-label="Footer navigation" className="mt-6">
              {quickLinks.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="group hover:text-lime flex min-h-11 items-center justify-between border-b border-white/10 text-sm font-semibold text-white/55 transition-colors"
                >
                  <span>{item.label}</span>

                  <span className="group-hover:text-lime font-mono text-[8px] text-white/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 border border-white/15 p-4">
              <p className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/30 uppercase">
                Platform
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="bg-lime h-2 w-2" />

                <span className="font-mono text-[9px] font-semibold tracking-[0.08em] text-white/55 uppercase">
                  Learning catalog online
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-t border-white/15 py-8 sm:py-10">
          <p
            aria-hidden="true"
            className="text-center text-[clamp(4rem,13vw,12rem)] leading-[0.72] font-black tracking-[-0.085em] whitespace-nowrap text-white/[0.055] uppercase select-none"
          >
            SkillMaine
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-6 font-mono text-[8px] font-semibold tracking-[0.1em] text-white/30 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} SkillMaine</p>

          <p>Demo learning platform / Portfolio project</p>
        </div>
      </div>
    </footer>
  );
}
