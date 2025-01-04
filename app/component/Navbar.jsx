"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          MyApp
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
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0`}
        >
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </Link>
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
