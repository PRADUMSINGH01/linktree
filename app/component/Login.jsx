"use client";
import { useState } from "react";
import { CheckPassword } from "../module/CheckPassword";

export default function Login() {
  const [alert, setalert] = useState("");
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  function HandleChnage(e) {
    const { name, value } = e.target;
    setlogin((item) => ({ ...item, [name]: value }));
  }

  async function HandleSubmit() {
    const isPasswordVerified = await CheckPassword(login.email, login.password);
    if (isPasswordVerified) {
      setalert(isPasswordVerified.msg);

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      setalert(isPasswordVerified.msg);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {alert ? (
        <div className="bg-black text-white px-5 py-5 h-20"> {alert}</div>
      ) : (
        ""
      )}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Login
        </h2>
        <form action={HandleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={login.email}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              onChange={(e) => HandleChnage(e)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={login.password}
              onChange={(e) => HandleChnage(e)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
