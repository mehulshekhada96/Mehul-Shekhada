import type { Metadata } from "next";
import { Target, Lightbulb, Rocket } from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";
import ResumeDownload from "@/components/ResumeDownload";

export const metadata: Metadata = {
  title: "About | Mehul Shekhada",
  description: "Software Engineer with 5+ years of experience. Currently at PortPro Technologies building backend systems for logistics products. Learn about my journey, experience, and achievements.",
  openGraph: {
    title: "About | Mehul Shekhada",
    description: "Software Engineer with 5+ years of experience. Currently at PortPro Technologies building backend systems for logistics products. Learn about my journey, experience, and achievements.",
  },
};

export default function About() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
          <ProfilePhoto size="lg" />
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">About</h1>
              <ResumeDownload variant="button" className="w-full sm:w-auto" />
            </div>
            <p className="text-slate-300 text-base sm:text-lg">
              Software Engineer (MERN Stack | Backend-Focused) with 5+ years of experience building scalable, 
              production-grade systems. Currently at <strong className="text-indigo-400">PortPro Technologies</strong>, 
              building critical backend modules for a US-based logistics product. Focused on backend systems, 
              microservices architecture, and creating solutions that scale.
            </p>
          </div>
        </div>
        
        {/* Journey Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">My Journey</h2>
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Engineering Background</h3>
              <p>
                I've spent 5+ years as a Software Engineer, working in product-based companies where I've built 
                and scaled production-grade systems that serve real users. This experience taught me the importance 
                of clean architecture, performance optimization, and delivering complex features independently.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">PortPro Technologies (Nov 2021 – Present)</h3>
              <p>
                At <strong className="text-indigo-400">PortPro Technologies</strong>, I build and maintain critical backend 
                modules for a US-based logistics product. My work involves multi-service architecture, high traffic, 
                and complex data flows. I've led development on multiple features including:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300">
                <li><strong className="text-indigo-400">Yard Management System</strong> - Full-featured system with visual yard builder, gate operations, and real-time synchronization</li>
                <li><strong className="text-indigo-400">ETL & Data Integration</strong> - Built real-time data synchronization from MongoDB to PostgreSQL using Hevo Data with Python scripts, normalized arrays using PostgreSQL crons, triggers, and functions</li>
                <li>API-driven flows and route optimization</li>
                <li>Invoicing components and integrations</li>
                <li>Internal tools and system improvements</li>
              </ul>
              <p className="mt-3">
                I've coordinated with cross-functional teams across India and Nepal, improved performance, reduced bugs, 
                and contributed to long-term architecture decisions. I've also played a key role in modernizing legacy 
                code, maintaining backward compatibility, and planning MongoDB 6 to 8 upgrades.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Previous Experience</h3>
              <p>
                Before PortPro, I worked as a Software Engineer Intern at <strong className="text-indigo-400">Lathiya Solutions</strong> 
                (June 2021 - November 2021), where I learned to build ticket booking applications with React Native 
                and successfully integrated APIs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
              <p>
                Bachelor of Engineering from <strong className="text-indigo-400">Government Engineering College, Surat</strong> 
                (Graduated 2017)
              </p>
              <p className="mt-2 text-slate-400 text-sm">
                Based in Surat, Gujarat, India
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">SaaS & Product Building</h3>
              <p>
                I'm currently building <strong className="text-indigo-400">SellerOS</strong>, an early-stage 
                Order Management System with SaaS capabilities. This project represents my long-term interest 
                in SaaS and systems that help businesses scale efficiently.
              </p>
              <p className="mt-3">
                Beyond this, I'm interested in building products that solve real problems and create lasting 
                value through thoughtful engineering and product thinking.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <Target className="w-6 h-6 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Long-Term Thinking</h3>
              <p className="text-slate-300 text-sm">
                I believe in building systems that compound value over time. Every decision is made with 
                scalability, maintainability, and future growth in mind.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <Lightbulb className="w-6 h-6 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Building Leverage</h3>
              <p className="text-slate-300 text-sm">
                Software is leverage. By creating systems that automate repetitive work, we free up time 
                and energy to focus on what truly matters—innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements & Strengths */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">Achievements & Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Received major salary increments three consecutive years for high performance</li>
                <li>• Delivered high-priority modules under strict deadlines</li>
                <li>• Successfully managed cross-team coordination (India/Nepal)</li>
                <li>• Trusted for ownership and product understanding</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Core Strengths</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Strong problem-solving abilities</li>
                <li>• Ownership mindset</li>
                <li>• Calm under pressure</li>
                <li>• Fast learning & adaptable</li>
                <li>• End-to-end development capability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section>
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-6 sm:p-8">
            <Rocket className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Current Focus</h3>
            <p className="text-slate-300 mb-4">
              I'm focused on building scalable backend systems and SaaS products. Beyond my work at PortPro, 
              I'm building <strong className="text-indigo-400">SellerOS</strong>, an early-stage Order Management 
              System with SaaS capabilities. I'm also available for freelance and contract development work.
            </p>
            <p className="text-slate-300">
              I'm always interested in working with teams that value clean architecture, thoughtful 
              engineering, and building products that matter.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
