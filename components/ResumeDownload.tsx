"use client";

import { Download } from "lucide-react";
import { useState } from "react";

interface ResumeDownloadProps {
  variant?: "button" | "link" | "icon";
  className?: string;
}

export default function ResumeDownload({ 
  variant = "button",
  className = "" 
}: ResumeDownloadProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Try multiple possible file names
    const possibleFiles = [
      "/Mehul_Shekhada_Resume.pdf",
      "/resume.pdf",
      "/Mehul-Shekhada-Resume.pdf",
      "/CV.pdf"
    ];

    // Find the first existing file or use the first one as default
    const resumePath = possibleFiles[0];
    
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Mehul_Shekhada_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => setDownloading(false), 1000);
  };

  if (variant === "icon") {
    return (
      <a
        href="/Mehul_Shekhada_Resume.pdf"
        download="Mehul_Shekhada_Resume.pdf"
        className={`text-slate-400 hover:text-indigo-400 transition-colors ${className}`}
        aria-label="Download Resume"
        onClick={(e) => {
          e.preventDefault();
          handleDownload();
        }}
      >
        <Download className="w-5 h-5" />
      </a>
    );
  }

  if (variant === "link") {
    return (
      <a
        href="/Mehul_Shekhada_Resume.pdf"
        download="Mehul_Shekhada_Resume.pdf"
        className={`inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors ${className}`}
        onClick={(e) => {
          e.preventDefault();
          handleDownload();
        }}
      >
        <Download className="w-4 h-4 mr-2" />
        {downloading ? "Downloading..." : "Download Resume"}
      </a>
    );
  }

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className={`inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white font-medium rounded-lg transition-colors ${className}`}
    >
      <Download className="w-4 h-4 mr-2" />
      {downloading ? "Downloading..." : "Download Resume"}
    </button>
  );
}
