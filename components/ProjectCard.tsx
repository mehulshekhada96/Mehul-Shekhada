"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  techStack: string[];
  outcome?: string;
  status?: string;
  link?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  problem,
  solution,
  techStack,
  outcome,
  status,
  link,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-indigo-500/50 transition-colors ${
        featured ? "ring-2 ring-indigo-500/20" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {status && (
          <span className="px-3 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 rounded-full">
            {status}
          </span>
        )}
      </div>
      <p className="text-slate-300 mb-4">{description}</p>
      
      {problem && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-400 mb-1">Problem</h4>
          <p className="text-slate-300 text-sm">{problem}</p>
        </div>
      )}
      
      {solution && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-400 mb-1">Solution</h4>
          <p className="text-slate-300 text-sm">{solution}</p>
        </div>
      )}
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-slate-400 mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {outcome && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-400 mb-1">Outcome</h4>
          <p className="text-slate-300 text-sm">{outcome}</p>
        </div>
      )}
      
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
        >
          View Project <ExternalLink className="ml-1 w-4 h-4" />
        </Link>
      )}
    </motion.div>
  );
}
