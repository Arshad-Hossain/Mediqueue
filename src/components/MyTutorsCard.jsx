import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { EditTutorModal } from "./EditTutorModal";
import { DeleteAlert } from "./DeleteAlert";

const MyTutorsCard = ({ tutors }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="w-full min-w-[800px] text-left text-white bg-slate-900">
        <thead className="bg-slate-800 text-slate-300">
          <tr>
            <th className="p-3 whitespace-nowrap">Name</th>
            <th className="p-3 whitespace-nowrap">Subject</th>
            <th className="p-3 whitespace-nowrap">Available</th>
            <th className="p-3 whitespace-nowrap">Hourly Fee</th>
            <th className="p-3 whitespace-nowrap">Total Slot</th>
            <th className="p-3 whitespace-nowrap">Session Start Date</th>
            <th className="p-3 text-center whitespace-nowrap">Action</th>
          </tr>
        </thead>

        <tbody>
          {tutors.map((tutor) => (
            <tr
              key={tutor._id}
              className="border-t border-slate-700 hover:bg-slate-800 transition"
            >
              <td className="p-3 whitespace-nowrap">{tutor.name}</td>

              <td className="p-3 whitespace-nowrap">{tutor.subject}</td>

              <td className="p-3">
                <div className="flex flex-col">
                  <span>
                    {Array.isArray(tutor.availableDays)
                      ? tutor.availableDays.join(", ")
                      : tutor.availableDays}
                  </span>

                  <span className="text-sm text-slate-400">
                    {tutor.availableTime}
                  </span>
                </div>
              </td>

              <td className="p-3 whitespace-nowrap">${tutor.hourlyFee}</td>

              <td className="p-3 whitespace-nowrap">{tutor.totalSlot}</td>

              <td className="p-3 whitespace-nowrap">
                {new Date(tutor.sessionStartDate).toLocaleDateString()}
              </td>

              <td className="p-3">
                <div className="flex justify-center items-center gap-4">
                  {/* <button className="text-blue-400 hover:text-blue-300 transition">
                    <FaEdit size={18} />
                  </button> */}
                  <EditTutorModal tutor={tutor}></EditTutorModal>
                  <DeleteAlert tutor={tutor}></DeleteAlert>
                  {/* 
                  <button className="text-red-500 hover:text-red-400 transition">
                    <FaTrash size={18} />
                  </button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTutorsCard;
