"use client";
import React from "react";

import LogoCarousel from "./ui/logo-carousel";

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-18 px-4 sm:py-24 sm:px-4 md:py-24 md:px-12 lg:py-32 lg:px-20 bg-gray-600/80 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            The best are already here
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Join now
          </h1>
        </div>

        <LogoCarousel columnCount={3} />
      </div>
    </div>
  );
}

export default LogoCarouselDemo;
