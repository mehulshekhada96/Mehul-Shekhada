"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Profile Photo Component
 * 
 * To change the photo:
 * 1. Replace the image file at /public/mehul-photo.png (or update the path below)
 * 2. Update the alt text if needed
 * 3. Adjust size classes if needed (w-32 h-32, w-40 h-40, etc.)
 * 
 * Supported formats: JPG, PNG, WebP
 * Recommended size: 400x400px or larger (square aspect ratio)
 */
export default function ProfilePhoto({ 
  size = "md",
  className = "" 
}: { 
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-40 h-40"
  };

  if (imageError) {
    return (
      <div className={`${sizeClasses[size]} ${className} rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center`}>
        <span className="text-slate-500 text-sm">Photo</span>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <Image
        src="/mehul-photo.png"
        alt="Mehul Shekhada"
        fill
        className="rounded-full object-cover border-2 border-slate-700"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
}
