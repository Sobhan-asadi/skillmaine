const principles = [
  {
    number: "01",
    title: "Clarity over noise",
    description:
      "Course information is structured around the details that help learners make a decision without unnecessary interface clutter.",
    accent: "bg-lime",
  },
  {
    number: "02",
    title: "Explore your way",
    description:
      "Search, categories, levels, and sorting make it easier to move through the catalog based on different learning goals.",
    accent: "bg-coral",
  },
  {
    number: "03",
    title: "Know before choosing",
    description:
      "Skills, requirements, curriculum, duration, and instructor information are visible before a course is added to the learning cart.",
    accent: "bg-lavender",
  },
];

export default function PlatformPrinciples() {
  return (
    <section className="border-ink bg-canvas border-b-2">
      <div className="site-container py-16 sm:py-20 lg:py-24">
        <div className="border-ink flex flex-col gap-8 border-b-2 pb-9 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker text-ink/35">Platform principles</p>

            <h2 className="mt-5 max-w-[760px] text-[clamp(2.7rem,5vw,5rem)] leading-[0.9] font-black tracking-[-0.06em] uppercase">
              Less friction.
              <br />
              <span className="text-electric">Better decisions.</span>
            </h2>
          </div>

          <p className="text-ink/50 max-w-[390px] text-sm leading-7 font-medium">
            SkillMaine keeps the learning journey focused on discovering,
            understanding, and comparing courses before making a choice.
          </p>
        </div>

        <div className="border-ink grid border-x-2 border-b-2 md:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className={`group relative flex min-h-[360px] flex-col p-6 sm:p-8 ${
                index !== principles.length - 1
                  ? "border-ink border-b-2 md:border-r-2 md:border-b-0"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <span
                  className={`h-4 w-4 ${principle.accent}`}
                  aria-hidden="true"
                />

                <span className="text-ink/25 font-mono text-[9px] font-black tracking-[0.1em]">
                  / {principle.number}
                </span>
              </div>

              <div className="mt-auto pt-16">
                <h3 className="text-ink max-w-[280px] text-2xl leading-[0.95] font-black tracking-[-0.045em] sm:text-3xl">
                  {principle.title}
                </h3>

                <p className="text-ink/50 mt-5 max-w-[330px] text-sm leading-6 font-medium">
                  {principle.description}
                </p>
              </div>

              <div
                aria-hidden="true"
                className={`absolute right-0 bottom-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full ${principle.accent}`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
