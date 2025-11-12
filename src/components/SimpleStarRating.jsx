export default function SimpleStarRating({ rating, color }) {
  console.log(color);

  return (
    <div className="flex items-center gap-1">
      <div className="relative flex">
        <div className="flex text-gray-300">
          {[...Array(5)].map((_, index) => (
            <span key={`bg-${index}`} className="text-lg">
              ★
            </span>
          ))}
        </div>

        <div
          className="absolute top-0 left-0 flex overflow-hidden text-orange-500"
          style={{ width: `${(rating / 5) * 100}%` }}
        >
          {[...Array(5)].map((_, index) => (
            <span key={`fg-${index}`} className="text-lg">
              ★
            </span>
          ))}
        </div>
      </div>
      <span
        className={`ml-1 text-sm ${color !== undefined ? color : "text-gray-600"}`}
      >
        ({rating})
      </span>
    </div>
  );
}
