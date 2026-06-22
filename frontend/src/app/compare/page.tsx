"use client";

import { useEffect, useState } from "react";
import {
  compareColleges,
  getColleges,
} from "@/services/college.service";

import {
  saveComparison,
} from "@/services/comparison.service";

interface College {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placements: string;
  courses?: string;
  reviews?: string;
  overview?: string;
}

export default function ComparePage() {

  const [allColleges, setAllColleges] =
    useState<College[]>([]);

  const [college1, setCollege1] =
    useState("");

  const [college2, setCollege2] =
    useState("");

  const [results, setResults] =
    useState<College[]>([]);

  useEffect(() => {
    loadColleges();
  }, []);

  const loadColleges = async () => {

    try {

      const response =
        await getColleges(
          "",
          1,
          "",
          "",
          ""
        );

      setAllColleges(
        response.data
      );

    } catch (error) {

      console.error(error);

    }

  };

  const handleCompare =
    async () => {

      try {

        if (!college1 || !college2) {

          alert(
            "Please select two colleges"
          );

          return;
        }

        const data =
          await compareColleges([
            college1,
            college2,
          ]);

        setResults(data);

      } catch (error) {

        console.error(error);

      }

    };

  const handleSaveComparison =
    async () => {

      try {

        const userId =
          localStorage.getItem(
            "userId"
          );

        if (
          !userId ||
          !college1 ||
          !college2
        ) {
          alert(
            "Select colleges and login first"
          );
          return;
        }

        await saveComparison(
          userId,
          college1,
          college2
        );

        alert(
          "Comparison Saved"
        );

      } catch (error) {

        console.error(error);

        alert(
          "Failed to save comparison"
        );

      }

    };

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-5xl font-bold mb-8">
        Compare Colleges
      </h1>

      <div className="grid md:grid-cols-2 gap-4 mb-4">

        <select
          value={college1}
          onChange={(e) =>
            setCollege1(
              e.target.value
            )
          }
          className="border p-3 rounded bg-black text-white"
        >

          <option value="">
            Select College
          </option>

          {allColleges.map(
            (college) => (

              <option
                key={college.id}
                value={college.id}
                className="bg-black text-white"
              >
                {college.name}
              </option>

            )
          )}

        </select>

        <select
          value={college2}
          onChange={(e) =>
            setCollege2(
              e.target.value
            )
          }
          className="border p-3 rounded bg-black text-white"
        >

          <option value="">
            Select College

          </option>

          {allColleges.map(
            (college) => (

              <option
                key={college.id}
                value={college.id}
                className="bg-black text-white"
              >
                {college.name}
              </option>

            )
          )}

        </select>

      </div>

      <button
        onClick={handleCompare}
        className="bg-blue-600 px-5 py-2 rounded text-white"
      >
        Compare
      </button>

      <button
        onClick={handleSaveComparison}
        className="bg-green-600 px-5 py-2 rounded text-white"
      >
        Save Comparison
      </button>

      {results.length === 2 && (

        <div className="mt-10">

          <table className="w-full border">

            <thead>

              <tr>

                <th className="border p-3">
                  Metric
                </th>

                <th className="border p-3">
                  {results[0].name}
                </th>

                <th className="border p-3">
                  {results[1].name}
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border p-3">
                  Location
                </td>

                <td className="border p-3">
                  {results[0].location}
                </td>

                <td className="border p-3">
                  {results[1].location}
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Fees
                </td>

                <td className="border p-3">
                  ₹{results[0].fees.toLocaleString()}
                </td>

                <td className="border p-3">
                  ₹{results[1].fees.toLocaleString()}
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Rating
                </td>

                <td className="border p-3">
                  {results[0].rating}
                </td>

                <td className="border p-3">
                  {results[1].rating}
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Placements
                </td>

                <td className="border p-3">
                  {results[0].placements}
                </td>

                <td className="border p-3">
                  {results[1].placements}
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      )}

    </div>

  );
}