import toast from "react-hot-toast";
import {
  HiOutlineBookOpen,
  HiOutlineCheck,
  HiOutlineClock,
  HiOutlineLanguage,
  HiOutlineShoppingBag,
  HiOutlineSignal,
} from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../store/CartSlice";

export default function CoursePurchaseCard({ course }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isAlreadyInCart = cartItems.some((item) => item.id === course.id);

  const hasDiscount = Number(course.originalPrice) > Number(course.price);

  function handleAddToCart() {
    if (isAlreadyInCart) {
      toast.error("This course is already in your cart.");
      return;
    }

    dispatch(addToCart(course));
    toast.success("Course added to your learning cart.");
  }

  return (
    <aside className="lg:sticky lg:top-[96px]">
      <div className="border-ink bg-paper border-2">
        <div className="border-ink bg-lime border-b-2 p-5">
          <p className="text-ink/45 font-mono text-[8px] font-black tracking-[0.1em] uppercase">
            Course access
          </p>

          <div className="mt-2 flex items-end gap-2">
            <p className="text-ink text-4xl font-black tracking-[-0.06em]">
              {Number(course.price) === 0
                ? "Free"
                : `$${Number(course.price).toFixed(2)}`}
            </p>

            {hasDiscount && (
              <p className="text-ink/40 pb-1 font-mono text-[10px] font-semibold line-through">
                ${Number(course.originalPrice).toFixed(2)}
              </p>
            )}
          </div>
        </div>

        <div className="p-5">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAlreadyInCart}
            className={`focus-ring flex min-h-13 w-full items-center justify-center gap-2 px-5 text-xs font-black tracking-[0.03em] uppercase transition ${
              isAlreadyInCart
                ? "bg-ink/10 text-ink/40 cursor-not-allowed"
                : "bg-ink hover:bg-electric text-white hover:-translate-y-0.5"
            }`}
          >
            {isAlreadyInCart ? (
              <>
                <HiOutlineCheck aria-hidden="true" className="text-lg" />
                Already in cart
              </>
            ) : (
              <>
                <HiOutlineShoppingBag aria-hidden="true" className="text-lg" />
                Add to cart
              </>
            )}
          </button>

          <p className="text-ink/30 mt-6 font-mono text-[8px] font-black tracking-[0.1em] uppercase">
            Course information
          </p>

          <dl className="divide-ink/10 border-ink/10 mt-3 divide-y border-y">
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-ink/45 flex items-center gap-2 text-xs font-semibold">
                <HiOutlineSignal aria-hidden="true" className="text-base" />
                Level
              </dt>

              <dd className="text-ink text-xs font-black">{course.level}</dd>
            </div>

            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-ink/45 flex items-center gap-2 text-xs font-semibold">
                <HiOutlineClock aria-hidden="true" className="text-base" />
                Duration
              </dt>

              <dd className="text-ink text-xs font-black">{course.duration}</dd>
            </div>

            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-ink/45 flex items-center gap-2 text-xs font-semibold">
                <HiOutlineBookOpen aria-hidden="true" className="text-base" />
                Lessons
              </dt>

              <dd className="text-ink text-xs font-black">{course.lessons}</dd>
            </div>

            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-ink/45 flex items-center gap-2 text-xs font-semibold">
                <HiOutlineLanguage aria-hidden="true" className="text-base" />
                Language
              </dt>

              <dd className="text-ink text-xs font-black">{course.language}</dd>
            </div>
          </dl>

          <p className="text-ink/40 mt-5 text-xs leading-5">
            This is a demo learning platform. Adding a course stores it in the
            project&apos;s learning cart.
          </p>
        </div>

        <div className="border-ink grid grid-cols-2 border-t-2">
          <div className="border-ink border-r-2 p-4">
            <p className="text-ink/30 font-mono text-[8px] font-bold tracking-[0.08em] uppercase">
              Rating
            </p>

            <p className="text-ink mt-1 text-lg font-black">
              ★ {course.rating}
            </p>
          </div>

          <div className="p-4">
            <p className="text-ink/30 font-mono text-[8px] font-bold tracking-[0.08em] uppercase">
              Students
            </p>

            <p className="text-ink mt-1 text-lg font-black">
              {Number(course.students || 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
