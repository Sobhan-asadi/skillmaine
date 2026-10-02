import { HiArrowDown } from "react-icons/hi2";

export default function ExperiencesHero() {
  function handleExplorePaths() {
    document
      .getElementById("learning-paths")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="border-ink bg-lime relative overflow-hidden border-b-2">
      <div
        aria-hidden="true"
        className="grid-lines absolute inset-0 opacity-30"
      />

      <div className="site-container relative">
        <div className="grid min-h-[610px] lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_430px]">
          <div className="lg:border-ink flex flex-col justify-center py-16 pr-0 sm:py-20 lg:border-r-2 lg:pr-12 xl:pr-16">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="bg-electric h-2.5 w-2.5" />

              <p className="section-kicker text-ink/45">
                Learning experiences / Paths
              </p>
            </div>

            <h1 className="mt-8 max-w-[980px] text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] font-black tracking-[-0.08em] uppercase">
              Don&apos;t just
              <br />
              pick a course.
              <br />
              <span className="text-electric">Build a path.</span>
            </h1>

            <div className="border-ink/20 mt-10 grid max-w-[850px] gap-7 border-t pt-7 sm:grid-cols-[150px_minmax(0,1fr)]">
              <p className="text-ink/35 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
                The approach
              </p>

              <p className="text-ink/60 max-w-[620px] text-base leading-7 font-medium sm:text-lg sm:leading-8">
                Explore related courses as a sequence instead of isolated
                choices. Each path groups skills around a clear learning
                direction while keeping every course independently accessible.
              </p>
            </div>

            <button
              type="button"
              onClick={handleExplorePaths}
              className="focus-ring border-ink bg-ink hover:bg-electric mt-9 inline-flex min-h-12 w-fit items-center gap-3 border-2 px-6 text-xs font-black tracking-[0.04em] text-white uppercase transition hover:-translate-y-0.5"
            >
              Explore paths
              <HiArrowDown aria-hidden="true" className="text-lg" />
            </button>
          </div>

          <div className="bg-ink relative hidden overflow-hidden text-white lg:block">
            <div
              aria-hidden="true"
              className="grid-lines absolute inset-0 opacity-10"
            />

            <div className="relative flex h-full flex-col justify-between p-8 xl:p-10">
              <div className="flex items-start justify-between">
                <p className="font-mono text-[9px] font-black tracking-[0.12em] text-white/40 uppercase">
                  Three directions
                </p>

                <span className="font-mono text-[9px] font-black text-white/25">
                  / 03
                </span>
              </div>

              <div className="space-y-3">
                <div className="border-2 border-white/15 p-4">
                  <span className="text-lime font-mono text-[8px] font-bold tracking-[0.1em] uppercase">
                    01
                  </span>

                  <p className="mt-2 text-xl font-black tracking-[-0.035em]">
                    Frontend Development
                  </p>
                </div>

                <div className="bg-electric ml-7 border-2 border-white/15 p-4">
                  <span className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/60 uppercase">
                    02
                  </span>

                  <p className="mt-2 text-xl font-black tracking-[-0.035em]">
                    Product Design
                  </p>
                </div>

                <div className="bg-lavender text-ink ml-14 border-2 border-white/15 p-4">
                  <span className="text-ink/40 font-mono text-[8px] font-bold tracking-[0.1em] uppercase">
                    03
                  </span>

                  <p className="mt-2 text-xl font-black tracking-[-0.035em]">
                    Data &amp; ML
                  </p>
                </div>
              </div>

              <p className="max-w-[250px] font-mono text-[9px] leading-5 font-semibold tracking-[0.05em] text-white/35 uppercase">
                Different directions.
                <br />
                One focused catalog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
