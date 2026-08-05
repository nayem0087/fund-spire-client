"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiShield, FiTrendingUp } from "react-icons/fi";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "🚀 Powering Innovation",
      title: "Bring Visionary Ideas to Life",
      description: "Connect with passionate supporters worldwide. Fund your creative projects, sustainable causes, and breakthrough tech products securely.",
      primaryAction: { text: "Explore Campaigns", href: "/explore-campaigns" },
      secondaryAction: { text: "Start a Campaign", href: "/dashboard/add-campaign" },
      stats: { label: "TOTAL PLATFORM FUNDING", value: "$4.8M+" },
    },
    {
      id: 2,
      badge: "🌍 Community-Driven Causes",
      title: "Empowering Change That Matters",
      description: "Support social impact initiatives, community cleanups, and medical relief efforts backed by verified creators and transparent tracking.",
      primaryAction: { text: "Discover Causes", href: "/explore-campaigns?category=Community" },
      secondaryAction: { text: "Join as Supporter", href: "/register" },
      stats: { label: "SUCCESSFUL PROJECTS", value: "1,250+" },
    },
    {
      id: 3,
      badge: "💡 Tech & Product Launches",
      title: "Back Tomorrow’s Innovations Today",
      description: "Be the first to secure early-bird access to cutting-edge gadgets, indie games, and disruptive hardware inventions directly from creators.",
      primaryAction: { text: "Explore Tech", href: "/explore-campaigns?category=Technology" },
      secondaryAction: { text: "Learn How It Works", href: "/#how-it-works" },
      stats: { label: "ACTIVE CONTRIBUTORS", value: "35,000+" },
    },
  ];

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 min-h-[85vh] flex items-center justify-center transition-colors duration-300">
      
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/15 dark:bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[90%] mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase">
                <span>{slides[currentIndex].badge}</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {slides[currentIndex].title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {slides[currentIndex].description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href={slides[currentIndex].primaryAction.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/30 group text-sm"
                >
                  <span>{slides[currentIndex].primaryAction.text}</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={slides[currentIndex].secondaryAction.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold transition-all text-sm shadow-sm"
                >
                  <span>{slides[currentIndex].secondaryAction.text}</span>
                </Link>
              </div>

              {/* Trust Highlights */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <FiShield className="w-4 h-4 text-emerald-500" />
                  <span>Secure Credit Transactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiTrendingUp className="w-4 h-4 text-indigo-500" />
                  <span>Verified Creator Payouts</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Card with Up-Down Floating Animation */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full max-w-md"
              >
                <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl backdrop-blur-xl relative z-10">
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
                        FS
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">FundSpire Live Metric</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Verified Platform Status</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold animate-pulse">
                      Live Active
                    </span>
                  </div>

                  {/* Statistic Callout */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 mb-6">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                      {slides[currentIndex].stats.label}
                    </span>
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mt-1">
                      {slides[currentIndex].stats.value}
                    </div>
                  </div>

                  {/* Progress Bar Mockup */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
                      <span>Funding Milestones</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">92% Goal Reached</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-pink-500 h-full rounded-full w-[92%]"></div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Slider Controls / Pagination Dots */}
        <div className="flex items-center justify-center space-x-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-indigo-600"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}