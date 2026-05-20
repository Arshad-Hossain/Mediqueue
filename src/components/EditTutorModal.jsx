"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { FaEdit } from "react-icons/fa";

export function EditTutorModal({ tutor }) {
  const router = useRouter();
  if (!tutor) return null;

  const {
    _id,
    name,
    subject,
    availableDays,
    availableTime,
    hourlyFee,
    totalSlot,
    sessionStartDate,
  } = tutor;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedTutor = Object.fromEntries(formData.entries());

    updatedTutor.availableDays = updatedTutor.availableDays
      .split(",")
      .map((day) => day.trim());

    try {
      const res = await fetch(`http://localhost:5000/mytutors/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedTutor),
      });

      const data = await res.json();
      router.refresh();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal>
      {/* TRIGGER BUTTON */}
      <Modal.Trigger>
        <button className="text-blue-400 hover:text-blue-300 transition">
          <FaEdit size={18} />
        </button>
      </Modal.Trigger>

      {/* MODAL */}
      <Modal.Backdrop className="bg-black/50 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-3xl bg-slate-900 text-white border border-slate-700 rounded-2xl">
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header>
              <Modal.Heading className="text-2xl font-bold text-white">
                Edit Tutor
              </Modal.Heading>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">
              <Surface
                variant="default"
                className="bg-slate-900 border border-slate-700 rounded-2xl"
              >
                <form onSubmit={onSubmit} className="space-y-8 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* NAME */}
                    <TextField defaultValue={name} name="name" isRequired>
                      <Label className="text-slate-300">Name</Label>

                      <Input
                        placeholder="Tutor Name"
                        className="rounded-xl"
                        style={{
                          color: "white",
                          backgroundColor: "#1e293b",
                        }}
                      />

                      <FieldError />
                    </TextField>

                    {/* SUBJECT */}
                    <TextField defaultValue={subject} name="subject" isRequired>
                      <Label className="text-slate-300">Subject</Label>

                      <Input
                        placeholder="Math"
                        className="rounded-xl"
                        style={{
                          color: "white",
                          backgroundColor: "#1e293b",
                        }}
                      />

                      <FieldError />
                    </TextField>

                    {/* AVAILABLE DAYS */}
                    <TextField
                      defaultValue={
                        Array.isArray(availableDays)
                          ? availableDays.join(", ")
                          : availableDays
                      }
                      name="availableDays"
                      isRequired
                    >
                      <Label className="text-slate-300">Available Days</Label>

                      <Input
                        placeholder="Sat, Sun, Mon"
                        className="rounded-xl"
                        style={{
                          color: "white",
                          backgroundColor: "#1e293b",
                        }}
                      />

                      <FieldError />
                    </TextField>

                    {/* AVAILABLE TIME */}
                    <TextField
                      defaultValue={availableTime}
                      name="availableTime"
                      isRequired
                    >
                      <Label className="text-slate-300">Available Time</Label>

                      <Input
                        placeholder="6PM - 9PM"
                        className="rounded-xl"
                        style={{
                          color: "white",
                          backgroundColor: "#1e293b",
                        }}
                      />

                      <FieldError />
                    </TextField>

                    {/* HOURLY FEE */}
                    <TextField
                      defaultValue={hourlyFee}
                      name="hourlyFee"
                      type="number"
                      isRequired
                    >
                      <Label className="text-slate-300">Hourly Fee</Label>

                      <Input
                        type="number"
                        placeholder="20"
                        className="rounded-xl"
                        style={{
                          color: "white",
                          backgroundColor: "#1e293b",
                        }}
                      />

                      <FieldError />
                    </TextField>

                    {/* TOTAL SLOT */}
                    <TextField
                      defaultValue={totalSlot}
                      name="totalSlot"
                      type="number"
                      isRequired
                    >
                      <Label className="text-slate-300">Total Slot</Label>

                      <Input
                        type="number"
                        placeholder="10"
                        className="rounded-xl"
                        style={{
                          color: "white",
                          backgroundColor: "#1e293b",
                        }}
                      />

                      <FieldError />
                    </TextField>

                    {/* SESSION START DATE */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={
                          sessionStartDate ? sessionStartDate.split("T")[0] : ""
                        }
                        name="sessionStartDate"
                        type="date"
                        isRequired
                      >
                        <Label className="text-slate-300">
                          Session Start Date
                        </Label>

                        <Input
                          type="date"
                          className="rounded-xl"
                          style={{
                            color: "white",
                            backgroundColor: "#1e293b",
                          }}
                        />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <Modal.Footer>
                    <Button
                      type="submit"
                      color="primary"
                      className="w-full md:w-fit"
                      slot="close"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
