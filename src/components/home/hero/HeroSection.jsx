import { HiArrowDown } from "react-icons/hi2";

import HeroSearch from "./HeroSearch";
import SkillMap from "./SkillMap";

export default function HeroSection() {
  return (
    <section className="border-ink bg-canvas relative overflow-hidden border-b-2 pt-[72px]">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="site-container relative">
        <div className="grid min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)]">
          <div className="border-ink/15 flex flex-col justify-between py-12 lg:border-r lg:py-16 lg:pr-10 xl:py-20 xl:pr-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-electric h-2.5 w-2.5" />

                <p className="section-kicker text-ink/50">
                  Digital learning platform / 2026
                </p>
              </div>

              <h1 className="display-title mt-8 max-w-[850px]">
                Learn
                <br />
                <span className="text-electric">what</span>
                <br />
                <span className="text-stroke">moves</span>
                <br />
                you.
              </h1>

              <div className="border-ink/15 mt-8 grid max-w-[700px] gap-6 border-t pt-6 sm:grid-cols-[minmax(0,1fr)_190px] sm:items-start">
                <p className="text-ink/65 max-w-[480px] text-base leading-7 font-medium tracking-[-0.025em] sm:text-lg">
                  Practical courses for people who want to build, create,
                  analyze, and grow — one useful skill at a time.
                </p>

                <div className="sm:border-ink/15 flex items-start gap-3 sm:border-l sm:pl-5">
                  <span className="text-electric font-mono text-[10px] font-bold">
                    12
                  </span>

                  <p className="text-ink/45 font-mono text-[9px] leading-5 font-semibold tracking-[0.08em] uppercase">
                    Focused courses
                    <br />
                    across 4 fields
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-10">
                <HeroSearch />
              </div>
            </div>

            <div className="border-ink/15 mt-14 flex items-end justify-between border-t pt-5 lg:mt-12">
              <div>
                <p className="section-kicker text-ink/35">Keep exploring</p>

                <p className="text-ink/65 mt-1 text-xs font-semibold">
                  Find a path that fits what you want to build.
                </p>
              </div>

              <a
                href="#featured-courses"
                aria-label="Scroll to featured courses"
                className="focus-ring border-ink/15 bg-paper hover:bg-lime flex h-11 w-11 items-center justify-center border transition duration-300 hover:translate-y-1"
              >
                <HiArrowDown aria-hidden="true" className="text-lg" />
              </a>
            </div>
          </div>

          <div className="border-ink/15 border-t py-10 lg:border-t-0 lg:py-16 lg:pl-10 xl:py-20 xl:pl-14">
            <div className="lg:sticky lg:top-[104px]">
              <SkillMap />
            </div>
          </div>
        </div>
      </div>

      <div className="border-ink bg-lime border-t-2">
        <div className="site-container flex min-h-11 items-center overflow-hidden">
          <div className="text-ink flex min-w-max items-center gap-6 font-mono text-[9px] font-bold tracking-[0.11em] uppercase sm:gap-10">
            <span>Learn by doing</span>
            <span aria-hidden="true">✦</span>
            <span>Build useful skills</span>
            <span aria-hidden="true">✦</span>
            <span>Explore your next field</span>
            <span aria-hidden="true">✦</span>
            <span>Project-driven learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
