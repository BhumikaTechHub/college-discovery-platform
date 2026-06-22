"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [loggedIn, setLoggedIn] =
    useState(false);

  const [userName, setUserName] =
    useState("");

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    const name =
      localStorage.getItem("userName");

    setLoggedIn(!!token);

    if (name) {
      setUserName(name);
    }

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");

    setLoggedIn(false);

    window.location.href = "/login";

  };

  return (

    <nav className="border-b">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <Link
          href="/"
          className="font-bold text-2xl"
        >
          CollegeHub
        </Link>

        <div className="flex items-center gap-5">

          <Link href="/colleges">
            Colleges
          </Link>

          <Link href="/compare">
            Compare
          </Link>

          {loggedIn && (
            <>
             

              <Link href="/saved">
                Saved Colleges
              </Link>

              <Link href="/saved-comparisons">
                Saved Comparisons
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded text-white"
              >
                Logout
              </button>
            </>
          )}

          {!loggedIn && (
            <>
              <Link href="/login">
                Login
              </Link>

              <Link href="/signup">
                Signup
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>

  );
}