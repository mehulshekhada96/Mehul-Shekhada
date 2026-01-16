"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  Package, 
  Warehouse, 
  FileText, 
  Database, 
  Code, 
  Zap, 
  Layers,
  Workflow,
  BarChart3,
  Settings,
  Globe,
  Server,
  Boxes,
  MapPin,
  Receipt
} from "lucide-react";

const icons = [
  { Icon: Truck, label: "TMS", delay: 0, x: "8%", y: "18%", size: "md" as const },
  { Icon: Warehouse, label: "YMS", delay: 0.2, x: "88%", y: "12%", size: "md" as const },
  { Icon: Package, label: "Logistics", delay: 0.4, x: "18%", y: "58%", size: "md" as const },
  { Icon: Receipt, label: "Billing", delay: 0.6, x: "78%", y: "52%", size: "md" as const },
  { Icon: Database, label: "Database", delay: 0.8, x: "48%", y: "22%", size: "lg" as const },
  { Icon: Code, label: "Backend", delay: 1, x: "12%", y: "82%", size: "md" as const },
  { Icon: Zap, label: "Performance", delay: 1.2, x: "82%", y: "72%", size: "md" as const },
  { Icon: Layers, label: "Architecture", delay: 1.4, x: "42%", y: "68%", size: "md" as const },
  { Icon: Workflow, label: "ETL", delay: 1.6, x: "28%", y: "38%", size: "md" as const },
  { Icon: BarChart3, label: "Analytics", delay: 1.8, x: "68%", y: "32%", size: "md" as const },
  { Icon: Settings, label: "DevOps", delay: 2, x: "3%", y: "48%", size: "sm" as const },
  { Icon: Globe, label: "APIs", delay: 2.2, x: "92%", y: "58%", size: "sm" as const },
  { Icon: Server, label: "Infrastructure", delay: 2.4, x: "22%", y: "8%", size: "sm" as const },
  { Icon: Boxes, label: "Microservices", delay: 2.6, x: "72%", y: "88%", size: "sm" as const },
  { Icon: MapPin, label: "Location", delay: 2.8, x: "52%", y: "92%", size: "sm" as const },
  { Icon: FileText, label: "Documentation", delay: 3, x: "38%", y: "3%", size: "sm" as const },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((item, index) => {
        const Icon = item.Icon;
        const sizeClasses = {
          sm: "w-5 h-5 sm:w-6 sm:h-6",
          md: "w-6 h-6 sm:w-8 sm:h-8",
          lg: "w-8 h-8 sm:w-10 sm:h-10",
        };
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.15, 0.35, 0.15],
              scale: [1, 1.15, 1],
              y: [0, -25, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 5 + index * 0.2,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative group cursor-pointer pointer-events-auto">
              <div className="absolute inset-0 bg-indigo-400/10 rounded-full blur-md group-hover:bg-indigo-400/20 transition-colors -z-10"></div>
              <Icon className={`relative ${sizeClasses[item.size]} text-indigo-400/30 group-hover:text-indigo-400/60 transition-all duration-300 z-10`} />
              <motion.div 
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
                initial={{ y: 5 }}
                whileHover={{ y: 0 }}
              >
                <span className="text-xs text-indigo-300 whitespace-nowrap bg-slate-900/90 backdrop-blur-sm border border-indigo-500/30 px-2 py-1 rounded-md shadow-lg">
                  {item.label}
                </span>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
      
      {/* Additional floating particles */}
      {[...Array(20)].map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-indigo-400/10 rounded-full"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
