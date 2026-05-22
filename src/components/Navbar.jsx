"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Button, Avatar } from "@heroui/react";
import { Sun, Moon } from "lucide-react";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // THEME STATE
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] dark:bg-black border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-4 sm:gap-0">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-xl shadow-md">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-lg object-cover"
            />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
              MediQueue
            </h1>
            <p className="text-[10px] sm:text-[11px] text-slate-400">
              Tutor Booking System
            </p>
          </div>
        </Link>

        {/* LINKS */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/tutors"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Tutors
            </Link>
          </li>

          {user && (
            <>
              <li>
                <Link
                  href="/add-tutor"
                  className="text-slate-300 hover:text-cyan-400 transition"
                >
                  Add Tutor
                </Link>
              </li>

              <li>
                <Link
                  href="/my-tutors"
                  className="text-slate-300 hover:text-cyan-400 transition"
                >
                  My Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/my-booked-sessions"
                  className="text-slate-300 hover:text-cyan-400 transition"
                >
                  My Booked Sessions
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* AUTH + THEME */}
        <ul className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </li>

          {/* USER */}
          {user ? (
            <>
              <li>
                <Link href="/profile">
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback>{user.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Link>
              </li>

              <li>
                <Button
                  size="sm"
                  color="danger"
                  onClick={handleSignOut}
                  className="rounded-full"
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <Button
                    variant="bordered"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-full"
                  >
                    Login
                  </Button>
                </Link>
              </li>

              <li>
                <Link href="/register">
                  <Button className="bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition rounded-full">
                    Register
                  </Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// "use client";

// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Button, Avatar } from "@heroui/react";

// const Navbar = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-[#0f172a] border-b border-white/10 shadow-lg">
//       <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-4 sm:gap-0">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="bg-white p-1 rounded-xl shadow-md">
//             <Image
//               src="/logo.jpg"
//               alt="logo"
//               width={40}
//               height={40}
//               className="rounded-lg object-cover"
//             />
//           </div>

//           <div>
//             <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
//               MediQueue
//             </h1>
//             <p className="text-[10px] sm:text-[11px] text-slate-400">
//               Tutor Booking System
//             </p>
//           </div>
//         </Link>

//         {/* Navigation Links */}
//         <ul className="flex items-center gap-6 text-sm font-medium">
//           {user ? (
//             <>
//               <li>
//                 <Link
//                   href="/"
//                   className="text-slate-300 hover:text-cyan-400 transition"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/tutors"
//                   className="text-slate-300 hover:text-cyan-400 transition"
//                 >
//                   Tutors
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/add-tutor"
//                   className="text-slate-300 hover:text-cyan-400 transition"
//                 >
//                   Add Tutor
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/my-tutors"
//                   className="text-slate-300 hover:text-cyan-400 transition"
//                 >
//                   My Tutors
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/my-booked-sessions"
//                   className="text-slate-300 hover:text-cyan-400 transition"
//                 >
//                   My Booked Sessions
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link
//                   href="/"
//                   className="text-slate-300 hover:text-cyan-400 transition"
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/tutors"
//                   className="text-slate-300 hover:text-cyan-400 transition"
//                 >
//                   Tutors
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* Authentication */}
//         <ul className="flex items-center gap-3">
//           {user ? (
//             <>
//               <li>
//                 <Link href="/profile">
//                   <Avatar>
//                     <Avatar.Image
//                       referrerPolicy="no-referrer"
//                       alt="John Doe"
//                       src={user?.image}
//                     />
//                     <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
//                   </Avatar>
//                 </Link>
//               </li>

//               <li>
//                 <Link href={"/"}>
//                   <Button
//                     size="sm"
//                     color="danger"
//                     onClick={handleSignOut}
//                     className="rounded-full"
//                   >
//                     Logout
//                   </Button>
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link href="/login">
//                   <Button
//                     variant="bordered"
//                     className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-full"
//                   >
//                     Login
//                   </Button>
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/register">
//                   <Button className="bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition rounded-full">
//                     Register
//                   </Button>
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
