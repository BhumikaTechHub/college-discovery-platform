"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function HomePage() {

  const [userName, setUserName] = useState("");

  useEffect(() => {

    const name =
      localStorage.getItem("userName");

    if (name) {
      setUserName(name);
    }

  }, []);

  return (
    <main>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <p className="text-lg text-gray-400 mb-2">
            Welcome, {userName} 👋
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Find Your Perfect College
          </h1>

          <p className="text-xl mb-8">
            Discover colleges, compare options,
            and make informed decisions.
          </p>

          <Link
            href="/colleges"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Explore Colleges
          </Link>

        </div>
      </section>

      {/* Featured Colleges */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Popular Colleges
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border p-5 rounded-lg">
              <h3 className="font-bold">
                IIT Delhi
              </h3>

              <p>Delhi</p>

              <p>Rating: 4.8</p>
            </div>

            <div className="border p-5 rounded-lg">
              <h3 className="font-bold">
                IIT Bombay
              </h3>

              <p>Mumbai</p>

              <p>Rating: 4.9</p>
            </div>

            <div className="border p-5 rounded-lg">
              <h3 className="font-bold">
                BITS Pilani
              </h3>

              <p>Pilani</p>

              <p>Rating: 4.7</p>
            </div>

          </div>

        </div>
      </section>

      {/* Compare CTA */}
      <section className="bg-gray-100 py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Compare Colleges Side by Side
          </h2>

          <p className="mb-6">
            Compare fees, ratings, and locations.
          </p>

          <Link
            href="/compare"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Compare Colleges
          </Link>

        </div>

      </section>

    </main>
  );
}