"use client";

import Link from "next/link";
import { FiHome, FiArrowLeft, FiCompass } from "react-icons/fi";
import { RiRefund2Line } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-white dark:bg-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full text-center space-y-8 py-12">
        
        {/* Brand Logo Watermark / Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-xl shadow-indigo-500/30 animate-bounce duration-1000">
            <RiRefund2Line className="w-9 h-9 text-white" />
          </div>
        </div>

        {/* 404 Typography */}
        <div className="space-y-3">
          <h1 className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            Oops! The campaign, page, or link you are looking for might have been removed, renamed, or doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/25 text-sm"
          >
            <FiHome className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}