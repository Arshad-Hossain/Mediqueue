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
      // suppressHydrationWarning
      // data-theme="light"
      className={`${josefin.className} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');

                  if (
                    theme === 'dark' ||
                    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
                  ) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
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
