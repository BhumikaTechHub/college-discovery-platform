"use client";

import Link from "next/link";
import { College } from "@/types/college";
import { saveCollege } from "@/services/saved.service";

export default function CollegeCard({
  college,
}: {
  college: College;
}) {

  const handleSave = async () => {

    try {

      const userId =
        localStorage.getItem(
          "userId"
        );

      if (!userId) {

        alert(
          "Please login first"
        );

        return;
      }

      await saveCollege(
        userId,
        college.id
      );

      alert(
        `${college.name} saved`
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed to save college"
      );

    }

  };

  return (

    <div className="border rounded-lg p-4 hover:shadow-lg">

      <h2 className="text-xl font-bold">
        {college.name}
      </h2>

      <p>{college.location}</p>

      <p>
        Fees: ₹
        {college.fees.toLocaleString()}
      </p>

      <p>
        Rating: {college.rating}
      </p>

      <div className="flex gap-3 mt-4">

        <Link
          href={`/college/${college.id}`}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          View Details
        </Link>

        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-3 py-2 rounded"
        >
          ❤️ Save College
        </button>

      </div>

    </div>

  );
}