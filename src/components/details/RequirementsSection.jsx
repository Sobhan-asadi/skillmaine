import { useState } from "react";
import { HiChevronDown, HiOutlineCheck } from "react-icons/hi2";

export default function RequirementsSection({
  items = [],
  title,
  label = "Course information",
  initialVisibleCount = 5,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasMoreItems = items.length > initialVisibleCount;

  const visibleItems =
    isExpanded || !hasMoreItems ? items : items.slice(0, initialVisibleCount);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="border-ink border-t-2 py-7 sm:py-9">
      <div className="flex flex-col gap-7 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <div>
          <p className="section-kicker text-ink/35">{label}</p>

          <h2 className="text-ink mt-3 text-2xl leading-[1] font-black tracking-[-0.045em] sm:text-3xl">
            {title}
          </h2>

          <p className="text-ink/30 mt-3 font-mono text-[9px] font-bold tracking-[0.08em] uppercase">
            {String(items.length).padStart(2, "0")} items
          </p>
        </div>

        <div>
          <ul className="border-ink/10 bg-ink/10 grid gap-px border sm:grid-cols-2">
            {visibleItems.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="bg-paper flex min-h-16 items-start gap-3 p-4"
              >
                <span className="bg-lime text-ink mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                  <HiOutlineCheck aria-hidden="true" className="text-sm" />
                </span>

                <div>
                  <span className="text-ink/25 font-mono text-[8px] font-bold tracking-[0.08em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-ink/65 mt-1 text-sm leading-6 font-medium">
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {hasMoreItems && (
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              aria-expanded={isExpanded}
              className="focus-ring border-ink/15 text-ink/55 hover:border-ink hover:bg-ink mt-4 inline-flex min-h-10 items-center gap-2 border px-4 font-mono text-[9px] font-bold tracking-[0.08em] uppercase transition hover:text-white"
            >
              {isExpanded ? "Show fewer" : `Show all ${items.length}`}

              <HiChevronDown
                aria-hidden="true"
                className={`text-sm transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
