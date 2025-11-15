/** @format */
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

import { RiMenu3Line, RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CourseCategories = [
  "Art & Desiing",
  "Science",
  "Geography",
  "Programming",
  "Mathematics",
  "Engineering",
  "Health & Medicine",
  "Business & Fitness",
  "History",
  "Marketing",
  "Pschology",
  "Cybersecurity",
  "Law",
  "AI & Machine Learning",
  "Data Science",
  "Music & Audio Production",
];

export default function NavBor() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 left-0 z-40 flex w-full items-center justify-center bg-white shadow-md">
      <nav className="flex w-full max-w-[1400px] items-center justify-between gap-3 px-5 py-4 md:px-10">
        <span className="flex min-h-10 items-center border-gray-300 pr-7 lg:border-r">
          <Link to="/">
            <h1 className="text-xl font-bold">
              SKILL
              <span className="text-purple-500">MIINE</span>
            </h1>
          </Link>
        </span>
        {/* Dropdown */}
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => setIsCategoryOpen(true)}
          onMouseLeave={() => setIsCategoryOpen(false)}
        >
          <button className="flex cursor-pointer items-center gap-2 text-base">
            <RiMenu3Line size={20} /> Category
          </button>

          <div
            className={`absolute left-0 z-50 mt-3 w-[230px] rounded-md bg-white p-3 shadow-lg transition-all duration-300 ease-in-out ${
              isCategoryOpen
                ? "visible -translate-y-0.5 opacity-100"
                : "invisible -translate-y-5 opacity-0"
            }`}
          >
            <ul className="scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-100 flex h-[250px] flex-col overflow-x-auto">
              {CourseCategories.map((cat) => (
                <li key={cat}>
                  <Link className="cursor-pointer text-gray-600 hover:text-purple-500">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Search */}
        <form
          action="submit"
          className="relative hidden w-[500px] text-2xl lg:flex"
        >
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 pr-10 text-base text-gray-700 outline-none md:p-2"
            placeholder="Search Courses..."
          />
          <button className="absolute right-4 h-full cursor-pointer rounded-tr-lg">
            <RiSearch2Line color="#7d0ed2" size={22} />
          </button>
        </form>
        <Link
          to="/"
          className="hidden whitespace-nowrap hover:text-purple-500 lg:block"
        >
          Become an Instructor
        </Link>

        <div className="flex min-h-10 items-center gap-4">
          <Link to="Shopping-cart" className="relative cursor-pointer p-2">
            <RiShoppingCartLine color="#000" size={25} />
            <span className="absolute -top-0.5 right-px flex h-5 w-fit items-center justify-center rounded-full bg-purple-600 p-1.5 text-sm font-medium text-white">
              3
            </span>
          </Link>

          <button
            className="cursor-pointer lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <RiMenu3Line color="#000" size={25} />
          </button>
          <span className="ml-5 hidden items-center gap-8 border-gray-300 pl-5 whitespace-nowrap lg:flex lg:border-l">
            <Link to="#" className="text-lg font-medium hover:text-purple-500">
              Log In
            </Link>

            <Link
              to="#"
              className="rounded-md px-6 py-2 text-center text-lg font-medium transition-all hover:bg-purple-600 hover:text-white"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </nav>
      {/* Sidebar*/}
      <div
        className={`fixed inset-0 top-0 left-0 z-40 h-screen w-full bg-[#00000001b] p-5 opacity-50 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[80%] bg-gray-900 p-5 shadow-lg transition-transform duration-300 sm:w-[50%] md:w-[350px] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Link to="/">
          <h1 className="text-xl font-bold text-white">
            SKILL
            <span className="text-purple-500">MIINE</span>
          </h1>
        </Link>
        <button
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes size={25} color="#fff" />
        </button>

        <nav className="relative mt-10 flex h-full flex-col gap-3 text-white">
          <form action="submit" className="relative flex gap-1">
            <input
              type="text"
              className="w-[80%] rounded-md border border-gray-300 p-2 outline-none"
              placeholder="Search Courses..."
            />
            <button className="flex w-[20%] cursor-pointer items-center justify-center rounded-md bg-purple-600">
              <RiSearch2Line color="#fff" size={20} />
            </button>
          </form>

          <div className="mt-10 flex flex-col gap-2">
            <button
              className="flex w-full items-center justify-between text-left text-lg font-medium"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            >
              Categoty
              <FaChevronDown
                color="#fff"
                className={`transition-transform duration-300 ${isCategoryDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isCategoryDropdownOpen ? "max-h-[500px]" : "max-h-0"}`}
            >
              <ul className="scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-100 flex h-[250px] flex-col overflow-x-auto">
                {CourseCategories.map((cat) => (
                  <li key={cat}>
                    <Link className="cursor-pointer text-white/70 hover:text-purple-500">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="#"
              className={`text-lg font-medium hover:text-purple-500 ${isCategoryDropdownOpen ? "py-3" : ""}`}
            >
              Become an Instuctor
            </Link>
          </div>

          <div className="absolute bottom-20 flex w-full flex-col items-center gap-2">
            <Link
              className="w-full rounded-md bg-purple-600 px-6 py-3 text-center text-lg font-medium text-white"
              to="#"
            >
              Login
            </Link>

            <Link
              className="w-full rounded-md bg-purple-600 px-6 py-3 text-center text-lg font-medium text-white"
              to="#"
            >
              Sign-Up
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
