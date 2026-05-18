export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create an Account",
      description:
        "Sign up as a student and complete your profile to start exploring tutors.",
    },
    {
      step: "02",
      title: "Find a Tutor",
      description:
        "Browse tutors by subject, expertise, ratings, and preferred teaching style.",
    },
    {
      step: "03",
      title: "Book a Session",
      description:
        "Choose your preferred schedule and confirm your tutoring session instantly.",
    },
    {
      step: "04",
      title: "Start Learning",
      description:
        "Attend sessions online or offline and improve your skills with expert guidance.",
    },
  ];

  return (
    <section className="bg-[#111827] py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
            How It <span className="text-cyan-400">Works</span>
          </h2>

          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed">
            Booking a tutor with MediQueue is simple, fast, and designed for a
            smooth learning experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              {/* Step Number */}
              <div className="text-cyan-400 text-3xl font-extrabold mb-4">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
