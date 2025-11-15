import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const cartItems = useSelector((stat) => stat.cart);

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
                className="flex flex-col items-start rounded-md border border-gray-200 bg-white p-3 md:flex-row md:justify-between"
                key={i}
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 w-32 rounded-md object-cover"
                  />
                </div>

                <div className="">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.name}</p>
                  <p className="mt-1 font-semibold">{item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}
