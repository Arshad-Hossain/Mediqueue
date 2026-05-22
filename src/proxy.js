// import { NextResponse } from "next/server";
// import { auth } from "./lib/auth";
// import { headers } from "next/headers";

// // This function can be marked `async` if using `await` inside
// export async function proxy(request) {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/tutors/:path", "/my-tutors", "/add-tutor", "/my-booked-sessions"],
// };

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    // save current url
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/tutors/:path*",
    "/profile",
    "/my-tutors",
    "/add-tutor",
    "/my-booked-sessions",
  ],
};
