import SimpleStarRating from "../SimpleStarRating";

const testimonialsData = {
  title: "What Our Students Say",
  subtitle: "Join thousands of satisfied learners worldwide",
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Frontend Developer",
      rating: 5,
      avatar: "/avatars/sarah.jpg",
      text: "SkillMine transformed my career! The courses are practical and directly applicable to real-world projects.",
      company: "TechCorp",
    },

    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      rating: 5,
      avatar: "",
      text: "As a complete beginner, I found the courses incredibly well-structured. The instructors explain complex concepts simply.",
      company: "DataInsights",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UX Designer",
      rating: 4,
      avatar: "/avatars/michael.jpg",
      text: "The platform's intuitive interface made learning enjoyable. I landed my dream job after completing the design course.",
      company: "DesignStudio",
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Full Stack Developer",
      rating: 5,
      avatar: "",
      text: "The project-based approach helped me build a strong portfolio. I received multiple job offers within weeks.",
      company: "StartUpHub",
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Product Manager",
      rating: 4,
      avatar: "",
      text: "The community support and mentor guidance were invaluable. I advanced to senior PM role faster than expected.",
      company: "ProductLabs",
    },
    {
      id: 6,
      name: "David Kim",
      role: "DevOps Engineer",
      rating: 5,
      avatar: "/avatars/david.jpg",
      text: "Comprehensive curriculum with hands-on labs. The certification boosted my credibility in the job market.",
      company: "CloudSystems",
    },
  ],
};

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {testimonialsData.title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <SimpleStarRating rating={testimonial.rating} />

              <p className="mb-6 leading-relaxed text-gray-700">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-white">
                  {testimonial.avatar && testimonial.avatar !== "" ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <span>{testimonial.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-purple-700">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}
