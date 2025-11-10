import { useState } from "react";
import { Link } from "react-router-dom";
import SimpleStarRating from "../SimpleStarRating";

const popularcourses1 = "/popularcourses/popularcourses1.webp";
const popularcourses2 = "/popularcourses/popularcourses2.webp";
const popularcourses3 = "/popularcourses/popularcourses3.webp";
const popularcourses4 = "/popularcourses/popularcourses4.webp";
const popularcourses5 = "/popularcourses/popularcourses5.webp";
const popularcourses6 = "/popularcourses/popularcourses6.webp";

const popular = [
  {
    id: 1,
    tutorAvatar: "avatar1",
    level: "pro",
    title: "How to build a Responsive website Using React and Tailwind css",
    price: "$19.00",
    tutorName: "James Maximus",
    tutorImag: "avatar1",
    canceledPrice: "$25.19",
    courseInfo: "Arts & Desing",
    courseDiscount: "-10%",
    rating: 4,
    desctiption:
      "Take this negotiation course today and you'll learn tonegotiation nasterfully",
    courseImage: popularcourses1,
  },
  {
    id: 2,
    tutorAvatar: "avatar2",
    level: "beginner",
    title: "Advanced JavaScript Patterns and Practices",
    price: "$29.00",
    tutorName: "Sarah Johnson",
    tutorImag: "avatar2",
    canceledPrice: "$35.99",
    courseInfo: "Trending",
    courseDiscount: "-15%",
    rating: 5,
    desctiption: "Master advanced JavaScript concepts and design patterns",
    courseImage: popularcourses2,
  },
  {
    id: 3,
    tutorAvatar: "avatar3",
    level: "intermediate",
    title: "UI/UX Design Fundamentals",
    price: "Free",
    tutorName: "Michael Chen",
    tutorImag: "avatar3",
    canceledPrice: "",
    courseInfo: "Trending",
    courseDiscount: "",
    rating: 3.5,
    desctiption:
      "Learn the principles of user interface and user experience design",
    courseImage: popularcourses3,
  },
  {
    id: 4,
    tutorAvatar: "avatar4",
    level: "pro",
    title: "Data Structures and Algorithms in Python",
    price: "$39.99",
    tutorName: "Emily Rodriguez",
    tutorImag: "avatar4",
    canceledPrice: "$49.99",
    courseInfo: "Featurede",
    courseDiscount: "-20%",
    rating: 5,
    desctiption: "Comprehensive guide to data structures and algorithms",
    courseImage: popularcourses4,
  },
  {
    id: 5,
    tutorAvatar: "avatar5",
    level: "beginner",
    title: "Mobile App Development with Flutter",
    price: "$32.00",
    tutorName: "David Kim",
    tutorImag: "avatar5",
    canceledPrice: "$40.00",
    courseInfo: "Popular",
    courseDiscount: "-18%",
    rating: 4,
    desctiption: "Build cross-platform mobile apps using Flutter framework",
    courseImage: popularcourses5,
  },
  {
    id: 6,
    tutorAvatar: "avatar6",
    level: "intermediate",
    title: "Machine Learning Fundamentals",
    price: "$45.00",
    tutorName: "Lisa Wang",
    tutorImag: "avatar6",
    canceledPrice: "$55.50",
    courseInfo: "Featured",
    courseDiscount: "-25%",
    rating: 5,
    desctiption: "Introduction to machine learning concepts and applications",
    courseImage: popularcourses6,
  },
  {
    id: 7,
    tutorAvatar: "avatar1",
    level: "pro",
    title: "How to build a Responsive website Using React and Tailwind css",
    price: "$19.00",
    tutorName: "James Maximus",
    tutorImag: "avatar1",
    canceledPrice: "$25.19",
    courseInfo: "Arts & Desing",
    courseDiscount: "-10%",
    rating: 4,
    desctiption:
      "Take this negotiation course today and you'll learn tonegotiation nasterfully",
    courseImage: popularcourses1,
  },
  {
    id: 8,
    tutorAvatar: "avatar3",
    level: "intermediate",
    title: "UI/UX Design Fundamentals",
    price: "Free",
    tutorName: "Michael Chen",
    tutorImag: "avatar3",
    canceledPrice: "",
    courseInfo: "Popular",
    courseDiscount: "",
    rating: 3.5,
    desctiption:
      "Learn the principles of user interface and user experience design",
    courseImage: popularcourses3,
  },
];

export default function PopularCourses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const popularCourses =
    selectedCategory === "All"
      ? popular
      : popular.filter((item) => item.courseInfo === selectedCategory);

  return (
    <div className="flex w-full max-w-[1400px] flex-col items-center justify-center p-5 md:p-10">
      <h1 className="text-center text-3xl font-semibold text-gray-700">
        Top categories
      </h1>

      <div className="scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-100 mt-5 flex w-full items-start gap-2 overflow-x-auto md:justify-center">
        {["All", "Trending", "Popular", "Featured", "Arts & Desing"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`cursor-pointer rounded-md px-3 py-2 hover:bg-purple-500 hover:text-white ${selectedCategory === item ? "bg-purple-600 text-white" : "bg-gray-200"}`}
            >
              {item}
            </button>
          ),
        )}
      </div>
      <div className="mt-10 grid w-full gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {popularCourses.map((course) => (
          <Link
            to="/"
            key={course.id}
            className="group relative flex flex-col items-start gap-2 overflow-hidden rounded-lg border border-gray-300 p-2 shadow-md shadow-purple-400 transition-all duration-150 ease-in"
          >
            <div className="w-full overflow-hidden">
              <img
                src={course.courseImage}
                alt={course.title}
                className="h-[180px] w-full rounded-lg object-cover opacity-90 transition-transform duration-300 ease-in group-hover:scale-125 hover:opacity-100"
              />
            </div>

            <div className="absolute top-5 left-5 flex items-center gap-3">
              <p className="rounded-full bg-purple-600 px-3 text-sm text-white">
                {course.courseInfo}
              </p>

              <p className="rounded-full bg-green-500 px-3 text-sm text-white">
                {course.courseDiscount}
              </p>
            </div>
            <p className="rounded-full bg-purple-500 px-3 text-sm text-purple-50">
              {course.level}
            </p>

            <div className="mt-2">
              <p className="text-sm font-semibold">{course.tutorName}</p>
              <p className="mt-1 text-[15px] font-medium">{course.title}</p>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <SimpleStarRating rating={course.rating} />
            </div>

            <div className="mt-2 flex items-center justify-center gap-2 text-gray-400">
              <p className="text-lg font-semibold text-purple-900">
                {course.price}
              </p>

              <p className="text-red-700 line-through">
                {course.canceledPrice}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <button className="mt-20 w-[250px] cursor-pointer rounded-xl border bg-purple-600 p-4 text-lg font-semibold text-white hover:bg-purple-700">
        View More Courses
      </button>
    </div>
  );
}
