import {
  HiArrowUpRight,
  HiOutlineShoppingBag,
  HiOutlineXMark,
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

export default function MobileNavigation({
  isOpen,
  cartCount,
  search,
  onSearchChange,
  onSearchSubmit,
  onClose,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-ink fixed inset-0 z-[60] overflow-y-auto text-white lg:hidden">
      <div className="site-container flex min-h-screen flex-col">
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-white/15">
          <Brand variant="light" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="focus-ring hover:bg-lime hover:text-ink flex h-11 w-11 items-center justify-center border border-white/15 text-white transition"
          >
            <HiOutlineXMark aria-hidden="true" className="text-2xl" />
          </button>
        </div>

        <div className="py-6 sm:py-7">
          <NavSearch
            search={search}
            onSearchChange={onSearchChange}
            onSubmit={onSearchSubmit}
            variant="dark"
          />
        </div>

        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/15"
        >
          {navigation.map((item, index) => {
            const isCategories = item.path.includes("#");

            return (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => {
                  const active = isActive && !isCategories;

                  return [
                    "group flex items-center justify-between gap-5 border-b border-white/15 py-5 sm:py-6",
                    "transition-colors duration-200",
                    active ? "text-lime" : "text-white",
                  ].join(" ");
                }}
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="shrink-0 font-mono text-[9px] font-bold tracking-[0.1em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="group-hover:text-lime text-[clamp(1.7rem,8vw,2.8rem)] leading-none font-black tracking-[-0.055em] uppercase transition-colors">
                    {item.label}
                  </span>
                </div>

                <HiArrowUpRight
                  aria-hidden="true"
                  className="group-hover:text-lime shrink-0 text-xl text-white/35 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-6">
          <Link
            to="/cart"
            onClick={onClose}
            className="focus-ring bg-lime text-ink flex min-h-14 items-center justify-between px-5 transition hover:bg-white"
          >
            <div className="flex items-center gap-3">
              <HiOutlineShoppingBag aria-hidden="true" className="text-xl" />

              <span className="font-mono text-[9px] font-black tracking-[0.08em] uppercase">
                Learning cart
              </span>
            </div>

            <span className="bg-ink flex min-h-7 min-w-7 items-center justify-center px-2 font-mono text-[9px] font-bold text-white">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          </Link>
        </div>

        <div className="mt-auto flex items-end justify-between gap-5 border-t border-white/15 py-6">
          <p className="font-mono text-[8px] leading-5 font-semibold tracking-[0.08em] text-white/30 uppercase">
            SkillMaine
            <br />
            Demo learning platform
          </p>

          <p className="text-right font-mono text-[8px] leading-5 font-semibold tracking-[0.08em] text-white/20 uppercase">
            Learn
            <br />
            By direction
          </p>
        </div>
      </div>
    </div>
  );
}
