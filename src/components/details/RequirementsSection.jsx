import { useState } from "react";
import { RiArrowDownSLine, RiCheckLine } from "react-icons/ri";

export default function RequirementsSection({ arr, title }) {
  const [showMoreRequirements, setShowMoreRequirements] = useState(false);
  return (
    <div className="rounded-md border border-gray-400 p-5">
      <h3 className="mb-4 text-xl font-semibold text-gray-800 md:text-2xl">
        {title}
      </h3>

      <ul className="space-y-3">
        {(showMoreRequirements ? arr : arr.slice(0, 5)).map((item, i) => (
          <li className="flex items-center text-gray-700" key={i}>
            <RiCheckLine className="mr-2 text-green-600" size={20} />
            {item}
          </li>
        ))}
      </ul>
      <button
        className="mt-3 flex items-center font-medium text-purple-500 hover:underline"
        onClick={() => setShowMoreRequirements(!showMoreRequirements)}
      >
        {showMoreRequirements ? "Show Less" : "Show More"}
        <RiArrowDownSLine
          className={`mt-1 ml-1 transition-transform duration-300 ${showMoreRequirements ? "rotate-180" : "rotate-0"}`}
        />
      </button>
    </div>
  );
}
