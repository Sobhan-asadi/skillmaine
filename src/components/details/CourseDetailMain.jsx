import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiBook3Fill,
  RiBookOpenLine,
  RiCustomerService2Fill,
  RiDownload2Fill,
  RiHeartLine,
  RiInfinityLine,
  RiListView,
  RiMedal2Fill,
  RiTvFill,
  RiUser3Line,
  RiVideoFill,
} from "react-icons/ri";

import SimpleStarRating from "../SimpleStarRating";
import RequirementsSection from "./RequirementsSection";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const requirements = [
  "Basic understanding of HTML, CSS, and JavaScript",
  "Prior experience with React.js fundamentals",
  "Familiarity with Tailwind CSS for styling",
  "Understanding of state management using React hooks (useState, useEffect)",
  "Experience with ES6+ JavaScript features like arrow functions and destructuring",
  "Basic knowledge of Git and GitHub for version control",
  "An IDE (like VS code) installed for coding",
  "Ability to use the command line (CLI) for running React applications",
  "Understanding of API integration using Fetch or Axios",
  "Willingness to learn and practice advanced React concepts",
  "Some knowledge of Next.js (optional but beneficial)",
  "Patience and curiosity to solve problems and debug code",
];

const courseFeatures = [
  {
    id: "a-1",
    icon: <RiVideoFill size={20} className="text-gray-700" />,
    text: "22 hours on-demand video",
  },

  {
    id: "s-2",
    icon: <RiDownload2Fill size={20} className="text-gray-700" />,
    text: "Downloadable resources",
  },

  {
    id: "d-3",
    icon: <RiTvFill size={20} className="text-gray-700" />,
    text: "Watch on TV and mobile",
  },

  {
    id: "f-4",
    icon: <RiInfinityLine size={20} className="text-gray-700" />,
    text: "Full lifetime access",
  },

  {
    id: "g-5",
    icon: <RiMedal2Fill size={20} className="text-gray-700" />,
    text: "Certificate of completion",
  },

  {
    id: "h-6",
    icon: <RiBook3Fill size={20} className="text-gray-700" />,
    text: "Interactive exercises",
  },

  {
    id: "j-7",
    icon: <RiCustomerService2Fill size={20} className="text-gray-700" />,
    text: "24/7 support assistance",
  },
];

const learnings = [
  "Build modern and responsive web applications using React.js",
  "Master React hooks like useState, useEffect, and useContext",
  "Use Tailwind CSS to create clean and beautiful UI designs",
  "Manage application state efficiently with React's built-in features",
  "Work with APIs using Fetch and Axios for data fetching",
  "Implement routing and navigation using React Router",
  "Optimize React applications for performance and reusability",
  "Understand component lifecycle and best practices",
  "Deploy React applications using platforms like Vercel or Netlify",
  "Gain hands-on experience with real-world projects",
  "Learn Next.js fundamentals for server-side rendering (optional)",
  "Enhance problem-solving skills by debugging and troubleshooting issues",
];

