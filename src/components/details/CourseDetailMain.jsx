import RequirementsSection from "./RequirementsSection";

const requirements = [
  "Basic understanding of HTML, CSS, and JavaScript",
  "Prior experience with React.js fundamentals",
  "Familiarity with Tailwind CSS for styling",
  "Understanding of state management using React hooks (useState, useEffect)",
  "Experience with ES6+ JavaScript features like arrow functions and destructuring",
  "Basic knowledge of Git and GitHub for version control",
  "An IDE (like VS code) installed for coding",
  "Ability to use the command line (CLI) for running React applications",
  "Understanding of API integration using Fetch or Axios",
  "Willingness to learn and practice advanced React concepts",
  "Some knowledge of Next.js (optional but beneficial)",
  "Patience and curiosity to solve problems and debug code",
];

const learnings = [
  "Build modern and responsive web applications using React.js",
  "Master React hooks like useState, useEffect, and useContext",
  "Use Tailwind CSS to create clean and beautiful UI designs",
  "Manage application state efficiently with React's built-in features",
  "Work with APIs using Fetch and Axios for data fetching",
  "Implement routing and navigation using React Router",
  "Optimize React applications for performance and reusability",
  "Understand component lifecycle and best practices",
  "Deploy React applications using platforms like Vercel or Netlify",
  "Gain hands-on experience with real-world projects",
  "Learn Next.js fundamentals for server-side rendering (optional)",
  "Enhance problem-solving skills by debugging and troubleshooting issues",
];

export default function CourseDetailMain() {
  return (
    <main className="relative mx-auto flex max-w-[1400px] flex-col px-5 lg:px-10">
      <div className="relative flex flex-col-reverse gap-3 py-10 lg:flex-row">
        <div className="lg:w-[70%]">
          <div className="relative h-fit gap-5 space-y-4">
            {/* <div className="rounded-md border border-gray-400 p-5">
              <h3 className="mb-4 text-xl font-semibold text-gray-800 md:text-2xl">
                Course Requirements
              </h3>

              <ul className="space-y-3">
                {(showMoreRequirements
                  ? requirements
                  : requirements.slice(0, 5)
                ).map((item, i) => (
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
            </div> */}
            <RequirementsSection
              title=" Course Requirements"
              arr={requirements}
            />
            <RequirementsSection title="What You'll Learn" arr={learnings} />
          </div>
        </div>
      </div>
    </main>
  );
}
