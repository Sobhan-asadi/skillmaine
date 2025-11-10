/** @format */
import { RiSearch2Line } from "react-icons/ri";
import Category from "../components/home/Category";
import DescriptionNoticeSection from "../components/home/DescriptionNoticeSection";
import PopularCourses from "../components/home/PopularCourses";
import TestimonialsSection from "../components/home/TestimonialsSection";

const skillImag1 = "/icons/diploma.png";
const skillImag2 = "/icons/education.png";
const skillImag3 = "/icons/promotion.png";
const skillImag4 = "/icons/skills.png";

const requirements = [
  {
    id: 1,
    img: skillImag1,
    title: "Learn The Essential Skills",
  },
  {
    id: 2,
    img: skillImag2,
    title: "Earn Certiftes And Degress",
  },
  {
    id: 3,
    img: skillImag3,
    title: "Get Ready for the next career",
  },
  {
    id: 4,
    img: skillImag4,
    title: "Master at Different Areas",
  },
];

export default function Homepage() {
  return (
    <>
      <div
        className="flex min-h-[600px] flex-col items-center justify-center object-cover sm:h-screen"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00000093, #00000093), url('https://axisinsurance.ca/wp-content/uploads/2024/04/school-building.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full w-full max-w-[1400px] flex-col items-center justify-center gap-10 p-3 sm:p-5 md:p-10 lg:flex-row lg:justify-start">
          <div className="flex flex-col items-start space-y-4 text-start">
            <p
              className="text-xl font-semibold text-white lg:text-3xl"
              style={{ fontFamily: "poppins,sans-serif" }}
            >
              Join Us today to get
            </p>

            <h1
              style={{ fontFamily: "poppins,sans-serif" }}
              className="max-w-full text-4xl leading-12 font-bold text-balance text-white md:text-5xl md:leading-20 lg:max-w-[800px] lg:text-6xl"
            >
              <span className="text-[#b958f5]">7,200+ </span>Courses Taught By
              <span className="text-[#b958f5]"> 720 </span>Top Instructors And
              Institutions
            </h1>

            <p className="text-xl text-gray-50 md:text-2xl">
              Eleneate your educational institution to new heights.
            </p>

            <form className="relative mt-5 flex w-full lg:w-fit">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-white py-5 pr-16 pl-4 text-gray-700 outline-none placeholder:text-sm lg:min-w-[600px] lg:placeholder:text-lg"
                placeholder="search courses..."
              />

              <button className="absolute right-0 h-full cursor-pointer rounded-tr-md rounded-br-md bg-purple-600 px-5 transition-colors duration-300 ease-in-out hover:bg-purple-500">
                <RiSearch2Line color="white" size={25} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex w-full items-start justify-center bg-purple-600 pt-10">
          <span className="maw-w-[1400px] mx-auto grid w-full justify-center gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {requirements.map((item) => (
              <div
                className="flex items-center justify-center gap-4"
                key={item.id}
              >
                <img src={item.img} alt={item.title} className="w-[60px]" />
                <p className="text-white">{item.title}</p>
              </div>
            ))}
          </span>
        </div>
      </div>

      {/* category */}
      <section className="mt-[90px] flex w-full flex-col items-center justify-center gap-10">
        <Category />
      </section>

      {/* PopularCourses */}
      <section className="mt-[90px] flex w-full flex-col items-center justify-center gap-10">
        <PopularCourses />
      </section>

      {/* DescriptionNoticeSection */}
      <section>
        <DescriptionNoticeSection />
      </section>

      {/* TestimonialsSection */}
      <section>
        <TestimonialsSection />
      </section>
    </>
  );
}
