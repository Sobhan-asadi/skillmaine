import { useEffect } from "react";

import CourseDetailMain from "./CourseDetailMain";
import CourseDetailsHeader from "./CourseDetailsHeader";

export default function ItemDetails({ course }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [course.id]);

  return (
    <main className="bg-canvas">
      <CourseDetailsHeader course={course} />

      <CourseDetailMain course={course} />
    </main>
  );
}
