import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">MediQueue</h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Empowering learning through modern technology and skills
              development.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="text-sm space-y-2 text-slate-400">
              <li>Email: support@mediqueue.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>

            <div className="flex justify-center sm:justify-start gap-4 text-lg">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <BsTwitterX />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MediQueue. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
