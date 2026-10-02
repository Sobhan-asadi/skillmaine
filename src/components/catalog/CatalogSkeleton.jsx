const skeletonItems = Array.from({ length: 6 }, (_, index) => index);

export default function CatalogSkeleton() {
  return (
    <div
      className="grid gap-x-7 gap-y-14 md:grid-cols-2 xl:grid-cols-3"
      aria-label="Loading course catalog"
      aria-busy="true"
    >
      {skeletonItems.map((item) => (
        <div key={item} className="border-ink/15 border-t-2 pt-3">
          <div className="flex items-center justify-between gap-4">
            <div className="bg-ink/10 h-2.5 w-20 animate-pulse" />

            <div className="bg-ink/10 h-6 w-24 animate-pulse" />
          </div>

          <div className="bg-ink/[0.07] mt-3 aspect-[16/10] animate-pulse" />

          <div className="pt-5">
            <div className="flex gap-3">
              <div className="bg-ink/10 h-2.5 w-20 animate-pulse" />

              <div className="bg-ink/10 h-2.5 w-16 animate-pulse" />

              <div className="bg-ink/10 h-2.5 w-20 animate-pulse" />
            </div>

            <div className="bg-ink/10 mt-5 h-7 w-[88%] animate-pulse" />

            <div className="bg-ink/10 mt-2 h-7 w-[62%] animate-pulse" />

            <div className="mt-5 space-y-2">
              <div className="bg-ink/[0.07] h-3 w-full animate-pulse" />

              <div className="bg-ink/[0.07] h-3 w-[78%] animate-pulse" />
            </div>

            <div className="border-ink/10 mt-5 flex items-center justify-between border-y py-4">
              <div>
                <div className="bg-ink/[0.07] h-2 w-14 animate-pulse" />

                <div className="bg-ink/10 mt-2 h-3 w-24 animate-pulse" />
              </div>

              <div>
                <div className="bg-ink/10 ml-auto h-4 w-12 animate-pulse" />

                <div className="bg-ink/[0.07] mt-2 ml-auto h-2 w-16 animate-pulse" />
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <div className="bg-ink/10 h-3 w-24 animate-pulse" />

              <div>
                <div className="bg-ink/[0.07] ml-auto h-2 w-10 animate-pulse" />

                <div className="bg-ink/10 mt-2 ml-auto h-6 w-14 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
