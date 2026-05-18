import Image from "next/image";
import React from "react";

const TutorsCard = ({ tutor }) => {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300">
      {/* Tutor Image */}
      <div className="flex justify-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
          <Image
            src={tutor.image}
            alt={tutor.name}
            fill
            sizes="(max-width: 640px) 80px, 96px"
            className="rounded-full object-cover border-4 border-cyan-400/30"
          />
        </div>
      </div>

      {/* Tutor Info */}
      <div className="mt-5 text-center">
        <h3 className="text-xl font-semibold text-white">{tutor.name}</h3>

        <p className="mt-1 text-cyan-400 font-medium">{tutor.subject}</p>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3 text-sm text-slate-400">
        <div>
          <span className="text-white font-medium">Availability:</span>

          <p className="mt-1 break-words">{tutor.availability}</p>
        </div>

        <div>
          <span className="text-white font-medium">Session Starts:</span>

          <p className="mt-1">{tutor.sessionStartDate}</p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-white font-medium">Fee:</span>

          <span className="text-cyan-400 font-bold text-lg">{tutor.fee}</span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-2.5 rounded-xl transition duration-300">
        Book Session
      </button>
    </div>
  );
};

export default TutorsCard;
