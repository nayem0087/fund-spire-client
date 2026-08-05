"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiBell, FiUser, FiLogOut, FiGithub, FiSun, FiMoon } from "react-icons/fi";
import { RiRefund2Line } from "react-icons/ri";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("Supporter");
  const [availableCredits, setAvailableCredits] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const githubRepoUrl = "https://github.com/your-username/your-client-repo";

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.removeAttribute("data-theme");
    }
  };

  useEffect(() => {
    const handleOutsideClick = () => setNotificationsOpen(false);
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Website Name */}
          <div className="flex-shrink-0">
            <Link 
              href={isLoggedIn ? "/dashboard" : "/"} 
              className="flex items-center space-x-2.5 group"
            >
              {/* Professional Logo Icon with RiRefund2Line */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition duration-300">
                <RiRefund2Line className="w-6 h-6 text-white" />
              </div>

              {/* Brand Name */}
              <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                FundSpire
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center space-x-5">
            {!isLoggedIn ? (
              <>
                <Link href="/explore-campaigns" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium">
                  Explore Campaigns
                </Link>
                <Link href="/login" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium">
                  Login
                </Link>
                <Link href="/register" className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition font-medium shadow-lg shadow-indigo-500/20">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link href="/explore-campaigns" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium">
                  Explore Campaigns
                </Link>
                <Link href="/dashboard" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium">
                  Dashboard
                </Link>

                {/* Available Credits Badge */}
                <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{availableCredits} Credits</span>
                </div>

                {/* Notification Icon & Dropdown */}
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition relative"
                  >
                    <FiBell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
                  </button>

                  {notificationsOpen && (
                    <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl p-4 text-sm z-50">
                      <div className="flex justify-between items-center mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
                        <h4 className="font-semibold text-slate-800 dark:text-white">Notifications</h4>
                        <span className="text-xs text-indigo-600 dark:text-indigo-400 cursor-pointer">Mark all as read</span>
                      </div>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                          <p className="text-slate-600 dark:text-slate-300 text-xs">Your contribution of 50 credits was approved!</p>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* User Profile & Logout */}
                <div className="flex items-center space-x-3 border-l border-slate-200 dark:border-slate-800 pl-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold overflow-hidden">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <button 
                    onClick={() => setIsLoggedIn(false)}
                    className="p-2 rounded-lg bg-red-500/10 text-red-500 dark:text-red-400 hover:bg-red-500/20 transition"
                    title="Logout"
                  >
                    <FiLogOut className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition shadow-sm"
              title="Toggle Theme"
            >
              {isDarkMode ? <FiSun className="w-5 h-5 text-amber-400" /> : <FiMoon className="w-5 h-5 text-indigo-600" />}
            </button>

            {/* Join as Developer Button */}
            <a 
              href={'https://github.com/nayem0087/fund-spire-client'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition font-medium text-sm"
            >
              <FiGithub className="w-4 h-4" />
              <span>Join as Developer</span>
            </a>
          </nav>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <FiSun className="w-5 h-5 text-amber-400" /> : <FiMoon className="w-5 h-5 text-indigo-600" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {!isLoggedIn ? (
            <>
              <Link href="/explore-campaigns" className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Explore Campaigns</Link>
              <Link href="/login" className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Login</Link>
              <Link href="/register" className="block px-3 py-2 rounded-lg bg-indigo-600 text-white text-center">Register</Link>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between px-3 py-2 bg-slate-100 dark:bg-slate-800/60 rounded-lg">
                <span className="text-slate-600 dark:text-slate-300 text-sm">Credits Available:</span>
                <span className="text-emerald-500 font-bold">{availableCredits}</span>
              </div>
              <Link href="/explore-campaigns" className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Explore Campaigns</Link>
              <Link href="/dashboard" className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Dashboard</Link>
              <button onClick={() => setIsLoggedIn(false)} className="w-full text-left px-3 py-2 rounded-lg text-red-500 dark:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800">Logout</button>
            </>
          )}
          <a 
            href={githubRepoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium text-sm"
          >
            <FiGithub className="w-4 h-4" />
            <span>Join as Developer</span>
          </a>
        </div>
      )}
    </header>
  );
}