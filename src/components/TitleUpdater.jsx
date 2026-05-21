"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TitleUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") document.title = "MediQueue";
    else if (pathname === "/tutors") document.title = "Tutors - MediQueue";
    else if (pathname === "/add-tutor")
      document.title = "Add Tutor - MediQueue";
    else if (pathname === "/my-tutors")
      document.title = "My Tutors - MediQueue";
    else if (pathname === "/my-booked-sessions")
      document.title = "My Booked Sessions - MediQueue";
    else if (pathname === "/login") document.title = "Login - MediQueue";
    else if (pathname === "/register") document.title = "Register - MediQueue";
    else document.title = "MediQueue";
  }, [pathname]);

  return null;
}
