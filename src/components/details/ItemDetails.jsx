import { useState } from "react";

import { useLocation } from "react-router-dom";

import CourseDetailMain from "./CourseDetailMain";
import CourseDetailsHeader from "./CourseDetailsHeader ";

const popularcourses1 = "/popularcourses/popularcourses1.webp";
const popularcourses2 = "/popularcourses/popularcourses2.webp";
const popularcourses3 = "/popularcourses/popularcourses3.webp";
const popularcourses4 = "/popularcourses/popularcourses4.webp";
const popularcourses5 = "/popularcourses/popularcourses5.webp";
const popularcourses6 = "/popularcourses/popularcourses6.webp";

const recentvisits = [
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

export default function ItemDetails() {
  const location = useLocation();

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showMoreLearning, setShowMoreLearning] = useState(false);

  const {
    canceledPrice = 0,
    courseDiscount = 0,
    courseImage = "",
    courseInfo = "",
    desctiption = "",
    id = "",
    level = "beginner",
    price = 0,
    rating = 0,
    title = "",
    tutorAvatar = "",
    tutorImage = "",
    tutorName = "",
  } = location?.state || {};

  console.log(price);

  if (!location?.state) {
    return <h3 className="mt-10 text-center text-2xl">item not found</h3>;
  }

  return (
    <div>
      {/* CourseDetailsHeader */}
      <CourseDetailsHeader
        title={title}
        level={level}
        desctiption={desctiption}
        rating={rating}
        price={price}
        img={courseImage}
      />

      {/* CourseDetailMain  */}
      <CourseDetailMain
        name={tutorName}
        level={level}
        rating={rating}
        recentvisits={recentvisits}
        canceledPrice={canceledPrice}
        price={price}
      />
    </div>
  );
}
