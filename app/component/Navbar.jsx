"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { GetCookies } from "../module/GetCookies";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [cookies, setcookies] = useState(false);

  useEffect(() => {
    async function getCookies() {
      const res = await GetCookies();
      if (res) {
        setcookies(true);
      } else {
        setcookies(false);
      }
    }

    getCookies();

    return () => {
      setcookies(false);
    };
  }, []);
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  return (
    <header className=" bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200  dark:bg-gray-900 shadow-2xl shadow-gray-300 border w-full rouned-xl md:w-full ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center  font-basic text-2xl ">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          PageLink
        </Link>

        {/* Menu Toggle (Mobile) */}
        <button
          className="lg:hidden text-gray-700 dark:text-gray-300"
          onClick={handleMenuToggle}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col  z-1   lg:flex lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0`}
        >
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </Link>
          {cookies ? (
            <>
              <Link
                href="/Dashboard"
                className="text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Dashboard
              </Link>
              <Link
                href="/Logout"
                className="text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Login
              </Link>
            </>
          )}
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-400" size={20} />
          ) : (
            <FaMoon className="text-gray-700" size={20} />
          )}
        </button>
      </div>
    </header>
  );
}
