"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

type CardType = {
  src: string;
  title: string;
  p: string;
  link: string;
};

export const Card = ({ title, src, p, link }: CardType) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setTooltipOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setTooltipOpen(false);

    const toast = document.createElement("div");
    toast.innerText = "Copied!";
    toast.className =
      "fixed top-5 right-5 bg-white/20 text-white px-4 py-2 rounded-md animate-fadein z-50";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1000);
  };

  return (
    <div className="relative max-w-xl mx-auto">
      {/* Card */}
      <div
        className="border border-white/10 p-3 sm:p-3 md:p-4 bg-white/5 backdrop-blur-2xl rounded-xl max-w-xl mx-auto w-full flex justify-between items-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div
          className="flex gap-3 sm:gap-3 md:gap-4 items-center"
          onClick={() => window.open(link, "_blank")}
        >
          <Image
            src={src}
            alt={title}
            height={40}
            width={40}
            className="sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
          <div>
            <h1 className="text-base sm:text-base md:text-lg font-medium">{title}</h1>
            <p className="text-xs sm:text-xs md:text-sm text-white/50">{p}</p>
          </div>
        </div>

        {/* Menu icon */}
        <Image
          src="/menu.svg"
          alt="Menu"
          height={28}
          width={28}
          className="sm:h-6 sm:w-6 md:h-8 md:w-8 opacity-70 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setTooltipOpen((prev) => !prev);
          }}
        />
      </div>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className={`absolute right-3 top-12 bg-[#1a1a1a] text-white px-3 py-1.5 rounded-md text-xs md:text-sm shadow-md z-50 cursor-pointer select-none transition-all duration-200 ${
          tooltipOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
        onClick={handleCopy}
      >
        Copy Link
      </div>
    </div>
  );
};
