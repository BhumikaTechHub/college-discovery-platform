"use client";

import { useState } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {

      const response = await api.post(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(
        "Signup Success:",
        response.data
      );

      alert(
        "Account created successfully"
      );

      router.push("/login");

    } catch (error: any) {

      console.error(
        "Signup Error:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
        "Signup Failed"
      );

    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-5">
        Sign Up
      </h1>

      <form
        onSubmit={handleSignup}
        className="space-y-4"
      >
        <input
          className="border p-2 w-full"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="border p-2 w-full"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="bg-green-500 text-white px-4 py-2"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}