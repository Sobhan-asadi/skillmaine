import { useState } from "react";

const popularcourses1 = "/popularcourses/popularcourses1.webp";
const popularcourses2 = "/popularcourses/popularcourses2.webp";
const popularcourses3 = "/popularcourses/popularcourses3.webp";
const popularcourses4 = "/popularcourses/popularcourses4.webp";
const popularcourses5 = "/popularcourses/popularcourses5.webp";
const popularcourses6 = "/popularcourses/popularcourses6.webp";

const popularCourses = [
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
    courseInfo: "Programming",
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
    courseInfo: "Design",
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
    courseInfo: "Computer Science",
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
    courseInfo: "Mobile Development",
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
    courseInfo: "Data Science",
    courseDiscount: "-25%",
    rating: 5,
    desctiption: "Introduction to machine learning concepts and applications",
    courseImage: popularcourses6,
  },
];

export default function PopularCourses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex w-full max-w-[1400px] flex-col items-center justify-center p-5 md:p-10">
      <h1 className="text-center text-3xl font-semibold text-gray-700">
        Top categories
      </h1>

      <div className="scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-100 mt-5 flex w-full items-start gap-2 overflow-x-auto md:justify-center">
        {["All", "Trending", "Popular", "Featured", "Art & Design"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`cursor-pointer rounded-md px-2 py-2 hover:bg-purple-500 hover:text-white ${selectedCategory === item ? "bg-purple-600 text-white" : "bg-gray-100"}`}
            >
              {item}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
