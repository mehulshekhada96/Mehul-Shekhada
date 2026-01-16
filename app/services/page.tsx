import type { Metadata } from "next";
import { Code, Database, Layers, Zap } from "lucide-react";
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
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Services</h1>
          <p className="text-slate-400 text-lg max-w-3xl">
            I offer freelance and contract development services to help teams build scalable products. 
            Whether you need backend development, a SaaS MVP, or architectural consulting, I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-indigo-500/50 transition-colors"
              >
                <Icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in Working Together?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            I'm available for freelance and contract work. Let's discuss how I can help 
            build your product or improve your systems.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
