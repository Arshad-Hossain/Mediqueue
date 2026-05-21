"use client";

import React from "react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const AddTutorPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const addtutor = Object.fromEntries(formData.entries());
    console.log(addtutor);

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/mytutors`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(addtutor),
    });

    const data = await res.json();
    console.log(data);
    toast("Yaay, you just added a tutor");
    redirect("/tutors");
  };

  return (
    <section className="bg-[#0f172a] min-h-screen py-14 text-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Add a <span className="text-cyan-400">Tutor</span>
          </h2>

          <p className="mt-3 text-slate-400">
            Fill in the tutor details to create a new tutor profile.
          </p>
        </div>

        {/* Form */}
        <Form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-900 border border-slate-800 p-6 rounded-2xl"
        >
          {/* Tutor Name */}
          <TextField isRequired name="name" type="text">
            <Label className="text-slate-300">Tutor Name</Label>

            <Input placeholder="Enter tutor name" />

            <FieldError />
          </TextField>

          {/* Photo URL */}
          <TextField isRequired name="photoURL" type="url">
            <Label className="text-slate-300">Photo URL</Label>

            <Input placeholder="Paste image URL" />

            <FieldError />
          </TextField>

          {/* Subject Dropdown */}
          <div className="flex flex-col gap-2">
            <Label className="text-slate-300">Subject / Category</Label>

            <select
              name="subject"
              required
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none"
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="English">English</option>
              <option value="ICT">ICT</option>
              <option value="Accounting">Accounting</option>
            </select>
          </div>

          {/* Teaching Mode */}
          <div className="flex flex-col gap-2">
            <Label className="text-slate-300">Teaching Mode</Label>

            <select
              name="teachingMode"
              required
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none"
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>

          {/* Available Days */}
          <TextField isRequired name="availableDays" type="text">
            <Label className="text-slate-300">Available Days</Label>

            <Input placeholder="Sun - Thu" />

            <FieldError />
          </TextField>

          {/* Available Time Slot */}
          <TextField isRequired name="availableTime" type="text">
            <Label className="text-slate-300">Available Time Slot</Label>

            <Input placeholder="5:00 PM - 8:00 PM" />

            <FieldError />
          </TextField>

          {/* Hourly Fee */}
          <TextField isRequired name="hourlyFee" type="number">
            <Label className="text-slate-300">Hourly Fee</Label>

            <Input placeholder="Enter hourly fee" />

            <FieldError />
          </TextField>

          {/* Total Slot */}
          <TextField isRequired name="totalSlot" type="number">
            <Label className="text-slate-300">Total Slot</Label>

            <Input placeholder="Enter total slots" />

            <FieldError />
          </TextField>

          {/* Session Start Date */}
          <TextField isRequired name="sessionStartDate" type="date">
            <Label className="text-slate-300">Session Start Date</Label>

            <Input />

            <FieldError />
          </TextField>

          {/* Location */}
          <TextField isRequired name="location" type="text">
            <Label className="text-slate-300">Location (Area/City)</Label>

            <Input placeholder="Dhaka, Mirpur" />

            <FieldError />
          </TextField>

          {/* Institution & Experience */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <Label className="text-slate-300">Institution & Experience</Label>

            <TextArea
              name="experience"
              placeholder="Example: BUET, 5 years teaching experience"
              rows={4}
              className="bg-slate-800 text-white rounded-xl border border-slate-700"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <Button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
            >
              Add Tutor
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default AddTutorPage;
