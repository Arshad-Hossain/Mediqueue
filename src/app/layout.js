import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import TitleUpdater from "@/components/TitleUpdater";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mediqueue",
  description: "Online Tutor Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <TitleUpdater></TitleUpdater>
        {children}

        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
