import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";

export default function NavBor() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const cartItems = useSelector((state) => state.cart.items);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  function handleSearchSubmit(event) {
    event.preventDefault();

    const query = search.trim();

    if (query) {
      navigate(`/courses?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/courses");
    }

    setSearch("");
    setIsMenuOpen(false);
  }

  return (
    <>
      <DesktopNavigation
        cartCount={cartItems.length}
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={handleSearchSubmit}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      <MobileNavigation
        isOpen={isMenuOpen}
        cartCount={cartItems.length}
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={handleSearchSubmit}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
