import { HiArrowRight, HiOutlineBookOpen } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function LearningPathCard({
  number,
  title,
  description,
  courses = [],
  accentClass = "bg-lime",
}) {
  return (
    <article className="border-ink bg-paper border-2">
      <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="border-ink flex flex-col justify-between border-b-2 p-6 sm:p-8 lg:border-r-2 lg:border-b-0">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span aria-hidden="true" className={`h-4 w-4 ${accentClass}`} />

              <span className="text-ink/25 font-mono text-[9px] font-black tracking-[0.1em]">
                / {number}
              </span>
            </div>

            <h2 className="text-ink mt-10 text-3xl leading-[0.95] font-black tracking-[-0.05em] sm:text-4xl">
              {title}
            </h2>

            <p className="text-ink/50 mt-5 text-sm leading-6 font-medium">
              {description}
            </p>
          </div>

          <div className="border-ink/15 mt-10 border-t pt-5">
            <p className="text-ink/30 font-mono text-[8px] font-bold tracking-[0.1em] uppercase">
              Learning sequence
            </p>

            <p className="text-ink mt-2 text-sm font-black">
              {String(courses.length).padStart(2, "0")} courses
            </p>
          </div>
        </div>

        <ol>
          {courses.map((course, index) => (
            <li
              key={course.id}
              className="group border-ink/15 border-b last:border-b-0"
            >
              <Link
                to={`/courses/${course.id}`}
                className="focus-ring hover:bg-ink grid min-h-[130px] gap-5 p-5 transition hover:text-white sm:grid-cols-[55px_minmax(0,1fr)_auto] sm:items-center sm:p-6"
              >
                <span className="text-electric group-hover:text-lime font-mono text-[9px] font-black tracking-[0.1em] transition">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-ink/35 font-mono text-[8px] font-bold tracking-[0.08em] uppercase transition group-hover:text-white/40">
                      {course.category}
                    </span>

                    <span
                      aria-hidden="true"
                      className="bg-ink/25 h-1 w-1 rounded-full transition group-hover:bg-white/30"
                    />

                    <span className="text-ink/35 font-mono text-[8px] font-bold tracking-[0.08em] uppercase transition group-hover:text-white/40">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg leading-tight font-black tracking-[-0.03em] sm:text-xl">
                    {course.title}
                  </h3>

                  <div className="text-ink/35 mt-3 flex items-center gap-2 transition group-hover:text-white/40">
                    <HiOutlineBookOpen aria-hidden="true" className="text-sm" />

                    <span className="font-mono text-[8px] font-semibold tracking-[0.06em] uppercase">
                      {course.lessons} lessons
                    </span>

                    <span aria-hidden="true">/</span>

                    <span className="font-mono text-[8px] font-semibold tracking-[0.06em] uppercase">
                      {course.duration}
                    </span>
                  </div>
                </div>

                <span className="border-ink/15 text-ink group-hover:bg-lime group-hover:text-ink flex h-10 w-10 items-center justify-center border transition group-hover:border-white/20">
                  <HiArrowRight aria-hidden="true" className="text-lg" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
