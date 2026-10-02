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
    label: "Courses",
    path: "/courses",
  },
  {
    label: "Categories",
    path: "/courses#catalog-filters",
  },
  {
    label: "Experiences",
    path: "/experiences",
  },
  {
    label: "About",
    path: "/about",
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
    <header className="border-ink/15 bg-canvas/95 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="site-container">
        <div className="flex h-[72px] items-center">
          <Brand />

          <div
            aria-hidden="true"
            className="bg-ink/15 mx-6 hidden h-7 w-px lg:block xl:mx-7"
          />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => {
                  const isCategories = item.path.includes("#");

                  const active = isActive && !isCategories;

                  return [
                    "focus-ring relative flex h-10 items-center px-3",
                    "font-mono text-[12px] font-black tracking-[0.08em] uppercase",
                    "transition-colors duration-200",
                    active
                      ? "bg-ink text-white"
                      : "text-ink/50 hover:bg-paper hover:text-ink",
                  ].join(" ");
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden w-full max-w-[320px] xl:block 2xl:max-w-[360px]">
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
              className="focus-ring border-ink/15 bg-paper text-ink hover:bg-lime flex h-11 w-11 items-center justify-center border transition xl:hidden"
            >
              <HiOutlineMagnifyingGlass
                aria-hidden="true"
                className="text-xl"
              />
            </button>

            <Link
              to="/cart"
              aria-label={`Cart with ${cartCount} courses`}
              className="focus-ring border-ink/15 bg-paper text-ink hover:border-ink hover:bg-lavender relative flex h-11 items-center gap-2 border px-3 transition sm:px-4"
            >
              <HiOutlineShoppingBag aria-hidden="true" className="text-xl" />

              <span className="hidden font-mono text-[9px] font-black tracking-[0.08em] uppercase sm:inline">
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
