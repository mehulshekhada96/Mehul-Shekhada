"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import ResumeDownload from "./ResumeDownload";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pb-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-slate-950 to-purple-950/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      {/* Animated background icons */}
      <AnimatedBackground />
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Available for Contract Work
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          I build{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            scalable SaaS products
          </span>{" "}
          & backend systems
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto"
        >
          Senior MERN Stack Developer with <strong className="text-white">5+ years</strong> of experience building production-grade systems. 
          <br className="hidden sm:block" />
          <span className="text-indigo-400">Available for freelance & contract work.</span>
        </motion.p>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-indigo-400" />
            <span>5+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-indigo-400" />
            <span>Production Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-indigo-400" />
            <span>Available Now</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 w-full sm:w-auto"
          >
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm text-white font-semibold rounded-xl transition-all border border-slate-700 hover:border-slate-600 w-full sm:w-auto"
          >
            View My Work
          </Link>
          <ResumeDownload variant="button" className="bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm border border-slate-700 hover:border-slate-600 w-full sm:w-auto rounded-xl font-semibold" />
        </motion.div>
      </div>
    </section>
  );
}
