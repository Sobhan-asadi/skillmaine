import { useEffect, useState } from "react";
import { RiPlayCircleLine } from "react-icons/ri";
import SimpleStarRating from "../SimpleStarRating";

export default function CourseDetailsHeader({
  title,
  level,
  rating,
  price,
  desctiption,
  img,
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative h-full w-full bg-gray-800 py-5">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-10 px-5 lg:flex-row lg:px-10">
        <div className="w-full">
          {/* Title */}
          <div className="mt-4 pb-2">
            <h2 className="max-w-[700px] text-xl font-semibold text-gray-100 sm:text-2xl md:text-3xl">
              {title}
            </h2>
          </div>
          {/* About this cours */}
          <div className="mt-4">
            <h3 className="mb-1 text-lg font-semibold text-gray-100 md:text-2xl">
              About this cours
            </h3>
            <p className="max-w-[600px] leading-relaxed text-purple-300">
              {desctiption || "no description id avalaible"}
            </p>
          </div>
          {/* level */}
          <div className="mt-5 flex gap-1">
            <p className="text-xl font-medium text-gray-200">Level:</p>
            <span className="text-lg font-medium text-gray-300">{level}</span>
          </div>
          {/* Price */}
          <div className="mt-5 flex gap-1">
            <p className="text-xl font-medium text-gray-200">Price:</p>
            <span className="text-lg font-medium text-purple-400">{price}</span>
          </div>
          {/*  */}
          <div className="mt-2 flex items-center gap-1">
            <SimpleStarRating rating={rating} color={`text-yellow-500`} />
          </div>
          <button className="00 w-[120px] cursor-pointer rounded-md bg-purple-500 py-2 text-white transition-all hover:bg-purple-700 md:mt-5">
            Add to Cart
          </button>
        </div>
        {isVideoPlaying ? (
          <iframe
            className="h-[360px] w-full rounded-sm"
            src="https://www.aparat.com/video/video/embed/videohash/mhqx6r7/vt/frame"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        ) : (
          <div className="relative flex h-[400px] w-full items-center justify-center rounded-lg">
            <img
              src={img}
              alt={title}
              className="absolute z-20 h-full w-full rounded-lg object-cover"
            />
            <div className="absolute z-30 h-full w-full rounded-sm bg-[#000000a2]">
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute bottom-[50%] left-[45%] z-40 flex cursor-pointer items-center justify-center rounded-full bg-black p-1 opacity-40 transition-all hover:opacity-50"
              >
                <RiPlayCircleLine color="#fff" size={50} />
              </button>
            </div>
            <p className="relative z-40 mt-5 font-semibold text-white">
              Review this course
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
