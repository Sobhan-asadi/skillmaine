import { HiArrowPath } from "react-icons/hi2";

export default function CoursesError({ message, onRetry }) {
  return (
    <div
      role="alert"
      className="border border-white/15 bg-white/[0.03] px-5 py-10 sm:px-8 sm:py-12"
    >
      <div className="max-w-[560px]">
        <p className="text-coral font-mono text-[9px] font-bold tracking-[0.12em] uppercase">
          Error / Courses unavailable
        </p>

        <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
          We couldn&apos;t load the courses.
        </h3>

        <p className="mt-3 max-w-[480px] text-sm leading-6 text-white/50">
          {message || "Something went wrong while loading the course catalog."}
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="bg-lime text-ink mt-7 inline-flex min-h-11 items-center gap-2 px-5 text-xs font-bold uppercase transition hover:-translate-y-0.5"
        >
          <HiArrowPath aria-hidden="true" className="text-base" />
          Try again
        </button>
      </div>
    </div>
  );
}
