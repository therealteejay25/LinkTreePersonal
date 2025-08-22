"use client";

import Image from "next/image";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const cards = [
    { src: "wa.svg", title: "WhatsApp", p: "Quick replies • Projects • Collabs", link: "https://wa.me/2348086789876" },
    { src: "x.svg", title: "X", p: "Hot takes • Late night commits • Building in public", link: "https://x.com/therealteejay25" },
    { src: "logo.svg", title: "Portfolio", p: "Case studies • Polished pixels • Design concepts", link: "https://tayo01.vercel.app" },
    { src: "insta.svg", title: "Instagram", p: "Design Drops • Visuals • BTS", link: "https://instagram.com/therealteejay25" },
    { src: "github.svg", title: "Github", p: "Real repos • Experiments • Shipping code in public", link: "https://github.com/therealteejay25" },
  ];

  return (
    <div className="bg-[#070707] text-white py-8 flex flex-col justify-center items-center min-h-screen w-screen overflow-x-hidden px-4 transition-all duration-500">

      {/* Header */}
      <div
        className={`my-6 rounded-3xl transition-all duration-700 w-full ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/header.png"
          alt="Header Image"
          height={140}
          width={800}
          className="rounded-3xl w-full h-auto object-contain
                     sm:h-32 sm:w-full
                     md:h-44 md:w-full
                     lg:h-48 lg:w-full"
        />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-5 w-full">
        {cards.map((card, i) => (
          <div className="w-full px-2" key={i}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
