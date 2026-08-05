"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info & Mission */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2.5 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition duration-300">
                <RiRefund2Line className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                FundSpire
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Empowering creators and supporters to bring visionary projects, causes, and innovative products to life through community-driven crowdfunding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm mb-4 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/explore-campaigns" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Explore Campaigns</Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Login</Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Register</Link>
              </li>
            </ul>
          </div>

          {/* Trust & Safety */}
          <div>
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm mb-4 tracking-wider uppercase">Trust & Safety</h3>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Platform Guidelines</span></li>
              <li><span className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Creator Success Stories</span></li>
              <li><span className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Privacy Policy</span></li>
              <li><span className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">Terms of Service</span></li>
            </ul>
          </div>

          {/* Connect With Developer */}
          <div>
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm mb-4 tracking-wider uppercase">Connect With Developer</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Explore the repository source code or connect via professional channels.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/nayem0087" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 transition-all duration-300 shadow-sm"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nayem-ahmmed" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 transition-all duration-300 shadow-sm"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://x.com/NayemAhmmed87?t=hTPZMCKKEzfgmSgvi8iidg&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter Profile"
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 transition-all duration-300 shadow-sm"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear || "2026"} FundSpire Platform. All rights reserved.</p>
          <p className="flex items-center mt-3 sm:mt-0">
            Built with <FaHeart className="text-red-500 mx-1" size={12} /> for MERN Stack Project
          </p>
        </div>

      </div>
    </footer>
  );
}