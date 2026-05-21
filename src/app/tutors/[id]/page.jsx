import { BookSessionModal } from "@/components/BookSessionModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/tutors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const tutor = await res.json();

  return (
    <section className="bg-[#111827] py-16 sm:py-20 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden">
          {/* Top Section */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Side */}
              <div className="flex flex-col items-center lg:items-start">
                {/* Image */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    priority
                    className="rounded-3xl object-cover border-4 border-cyan-400/20"
                  />
                </div>

                {/* Subject Badge */}
                <div className="mt-5 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                  <span className="text-cyan-400 font-medium text-sm">
                    {tutor.subject} Tutor
                  </span>
                </div>

                {/* Fee */}
                <div className="mt-6 w-full bg-[#111827] border border-white/10 rounded-2xl p-5 text-center">
                  <p className="text-slate-400 text-sm">Session Fee</p>

                  <h3 className="mt-2 text-4xl font-extrabold text-cyan-400">
                    {tutor.fee}
                  </h3>
                </div>
              </div>

              {/* Right Side */}
              <div className="lg:col-span-2">
                {/* Name */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {tutor.name}
                </h1>

                <p className="mt-3 text-slate-400 leading-relaxed max-w-2xl">
                  Learn with an experienced tutor who provides personalized
                  guidance, interactive lessons, and practical learning methods
                  to help students achieve academic success confidently.
                </p>

                {/* Info Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm">Institution</p>

                    <h3 className="mt-2 text-white font-semibold">
                      {tutor.institution}
                    </h3>
                  </div>

                  <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm">Experience</p>

                    <h3 className="mt-2 text-white font-semibold">
                      {tutor.experience}
                    </h3>
                  </div>

                  <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm">Location</p>

                    <h3 className="mt-2 text-white font-semibold">
                      {tutor.location}
                    </h3>
                  </div>

                  <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
                    <p className="text-slate-400 text-sm">Mode</p>

                    <h3 className="mt-2 text-cyan-400 font-semibold">
                      {tutor.mode}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-white/10" />

            {/* Session Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Session <span className="text-cyan-400">Details</span>
              </h2>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {/* Availability */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition duration-300">
                  <p className="text-slate-400 text-sm">Availability</p>

                  <h4 className="mt-3 text-white font-medium leading-relaxed">
                    {tutor.availability}
                  </h4>
                </div>

                {/* Session Start */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition duration-300">
                  <p className="text-slate-400 text-sm">Session Starts</p>

                  <h4 className="mt-3 text-white font-semibold">
                    {tutor.sessionStartDate}
                  </h4>
                </div>

                {/* Slots */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition duration-300">
                  <p className="text-slate-400 text-sm">Remaining Slots</p>

                  <h4 className="mt-3 text-cyan-400 text-3xl font-extrabold">
                    {tutor.remainingSlots}
                  </h4>
                </div>

                {/* Mode */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition duration-300">
                  <p className="text-slate-400 text-sm">Mode</p>

                  <h4 className="mt-3 text-cyan-400 text-xl font-bold">
                    {tutor.mode}
                  </h4>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-10">
              {/* <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-2xl transition duration-300 hover:-translate-y-1">
                Book Session
              </button> */}
              <div className="mt-10">
                <BookSessionModal tutor={tutor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDetailsPage;
