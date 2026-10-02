import { useState } from "react";
import { HiArrowUpRight, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const trendingSkills = ["React", "TypeScript", "UI/UX", "Python"];

export default function HeroSearch() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function navigateToSearch(query) {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      navigate("/courses");
      return;
    }

    navigate(`/courses?search=${encodeURIComponent(normalizedQuery)}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigateToSearch(search);
  }

  return (
    <div className="w-full max-w-[680px]">
      <form
        onSubmit={handleSubmit}
        className="group border-ink bg-paper flex min-h-[68px] border-2 transition-shadow duration-300 focus-within:shadow-[7px_7px_0_#151515] sm:min-h-[76px]"
      >
        <div className="flex min-w-0 flex-1 items-center gap-3 px-4 sm:px-5">
          <HiOutlineMagnifyingGlass
            aria-hidden="true"
            className="text-ink/45 shrink-0 text-xl sm:text-2xl"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="What do you want to learn?"
            aria-label="Search courses"
            className="text-ink placeholder:text-ink/35 min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:font-medium sm:text-base"
          />
        </div>

        <button
          type="submit"
          aria-label="Search courses"
          className="border-ink bg-electric hover:bg-ink flex w-[68px] shrink-0 items-center justify-center border-l-2 text-white transition-colors duration-300 sm:w-[76px]"
        >
          <HiArrowUpRight aria-hidden="true" className="text-2xl" />
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
        <span className="text-ink/40 mr-1 font-mono text-[9px] font-bold tracking-[0.12em] uppercase">
          Trending
        </span>

        {trendingSkills.map((skill) => (
          <button
            key={skill}
            type="button"
            onClick={() => navigateToSearch(skill)}
            className="border-ink/15 text-ink/65 hover:border-ink hover:bg-ink border bg-transparent px-3 py-1.5 text-[11px] font-semibold transition duration-200 hover:text-white"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
