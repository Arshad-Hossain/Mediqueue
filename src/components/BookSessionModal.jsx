"use client";

import { useState } from "react";
import { Button, Modal } from "@heroui/react";

export function BookSessionModal({ tutor }) {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const handleBooking = async () => {
    if (!phone) return alert("Phone number required");

    try {
      await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorId: tutor._id,
          tutorName: tutor.name,
          phone,
        }),
      });

      await fetch(`http://localhost:5000/tutors/${tutor._id}/decrement-slot`, {
        method: "PATCH",
      });

      alert("Booking confirmed!");
      setOpen(false);
      setPhone("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      {/* TRIGGER */}
      <Button
        onPress={() => setOpen(true)}
        className="w-full bg-cyan-500 text-black font-bold py-6"
      >
        Book Session
      </Button>

      {/* MODAL */}
      <Modal isOpen={open} onOpenChange={setOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[440px] bg-[#0b1220] text-white rounded-2xl border border-white/10">
              {/* HEADER */}
              <Modal.Header>
                <Modal.Heading className="text-xl font-bold text-white">
                  Confirm Your Booking
                </Modal.Heading>
              </Modal.Header>

              {/* BODY */}
              <Modal.Body className="space-y-5">
                {/* Tutor */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">Tutor Name</p>
                  <input
                    value={tutor.name}
                    readOnly
                    className="w-full px-3 py-2 rounded-lg bg-[#111827] text-white border border-white/10 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <input
                    value={tutor.email || "Not Available"}
                    readOnly
                    className="w-full px-3 py-2 rounded-lg bg-[#111827] text-white border border-white/10"
                  />
                </div>

                {/* User */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">Your Name</p>
                  <input
                    value="Logged In User"
                    readOnly
                    className="w-full px-3 py-2 rounded-lg bg-[#111827] text-white border border-white/10"
                  />
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Phone Number <span className="text-red-400">*</span>
                  </p>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 rounded-lg bg-[#0f172a] text-white border border-cyan-500/30 focus:border-cyan-400 outline-none"
                  />
                </div>
              </Modal.Body>

              {/* FOOTER */}
              <Modal.Footer className="flex gap-3">
                <Button
                  variant="ghost"
                  onPress={() => setOpen(false)}
                  className="flex-1 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
                >
                  Cancel
                </Button>

                <Button
                  onPress={handleBooking}
                  className="flex-1 bg-cyan-500 text-black font-bold"
                >
                  Confirm Booking
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}
