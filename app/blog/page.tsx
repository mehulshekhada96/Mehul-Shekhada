import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Mehul Shekhada",
  description: "Thoughts on SaaS building, system design, and the startup journey",
  openGraph: {
    title: "Blog | Mehul Shekhada",
    description: "Thoughts on SaaS building, system design, and the startup journey",
  },
};

export default function Blog() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-slate-400 mb-12 text-lg">
          Coming soon. I'll be sharing thoughts on SaaS building, system design, and the startup journey.
        </p>
        
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center">
          <p className="text-slate-300 mb-4">
            This blog is set up and ready for content. Future topics will include:
          </p>
          <ul className="text-slate-400 space-y-2 text-left max-w-md mx-auto">
            <li>• SaaS building strategies and lessons learned</li>
            <li>• System design patterns and architecture decisions</li>
            <li>• Startup journey and founder insights</li>
            <li>• Technical deep-dives on MERN stack development</li>
            <li>• AI agents and automation in SaaS products</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
