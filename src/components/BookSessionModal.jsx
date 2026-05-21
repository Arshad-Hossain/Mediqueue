"use client";

import { useState } from "react";
import { Button, Modal } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function BookSessionModal({ tutor }) {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async () => {
    if (!phone) {
      alert("Phone number required");
      return;
    }

    try {
      const bookedSessionData = {
        studentName: user?.name,
        studentEmail: user?.email,
        phone: phone,
        tutorName: tutor?.name,
        tutorEmail: tutor?.email,
      };

      const { data: tokenData } = await authClient.token();
      const res = await fetch("http://localhost:5000/bookedSession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookedSessionData),
      });

      const data = await res.json();

      console.log(data);

      if (data.insertedId) {
        toast("Booking confirmed!");
        // alert("Booking confirmed!");
        setOpen(false);
        setPhone("");

        router.push("/tutors");
      }
    } catch (error) {
      console.error(error);
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
                    value={tutor?.name || ""}
                    readOnly
                    className="w-full px-3 py-2 rounded-lg bg-[#111827] text-white border border-white/10 focus:outline-none"
                  />
                </div>

                {/* Tutor Email */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>

                  <input
                    value={tutor?.email || "abc@yahoo.com"}
                    readOnly
                    className="w-full px-3 py-2 rounded-lg bg-[#111827] text-white border border-white/10"
                  />
                </div>

                {/* User */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">Your Name</p>

                  <input
                    value={user?.name || ""}
                    readOnly
                    className="w-full px-3 py-2 rounded-lg bg-[#111827] text-white border border-white/10"
                  />
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Phone Number
                    <span className="text-red-400">*</span>
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
