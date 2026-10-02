import { HiOutlineCheck } from "react-icons/hi2";

export default function CourseCurriculum({ curriculum = [] }) {
  if (curriculum.length === 0) {
    return null;
  }

  return (
    <section className="border-ink border-t-2 py-7 sm:py-9">
      <div className="grid gap-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <div>
          <p className="section-kicker text-ink/35">Course structure</p>

          <h2 className="text-ink mt-3 text-2xl leading-none font-black tracking-[-0.045em] sm:text-3xl">
            Curriculum
          </h2>

          <p className="text-ink/30 mt-3 font-mono text-[9px] font-bold tracking-[0.08em] uppercase">
            {String(curriculum.length).padStart(2, "0")} sections
          </p>
        </div>

        <ol className="border-ink/15 border-t">
          {curriculum.map((section, index) => {
            const sectionTitle =
              typeof section === "string"
                ? section
                : (section.title ?? section.name ?? `Section ${index + 1}`);

            const sectionLessons =
              typeof section === "object" ? section.lessons : null;

            return (
              <li
                key={`${sectionTitle}-${index}`}
                className="border-ink/15 grid gap-4 border-b py-5 sm:grid-cols-[55px_minmax(0,1fr)_auto] sm:items-center"
              >
                <span className="text-electric font-mono text-[10px] font-black tracking-[0.08em]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-ink text-base font-black tracking-[-0.025em]">
                    {sectionTitle}
                  </h3>

                  {sectionLessons != null && (
                    <p className="text-ink/35 mt-1 font-mono text-[8px] font-semibold tracking-[0.06em] uppercase">
                      {Array.isArray(sectionLessons)
                        ? `${sectionLessons.length} lessons`
                        : `${sectionLessons} lessons`}
                    </p>
                  )}
                </div>

                <span
                  aria-hidden="true"
                  className="border-ink/15 text-ink/35 hidden h-7 w-7 items-center justify-center border sm:flex"
                >
                  <HiOutlineCheck className="text-sm" />
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
