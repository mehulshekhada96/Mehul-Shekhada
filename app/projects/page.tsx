import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Mehul Shekhada",
  description: "Explore my projects including Yard Management System, AI agents, development tools, and SaaS products",
  openGraph: {
    title: "Projects | Mehul Shekhada",
    description: "Explore my projects including Yard Management System, AI agents, development tools, and SaaS products",
  },
};

export default function Projects() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-slate-400 mb-8 sm:mb-12 text-base sm:text-lg">
          A collection of projects I've built, from SaaS products to developer tools.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Yard Management System - Featured */}
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

          {/* SellerOS - Early Stage */}
          <ProjectCard
            title="SellerOS"
            description="An Order Management System (OMS) + SaaS platform currently in early development."
            problem="Sellers need better tools to manage operations and scale efficiently."
            solution="Building a SaaS platform focused on automation and scalability for sellers."
            techStack={["Next.js", "TypeScript", "MongoDB", "Node.js", "SaaS Architecture"]}
            status="Early Stage"
          />

          {/* API Testing Agent */}
          <ProjectCard
            title="API Testing Agent"
            description="An AI-powered agent that automates API testing, reducing manual testing time and improving code quality."
            problem="Manual API testing is time-consuming, error-prone, and doesn't scale well as applications grow. Developers spend significant time writing and maintaining test suites."
            solution="An intelligent agent that understands API contracts, generates comprehensive test cases, executes them, and reports issues. It learns from existing test patterns and adapts to different API structures."
            techStack={["Python", "OpenAI API", "FastAPI", "Pytest", "AI Agents"]}
            outcome="Reduced API testing time by 70% and improved test coverage. The agent can handle complex scenarios and edge cases that would be tedious to test manually."
          />

          {/* MongoDB Upgrade Assistant */}
          <ProjectCard
            title="MongoDB Upgrade Assistant"
            description="A tool that helps developers safely upgrade MongoDB versions by analyzing codebases and identifying potential breaking changes."
            problem="Upgrading MongoDB versions is risky and time-consuming. Developers need to manually review documentation, check for deprecated features, and test extensively to avoid breaking changes."
            solution="An automated assistant that scans codebases, identifies MongoDB API usage patterns, cross-references with version changelogs, and provides actionable upgrade recommendations with code examples."
            techStack={["TypeScript", "Node.js", "AST Parsing", "MongoDB", "CLI Tools"]}
            outcome="Helped multiple teams upgrade MongoDB versions safely and efficiently. Reduced upgrade time from days to hours while minimizing the risk of breaking changes."
          />

          {/* System Tooling */}
          <ProjectCard
            title="System Tooling"
            description="Various development tools and utilities for improving developer workflows and system operations."
            problem="Development workflows often have repetitive tasks that can be automated."
            solution="Building tools that automate common development tasks and improve productivity."
            techStack={["TypeScript", "Node.js", "CLI Tools", "Automation"]}
            outcome="Created multiple tools that streamline development processes and reduce manual work."
          />
        </div>
      </div>
    </div>
  );
}
