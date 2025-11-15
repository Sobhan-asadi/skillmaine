import { useLocation } from "react-router-dom";

import CourseDetailMain from "./CourseDetailMain";
import CourseDetailsHeader from "./CourseDetailsHeader ";

export default function ItemDetails() {
  const location = useLocation();

  const {
    canceledPrice = 0,
    courseImage = "",
    desctiption = "",
    level = "beginner",
    price = 0,
    rating = 0,
    title = "",
    tutorName = "",
  } = location?.state || {};

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
        canceledPrice={canceledPrice}
        price={price}
        title={title}
        courseImage={courseImage}
      />
    </div>
  );
}
