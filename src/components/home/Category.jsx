import CategoryRow from "./categories/CategoryRow";

const categories = [
  {
    id: 1,
    title: "Development",
    description:
      "Build modern web and software experiences with practical development skills.",
    skills: ["React", "TypeScript", "Node.js", "JavaScript"],
    courseCount: 4,
    accent: "bg-electric",
  },
  {
    id: 2,
    title: "Design",
    description:
      "Turn ideas into thoughtful digital products through interface, product, and motion design.",
    skills: ["UI/UX", "Figma", "Product Design", "Motion"],
    courseCount: 3,
    accent: "bg-lavender",
  },
  {
    id: 3,
    title: "Data Science",
    description:
      "Learn to work with data, uncover patterns, and build foundations for intelligent systems.",
    skills: ["Python", "Data Analysis", "Machine Learning"],
    courseCount: 3,
    accent: "bg-lime",
  },
  {
    id: 4,
    title: "Marketing",
    description:
      "Understand digital strategy, audience growth, and the fundamentals behind effective campaigns.",
    skills: ["Strategy", "Content", "Analytics", "Growth"],
    courseCount: 2,
    accent: "bg-coral",
  },
];

export default function Category() {
  return (
    <section className="bg-canvas relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="bg-ink/[0.04] pointer-events-none absolute top-0 left-1/2 h-full w-px"
      />

      <div className="site-container relative">
        <div className="grid gap-8 pb-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:gap-16 lg:pb-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-electric h-2.5 w-2.5" />

              <p className="section-kicker text-ink/45">
                Explore disciplines / 02
              </p>
            </div>

            <h2 className="section-heading mt-6 max-w-[780px] uppercase">
              Don&apos;t pick a course.
              <br />
              Pick a{" "}
              <span className="relative inline-block">
                direction.
                <span
                  aria-hidden="true"
                  className="bg-lime absolute right-0 -bottom-2 left-0 h-2"
                />
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="text-ink/55 max-w-[370px] text-sm leading-7 font-medium sm:text-base">
              Start with the field that matches what you want to create,
              improve, or understand next.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-ink font-mono text-3xl font-bold tracking-[-0.06em]">
                04
              </span>

              <span className="bg-ink/20 h-8 w-px" />

              <p className="text-ink/40 font-mono text-[9px] leading-4 font-semibold tracking-[0.1em] uppercase">
                Learning
                <br />
                disciplines
              </p>
            </div>
          </div>
        </div>

        <div>
          {categories.map((category) => (
            <CategoryRow
              key={category.id}
              index={category.id}
              title={category.title}
              description={category.description}
              skills={category.skills}
              courseCount={category.courseCount}
              accent={category.accent}
            />
          ))}
        </div>

        <div className="border-electric bg-paper mt-10 flex flex-col gap-5 border-l-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-electric font-mono text-[9px] font-bold tracking-[0.12em] uppercase">
              Not sure where to begin?
            </p>

            <p className="text-ink/60 mt-2 max-w-[620px] text-sm leading-6 font-medium">
              Explore the full catalog and compare courses by field, level, and
              the skills you want to develop.
            </p>
          </div>

          <span className="text-ink/35 shrink-0 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
            Find your path →
          </span>
        </div>
      </div>
    </section>
  );
}
