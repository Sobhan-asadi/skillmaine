import {
  HiArrowDown,
  HiOutlineBookOpen,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export default function CatalogHero({ courseCount = 0, categoryCount = 0 }) {
  return (
    <section className="border-ink bg-canvas relative overflow-hidden border-b-2 pt-[72px]">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="site-container relative">
        <div className="grid min-h-[520px] lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="lg:border-ink/15 flex flex-col justify-between py-14 lg:border-r lg:py-18 lg:pr-12 xl:py-20 xl:pr-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-electric h-2.5 w-2.5" />

                <p className="section-kicker text-ink/45">
                  Course catalog / Explore
                </p>
              </div>

              <h1 className="mt-8 max-w-[900px] text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.82] font-black tracking-[-0.08em] uppercase">
                Find your
                <br />
                <span className="text-electric">next</span>{" "}
                <span className="text-stroke">skill.</span>
              </h1>

              <p className="text-ink/60 mt-8 max-w-[620px] text-base leading-7 font-medium tracking-[-0.02em] sm:text-lg">
                Search the catalog, narrow it down by field and level, then
                choose the course that matches what you want to learn next.
              </p>
            </div>

            <div className="border-ink/15 mt-12 flex items-end justify-between border-t pt-5">
              <div>
                <p className="section-kicker text-ink/35">
                  Browse / Filter / Compare
                </p>

                <p className="text-ink/60 mt-1 text-xs font-semibold">
                  Everything starts with the catalog below.
                </p>
              </div>

              <a
                href="#course-catalog"
                aria-label="Scroll to course catalog"
                className="focus-ring border-ink/15 bg-paper text-ink hover:bg-lime flex h-11 w-11 items-center justify-center border transition duration-300 hover:translate-y-1"
              >
                <HiArrowDown aria-hidden="true" className="text-lg" />
              </a>
            </div>
          </div>

          <div className="border-ink/15 border-t py-10 lg:border-t-0 lg:py-18 lg:pl-10 xl:py-20 xl:pl-12">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="section-kicker text-ink/40">Catalog index</p>

                <div className="border-ink bg-paper mt-5 border-2">
                  <div className="border-ink flex min-h-[130px] items-center justify-between gap-5 border-b-2 p-5">
                    <div>
                      <p className="text-ink/40 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
                        Available courses
                      </p>

                      <p className="text-ink mt-3 text-5xl font-black tracking-[-0.07em]">
                        {String(courseCount).padStart(2, "0")}
                      </p>
                    </div>

                    <span className="bg-lime text-ink flex h-12 w-12 items-center justify-center">
                      <HiOutlineBookOpen
                        aria-hidden="true"
                        className="text-xl"
                      />
                    </span>
                  </div>

                  <div className="flex min-h-[130px] items-center justify-between gap-5 p-5">
                    <div>
                      <p className="text-ink/40 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
                        Learning fields
                      </p>

                      <p className="text-ink mt-3 text-5xl font-black tracking-[-0.07em]">
                        {String(categoryCount).padStart(2, "0")}
                      </p>
                    </div>

                    <span className="bg-lavender text-ink flex h-12 w-12 items-center justify-center">
                      <HiOutlineSquares2X2
                        aria-hidden="true"
                        className="text-xl"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-electric mt-8 border-l-4 pl-4">
                <p className="text-ink/45 font-mono text-[9px] leading-5 font-semibold tracking-[0.08em] uppercase">
                  Search by topic
                  <br />
                  Filter by field
                  <br />
                  Match your level
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-ink bg-electric border-t-2 text-white">
        <div className="site-container flex min-h-11 items-center">
          <p className="font-mono text-[9px] font-bold tracking-[0.11em] uppercase">
            01 / Discover &nbsp;→&nbsp; 02 / Filter &nbsp;→&nbsp; 03 / Choose
            &nbsp;→&nbsp; 04 / Learn
          </p>
        </div>
      </div>
    </section>
  );
}
