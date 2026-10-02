import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function CartHeader({ itemCount }) {
  return (
    <section className="border-ink bg-paper border-b-2">
      <div className="site-container py-12 sm:py-14 lg:py-16">
        <Link
          to="/courses"
          className="focus-ring text-ink/40 hover:text-electric inline-flex items-center gap-2 font-mono text-[9px] font-bold tracking-[0.1em] uppercase transition"
        >
          <HiArrowLeft aria-hidden="true" className="text-sm" />
          Continue exploring
        </Link>

        <div className="mt-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="bg-coral h-2.5 w-2.5" />

              <p className="section-kicker text-ink/40">
                Learning cart / {String(itemCount).padStart(2, "0")}
              </p>
            </div>

            <h1 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] leading-[0.84] font-black tracking-[-0.075em] uppercase">
              Your next
              <br />
              <span className="text-electric">skills.</span>
            </h1>
          </div>

          <div className="border-lime max-w-[420px] border-l-4 pl-4">
            <p className="text-ink/50 text-sm leading-6 font-medium">
              Review the courses you selected before continuing through the demo
              learning flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
