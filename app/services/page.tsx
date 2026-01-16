import type { Metadata } from "next";
import { Code, Database, Layers, Zap, ArrowRight, Workflow } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Mehul Shekhada",
  description: "Freelance and contract development services: Backend development, SaaS MVP builds, and system architecture",
  openGraph: {
    title: "Services | Mehul Shekhada",
    description: "Freelance and contract development services: Backend development, SaaS MVP builds, and system architecture",
  },
};

const services = [
  {
    icon: Code,
    title: "Freelance / Contract Development",
    description: "Full-stack development services for startups and product companies. I work on a contract basis to help teams build and scale their products.",
    highlights: [
      "MERN Stack development",
      "Feature development and implementation",
      "Code reviews and technical consulting",
      "Flexible engagement models"
    ]
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Building robust, scalable backend systems and APIs. From database design to API architecture, I help create systems that scale.",
    highlights: [
      "RESTful and GraphQL APIs",
      "Database design and optimization",
      "Microservices architecture",
      "Performance optimization"
    ]
  },
  {
    icon: Layers,
    title: "SaaS MVP Builds",
    description: "Rapid development of SaaS MVPs from concept to launch. I help founders and teams build the foundation of their SaaS products.",
    highlights: [
      "End-to-end MVP development",
      "Multi-tenant architecture",
      "Payment integration",
      "User authentication and authorization"
    ]
  },
  {
    icon: Zap,
    title: "System Architecture & Consulting",
    description: "Technical consulting on system design, architecture decisions, and scaling strategies. I help teams make informed technical choices.",
    highlights: [
      "System design and architecture",
      "Scalability planning",
      "Technology stack recommendations",
      "Technical due diligence"
    ]
  },
  {
    icon: Workflow,
    title: "ETL & Data Integration",
    description: "Building robust data pipelines and ETL processes to sync data between systems. Real-time data synchronization and normalization for analytics and reporting.",
    highlights: [
      "Hevo Data integration with Python scripts",
      "MongoDB to PostgreSQL real-time sync",
      "Data normalization and transformation",
      "PostgreSQL crons, triggers, and functions"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services That{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Deliver Results
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto mb-2">
            I help startups and product companies build scalable, production-ready systems.
          </p>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">
            From backend development to full SaaS MVPs, I deliver solutions that scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 sm:p-8 transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-lg mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start">
                      <span className="text-indigo-400 mr-2 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8 sm:p-12 text-center shadow-xl shadow-indigo-500/5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>
          <p className="text-slate-300 mb-2 max-w-2xl mx-auto text-base sm:text-lg">
            I'm available for <strong className="text-indigo-400">freelance</strong> and <strong className="text-indigo-400">contract work</strong>.
          </p>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Let's discuss your project and how I can help bring your vision to life with scalable, production-ready code.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
