"use client";

import { Card } from "@heroui/react";
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
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (!error) {
      toast("Yaay, Registration Successful!");
      redirect("/login");
    } else {
      toast.error(error.message || "Registration failed");
      return;
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md bg-[#111827] border border-white/10 rounded-2xl shadow-xl p-6 sm:p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white">Create Account</h1>

          <p className="mt-2 text-sm text-slate-400">
            Start your adventure with MediQueue
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          <TextField isRequired name="name" type="text">
            <Label className="text-slate-300">Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField name="image" type="url">
            <Label className="text-slate-300">Image URL</Label>
            <Input placeholder="Image url" />
            <FieldError />
          </TextField>

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

          {/* Button */}
          <Button
            className="w-full bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition duration-300 rounded-xl mt-2"
            type="submit"
          >
            Create Account
          </Button>
        </Form>
        <div>
          <Button
            onClick={handleGoogleSignin}
            variant="bordered"
            className="w-full border-white/10 bg-[#0f172a] text-white hover:border-cyan-400/40 rounded-xl py-6"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default RegisterPage;
