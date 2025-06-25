"use client"
import React from "react"

import LogoCarousel from "./ui/logo-carousel"

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-18 px-12 bg-gray-600/80 backdrop-blur-sm">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            The best are already here
          </h1>
          <a href="https://www.newcult.co" target="_blank">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Join new cult</h1>
          </a>
        </div>

        <LogoCarousel columnCount={3} />
      </div>
    </div>
  )
}

export default LogoCarouselDemo

