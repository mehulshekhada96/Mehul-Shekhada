import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Code, Database, Zap, Layers } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">About</h2>
          <p className="text-lg text-slate-300 mb-4">
            I'm a Software Engineer (MERN Stack | Backend-Focused) with 5+ years of experience building scalable, 
            production-grade systems for product-based companies. Currently at <strong className="text-indigo-400">PortPro Technologies</strong>, 
            I build critical backend modules for a US-based logistics product, working with multi-service architecture, 
            high traffic, and complex data flows.
          </p>
          <p className="text-lg text-slate-300 mb-4">
            My approach centers on ownership, problem-solving, and delivering complex features independently. 
            I believe in building leverage through software—creating systems that compound value over time.
          </p>
          <p className="text-slate-400">
            <strong className="text-white">5+ years</strong> of experience · Software Engineer at PortPro Technologies · 
            Backend-focused · Systems & product thinking
          </p>
          <Link
            href="/about"
            className="inline-block mt-6 text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Read more about my journey →
          </Link>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center">
              <Code className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Backend Development</h3>
              <p className="text-slate-400 text-sm">
                Node.js, Express.js, Hapi.js, REST APIs, Webhooks, Microservices Architecture
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center">
              <Database className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Database & DevOps</h3>
              <p className="text-slate-400 text-sm">
                MongoDB (Replica Sets, Clusters, Sharded), PostgreSQL, Docker, CI/CD
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center">
              <Layers className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Frontend</h3>
              <p className="text-slate-400 text-sm">
                React.js, Next.js, Redux, Context API, Tailwind CSS, Material UI
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-center">
              <Zap className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">System Design</h3>
              <p className="text-slate-400 text-sm">
                API debugging, performance optimization, LLM-assisted development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Project</h2>
            <p className="text-slate-400 text-lg">
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
