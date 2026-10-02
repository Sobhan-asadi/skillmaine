import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartHeader from "../components/cart/CartHeader";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";
import { clearCart, removeItem } from "../store/CartSlice";

export default function ShoppingCart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const totalPrice = cartItems.reduce(
    (total, course) => total + Number(course.price || 0),
    0,
  );

  const originalTotal = cartItems.reduce((total, course) => {
    const originalPrice = Number(course.originalPrice || course.price || 0);

    return total + originalPrice;
  }, 0);

  const totalSavings = Math.max(originalTotal - totalPrice, 0);

  function handleRemoveCourse(courseId) {
    dispatch(removeItem(courseId));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="bg-canvas min-h-screen pt-[72px]">
      <CartHeader itemCount={cartItems.length} />

      <section className="site-container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-16">
          <div>
            <div className="border-ink flex items-end justify-between gap-5 border-b-2 pb-4">
              <div>
                <p className="section-kicker text-ink/35">Selected courses</p>

                <p className="text-ink/55 mt-2 text-sm font-semibold">
                  {cartItems.length}{" "}
                  {cartItems.length === 1 ? "course" : "courses"} in your cart
                </p>
              </div>

              <button
                type="button"
                onClick={handleClearCart}
                className="focus-ring text-ink/40 hover:text-coral font-mono text-[9px] font-bold tracking-[0.08em] uppercase transition"
              >
                Clear cart
              </button>
            </div>

            <div>
              {cartItems.map((course, index) => (
                <CartItem
                  key={course.id}
                  course={course}
                  index={index}
                  onRemove={handleRemoveCourse}
                />
              ))}
            </div>
          </div>

          <CartSummary
            itemCount={cartItems.length}
            originalTotal={originalTotal}
            totalSavings={totalSavings}
            totalPrice={totalPrice}
          />
        </div>
      </section>
    </main>
  );
}
