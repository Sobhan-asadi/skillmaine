import {
  HiOutlineBars3,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

import Brand from "./Brand";
import NavSearch from "./NavSearch";

const navigation = [
  {
    label: "Explore",
    path: "/courses",
  },
  {
    label: "Categories",
    path: "/courses#catalog-filters",
  },
];

export default function DesktopNavigation({
  cartCount,
  search,
  onSearchChange,
  onSearchSubmit,
  onOpenMenu,
}) {
  return (
    <header className="border-ink/10 bg-canvas/95 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="site-container">
        <div className="flex h-[72px] items-center">
          <Brand />

          <div className="bg-ink/10 mx-7 hidden h-7 w-px lg:block" />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `group relative py-2 text-xs font-bold tracking-[0.03em] uppercase transition-colors ${
                    isActive ? "text-electric" : "text-ink/60 hover:text-ink"
                  }`
                }
              >
                {item.label}

                <span className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden w-full max-w-[360px] xl:block">
            <NavSearch
              search={search}
              onSearchChange={onSearchChange}
              onSubmit={onSearchSubmit}
            />
          </div>

          <div className="ml-auto flex items-center gap-2 xl:ml-4">
            <button
              type="button"
              aria-label="Open search and navigation"
              onClick={onOpenMenu}
              className="focus-ring border-ink/10 bg-paper text-ink hover:bg-lime flex h-11 w-11 items-center justify-center border transition xl:hidden"
            >
              <HiOutlineMagnifyingGlass
                aria-hidden="true"
                className="text-xl"
              />
            </button>

            <Link
              to="/cart"
              aria-label={`Cart with ${cartCount} courses`}
              className="focus-ring border-ink/10 bg-paper text-ink hover:bg-lavender relative flex h-11 items-center gap-2 border px-3 transition sm:px-4"
            >
              <HiOutlineShoppingBag aria-hidden="true" className="text-xl" />

              <span className="hidden text-xs font-bold uppercase sm:inline">
                Cart
              </span>

              <span className="bg-ink flex min-h-5 min-w-5 items-center justify-center px-1 font-mono text-[9px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            </Link>

            <button
              type="button"
              aria-label="Open navigation"
              onClick={onOpenMenu}
              className="focus-ring bg-electric hover:bg-electric-dark flex h-11 w-11 items-center justify-center text-white transition lg:hidden"
            >
              <HiOutlineBars3 aria-hidden="true" className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
