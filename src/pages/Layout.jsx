/** @format */

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBor from "../components/NavBor";

export default function Layout() {
  return (
    <>
      <header>
        <NavBor />
      </header>

      <main className="mt-[75px]">
        <Outlet />
      </main>

      <footer className="mt-10 flex h-full w-full flex-col items-center justify-center bg-gray-50 px-0">
        <Footer />
      </footer>
    </>
  );
}
