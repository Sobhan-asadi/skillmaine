import { HiArrowDown } from "react-icons/hi2";

export default function AboutHero() {
  function handleScroll() {
    document
      .getElementById("learning-model")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="border-ink bg-paper relative overflow-hidden border-b-2">
      <div
        aria-hidden="true"
        className="grid-lines absolute inset-0 opacity-60"
      />

      <div className="site-container relative">
        <div className="grid min-h-[620px] lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="lg:border-ink flex flex-col justify-center py-16 pr-0 sm:py-20 lg:border-r-2 lg:pr-12 xl:pr-16">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="bg-electric h-2.5 w-2.5" />

              <p className="section-kicker text-ink/40">About / SkillMaine</p>
            </div>

            <h1 className="mt-8 max-w-[950px] text-[clamp(3.6rem,8vw,8rem)] leading-[0.82] font-black tracking-[-0.08em] uppercase">
              Learning
              <br />
              built around
              <br />
              <span className="text-electric">useful skills.</span>
            </h1>

            <div className="border-ink/15 mt-10 grid max-w-[850px] gap-7 border-t pt-7 sm:grid-cols-[150px_minmax(0,1fr)]">
              <p className="text-ink/30 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
                The idea
              </p>

              <p className="text-ink/55 max-w-[620px] text-base leading-7 font-medium sm:text-lg sm:leading-8">
                SkillMaine is a demo learning platform designed around clear
                course discovery, structured learning information, and a focused
                path from exploration to choosing what to learn next.
              </p>
            </div>
          </div>

          <div className="bg-lavender relative hidden overflow-hidden lg:block">
            <div
              aria-hidden="true"
              className="grid-lines absolute inset-0 opacity-40"
            />

            <div className="relative flex h-full flex-col justify-between p-8 xl:p-10">
              <div className="flex items-start justify-between">
                <p className="text-ink/40 font-mono text-[9px] font-black tracking-[0.12em] uppercase">
                  Digital learning
                </p>

                <span className="text-ink/30 font-mono text-[9px] font-black">
                  / 01
                </span>
              </div>

              <div>
                <p
                  aria-hidden="true"
                  className="text-ink/10 text-[clamp(7rem,12vw,12rem)] leading-[0.7] font-black tracking-[-0.1em]"
                >
                  SK
                </p>

                <div className="border-ink mt-10 border-t-2 pt-5">
                  <p className="text-ink max-w-[260px] text-sm leading-6 font-bold">
                    Explore.
                    <br />
                    Understand.
                    <br />
                    Choose what comes next.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleScroll}
                className="focus-ring border-ink bg-lime text-ink hover:bg-ink flex h-12 w-12 items-center justify-center self-end border-2 transition hover:-translate-y-1 hover:text-white"
                aria-label="Continue to learning model"
              >
                <HiArrowDown aria-hidden="true" className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="bg-electric h-3 w-full" />
    </section>
  );
}
