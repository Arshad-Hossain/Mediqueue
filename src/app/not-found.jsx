import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 text-white">
      <div className="max-w-2xl text-center">
        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-extrabold text-cyan-400">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl font-bold">Page Not Found</h2>

        {/* Description */}
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition duration-300"
          >
            Go Home
          </Link>

          <a
            href="/login"
            className="px-6 py-3 rounded-xl border border-white/10 bg-[#111827] hover:border-cyan-400/40 transition duration-300"
          >
            Contact Support
          </a>
        </div>

        {/* Decorative Box */}
        <div className="mt-12 bg-[#111827] border border-white/10 rounded-2xl p-6 shadow-lg">
          <p className="text-slate-400 text-sm">
            MediQueue helps students connect with verified tutors easily and
            efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}
