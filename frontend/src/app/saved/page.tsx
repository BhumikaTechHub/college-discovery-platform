"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getSaved,
} from "@/services/saved.service";

export default function SavedPage() {

  const [saved,
    setSaved] =
    useState<any[]>([]);

  useEffect(() => {

    fetchSaved();

  }, []);

  const fetchSaved =
    async () => {

      try {

        const userId =
          localStorage.getItem(
            "userId"
          );

        if (!userId) return;

        const data =
          await getSaved(
            userId
          );

        setSaved(data);

      } catch (error) {

        console.error(error);

      }

    };

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">

        Saved Colleges

      </h1>

      <div className="grid md:grid-cols-3 gap-4">

        {saved.map(
          (item) => (

            <div
              key={item.id}
              className="border p-4 rounded"
            >

              <h2 className="text-xl font-bold">

                {item.college.name}

              </h2>

              <p>

                {item.college.location}

              </p>

              <p className="text-gray-300">
                 Fees: ₹
                {item.college.fees.toLocaleString()}
              </p>

              <p className="text-gray-300">
                ⭐ Rating: {item.college.rating}
              </p>


            </div>



          )
        )}
        

      </div>
      

    </div>
    

  );
}