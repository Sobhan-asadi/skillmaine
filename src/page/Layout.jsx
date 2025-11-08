/** @format */

import { Outlet } from "react-router-dom";
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
    </>
  );
}
