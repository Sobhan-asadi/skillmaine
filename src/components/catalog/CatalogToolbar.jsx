import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
} from "react-icons/hi2";

const categories = [
  "All",
  "Development",
  "Design",
  "Data Science",
  "Marketing",
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const sortOptions = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "rating",
    label: "Highest rated",
  },
  {
    value: "price-low",
    label: "Price: low to high",
  },
  {
    value: "price-high",
    label: "Price: high to low",
  },
];

export default function CatalogToolbar({
  search,
  category,
  level,
  sort,
  resultCount,
  hasActiveFilters,
  onSearchChange,
  onCategoryChange,
  onLevelChange,
  onSortChange,
  onClearFilters,
}) {
  return (
    <div
      id="catalog-filters"
      className="border-ink bg-paper scroll-mt-[72px] border-b-2"
    >
      <div className="site-container">
        <div className="py-7 sm:py-9">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div className="w-full xl:max-w-[620px]">
              <label
                htmlFor="catalog-search"
                className="section-kicker text-ink/40"
              >
                Search catalog
              </label>

              <div className="relative mt-3">
                <HiOutlineMagnifyingGlass
                  aria-hidden="true"
                  className="text-ink/40 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-xl"
                />

                <input
                  id="catalog-search"
                  type="search"
                  value={search}
                  onChange={(event) => onSearchChange(event.target.value)}
                  placeholder="Search React, design, Python..."
                  className="focus-ring border-ink bg-canvas text-ink placeholder:text-ink/35 h-14 w-full border-2 pr-12 pl-12 text-sm font-semibold outline-none sm:h-16 sm:text-base"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => onSearchChange("")}
                    aria-label="Clear search"
                    className="focus-ring text-ink/45 hover:bg-ink absolute top-1/2 right-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center transition hover:text-white"
                  >
                    <HiOutlineXMark aria-hidden="true" className="text-lg" />
                  </button>
                )}
              </div>
            </div>

            <div className="border-ink/10 flex items-center justify-between gap-5 border-t pt-4 xl:border-t-0 xl:pt-0">
              <div className="flex items-center gap-2">
                <HiOutlineAdjustmentsHorizontal
                  aria-hidden="true"
                  className="text-electric text-lg"
                />

                <span className="text-ink/40 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
                  Catalog controls
                </span>
              </div>

              <p
                aria-live="polite"
                className="text-ink/45 font-mono text-[9px] font-bold tracking-[0.08em] uppercase"
              >
                {String(resultCount).padStart(2, "0")} results
              </p>
            </div>
          </div>

          <div className="border-ink/15 mt-7 grid gap-6 border-t pt-7 xl:grid-cols-[minmax(0,1fr)_220px_220px]">
            <div>
              <p className="text-ink/35 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
                Field
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((item) => {
                  const value = item === "All" ? "" : item;
                  const isActive = category === value;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => onCategoryChange(value)}
                      aria-pressed={isActive}
                      className={`min-h-10 border px-4 text-[11px] font-bold uppercase transition duration-200 ${
                        isActive
                          ? "border-ink bg-ink text-white"
                          : "border-ink/15 text-ink/55 hover:border-ink hover:text-ink bg-transparent"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label
                htmlFor="catalog-level"
                className="text-ink/35 font-mono text-[9px] font-bold tracking-[0.1em] uppercase"
              >
                Level
              </label>

              <select
                id="catalog-level"
                value={level}
                onChange={(event) => onLevelChange(event.target.value)}
                className="focus-ring border-ink/20 bg-canvas text-ink mt-3 h-11 w-full border px-3 text-xs font-bold outline-none"
              >
                {levels.map((item) => (
                  <option key={item} value={item === "All" ? "" : item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="catalog-sort"
                className="text-ink/35 font-mono text-[9px] font-bold tracking-[0.1em] uppercase"
              >
                Sort by
              </label>

              <select
                id="catalog-sort"
                value={sort}
                onChange={(event) => onSortChange(event.target.value)}
                className="focus-ring border-ink/20 bg-canvas text-ink mt-3 h-11 w-full border px-3 text-xs font-bold outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="border-ink/10 mt-6 flex justify-end border-t pt-5">
              <button
                type="button"
                onClick={onClearFilters}
                className="group text-ink/50 hover:text-coral inline-flex min-h-10 items-center gap-2 text-[10px] font-black tracking-[0.05em] uppercase transition"
              >
                <HiOutlineXMark
                  aria-hidden="true"
                  className="text-base transition-transform group-hover:rotate-90"
                />
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
