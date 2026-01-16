"use client";

import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ResumeDownload from "@/components/ResumeDownload";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>
          <p className="text-slate-300 mb-2 text-lg sm:text-xl max-w-2xl mx-auto">
            Ready to turn your idea into a production-ready system?
          </p>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            I'm available for <strong className="text-indigo-400">freelance work</strong>, <strong className="text-indigo-400">contract development</strong>, and <strong className="text-indigo-400">long-term partnerships</strong>. 
            Let's discuss how I can help bring your project to life.
          </p>
        </motion.div>

        {/* Why Work With Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Why Work With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-400 mb-2">5+ Years</div>
              <div className="text-slate-300 text-sm">Production Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-400 mb-2">Fast Turnaround</div>
              <div className="text-slate-300 text-sm">Quick Response & Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-400 mb-2">Full Ownership</div>
              <div className="text-slate-300 text-sm">End-to-End Development</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 sm:p-8 transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-lg mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <Mail className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-3">Direct Email</h2>
            <p className="text-slate-300 mb-4 text-sm">
              For project inquiries, contract work, or quick questions. I typically respond within 24 hours.
            </p>
            <a
              href="mailto:mehulshekhada96@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 hover:border-indigo-500/50 rounded-lg text-indigo-400 hover:text-indigo-300 font-medium transition-all"
            >
              mehulshekhada96@gmail.com
              <Send className="ml-2 w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 sm:p-8 transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Connect & Learn More</h2>
            <p className="text-slate-300 mb-6 text-sm">
              Check out my work, connect on professional networks, or download my resume.
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="https://github.com/mehulshekhada96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-lg text-slate-300 hover:text-white transition-all"
              >
                <Github className="w-5 h-5 mr-3" />
                <span>View My Code</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mehul-shekhada-6a6732123/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-lg text-slate-300 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <ResumeDownload variant="link" />
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 hover:border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-xl shadow-indigo-500/5"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Send Me a Message</h2>
            <p className="text-slate-400 text-sm">
              Tell me about your project, timeline, and requirements. I'll get back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                placeholder="Your message..."
              />
            </div>
            
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-indigo-800 disabled:to-purple-800 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-[1.02] disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
