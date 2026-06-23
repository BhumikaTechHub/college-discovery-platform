"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";

interface SavedComparison {
  id: string;
  college1Id: string;
  college2Id: string;
}

export default function SavedComparisonsPage() {
  const [comparisons, setComparisons] =
    useState<SavedComparison[]>([]);

  useEffect(() => {
    fetchComparisons();
  }, []);

  const fetchComparisons = async () => {
    try {
      const userId =
        localStorage.getItem("userId");

      if (!userId) return;

      const response =
        await api.get(
          `/comparisons/${userId}`
        );

      setComparisons(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Saved Comparisons
      </h1>

      {comparisons.length === 0 ? (

        <p>
          No saved comparisons yet.
        </p>

      ) : (

        <div className="space-y-4">

          {comparisons.map(
            (comparison) => (

              <div
                key={comparison.id}
                className="border p-4 rounded-lg shadow"
              >

                <h2 className="text-xl font-semibold">
                  College ID:
                  {" "}
                  {comparison.college1Id}
                  {" "}
                  vs
                  {" "}
                  {comparison.college2Id}
                </h2>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}