import { useState } from "react";
import { useLocation } from "react-router-dom";

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

export default function ItemDetails() {
  const location = useLocation();
  const course = location?.state;

  // const tutor = {
  //   name: course.tutorName,
  //   level: course.level,
  //   avatar: tutorAvatar,
  //   courses: 13,
  //   students: 2000,
  //   teviews: 280,
  //   rating: 4,
  // };

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showMoreRequirements, setShowMoreRequirements] = useState(false);
  const [showMoreLearning, setShowMoreLearning] = useState(false);

  if (!course) {
    return <h3 className="mt-10 text-center text-2xl">item not found</h3>;
  }

  return <div>ItemDetails</div>;
}
