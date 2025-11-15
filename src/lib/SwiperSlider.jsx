import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export default function SwiperSlider() {
  return (
    <>
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
              <p className="mt-3 text-sm text-gray-600">{view.tutorName}</p>
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
    </>
  );
}
