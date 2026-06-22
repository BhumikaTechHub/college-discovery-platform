"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCollegeById } from "@/services/college.service";

interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
  courses: string;
  placements: string;
  reviews: string;
}

export default function CollegeDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [college, setCollege] = useState<College | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchCollege();
    }
  }, [id]);

  const fetchCollege = async () => {
    try {
      console.log("ID:", id);

      const data = await getCollegeById(id);

      console.log("College Data:", data);

      setCollege(data);
    } catch (error) {
      console.error("Error fetching college:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!college) {
    return (
      <div className="p-10">
        College not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <div className="space-y-4">
        <p>
          <strong>Location:</strong> {college.location}
        </p>

        <p>
          <strong>Fees:</strong> ₹
          {college.fees.toLocaleString()}
        </p>

        <p>
          <strong>Rating:</strong> {college.rating}
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Overview
          </h2>

          <p>{college.overview}</p>
        </div>

        <div>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Courses
          </h2>

          <p>
            {college.courses}
          </p>

        </div>

        <div>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Placements
          </h2>

          <p>
            {college.placements}
          </p>

        </div>

        <div>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            Reviews
          </h2>

          <p>
            {college.reviews}
          </p>

        </div>

      </div>
    </div>
  );
}