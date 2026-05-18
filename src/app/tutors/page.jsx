import TutorsCard from "@/components/TutorsCard";
import Image from "next/image";
import React from "react";

const TutorsPage = async () => {
  const res = await fetch("http://localhost:5000/tutors");
  const tutors = await res.json();
  // console.log(tutors);
  return (
    <section className="bg-[#0f172a] py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Meet Our
            <span className="text-cyan-400"> Tutors</span>
          </h2>

          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed">
            Find experienced tutors based on subject, availability, and session
            schedule.
          </p>
        </div>

        {/* Tutor Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tutors.map((tutor) => (
            <TutorsCard key={tutor._id} tutor={tutor}></TutorsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsPage;
