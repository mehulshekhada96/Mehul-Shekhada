"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Code, Database, Zap, Layers, ArrowRight, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-slate-400 text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-slate-400 text-sm sm:text-base">Production Systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-slate-400 text-sm sm:text-base">Available Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Fast
              </div>
              <div className="text-slate-400 text-sm sm:text-base">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">About</h2>
          <p className="text-base sm:text-lg text-slate-300 mb-4">
            I'm a Software Engineer (MERN Stack | Backend-Focused) with 5+ years of experience building scalable, 
            production-grade systems for product-based companies. Currently at <strong className="text-indigo-400">PortPro Technologies</strong>, 
            I build critical backend modules for a US-based logistics product, working with multi-service architecture, 
            high traffic, and complex data flows.
          </p>
          <p className="text-base sm:text-lg text-slate-300 mb-4">
            My approach centers on ownership, problem-solving, and delivering complex features independently. 
            I believe in building leverage through software—creating systems that compound value over time.
          </p>
          <p className="text-slate-400">
            <strong className="text-white">5+ years</strong> of experience · Software Engineer at PortPro Technologies · 
            Backend-focused · Systems & product thinking
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center mt-6 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-lg text-indigo-400 hover:text-indigo-300 font-medium transition-all"
          >
            Read more about my journey
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-20 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-lg mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Code className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Backend Development</h3>
              <p className="text-slate-400 text-sm">
                Node.js, Express.js, Hapi.js, REST APIs, Webhooks, Microservices Architecture
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-lg mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Database className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Database & DevOps</h3>
              <p className="text-slate-400 text-sm">
                MongoDB (Replica Sets, Clusters, Sharded), PostgreSQL, Docker, CI/CD
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-lg mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Layers className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Frontend</h3>
              <p className="text-slate-400 text-sm">
                React.js, Next.js, Redux, Context API, Tailwind CSS, Material UI
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-lg mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">System Design</h3>
              <p className="text-slate-400 text-sm">
                API debugging, performance optimization, LLM-assisted development
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 text-center transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-lg mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Workflow className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ETL & Data Integration</h3>
              <p className="text-slate-400 text-sm">
                Hevo Data, MongoDB to PostgreSQL sync, data normalization, Python scripts, cron jobs, triggers, functions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/5 rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Featured Project</h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A production system I built at PortPro Technologies for managing complex logistics operations.
            </p>
          </div>
          <ProjectCard
            title="Yard Management System"
            description="Designed and built a comprehensive Yard Management System for a logistics & drayage TMS to manage real-time yard operations. This production system handles complex yard logistics with visual design tools, real-time synchronization, and full TMS integration."
            problem="Logistics and drayage operations needed a way to manage yard operations in real-time, including visual yard layout design, gate operations, driver check-ins, yard moves, inspections, and planning—all synchronized across multiple teams and integrated with the main TMS."
            solution="Built a full-featured yard management system with multiple modules: visual drag-and-drop yard builder (Figma-like interface), real-time inventory tracking (Map & List views), automated gate check-in/check-out workflows, driver self check-in, yard move management (repositioning, stacking, grounding, mounting), yard check/audit system, inbound/outbound planning, recommended moves, dock scheduling, and complete TMS integration with bidirectional data sync."
            techStack={["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Real-time Sync", "Microservices", "TMS Integration"]}
            outcome="Successfully deployed production system that streamlines yard operations, reduces manual errors, and provides real-time visibility into yard state for logistics teams. Handles high traffic and complex data flows in a multi-service architecture. Features include visual yard builder, real-time inventory tracking, automated gate operations, yard move management, audit systems, and seamless TMS integration."
            status="Production"
            featured={true}
          />
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
