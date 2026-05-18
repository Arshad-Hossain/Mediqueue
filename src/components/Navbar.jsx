"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Avatar } from "@heroui/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
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
              href="/courses"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Tutors
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="bordered"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              radius="full"
            >
              Login
            </Button>
          </Link>

          <Link href="/register">
            <Button
              className="bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition shadow-lg"
              radius="full"
            >
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 bg-[#111827] border-t border-white/10">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/courses"
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 transition"
              >
                Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 transition"
              >
                My Profile
              </Link>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-5">
            <Link href="/login">
              <Button
                fullWidth
                variant="bordered"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                radius="full"
              >
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button
                fullWidth
                className="bg-cyan-400 text-black font-semibold hover:bg-cyan-300"
                radius="full"
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
