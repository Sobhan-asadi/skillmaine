import { Link } from "react-router-dom";

const categori1 = "/icons-categories/Photography1.png";
const categori2 = "/icons-categories/Finance2.png";
const categori3 = "/icons-categories/Health3.png";
const categori4 = "/icons-categories/Science4.png";
const categori5 = "/icons-categories/Buisness5.png";
const categori6 = "/icons-categories/Fashion6.png";
const categori7 = "/icons-categories/DataAnalysis7.png";
const categori8 = "/icons-categories/Developement8.png";
const categori9 = "/icons-categories/Marketing9.png";
const categori10 = "/icons-categories/Graphic10.png";
const categori11 = "/icons-categories/Music11.png";
const categori12 = "/icons-categories/Art12.png";

const categories = [
  { id: 1, img: categori12, title: "Art & Desing" },
  { id: 2, img: categori10, title: "Graphic Design" },
  { id: 3, img: categori9, title: "Marketing" },
  { id: 4, img: categori8, title: "Developement" },
  { id: 5, img: categori1, title: "Photography" },
  { id: 6, img: categori11, title: "Music" },
  { id: 7, img: categori7, title: "Data Analysis" },
  { id: 8, img: categori2, title: "Finance" },
  { id: 9, img: categori5, title: "Buisness" },
  { id: 10, img: categori3, title: "Health & Fitness" },
  { id: 11, img: categori6, title: "Fashion" },
  { id: 12, img: categori4, title: "Science & Technology" },
];

export default function Category() {
  return (
    <div className="w-full max-w-[1400px] p-5 md:p-10">
      <h1 className="text-center text-3xl font-semibold text-gray-700">
        Top categories
      </h1>

      <div className="mt-8 grid w-full grid-cols-1 justify-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cate) => (
          <Link
            to="/"
            className="group flex w-full items-center gap-4 rounded-md border border-gray-400 px-4 py-4 transition-all duration-150 ease-in hover:bg-purple-500 hover:text-white md:flex-col md:px-10"
          >
            <img src={cate.img} alt={cate.title} className="w-[50px]" />
            <p>{cate.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
