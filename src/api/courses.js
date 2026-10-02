const API_URL = "http://localhost:3001";

async function request(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    const error = new Error("Failed to fetch course data.");

    error.status = response.status;

    throw error;
  }

  return response.json();
}

export function fetchCourses() {
  return request("/courses");
}

export function fetchCourseById(courseId) {
  return request(`/courses/${courseId}`);
}
