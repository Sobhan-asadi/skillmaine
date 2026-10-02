import { useQuery } from "@tanstack/react-query";
import { HiArrowPath, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

import { fetchCourses } from "../api/courses";
import CatalogCourseCard from "../components/catalog/CatalogCourseCard";
import CatalogHero from "../components/catalog/CatalogHero";
import CatalogSkeleton from "../components/catalog/CatalogSkeleton";
import CatalogToolbar from "../components/catalog/CatalogToolbar";
import Seo from "../components/Seo";

const DEFAULT_SORT = "featured";

function sortCourses(courses, sort) {
  const sortedCourses = [...courses];

  switch (sort) {
    case "rating":
      return sortedCourses.sort((a, b) => b.rating - a.rating);

    case "price-low":
      return sortedCourses.sort((a, b) => a.price - b.price);

    case "price-high":
      return sortedCourses.sort((a, b) => b.price - a.price);

    case "featured":
    default:
      return sortedCourses.sort((a, b) => {
        if (a.featured !== b.featured) {
          return Number(b.featured) - Number(a.featured);
        }

        if (a.bestseller !== b.bestseller) {
          return Number(b.bestseller) - Number(a.bestseller);
        }

        return b.rating - a.rating;
      });
  }
}

export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const level = searchParams.get("level") ?? "";
  const sort = searchParams.get("sort") ?? DEFAULT_SORT;

  const {
    data: courses = [],
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const categories = new Set(courses.map((course) => course.category));

  const normalizedSearch = search.trim().toLowerCase();

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = !category || course.category === category;

    const matchesLevel = !level || course.level === level;

    const searchableContent = [
      course.title,
      course.shortDescription,
      course.description,
      course.category,
      course.level,
      course.instructor?.name,
      ...(course.skills ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !normalizedSearch || searchableContent.includes(normalizedSearch);

    return matchesCategory && matchesLevel && matchesSearch;
  });

  const visibleCourses = sortCourses(filteredCourses, sort);

  function updateSearchParam(key, value) {
    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams);

      if (value) {
        nextParams.set(key, value);
      } else {
        nextParams.delete(key);
      }

      return nextParams;
    });
  }

  function handleSearchChange(value) {
    updateSearchParam("search", value);
  }

  function handleCategoryChange(value) {
    updateSearchParam("category", value);
  }

  function handleLevelChange(value) {
    updateSearchParam("level", value);
  }

  function handleSortChange(value) {
    updateSearchParam("sort", value);
  }

  function handleClearFilters() {
    setSearchParams({});
  }

  const hasActiveFilters =
    Boolean(search) ||
    Boolean(category) ||
    Boolean(level) ||
    sort !== DEFAULT_SORT;

  return (
    <main>
      <Seo
        title="Courses"
        description="Explore the SkillMaine course catalog, search by skill, filter learning options, and compare courses by category and level."
      />

      <CatalogHero
        courseCount={courses.length}
        categoryCount={categories.size}
      />

      <section id="course-catalog" className="bg-canvas">
        <CatalogToolbar
          search={search}
          category={category}
          level={level}
          sort={sort}
          resultCount={visibleCourses.length}
          hasActiveFilters={hasActiveFilters}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onLevelChange={handleLevelChange}
          onSortChange={handleSortChange}
          onClearFilters={handleClearFilters}
        />

        <div className="site-container py-14 sm:py-16 lg:py-20">
          {isPending && <CatalogSkeleton />}

          {isError && (
            <div
              role="alert"
              className="border-ink bg-paper border-2 px-5 py-12 sm:px-8"
            >
              <p className="text-coral font-mono text-[9px] font-bold tracking-[0.12em] uppercase">
                Error / Catalog unavailable
              </p>

              <h2 className="text-ink mt-4 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                We couldn&apos;t load the course catalog.
              </h2>

              <p className="text-ink/50 mt-3 max-w-[520px] text-sm leading-6">
                {error?.message ||
                  "Something went wrong while loading the courses."}
              </p>

              <button
                type="button"
                onClick={() => refetch()}
                className="bg-ink hover:bg-electric mt-7 inline-flex min-h-11 items-center gap-2 px-5 text-xs font-bold text-white uppercase transition hover:-translate-y-0.5"
              >
                <HiArrowPath aria-hidden="true" className="text-base" />
                Try again
              </button>
            </div>
          )}

          {!isPending && !isError && visibleCourses.length > 0 && (
            <>
              <div className="border-ink/15 mb-9 flex items-end justify-between gap-6 border-b pb-5">
                <div>
                  <p className="section-kicker text-ink/35">Course index</p>

                  <p className="text-ink/60 mt-2 text-sm font-semibold">
                    {visibleCourses.length === courses.length
                      ? "Showing the complete catalog."
                      : `Showing ${visibleCourses.length} of ${courses.length} courses.`}
                  </p>
                </div>

                <span className="text-ink/30 hidden font-mono text-[9px] font-bold tracking-[0.1em] uppercase sm:block">
                  Select a course to view details
                </span>
              </div>

              <div className="grid gap-x-7 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
                {visibleCourses.map((course, index) => (
                  <CatalogCourseCard
                    key={course.id}
                    course={course}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}

          {!isPending && !isError && visibleCourses.length === 0 && (
            <div className="border-ink bg-paper border-2 px-5 py-14 sm:px-8 sm:py-16">
              <span className="bg-lavender text-ink flex h-12 w-12 items-center justify-center">
                <HiOutlineMagnifyingGlass
                  aria-hidden="true"
                  className="text-xl"
                />
              </span>

              <p className="section-kicker text-ink/35 mt-7">No matches / 00</p>

              <h2 className="text-ink mt-3 max-w-[620px] text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                No courses match those filters.
              </h2>

              <p className="text-ink/50 mt-4 max-w-[520px] text-sm leading-6">
                Try another search term or clear the current filters to return
                to the full catalog.
              </p>

              <button
                type="button"
                onClick={handleClearFilters}
                className="bg-lime text-ink hover:bg-ink mt-7 min-h-11 px-5 text-xs font-black uppercase transition hover:-translate-y-0.5 hover:text-white"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