export default function CourseDetailMain({
  name,
  level,
  rating,
  recentvisits,
  canceledPrice,
  price,
}) {
  return (
    <main className="relative mx-auto flex max-w-[1400px] flex-col px-5 lg:px-10">
      <div className="relative flex flex-col gap-3 py-10 lg:flex-row">
        <div className="lg:w-[70%]">
          <div className="relative h-fit gap-5 space-y-4">
            <RequirementsSection
              title=" Course Requirements"
              arr={requirements}
            />

            <RequirementsSection title="What You'll Learn" arr={learnings} />

            {/* Instructor and course description section */}
            <div className="flex h-full w-full flex-col items-start gap-4 rounded-md border border-gray-400 p-3 md:flex-row md:items-center">
              <img
                src="/avatars/sarah.jpg"
                alt="name"
                className="h-[350px] w-full rounded-md object-cover sm:h-[400px] md:h-full md:w-50"
              />

              <div className="">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-800">{level} instructor</p>

                <div className="mt-3 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <RiBookOpenLine size={20} className="text-purple-500" />
                    <span className="font-semibold">5</span>courses
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <RiUser3Line size={20} className="text-green-500" />
                    <span className="font-semibold">500</span>Students
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <RiListView size={20} className="text-blue-500" />
                    <span className="font-semibold">500</span>Reviews
                  </div>
                </div>

                <p className="mt-3 max-w-[500px] text-[15px] text-gray-700">
                  {name} has over 10 years of experience in the industry,
                  teaching thousands of students worldwide.
                </p>

                <div className="">
                  <SimpleStarRating rating={rating} />
                </div>
              </div>
            </div>
            {/* recentvisits &  Swiper*/}

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-0 py-10">
              <h3 className="w-full text-start text-xl font-bold text-gray-800 md:text-2xl">
                You also viewed
              </h3>

              <Swiper
                spaceBetween={20}
                freeMode={false}
                autoplay={{
                  enabled: true,
                  delay: 200,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                  enabled: true,
                  nextEl: ".next-btn",
                  prevEl: ".prev-btn",
                }}
                modules={[FreeMode, Navigation, Pagination]}
                className="w-full p-5"
                breakpoints={{
                  340: { slidesPerView: 1 },
                  540: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                  1280: { slidesPerView: 3 },
                }}
              >
                {recentvisits.map((view) => (
                  <SwiperSlide className="mb-6 flex" key={view.id}>
                    <div className="rounded-md border border-gray-100 bg-white p-4">
                      <img
                        src={view.courseImage}
                        alt={view.title}
                        className="h-32 w-full rounded-md object-cover"
                      />
                      <h3 className="mt-3 truncate text-sm text-gray-600">
                        {view.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-600">
                        {view.tutorName}
                      </p>
                      <p className="mt-1 font-medium">
                        {view.canceledPrice !== "" ? view.price : "Free"}
                      </p>
                      <button className="mt-3 w-full cursor-pointer rounded-md bg-purple-500 py-2 text-white transition-all hover:bg-purple-700">
                        Add to Cart
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex gap-10">
                <button className="prev-btn cursor-pointer rounded-full bg-purple-500 p-2">
                  <RiArrowLeftLine color="white" size={29} />
                </button>
                <button className="next-btn cursor-pointer rounded-full bg-purple-500 p-2">
                  <RiArrowRightLine color="white" size={29} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Cart */}
        <div className="top-24 h-fit rounded-md border border-gray-400 bg-white p-5 py-6 md:px-8 lg:sticky lg:w-[30%] lg:shadow-lg">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-purple-500">{price}</p>
            <p className="text-red-400 line-through">{canceledPrice}</p>
          </div>

          <div className="mt-3 flex flex-col items-start gap-2">
            <div className="flex w-full items-center gap-2">
              <button className="w-full cursor-pointer rounded-md bg-purple-500 p-2 font-semibold text-white transition-all duration-300 hover:bg-purple-600">
                Buy now
              </button>

              <button className="cursor-pointer rounded-md bg-purple-500 p-2 font-semibold text-white transition-all duration-300 hover:bg-purple-600">
                <RiHeartLine color="white" size={22} />
              </button>
            </div>

            <button className="w-full cursor-pointer rounded-md border border-purple-600 bg-white p-2 font-semibold text-gray-700 transition-all duration-300 hover:bg-purple-600 hover:text-white">
              Add to cart
            </button>
          </div>

          <h3 className="mt-5 mb-4 text-lg font-semibold text-gray-900">
            This course includes:
          </h3>
          <ul className="space-y-3">
            {courseFeatures.map((item) => (
              <li className="flex items-center text-gray-700" key={item.id}>
                <span className="mr-3">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center space-x-5 font-medium text-purple-700">
            <button className="cursor-pointer whitespace-nowrap transition-all hover:underline">
              Share
            </button>
            <button className="cursor-pointer whitespace-nowrap transition-all hover:underline">
              Gift this course
            </button>
            <button className="cursor-pointer whitespace-nowrap transition-all hover:underline">
              Apply
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
