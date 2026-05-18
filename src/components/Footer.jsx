import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">MediQueue</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Empowering learning through modern technology and skills
              development.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-medium mb-3">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>Email: support@mediqueue.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-900 font-medium mb-3">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/terms" className="hover:text-black transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-black transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 font-medium mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start flex-wrap gap-3 text-sm">
              <a href="#" className="hover:text-black transition">
                <FaFacebook></FaFacebook>
              </a>
              <a href="#" className="hover:text-black transition">
                <BsTwitterX></BsTwitterX>
              </a>
              <a href="#" className="hover:text-black transition">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="#" className="hover:text-black transition">
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mediqueue. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
