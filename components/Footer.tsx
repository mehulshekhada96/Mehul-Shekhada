import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import ResumeDownload from "./ResumeDownload";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Mehul Shekhada. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex space-x-6">
              <a
                href="https://github.com/mehulshekhada96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mehul-shekhada-6a6732123/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mehulshekhada96@gmail.com"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <ResumeDownload variant="icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
