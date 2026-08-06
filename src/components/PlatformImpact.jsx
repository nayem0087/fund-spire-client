"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function AnimatedNumber({ from = 0, to, duration = 2, className, prefix = "", suffix = "" }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: false, amount: 0.5 });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = `${prefix}${Math.round(value)}${suffix}`;
        },
      });
      return () => controls.stop();
    } else {
      node.textContent = `${prefix}${from}${suffix}`;
    }
  }, [from, to, duration, prefix, suffix, isInView]);

  return <span ref={nodeRef} className={className} />;
}

export default function PlatformImpact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 w-full flex justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Main Card Container with Framer Motion Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center p-8 lg:p-12 gap-10 lg:gap-16 transition-colors duration-300"
      >
        
        {/* Background Glow Effect */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Left Side: Big Highlight with Motion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full relative z-10"
        >
           <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-500 leading-snug mb-2">
             Total Funds Raised
           </h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <AnimatedNumber
              from={0}
              to={15}
              duration={2.5}
              prefix="$"
              suffix="M+"
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600 leading-none"
            />
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
            Our platform connects visionary creators with passionate backers worldwide. We provide expert guidance, secure transactions, and transparent milestones to help bring breakthrough ideas to life efficiently.
          </p>
        </motion.div>

        {/* Right Side: 2x2 Grid with Staggered Motion */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex-1 w-full z-10"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm dark:shadow-inner hover:border-indigo-500/50 transition-colors duration-300"
            >
              <AnimatedNumber
                from={0}
                to={120}
                duration={2}
                suffix="k+"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2"
              />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Active Backers</span>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm dark:shadow-inner hover:border-indigo-500/50 transition-colors duration-300"
            >
              <AnimatedNumber
                from={0}
                to={1450}
                duration={2.5}
                suffix="+"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2"
              />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Projects Funded</span>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm dark:shadow-inner hover:border-indigo-500/50 transition-colors duration-300"
            >
              <AnimatedNumber
                from={0}
                to={200}
                duration={1.5}
                suffix="+"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2"
              />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Creative Categories</span>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-sm dark:shadow-inner hover:border-indigo-500/50 transition-colors duration-300"
            >
              <AnimatedNumber
                from={0}
                to={99}
                duration={2}
                suffix="%"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2"
              />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Success Rate</span>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}