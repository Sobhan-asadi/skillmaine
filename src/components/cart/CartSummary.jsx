import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi2";

export default function CartSummary({
  itemCount,
  originalTotal,
  totalSavings,
  totalPrice,
}) {
  function handleDemoCheckout() {
    toast.success("Demo checkout complete — no payment was processed.");
  }

  return (
    <aside className="lg:sticky lg:top-[96px]">
      <div className="border-ink bg-paper border-2">
        <div className="border-ink bg-ink border-b-2 p-5 text-white">
          <p className="font-mono text-[8px] font-bold tracking-[0.1em] text-white/40 uppercase">
            Cart summary
          </p>

          <p className="mt-2 text-2xl font-black tracking-[-0.04em]">
            {String(itemCount).padStart(2, "0")} selected
          </p>
        </div>

        <dl className="divide-ink/10 divide-y px-5">
          <div className="flex items-center justify-between gap-4 py-4">
            <dt className="text-ink/45 text-xs font-semibold">
              Original total
            </dt>

            <dd className="text-ink text-sm font-black">
              ${originalTotal.toFixed(2)}
            </dd>
          </div>

          <div className="flex items-center justify-between gap-4 py-4">
            <dt className="text-ink/45 text-xs font-semibold">Savings</dt>

            <dd className="text-electric text-sm font-black">
              −${totalSavings.toFixed(2)}
            </dd>
          </div>

          <div className="flex items-end justify-between gap-4 py-5">
            <dt>
              <p className="text-ink/30 font-mono text-[8px] font-bold tracking-[0.1em] uppercase">
                Total
              </p>

              <p className="text-ink/45 mt-1 text-xs font-semibold">
                Demo checkout total
              </p>
            </dt>

            <dd className="text-ink text-3xl font-black tracking-[-0.055em]">
              ${totalPrice.toFixed(2)}
            </dd>
          </div>
        </dl>

        <div className="border-ink border-t-2 p-5">
          <button
            type="button"
            onClick={handleDemoCheckout}
            className="focus-ring bg-lime text-ink hover:bg-ink flex min-h-13 w-full items-center justify-between px-5 text-xs font-black tracking-[0.03em] uppercase transition hover:-translate-y-0.5 hover:text-white"
          >
            Complete demo checkout
            <HiArrowRight aria-hidden="true" className="text-lg" />
          </button>

          <p className="text-ink/40 mt-4 text-xs leading-5">
            Portfolio demonstration only. No account, enrollment, or real
            payment is created.
          </p>
        </div>
      </div>
    </aside>
  );
}
