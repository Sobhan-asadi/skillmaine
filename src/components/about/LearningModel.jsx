import {
  HiOutlineBookOpen,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingBag,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Search the catalog and narrow courses by category, level, rating, or price.",
    icon: HiOutlineMagnifyingGlass,
  },
  {
    number: "02",
    title: "Compare",
    description:
      "Review course structure, skills, requirements, instructor details, and learning scope.",
    icon: HiOutlineSquares2X2,
  },
  {
    number: "03",
    title: "Understand",
    description:
      "Use curriculum and course information to understand what the learning path actually covers.",
    icon: HiOutlineBookOpen,
  },
  {
    number: "04",
    title: "Choose",
    description:
      "Save selected courses in a persistent learning cart and build your next learning direction.",
    icon: HiOutlineShoppingBag,
  },
];

export default function LearningModel() {
  return (
    <section
      id="learning-model"
      className="border-ink bg-ink scroll-mt-[72px] border-b-2 text-white"
    >
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="bg-lime h-2.5 w-2.5" />

              <p className="section-kicker text-white/40">
                Learning model / 01—04
              </p>
            </div>

            <h2 className="mt-6 max-w-[520px] text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.88] font-black tracking-[-0.065em] uppercase">
              From
              <br />
              discovery to
              <br />
              <span className="text-lime">direction.</span>
            </h2>

            <p className="mt-7 max-w-[440px] text-sm leading-7 font-medium text-white/50 sm:text-base">
              The experience is organized to reduce noise and make the important
              information visible before a learner chooses a course.
            </p>
          </div>

          <ol className="border-t border-white/15">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.number}
                  className="group grid gap-5 border-b border-white/15 py-6 sm:grid-cols-[55px_56px_minmax(0,1fr)] sm:items-start sm:gap-5 sm:py-7"
                >
                  <span className="font-mono text-[9px] font-black tracking-[0.1em] text-white/25">
                    / {step.number}
                  </span>

                  <span className="text-lime group-hover:border-lime group-hover:bg-lime group-hover:text-ink flex h-11 w-11 items-center justify-center border border-white/15 transition duration-300">
                    <Icon aria-hidden="true" className="text-xl" />
                  </span>

                  <div>
                    <h3 className="text-xl font-black tracking-[-0.035em] sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[560px] text-sm leading-6 font-medium text-white/45">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
