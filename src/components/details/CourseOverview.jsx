export default function CourseOverview({ description, skills = [] }) {
  return (
    <section className="border-ink border-t-2 py-7 sm:py-9">
      <div className="grid gap-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <div>
          <p className="section-kicker text-ink/35">Course overview</p>

          <h2 className="text-ink mt-3 text-2xl leading-none font-black tracking-[-0.045em] sm:text-3xl">
            About this course
          </h2>
        </div>

        <div>
          <p className="text-ink/60 max-w-[760px] text-base leading-8 font-medium">
            {description}
          </p>

          {skills.length > 0 && (
            <div className="mt-7">
              <p className="text-ink/30 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
                Skills covered
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-ink/15 bg-paper text-ink/55 border px-3 py-2 font-mono text-[9px] font-bold tracking-[0.05em] uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
