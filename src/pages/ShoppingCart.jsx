import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import SwiperSlider from "../lib/SwiperSlider";
import { removeItem } from "../store/CartSlice";

export default function ShoppingCart() {
  const cartItems = useSelector((stat) => stat.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + +item.price;
  }, 0);

  const subtotal = cartItems.reduce((total, item) => {
    if (!isNaN(item.canceledPrice)) {
      return total + +item.canceledPrice;
    }
  }, 0);

  let discountPercentage = 0;

  cartItems.forEach((item) => {
    if (!isNaN(item.canceledPrice) && !isNaN(item.price)) {
      discountPercentage =
        ((item.canceledPrice - item.price) / item.canceledPrice) * 100;
    }
  });

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-10">
      <p className="mb-3 text-xl font-bold text-gray-800 md:mb-6 md:text-2xl">
        Shopping Cart
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {cartItems.length > 0 ? (
            cartItems.map((item, i) => (
              <div
                className="flex flex-col items-center rounded-md border border-gray-200 bg-white p-3 md:flex-row md:justify-between"
                key={i}
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 w-36 rounded-md object-cover"
                  />

                  <div className="">
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.name}</p>
                    <p className="mt-1 font-semibold text-purple-600">
                      Price:{`${item.price === 0 ? "Feer" : "$" + item.price} `}
                    </p>
                    {item.canceledPrice === undefined ? (
                      ""
                    ) : (
                      <p className="mt-1 truncate font-semibold">
                        Discount:
                        <span className="p-0.5 text-red-600 line-through">
                          ${item.canceledPrice}
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 md:mt-0">
                  <button
                    onClick={() => dispatch(removeItem(item.name))}
                    className="cursor-pointer text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt size={13} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>

        <div className="h-fit rounded-md bg-white p-6">
          <h3 className="mb-4 text-xl font-semibold">Order Summary</h3>
          <div className="flex justify-between text-gray-700">
            <span className="text-[15px] font-bold">Subtotal :</span>
            {subtotal === undefined ? (
              "Feer"
            ) : (
              <span className="">${subtotal.toFixed(2)}</span>
            )}
          </div>

          <div className="mt-2 flex justify-between text-gray-700">
            <span className="text-[15px] font-bold">% discount :</span>
            <span className="text-green-600">
              %
              {discountPercentage === undefined || discountPercentage === 0
                ? 0
                : discountPercentage.toFixed(2)}
            </span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-lg font-semibold">
            <span className="text-[15px] font-bold">Total :</span>
            <span>${totalPrice}</span>
          </div>

          <button className="mt-6 w-full cursor-pointer rounded-md bg-purple-600 py-3 text-lg font-medium text-white transition-all hover:bg-purple-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
      {/* You also viewed */}
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-0 py-10">
        <h3 className="w-full text-start text-xl font-bold text-gray-800 md:text-2xl">
          You also viewed
        </h3>
        <SwiperSlider />
      </div>
      {/* You might also like */}
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-0 py-10">
        <h3 className="w-full text-start text-xl font-bold text-gray-800 md:text-2xl">
          You might also like
        </h3>
        <SwiperSlider />
      </div>
    </div>
  );
}
