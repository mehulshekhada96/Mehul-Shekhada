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
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-slate-400 mb-12 text-lg">
            Interested in freelance work, contract development, or collaboration? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-lg p-8"
          >
            <Mail className="w-8 h-8 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold text-white mb-3">Email</h2>
            <p className="text-slate-300 mb-4">
              For freelance inquiries, contract work, or general questions.
            </p>
            <a
              href="mailto:mehulshekhada96@gmail.com"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
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
            className="bg-slate-900 border border-slate-800 rounded-lg p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Connect</h2>
            <p className="text-slate-300 mb-6">
              Follow my work and connect on social platforms.
            </p>
            <div className="space-y-4 mb-6">
              <a
                href="https://github.com/mehulshekhada96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5 mr-3" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mehul-shekhada-6a6732123/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <ResumeDownload variant="link" />
            </div>
          </motion.div>
        </div>

        {/* Optional Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-900 border border-slate-800 rounded-lg p-8"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>
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
              className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
