import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTelegramFill,
  RiTwitterFill,
} from "react-icons/ri";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mx-auto w-full max-w-[1400px] p-5 text-start md:p-10">
      <ul className="mt-2 flex w-full flex-row flex-wrap justify-between gap-10 py-5 md:gap-16">
        <li className="flex w-full flex-col justify-start gap-5 md:w-fit">
          <Link to="/">
            <p className="text-3xl font-bold">
              SKILL <span className="text-purple-500">MINE</span>
            </p>
          </Link>

          <div className="mt-1 flex w-full gap-4 md:mt-2">
            <a href="#">
              <RiFacebookBoxFill
                className="text-gray-600 hover:text-purple-500"
                size={25}
              />
            </a>
            <a href="#">
              <RiInstagramFill
                className="text-gray-600 hover:text-purple-500"
                size={25}
              />
            </a>
            <a href="#">
              <RiTwitterFill
                className="text-gray-600 hover:text-purple-500"
                size={25}
              />
            </a>
            <a href="#">
              <RiTelegramFill
                className="text-gray-600 hover:text-purple-500"
                size={25}
              />
            </a>
          </div>

          <div className="flex flex-col items-start gap-1">
            <a
              href="#"
              className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-500"
            >
              Terms of Use
            </a>

            <a
              href="#"
              className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-500"
            >
              Privacy Policy
            </a>
          </div>
        </li>

        <li className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-700">About</h3>
          <ul className="mt-6 flex flex-col gap-2 font-medium">
            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </li>

        <li className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-700">Quick Links</h3>
          <ul className="mt-6 flex flex-col gap-2 font-medium">
            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Library
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Partners
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Career
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                News & Blogs
              </a>
            </li>
          </ul>
        </li>

        <li className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-700">Support</h3>
          <ul className="mt-6 flex flex-col gap-2 font-medium">
            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                FAQs
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Forum
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Sitemap
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Documentation
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[17px] font-medium text-gray-500 transition-all hover:text-purple-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <p className="mt-4 w-full border-t border-gray-400 py-5 text-center text-[13px] font-medium">
        copyright &copy; {new Date().getFullYear()} SKILLMINE. All rights
        reserved
      </p>
    </div>
  );
}
