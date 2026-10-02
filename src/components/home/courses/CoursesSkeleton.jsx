const skeletonItems = Array.from({ length: 4 }, (_, index) => index);

export default function CoursesSkeleton() {
  return (
    <div
      className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-4"
      aria-label="Loading courses"
      aria-busy="true"
    >
      {skeletonItems.map((item) => (
        <div key={item} className="border-t border-white/15 pt-3">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-20 animate-pulse bg-white/10" />
            <div className="h-6 w-20 animate-pulse bg-white/10" />
          </div>

          <div className="mt-3 aspect-[16/10] animate-pulse bg-white/[0.07]" />

          <div className="pt-5">
            <div className="flex gap-3">
              <div className="h-2.5 w-20 animate-pulse bg-white/10" />
              <div className="h-2.5 w-24 animate-pulse bg-white/10" />
            </div>

            <div className="mt-5 h-6 w-[85%] animate-pulse bg-white/10" />
            <div className="mt-2 h-6 w-[60%] animate-pulse bg-white/10" />

            <div className="mt-5 space-y-2">
              <div className="h-3 w-full animate-pulse bg-white/[0.07]" />
              <div className="h-3 w-[75%] animate-pulse bg-white/[0.07]" />
            </div>

            <div className="mt-8 flex items-end justify-between">
              <div>
                <div className="h-2 w-14 animate-pulse bg-white/[0.07]" />
                <div className="mt-2 h-3 w-24 animate-pulse bg-white/10" />
              </div>

              <div>
                <div className="ml-auto h-3 w-16 animate-pulse bg-white/10" />
                <div className="mt-2 ml-auto h-5 w-12 animate-pulse bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
