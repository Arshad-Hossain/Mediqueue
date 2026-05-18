import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative bg-[#0f172a] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Find & Book <span className="text-cyan-400">Expert Tutors</span>{" "}
              Instantly
            </h1>

            <p className="mt-5 sm:mt-6 text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              MediQueue is a modern tutor booking system that connects students
              with qualified tutors for personalized learning anytime, anywhere.
            </p>

            {/* Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/register"
                className="bg-cyan-400 text-black px-5 py-3 rounded-full font-semibold hover:bg-cyan-300 transition shadow-lg text-sm sm:text-base"
              >
                Get Started
              </Link>

              <Link
                href="/tutors"
                className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition text-sm sm:text-base"
              >
                Explore Tutors
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-8 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="text-white font-bold">500+</span> Tutors
              </div>

              <div>
                <span className="text-white font-bold">10k+</span> Students
              </div>

              <div>
                <span className="text-white font-bold">24/7</span> Support
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-md">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-cyan-400">
                Live Booking Preview
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-[#111827] p-3 sm:p-4 rounded-xl border border-white/10">
                  <p className="font-semibold text-sm sm:text-base">
                    Mathematics Tutor
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Algebra • Calculus • Geometry
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                    ⭐ 4.9 (120 reviews)
                  </p>
                </div>

                <div className="bg-[#111827] p-3 sm:p-4 rounded-xl border border-white/10">
                  <p className="font-semibold text-sm sm:text-base">
                    English Tutor
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Grammar • Writing • IELTS
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                    ⭐ 4.8 (98 reviews)
                  </p>
                </div>

                <div className="bg-[#111827] p-3 sm:p-4 rounded-xl border border-white/10">
                  <p className="font-semibold text-sm sm:text-base">
                    Physics Tutor
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Mechanics • Waves • Modern Physics
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                    ⭐ 5.0 (210 reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
