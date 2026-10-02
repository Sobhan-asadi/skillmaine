import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ExperiencesCTA() {
  return (
    <section className="border-ink bg-lavender overflow-hidden border-b-2">
      <div className="site-container">
        <div className="grid min-h-[400px] lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="lg:border-ink flex flex-col justify-center py-14 pr-0 sm:py-16 lg:border-r-2 lg:pr-12 xl:pr-16">
            <p className="section-kicker text-ink/40">Beyond the paths</p>

            <h2 className="mt-5 max-w-[850px] text-[clamp(3rem,6vw,6rem)] leading-[0.85] font-black tracking-[-0.07em] uppercase">
              Your path
              <br />
              doesn&apos;t have to
              <br />
              <span className="text-electric">be linear.</span>
            </h2>

            <div className="border-ink/20 mt-9 flex flex-col gap-6 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-ink/55 max-w-[520px] text-sm leading-7 font-medium">
                Use these learning paths as a starting point, or explore the
                full catalog and build a direction around the skills that matter
                to you.
              </p>

              <Link
                to="/courses"
                className="focus-ring bg-ink hover:bg-electric inline-flex min-h-13 w-fit shrink-0 items-center gap-3 px-6 text-xs font-black tracking-[0.04em] text-white uppercase transition hover:-translate-y-0.5"
              >
                Browse all courses
                <HiArrowRight aria-hidden="true" className="text-lg" />
              </Link>
            </div>
          </div>

          <div className="bg-coral relative hidden overflow-hidden lg:block">
            <div
              aria-hidden="true"
              className="grid-lines absolute inset-0 opacity-30"
            />

            <div className="relative flex h-full flex-col justify-between p-8 xl:p-10">
              <div className="flex items-start justify-between">
                <span className="text-ink/45 font-mono text-[9px] font-black tracking-[0.12em] uppercase">
                  Explore freely
                </span>

                <span className="text-ink/30 font-mono text-[9px] font-black">
                  / ∞
                </span>
              </div>

              <div>
                <p
                  aria-hidden="true"
                  className="text-ink/10 text-[8rem] leading-[0.72] font-black tracking-[-0.1em] xl:text-[10rem]"
                >
                  →
                </p>

                <div className="border-ink mt-8 border-t-2 pt-5">
                  <p className="text-ink max-w-[230px] text-sm leading-6 font-black">
                    One catalog.
                    <br />
                    Multiple directions.
                    <br />
                    Your choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
