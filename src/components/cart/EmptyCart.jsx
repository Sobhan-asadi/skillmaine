import { HiArrowRight, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <main className="bg-canvas min-h-screen pt-[72px]">
      <div className="site-container py-16 sm:py-20 lg:py-28">
        <div className="border-ink bg-paper grid min-h-[500px] overflow-hidden border-2 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <span className="bg-lavender text-ink flex h-14 w-14 items-center justify-center">
              <HiOutlineShoppingBag aria-hidden="true" className="text-2xl" />
            </span>

            <p className="section-kicker text-ink/35 mt-8">
              Learning cart / 00
            </p>

            <h1 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] leading-[0.86] font-black tracking-[-0.07em] uppercase">
              Your cart is
              <br />
              <span className="text-electric">waiting.</span>
            </h1>

            <p className="text-ink/50 mt-7 max-w-[520px] text-sm leading-7 font-medium sm:text-base">
              Explore the catalog and add courses that match what you want to
              learn next.
            </p>

            <Link
              to="/courses"
              className="focus-ring bg-ink hover:bg-electric mt-8 inline-flex min-h-12 w-fit items-center gap-3 px-6 text-xs font-black tracking-[0.03em] text-white uppercase transition hover:-translate-y-0.5"
            >
              Explore courses
              <HiArrowRight aria-hidden="true" className="text-lg" />
            </Link>
          </div>

          <div className="border-ink bg-lime relative hidden overflow-hidden border-l-2 lg:block">
            <div
              aria-hidden="true"
              className="grid-lines absolute inset-0 opacity-40"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-ink/10 -rotate-90 text-[7rem] leading-none font-black tracking-[-0.08em] uppercase">
                Learn
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
