import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <main className="bg-canvas min-h-screen pt-[72px]">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved. Explore the SkillMaine course catalog to continue learning."
      />

      <section className="site-container py-16 sm:py-20 lg:py-28">
        <div className="border-ink bg-paper grid min-h-[560px] overflow-hidden border-2 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <Link
              to="/"
              className="focus-ring text-ink/40 hover:text-electric inline-flex w-fit items-center gap-2 font-mono text-[9px] font-bold tracking-[0.1em] uppercase transition"
            >
              <HiArrowLeft aria-hidden="true" className="text-sm" />
              Back home
            </Link>

            <p className="section-kicker text-coral mt-10">Error / 404</p>

            <h1 className="mt-4 text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.82] font-black tracking-[-0.075em] uppercase">
              Page
              <br />
              <span className="text-electric">not found.</span>
            </h1>

            <p className="text-ink/50 mt-7 max-w-[540px] text-sm leading-7 font-medium sm:text-base">
              The page you&apos;re looking for doesn&apos;t exist or may have
              moved. Head back to the course catalog and keep exploring.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="focus-ring bg-ink hover:bg-electric inline-flex min-h-12 items-center gap-3 px-6 text-xs font-black tracking-[0.03em] text-white uppercase transition hover:-translate-y-0.5"
              >
                Explore courses
                <HiArrowRight aria-hidden="true" className="text-lg" />
              </Link>

              <Link
                to="/"
                className="focus-ring border-ink/15 text-ink hover:border-ink hover:bg-ink inline-flex min-h-12 items-center justify-center border px-6 text-xs font-black tracking-[0.03em] uppercase transition hover:text-white"
              >
                Go home
              </Link>
            </div>
          </div>

          <div className="border-ink bg-lavender relative hidden overflow-hidden border-l-2 lg:block">
            <div
              aria-hidden="true"
              className="grid-lines absolute inset-0 opacity-50"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-ink/35 font-mono text-[10px] font-black tracking-[0.16em] uppercase">
                Lost in the catalog
              </span>

              <p
                aria-hidden="true"
                className="text-ink mt-5 text-[9rem] leading-none font-black tracking-[-0.09em]"
              >
                404
              </p>

              <div aria-hidden="true" className="bg-lime mt-7 h-3 w-24" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
