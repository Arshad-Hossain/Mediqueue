// import TutorsCard from "@/components/TutorsCard";
// import Image from "next/image";
// import React from "react";

// const TutorsPage = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`);
//   const tutors = await res.json();
//   // console.log(tutors);
//   return (
//     <section className="bg-[#0f172a] py-16 sm:py-20 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-extrabold">
//             Meet Our
//             <span className="text-cyan-400"> Tutors</span>
//           </h2>

//           <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed">
//             Find experienced tutors based on subject, availability, and session
//             schedule.
//           </p>
//         </div>

//         {/* Tutor Cards */}
//         <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {tutors.map((tutor) => (
//             <TutorsCard key={tutor._id} tutor={tutor}></TutorsCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TutorsPage;

"use client";

import TutorsCard from "@/components/TutorsCard";
import React, { useEffect, useState } from "react";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);

  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);

        const query = new URLSearchParams();

        if (search.trim()) query.append("search", search);
        if (startDate) query.append("startDate", startDate);
        if (endDate) query.append("endDate", endDate);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?${query.toString()}`,
        );

        const data = await res.json();
        setTutors(data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, [search, startDate, endDate]);

  return (
    <section className="bg-[#0f172a] min-h-screen py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Meet Our <span className="text-cyan-400">Tutors</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Search tutors by name and filter by session date
          </p>
        </div>

        {/* SEARCH + FILTER (FLEX BETWEEN) */}
        <div className="mt-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* 🔍 SEARCH */}
          <input
            type="text"
            placeholder="🔍 Search tutors by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-slate-600 focus:ring-2 focus:ring-cyan-400 outline-none"
          />

          {/* 📅 DATE FILTER */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
          </div>
        </div>

        {/* CLEAR FILTERS */}
        <div className="text-center mt-4">
          <button
            onClick={() => {
              setSearch("");
              setStartDate("");
              setEndDate("");
            }}
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            Clear Filters
          </button>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center mt-10 text-slate-400">Loading tutors...</p>
        )}

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tutors.length > 0
            ? tutors.map((tutor) => (
                <TutorsCard key={tutor._id} tutor={tutor} />
              ))
            : !loading && (
                <p className="text-center col-span-full text-slate-400">
                  No tutors found
                </p>
              )}
        </div>
      </div>
    </section>
  );
};

export default TutorsPage;
