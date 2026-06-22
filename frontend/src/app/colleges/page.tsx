"use client";

import { useEffect, useState } from "react";

import SearchBar from "@/components/colleges/SearchBar";
import CollegeCard from "@/components/colleges/CollegeCard";

import { getColleges } from "@/services/college.service";

export default function CollegesPage() {

  const [search, setSearch] =
    useState("");

  const [colleges, setColleges] =
    useState([]);

  const [page, setPage] =
    useState(1);

  const [location, setLocation] =
    useState("");

  const [rating, setRating] =
    useState("");

  const [fees, setFees] =
    useState("");

  const [totalPages, setTotalPages] =
    useState(1);

  useEffect(() => {

    fetchColleges();

  }, [
    search,
    page,
    location,
    rating,
    fees,
  ]);

  useEffect(() => {

    setPage(1);

  }, [
    search,
    location,
    rating,
    fees,
  ]);

  const fetchColleges = async () => {

    try {

      const data =
        await getColleges(
          search,
          page,
          location,
          rating,
          fees
        );

      setColleges(data.data);

      setTotalPages(
        data.totalPages
      );

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="max-w-6xl mx-auto p-5">

      <h1 className="text-4xl font-bold mb-5">
        Discover Colleges
      </h1>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      {/* FILTERS */}

      <div className="grid md:grid-cols-3 gap-4 mt-5 mb-5">

        <select
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          className="border p-3 rounded bg-black text-white"
        >
          <option value="">
            All Locations
          </option>

          <option value="Delhi">
            Delhi
          </option>

          <option value="Mumbai">
            Mumbai
          </option>

          <option value="Chennai">
            Chennai
          </option>

          <option value="Hyderabad">
            Hyderabad
          </option>

          <option value="Kolkata">
            Kolkata
          </option>

        </select>

        <select
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
          className="border p-3 rounded bg-black text-white"
        >
          <option value="">
            Any Rating
          </option>

          <option value="4">
            4+
          </option>

          <option value="4.5">
            4.5+
          </option>

          <option value="4.8">
            4.8+
          </option>

        </select>

        <select
          value={fees}
          onChange={(e) =>
            setFees(e.target.value)
          }
          className="border p-3 rounded bg-black text-white"
        >
          <option value="">
            Any Fees
          </option>

          <option value="200000">
            Under ₹2 Lakh
          </option>

          <option value="500000">
            Under ₹5 Lakh
          </option>

          <option value="1000000">
            Under ₹10 Lakh
          </option>

        </select>

      </div>

      {/* RESULTS */}

      <div className="mb-4 text-gray-400">

        Colleges Found: {colleges.length}

      </div>

      {/* EMPTY STATE */}

      {colleges.length === 0 && (

        <div className="text-center py-10 text-gray-400">

          No colleges found.

        </div>

      )}

      {/* COLLEGE CARDS */}

      <div className="grid md:grid-cols-3 gap-4">

        {colleges.map((college: any) => (

          <CollegeCard
            key={college.id}
            college={college}
          />

        ))}

      </div>

      {/* PAGINATION */}

      {totalPages > 1 && (

        <div className="flex justify-center items-center gap-2 mt-10">

          <button
            disabled={page === 1}
            onClick={() =>
              setPage(page - 1)
            }
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (

              <button
                key={index}
                onClick={() =>
                  setPage(index + 1)
                }
                className={`px-4 py-2 border rounded ${
                  page === index + 1
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
              >
                {index + 1}
              </button>

            )
          )}

          <button
            disabled={
              page === totalPages
            }
            onClick={() =>
              setPage(page + 1)
            }
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>

        </div>

      )}

    </div>

  );
}