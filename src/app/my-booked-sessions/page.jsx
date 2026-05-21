import BookSessionCard from "@/components/BookSessionCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBookedSessionPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookedSession`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const bookedSessions = await res.json();

  return (
    <div className="min-h-screen bg-[#020817] text-white p-6">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-cyan-400">My Booked Sessions</h1>

        <p className="text-slate-400 mt-2">
          View and manage your booked tutoring sessions.
        </p>
      </div>

      {/* TABLE CARD */}
      <BookSessionCard bookSession={bookedSessions} />
    </div>
  );
};

export default MyBookedSessionPage;
