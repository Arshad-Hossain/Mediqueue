"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const BookSessionCard = ({ bookSession }) => {
  const [sessions, setSessions] = useState(bookSession);

  // HANDLE CANCEL
  const handleCancel = async (id) => {
    try {
      // frontend update
      const updatedSessions = sessions.map((session) =>
        session._id === id ? { ...session, status: "cancelled" } : session,
      );

      setSessions(updatedSessions);

      // backend update
      await fetch(`http://localhost:5000/bookedSession/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "cancelled",
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="w-full min-w-[900px] text-left text-white bg-slate-900 rounded-lg overflow-hidden">
        {/* TABLE HEAD */}
        <thead className="bg-slate-800 text-slate-300">
          <tr>
            <th className="p-4 whitespace-nowrap">Student Name</th>

            <th className="p-4 whitespace-nowrap">Student Email</th>

            <th className="p-4 whitespace-nowrap">Phone</th>

            <th className="p-4 whitespace-nowrap">Tutor Name</th>

            <th className="p-4 whitespace-nowrap text-center">Status</th>

            <th className="p-4 whitespace-nowrap text-center">Cancel</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {sessions.map((session) => (
            <tr
              key={session._id}
              className="border-t border-slate-700 hover:bg-slate-800 transition"
            >
              {/* STUDENT NAME */}
              <td className="p-4 whitespace-nowrap">{session.studentName}</td>

              {/* STUDENT EMAIL */}
              <td className="p-4 whitespace-nowrap">{session.studentEmail}</td>

              {/* PHONE */}
              <td className="p-4 whitespace-nowrap">{session.phone}</td>

              {/* TUTOR NAME */}
              <td className="p-4 whitespace-nowrap">{session.tutorName}</td>

              {/* STATUS */}
              <td className="p-4 text-center whitespace-nowrap">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    session.status === "cancelled"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {session.status || "confirmed"}
                </span>
              </td>

              {/* CANCEL BUTTON */}
              <td className="p-4">
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => handleCancel(session._id)}
                    disabled={session.status === "cancelled"}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      session.status === "cancelled"
                        ? "bg-slate-700 opacity-40 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    <FaTimes className="text-white text-sm" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookSessionCard;
