import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ExploreLearning() {
  return (
    <section className="border-ink bg-electric overflow-hidden border-b-2 text-white">
      <div className="site-container">
        <div className="relative grid min-h-[430px] lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="flex flex-col justify-center py-14 pr-0 sm:py-16 lg:border-r-2 lg:border-white/20 lg:pr-12 xl:pr-16">
            <p className="section-kicker text-white/45">Start exploring</p>

            <h2 className="mt-5 max-w-[900px] text-[clamp(3rem,6vw,6.5rem)] leading-[0.84] font-black tracking-[-0.07em] uppercase">
              Find the skill
              <br />
              that moves you
              <br />
              <span className="text-lime">forward.</span>
            </h2>

            <div className="mt-9 flex flex-col gap-6 border-t border-white/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[520px] text-sm leading-7 font-medium text-white/60">
                Browse the complete catalog, compare course details, and choose
                what you want to learn next.
              </p>

              <Link
                to="/courses"
                className="focus-ring bg-lime text-ink inline-flex min-h-13 w-fit shrink-0 items-center gap-3 px-6 text-xs font-black tracking-[0.04em] uppercase transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore courses
                <HiArrowRight aria-hidden="true" className="text-lg" />
              </Link>
            </div>
          </div>

          <div className="relative hidden overflow-hidden lg:block">
            <div
              aria-hidden="true"
              className="grid-lines absolute inset-0 opacity-20"
            />

            <div className="relative flex h-full flex-col justify-between p-8 xl:p-10">
              <div className="flex justify-between">
                <span className="font-mono text-[9px] font-black tracking-[0.12em] text-white/40 uppercase">
                  SkillMaine
                </span>

                <span className="font-mono text-[9px] font-black text-white/30">
                  / NEXT
                </span>
              </div>

              <div>
                <p
                  aria-hidden="true"
                  className="text-[9rem] leading-[0.7] font-black tracking-[-0.1em] text-white/10 xl:text-[11rem]"
                >
                  GO
                </p>

                <div className="bg-coral mt-10 h-3 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
