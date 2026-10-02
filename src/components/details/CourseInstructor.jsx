import { HiOutlineUser } from "react-icons/hi2";

export default function CourseInstructor({ instructor, category, level }) {
  if (!instructor) {
    return null;
  }

  return (
    <section className="border-ink border-y-2 py-7 sm:py-9">
      <div className="grid gap-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <div>
          <p className="section-kicker text-ink/35">Your instructor</p>

          <h2 className="text-ink mt-3 text-2xl leading-none font-black tracking-[-0.045em] sm:text-3xl">
            Meet the instructor
          </h2>
        </div>

        <div className="border-ink bg-paper grid overflow-hidden border-2 sm:grid-cols-[150px_minmax(0,1fr)]">
          <div className="bg-ink/5 min-h-[180px]">
            {instructor.avatar ? (
              <img
                src={instructor.avatar}
                alt={instructor.name}
                loading="lazy"
                className="h-full min-h-[180px] w-full object-cover"
              />
            ) : (
              <div className="bg-lavender flex h-full min-h-[180px] items-center justify-center">
                <HiOutlineUser
                  aria-hidden="true"
                  className="text-ink text-4xl"
                />
              </div>
            )}
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-ink/30 font-mono text-[8px] font-bold tracking-[0.1em] uppercase">
              Instructor
            </p>

            <h3 className="text-ink mt-2 text-2xl font-black tracking-[-0.04em]">
              {instructor.name}
            </h3>

            {instructor.role && (
              <p className="text-electric mt-2 text-sm font-semibold">
                {instructor.role}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {category && (
                <span className="border-ink/15 text-ink/45 border px-3 py-2 font-mono text-[8px] font-bold tracking-[0.06em] uppercase">
                  {category}
                </span>
              )}

              {level && (
                <span className="border-ink/15 text-ink/45 border px-3 py-2 font-mono text-[8px] font-bold tracking-[0.06em] uppercase">
                  {level}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
