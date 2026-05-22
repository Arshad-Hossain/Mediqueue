// "use client";

// import { Card, Separator } from "@heroui/react";
// import {
//   Button,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";

// import { authClient } from "@/lib/auth-client";
// import { redirect } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";
// import { useRouter } from "next/router";
// // import { Router } from "next/router";

// const LoginPage = () => {
//   // const router = useRouter();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const user = Object.fromEntries(formData.entries());

//     const { data, error } = await authClient.signIn.email({
//       email: user.email,
//       password: user.password,
//     });
//     console.log({ data, error });

//     if (data) {
//       redirect("/");
//       // router.push("/");
//     }

//     if (error) {
//       alert("Invalid email or password");
//     }
//   };

//   const handleGoogleSignin = async () => {
//     await authClient.signIn.social({
//       provider: "google",
//     });
//   };

//   return (
//     <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-10">
//       <Card className="w-full max-w-md bg-[#111827] border border-white/10 rounded-2xl shadow-xl p-6 sm:p-8">
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>

//           <p className="mt-2 text-sm text-slate-400">
//             Login to continue your adventure with Wanderlust
//           </p>
//         </div>

//         {/* Form */}
//         <Form onSubmit={onSubmit} className="flex flex-col gap-5">
//           <TextField
//             isRequired
//             name="email"
//             type="email"
//             validate={(value) => {
//               if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                 return "Please enter a valid email address";
//               }

//               return null;
//             }}
//           >
//             <Label className="text-slate-300">Email</Label>

//             <Input placeholder="john@example.com" />

//             <FieldError />
//           </TextField>

//           <TextField
//             isRequired
//             minLength={8}
//             name="password"
//             type="password"
//             validate={(value) => {
//               if (value.length < 8) {
//                 return "Password must be at least 8 characters";
//               }

//               if (!/[A-Z]/.test(value)) {
//                 return "Password must contain at least one uppercase letter";
//               }

//               if (!/[0-9]/.test(value)) {
//                 return "Password must contain at least one number";
//               }

//               return null;
//             }}
//           >
//             <Label className="text-slate-300">Password</Label>

//             <Input placeholder="Enter your password" />

//             <Description className="text-xs text-slate-500">
//               Must be at least 8 characters with 1 uppercase and 1 number
//             </Description>

//             <FieldError />
//           </TextField>
//           <div className="flex justify-end -mt-2">
//             <a
//               href="/forgot-password"
//               className="text-sm text-cyan-400 hover:text-cyan-300 transition"
//             >
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <Button
//             className="w-full bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition duration-300 rounded-xl mt-2"
//             type="submit"
//           >
//             Login
//           </Button>
//         </Form>

//         {/* Divider */}
//         <div className="flex items-center w-full my-6">
//           <div className="flex-1">
//             <Separator className="bg-white/10" />
//           </div>

//           <span className="px-4 text-sm whitespace-nowrap text-slate-400">
//             Or continue with
//           </span>

//           <div className="flex-1">
//             <Separator className="bg-white/10" />
//           </div>
//         </div>

//         {/* Google Button */}
//         <Button
//           onClick={handleGoogleSignin}
//           variant="bordered"
//           className="w-full border-white/10 bg-[#0f172a] text-white hover:border-cyan-400/40 rounded-xl py-6"
//         >
//           <FcGoogle className="text-xl" />
//           Sign in with Google
//         </Button>

//         {/* Footer */}
//         <p className="text-center text-sm text-slate-400 mt-6">
//           Don&apos;t have an account?
//           <a
//             href="/register"
//             className="text-cyan-400 hover:text-cyan-300 ml-1"
//           >
//             Register
//           </a>
//         </p>
//       </Card>
//     </section>
//   );
// };

// export default LoginPage;

"use client";

import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // get redirect path from url
  const redirectTo = searchParams.get("redirect") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log({ data, error });

    if (data) {
      // redirect to previous page
      router.push(redirectTo);
    }

    if (error) {
      alert("Invalid email or password");
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirectTo,
    });
  };

  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md bg-[#111827] border border-white/10 rounded-2xl shadow-xl p-6 sm:p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-400">
            Login to continue your tutoring journey
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="text-slate-300">Email</Label>

            <Input placeholder="john@example.com" />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className="text-slate-300">Password</Label>

            <Input placeholder="Enter your password" />

            <Description className="text-xs text-slate-500">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Forgot Password */}
          <div className="flex justify-end -mt-2">
            <a
              href="/forgot-password"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <Button
            className="w-full bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition duration-300 rounded-xl mt-2"
            type="submit"
          >
            Login
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-1">
            <Separator className="bg-white/10" />
          </div>

          <span className="px-4 text-sm whitespace-nowrap text-slate-400">
            Or continue with
          </span>

          <div className="flex-1">
            <Separator className="bg-white/10" />
          </div>
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleSignin}
          variant="bordered"
          className="w-full border-white/10 bg-[#0f172a] text-white hover:border-cyan-400/40 rounded-xl py-6"
        >
          <FcGoogle className="text-xl" />
          Sign in with Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Don&apos;t have an account?
          <a
            href="/register"
            className="text-cyan-400 hover:text-cyan-300 ml-1"
          >
            Register
          </a>
        </p>
      </Card>
    </section>
  );
};

export default LoginPage;
