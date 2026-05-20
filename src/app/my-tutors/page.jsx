import MyTutorsCard from "@/components/MyTutorsCard";
import React from "react";

const MyTutorsPage = async () => {
  const res = await fetch("http://localhost:5000/mytutors");
  const mytutors = await res.json();
  console.log(mytutors);
  return (
    <div className="min-h-screen bg-[#0F172A] px-4 sm:px-6 lg:px-10 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">My Tutors</h1>
        <p className="text-slate-400 mt-2">
          Manage all your tutors in one place
        </p>
      </div>

      {mytutors.length === 0 ? (
        <p className="text-center text-slate-400 text-lg">
          You have no tutor yet
        </p>
      ) : (
        <div className="overflow-x-auto">
          <MyTutorsCard tutors={mytutors} />
        </div>
      )}
    </div>
  );
};

export default MyTutorsPage;
