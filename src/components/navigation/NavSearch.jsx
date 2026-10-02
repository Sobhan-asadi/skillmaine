import { HiArrowUpRight, HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function NavSearch({
  search,
  onSearchChange,
  onSubmit,
  variant = "desktop",
}) {
  if (variant === "mobile") {
    return (
      <form onSubmit={onSubmit} className="border-ink/15 bg-paper flex border">
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="React, UI design, Python..."
          aria-label="Search courses"
          className="focus-ring placeholder:text-ink/35 min-w-0 flex-1 bg-transparent px-4 py-4 text-sm font-medium outline-none"
        />

        <button
          type="submit"
          aria-label="Submit search"
          className="bg-electric hover:bg-electric-dark flex w-14 shrink-0 items-center justify-center text-white transition"
        >
          <HiArrowUpRight aria-hidden="true" className="text-xl" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <HiOutlineMagnifyingGlass
        aria-hidden="true"
        className="text-ink/35 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-lg"
      />

      <input
        type="search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search a skill"
        aria-label="Search courses"
        className="focus-ring border-ink/10 bg-paper text-ink placeholder:text-ink/35 h-11 w-full border pr-16 pl-11 text-sm font-medium"
      />

      <span className="border-ink/10 bg-canvas text-ink/40 pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 border px-2 py-1 font-mono text-[8px] font-bold uppercase">
        Enter
      </span>
    </form>
  );
}
