"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiUserPlus, FiEdit3, FiTrendingUp, FiArrowRight, FiChevronDown } from "react-icons/fi";

function StepCard({ step }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-2xl hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative group"
    >
      <div>
        {/* Top Row: Step Number & Icon */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {step.icon}
          </div>
          <span className="text-4xl font-black text-slate-200 dark:text-slate-800 group-hover:text-indigo-500/25 transition-colors">
            {step.id}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {step.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {step.description}
        </p>

        {/* Shortcut Expanded Details */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 pb-2 text-xs sm:text-sm text-indigo-600 dark:text-indigo-300 bg-indigo-50/50 dark:bg-indigo-950/30 p-3.5 rounded-xl border border-indigo-100 dark:border-indigo-900/50 mb-2 leading-relaxed">
                <span className="font-semibold block mb-1">Quick Note:</span>
                {step.extraDetails}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Learn More Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 w-full focus:outline-none group/btn cursor-pointer"
      >
        <span className="group-hover/btn:underline">{isOpen ? "Show less" : "Learn more"}</span>
        <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
    </motion.div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      icon: <FiUserPlus className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Create an Account",
      description: "Sign up in seconds as a creator or backer. Set up your secure profile to start exploring or launching campaigns.",
      extraDetails: "Provide valid details during signup for instant profile verification and secure dashboard access.",
    },
    {
      id: "02",
      icon: <FiEdit3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Launch or Back a Campaign",
      description: "Submit your breakthrough project details with funding goals, or browse through verified causes and innovations to support.",
      extraDetails: "Set clear milestones and high-res imagery to attract your first wave of backers effortlessly.",
    },
    {
      id: "03",
      icon: <FiTrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Track & Achieve Goals",
      description: "Monitor live funding progress with transparent milestones, secure transactions, and bring visionary ideas to life.",
      extraDetails: "Funds are securely released upon hitting verified project milestones with zero hidden friction.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 w-full relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Simple & Transparent Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How FundSpire Works
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Whether you are raising funds for a creative vision or backing tomorrow's innovations, getting started takes just three easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* Bottom Call to Action with smooth up-down motion animation (text completely stable) */}
        <div className="mt-16 text-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Link
              href="/register"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-xl shadow-indigo-600/30 text-sm group"
            >
              <span>Get Started Today</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}