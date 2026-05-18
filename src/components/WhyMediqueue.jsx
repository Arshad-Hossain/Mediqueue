export default function WhyMediqueue() {
  const features = [
    {
      title: "Flexible Scheduling",
      description:
        "Book tutoring sessions anytime that fits your daily routine and study plan.",
    },
    {
      title: "Affordable Pricing",
      description:
        "Get quality education at student-friendly prices with multiple learning options.",
    },
    {
      title: "Verified Tutors",
      description:
        "Learn from experienced and trusted tutors with strong academic backgrounds.",
    },
    {
      title: "Online & Offline Support",
      description:
        "Choose between online learning or in-person tutoring based on your comfort.",
    },
  ];

  return (
    <section className="bg-[#0f172a] py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
            Why Choose
            <span className="text-cyan-400"> MediQueue?</span>
          </h2>

          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed">
            A smarter and easier way to connect students with the right tutors.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              {/* Number */}
              <div className="text-cyan-400 text-3xl font-extrabold mb-4">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
